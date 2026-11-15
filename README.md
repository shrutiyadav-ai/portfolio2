# ✂️ Scrapbook-Style Developer Portfolio

> A tactile, retro-styled developer portfolio inspired by physical paper notebooks, washi tape, sticky notes, and hand-drawn doodles — powered by **React 19**, **Vite 7**, **Tailwind CSS v4**, and **Framer Motion 14**.

[![React 19](https://img.shields.io/badge/React-19.2.6-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.1.17-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.3.7-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-14.14-FF0055?style=flat&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-F4C84A.svg?style=flat)](LICENSE)

---

## 🎨 Overview & Design Concept

This project moves away from generic minimalist developer portfolios in favor of an **organic, tactile scrapbook aesthetic**. Designed like a personal studio notebook, it layers physical stationery metaphors over modern interactive web technology:

- **Notebook Paper Canvas**: Lined blue ruling (`rgba(49,93,199,0.1)`), pink margin rules, and off-white warm paper (`#FAFAF6`) sitting against a grey drafting grid background (`#D7D7D2`).
- **Tactile Paper Elements**: Realistic polygon-clipped washi tape strips, multi-colored angled sticky notes, index cards, and framed polaroids with custom drop shadows.
- **Hand-Drawn Vector Doodles**: Custom SVG doodles including twinkling stars, daisies, sparkles, gears, curly arrows, pencil brackets, animated squiggle underlines, and a hot cup of chai with rising steam.
- **Neobrutalist Accents**: Chunky solid offset drop shadows (`shadow-[4px_4px_0_#...]`), thick borders, and tactile click feedback (`active:translate-x-[4px]`).
- **Carefully Paired Typography**:
  - **Display / Headers**: [Archivo Black](https://fontsource.org/fonts/archivo-black) (bold, impactful, retro-editorial)
  - **Body / Sans**: [Space Grotesk Variable](https://fontsource.org/fonts/space-grotesk) (clean, quirky, modern tech)
  - **Handwritten Notes**: [Caveat Variable](https://fontsource.org/fonts/caveat) (authentic handwritten annotations)
  - **Terminal & Metadata**: [JetBrains Mono Variable](https://fontsource.org/fonts/jetbrains-mono) (crisp developer monospace)
- **Accessible Motion**: Full `MotionConfig reducedMotion="user"` integration respecting `prefers-reduced-motion` settings.

---

## ✨ Features & Sections

| Section | Key Highlights |
| :--- | :--- |
| **🧭 Sticky Navbar** | Live scroll spy with `IntersectionObserver`, hand-drawn hover underlines, and a continuous multi-stop gradient pencil scroll-progress bar. Includes responsive mobile drawer. |
| **⭐ Hero & 3D Tilt** | Staggered character entrance animation, floating interactive notes, animated sunburst, and a polaroid photo frame with **spring-damped 3D mouse parallax**. |
| **📸 Client-Side Photo Pinner** | Pin your real photo in the browser without writing code. Automatically scales images down with an HTML5 canvas and persists locally via `useSyncExternalStore`. Falls back gracefully to a hand-drawn SVG portrait. |
| **📄 Inlined Resume PDF** | Fully self-contained base64 PDF inlined into the application — download works offline with zero external hosting dependencies. |
| **📜 Scrolling Marquees** | Two continuous infinite looping tickers ("curiosity > perfection", "chai-powered", "open to internships") that pause automatically on hover. |
| **👤 About Me** | Two-column bio, degree & university credentials index card, skill chips, and a late-night developer workspace photo frame with steamy chai illustration. |
| **🧰 The Toolbox** | Categorized skill deck (Programming, Frontend, AI/ML, Backend, Tools) featuring spring-loaded hover chips with official Devicon SVGs and Lucide icons. |
| **💻 Projects Showcase** | Four detailed showcase panels featuring **pure CSS browser window mockups**, live metrics, tech badges, GitHub links, and live demos. |
| **🔍 Interactive Case Studies** | Comprehensive modal dialog for every project with full case study breakdowns, feature lists, keyboard ESC dismissal, and body scroll locking. |
| **🏆 Experience Timeline** | Scroll-driven animated timeline (`useScroll` + `useSpring`) tracing leadership and student council coordination roles. |
| **🎖️ Certifications** | Postage-stamp style credential cards with custom issuer seals (Microsoft, Google Cloud, HP LIFE, freeCodeCamp, L&T EduTech). |
| **🕹️ Interactive Playground** | Embedded retro shell terminal with interactive commands (`whoami`, `skills`, `chai`, `stack`, `clear`), an interactive chai clicker, and a "shake the doodles" physics button. |
| **📬 Contact / Say Hello** | Fast mailto form generator with client-side email regex validation, social profile cards, and animated reply cues. |
| **⚡ Single-File Distribution** | Bundles all scripts, styles, and assets into a single deployable artifact using `vite-plugin-singlefile`. |

---

## 🛠️ Tech Stack & Architecture

### Core Technologies
- **Runtime & Library:** [React 19](https://react.dev/) (`19.2.6`)
- **Build Tool:** [Vite 7](https://vitejs.dev/) (`7.3.7`) with `@vitejs/plugin-react`
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (`4.1.17`) via `@tailwindcss/vite`
- **Language:** [TypeScript 5.9](https://www.typescriptlang.org/) (`5.9.3`)
- **Animation:** [Framer Motion 14](https://www.framer.com/motion/) (`14.14.0`)
- **Iconography:** [Lucide React](https://lucide.dev/) (`1.73.0`) + [Devicon](https://devicon.dev/) (`2.18.0`)
- **Fonts:** `@fontsource-variable/caveat`, `@fontsource-variable/space-grotesk`, `@fontsource-variable/jetbrains-mono`, `@fontsource/archivo-black`
- **Utilities:** `clsx` (`2.1.1`), `tailwind-merge` (`3.4.0`)
- **Packaging:** `vite-plugin-singlefile` (`2.3.0`)

---

## 📂 Project Structure

```text
scrapbook-style-developer-portfolio/
├── public/
│   ├── PHOTO.md                 # Visual guide on replacing the profile picture
│   └── shruti.png               # Default profile portrait
├── src/
│   ├── assets/                  # Studio & desk setup imagery
│   │   ├── desk.jpg
│   │   ├── notebook.jpg
│   │   ├── setup-closeup.jpg
│   │   └── setup-night.jpg
│   ├── components/              # Modular section components
│   │   ├── About.tsx            # About story, education facts, desk photo
│   │   ├── Certifications.tsx   # Verified course stamps and issuers
│   │   ├── Contact.tsx          # Contact links & interactive message form
│   │   ├── decor.tsx            # SVG doodles, washi tape, sticky notes, photo frames
│   │   ├── Experience.tsx       # Timeline of non-coding leadership roles
│   │   ├── Footer.tsx           # Footer, back-to-top button, credits
│   │   ├── Hero.tsx             # Large typography, 3D tilt photo, CTA buttons
│   │   ├── Navbar.tsx           # Responsive nav, scroll progress line, social links
│   │   ├── Playground.tsx       # Interactive mini-terminal, chai counter, interactive doodles
│   │   ├── Projects.tsx         # Featured project cards, CSS mockups, case study modal
│   │   └── Toolbox.tsx          # Tech stack categorized cards & badges
│   ├── data/
│   │   └── resumePdf.ts         # Inlined base64 PDF resume generator & download handler
│   ├── lib/
│   │   └── photo.tsx            # LocalStorage photo pinner store & canvas compressor
│   ├── utils/
│   │   └── cn.ts                # Tailwind class merge helper (clsx + tailwind-merge)
│   ├── App.tsx                  # Main canvas shell with notebook paper styling
│   ├── data.ts                  # Central source-of-truth for profile, projects, and skills
│   ├── index.css                # Tailwind v4 theme, notebook grid lines & keyframe animations
│   └── main.tsx                 # React entry point with font imports
├── index.html                   # HTML template with SEO & OpenGraph meta tags
├── package.json                 # Project dependencies and npm scripts
├── tsconfig.json                # TypeScript compiler configuration
└── vite.config.ts               # Vite configuration with Tailwind & singlefile plugins
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (**version 18 or higher** recommended).

### 1. Clone the Repository
```bash
git clone https://github.com/shrutiyadav-ai/scrapbook-style-developer-portfolio.git
cd scrapbook-style-developer-portfolio
```

### 2. Install Dependencies
```bash
npm install
# or
pnpm install
# or
yarn install
```

### 3. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to explore the portfolio with instant Hot Module Replacement (HMR).

### 4. Build for Production
```bash
npm run build
```
This generates an optimized, production-ready build in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🎯 Featured Projects Included

The portfolio comes configured with 4 showcase projects defined in `src/data.ts`:

1. **SkillBridge** (*Full-Stack Development / AI Integration*)
   - *Description*: Academia-industry collaboration platform connecting students, companies, institutions, and mentors with weighted skill-matching and gap analysis.
   - *Stack*: Next.js, React, TypeScript, Tailwind CSS, Supabase, PostgreSQL, Prisma, NextAuth, Gemini API.
2. **ResumeIQ** (*AI-Powered Application*)
   - *Description*: Intelligent resume analysis tool calculating ATS compatibility scores, keyword match percentages, and learning roadmaps.
   - *Stack*: Next.js, React, TypeScript, Tailwind CSS, Prisma, SQLite, NextAuth, Recharts.
3. **TranslateGPT** (*Multimodal AI Application*)
   - *Description*: Translation suite featuring text translation, Web Speech API voice capture, image OCR (Tesseract.js), and interactive flashcards.
   - *Stack*: Next.js, React, TypeScript, Tailwind CSS, Zustand, Web Speech API, Tesseract.js.
4. **CampusCare** (*Web Application*)
   - *Description*: University grievance ticketing platform with department delegation, priority levels, and resolution status timelines.
   - *Stack*: HTML5, CSS3, JavaScript ES6+, localStorage.

---

## ⚙️ Customization Guide

All personal data, projects, toolbox items, and certifications are consolidated into a single source-of-truth file: **`src/data.ts`**.

### 1. Update Personal Profile & Social Links
Open `src/data.ts` and modify the `PROFILE` object:
```typescript
export const PROFILE = {
  name: "Your Name",
  firstName: "YOURNAME",
  email: "your.email@example.com",
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-profile",
  education: "Your Degree / Program",
  university: "Your University Name",
  universityShort: "Short Campus Name",
  year: "Your Graduation Year",
  cgpa: "Your Score / Honors",
  photoUrl: "", // Direct image URL (optional)
};
```

### 2. Customizing Profile Photo
You have three convenient options:
- **Option A (No-Code, Instant Preview)**: Launch the site, scroll to the hero portrait, and click **"pin your photo"**. Select an image from your computer. The app will automatically scale it down, save it to `localStorage`, and display it across both the Hero and About sections.
- **Option B (Permanent Drop-in)**: Add your image to `public/shruti.jpg` (or `profile.jpg` / `shruti.png`).
- **Option C (Remote URL)**: Set `photoUrl` in `src/data.ts` to any HTTPS image link.

### 3. Adding or Editing Projects
In `src/data.ts`, update the `PROJECTS` array:
```typescript
{
  num: "05",
  title: "Your Project Name",
  category: "Full-Stack Development",
  description: "One or two sentences explaining what real problem it solves.",
  features: ["Feature one", "Feature two", "Feature three"],
  tech: ["React", "TypeScript", "Tailwind CSS"],
  variant: "skillbridge", // Browser window mockup variant
  github: "https://github.com/your-username/repo",
  demo: "https://your-demo.vercel.app/",
  url: "your-demo.vercel.app",
  panelClass: "bg-cobalt text-paper",
  chipClass: "border-paper/40 text-paper",
  btnClass: "bg-mustard text-ink",
  ghostClass: "text-paper/15",
  note: "custom sticky note message ↴",
  noteClass: "bg-mustard text-ink",
  flip: false,
}
```

### 4. Updating the Resume PDF
The resume download button uses `src/data/resumePdf.ts`. To replace it:
- Replace the `RESUME_PDF` base64 data URI string with your own base64-encoded PDF document, **OR**
- Point `downloadResume()` to an external URL or static asset in the `public/` directory:
```typescript
export function downloadResume() {
  const a = document.createElement("a");
  a.href = "/resume.pdf"; // Placed inside public/resume.pdf
  a.download = "Your-Name-Resume.pdf";
  document.body.appendChild(a);
  a.click();
  a.remove();
}
```

### 5. Modifying Theme Colors
Tailwind CSS v4 custom theme tokens are defined directly in `src/index.css`:
```css
@theme {
  --color-paper: #fafaf6;    /* Warm notebook white */
  --color-cream: #f4f0e7;    /* Cream index card */
  --color-ink: #222222;      /* Off-black text & outlines */
  --color-mustard: #f4c84a;  /* Bright mustard yellow */
  --color-cobalt: #315dc7;   /* Classic blueprint cobalt */
  --color-pink: #e96a9a;     /* Accent sticky pink */
  --color-mint: #9bd8bd;     /* Soft pastel mint green */
  --color-fog: #d7d7d2;      /* Grid background grey */
}
```

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Select your repository. Vercel automatically detects Vite:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.

### Deploy to Netlify
1. Create a `netlify.toml` or connect your repository in [Netlify](https://www.netlify.com/).
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Deploy to GitHub Pages
1. In `vite.config.ts`, add the `base` property with your repository name:
   ```typescript
   export default defineConfig({
     base: "/scrapbook-style-developer-portfolio/",
     plugins: [react(), tailwindcss(), viteSingleFile()],
     // ...
   });
   ```
2. Build and push `dist` to your `gh-pages` branch.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE). Feel free to fork, customize, and make it your own!

---

<p align="center">
  Crafted with ☕ and curiosity by <a href="https://github.com/shrutiyadav-ai"><strong>Shruti Yadav</strong></a>
</p>

