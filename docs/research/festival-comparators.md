# Festival companion research for Orlando 2026

Research date: 2026-10-28. Resolves [Research festival companions with REA to identify worthwhile improvements](https://github.com/robcdownie/Orlando-2026/issues/3). Recommendations are inputs to product decisions, not approved scope.

## Result

The strongest direction is to make reliability visible and testable: a complete festival download, clear freshness, preserved personal choices, and quick movement between a selected set and its stage. Adding another generic favorites list would not establish improvement over the documented [Warped LB baseline](https://github.com/robcdownie/warpedLB/blob/main/README.md). Its separate audit determines which of these ideas already exist in working form.

## Comparator shortlist and evidence depth

| Comparator | First-party evidence | What it contributes | Coverage |
|---|---|---|---|
| [Wudzdog festival PWA](https://wudzdog.de/en/app/) | Public app page and two deployed JavaScript assets below | Deliberate offline preparation, timestamp, update notice, install guidance | REA static artifact analysis plus focused manual inspection; no runtime test |
| [Shambala 2026](https://www.shambalafestival.org/say-hello-to-the-shiny-new-shambala-2026-app/) | Organizer launch article | Connect a personal timetable, clash finder, map, and nearby activity; tell visitors to open/download before arrival | First-party description only; paid native app not acquired or tested |
| [Woov](https://play.google.com/store/apps/details?id=com.woov.festivals) | Developer-owned store listing | Personal schedule, venue map, and link/QR sharing of personal map pins | Developer claims only; no package or device test |
| [Lineup Festival](https://lineupfestival.app/support) | First-party support page indexed by web search | Clearly separates local offline planning from operations needing connectivity | Search-indexed support excerpt only; direct page fetch failed, no runtime or artifact analysis |

Shambala's organizer explicitly pairs offline use with a pre-arrival sync requirement. Its richer map/discovery features are useful comparison ideas, not evidence that Orlando needs its full feature set. Woov's developer lists sharing pins by link/QR in release notes; this makes a lightweight meeting-point concept worth comparing with continuous tracking, without asserting either is required. Lineup's support excerpt says personal festival/schedule work can continue offline while sign-in and friend operations need internet; the full current implementation remains unverified.

## REA investigation: Wudzdog shipped PWA

Target selection: a live public festival PWA, directly relevant to install/offline behavior. Downloaded only the two linked or directly identified scripts; did not obtain a source repository or execute the scripts.

- [pwa.js](https://wudzdog.de/wp-content/uploads/waldgeister-minified-assets/pwa.js?ver=1789739119), 25,012 bytes; SHA-256 `87d4e6c19e2d1eac2acfaf19dfb0d8cbb6dd89a0bd38ba7bdb745134623f4d82`.
- [sw.js](https://wudzdog.de/sw.js), 52,349 bytes; SHA-256 `98ad15179ea9b27d2dbebd93f75273fb9e0e0fe888da6897f43fa1e85f7ea095`; script version `b414da4dba7e`.
- Acquisition: Invoke-WebRequest on 2026-10-28; pwa.js URL discovered in the app page, worker endpoint identified by the shipped registration script. No version equivalence with future responses is assumed.
- REA operation: `analyze_javascript_application`, directory input, summary detail, 60-second per-source limit.
- Parent Evidence: `ev_0e60ca8f49667139c3db22a8969909fa45f652371bb144f3b841e048ec6e3eba`.
- Summary Evidence: `ev_264c6a71eef562c1c6d666a4c17614cc9faddff105e600a1363bbdac2720c428`.
- Module inspection Evidence: `ev_e6d6eeae105f006edb52eb243f8ee772d769c94b3956b3b2e7219740ea2b1466`.
- Directory digest: `021232bf4f53b6ffe273bd3784a8b585920b4c51778413c674b51ff3e499053c`.
- [Retained REA summary](evidence/wudzdog-rea-summary.json). Complete local evidence export: `.scratch/wudzdog-rea-evidence.json` in the research worktree, 11,240,278 bytes; not published because it contains extensive recovered third-party syntax.

REA parsed both files with zero parse failures, 7,663 visited AST nodes and 23 findings. Inventory coverage is complete **only for these two downloaded files**. Semantic coverage is unknown, with 1,961 unresolved semantic graph items. Static relationships do not establish runtime reachability, successful cache writes, or offline correctness.

### Observations and their limits

**Observed in shipped pwa.js, corroborating the REA-identified module:** `saveOffline` (line 203) warms schedule days, collects assets including map imagery, waits for a worker completion message, and reports file failures. It stores a saved timestamp even when the completion result includes failures. `showSavedStatus` (line 260) later restores a timestamp message. Separate worker messages expose newer timetable availability (line 304). Install UI distinguishes standalone mode, deferred prompts, and iOS guidance (line 361 onward). These are code-path observations, not demonstrated device behavior.

**Observed in shipped sw.js:** version-independent named caches are retained by activation (lines 46–75). The offline page key normalizes schedule URLs, including an installed-app query parameter (lines 567–580). Adjacent comments describe prior cache-loss and launch-URL mismatches; those comments are developer assertions, not independently reproduced incidents.

**Inference:** Orlando should distinguish “download attempted,” “download incomplete,” and “ready” using an asset/data inventory, rather than equating a timestamp with readiness. It should test installed launch URLs and upgrades while offline. These are recommendations derived from the observed paths, not claims that Wudzdog currently fails in users' hands.

## Ranked proposals for the product decision

| Rank | Proposal | Why it fits Orlando | Tradeoff / proof needed |
|---|---|---|---|
| 1 | A single “Prepare for the festival” flow that verifies both days, map, and personal plan | Makes the central offline promise concrete; extends the preparation patterns above | Storage cost and download time; must prove airplane-mode cold launch and incomplete-download recovery |
| 2 | Separate last downloaded, source updated, and locally edited states | A fresh download can still contain old or unofficial set times | Requires a maintained versioned data contract; product must choose correction ownership |
| 3 | One-tap set-to-stage navigation and a clear now/next view | Adapts Shambala's timetable/map integration to the user's core tasks | Prototype for outdoor phone readability; map positions must be validated |
| 4 | Conflict explanation with alternatives and transition margin | User prioritizes clashes; extend rather than merely repeat LB's documented checks | Distinguish overlapping sets from uncertain walking estimates; avoid false routing precision |
| 5 | Preserve choices across data/app updates, with recoverable export | The festival deadline increases pressure to ship updates; retained cache patterns surface upgrade risk | Requires migration and rollback tests; no silent reset of saved choices |
| 6 | Optional shareable meeting point and plan snapshot | Woov's link/QR pin pattern offers a bounded social option | Public-link privacy and stale snapshot labels; defer if it threatens the core release |

Ranks 2, 4, and 5 are analyst synthesis and baseline-comparison hypotheses; they are not features proven absent from Warped LB. The separate audit and Robbie's review must settle the actual improvement bar.

## Follow-up decisions and evidence gaps

- Product contract: choose which proposals are required; compare against the pinned baseline audit.
- Data policy: decide authoritative schedules, unknown times, change notifications, and map provenance.
- Offline architecture: decide an explicit preparation inventory and migration contract.
- Prototype: review the set-to-stage and clash journeys with Robbie.
- Release gate: real iPhone/Safari and Android/Chrome installation, cold launch in airplane mode, storage pressure, interrupted download, and update preservation.

This research answers the bounded comparative question with four candidates and one actual REA investigation. It does not certify any comparator's reliability, benchmark performance, inspect native binaries, or test GPS/notification behavior. No production implementation or final product choice was made.

