# MagaCircle™ Landing Page — V12

## Responsive architecture

- **Portrait mobile (max-width 600px, portrait):** preserves the approved `assets/landing-approved-mockup.png` composition as the V5 baseline. The portrait branch is isolated from landscape CSS.
- **All landscape devices:** use one shared HTML/CSS composition over the clean scenic `assets/landing-background.png`. This applies to landscape phones, tablets, laptops, and desktops.
- The landscape CTA is a real HTML link and is explicitly centered inside the hero copy.
- The landscape “The First Circle Is Forming” indicator is centered as a single CSS group.

## Asset audit

The repository contains several historical composite artwork files. They are retained for reference but are **not referenced by `index.html`**. In particular, `landing-landscape.png`, `landing-responsive-landscape.png`, and `landing-desktop-landscape.png` contain baked-in foreground/portrait content and should not be used as the live responsive background.

`landing-background-mobile.png` also contains a baked-in gold circle indicator at the bottom. V11 used that file for small landscape devices, which could conflict visually with the live CSS indicator. V12 removes that reference and uses the clean `landing-background.png` for all landscape devices.

## Live landing assets used by index.html

- Portrait: `assets/landing-approved-mockup.png`
- Landscape scenic background: `assets/landing-background.png`
- Landscape logo: `assets/MagaCircle_logo_transparent.png`

No PHP or server-side code is required for this static GitHub Pages implementation.
