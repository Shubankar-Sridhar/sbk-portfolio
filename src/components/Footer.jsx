import React from 'react';
import { useData } from '../context/DataContext';

export default function Footer() {
  const { data } = useData(); 
  const { personal } = data;
  const year = new Date().getFullYear();
  return (
    <>
      <style>{`
        .footer {
          border-top: 1px solid var(--border-card);
          padding: 48px 0;
          background: var(--bg-secondary);
        }
        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }
        .footer-logo {
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: 800;
          background: var(--grad-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.03em;
        }
        .footer-copy {
          font-size: 13px;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }
        .footer-links {
          display: flex;
          gap: 20px;
        }
        .footer-links a {
          font-size: 13px;
          color: var(--text-muted);
          transition: var(--transition);
          font-family: var(--font-mono);
        }
        .footer-links a:hover { color: var(--accent-1); }
      `}</style>
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-logo">
            {personal.name.split(' ')[0]}.
          </div>
          <div className="footer-copy">
            © {year} {personal.name} · Built with React & Nginx
          </div>
          <div className="footer-links">
            {Object.entries(personal.socialLinks).map(([key, url]) => url && (
              <a key={key} href={url} target="_blank" rel="noreferrer">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
