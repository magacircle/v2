# MagaCircle™ — Prelaunch Invite / Founding Rewards Prototype V23

This build implements Specification ID 74126 — Revised Final.

## Key changes
- Removed the Ambassador Program and all live Ambassador architecture/copy.
- Reworked user-facing terminology to Invite / Confirmed Invite / Founding Rewards.
- Added the 1,000 Confirmed Invite milestone.
- Updated reward language to Founding Membership Credit.
- Added prototype qualifying-event simulation controls (+1, +5, +10, +50, +100, +250, +500, +1,000).
- Added prototype event logging and duplicate/self-invite rejection tests.
- Migrated prototype state key from `magacircle_builder_v3` to `magacircle_builder_v4`; legacy Ambassador state is not migrated.
- Added `invite-prelaunch-rules.html` and linked it from the main Terms page.
- Retired `ambassador-terms.html`.
- Added social metadata to `quiz.html`.
- Preserved the landing-page `index.html` from the locked V21/V17 baseline byte-for-byte.

## Prototype limitation
The simulator and localStorage are testing infrastructure only. Production attribution remains intended for the production referral/invite platform and server-side systems.

The legal rules page is a website-ready draft and should receive legal review before production launch.
