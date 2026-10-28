# Orlando 2026 source and venue-map research

Checked October 28, 2026. Resolves the availability/provenance investigation in [Verify Orlando event data and the supplied venue map](https://github.com/robcdownie/Orlando-2026/issues/4). This is research, not an approved product-data policy.

## Findings

| Data | Observed evidence | Status for planning |
| --- | --- | --- |
| Event identity | The [venue's 2026 event listing](https://www.campingworldstadium.com/events/detail/warped-tour-2026) gives November 14–15, 2026 at Camping World Stadium. | Verified dates; its individual start times remain TBA. |
| Lineup | The [official lineup page](https://www.vanswarpedtourorlando.com/lineup) lists artists and links a day-by-day poster. | Available; ingest from a pinned snapshot and verify transcription. |
| Day assignments | The [official poster asset](https://static.wixstatic.com/media/3f3fbe_176c8d7c4a604056af092e841a41c5e4~mv2.png), linked by the lineup page, visibly separates Saturday November 14 and Sunday November 15 and labels 2026. For example, Simple Plan is Saturday and Jimmy Eat World is Sunday. | Verified visually from the original asset. Text-only scraping misses the day groups. |
| Individual set times and stages | No artist-to-stage/start/end schedule was found on the inspected official home, lineup, FAQ, guide, hours/info, or experiences pages. | Unknown/unavailable in this bounded search, not proof that no source exists elsewhere. No official public schedule API established. |
| Publication channels | The [Orlando FAQ](https://www.vanswarpedtourorlando.com/faq) says maps will be available on the site and official Vans Warped Tour app. It also states different bands play each day. | Official channels to recheck; availability promise does not authenticate the supplied image. |
| Supplied experience map | The user identifies it as official Orlando information; the file itself is a Reddit-framed screenshot without a visible year, source URL, or revision. | Useful supplied reference; original official provenance and latest-revision status remain unverified. |

The poster supports day-level planning now. Do not infer precise clashes or stage travel from day assignments alone. No full lineup transcription was attempted; this ticket establishes sources, not a production dataset.

## Source conflicts and limits

The [venue's linked festival guide](https://www.campingworldstadium.com/plan-your-visit/vans-warped-tour-orlando-event-guide) still displays November 15 and 16, a festival-map placeholder, an unrelated Rolling Loud prohibited-items link, and three-day parking language. These conflict with the specific 2026 event listing. Treat that guide as stale/mixed content until corrected; its presence on an official domain alone is insufficient evidence of currentness.

The Orlando FAQ currently lists doors at noon Saturday and 11 a.m. Sunday. That does not establish performance start times. Confirm hours again near launch rather than silently reconciling TBA venue times.

The [official Montreal FAQ](https://www.vanswarpedtourcanada.com/faq) says set times are only provided on the onsite inflatable. This is evidence for another city, not an Orlando-specific guarantee. The inspected Orlando FAQ contains no equivalent advance-publication answer. Prepare for late publication, but do not assert an exact Orlando release hour without direct evidence.

A [Reddit grounds-map post dated October 6, 2026](https://www.reddit.com/r/warpedtour/comments/1wz81gc/orlando_2026_warped_tour_grounds_map/) is a provenance lead only. Its comments discuss the same stage names and question left/right orientation. Neither a repost title nor comments authenticate an organizer revision; no original organizer map URL was independently recovered in this investigation.

Search coverage: the official home, lineup, guide, FAQ, hours/info, experiences (including a raw HTML read after text-fetch timeouts), venue event page and linked venue guide; targeted web searches for official map and set-time references. The native official app and organizer social posts were not inspected. No absence claim extends beyond this coverage.

## Supplied map inventory

[Unmodified supplied screenshot](assets/orlando-map-supplied.jpg), SHA-256 `CD70B33DF1CFBDA01EF40784468E0122E96E2386F38EF98B21DD6A2FF53DAD8E`. The copied file and original attachment have identical hashes. Research reference only, not approved production artwork.

Visible stage labels: BeatBox; Ghost; Wyndham; Verizon; Larceny Bourbon; Alligator; Vans Right Foot; Off the Wall; Warped Unplugged. Preserve exact display wording and introduce stable internal stage IDs only after verifying the current edition.

Visible landmarks: entrance near W Church Street and S Norton Avenue; stadium; Nitro Circus; Circle 6 Wrestling; Vert Ramp; Warped Museum; two Artist Alley areas; Record Label Row; Charity Circle; access center; vendor village; VIP areas; merchandise and charge-station icons; inflatable schedule icons. Boundary street labels also include S Tampa Avenue, Long Street, and State Road 408.

This is an illustrated schematic. No geographic calibration, scale, navigable path graph, walking duration, crowd obstruction model, or accessible-route geometry was established. Pins can describe image-relative landmarks; GPS overlays or minute-accurate travel warnings need additional validation. Do not infer that medical, water, or restroom facilities are absent merely because this experience-map screenshot does not identify all of them.

## Recommendations for the downstream decision

These are proposed options, not decisions recorded on the map:

- Separate artist preferences, verified day assignments, and timed sets. Allow useful planning before set times exist; represent unknown times explicitly.
- Keep a versioned source ledger: event edition, source URL, observation time, operator verification time, asset hash, and row-level provenance for stage/time edits.
- Assign a festival-day operator to capture official schedule information, check artist/stage identities and both endpoints, publish corrections, and retain the prior version for rollback. Human review is needed even if OCR or import assists entry.
- Keep personal edits distinguishable from shared official-source data. Decide whether user-entered schedules can override, supplement, or merely annotate the shared feed.
- Cache a coherent data/map revision for offline use, show when it was last verified, and preserve personal picks across updates. A cached unknown remains unknown.
- Resolve the map's original source and latest revision through the official app/site or a supplied organizer link before production release. If unresolved, label it honestly as a user-supplied reference and decide whether that is sufficient for launch.

Unresolved operational facts: original map source/revision; official app contents; Orlando-specific set-time publication policy; exact times, artist stage assignments, and authoritative change feed. These are explicit findings for the data-policy ticket rather than fabricated answers.
