# 🤖 ROBO WARS 2026 | Techfest, IIT Bombay
### Premium Cyborg-HUD Combat Sports Landing Page

Welcome to the official repository for the **ROBO WARS 2026** landing page, co-branded for **Techfest, IIT Bombay**. This application is designed to mimic a high-fidelity cyberpunk operating console, blending elements from a Iron Man HUDs, and Unreal Engine 5 diagnostics.

---

## 🚀 Key Visual & Functional Features

The landing page features deep HSL-tailored `#050816` space-blacks with glowing cyan (`#00FFFF`) and purple (`#7B61FF`) accents. The UI is built around an immersive **Cyborg Console** dashboard layout:

### 1. Cinematic Hero & HUD Framework
- **Cinematic Background Embed**: An optimized looping video trailer (Video ID: `SY81p7kTOP8`) running seamlessly in the background under overlay filters.
- **HUD Frame & Reticles**: A fixed overlay of digital scanning grid lines, reticle scopes, mouse-following custom glow tracking circles, and structural brackets.
- **Quick Status Nodes**: Live tickers displaying server connection states, latency, and AI strategy system logs.

### 2. Holographic Robotics Registration
- **Interactive Mech Selector**: Applicants can select their combat drone subclass (Titan X, Cyber Phantom, Inferno MK-II, or Steel Reaper) inside the form.
- **Diagnostics Scanner Progress**: Generates an active sweep scanner, displaying real-time text compiling logs, a loading telemetry loop, and percentage calculations.
- **Pneumatic Shutter Reveal**: When registration finishes, dual metallic sliding shutters slide open to reveal the ticket.
- **Dynamic Widescreen Combat Pass**: Renders a custom keycard showing the commander's info, division details, code bar, and a glowing CAD outline of their chosen mech.

### 3. Cyborg Command Center (Telemetry Dashboard)
- **Holographic Audio Decryption**: A 28-band visualizer that actively bounces with randomized cyborg frequency loops.
- **Wargames Sonar Tracking Grid**: A glowing circular radar sweep indicator tracking target coordinates, lock percentages, and active threat distances.
- **Dynamic Telemetry Console**: A high-tech system console displaying simulated automated boot sequences and network diagnostic warnings.

### 4. Interactive Arena SVG Layout
- **Hazard Zones & Perimeter Grid**: Detailed vector diagram mapping the combat zone, showing warning lights, hazardous flame gates, and electric defensive shield rings.
- **Dynamic Sweeping Lasers**: Laser paths that sweep the arena continuously on an animation loop.
- **Responsive Telemetry Highlights**: Hovering or selecting tactical zones updates active diagnostics overlays detailing dimensions, shield integrity, and system health status.

### 5. Scroll-Linked Progress Roadmap
- **Neon Circuit Dot Tracker**: An SVG circuit trace path where a glowing cyan node travels down the timeline, dynamically synced to the user's scroll depth.
- **Interactive Nodes**: Glowing milestone cards that undergo 360-degree holographic rotation upon mouse hover.

### 6. Count-up Stats & Comm Logs
- **Dynamic Value Counters**: Animating counters that count up to massive figures for Teams (500+), Prize Pool (₹5 Lakhs+), and Participants (10,000+).
- **Glassmorphic Grid Cards**: Futuristic communication cards displaying quotes, feedback, and telemetry data from previous league commanders.

---

## 🛠️ Technical Stack & Architecture

This application is built with a focus on **pure-rendering performance** and hardware GPU compositing layers:

- **Core Framework**: React 19 (Function components, React hooks)
- **Bundler & Server**: Vite 8
- **Styling Engine**: Tailwind CSS v4 (Sleek variables, HSL-colors, custom utility classes)
- **Animations Library**: Framer Motion (Scroll trackers, micro-interactions, layout transitions)
- **Vector Icons**: Lucide React (High-tech HUD telemetry decals)

---

## ⚡ Development & Setup Instructions

To run this application locally, follow these steps:

### 1. Prerequisites
Ensure you have **Node.js (v18+)** installed.

### 2. Clone and Install Dependencies
Navigate into the `vite_app` directory and install the packages:
```bash
cd vite_app
npm install
```

### 3. Run the Development Server
Launch the local Vite server:
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 4. Code Quality & Formatting
Run ESLint to verify codebase syntax and React rules compliance:
```bash
npm run lint
```

### 5. Build for Production
Bundle the optimized HTML, JS, and CSS static files to the `dist/` directory:
```bash
npm run build
```
*(The production build is fully optimized, yielding a build bundle size of ~468KB in under 1 second).*

### Live Url
```
https://robo-wars-cyborg-theme.vercel.app/
```
