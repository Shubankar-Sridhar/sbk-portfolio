import React, { useState, useEffect } from 'react';
import { useData } from '../context/DataContext';

export default function Navbar() {
  const { data } = useData(); 
  const { personal } = data;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          padding: 20px 0;
          transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        .navbar.scrolled {
          padding: 14px 0;
          background: rgba(7, 8, 13, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(108, 99, 255, 0.12);
        }
        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-logo {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 800;
          background: var(--grad-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.03em;
        }
        .nav-links {
          display: flex;
          gap: 8px;
          list-style: none;
          align-items: center;
        }
        .nav-links a {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-secondary);
          padding: 8px 14px;
          border-radius: 8px;
          transition: var(--transition);
          letter-spacing: 0.01em;
        }
        .nav-links a:hover {
          color: var(--text-primary);
          background: rgba(108,99,255,0.1);
        }
        .nav-hire {
          font-size: 14px !important;
          font-weight: 600 !important;
          color: white !important;
          background: var(--grad-primary) !important;
          background-size: 200% 200% !important;
          animation: gradientShift 4s ease infinite;
          padding: 9px 20px !important;
          border-radius: 8px !important;
        }
        .nav-hire:hover {
          background: var(--grad-primary) !important;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(108,99,255,0.4);
        }
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 4px;
        }
        .hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: var(--text-primary);
          border-radius: 2px;
          transition: var(--transition);
        }
        .mobile-menu {
          display: none;
        }
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .hamburger { display: flex; }
          .mobile-menu {
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(7, 8, 13, 0.97);
            backdrop-filter: blur(20px);
            z-index: 999;
            align-items: center;
            justify-content: center;
            gap: 24px;
            animation: fadeIn 0.3s ease;
          }
          .mobile-menu a {
            font-family: var(--font-display);
            font-size: 28px;
            font-weight: 700;
            color: var(--text-primary);
            transition: var(--transition);
          }
          .mobile-menu a:hover { color: var(--accent-1); }
          .mobile-close {
            position: absolute;
            top: 24px; right: 24px;
            font-size: 32px;
            cursor: pointer;
            color: var(--text-secondary);
          }
        }
      `}</style>

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <div className="nav-logo">
            {personal.name.split(' ')[0]}
            <span style={{ opacity: 0.5 }}>.</span>
          </div>
          <ul className="nav-links">
            {navLinks.map(l => (
              <li key={l.label}>
                <a href={l.href} className={l.label === 'Contact' ? 'nav-hire' : ''}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hamburger" onClick={() => setMenuOpen(true)}>
            <span /><span /><span />
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-close" onClick={() => setMenuOpen(false)}>✕</div>
          {navLinks.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
