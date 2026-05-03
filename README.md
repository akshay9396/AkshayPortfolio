# AkshayPortfolio - Personal Portfolio Website

A modern personal portfolio website built with **Next.js**, featuring animated sections for Experience, Projects, Skills, Certifications, and Contact — with an AI-powered chat twin and job description analyzer.

Live at: [akshay-kanade.vercel.app](https://akshay-kanade.vercel.app)

---

## About

This is the personal portfolio of **Akshay Kanade**, Software Developer. The site presents work history, projects, skills, and contact information in a clean, animated interface — plus two AI features powered by Google Gemini.

---

## Features

- Animated section reveals and scroll progress bar
- Dark / light theme toggle
- Floating avatar card with LinkedIn, GitHub, Email links
- **AI Chat Twin** — ask questions about my experience and skills (powered by Gemini)
- **AI Job Match Analyzer** — paste any job description to get a match score, matched skills, and skill gaps
- Responsive layout (mobile + desktop)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| AI | Google Gemini 2.0 Flash API |
| Language | TypeScript |
| Deployment | Vercel (free) |

---

## AI Features

### Chat Twin (floating button, bottom-right)
Click the avatar → "Ask me anything (AI)". Gemini answers questions about my background, skills, and projects — grounded in my resume data. Responses stream word by word.

### JD Analyzer (section in portfolio)
Paste any job description → AI returns:
- Match score (0–100%) with animated ring
- Verdict: Strong / Good / Partial / Weak Match
- Matched skills (green)
- Skills to develop (yellow)

---

## Project Structure

```
AkshayPortfolio/
├── frontend/
│   ├── app/
│   │   ├── page.tsx               # Main portfolio page
│   │   ├── layout.tsx             # Root layout and metadata
│   │   ├── globals.css            # Theme tokens and global styles
│   │   └── api/
│   │       ├── chat/route.ts      # Gemini streaming chat API
│   │       └── analyze/route.ts   # Gemini JD analyzer API
│   ├── components/
│   │   ├── widgets/
│   │   │   └── TwinFloatingButton.tsx  # Floating avatar + chat panel
│   │   ├── sections/
│   │   │   ├── JDAnalyzer.tsx     # Job description analyzer section
│   │   │   └── ...                # Hero, Experience, Projects, Skills, etc.
│   │   ├── layout/                # Navbar, ScrollProgress, MobileDrawer
│   │   └── ui/                    # GlassCard, TiltCard, GradientText, etc.
│   ├── data/
│   │   └── resume.ts              # All personal data - edit this to customize
│   ├── hooks/                     # useScrollSpy, useTheme, useReducedMotion
│   └── public/
│       └── avatar.png             # Profile photo
```

---

## Local Development

### Prerequisites

- Node.js 20+
- Google Gemini API key (free at [aistudio.google.com](https://aistudio.google.com))

### Run locally

```bash
cd frontend
npm install
```

Create `frontend/.env.local`:
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

```bash
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

## Deployment (Free - Vercel)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **Add New Project** and import this repo
4. Set **Root Directory** to `frontend`
5. Go to **Settings → Environment Variables** and add:
   - `GEMINI_API_KEY` = your Gemini API key
6. Click **Deploy**

You get a free URL: `https://yourname.vercel.app`

---

## Author

**Akshay Kanade** - Software Developer
GitHub: [github.com/akshay9396](https://github.com/akshay9396)
