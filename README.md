# jared.dev — Interactive Terminal CV

> My CV as a website, styled like a developer terminal. Type `help` to explore it.

**Live site:** [YOUR-LIVE-URL](https://YOUR-LIVE-URL)

![Screenshot of the site](./docs/screenshot.png)

---

## About

This is my personal CV and portfolio site. I'm **Jared Laubscher**, a front-end developer in Cape Town with 6 years of web development experience, moving from custom PHP WordPress themes to Astro, Next.js/React and Azure Front Door.

I built the site to practise React and TypeScript, and to make a CV that's more fun to read than a PDF. A [PDF version](./public/Jared_Laubscher_CV.pdf) is still available.

## Features

- **Interactive terminal**: type commands like `help`, `about`, `skills`, `experience` and `contact` to read the CV. Quick-command buttons make it work on phones too.
- **Typewriter hero**: a rotating set of role titles that type and delete themselves.
- **Neofetch panel**: my details shown in the style of the Linux `neofetch` command.
- **Git-log career timeline**: each job is shown as a commit, with `+` and `−` lines for what I built and replaced.
- **Infinite tech-stack slider**: a pure CSS marquee with SVG star separators. It pauses on hover.
- **Animated status badge**: a pulsing "available for work" dot that switches to a static "hired" state from one setting.
- **Content in one JSON file**: all text on the page comes from `src/data/cv.json`, so updating the CV never means touching components.
- **Accessible motion**: every animation turns off when the visitor has "reduce motion" enabled.

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | React, TypeScript |
| Build tool | Vite |
| Styling | CSS (dot-grid background and animations hand-written, no animation libraries) |
| Fonts | Space Grotesk, JetBrains Mono, IBM Plex Sans |
| Linting | ESLint |
| Hosting | [Vercel / Netlify] |

## Try the terminal

| Command | What it shows |
| --- | --- |
| `help` | List of commands |
| `whoami` | Who I am |
| `about` | Professional summary |
| `skills` | Tech stack |
| `experience` | Work history |
| `education` | Qualifications |
| `contact` | How to reach me |
| `clear` | Clears the screen |

There's also one hidden command. Hint: it needs admin rights.

## Getting started

You'll need [Node.js](https://nodejs.org/) 20 or newer.

```bash
# clone the repo
git clone https://github.com/YOUR-USERNAME/YOUR-REPO.git
cd YOUR-REPO

# install dependencies
npm install

# start the dev server
npm run dev
```

The site runs at `http://localhost:5173`.

### Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Starts the dev server with hot reload |
| `npm run build` | Type-checks and builds for production into `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Runs ESLint |

## Project structure

```
src/
  assets/            SVGs (status dots, star) and images
  components/        One component per section
    Header.tsx
    Hero.tsx
    Terminal.tsx
    Neofetch.tsx
    StackMarquee.tsx
    Experience.tsx
    Education.tsx
    Contact.tsx
  data/
    cv.json          All text content for the site
    cv.types.ts      TypeScript interfaces for cv.json
    cv.ts            Imports the JSON and applies the types
  App.tsx
  index.css          Design tokens, dot-grid background, animations
public/
  Jared_Laubscher_CV.pdf
```

## Updating the content

All the text lives in **`src/data/cv.json`**. To change the CV, edit that file and the whole site updates, including the terminal's responses.

For example, to add a new job, add an object to `experience.jobs`:

```json
{
  "id": "new-company",
  "commit": "a1b2c3d",
  "branch": "HEAD -> new-company",
  "current": true,
  "role": "Front-end Developer",
  "company": "New Company",
  "start": "Jan 2027",
  "end": "present",
  "summary": "What I do there.",
  "changes": [{ "type": "add", "text": "Something I built" }]
}
```

To switch the badge from "available for work" to "hired", set `"available": false` in `meta`.

## Design

| Token | Colour | Used for |
| --- | --- | --- |
| `--bg` | `#0D1117` | Page background |
| `--surface` | `#161B22` | Cards, title bar |
| `--border` | `#30363D` | Borders |
| `--text-body` | `#C9D1D9` | Paragraphs |
| `--text-heading` | `#E6EDF3` | Headings |
| `--accent` | `#5EEAD4` | Prompts, buttons, highlights |

The full design brief (colours, type scale, spacing, components and motion) is in [`docs/design-brief.pdf`](./docs/design-brief.pdf).

## Deployment

The site is a static build, so it can be hosted anywhere.

- **Vercel:** import the repo. It detects Vite automatically, so no settings are needed.
- **Netlify:** build command `npm run build`, publish directory `dist`.

## Contact

- **Email:** [jared@inboundmarketing.co.za](mailto:jared@inboundmarketing.co.za)
- **Location:** Cape Town, South Africa
- **LinkedIn:** [YOUR-LINKEDIN-URL](https://YOUR-LINKEDIN-URL)

Open to front-end roles in Cape Town or remote.

---

© 2026 Jared Laubscher
