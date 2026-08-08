# Akshay Kanade — AI/ML Portfolio

A modern, responsive personal portfolio built with **Next.js 16**, showcasing experience across **Machine Learning, Computer Vision, Generative AI, Agentic AI, Edge AI, and MLOps**.

The portfolio includes animated sections for experience, projects, technical skills, certifications, and contact, along with an **AI-powered Chat Twin** and an **AI Job Match Analyzer**.

**Live:** [akshay-kanade.vercel.app](https://akshay-kanade.vercel.app)

---

## About

This is the personal portfolio of **Akshay Kanade**, an AI/ML-focused Software Developer working across **Computer Vision, Deep Learning, Generative AI, Agentic AI, Edge AI, and ML deployment**.

The website presents professional experience, selected projects, technical skills, certifications, and education in a responsive and interactive interface.

It also includes AI-powered tools that allow visitors to:

* Ask questions about my background, skills, and projects
* Analyze a job description against my technical profile
* Explore matched skills and potential skill gaps

---

## Features

* Animated section reveals and scroll progress
* Dark / light theme toggle
* Responsive mobile and desktop experience
* Floating profile card with LinkedIn, GitHub, and email links
* **AI Chat Twin** — ask questions about my experience, skills, and projects
* **AI Job Match Analyzer** — analyze any job description against my profile
* Technical skills organized by domain
* Interactive project and experience sections
* Reduced-motion support for accessibility

---

## Core Stack

The portfolio highlights the technologies and tools most relevant to my AI/ML work:

**Python · PyTorch · YOLO · OpenCV · Hugging Face · LLMs · RAG · Agentic AI · n8n · TensorRT · Docker · MLflow · FastAPI · AWS · CI/CD**

### Core Areas

* **Machine Learning:** PyTorch, TensorFlow, Scikit-learn
* **Computer Vision:** YOLO, OpenCV, Object Detection, Segmentation, Classification
* **Generative AI:** LLMs, Hugging Face Transformers, RAG, Embeddings, Semantic Search
* **Agentic AI:** AI Agents, Agentic Workflows, Function Calling, n8n, Workflow Automation
* **Edge AI:** TensorRT, ONNX, Quantization, Model Optimization, NVIDIA Jetson
* **MLOps:** MLflow, DVC, Docker, Kubernetes, CI/CD
* **Cloud:** AWS, Azure ML, Google Cloud Platform
* **Backend:** FastAPI, REST APIs
* **Development:** Git, GitHub, TypeScript, JavaScript, React, Next.js

---

## AI Features

### AI Chat Twin

The floating AI assistant allows visitors to ask questions about my:

* Professional experience
* Technical skills
* Projects
* Education
* Certifications
* AI/ML background

The assistant is grounded in portfolio and resume data and provides streamed responses through the Groq API.

### AI Job Match Analyzer

Visitors can paste a job description and receive an AI-generated analysis including:

* **Match score:** 0–100%
* **Verdict:** Strong / Good / Partial / Weak Match
* **Matched skills**
* **Skills to develop**
* Profile-to-job alignment

This provides a quick way to understand how my current technical profile aligns with a specific role.

---

## Tech Stack

| Layer      | Technology          |
| ---------- | ------------------- |
| Framework  | Next.js 16          |
| Language   | TypeScript          |
| Styling    | Tailwind CSS v4     |
| Animations | Framer Motion       |
| Icons      | Lucide React        |
| AI API     | Groq API            |
| AI Models  | LLM-based inference |
| Deployment | Vercel              |

---

## Project Structure

```text
AkshayPortfolio/
├── frontend/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   └── api/
│   │       ├── chat/
│   │       │   └── route.ts
│   │       └── analyze/
│   │           └── route.ts
│   │
│   ├── components/
│   │   ├── widgets/
│   │   │   └── TwinFloatingButton.tsx
│   │   ├── sections/
│   │   │   ├── JDAnalyzer.tsx
│   │   │   └── ...
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── ScrollProgress.tsx
│   │   │   └── MobileDrawer.tsx
│   │   └── ui/
│   │       ├── GlassCard.tsx
│   │       ├── TiltCard.tsx
│   │       ├── GradientText.tsx
│   │       └── ...
│   │
│   ├── data/
│   │   └── resume.ts
│   │
│   ├── hooks/
│   │   ├── useScrollSpy.ts
│   │   ├── useTheme.ts
│   │   └── useReducedMotion.ts
│   │
│   └── public/
│       └── avatar.png
```

---

## Local Development

### Prerequisites

* Node.js 20+
* npm
* Groq API key

### Installation

```bash
cd frontend
npm install
```

Create `frontend/.env.local`:

```env
GROQ_API_KEY=your_groq_api_key_here
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Customization

Most personal portfolio content is centralized in:

```text
frontend/data/resume.ts
```

You can update:

* Name and profile information
* Contact information
* LinkedIn and GitHub
* Professional experience
* Projects
* Technical skills
* Certifications
* Education
* Other resume information

To replace the profile image:

```text
frontend/public/avatar.png
```

---

## Deployment

The application can be deployed for free using Vercel.

### 1. Push to GitHub

Push the repository to your GitHub account.

### 2. Import into Vercel

Create a new project in Vercel and import the GitHub repository.

### 3. Set Root Directory

Set the project root directory to:

```text
frontend
```

### 4. Add Environment Variable

In Vercel, go to:

**Settings → Environment Variables**

Add:

```text
GROQ_API_KEY=your_groq_api_key
```

### 5. Deploy

Deploy the project.

Vercel will provide a URL similar to:

```text
https://your-project.vercel.app
```

---

## Author

**Akshay Kanade**

AI/ML Software Developer

**GitHub:** https://github.com/akshay9396
