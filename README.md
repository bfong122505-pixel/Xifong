# Chum Sivfong - Portfolio Website

A modern, high-performance, and responsive developer portfolio built with **React 19**, **Vite**, **Tailwind CSS v4**, **GSAP**, and **WebGL**.

Refactored following **Clean Architecture** principles to separate concerns cleanly between data (domain content), reusable UI primitives, layout structures, and feature sections.

---

## 🏛️ Clean Architecture & Project Structure

The project decouples **domain data** from **presentation components**, making it straightforward to maintain, test, and customize content without touching layout code.

```text
Xifong/
├── public/                     # Static media assets served at root
│   ├── images/                 # Project screenshots, tech icons, avatar
│   └── favicon.svg             # Website favicon
├── src/
│   ├── components/             # Presentation Layer
│   │   ├── common/             # Reusable UI primitives & animations (agnostic to domain data)
│   │   │   ├── BlurText.jsx          # Motion-powered blur typography
│   │   │   ├── ComicCard.jsx         # Retro comic-book interactive 3D card
│   │   │   ├── DepthCarousel.jsx     # GSAP 3D depth perspective carousel
│   │   │   ├── FloatingRibbonText.jsx# Sine-wave ribbon letter animation
│   │   │   ├── GradientWaveText.jsx  # CSS hardware-accelerated animated gradient text
│   │   │   ├── LightningCanvas.jsx   # Interactive WebGL procedural lightning shader
│   │   │   ├── ScrollReveal.jsx      # IntersectionObserver viewport entrance wrapper
│   │   │   ├── TargetCursor.jsx      # GSAP magnetic target cursor
│   │   │   ├── TextType.jsx          # GSAP animated typewriter typography
│   │   │   └── index.js              # Common barrel export
│   │   ├── layout/             # Shell & structural components
│   │   │   ├── Header.jsx            # Sticky blurred navigation bar with mobile drawer
│   │   │   ├── Footer.jsx            # Dynamic copyright & branding footer
│   │   │   └── index.js              # Layout barrel export
│   │   ├── sections/           # Feature & domain sections
│   │   │   ├── Hero/                 # Hero section & 3D tech badge visualizer
│   │   │   │   ├── HeroSection.jsx
│   │   │   │   ├── TechBadges3D.jsx
│   │   │   │   └── index.js
│   │   │   ├── TechStack/            # Infinite marquee tech stack slider
│   │   │   │   ├── TechSlider.jsx
│   │   │   │   └── index.js
│   │   │   ├── Experience/           # Project portfolio showcase
│   │   │   │   ├── ExperienceSection.jsx
│   │   │   │   ├── ProjectCard.jsx
│   │   │   │   └── index.js
│   │   │   ├── About/                # Personal bio, education, and skill groups
│   │   │   │   ├── AboutSection.jsx
│   │   │   │   ├── InfoBadge.jsx
│   │   │   │   └── index.js
│   │   │   ├── Contact/              # Contact info & animated social link cards
│   │   │   │   ├── ContactSection.jsx
│   │   │   │   ├── SocialCard.jsx
│   │   │   │   └── index.js
│   │   │   └── index.js              # Sections barrel export
│   │   └── index.js            # Unified components entry point
│   ├── data/                   # Data / Domain Layer (single source of truth)
│   │   ├── contact.js          # Social channels, contact links, and gradients
│   │   ├── hero.js             # Hero headlines, call-to-actions, and badge images
│   │   ├── navigation.js       # Header navigation links & brand text
│   │   ├── personalInfo.js     # Biography, quick stats, and categorized skills
│   │   ├── projects.js         # Project showcase items, live links, and image previews
│   │   ├── techStack.js        # Tech stack logos and labels for the slider
│   │   └── index.js            # Unified data barrel export
│   ├── styles/                 # Styling Layer
│   │   └── index.css           # Tailwind v4 configuration, theme animations & plugins
│   ├── App.jsx                 # Main application composition
│   ├── index.css               # Stylesheet entry point
│   └── main.jsx                # React DOM entry point
├── jsconfig.json               # Absolute path mapping (@/*) for editors
├── vite.config.js              # Vite bundler config with path aliases
└── package.json
```

---

## 🚀 Key Improvements & Architectural Highlights

1. **Separation of Concerns**:
   - Content and configuration live entirely inside `src/data/`.
   - Modifying personal details, projects, skills, or links requires zero changes to UI JSX.

2. **Clean Naming Conventions**:
   - Removed filenames with spaces (e.g. `BlurText .jsx` -> `BlurText.jsx`).
   - Fixed misnomers (e.g. `GlitchText.jsx` -> `LightningCanvas.jsx`, `LineWaves.jsx` -> `ComicCard.jsx`).
   - Fixed typos (e.g. `socailbox.jsx` -> `SocialCard.jsx`).
   - PascalCase applied consistently across all component files.

3. **DRY (Don't Repeat Yourself)**:
   - `TechSlider` maps dynamically over data instead of hardcoding four duplicate HTML blocks.
   - `ExperienceSection` consumes `projectsData` and reuses `ProjectCard`.
   - `ContactSection` consumes `contactData` and reuses `SocialCard`.
   - `AboutSection` consumes `personalInfoData` and reuses `InfoBadge`.

4. **Zero Lint Errors & React 19 Compliance**:
   - Removed all unused `import React from 'react'` statements (not needed in modern JSX transform).
   - Fixed `useRef` access during render inside `TextType.jsx` and `DepthCarousel.jsx`.
   - Clean ESLint pass with **0 errors and 0 warnings**.

5. **Path Aliasing**:
   - Configured `@/` alias pointing to `./src/` in `vite.config.js` and `jsconfig.json`.

---

## 🛠️ Development & Build Commands

```bash
# Start local development server
npm run dev

# Run ESLint to verify code quality
npm run lint

# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```
