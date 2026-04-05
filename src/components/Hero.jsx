import React, { useEffect, useRef } from 'react';
import { useData } from '../context/DataContext';

export default function Hero() {
  const { data } = useData(); 
  const { personal } = data;
  const canvasRef = useRef(null);

  /* ── Particle canvas ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.1,
        color: ['#6c63ff', '#ff6b9d', '#00d4aa'][Math.floor(Math.random() * 3)],
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.round(p.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();
      });

      /* Draw connections */
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(108,99,255,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <>
      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding-top: 80px;
        }
        .hero-canvas {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        /* Radial glow blobs */
        .hero-blob-1 {
          position: absolute;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(108,99,255,0.18) 0%, transparent 70%);
          top: -200px; right: -100px;
          pointer-events: none; z-index: 0;
          animation: float 8s ease-in-out infinite;
        }
        .hero-blob-2 {
          position: absolute;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,107,157,0.12) 0%, transparent 70%);
          bottom: -150px; left: -100px;
          pointer-events: none; z-index: 0;
          animation: float 10s ease-in-out infinite reverse;
        }
        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .hero-left { animation: fadeInUp 0.9s ease both; }
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--accent-3);
          letter-spacing: 0.15em;
          margin-bottom: 24px;
          padding: 6px 14px;
          border-radius: 100px;
          border: 1px solid rgba(0, 212, 170, 0.25);
          background: rgba(0, 212, 170, 0.06);
        }
        .hero-eyebrow::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--accent-3);
          animation: blink 2s ease infinite;
        }
        .hero-name {
          font-size: clamp(42px, 6vw, 80px);
          font-weight: 800;
          line-height: 1.0;
          letter-spacing: -0.04em;
          margin-bottom: 16px;
        }
        .hero-title {
          font-size: clamp(16px, 2vw, 22px);
          font-weight: 400;
          color: var(--text-secondary);
          margin-bottom: 28px;
          letter-spacing: -0.01em;
        }
        .hero-tagline {
          font-size: 17px;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 44px;
          max-width: 480px;
        }
        .hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        .hero-right {
          display: flex;
          justify-content: center;
          animation: fadeInUp 1.1s ease both;
        }
        .hero-visual {
          position: relative;
          width: 380px;
          height: 380px;
        }
        .avatar-ring {
          position: absolute;
          inset: -16px;
          border-radius: 50%;
          background: conic-gradient(from 0deg, #6c63ff, #ff6b9d, #ffa94d, #00d4aa, #6c63ff);
          animation: spin 8s linear infinite;
          padding: 2px;
        }
        .avatar-ring-inner {
          width: 100%; height: 100%;
          border-radius: 50%;
          background: var(--bg-primary);
        }
        .avatar-circle {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: var(--grad-soft);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .avatar-initials {
          font-family: var(--font-display);
          font-size: 100px;
          font-weight: 800;
          background: var(--grad-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.05em;
          line-height: 1;
          opacity: 0.6;
        }
        .hero-stats {
          position: absolute;
          bottom: -30px; left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0;
          background: var(--bg-card);
          border: 1px solid var(--border-card);
          border-radius: var(--radius-md);
          padding: 0;
          overflow: hidden;
          box-shadow: var(--shadow-card);
          white-space: nowrap;
        }
        .stat-item {
          padding: 16px 28px;
          text-align: center;
          border-right: 1px solid var(--border-card);
        }
        .stat-item:last-child { border-right: none; }
        .stat-value {
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 800;
          background: var(--grad-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .stat-label {
          font-size: 11px;
          color: var(--text-muted);
          font-family: var(--font-mono);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .hero-scroll {
          position: absolute;
          bottom: 40px; left: 50%;
          transform: translateX(-50%);
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: var(--text-muted);
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          animation: fadeIn 2s ease 1.5s both;
        }
        .scroll-line {
          width: 1px; height: 40px;
          background: linear-gradient(to bottom, var(--accent-1), transparent);
          animation: float 2s ease-in-out infinite;
        }
        .social-links {
          display: flex;
          gap: 12px;
          margin-top: 36px;
        }
        .social-link {
          width: 42px; height: 42px;
          border-radius: 10px;
          border: 1px solid var(--border-card);
          background: var(--bg-card);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          font-family: var(--font-mono);
          font-size: 13px;
          font-weight: 600;
          transition: var(--transition);
          text-decoration: none;
          cursor: pointer;
        }
        .social-link:hover {
          border-color: var(--accent-1);
          color: var(--accent-1);
          background: rgba(108,99,255,0.1);
          transform: translateY(-2px);
        }

        .social-links {
          display: flex;
          gap: 16px;
          margin-top: 36px;
        }

        .social-link {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid var(--border-card);
          background: linear-gradient(135deg, #ff6b9d 0%, #ffa94d 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-family: var(--font-mono);
          font-size: 18px;
          font-weight: 700;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        /* Individual platform colors on hover */
        .social-link[title="GitHub"]:hover {
          background: #333;
          border-color: #fff;
          color: white;
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(51, 51, 51, 0.3);
        }

        .social-link[title="LinkedIn"]:hover {
          background: #0077b5;
          border-color: #0077b5;
          color: white;
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 119, 181, 0.3);
        }



        .social-link[title="Docker Hub"]:hover {
          background: #0db7ed;
          border-color: #0db7ed;
          color: white;
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(13, 183, 237, 0.3);
        }

        /* Glow effect on hover */
        .social-link::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.5s, height 0.5s;
        }

        .social-link:hover::before {
          width: 100%;
          height: 100%;
        }

        /* Active click effect */
        .social-link:active {
          transform: scale(0.9);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .social-link {
            width: 44px;
            height: 44px;
            font-size: 16px;
          }
        }

        @media (max-width: 900px) {
          .hero-content { grid-template-columns: 1fr; gap: 60px; text-align: center; }
          .hero-right { display: none; }
          .hero-tagline { margin-left: auto; margin-right: auto; }
          .hero-actions, .social-links { justify-content: center; }
        }
      `}</style>

      <section className="hero" id="hero">
        <canvas className="hero-canvas" ref={canvasRef} />
        <div className="hero-blob-1" />
        <div className="hero-blob-2" />

        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-eyebrow">Available for work</div>
            <h1 className="hero-name">
              <span className="gradient-text">{personal.name}</span>
            </h1>
            <p className="hero-title">{personal.title}</p>
            <p className="hero-tagline">{personal.tagline}</p>

            <div className="hero-actions">
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="#contact" className="btn-secondary">Hire Me →</a>
            </div>

            <div className="social-links">
              {personal.socialLinks.github && (
                <a href={personal.socialLinks.github} target="_blank" rel="noreferrer"
                   className="social-link" title="GitHub">GH</a>
              )}
              {personal.socialLinks.linkedin && (
                <a href={personal.socialLinks.linkedin} target="_blank" rel="noreferrer"
                   className="social-link" title="LinkedIn">in</a>
              )}
              {personal.socialLinks.dockerhub && (
                <a href={personal.socialLinks.dockerhub} target="_blank" rel="noreferrer"
                   className="social-link" title="Docker Hub">DH</a>
              )}
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-visual">
              <div className="avatar-ring"><div className="avatar-ring-inner" /></div>
              <div className="avatar-circle">
                <span className="avatar-initials">
                  {personal.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-value">3+</div>
                  <div className="stat-label">Years</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">7+</div>
                  <div className="stat-label">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-scroll">
          <div className="scroll-line" />
          scroll
        </div>
      </section>
    </>
  );
}
