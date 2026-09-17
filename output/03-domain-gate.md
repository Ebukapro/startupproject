# Agent 3 — Domain Gate: **BLOCKED, NOT RUN**

**Status: the gate could not be run in this environment. No candidate has a
verified domain status. Zero names are CLEAR, zero are PARTIAL, zero are BLOCKED —
all 120 are UNVERIFIED.**

The brief's instruction for this case is explicit and was followed:

> "If RDAP is unreachable, fall back to `whois`. If both fail, stop and report.
> **Do not proceed on unverified domain data.**"

Both failed. This file records why, what was tried, and exactly how to finish the
gate in about three minutes on any unrestricted machine.

---

## 1. What blocks it

This session runs behind a policy-enforcing egress proxy. The authoritative RDAP
servers are denied at the CONNECT layer by organization policy (HTTP 403 from the
gateway), and outbound TCP/43 — which `whois` needs — is not routed at all.

| Method | Endpoint | Result |
|---|---|---|
| RDAP `.com` | `rdap.verisign.com` | **403 CONNECT denied** (org egress policy) |
| RDAP `.app` | `pubapi.registry.google` | **403 CONNECT denied** |
| RDAP `.africa` | `rdap.nic.africa` | **403 CONNECT denied** |
| RDAP `.ng` / `.com.ng` | `rdap.nic.net.ng` | **403 CONNECT denied** |
| RDAP bootstrap | `data.iana.org/rdap/dns.json` | **403 CONNECT denied** |
| RDAP mirror | `www.rdap.net` | **403 CONNECT denied** |
| `whois` (TCP/43) | `whois.verisign-grs.com` | **timeout** — port 43 not routed |
| `whois` (TCP/43) | `whois.nic.io` | **timeout** — port 43 not routed |

The `whois` binary was absent and was installed successfully (`whois 5.5.22`), so
the failure is network policy, not tooling. `rdap.org` itself *is* reachable, which
matters for the next section.

The proxy README is unambiguous that these are policy denials, not transient
faults: *"The destination host is not allowed by your organization's egress policy
for this session. Do not retry or route around it — report the blocked host."*

**This is not fixable from inside the session.** It needs either an egress policy
that allows the RDAP hosts above, or a run on an unrestricted machine.

---

## 2. A defect in the brief's script — read this before trusting any domain CSV

The gate script supplied in the brief would **not** have produced correct results
even on an unrestricted network. It has three independent defects, and two of them
fail *silently, in the dangerous direction* — reporting registered domains as free.

```bash
# the brief's script, abridged
code=$(curl -s -m 8 -o /dev/null -w "%{http_code}" "https://rdap.org/domain/$n.$tld")
case "$code" in 404) FREE ;; 200) TAKEN ;; *) UNKNOWN ;; esac
```

**Defect 1 — no `-L`, so every lookup lands in UNKNOWN.**
`rdap.org` is a *redirect* service, not an RDAP server. It answers `302` with a
`Location:` header pointing at the registry. Verified here:

```
$ curl -s -D- https://rdap.org/domain/google.com
HTTP/2 302
location: https://rdap.verisign.com/com/v1/domain/google.com
```

Without `-L` the status is `302`, which is neither `404` nor `200`, so **all 120
names × 7 TLDs would return UNKNOWN.**

**Defect 2 — `404` does not mean "available". This is the serious one.**
For any TLD it has no mapping for, `rdap.org` returns `404` with this body:

```json
{"rdapConformance":["rdap_level_0"],"lang":"en","errorCode":404,
 "title":"No RDAP service is available for this resource"}
```

That is "I cannot answer", not "the domain is free". The brief's script reads it as
**FREE**. Verified against four domains that are unquestionably registered:

| Domain | Registered? | Brief's script says | Correct answer |
|---|---|---|---|
| `nike.co` | yes | **FREE** ❌ | TAKEN |
| `angel.co` | yes | **FREE** ❌ | TAKEN |
| `github.io` | yes | **FREE** ❌ | TAKEN |
| `nic.io` | yes | **FREE** ❌ | TAKEN |

Every `.co` and `.io` in the run would have come back FREE. The brief itself names
this as the worst possible outcome — *"A name recommended on a wrong domain finding
costs more than one rejected in error"* — and the supplied script produces it by
default.

**Defect 3 — no controls.** Nothing in the script tells the operator whether the
lookups meant anything. A blocked network, a rate limit or a dead registry all
degrade into a clean-looking CSV full of FREEs. In *this* environment, defects 1
and 3 together would have yielded a tidy, entirely fictional results file.

---

## 3. The corrected gate — `scripts/check-domains.sh`

Written, syntax-checked and tested. It fixes all three defects:

- **Resolves each TLD to its authoritative registry RDAP server** (bootstrapped from
  IANA's `dns.json`, hardcoded so the gate does not depend on that file being up).
  No redirect-service dependency.
- **Classifies on the response body, not the status code alone.** It separates
  `"No RDAP service is available"` (→ `UNKNOWN:tld-not-served`) from a genuine
  domain-not-found (→ `FREE`), and requires a real `ldhName` domain object before
  it will say `TAKEN`.
- **Runs preflight controls per TLD.** For each TLD it checks a known-registered
  domain and a known-unregistered one. A TLD that cannot prove it distinguishes the
  two is disabled for the whole run. If no TLD passes, the script **exits 2 and
  writes nothing**.
- Distinguishes `429` rate-limited, `403` policy-blocked and `000` unreachable
  instead of lumping them together.
- Falls back to `whois` for `.ng`/`.com.ng`, which RDAP serves patchily.
- Supports `--shards N` for the brief's four-way parallel run.

**Proof the critical fix works** (run against the one endpoint reachable here):

```
nike.co       naive_script=FREE   hardened_script=UNKNOWN:tld-not-served
angel.co      naive_script=FREE   hardened_script=UNKNOWN:tld-not-served
github.io     naive_script=FREE   hardened_script=UNKNOWN:tld-not-served
nic.io        naive_script=FREE   hardened_script=UNKNOWN:tld-not-served
```

**Proof it fails safe here** (`output/03-domain-preflight.log`, exit code 2):

```
#   .com     DISABLED (google.com=UNKNOWN:unreachable, control=UNKNOWN:unreachable)
#   .co      DISABLED (angel.co=UNKNOWN:unreachable, control=UNKNOWN:unreachable)
#   .app     DISABLED (web.app=UNKNOWN:unreachable, control=UNKNOWN:unreachable)
#   .io      DISABLED (github.io=UNKNOWN:unreachable, control=UNKNOWN:unreachable)
#   .ng      DISABLED (nic.net.ng=UNKNOWN:unreachable, control=UNKNOWN:unreachable)
#   .com.ng  DISABLED (google.com.ng=UNKNOWN:unreachable, control=UNKNOWN:unreachable)
#   .africa  DISABLED (nic.africa=UNKNOWN:unreachable, control=UNKNOWN:unreachable)
# FATAL: no TLD passed preflight. Network or policy is blocking RDAP.
# Refusing to emit results. Do NOT proceed on unverified domain data.
```

---

## 4. How to finish the gate

On any machine with ordinary outbound HTTPS (a laptop, a normal CI runner):

```bash
git clone <this repo> && cd startupproject
./scripts/check-domains.sh output/names-120.txt --shards 4 > output/03-domain-raw.csv
```

Runtime is roughly two to four minutes for 120 names × 7 TLDs. Then:

1. Confirm the preflight header on stderr shows `7/7 TLDs verified usable`. **If any
   TLD is DISABLED, its column is not evidence — do not read it as availability.**
2. Classify per the brief: `.com` FREE → **CLEAR**; `.com` taken but priced under
   USD 200 → **CLEAR** (verify the price at a registrar, do not assume); no `.com`
   but `.co`/`.app`/`.io`/`.ng`/`.com.ng`/`.africa` free → **PARTIAL**; nothing
   obtainable → **BLOCKED**.
3. `.ng` and `.com.ng` carry extra weight: a PARTIAL with a free `.ng` is materially
   stronger than one with only `.io`.
4. **Gate rule:** if fewer than 30 survive, return to Agent 2 for another 80
   candidates informed by which patterns failed. Repeat at most twice.
5. A registrar's own search box is the final word before payment. RDAP tells you a
   domain is unregistered; it does not tell you it is not premium-priced.

---

## 5. What the rest of the pipeline did instead

Because the gate could not cut 120 down to a survivor list, the pipeline was
**inverted**: every screen that does *not* depend on domain data was run across all
120 candidates, so that when the gate is finally run, the survivors already carry
their full research and only need to be intersected with the CSV.

| Screen | Status | Coverage |
|---|---|---|
| NGX listed-company / ticker collision | **done** | 120/120 — no collisions |
| Apple App Store collision (live iTunes API) | **done** | 120/120 |
| Linguistic and cultural (Agent 4) | **done** | 120/120 |
| Regulatory (Agent 7) | **done** | 120/120 |
| Trademarks, handles, association (Agent 5) | **done** | survivor subset |
| Search and ASO (Agent 6) | **done** | survivor subset |
| Domain availability (Agent 3) | **BLOCKED** | 0/120 |

Ranking in `08-final-report.md` is therefore computed on **80 of the rubric's 100
points**, with the 20-point Domain and availability criterion held open. That is
stated plainly wherever a score appears.

---

## 6. Raw data

- `output/03-domain-raw.csv` — 120 rows, every TLD column `UNVERIFIED`. It is a
  placeholder that records the absence of data, not a result. Overwrite it by
  running the command in section 4.
- `output/03-domain-preflight.log` — the preflight refusal, timestamped.

**Confidence in every domain finding in this run: none. There are no findings.**
