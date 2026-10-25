# Replacing the stock photos

Every stock photo on the site is wired to a file name in `assets/img/`. Upload a photo with the exact name
and it replaces the stock photo automatically. Slots you have not filled keep showing the stock photo, so you
can upload a few at a time. No code changes are needed.

Upload at: https://github.com/onckeKim/creations/upload/main/assets/img

Rules for every file: JPG, lowercase file name exactly as below, under about 400 KB, no spaces.
Export from your phone or editor at the sizes below, then drag the files in and click "Commit changes".
The site republishes in about a minute.

## Page banners (landscape, at least 1800 px wide, about 1800 x 1000)

| File name | Where it appears |
| --- | --- |
| `hero-home.jpg` | Homepage banner behind "Creating Beautiful Celebrations for Over 10 Years" |
| `hero-about.jpg` | About page banner |
| `hero-services.jpg` | Services page banner |
| `hero-gallery.jpg` | Gallery page banner |
| `hero-contact.jpg` | Contact page banner |

Pick wide, uncluttered, well-lit shots. Text is placed over the left side, so keep the subject centred or right.

## Services page (portrait, about 1000 x 1250, 4:5)

| File name | Service |
| --- | --- |
| `service-wedding.jpg` | Wedding Decor |
| `service-kiddies-party.jpg` | Kiddies Party Decor |
| `service-matric-ball.jpg` | Matric Balls |
| `service-confirmation.jpg` | Confirmations |
| `service-corporate.jpg` | Corporate Events |
| `service-catering.jpg` | Catering Services |

## Gallery cards (any orientation, at least 1200 px on the long side)

| File name | Category | Replaces |
| --- | --- | --- |
| `gallery-wedding-01.jpg` | Weddings | Garden reception |
| `gallery-wedding-02.jpg` | Weddings | Bridal bouquet (also on the homepage) |
| `gallery-wedding-03.jpg` | Weddings | Candlelit tablescape |
| `gallery-matric-01.jpg` | Matric Balls | Ballroom (also on the homepage) |
| `gallery-matric-02.jpg` | Matric Balls | Photo wall |
| `gallery-matric-03.jpg` | Matric Balls | Grand finale |
| `gallery-corporate-01.jpg` | Corporate Events | Year-end function |
| `gallery-corporate-02.jpg` | Corporate Events | Product launch |
| `gallery-corporate-03.jpg` | Corporate Events | Client dinner |
| `gallery-kiddies-balloons.jpg` | Kiddies Parties | Balloon backdrop |

Two more gallery cards are already waiting for photos with no stock image behind them. Until you upload
these they show the lily artwork, so upload them or ask for the cards to be removed:

| File name | Category |
| --- | --- |
| `gallery-confirmation-pink-table.jpg` | Confirmations |
| `gallery-long-table-pink-sashes.jpg` | Confirmations |

## Adding more photos later

Name new gallery photos `gallery-[category]-[what-it-shows].jpg`, for example
`gallery-wedding-ceremony-arch-paarl.jpg`, then ask for a new card to be added. Descriptive names help Google.
See `docs/SEO.md` for the alt text patterns.

## Already uploaded

These slots now use your own photos (no stock fallback): `gallery-wedding-01.jpg`, `gallery-matric-01.jpg`,
`gallery-wedding-02.jpg`, `gallery-wedding-03.jpg`, `gallery-wedding-04.jpg`, `gallery-wedding-05.jpg`, `gallery-wedding-06.jpg`, `hero-services.jpg`, `hero-about.jpg`, `gallery-matric-02.jpg`, `gallery-matric-03.jpg`,
`service-wedding.jpg`, `service-matric-ball.jpg`, `service-catering.jpg`, `hero-gallery.jpg`, plus two new Catering gallery cards
(`gallery-catering-canape-boxes.jpg`, `gallery-catering-grazing-platter.jpg`, `gallery-catering-dessert-table.jpg`, `gallery-catering-sweet-savoury-spread.jpg`). Photos from the earlier upload are
listed in `gallery.html`.
