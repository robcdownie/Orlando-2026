# Expanded festival-app investigation: progress and gaps

Status: **incomplete**. The primary question is how to improve first-run onboarding and reduce navigation layers in Orlando. Static inventory alone does not answer it.

## Targets and REA evidence

On 2026-10-29, downloaded the scripts referenced by the initial HTML of two publicly available festival planners. They are partial snapshots, not full app bundles: lazy chunks, APIs, images and service workers were not inventoried. Neither target was executed by REA.

- [Ultra 2026 planner](https://ultra-2026-planner.vercel.app/): 8 scripts, 690,494 bytes, REA root SHA-256 `f8ea9cbfa5f90c349538b7a8a328f5d69ce1de909d4328e7c369c70fd3e2c1b1`; retained parent evidence `ev_a9438279a1be98df4897f974a17dfe47271471db9240dfde08739244d45ee941`. All 8 parsed; semantic graph partial and truncated, with 4 application unknowns and 9,808 semantic unknowns, including worker heap and result-budget limitations.
- [OpenLineups](https://openlineups.com/): 11 scripts, 692,993 bytes, REA root SHA-256 `bc7c63f83c076d263500147ef50e1cf5d35ca60be630ca04091518cbafc5fa1e`; retained parent evidence `ev_68e2185feb6ec0cab33b22b1626594b68edc58ae9ed3cc8d33e1e6c241bb83a0`. All 11 parsed; semantic graph partial and truncated, with 7 application unknowns and 10,940 semantic unknowns, including worker heap and result-budget limitations.

REA inventory and hashes establish inspected bytes, not observed user journeys, runtime functionality, or evidence that a feature is absent. Evidence references are session-scoped; downloaded scripts remain locally under the isolated research worktree's ignored `targets/` folder and should not be treated as stable upstream versions. The previous [comparison and Wudzdog REA evidence](https://github.com/robcdownie/Orlando-2026/issues/3) remain separate.

## What can be said now

The [OpenLineups landing page](https://openlineups.com/) presents search and upcoming events before optional sign-in and describes saving a plan on the browser. This is an observation of public page content, not a test of sign-in, onboarding, the planner, or offline behavior. A possible design hypothesis for Orlando is to expose a direct path to the lineup and postpone account-related choices; compare against actual Long Beach behavior before treating this as an improvement.

## Blocked observations and next steps

Attempted to open the Ultra planner in the Codex in-app browser; the tool returned **“Local browser use is disabled in Work settings.”** No tabs, first-run screens, taps, interactions, rendered mobile layouts, offline tests, or Long Beach runtime behavior were observed. The web reading tool rendered OpenLineups' initial public page but returned an access error for Ultra and no rendered Long Beach content. These gaps are not findings about the apps.

Resume in a session with browser use enabled. On a fresh phone-sized session, inspect Warped LB and at least two comparable planners: capture first view, onboarding screens, navigation labels and hierarchy, steps to a first saved artist, conflict discovery, and path from a set to its map. Take screenshots and record actions, target versions, viewport, and limitations. Then rank design recommendations against the Long Beach baseline and report what still needs user review. Use REA focused module views when they help explain a visible behavior; do not repeat the same broad partial analysis. Keep the product decision blocked until that work is complete.
