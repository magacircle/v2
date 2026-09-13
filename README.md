# MagaCircle™ — GitHub Pages Test Site

This package is a static test environment for the approved MagaCircle™ prelaunch flow.

## Included

- `index.html` — approved cinematic landing page
- `quiz.html` — current approved Builder Quiz / Builder Profile / Builder Card / Founders Gate / confirmation experience (V10)
- `assets/landing-hero.png` — landing-page visual
- `assets/MagaCircle_logo_transparent.png` — approved logo asset
- `404.html` — test redirect for referral-style paths
- `.nojekyll` — prevents GitHub Pages from applying Jekyll processing

## Flow to test

`Landing → LET’S BEGIN → Name/Email → 10-question Builder Quiz → Builder Profile + Builder Score™ + 9:16 Builder Card → Founders Gate → 5-referral simulation → Ambassador state → Confirmation`

## GitHub Pages

1. Create a new GitHub repository.
2. Upload the contents of this folder to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Set the source to **Deploy from a branch** and choose the branch containing these files (normally `main`) and the `/ (root)` folder.
5. Save and wait for GitHub Pages to publish.
6. Open the published site URL. The landing page is `index.html`; the quiz is `quiz.html`.

## Referral-path testing

The current prototype stores referral progress locally in the browser and includes a test redirect for paths such as `/founders/ABC123`. GitHub Pages will route an unknown path to `404.html`, which redirects to `quiz.html?ref=ABC123`.

This is only a testing bridge. Production referral tracking should be connected to GrowSurf/CRM before launch. The final production URL architecture can then be configured around the approved domain strategy.

## Important prototype limitation

Email capture and referral counting are not connected to a production email platform or GrowSurf in this static package. The existing quiz prototype intentionally retains its localStorage-based recovery/testing behavior.


## Legal pages

- Privacy Policy: `privacy.html`
- Terms & Conditions: `terms.html`

Replace the bracketed contact/business placeholders in the legal pages before public launch.
