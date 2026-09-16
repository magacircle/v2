# MagaCircle™ — Prelaunch Invite / Founding Rewards Prototype V24

This build restores the working V22 Quiz/Builder experience while layering the locked MagaCircle™ Invite / Founders architecture on top.

## Key changes
- Restored the V22 Quiz flow, scoring, Builder Profile, Builder Score, Builder Card, result flow, persistence, and recovery behavior.
- Preserved JOIN THE FOUNDERS WAITLIST as the transition into the Founders experience.
- Uses Invite / Confirmed Invite / Founding Rewards terminology; no Ambassador Program functionality is included.
- Confirmed Invite qualification is tied to Quiz completion in the prototype event model.
- Preserved milestones: 5, 50, 100, 250, 500, and 1,000 Confirmed Invites.
- Preserved highest-milestone/non-stacking reward logic and the 500-reward choice.
- Preserved prototype qualifying-event simulation, duplicate/self-invite tests, event logging, and reset controls.
- Uses `magacircle_builder_v4` while preserving legacy Quiz/Profile information during migration and discarding obsolete state only.
- Corrected the Prelaunch Invite Rules filename to `prelaunch-invite-rules.html` and updated links.
- Restored the shared legal stylesheet/assets required by Terms, Privacy, and Prelaunch Invite Rules.
- Corrected age eligibility language to an adult 18+ audience and removed child/COPPA framing.
- Removed the unintended empty recovery rectangle when the recovery container has no content, without removing populated recovery behavior.
- Restored the established confirmation screen and Builder Card sharing from that screen.
- Preserved social metadata on `quiz.html`.
- Preserved the locked landing-page `index.html` byte-for-byte from the V17 baseline.

## Prototype limitation
The simulator, localStorage, temporary Invite code, and test event log are prototype infrastructure only. Production attribution and reward verification remain intended for the production Invite/referral platform and server-side systems.

The legal pages are website-ready drafts and should receive qualified legal review before production launch.
