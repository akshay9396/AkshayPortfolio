# AkshayPortfolio - Personal Portfolio Website

A modern personal portfolio website built with **Next.js**, featuring animated sections for Experience, Projects, Skills, Certifications, and Contact — with a floating profile card widget in the corner.

Live at: [akshay9396.vercel.app](https://akshay9396.vercel.app) *(after deployment)*

---

## About

This is the personal portfolio of **Akshay Kanade**, Software Developer. The site presents work history, projects, skills, and contact information in a clean, animated interface with dark/light theme support.

---

## Features

- Animated section reveals and scroll progress bar
- Dark / light theme toggle
- Floating avatar card with LinkedIn, GitHub, and Email links
- Responsive layout (mobile + desktop)
- Static export — no server needed, deploys anywhere for free

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (static export) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Language | TypeScript |
| Deployment | Vercel (free) |

---

## Project Structure

```
AkshayPortfolio/
├── frontend/
│   ├── app/
│   │   ├── page.tsx          # Main portfolio page
│   │   ├── layout.tsx        # Root layout and metadata
│   │   └── globals.css       # Theme tokens and global styles
│   ├── components/
│   │   ├── widgets/
│   │   │   └── TwinFloatingButton.tsx  # Floating avatar / contact card
│   │   ├── sections/         # Hero, Experience, Projects, Skills, etc.
│   │   ├── layout/           # Navbar, ScrollProgress, MobileDrawer
│   │   └── ui/               # GlassCard, TiltCard, GradientText, etc.
│   ├── data/
│   │   └── resume.ts         # All personal data — edit this to customize
│   ├── hooks/                # useScrollSpy, useTheme, useReducedMotion
│   └── public/
│       └── avatar.png        # Your profile photo
```

---

## Local Development

### Prerequisites

- Node.js 20+

### Run locally

```bash
cd frontend
npm install
npm run dev
```

Visit `http://localhost:3000`.

---

## Customization

All personal content lives in one file: `frontend/data/resume.ts`

Edit it to update:
- Your name, contact info, LinkedIn, GitHub
- Work experience and roles
- Projects
- Skills
- Certifications
- Education

Replace `frontend/public/avatar.png` with your own photo.

---

## Deployment (Free — Vercel)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **Add New Project** and import this repo
4. Set **Root Directory** to `frontend`
5. Click **Deploy**

You get a free URL: `https://yourname.vercel.app`

---

## Author

**Akshay Kanade** — Software Developer
GitHub: [github.com/akshay9396](https://github.com/akshay9396)
