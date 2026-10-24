# Anu Kumar Sah — Infrastructure & DevSecOps Portfolio

A modern, cybersecurity-aesthetic personal portfolio website for **Anu Kumar Sah**, an **Infrastructure Engineer** with 4+ years of hands-on experience in AWS cloud ecosystems, Linux systems engineering, Infrastructure as Code (Terraform), and DevSecOps security hardening.

![DevSecOps Portfolio Preview](https://raw.githubusercontent.com/AnuSah99/AnuSah99/main/banner.png)

---

## ⚡ Technical Architecture & Design Philosophy

- **Framework**: React 18 with TypeScript and Vite
- **Styling**: Tailwind CSS with custom cybersecurity theme variables
- **Visuals & Aesthetics**:
  - Near-black `#06090e` base palette
  - Neon green (`#00ff88`) and electric cyan (`#00d2ff`) accents
  - Glassmorphic translucent cards (`backdrop-blur-md`)
  - Interactive Canvas particle background with automatic `prefers-reduced-motion` detection
  - Terminal scanlines & glowing security badges
- **Iconography**: Lucide React
- **Performance**: High Lighthouse score, optimized bundle size (~72 kB gzipped), zero bloat

---

## 🚀 Key Features

1. **Animated Hero Section**:
   - Headline: *"Engineering Secure, Scalable & Automated Infrastructure"*
   - Live simulated typing terminal cycling through real DevOps commands (`terraform plan`, `trivy image`, `kubectl get nodes`, `aws sts get-caller-identity`).
   - Quick action CTAs, copy-email toast, and security spec counters.

2. **Professional About Section**:
   - 4+ years background narrative.
   - Core engineering pillars: Declarative IaC, Shift-Left DevSecOps, Cloud High Availability, and Observability & Telemetry.
   - Live system spec table with verifiable details.

3. **Experience Timeline**:
   - **AuthBridge** — Infrastructure Engineer (Current)
   - **Microland** — System Engineer (Previous)
   - Editable date placeholders (`[Start Date] – Present`, etc.) with realistic, industry-standard responsibilities for AWS, Linux, automation, monitoring, incident response, and security compliance.

4. **Categorized Technical Skills**:
   - Filterable tabs across 6 domains: AWS & Cloud, IaC (Terraform), Linux & Scripting, DevOps & Containers, Security & DevSecOps, and Monitoring & Observability.
   - Real-time search filter and proficiency level tags (`Proficient`, `Hands-on`).

5. **Architectural Showcases (Projects)**:
   - 3 projects marked with clear "Demo Architecture" tags until verified:
     1. *Automated Multi-Tier AWS Infrastructure via Terraform*
     2. *Automated DevSecOps CI/CD Pipeline with Security Gates*
     3. *Enterprise Infrastructure Observability & Linux Hardening Stack*
   - Interactive *"Inspect Blueprint"* modal with ASCII topology diagrams, security highlights, and implementation details.

6. **DevSecOps Pipeline Visualizer**:
   - Interactive 7-stage pipeline (Plan & Code → SAST & Secrets → Container Build → CVE Scan → IaC Provision → Zero-Downtime Deploy → Observability & Guard).
   - Live step indicators, security gate requirements, and tool stacks.

7. **Safe Interactive Portfolio Terminal**:
   - Direct shell prompt: `anu@infra:~$ `
   - Supported commands: `help`, `about`, `skills`, `experience`, `projects`, `pipeline`, `status`, `contact`, `whoami`, `resume`, `date`, `matrix`, `echo`, `clear`.
   - Keyboard history navigation (Up/Down arrow keys) and mobile-friendly quick-command chips.

8. **Contact & Communication Endpoints**:
   - Direct email copy with clipboard feedback (`code.anukrsah@gmail.com`).
   - Direct mailto link and interactive message dispatch simulator.
   - Verified profile links for LinkedIn (`https://www.linkedin.com/in/sah-anu/`) and GitHub (`https://github.com/AnuSah99`).

9. **Sticky Responsive Navigation & Footer**:
   - Translucent glassmorphism navbar with `SYS: OK` health pulse and mobile drawer.
   - Production telemetry status and smooth back-to-top scrolling in footer.

---

## 🛠️ Quickstart & Local Development

### Prerequisites
- Node.js (v18 or newer recommended)
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/AnuSah99/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to explore the live website.

### Production Build

```bash
# Compile TypeScript and bundle with Vite
npm run build

# Preview production build locally
npm run preview
```

---

## 📝 How to Customize Details

All profile content, employment dates, skills, and project blueprints are centralized in:
📂 `src/data/portfolioData.ts`

- **Updating Experience Dates**: Edit the `period` field under `EXPERIENCES`.
- **Modifying Skills**: Add or refine entries under `SKILL_CATEGORIES`.
- **Adding Projects**: Update or add cards under `PROJECTS`.
- **Configuring Personal Links**: Edit `PERSONAL_INFO` (email, LinkedIn, GitHub, locations).

---

## 🌐 Deployment Options

- **AWS S3 + CloudFront**: Build via `npm run build` and sync the `dist/` directory to an S3 bucket configured with CloudFront CDN and an SSL certificate via AWS Certificate Manager (ACM).
- **GitHub Pages**: Deploy `dist/` directly via GitHub Actions.
- **Vercel / Netlify**: Connect the repository and select Vite as the build preset.

---

## 📄 License
MIT License &copy; Anu Kumar Sah
"# Devops_Portfolio" 
