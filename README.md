# ⚡ Alex Rivera — Developer Portfolio

A **production-grade, visually striking** personal portfolio website built with **React 18** and served by **Nginx** inside a Docker container.

---

## 📐 Architecture

```
portfolio/
├── public/
│   └── index.html            # HTML entry point
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Fixed navigation with mobile menu
│   │   ├── Hero.jsx          # Animated particle hero + avatar
│   │   ├── About.jsx         # Bio, education, certifications
│   │   ├── Skills.jsx        # Animated skill bars + tool badges
│   │   ├── Projects.jsx      # Dynamic project cards + Add modal
│   │   ├── Experience.jsx    # Tabbed work timeline
│   │   ├── Contact.jsx       # Email form + Hire Me CTA
│   │   └── Footer.jsx        # Social links + copyright
│   ├── data/
│   │   └── portfolioData.js  # ← EDIT THIS FILE to personalise
│   ├── styles/
│   │   └── globals.css       # Design system (CSS variables, animations)
│   ├── App.js
│   └── index.js
├── nginx.conf                # Nginx SPA config with gzip + caching
├── Dockerfile                # Multi-stage build (Node builder → Nginx)
├── docker-compose.yml        # Local dev + scaling
└── README.md
```

---

## 🚀 Quick Start

### Option A — Local Dev (Node.js)

```bash
npm install
npm start
# → http://localhost:3000
```

### Option B — Docker (Recommended)

```bash
# Build and run
docker compose up -d --build

# → http://localhost:3000
```

### Option C — Docker without Compose

```bash
docker build -t portfolio .
docker run -d -p 3000:80 --name my-portfolio portfolio
# → http://localhost:3000
```

---

## 🔢 Spinning Up Multiple Containers

Need to run N replicas (e.g. for testing or load-balancing):

```bash
# Spin up 3 replicas with Compose
docker compose up -d --scale portfolio=3

# Or run standalone containers on different ports:
docker run -d -p 3001:80 --name portfolio-1 portfolio
docker run -d -p 3002:80 --name portfolio-2 portfolio
docker run -d -p 3003:80 --name portfolio-3 portfolio
```

To add a load-balancer, uncomment the `traefik` service in `docker-compose.yml`.

---

## ✏️ Personalisation

**All site content lives in one file:**

```
src/data/portfolioData.js
```

Edit these exports:

| Export        | What it controls                                      |
|---------------|-------------------------------------------------------|
| `personal`    | Name, title, email, location, bio, social links       |
| `skills`      | Languages (with %), frameworks (with %), tools, soft  |
| `experience`  | Work history cards                                    |
| `projects`    | Project cards (name, desc, GitHub, Docker, live URL)  |
| `education`   | Degree entries                                        |
| `certifications` | List of certs                                     |

**Adding a project dynamically (runtime):** Click the **+ Add Project** button on the Projects section — no code required. Projects persist until page refresh. For permanent additions, add an entry to `projects` in `portfolioData.js`.

---

## 📧 Email / Contact Form

The contact form is pre-wired for **[Formspree](https://formspree.io/)** (free tier, no backend needed):

1. Sign up at https://formspree.io
2. Create a new form — copy your form ID (e.g. `xpwzyrja`)
3. In `Contact.jsx`, replace the simulated delay with:

```js
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
});
if (res.ok) setStatus('success');
else setStatus('error');
```

---

## 🌐 Free Hosting Options

| Platform        | Command / Notes                                       |
|-----------------|-------------------------------------------------------|
| **Vercel**      | `npx vercel --prod` (auto-detects React)              |
| **Netlify**     | Drag `build/` folder to netlify.com/drop              |
| **GitHub Pages**| `npm run build` → push `build/` to `gh-pages` branch |
| **Railway**     | Connect repo → auto-deploys from Dockerfile           |
| **Render**      | New Web Service → Dockerfile → free tier              |
| **Fly.io**      | `fly launch` → uses Dockerfile automatically          |

---

## 🐳 Docker Hub Push

```bash
docker tag portfolio YOUR_DOCKERHUB_USER/portfolio:latest
docker push YOUR_DOCKERHUB_USER/portfolio:latest
```

---

## 🎨 Design System

| Token              | Value                                    |
|--------------------|------------------------------------------|
| Background         | `#07080d` (near-black cosmic)            |
| Accent gradient    | Purple `#6c63ff` → Pink `#ff6b9d` → Orange `#ffa94d` |
| Green accent       | `#00d4aa`                                |
| Display font       | **Syne** (Google Fonts)                  |
| Body font          | **DM Sans**                              |
| Mono font          | **JetBrains Mono**                       |

All tokens are CSS variables in `src/styles/globals.css` — change once, updates everywhere.

---

## 📋 Component User Stories

| Component    | Story                                                                                    |
|--------------|------------------------------------------------------------------------------------------|
| Navbar       | As a visitor, I can navigate to any section instantly; on mobile a hamburger menu opens  |
| Hero         | As a visitor, I see animated particles, the developer's name, and CTA buttons            |
| About        | As a visitor, I learn about the developer's background, education and certifications     |
| Skills       | As a visitor, I see animated skill bars that fill on scroll into view                    |
| Projects     | As a visitor, I filter projects by tag; as the owner, I add new cards via a modal        |
| Experience   | As a visitor, I tab through work history with role, company and tech stack               |
| Contact      | As a visitor, I submit a message or click "Hire Me" to email the developer directly      |
| Footer       | As a visitor, I find social links and copyright information                              |

---

## 📄 License

MIT — use freely, attribution appreciated.
