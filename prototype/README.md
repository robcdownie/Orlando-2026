# Phone experience review

Review asset for [Review the phone experience for sets, clashes, and the venue map](https://github.com/robcdownie/Orlando-2026/issues/8). Pending Robbie's review; no design has been approved by this artifact alone.

Open `phone-review.html` directly in a browser. It is a single self-contained file; no installation or build step is needed. Refresh resets all choices. A browser that prohibits local files may require opening the file yourself in a normal local browser.

## Compare the proposals

Use the bottom arrows or the left/right keyboard arrows outside an input. `?variant=A`, `?variant=B`, and `?variant=C` identify the lineup list, day timeline, and festival poster proposals. The alternatives explore lineup presentation; the remaining journeys share an interaction model.

Start by saving an appearance, then opening My plan. The first save takes one action from the loaded lineup, and My plan is one action away. These are prototype affordances, not measured phone-performance results.

Open **Reviewer scenarios** at the top to load:

- **Clash + unknown:** change attendance to all, part, or none; interests and priorities remain. Enter a partial interval, observe overlap warnings, and undo a change. Unknown times remain not checkable.
- **Update + edit:** compare the published example time with a personal edit, choose which to keep, and apply the update. Saved intent survives; a partial interval that falls outside the moved set needs review.
- **Offline failure:** inspect app, timetable and map readiness separately. A failed map download stays unavailable. Simulating a connection does not advance the last successful update check. A separate check does.
- **Unverified map:** explore the supplied screenshot with its evidence disclosure and organizer-source discrepancy.
- **Illustrative verified map:** use Find stage from a timed example to see the proposed direct-focus interaction on a fictional diagram, then return to the plan. The diagram does not verify real positions.

## Map evidence

See [map-verification.md](map-verification.md) and the captured [organizer post](evidence/organizer-map-post.png). A remote browser check found the organizer's October 9, 2026 post, but its stage labels differ from the supplied screenshot. Google Maps supports venue context only. Latest map revision, physical stage positions, routes, accessibility and travel times remain unverified.

## Validation and limits

- JavaScript syntax and simulated state transitions were checked: clashes, none/partial attendance, invalid intervals, undo, update preview/apply, and freshness stability.
- Source review corrected an erroneous newer-revision notice after applying revision 2 and kept detailed plan controls in one column.
- The in-app browser security policy rejected local file navigation. No browser interaction, responsive visual, or physical-phone pass is claimed for this artifact.
- All acts, times, readiness and update states are fictional. There is no service worker, persistence, real download, signed-code verification or offline cold start.
- Search/filtering, personal backup, friend comparison/meetups/check-ins, arbitrary timetable imports and restoration remain retained scope, with contextual descriptions rather than working implementations in this prototype.
- This asset is throwaway design evidence. Production implementation and release verification remain separate map work.
