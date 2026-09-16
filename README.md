# Creations — Creating Beautiful Celebrations

Marketing website for **Creations**, a flower, decor, event styling, hiring and catering
company based in Wellington, Western Cape, South Africa.

The site is a single, dependency-free static page. There is no build step: upload the
files to any static host (GitHub Pages, Netlify, Vercel, cPanel, Afrihost, etc.) and it works.

## Structure

```
index.html              The page (semantic HTML, JSON-LD structured data, meta/OG tags)
assets/css/styles.css   Design system + all styles (mobile first, brand tokens at the top)
assets/js/main.js       Navigation, scroll reveal, gallery filters + lightbox, testimonial
                        slider, form validation/submission, WhatsApp fallback
assets/img/             Logo (SVG recreations of the brand lily + wordmark), fallback art,
                        Open Graph share image
favicon.svg, site.webmanifest, robots.txt, sitemap.xml
```

## Before going live: things to confirm or replace

| Item | Where | Notes |
| --- | --- | --- |
| **Photos** | `index.html` (`images.unsplash.com` URLs) | Stock placeholders. Replace with Creations' own portfolio photos, keeping the `alt` text descriptive. If a photo fails to load the on-brand lily artwork is shown instead. |
| **Contact form endpoint** | `index.html`, form `action="https://formspree.io/f/YOUR_FORM_ID"` | Create a free form at formspree.io (or any endpoint that accepts a POST and returns JSON) and paste the ID. Until then, submitting the form opens WhatsApp with the enquiry pre-filled. |
| **Phone / WhatsApp** | `083 991 7808` and `wa.me/27839917808` | Taken from the business card. Change in `index.html` and `WHATSAPP` in `main.js` if needed. |
| **Facebook page** | `facebook.com/creationscreated` | From the business card handle. |
| **Email address** | Not shown | The card lists no email, so none is published. Add one in the contact card and footer if wanted. |
| **Domain** | `https://www.obcreations.site/` | Used for canonical, Open Graph, sitemap and structured data. Update if the domain changes. |
| **Address / map** | Contact section, JSON-LD `geo` | Currently centred on Wellington town. Replace the map `src` with the exact Google Maps embed for the studio if desired. |
| **Opening hours** | Contact section + JSON-LD | Placeholder hours (Mon–Fri 08:30–17:00, Sat 09:00–13:00). |
| **Stats** | Trust bar (`850+ celebrations`) | Adjust the figure to Creations' real number. |
| **Testimonials** | Testimonials section | Written to brief. Swap for genuine client quotes. |

## Design

- Palette sampled from the logo and business card: terracotta `#B25F2A`, lily green `#9DC27D`,
  deep sage `#5C7B47`, cream `#FAF6EF`, white. Tokens live in `:root` in `styles.css`.
- Typography: Cormorant Garamond (display) and Jost (body) via Google Fonts.
- Soft, staggered scroll reveals; all motion is disabled for users who prefer reduced motion.

## Accessibility & performance notes

- Skip link, landmark regions, one `h1`, logical heading order, labelled controls,
  keyboard-operable menu, gallery lightbox (focus-trapped, Escape/arrow keys) and slider.
- Colour contrast meets WCAG AA for text on all backgrounds used.
- Hero image is preloaded with `fetchpriority="high"`; every other image and the map are lazy-loaded.
- No frameworks or third-party scripts; one CSS file and one JS file.

## Local preview

Any static server works, for example:

```
npx http-server -p 8080 .
```
