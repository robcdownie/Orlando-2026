# Phone experience review

Review asset for [Review the phone experience for sets, clashes, and the venue map](https://github.com/robcdownie/Orlando-2026/issues/8). Pending Robbie's review; no design has been approved by this artifact alone.

Open `phone-review.html` directly in a browser. It is a single self-contained file; no installation or build step is needed. Refresh resets all choices. A browser that prohibits local files may require opening the file yourself in a normal local browser.

## Revised map after Robbie's feedback

The file now opens directly on the map. The first draft's static screenshot and toy diagram were rejected as a regression from Long Beach. This revision uses the retained Long Beach map replay and pinned source as its interaction baseline: compact blue header, a horizontally scrolling filter row, most of the screen devoted to the map, round zoom/reset controls, time controls and fixed bottom navigation.

The reattached `Photo 1.jpg` was SHA-256 identical to the preserved supplied map. The original bytes remain embedded unchanged. The view starts closer to the grounds; Fit reveals the whole image, including its frame and legend.

- Drag, pinch, use the mouse wheel, double click, or use + / - / Fit to explore. Focus the map for arrow-key pan, + / - zoom and Home reset.
- Select a stage chip or marker to center its visible label on the supplied artwork. These are image-relative label coordinates, not verified physical or GPS locations.
- My sets filters markers to saved example appearances. The sample acts and their stage assignments are fictional; their stage names match visible labels in the supplied artwork.
- Friends optionally shows fictional planned and dated manual-check-in examples. A demo personal check-in records its chosen day/time and stays dated when the time slider changes. No data is sent or persisted.
- Water, restrooms, first aid and other amenity filters explain missing verified positions rather than inventing markers.
- Source details contains the organizer-post discrepancy and venue surroundings link. The map remains visibly marked as reference artwork.

The revised map still needs Robbie's review. No approval is inferred from the request to continue.

## Compare the lineup proposals

Open Lineup, then use the bottom arrows or the left/right keyboard arrows outside an input. `?variant=A`, `?variant=B`, and `?variant=C` identify the lineup list, day timeline, and festival poster proposals. The alternatives explore lineup presentation; the revised map has one consistent interaction model.

Start by saving an appearance, then opening My plan. The first save takes one action from the loaded lineup, and My plan is one action away. These are prototype affordances, not measured phone-performance results.

Open **Prototype · review tools** on the map, or **Reviewer scenarios** elsewhere, to load:

- **Clash + unknown:** change attendance to all, part, or none; interests and priorities remain. Enter a partial interval, observe overlap warnings, and undo a change. Unknown times remain not checkable.
- **Update + edit:** compare the published example time with a personal edit, choose which to keep, and apply the update. Saved intent survives; a partial interval that falls outside the moved set needs review.
- **Offline failure:** inspect app, timetable and map readiness separately. A failed map download stays unavailable. Simulating a connection does not advance the last successful update check. A separate check does.
- **Reset map / Unverified map:** explore the supplied artwork with its evidence disclosure and organizer-source discrepancy.
- **Set → reference label:** use Find on reference map from an example set to focus its label on the actual supplied image, then return to the plan. The example assignment and image-relative focus do not verify physical stage positions.

## Map evidence

See [map-verification.md](map-verification.md) and the captured [organizer post](evidence/organizer-map-post.png). A remote browser check found the organizer's October 9, 2026 post, but its stage labels differ from the supplied screenshot. Google Maps supports venue context only. Latest map revision, physical stage positions, routes, accessibility and travel times remain unverified.

## Validation and limits

- JavaScript syntax and simulated state transitions were checked: clashes, none/partial attendance, invalid intervals, undo, update preview/apply, and freshness stability.
- Additional map simulations checked initial measurement, zoom anchoring and limits, fit/reset, centered label focus, unknown amenity behavior, saved-stage filtering, pointer drag and demo check-in. These use a mock document and do not replace browser gesture/visual testing.
- Source review corrected an erroneous newer-revision notice after applying revision 2 and kept detailed plan controls in one column.
- The in-app browser security policy rejected local file navigation. No browser interaction, responsive visual, or physical-phone pass is claimed for this artifact.
- All acts, times, readiness and update states are fictional. There is no service worker, persistence, real download, signed-code verification or offline cold start.
- Search/filtering, personal backup, friend comparison/meetups/check-ins, arbitrary timetable imports and restoration remain retained scope, with contextual descriptions rather than working implementations in this prototype.
- This asset is throwaway design evidence. Production implementation and release verification remain separate map work.
