# Trisha Pal — Portfolio

Personal portfolio site built with Next.js and Tailwind CSS. Showcases my background as a full-stack developer and competitive programmer, along with projects, technical skills, and a contact form.

**Live site:** _add your deployed URL here once you deploy_

---

## Tech Stack

| Layer      | Tech |
|------------|------|
| Framework  | [Next.js 16](https://nextjs.org/) (App Router) |
| Language   | TypeScript |
| Styling    | [Tailwind CSS v4](https://tailwindcss.com/) |
| Animation  | Custom hooks (`IntersectionObserver`, typewriter effect) — no external animation library |
| API        | Next.js Route Handlers (`/api/contact`) |

---

## Features

- Fully responsive layout (mobile → desktop)
- Terminal-style animated hero with a typewriter effect cycling through roles
- Scroll-triggered reveal animations on every section, respecting `prefers-reduced-motion`
- Hover micro-interactions on project and skill cards
- Working contact form wired to a Next.js API route (`src/app/api/contact/route.ts`)
- Content-driven sections — projects and skills are edited via data files, not JSX
- Dark theme using CSS custom properties, so the palette can be re-themed from one place

---

## Project Structure

```
portfolio/
├─ src/
│  ├─ app/
│  │  ├─ api/contact/route.ts   # contact form submission handler
│  │  ├─ layout.tsx             # root layout + metadata
│  │  ├─ page.tsx                # composes all sections
│  │  └─ globals.css            # theme tokens + keyframe animations
│  ├─ components/
│  │  ├─ Navbar.tsx
│  │  ├─ Hero.tsx
│  │  ├─ About.tsx
│  │  ├─ Skills.tsx
│  │  ├─ Projects.tsx
│  │  ├─ ProjectCard.tsx
│  │  ├─ CompetitiveProgramming.tsx
│  │  ├─ Contact.tsx
│  │  ├─ Footer.tsx
│  │  ├─ Reveal.tsx             # scroll-reveal wrapper
│  │  └─ icons.tsx              # inline SVG icon set
│  ├─ hooks/
│  │  ├─ useReveal.ts           # IntersectionObserver-based reveal
│  │  └─ useTypewriter.ts       # hero typing effect
│  ├─ data/
│  │  ├─ projects.ts            # edit to add/remove projects
│  │  └─ skills.ts              # edit to change skill groups
│  └─ types/
│     └─ index.ts               # shared TypeScript types
├─ public/                      # static assets (add resume.pdf here)
├─ package.json
└─ postcss.config.mjs
```

---

## Getting Started

### Prerequisites
- Node.js 18.18+ (check with `node -v`)
- npm

### Install & run

```bash
git clone <your-repo-url>
cd portfolio
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
npm start
```

---

## Editing Content

- **Projects** — edit `src/data/projects.ts`. Each entry needs a `slug`, `title`, `description`, `tags`, and an `icon` key (`school | blood | legal | dental`).
- **Skills** — edit `src/data/skills.ts`.
- **Resume** — drop your PDF at `public/resume.pdf`; the Navbar's "Resume" button links there.
- **Contact form** — `src/app/api/contact/route.ts` currently only validates and logs submissions. Connect it to an email provider (e.g. [Resend](https://resend.com/), Nodemailer + SMTP, or Formspree) before relying on it in production.

---

## Deployment

The easiest path is [Vercel](https://vercel.com/), the platform Next.js is built by:

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no config needed. Deploy.

Other platforms (Netlify, Render, a VPS) work too, provided they support Node.js server runtimes for the API route.

---

## Author

**Trisha Pal**
CSE Student, CCN University of Science & Technology (2023–2027)
Email: trishapal160@gmail.com