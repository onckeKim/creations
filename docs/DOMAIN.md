# Connecting www.obcreations.site

The site is already written for `https://www.obcreations.site/` (canonical URLs, Open Graph tags, sitemap,
robots.txt and structured data all use it), and every internal link is relative, so it works on both the
GitHub address and your own domain. Connecting the domain is two steps: DNS at your registrar, then one setting
in GitHub. The repository contains a `CNAME` file naming the domain for reference.

## 1. DNS records (at the company where you registered obcreations.site)

Add these records. If a record of the same type and name already exists, replace it.

| Type | Name / Host | Value |
| --- | --- | --- |
| CNAME | `www` | `onckekim.github.io` |
| A | `@` (the bare domain) | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

Optional IPv6 (only if your registrar supports AAAA records): `2606:50c0:8000::153`, `2606:50c0:8001::153`,
`2606:50c0:8002::153`, `2606:50c0:8003::153` on the `@` name.

Remove any old A, AAAA or CNAME records on `@` or `www` that point somewhere else (for example a parking page).
Do not add a wildcard `*` record.

## 2. Tell GitHub

1. Open https://github.com/onckeKim/creations/settings/pages
2. Under "Custom domain" enter `www.obcreations.site` and click Save.
3. Wait for the green "DNS check successful" message. This can take a few minutes, sometimes up to a day.
4. Tick "Enforce HTTPS" once it becomes available.

With `www` as the custom domain and the four A records on the bare domain, GitHub automatically sends
`obcreations.site` visitors to `www.obcreations.site`.

Recommended: verify the domain so nobody else can claim it. Go to https://github.com/settings/pages, choose
"Add a domain", enter `obcreations.site` and add the TXT record GitHub shows you.

## 3. After it is live

- Open https://www.obcreations.site/ and click through all five pages.
- Add the site to Google Search Console and submit `https://www.obcreations.site/sitemap.xml`.
- Put the web address on the Google Business Profile and Facebook page (see `docs/SEO.md`).
- Test the contact form once. It sends from the new domain, and the Formspree free plan allows any domain.
