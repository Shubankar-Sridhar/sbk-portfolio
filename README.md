# 🚀 Shubankar's Developer Portfolio

A **modern, fully-featured** personal portfolio website built with **React 18**, **Vite**, and **Nginx**, featuring a dynamic admin panel for easy content management.

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF?logo=vite)](https://vitejs.dev)
[![Node.js](https://img.shields.io/badge/Node.js-20-339933?logo=node.js)](https://nodejs.org)
[![Docker](https://img.shields.io/badge/Docker-Latest-2496ED?logo=docker)](https://www.docker.com)

---

## ✨ Features

- **⚡ Ultra-fast Performance** – Built with Vite for instant development and optimized production builds
- **🎨 Responsive Design** – Beautiful UI that adapts seamlessly to all devices
- **🔐 Admin Panel** – Built-in admin interface to manage portfolio content without code
- **📧 Email Integration** – Contact form powered by EmailJS
- **🐳 Docker Ready** – Production-grade containerization with Nginx
- **🚀 Optimized SEO** – Meta tags and structured data for better search visibility
- **💾 Local Storage** – Admin changes persist in browser storage
- **🔄 Real-time Updates** – Changes are reflected immediately without page reload

---

## 📂 Project Structure

```
Portfolio_Vite/
├── src/
│   ├── components/               # Reusable React components
│   │   ├── Navbar.jsx           # Navigation bar with mobile menu
│   │   ├── Hero.jsx             # Hero section with animated particles
│   │   ├── About.jsx            # About me section
│   │   ├── Skills.jsx           # Skills showcase with progress bars
│   │   ├── Projects.jsx         # Project portfolio with filters
│   │   ├── Experience.jsx       # Work experience timeline
│   │   ├── Contact.jsx          # Contact form
│   │   └── Footer.jsx           # Footer with social links
│   │
│   ├── admin/                    # Admin panel components
│   │   ├── AdminPanel.jsx       # Main admin interface
│   │   ├── PersonalEditor.jsx   # Edit personal information
│   │   ├── SkillsEditor.jsx     # Manage skills
│   │   ├── ProjectsEditor.jsx   # Add/edit projects
│   │   ├── ExperienceEditor.jsx # Manage work experience
│   │   ├── DataManager.jsx      # Data import/export
│   │   └── admin.css            # Admin styles
│   │
│   ├── context/
│   │   └── DataContext.jsx      # Global data management
│   │
│   ├── hooks/
│   │   └── useAdminMode.js      # Hook for admin mode toggle
│   │
│   ├── data/
│   │   └── defaultData.js       # Default portfolio data
│   │
│   ├── styles/
│   │   └── globals.css          # Global styles and CSS variables
│   │
│   ├── App.jsx                  # Main App component
│   └── main.jsx                 # App entry point
│
├── public/
│   └── index.html               # HTML entry point
│
├── nginx.conf                   # Nginx configuration for production
├── Dockerfile                   # Multi-stage Docker build
├── docker-compose.yml           # Docker Compose configuration
├── vite.config.js               # Vite configuration
├── package.json                 # Project dependencies
└── README.md                    # This file
```

---

## 🛠️ Tech Stack

### Frontend
- **React 18** – UI library
- **Vite** – Fast build tool and dev server
- **EmailJS** – Email service integration
- **Lucide React** – Icon library

### Styling
- **CSS3** – Custom styles with CSS variables and animations
- **Responsive Design** – Mobile-first approach

### Deployment & Infrastructure
- **Docker** – Containerization
- **Nginx** – Web server with gzip compression and caching
- **Node.js 20** – Runtime environment

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- (Optional) Docker and Docker Compose

### Option 1: Local Development

```bash
# Clone the repository
git clone <repository-url>
cd Portfolio_Vite

# Install dependencies
npm install

# Start development server
npm run dev
```
The app will open at **http://localhost:3000** with hot module replacement.

### Option 2: Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview the production build locally
npm run preview
```

### Option 3: Docker (Recommended for Production)

```bash
# Build Docker image
npm run docker-build

# Run with Docker Compose
docker-compose up

# Access at http://localhost:80
```

---

## 📝 Admin Panel

The portfolio includes a powerful admin panel for managing content without editing code.

### Accessing Admin Mode
1. **Development**: Press `Ctrl+Shift+A` (Windows) or `Cmd+Shift+A` (Mac)
2. **Production**: Access via admin toggle in the UI

### Admin Features
- **Personal Info Editor** – Update name, bio, avatar, and social links
- **Skills Manager** – Add/edit programming languages, frameworks, and tools
- **Projects Editor** – Create, edit, and delete portfolio projects
- **Experience Manager** – Manage work experience entries
- **Data Manager** – Export/import portfolio data (JSON format)

### Data Persistence
- Changes are saved to browser's local storage
- Use "Export Data" to backup your portfolio
- Use "Import Data" to restore or migrate data

---

## ⚙️ Configuration

### Edit Portfolio Content

The easiest way to customize your portfolio:

1. **Enter Admin Mode** (`Ctrl+Shift+A`)
2. **Edit your information** using the admin panels
3. **Export your data** for backup

### Or Edit Default Data Directly

Edit [src/data/defaultData.js](src/data/defaultData.js) to modify the initial portfolio data:

```javascript
export const defaultData = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    email: "your.email@example.com",
    // ... more fields
  },
  skills: {
    languages: [...],
    frameworks: [...],
    tools: [...],
  },
  experience: [...],
  projects: [...],
};
```

### Customize Styling

Edit [src/styles/globals.css](src/styles/globals.css) to adjust:
- Color schemes (CSS variables)
- Fonts and typography
- Animations and transitions
- Responsive breakpoints

---

## 📧 Email Configuration

The contact form uses EmailJS for email delivery.

1. **Sign up** at [emailjs.com](https://www.emailjs.com)
2. **Create an email service** (Gmail, Outlook, etc.)
3. **Get your Service ID, Template ID, and Public Key**
4. **Update** in your admin panel or contact form component

---

## 🌐 Deployment

### Deploy to Vercel
1. Push repository to GitHub
2. Connect to [Vercel](https://vercel.com)
3. Vercel auto-builds and deploys on every push

See [vercel.json](vercel.json) for configuration.

### Deploy with Docker
```bash
# Build and push to Docker Hub
docker build -t your-username/portfolio .
docker push your-username/portfolio

# Deploy on any Docker-supporting platform (AWS, DigitalOcean, etc.)
docker run -p 80:80 your-username/portfolio
```

### Deploy to Other Platforms
- **GitHub Pages** – `npm run build` then push `dist/` folder
- **Netlify** – Connect Git repo directly
- **AWS S3 + CloudFront** – Upload `dist/` folder

---

## 🔧 Available Scripts

```bash
npm run dev          # Start development server on port 3000
npm run build        # Build optimized production bundle
npm run preview      # Preview production build locally
npm run docker-build # Build Docker image
```

---

## 📦 Dependencies

### Production
- `react@^18.2.0` – UI library
- `react-dom@^18.2.0` – React DOM renderer
- `emailjs-com@^3.2.0` – Email service
- `lucide-react@^0.383.0` – Icon library

### Development
- `vite@^5.0.0` – Build tool
- `@vitejs/plugin-react@^4.2.0` – React plugin for Vite
- `@types/react@^18.2.0` – React type definitions
- `@types/react-dom@^18.2.0` – React DOM type definitions

---

## 🎯 Performance Optimizations

- **Bundle Splitting** – Separate vendor bundle for better caching
- **Gzip Compression** – Enabled in Nginx for smaller file sizes
- **Code Splitting** – Lazy loading of components
- **Image Optimization** – Optimized asset handling
- **CSS Variables** – Efficient styling without duplication

---

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :3000
kill -9 <PID>
```

### Admin panel not opening
- Ensure you're pressing the correct keyboard shortcut (`Ctrl+Shift+A`)
- Check browser console for errors
- Clear browser cache and reload

### Emails not sending
- Verify EmailJS credentials in contact form
- Check spam folder
- Test email service directly on emailjs.com

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👤 Author

**Shubankar Sridhar**
- GitHub: [@Shubankar-Sridhar](https://github.com/Shubankar-Sridhar)
- LinkedIn: [shubankarsridhar](https://www.linkedin.com/in/shubankarsridhar)
- Docker Hub: [shubankarsridhar](https://hub.docker.com/repositories/shubankarsridhar)

---

## 🤝 Contributing

Contributions are welcome! If you find any issues or have suggestions:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📞 Support

For issues, questions, or suggestions, please:
- Open an issue on GitHub
- Contact via email: shubankar.s.06@email.com

---

**Made with ❤️ by Shubankar**
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


