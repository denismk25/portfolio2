# Denis Kagotho — Portfolio

Static portfolio site built with **Astro 7** and **Tailwind CSS 4**. Zero client
frameworks — the only JavaScript on the page is ~2KB of inline vanilla script for the
theme toggle, mobile nav, scroll progress, scroll reveals and the contact form.

## Commands

```bash
npm run dev
```

| Command           | What it does                             |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Dev server at `http://localhost:4321`    |
| `npm run build`   | Production build into `dist/`            |
| `npm run preview` | Serve the production build locally       |
| `npm run check`   | Type-check `.astro` files                |

## Editing the content

**Everything you'd want to change lives in one file: [`src/data/site.ts`](src/data/site.ts).**
No copy is hard-coded in the markup. That file holds:

| Export           | Drives                                                        |
| ---------------- | ------------------------------------------------------------- |
| `person`         | Hero name/title/pitch, `<title>`, meta description, JSON-LD    |
| `highlights`     | The scrolling results band + the "By the numbers" panel        |
| `about`          | About section                                                  |
| `capabilities`   | The five expandable capability rows                            |
| `caseStudies`    | Case study cards **and** their `/work/<slug>/` detail pages    |
| `additionalWork` | The three shorter paid-media proof points                      |
| `builds`         | The web development list                                       |
| `credentials`    | Certifications & education                                     |
| `toolkit`        | The tool chips, grouped                                        |
| `outro`          | The closing band at the foot of the page                       |

Adding a fifth case study = appending one object to `caseStudies`. The card, the detail
page, the route, the sitemap entry and the "next case study" link all follow automatically.

## No contact anywhere — by design

There is no contact page, no contact section, no contact form, no contact button, and no
email address, phone number or social link anywhere in the site. The page closes on the
`outro` band instead. If you ever want a way for people to reach you, that's a new section
— nothing is left commented out waiting to be switched back on.

## The portrait

Done — it's in the hero, in a squared frame with an offset signal block behind it,
greyscale by default and full colour on hover.

| File                                  | What it is                                          |
| ------------------------------------- | --------------------------------------------------- |
| `assets-source/profile-original.jpg`  | Your untouched original, 5568×3712, 1.1MB           |
| `src/assets/profile.jpg`              | Square 900×900 crop, 161KB — the one the site uses  |

The original is landscape, so it was cropped square and centred on your face
(`left: 950, top: 200, 3300×3300` from the original, then resized to 900×900). To
re-crop differently, run sharp against the original and overwrite `src/assets/profile.jpg`.

Astro then resizes that to WebP at build time and emits a responsive `srcset` — 21KB at
340w, 44KB at 512w, 75KB at 680w. Browsers pull the 21KB file at the size it actually
displays. Replacing `src/assets/profile.jpg` re-runs the whole pipeline on the next build;
no markup changes needed.

The hero picks the file up by glob rather than a hard import, so the build still succeeds
with a single-column hero if the file is ever missing.

## Analytics — Microsoft Clarity

Paste your project ID into `analytics.clarityProjectId` in `src/data/site.ts`, commit, push.
Vercel redeploys and it's live on all pages.

```ts
export const analytics = {
  clarityProjectId: "abcd1234ef",
} as const;
```

Get the ID from [clarity.microsoft.com](https://clarity.microsoft.com) → your project →
Settings → Setup. It's the string in `clarity.ms/tag/<this-bit>`.

How it behaves:

- **Blank ID emits nothing.** No empty script tag, no failed request — the component
  renders nothing at all.
- **Production only.** `npm run dev` never fires Clarity, so your own local sessions stay
  out of the recordings. To smoke-test it locally, run `npm run build && npm run preview`.
- **Doesn't cost you LCP.** The tag injects itself asynchronously, and the head carries a
  `preconnect` to `clarity.ms` so the TLS handshake overlaps the rest of the page.

The ID sits in the repo rather than an env var on purpose: Clarity IDs are public by
definition — visible in the page source of every site that runs Clarity — so hiding one
buys nothing and adds a Vercel config step you can forget.

Clarity records sessions and heatmaps. This site collects nothing itself (no forms, no
contact fields), so the privacy surface is small, but if you ever want EU-facing consent
gating, Clarity's `clarity("consent")` API is the hook.

## Two things to finish before launch

### 1. Custom domain (only when you buy one)

`astro.config.mjs` defaults to `https://deniskagotho.vercel.app`, which is correct for the
free Vercel domain — nothing to do right now. When you move to a custom domain, add the
env var in Vercel (Settings → Environment Variables) and redeploy:

```
SITE_URL=https://yourdomain.com
```

That's the only change needed: canonical tags, `sitemap-index.xml`, `robots.txt` and Open
Graph URLs all read from it.

### 2. Add screenshots

Two slots are wired up and waiting:

- **Case study proof** — drop images in `public/work/`, then fill the `proof` array on any
  case study in `src/data/site.ts`:
  ```ts
  proof: [
    {
      src: "/work/dumpster-broz-gsc.png",
      alt: "Google Search Console showing organic clicks rising over 12 months",
      caption: "Search Console — clicks, Jan–Dec",
    },
  ],
  ```
  A "Proof" block appears on the detail page only when the array has entries. **Blur any
  sensitive client data first.**
- **Web builds** — add `url` (and optionally `image`) to each entry in `builds`. Entries
  with a `url` become clickable links; without one they render as plain text.

## Deploying

The output is fully static — any host works.

**Vercel / Netlify:** connect the repo, set `SITE_URL` in project env vars, and use:

- Build command: `npm run build`
- Output directory: `dist`

**Cloudflare Pages / GitHub Pages:** same build command and output directory.

## Design notes

The layout language — bold display type, squared corners, offset outline blocks, a glass
sticky header, staggered reveals — follows the reference direction. The identity on top of
it is specific to this site:

- **Palette "Signal"** — warm bone paper, cool ink, a lime signal accent for anything
  that represents a number moving, and an indigo plot colour.
- **Type** — Bricolage Grotesque (display), Inter Tight (body), IBM Plex Mono (labels and
  metrics). Metrics use tabular numerals so columns line up.
- **The motif** — ruled graph paper and a search-performance curve that draws itself in
  across the hero, with a tooltip pinned to its endpoint. The hero, results band and outro
  share one "instrument panel" surface: warm sand in light, deep ink in dark.
- **Two accent roles** — `--signal` (lime) is a *fill* colour: buttons, blocks, rules.
  `--accent-text` is the accent for *type*, and swaps to indigo on light surfaces, because
  lime text on bone paper is unreadable. Reach for `text-accent-text`, never `text-signal`.
- **Dark mode** — respects `prefers-color-scheme` on first visit, remembers the manual
  choice in `localStorage`, and is applied before first paint so there's no flash. The
  `dark:` variant is bound to the `.dark` class via `@custom-variant` in `global.css`;
  without that, Tailwind 4 resolves `dark:` against the OS setting and ignores the toggle.

All motion is gated behind `prefers-reduced-motion`.

## SEO

Handled in-build: per-page `<title>`/description, canonical URLs, Open Graph and Twitter
cards, `Person` + `WebSite` + `CreativeWork` JSON-LD, a generated `sitemap-index.xml`,
`robots.txt`, semantic heading order, a skip link, and a 404 page.
