# REA evidence and Long Beach source review

Reviewed 2026-10-31 for [Investigate multiple festival apps with REA before choosing the product](https://github.com/robcdownie/Orlando-2026/issues/10). This appendix separates historical artifact evidence, newly verified local inventory, and source-derived UI hypotheses. It is not a runtime report or a product decision.

## Two additional shipped targets

The [earlier report](expanded-rea-progress.md) records acquisition from initial HTML script references on 2026-10-29. The targets are distinct publicly deployed festival planners, additional to Wudzdog in the earlier comparator investigation. No evidence here establishes that either is an official organizer application. Local counts and byte totals were rechecked on 2026-10-31 and match the report.

| Target | Retained files | Historical REA root SHA-256 | Historical parent Evidence ID |
|---|---|---|---|
| [Ultra 2026 planner](https://ultra-2026-planner.vercel.app/) | 8 scripts; 690,494 bytes | `f8ea9cbfa5f90c349538b7a8a328f5d69ce1de909d4328e7c369c70fd3e2c1b1` | `ev_a9438279a1be98df4897f974a17dfe47271471db9240dfde08739244d45ee941` |
| [OpenLineups](https://openlineups.com/) | 11 scripts; 692,993 bytes | `bc7c63f83c076d263500147ef50e1cf5d35ca60be630ca04091518cbafc5fa1e` | `ev_68e2185feb6ec0cab33b22b1626594b68edc58ae9ed3cc8d33e1e6c241bb83a0` |

Historical coverage: Ultra parsed all eight scripts but had 4 application unknowns and 9,808 semantic unknowns; OpenLineups parsed all eleven but had 7 application unknowns and 10,940 semantic unknowns. Both semantic graphs were partial and truncated, including heap and result-budget limits. These are initial script snapshots, excluding uncollected lazy chunks, API responses, images and service workers. No complete application version or runtime behavior follows from these inventories.

A fresh `get_evidence_bundle` query with `detail: summary` and operation `analyze_javascript_application` returned zero retained records. The historical IDs therefore cannot be followed in this session. Their root digests are quoted from the committed prior report, not independently recomputed using REA's directory-digest algorithm. Broad analysis was not repeated. The individual SHA-256 values below were newly computed over the retained local files, preserving reproducible byte identity without republishing third-party bundles. The acquisition report retained target origins but not each complete script URL or acquisition response header; that provenance gap remains. Current live deployment equality must not be assumed.

## Long Beach interaction structure from pinned source

Source reference: [`71f1bc956becbd4a045f7feb69727a02521f2037`](https://github.com/robcdownie/warpedLB/tree/71f1bc956becbd4a045f7feb69727a02521f2037), fetched through GitHub's contents API on 2026-10-31. No source execution was performed in this appendix.

- Five primary destinations are explicitly named **Now, Bands, Schedule, Group, Map**. This demonstrates navigation breadth, not that five tabs caused Robbie's difficulty. [BottomNav.tsx](https://github.com/robcdownie/warpedLB/blob/71f1bc956becbd4a045f7feb69727a02521f2037/src/components/BottomNav.tsx).
- First-run source defines **welcome → profile → offline → plan**. The normal path requires a local profile; this is not an online account. Offline preparation can be skipped. The plan screen offers Pick My Bands, Add Set Times, and a later option. The welcome screen includes installation guidance before Get Started. Source comments explain the intended storage rationale; that rationale is not a device test. [OnboardingFlow.tsx](https://github.com/robcdownie/warpedLB/blob/71f1bc956becbd4a045f7feb69727a02521f2037/src/screens/onboarding/OnboardingFlow.tsx).
- Production checks the post-event wind-down condition before onboarding and routes to the final WrapUp screen. A present-day public visit may therefore be unable to show historical onboarding. A locally executed historical flow, if used, must be labeled a controlled replay, including the clock/mode change; it cannot be represented as current public behavior. [App.tsx](https://github.com/robcdownie/warpedLB/blob/71f1bc956becbd4a045f7feb69727a02521f2037/src/App.tsx).
- The source already separates band choices from schedule data, explains named clashes, and supplies map and offline preparation features. Comparator recommendations should improve access and explanation rather than imply these features are absent. The [pinned baseline audit](https://github.com/robcdownie/Orlando-2026/blob/63997c4/docs/research/long-beach-baseline.md) links the specific implementation files and distinguishes code inspection from passing tests.

## Hypotheses for visible journey comparison

| Hypothesis, not settled choice | Exact comparison to make | Tradeoff or disconfirming observation |
|---|---|---|
| Let visitors reach a first saved band before naming a profile | Fresh session: count required screens, inputs and taps until a visible saved state; inspect how Ultra and OpenLineups handle anonymous planning | A local profile may support later sharing; deferring it needs a safe migration and ownership story |
| Put lineup discovery and personal-plan status in one understandable context | Save a band, inspect feedback, then find the saved plan without prior knowledge; distinguish tabs, filters, overlays and menus | Collapsing destinations can overload a screen; fewer tabs alone is not a success metric |
| Explain clashes where a conflicting choice is made | Select overlapping performances where real schedule data is available; record whether conflict information is immediate, understandable and reversible | Missing times must remain unknown; an empty conflict list cannot imply conflict-free |
| Link a performance directly to its stage | Starting from a selected performance, record taps to an identified map stage and back to the same plan context | Neither comparator having a map would limit this claim; maps still require validated stage positions |
| Introduce preparation after first value, with a persistent reminder | Compare first-run interruption versus later discoverability of download/install actions | Delaying preparation risks arriving unprepared; visible reminders and real cold-start proof remain necessary |

These are analyst inferences to test against screenshots/actions and then discuss with Robbie. No functionality is removed by this appendix. Native installation, physical-device airplane mode, cache eviction, timetable authority and update preservation remain separate validation requirements.

## Retained script byte inventory

SHA-256 values computed with PowerShell `Get-FileHash -Algorithm SHA256` on 2026-10-31. Filenames are local retained names; hashes identify those files only.

| Target/file | Bytes | SHA-256 |
|---|---:|---|
| openlineups/0cz1d0mv5g_q7.js | 112594 | `0973c1d64c88adc8e3c950410cb58b288f72118d5965b78049438deb8f2f9683` |
| openlineups/0yme9wk20mmxa.js | 30512 | `9830d928581eda751a6b64277a6b49cedec4611a1011f0889236b7a8252cf19b` |
| openlineups/168g9x_vtqf9i.js | 30103 | `976403924bb43739cee1ebeb57f47b0326f3bfc19b3ee5b8204b7162283f93a2` |
| openlineups/1evdy7h_vfiqk.js | 235045 | `f7bf478616dfb4fc398415de270c23a1d9a219469dc0a80a4a982be9bc8eaa57` |
| openlineups/1hahjyn5b0_9_.js | 9026 | `56e88745fc9699ccbd05ac07d0cc6738c8e774ad3a00d5bdce4a165755e613f1` |
| openlineups/1t2lxfdkxbnxh.js | 31436 | `371ad7f7513d2499d18507dedf6831bff7500e2ece249702d6e105d5b2d69b59` |
| openlineups/2dxpulf4iig-i.js | 29550 | `914192b3964ff06d11f2ec20bb08ef7944c3387efdf3b62ab1b2f04d8646e3f0` |
| openlineups/2j3gujo4rzc5_.js | 6350 | `cdc30f1544369e41a08e16c722d98011807ce62f414f72d5c95dd51e01f14e57` |
| openlineups/2xwey81z0jm05.js | 18296 | `c9d1e3829fd3b9682023395f90e19f5141779b105671df0e4e0d167095e0f030` |
| openlineups/38ino5h-5l954.js | 178826 | `ea81a26c7e8f69857c02e07794dd82b10359ad0457605d61889b4b2a5dc01463` |
| openlineups/turbopack-2c3mg3r-05n1w.js | 11255 | `b5f9b5199b99ab6c141f4540f0b7d0fe803c4ecf6956849ecb6e59d3d439272e` |
| ultra/0_wj.32ndfokq.js | 63621 | `e2edde36705f6deb5050ce89f3eaab9df6effbd2ebe0b0871c38a7adf8d6fb82` |
| ultra/03~yq9q893hmn.js | 112594 | `0973c1d64c88adc8e3c950410cb58b288f72118d5965b78049438deb8f2f9683` |
| ultra/0b5yd18v4zlw1.js | 17474 | `978ed291ec740eaea49683b73be763342fda4bc0447cb46a03ef22c0cf6f23eb` |
| ultra/0dbhjjzl8qfwv.js | 57909 | `59d6d2186868625417737f3f33980e55f778eb3672cd03a10cf26b1259ca2314` |
| ultra/0dh46ibybki01.js | 200121 | `4bab52009d053374455531f72edd3cc2212af982506040b136c1cdd48935814a` |
| ultra/0dliiuffleu~9.js | 324 | `e0663d4500ed54478a50a408f1a43d6a333dcb9d42f9040ebc5b282f759e1eda` |
| ultra/10h58a-70w7nl.js | 227537 | `d72891537d4541e248862b69e0c2095cb45191c4d5bfe57c5a8a61f2a2c34787` |
| ultra/turbopack-0~r2tpfnxd-nu.js | 10914 | `29322df189fac6bd96cc926126386343c832e9a6faf72396027f12f7e529aeb2` |
