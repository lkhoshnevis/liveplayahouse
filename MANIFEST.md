# Playa House — Site Asset Export

All production images from this site, ready to copy into another template of the same site.

## Quick transfer

Copy these folders into the new project:

| From (this export) | To (new template) |
|---|---|
| `public/images/` | `public/images/` |
| `public/seo/` | `public/seo/` |
| `app/favicon.ico` | `src/app/favicon.ico` |

After copying, image paths in `src/lib/content.ts` and components should work without changes.

---

## Full inventory (21 files)

### Brand & UI textures

| File | Label | Used on |
|---|---|---|
| `public/images/gradient-purple.jpg` | Purple liquid gradient background | Home hero (`HeroScroll`, `globals.css`), gradient sections |
| `public/images/grain.png` | Film grain overlay | `globals.css` (`.grain-overlay`) |
| `public/seo/favicon.png` | Site favicon (PNG) | `layout.tsx` metadata icons |
| `app/favicon.ico` | Site favicon (ICO) | Next.js app icon |

### Campus & house photos

| File | Label | Used on |
|---|---|---|
| `public/images/ucsb-aerial.jpg` | UCSB aerial campus photo | Home beliefs scroll, House page, Stats section |
| `public/images/house-cove.jpg` | Playa House at The Cove | Home beliefs scroll, House page |

### Affiliation logos

| File | Label | Organization | Used on |
|---|---|---|---|
| `public/images/logo-1.png` | Founders Inc logo | [f.inc](https://f.inc/) | People page affiliations, Future supporters |
| `public/images/logo-2.png` | The Residency logo | [livetheresidency.com](https://www.livetheresidency.com/) | People page affiliations, Future supporters |
| `public/images/logo-yc.png` | Y Combinator logo | [ycombinator.com](https://ycombinator.com/) | People page affiliations |
| `public/images/logo-4.png` | Buildspace logo | [buildspace.so](https://buildspace.so/) | People page affiliations |
| `public/images/logo-5.png` | Leap Year logo | [takeleapyear.com](https://www.takeleapyear.com/) | People page affiliations |

### PH1 residents (B&W headshots)

| File | Label | Person | Used on |
|---|---|---|---|
| `public/images/resident-leon.jpg` | Leon Khoshnevis | Founder of Playa House | People page, Home beliefs #2 |
| `public/images/resident-kautilya.jpg` | Kautilya P | Blue-collar recruiting software | People page |
| `public/images/resident-joaquin.jpg` | Joaquin Del Pego | Law firm time log automation | People page, Home beliefs #3 |
| `public/images/resident-tobias.jpg` | Tobias Von Koch | Dating app | People page |
| `public/images/resident-stefano.jpg` | Stefano Colmant | Trading automation software | People page, Home beliefs #3 |
| `public/images/resident-evan.jpg` | Evan McCall | University math performance tools | People page |
| `public/images/resident-arthur.jpg` | Arthur Garzon | Wildfire drone detection | People page, Home beliefs #2, Alumni |
| `public/images/resident-sebastian.jpg` | Sebastian Vaughan | Short-term rental safety | People page |

### Mentors & supporters

| File | Label | Person | Used on |
|---|---|---|---|
| `public/images/mentor-nader.png` | Nader Khalil portrait | NVIDIA / Brev.dev founder | People page mentors, Future supporters |
| `public/images/mentor-nick.png` | Nick Linck portrait | The Residency founder | People page mentors, Future supporters |

---

## Usage by page

### Home (`/`)
- `gradient-purple.jpg` — hero + purple section backgrounds
- `grain.png` — texture overlay
- `ucsb-aerial.jpg`, `house-cove.jpg` — Beliefs scroll belief #1
- `resident-leon.jpg`, `resident-arthur.jpg` — Beliefs scroll belief #2
- `resident-joaquin.jpg`, `resident-stefano.jpg` — Beliefs scroll belief #3

### People (`/people`)
- All 8 `resident-*.jpg` — resident grid
- All 5 `logo-*.png` — affiliation row
- `mentor-nader.png`, `mentor-nick.png` — mentor portraits

### House (`/house`)
- `house-cove.jpg`, `ucsb-aerial.jpg` — house photo grid

### Future (`/future`)
- `mentor-nader.png`, `mentor-nick.png` — supporter cards
- `logo-1.png`, `logo-2.png` — supporter badges

### Global
- `favicon.png`, `favicon.ico` — browser tab icon

---

## Content reference paths

These paths are defined in `src/lib/content.ts`:

```
/images/gradient-purple.jpg
/images/grain.png
/images/ucsb-aerial.jpg
/images/house-cove.jpg
/images/logo-1.png
/images/logo-2.png
/images/logo-yc.png
/images/logo-4.png
/images/logo-5.png
/images/resident-leon.jpg
/images/resident-kautilya.jpg
/images/resident-joaquin.jpg
/images/resident-tobias.jpg
/images/resident-stefano.jpg
/images/resident-evan.jpg
/images/resident-arthur.jpg
/images/resident-sebastian.jpg
/images/mentor-nader.png
/images/mentor-nick.png
/seo/favicon.png
```

---

## Labeled reference folder

See `labeled/` for the same files grouped by category with human-readable filenames. Those names are for reference only — use the filenames in `public/` when copying into a new template.

---

## Not included (external / inline)

These are not image files in this export:

- Social icons — inline SVGs in `src/components/icons.tsx`
- Google Maps embed — external iframe URL in `content.ts`
- Instagram reels — embedded via `InstagramEmbed.tsx`
- Apply form — Google Form iframe
- Sponsor deck — Google Drive iframe

---

*Exported from playahouse-site on 2026-06-09*
