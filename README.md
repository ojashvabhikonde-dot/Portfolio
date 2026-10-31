# Modern 3D Developer Portfolio

A modern, responsive, and interactive developer portfolio for **Ojashva Bhikonde**, built with React 19, Three.js 3D canvas, Tailwind CSS, Framer Motion, and dynamic GitHub integration.

## ✨ Features

- **🌐 Dynamic GitHub Synchronization**: Automatically fetches public repositories in real-time from [`@ojashvabhikonde-dot`](https://github.com/ojashvabhikonde-dot) via the GitHub REST API.
- **🔗 Automatic Live Demo Detection**:
  - Automatically identifies live demo links (from repository `homepage` or verified deployments like Vercel).
  - Highlights available live demos with a vibrant "Live Demo" button and pulsing status pill.
  - Gracefully displays "View Source Code" for repositories without a live site.
- **🎯 Categorization & Instant Search**:
  - Filter by **All Repositories**, **Live Demos Only**, **Featured**, **AI & 3D Twin**, or **Web Apps & UI**.
  - Real-time search across titles, descriptions, repository names, and programming languages / tags.
- **🔀 Flexible View Modes**:
  - **Showcase View**: Editorial alternating layout highlighting top projects with rich details.
  - **Grid View**: Compact, responsive modern card grid.
- **🛡️ Resilient Caching & Offline Fallback**:
  - Uses `localStorage` client-side caching to load instantly.
  - Seamlessly falls back to a curated offline dataset if GitHub API rate limits or network issues occur.
- **🎨 3D Interactive Visuals**:
  - High-performance interactive 3D distorted sphere canvas powered by `@react-three/fiber` and `@react-three/drei`.

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS
- **3D & Animations**: Three.js, React Three Fiber, React Three Drei, Framer Motion
- **Icons**: Lucide React, React Icons
- **Data Source**: GitHub REST API v3

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```

### 3. Build for production
```bash
npm run build
```
