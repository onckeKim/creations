# Creations — Creating Beautiful Celebrations

Marketing website for **Creations**, a flower, decor, event styling, hiring and catering
company based in Wellington, Western Cape, South Africa.

The site is a dependency-free static site: a homepage plus About, Services, Gallery and Contact pages. There is no build
step: upload the files to any static host (GitHub Pages, Netlify, Vercel, cPanel, Afrihost, etc.)
and it works.

Homepage sections, in order: Hero, Trust Banner, About Creations, Services Overview,
Featured Gallery (masonry), Testimonials, CTA, Footer. Every "Request a Quote" button leads
to `contact.html`, which holds the enquiry form, contact details and the Google Maps embed.

## Structure

```
index.html              Homepage (semantic HTML, JSON-LD structured data, meta/OG tags)
about.html              About page: story, mission, why choose us, process, experience, local area
services.html           Services page: six services, each with image, description, key features and CTA
gallery.html            Gallery page: filterable masonry by category, lightbox with swipe, enquiry CTA
contact.html            Contact page: details + WhatsApp, quote request form, Google Maps, FAQ, CTA
assets/css/styles.css   Design system + all styles (mobile first, brand tokens at the top)
assets/js/main.js       Navigation, scroll reveal, gallery lightbox, form validation and
                        submission, WhatsApp fallback
assets/img/             Logo (SVG recreations of the brand lily + wordmark), fallback art,
                        Open Graph share image
favicon.svg, site.webmanifest, robots.txt, sitemap.xml
```

## Before going live: things to confirm or replace

| Item | Where | Notes |
| --- | --- | --- |
| **Photos** | `index.html`, `gallery.html`, `services.html` (`images.unsplash.com` URLs) | Stock placeholders. Real photos go in the gallery: add a `masonry__item` card in `gallery.html` with the right `data-category`. Replace with Creations' own portfolio photos, keeping the `alt` text descriptive. If a photo fails to load the on-brand lily artwork is shown instead. |
| **Contact form endpoint** | `contact.html`, form `action="https://formspree.io/f/YOUR_FORM_ID"` | Create a free form at formspree.io (or any endpoint that accepts a POST and returns JSON) and paste the ID. Until then, submitting the form opens WhatsApp with the enquiry pre-filled. |
| **Phone / WhatsApp** | `083 991 7808` and `wa.me/27839917808` | Taken from the business card. Change in `index.html` and `WHATSAPP` in `main.js` if needed. |
| **Facebook page** | `facebook.com/creationscreated` | From the business card handle. |
| **Email address** | Not shown | The card lists no email, so none is published. Add one in the contact card and footer if wanted. |
| **Domain** | `https://www.obcreations.site/` | Used for canonical, Open Graph, sitemap and structured data. Update if the domain changes. |
| **Address / map** | Contact section, JSON-LD `geo` | Currently centred on Wellington town. Replace the map `src` with the exact Google Maps embed for the studio if desired. |
| **Opening hours** | Contact section + JSON-LD | Placeholder hours (Mon–Fri 08:30–17:00, Sat 09:00–13:00). |
| **About photo** | `index.html` and `about.html`, About/Our Story sections | The framed image is a placeholder (the lily artwork). Replace its `src` with a warm, professional photo of the family and team, and update the caption. |
| **Testimonials** | Testimonials section | Written to brief. Swap for genuine client quotes. |

## Design

- Palette sampled from the logo and business card: terracotta `#B25F2A`, lily green `#9DC27D`,
  deep sage `#5C7B47`, cream `#FAF6EF`, white. Tokens live in `:root` in `styles.css`.
- Typography: Cormorant Garamond (display) and Jost (body) via Google Fonts.
- Soft, staggered scroll reveals; all motion is disabled for users who prefer reduced motion.

## Accessibility & performance notes

- Skip link, landmark regions, one `h1` per page, logical heading order, labelled controls,
  keyboard-operable menu and gallery lightbox (focus-trapped, Escape/arrow keys).
- Colour contrast meets WCAG AA for text on all backgrounds used.
- Hero image is preloaded with `fetchpriority="high"`; every other image and the map are lazy-loaded.
- No frameworks or third-party scripts; one CSS file and one JS file.

## GitHub Pages

Every push to `main` deploys the site with the workflow in `.github/workflows/pages.yml`.
The preview is served at `https://onckekim.github.io/creations/`. All internal links are
relative, so the same files work at that sub-path and on the real domain.

## SEO

See `docs/SEO.md` for the local SEO setup: titles, descriptions, schema, heading hierarchy,
alt text rules, internal linking and Google Business Profile recommendations.

## Local preview

Any static server works, for example:

```
npx http-server -p 8080 .
```
