# Responsive landing page fix

Updated `index.html` only. The approved artwork and existing quiz flow are preserved.

Fixes:
- Full viewport stage on desktop, laptop, tablet, and mobile.
- Blurred artwork fill behind the portrait composition removes hard side gutters on wide screens.
- Portrait devices fit the artwork to the dynamic viewport height, removing the empty area below.
- CTA hit area is anchored to the artwork's own 2:3 coordinate system so it scales with the visible button.
- CTA is keyboard-focusable and touch-friendly.
- Uses the existing local `assets/landing-approved-mockup.png` instead of embedding a huge base64 image in HTML.
