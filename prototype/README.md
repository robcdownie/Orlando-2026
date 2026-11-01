# Phone experience review

Review asset for [Review the phone experience for sets, clashes, and the venue map](https://github.com/robcdownie/Orlando-2026/issues/8). Pending Robbie's review. This is a throwaway prototype, not an approved design or a production app.

Open `phone-review.html` directly in a local browser, or refresh the file if already open. It is self-contained, including the supplied map and Archivo Black font. Refresh resets all choices. The managed in-app browser rejected local-file navigation; it has not rendered or visually verified this artifact.

## Direction after Robbie's review

Robbie rejected the first draft's unrelated visual styles and the follow-up that restored Long Beach's map without unifying the other screens. His direction is to keep Long Beach's concert identity while meaningfully improving the interface using the research.

This revision removes the A/B/C alternatives and the separate map shell. Lineup, My plan, Map, Friends, preparation and updates now use one header, display type, blue/yellow/pink palette, light surface system, and fixed navigation. Archivo Black is embedded from the same pinned Fontsource 5.3.0 dependency as the Long Beach source; its unmodified font and OFL license are included. User acceptance is still pending.

## What changes beyond an Orlando reskin

Evidence: [festival interaction comparison](https://github.com/robcdownie/Orlando-2026/blob/research/expanded-rea/docs/research/festival-interaction-comparison.md), including the pinned Long Beach replay at `71f1bc956becbd4a045f7feb69727a02521f2037`. These observations are narrow desktop-browser replays, not a physical-phone benchmark.

| Area | Long Beach baseline / research finding | Revised prototype |
| --- | --- | --- |
| First save | Long Beach already has a one-tap star once reached, but four setup screens precede the list in the replay. Ultra exposes its list immediately. | Starts on searchable Lineup. One star saves an appearance; no mandatory name or setup. |
| Personal plan | Schedule initially opens the time-entry board in the Long Beach replay. OpenLineups clearly names My plan. | My plan opens the saved agenda, with a now/next panel. Editing and imports sit behind Plan tools; attendance editors expand within each set. |
| Clashes | Preserve Long Beach's uncertainty model; OpenLineups exposes clashes in My plan. Immediate save feedback is a design hypothesis. | Names both overlapping picks immediately. Compare sets offers split/skip/later and undo while retaining interests and priorities. Partial and unknown times remain explicit. |
| Set to map | Keep Long Beach's interactive map. A direct set-to-stage shortcut is an Orlando hypothesis, not a proven missing Long Beach feature. | A saved set focuses its label in the supplied artwork. Back to plan restores scroll position. Friends has its own return path. |
| Preparation | Setup can interrupt first value; saved picks, installed app, timetable and map readiness are separate concerns. | Nonmodal preparation offer after saving; persistent header entry; separate simulated app/timetable/map states and failed-download recovery. |

The improvement claim is a concrete proposed journey, not proof of faster festival use. The target remains a coherent, reviewed design before production work.

## Try the connected flow

1. Save Glass Harbor and Static Bloom in Lineup. Their named overlap appears immediately.
2. Choose **Compare sets**, then **Split at 3:00** or skip one appearance. Both stars remain. Undo restores the earlier attendance.
3. In My plan, tap a stage link. The map centers that label; **Back to plan** returns to the same position.
4. Open **Offline prep needed** in the header. Simulating a connection does not mark content downloaded or advance the last successful check. Retry and check are separate actions.

The shared **Review tools** menu loads first visit, overlapping picks plus TBA, update plus personal edit, failed download, reference map, and set-to-map scenarios. First visit uses published sample times; only the personal-edit scenario begins with a personal change.

Search and My picks filter the four sample appearances. The acoustic appearance is distinct from the same artist's other set. Known times appear in time order; TBA is last. All acts, assignments and times are fictional.

## Map and evidence

- The exact user-supplied image remains embedded, with reference-only labeling. See [map-verification.md](map-verification.md) and the [organizer-post capture](evidence/organizer-map-post.png).
- The organizer's October 9 post has different stage labels from the supplied screenshot. Google Maps supports venue surroundings only. Latest revision, physical stage positions, routes, accessibility and travel times remain unverified.
- Drag, pinch, wheel, double-click, or use + / - / Fit. Focus the map for arrow-key pan, + / - zoom and Home reset.
- Stage chips and markers focus visible labels in the artwork, not verified physical or GPS positions. My sets filters those labels; unknown-stage picks get an explicit empty state.
- Friends shows fictional planned and dated manual-check-in examples. A personal demo check-in keeps its recorded day/time when the slider changes. No live tracking, transfer or persistence occurs.
- Amenity filters explain unavailable verified positions. They do not invent markers.

## Validation and limits

Run `node prototype/check-journeys.cjs` from the repo root. The source-level simulation passed and was independently rerun during review. It exercises save, named overlap, partial/none attendance, split/skip/undo, unknown data, update preview/apply, plan/map return, zoom/pan/label focus, dated check-in, freshness and download state, and all shared destinations.

The harness uses a mock document. It does not validate browser rendering, responsive fit, focus recovery, touch gestures or physical-device usability. Those checks remain pending. Local-file navigation was explicitly rejected by the in-app browser's security policy; no alternative route was used to bypass it.

There is no service worker, persistence, real download, signed-code verification or offline cold-start proof. Full timetable entry/import, personal backup, friend-plan exchange/comparison, meetup editing and restoration remain retained production scope. Prototype labels and examples do not remove those features from the contract.

Font attribution and license: [Archivo Black OFL](Archivo-Black-LICENSE.txt), also embedded in the HTML source.
