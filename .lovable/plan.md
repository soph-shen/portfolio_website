# Sophia Shen — Data Science Portfolio

A clean, techy multi-page portfolio with editorial spacing, monospaced data accents, and subtle motion. Built as separate routes for SEO and shareability.

## Design direction

- **Palette (clean + techy)**: near-white background `#fafbfc`, deep ink foreground `#0a0f1f`, muted slate text, with an electric indigo `#4f46e5` primary accent and a teal `#2dd4a8` secondary accent for data highlights. Subtle grid/dot background texture in hero.
- **Typography**: Sora (headings, tight tracking, large display sizes) + Manrope (body). JetBrains Mono used sparingly for metric callouts, section numbers (`01 / about`), and tags.
- **Layout language**: generous whitespace, asymmetric grids, thin hairline dividers, oversized headings, small-caps metadata labels. Hover states reveal underlines and arrow glyphs. Light page-transition fades via framer-motion.
- All colors/fonts live as semantic tokens in `src/styles.css`.

## Routes

```
src/routes/
  __root.tsx         -> shared header + footer, page transitions
  index.tsx          -> / (hero, about teaser, featured project, CTA)
  about.tsx          -> /about (bio, education, interests, photo)
  projects.tsx       -> /projects (project list w/ case-study cards)
  contact.tsx        -> /contact (resume download, email, LinkedIn, GitHub)
```

Skills & Tools live as a section inside `/about` (keeps nav to 4 items).

Each route gets its own `head()` with unique title + meta description + og tags.

## Page content

**Home (`/`)**
- Hero: "Sophia Shen — Data Science × Health Policy" with rotating tag (ML / Neuroimaging / Healthcare). Brief tagline. Two CTAs: "View projects" / "Get in touch".
- Quick-stats strip (mono): UNC-CH · Class of '27 · Boerwinkle Lab.
- Featured project teaser (Boerwinkle Lab) with link to /projects.
- Footer.

**About (`/about`)**
- Long-form bio: rising junior at UNC-CH, dual major in Data Science and Health Policy & Management, focus on data in healthcare and ML.
- Education timeline.
- Skills & Tools grid: Python, R, SQL, scikit-learn, PyTorch, Nilearn, NiBabel, pandas, Tableau, Git (placeholder list — easy to edit).
- Portrait placeholder image slot.

**Projects (`/projects`)**
- Project 1 (real): **ML Research Engineer, Neuroimaging — Boerwinkle Lab** (Feb 2026–Present). Full description as provided, with metric callout "77% recall" and stack tags (Python, Nilearn, NiBabel, rs-fMRI).
- Two placeholder project cards labeled "Add your project" so Sophia can fill them in later.

**Contact (`/contact`)**
- Email, LinkedIn, GitHub, resume download button (placeholder PDF link).
- Simple contact intro line.

## Shared components

- `Header` — wordmark "SS" + nav (Home, About, Projects, Contact) with active-link styling.
- `Footer` — minimal: copyright, socials, scroll-to-top.
- `SectionLabel` — mono small-caps section numbering.
- `ProjectCard` — title, role, dates, description, metric chip, tag chips, optional link.

## Technical notes

- Tokens defined in `src/styles.css` using `oklch`; add `--accent-indigo`, `--accent-teal`, `--grid-line`.
- Add Google Fonts (Sora, Manrope, JetBrains Mono) via stylesheet link in `__root.tsx` head.
- Install `framer-motion` for page/section fade-in.
- Replace the placeholder in `src/routes/index.tsx`.
- Generate one portrait/abstract hero image via imagegen, saved to `src/assets/`.
- Each route sets its own `head()` meta (title, description, og:title, og:description). og:image only on leaf routes that have a hero image.

## What I'd need from you later (not blocking)

- Real photo for /about
- Actual resume PDF
- LinkedIn / GitHub / email URLs
- Additional projects to flesh out /projects

I'll use sensible placeholders so the site looks complete on first build.