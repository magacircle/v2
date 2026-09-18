# MagaCircle™ Google + Apple Authentication Setup

This V40 adds a standalone `auth.html` authentication foundation without changing the V25 quiz/results/referral flow. It uses Supabase Auth so the browser can use Google and Apple OAuth without exposing provider client secrets in the site files.

## 1. Create the Supabase project

Create a Supabase project and copy its project URL and publishable key. Put those two browser-safe values in `auth-config.js`. **Do not put a service-role key or Google/Apple client secret in this file.**

## 2. Configure the Site URL / Redirect URL

In Supabase Auth URL Configuration, add the production site URL and the exact authentication page URL, for example:

- `https://YOUR-DOMAIN.com/`
- `https://YOUR-DOMAIN.com/auth.html`

For local testing, also add the local origin you actually use.

## 3. Configure Google

In Supabase Auth Providers, enable Google. In Google Cloud / Google Auth Platform, create a Web application OAuth client. Add the MagaCircle production origin as an authorized JavaScript origin. Add the Supabase callback URL shown by the Supabase Google provider configuration as an authorized redirect URI. Then paste the Google client ID and client secret into Supabase — **not** into this repository.

## 4. Configure Apple

In Supabase Auth Providers, enable Apple. Apple web sign-in requires an Apple Developer configuration including a Services ID, website/return URL configuration, and an Apple signing key/client secret. Enter those provider credentials in Supabase. Keep the `.p8` key and generated Apple client secret private.

## 5. Test

Open `auth.html` from the hosted HTTPS site (OAuth providers generally should not be tested from `file://`). Test both buttons. After successful authentication, the page should display the user's name/email and, when the provider supplies one, a profile photo. The Invite `ref` parameter is preserved through the auth round trip.

## 6. Next integration step

Once Google and Apple sign-in are working, the next surgical change should connect the authenticated user to the existing Builder journey: use the authenticated profile photo when available, preserve the existing Builder Card as-is, and associate the Builder's invite/profile state with the authenticated account. Do not replace the V25 localStorage journey until that migration is tested.
