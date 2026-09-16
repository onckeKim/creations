# Creations: Local SEO Guide

Target market: Wellington, Western Cape, and the surrounding Cape Winelands (Paarl, Stellenbosch, Franschhoek, Worcester).

Target keywords:

| Keyword | Primary page | Supporting pages |
| --- | --- | --- |
| Decor Company Wellington | Home | About |
| Wedding Decor Wellington | Services (Wedding Decor) | Home, Gallery |
| Wedding Decor Western Cape | Services (Wedding Decor) | Home, About |
| Event Decor Wellington | Home | Services, Gallery |
| Party Decor Wellington | Services (Kiddies Party Decor) | Home, Gallery |
| Matric Ball Decor Wellington | Services (Matric Balls) | Home, Gallery |
| Catering Services Wellington | Services (Catering) | Home, Contact |
| Wedding Styling Wellington | Services (Wedding Decor) | About |
| Event Styling Wellington | Services (Corporate Events) | About, Home |

Everything in sections 1 to 7 is already implemented in the site. Sections 8 and 9 are recommendations for you to act on outside the code.

## 1. SEO titles

Keep titles under about 60 characters, lead with the keyword, end with the brand.

| Page | Title |
| --- | --- |
| Home | Wedding & Event Decor Wellington \| Creations Decor Company |
| About | About Creations \| Decor & Event Styling Company, Wellington |
| Services | Wedding, Party & Matric Ball Decor Wellington \| Creations |
| Gallery | Wedding & Event Decor Gallery Wellington \| Creations |
| Contact | Contact Creations \| Decor & Catering Quotes, Wellington |

## 2. Meta descriptions

Under about 155 characters, include the keyword, the location and a reason to click.

| Page | Description |
| --- | --- |
| Home | Trusted decor company in Wellington, Western Cape. Wedding decor, event styling, party decor, matric ball decor and catering with 10+ years of experience. |
| About | Meet Creations, a family-owned decor company in Wellington trusted for 10+ years. Wedding styling, event decor, party decor and catering, Western Cape. |
| Services | Wedding decor, party decor, matric ball decor, corporate event styling and catering services in Wellington and the Western Cape. Request a quote today. |
| Gallery | See wedding decor, party decor, matric ball decor, corporate event styling and catering by Creations, Wellington. Browse by category and request a quote. |
| Contact | Request a quote for wedding decor, event styling, party decor or catering in Wellington, Western Cape. Call 083 991 7808 or message us on WhatsApp. |

## 3. Open Graph and Twitter tags

Every page carries the full set: `og:type`, `og:locale` (en_ZA), `og:site_name`, `og:title`, `og:description`, `og:url`, `og:image` (1200x630 share image), `og:image:width`, `og:image:height`, `og:image:alt`, plus `twitter:card` (summary_large_image), `twitter:title`, `twitter:description` and `twitter:image`.

Also on every page: `geo.region` (ZA-WC), `geo.placename` (Wellington, Western Cape), `geo.position` and `ICBM` coordinates, and a canonical URL.

To refresh how a page previews after editing, paste its URL into Facebook's Sharing Debugger and click "Scrape Again".

## 4. Schema markup

| Page | Types |
| --- | --- |
| Home | `WebSite` and `LocalBusiness` (additional types FoodService and Florist) with name, alternate name, slogan, description, logo, image, telephone, contact point, founder, price range, currencies, postal address, geo coordinates, map link, seven `areaServed` entries (Wellington, Paarl, Stellenbosch, Franschhoek, Worcester, Cape Winelands, Western Cape), opening hours, Facebook `sameAs`, `knowsAbout` topics and six `makesOffer` services, each with a `serviceType` and a URL to its section on the Services page |
| About | `AboutPage` and `BreadcrumbList` |
| Services | `ItemList` of six `Service` items with service types and descriptions, and `BreadcrumbList` |
| Gallery | `CollectionPage` and `BreadcrumbList` |
| Contact | `ContactPage`, `FAQPage` with six questions, and `BreadcrumbList` |

Validate after any edit at https://validator.schema.org and https://search.google.com/test/rich-results.

Two values to confirm: the `foundingDate` of 2015 and the postal code 7655. Change them in `index.html` if they are wrong.

Do not add `aggregateRating` markup unless the reviews are collected on the site itself and shown on the page. Google penalises self-declared ratings.

## 5. Heading hierarchy

One `h1` per page, keyword-bearing `h2` section headings, `h3` for cards and items.

**Home**
- h1: Creating Beautiful Celebrations for Over 10 Years (eyebrow above it: Decor, Styling & Catering, Wellington, Western Cape)
- h2: A family-owned decor company in Wellington
- h2: Wedding, party & event decor services in Wellington
  - h3: Wedding Decor, Kiddies Parties, Matric Balls, Confirmations, Corporate Events, Catering Services
- h2: Wedding & event decor gallery
- h2: What Wellington clients say
- h2: Your decor company in Wellington & the Western Cape
- h2: Ready to Create Something Beautiful?

**About**
- h1: A Passion for Celebrations
- h2: Rooted in Wellington, built on trust
- h2: mission statement
- h2: Five things our clients count on (h3 per quality)
- h2: From first conversation to the final toast (h3 per step)
- h2: More than a decade of beautiful days
- h2: A local decor company in Wellington and the Cape Winelands (h3: Areas we serve)
- h2: CTA

**Services**
- h1: Event decor, styling & catering in Wellington
- h2 per service: Wedding Decor & Styling, Kiddies Party Decor, Matric Ball Decor, Confirmation Decor, Corporate Event Styling, Catering Services in Wellington (h3: Key features under each)
- h2: closing CTA

**Gallery**
- h1: Wedding & event decor gallery
- h2: Let's create yours in Wellington

**Contact**
- h1: Contact Creations in Wellington
- h2: We would love to hear from you, Tell us about your celebration, Based in Wellington, Western Cape, Good to know, Let's Make Your Celebration Unforgettable.

Footer column titles are `h3` on every page.

## 6. Image alt text

Rules: describe what is actually in the photo, mention the service and Creations where true, add the town when known, keep it under about 125 characters, never stuff keywords into a photo that does not show them.

Already applied to the three real photos:

- `gallery-blue-goblet-tablescape.jpg`: "Wedding decor by Creations: a long wooden table styled with blue crystal goblets, beaded charger plates, floral napkins, eucalyptus and pillar candles, with white Chiavari chairs"
- `gallery-confirmation-pink-table.jpg`: "Confirmation decor by Creations in Wellington: a celebration table with soft pink organza runner and chair sashes, a wooden cross favour, tall glass vases of roses and woven placemats"
- `gallery-long-table-pink-sashes.jpg`: "Event decor by Creations: a long wooden banquet table dressed with pink organza and white cross-back chairs tied with pink sashes, set beneath an arched doorway"

Suggested patterns when you replace the stock photos with your own:

| Photo type | Alt text pattern |
| --- | --- |
| Wedding table | Wedding decor by Creations at [venue], Wellington: [linen colour] tablescape with [flowers] and [candles/glassware] |
| Ceremony | Wedding ceremony styling by Creations in [town]: [arch/aisle/chairs] with [flowers] |
| Kiddies party | [Theme] kiddies party decor by Creations in Wellington: balloon garland, backdrop and cake table |
| Matric ball | Matric ball decor by Creations for [school] in [town]: [entrance/draping/centrepieces] |
| Confirmation | Confirmation decor by Creations: [colour] table styling with [flowers] and [symbolic detail] |
| Corporate | Corporate event styling by Creations for [company or event type] in [town] |
| Catering | [Dish or table type] by Creations catering, Wellington |
| Team photo | Leandie O'Brien and the Creations team, event decor company in Wellington |

File names matter too. Use hyphenated, descriptive names such as `wedding-decor-wellington-blush-tablescape.jpg`, not `IMG_4821.jpg`.

## 7. Internal linking

Implemented structure:

- **Navigation** on every page links Home, About, Services, Gallery, Contact, with a Request a Quote button to the contact page.
- **Breadcrumbs** on every subpage (visible and in schema) link back to Home.
- **Homepage** links contextually: the About copy to `about.html` and to the wedding decor, event styling and catering sections; the services intro to `services.html`; each service card to its section; the gallery intro and button to `gallery.html`; the local block to every service section, `about.html#local` and `contact.html`.
- **Services** links each service to the matching gallery category (`gallery.html#weddings`, `gallery.html#kiddies`) and to the contact page from every CTA strip; Confirmations links across to Catering.
- **About** links the story to wedding styling, event styling and catering; the local section to the gallery and contact page.
- **Gallery** links to Services from the intro and to Contact from the CTA.
- **Contact** FAQ answers link to Services and the catering section.
- **Footer** on every page carries a keyword link row: Wedding Decor Wellington, Party Decor Wellington, Matric Ball Decor, Event Styling, Catering Services Wellington, Decor Gallery, Areas We Serve.

Guidelines going forward:

1. Every new page should be reachable within two clicks of the homepage and linked from at least three other pages.
2. Use descriptive anchor text ("wedding decor in Wellington"), never "click here".
3. When a real photo of a specific venue goes into the gallery, mention the venue in the caption and link to the relevant service.
4. If you later add a blog or news section (for example "Matric ball trends 2027" or "Wedding venues in Wellington we love"), link each post to one service page and back to the gallery.

## 8. Local SEO content blocks

Implemented:

- **Homepage "Proudly Local" section**: two paragraphs on being based in Wellington, knowing local venues and suppliers, and serving Paarl, Stellenbosch, Franschhoek and Worcester, beside a list of keyword links.
- **About page "Proudly Local" section**: local story, area pills and a map embed.
- **Services page**: each service mentions Wellington or the Winelands naturally in its description.
- **Contact page**: name, phone and location shown consistently (NAP), a Google Maps embed and directions link.
- **Footer on every page**: "Decor company serving Wellington, Paarl, Stellenbosch, Franschhoek and the Cape Winelands".

Suggested additions over time:

- A short "Venues we work at" list once you have permission from venues to name them. Venue names are strong local signals.
- One page or post per major town if enquiries come from them: "Wedding decor in Paarl", "Matric ball decor in Stellenbosch". Only do this with genuinely different content and real photos from those towns.
- Seasonal posts tied to local search behaviour: matric ball season (August to October), December year-end functions, summer wedding season.
- Ask satisfied clients for a sentence you can quote with their town: "Wedding at [venue], Paarl".

NAP consistency: use exactly `Creations`, `083 991 7808` and `Wellington, 7655, Western Cape` everywhere online, including Facebook and directories. Add a street address to the website and schema once you are happy to publish one; it strengthens local rankings considerably.

## 9. Google Business Profile recommendations

Google Business Profile (GBP) is the single biggest factor for "near me" and map-pack results. Set it up at https://business.google.com.

**Basics**
1. Business name: `Creations` exactly, no keywords added. Google suspends profiles for keyword-stuffed names.
2. Primary category: **Wedding service**. Secondary categories: **Event planner**, **Caterer**, **Party equipment rental service**, **Florist**.
3. Address: if clients visit you, publish the street address. If you work from home, choose "service area business", hide the address and set service areas to Wellington, Paarl, Stellenbosch, Franschhoek, Worcester and Cape Winelands.
4. Phone: 083 991 7808. Website: https://www.obcreations.site/. Hours: Mon to Fri 08:30 to 17:00, Sat 09:00 to 13:00.
5. Description (750 characters max), for example: "Creations is a family-owned decor and event styling company in Wellington, Western Cape, trusted for more than 10 years. We create elegant wedding decor, kiddies party decor, matric ball decor, confirmation and corporate event styling, decor hire and catering services across the Cape Winelands, including Paarl, Stellenbosch and Franschhoek. Founded by Leandie O'Brien, our small team styles every detail personally and delivers with care, creativity and reliability. Request a quote today."

**Services**: add each service with a short description: Wedding Decor, Wedding Styling, Event Decor, Party Decor, Matric Ball Decor, Confirmation Decor, Corporate Event Styling, Decor Hire, Catering Services.

**Photos**: upload at least 20 real photos at launch, then 2 to 4 every month. Include the logo, a team photo, and work photos named descriptively before upload. Geotagged phone photos taken at the venue help.

**Reviews**: aim for a steady flow rather than a burst. After each event, send clients your review link with a short personal message. Reply to every review within a few days, mention the event type and town in your reply ("Thank you for trusting us with your wedding decor in Paarl").

**Posts**: publish a GBP post every 2 to 4 weeks: a recent event, a seasonal offer, matric ball booking reminders. Posts expire visually but keep the profile active.

**Q&A**: seed the Questions section with the same six FAQ questions from the contact page, and answer them yourself.

**Products**: optional, but you can add "Wedding decor packages", "Matric ball packages" and "Catering menus" as product cards linking to the services page.

**Attributes**: mark "Identifies as women-owned" if applicable, "Online estimates", and any accessibility attributes that apply.

**Consistency**: match the GBP name, phone, hours and website to the site and to Facebook exactly. Link the Facebook page to the website and the website to Facebook (already done in the footer and schema).

**Tracking**: connect Google Search Console (verify the domain), submit `sitemap.xml`, and check the GBP Insights monthly for the searches that trigger the profile. Use UTM tags on the GBP website link (for example `?utm_source=google&utm_medium=gbp`) if you use Google Analytics.

## 10. Launch checklist

- [ ] Domain live at https://www.obcreations.site/ with HTTPS
- [ ] Google Search Console verified, sitemap submitted
- [ ] Google Business Profile created and verified
- [ ] Facebook page "About" section matches website NAP and links to the site
- [ ] Real photos uploaded with descriptive file names and alt text
- [ ] Contact form connected (Formspree ID) and tested
- [ ] Rich Results Test passes on all five pages
- [ ] Share preview checked with Facebook Sharing Debugger
