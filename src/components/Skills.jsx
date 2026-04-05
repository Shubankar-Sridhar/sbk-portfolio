import React, { useEffect, useRef, useState } from 'react';
import { useData } from '../context/DataContext';
function SkillBar({ name, level }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ marginBottom: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
        <span style={{ fontSize: '14px', fontWeight: 500 }}>{name}</span>
        <span style={{
          fontSize: '12px', fontFamily: 'var(--font-mono)',
          color: 'var(--accent-1)', fontWeight: 600
        }}>{level}%</span>
      </div>
      <div style={{
        height: '6px', borderRadius: '3px',
        background: 'rgba(255,255,255,0.06)',
        overflow: 'hidden'
      }}>
        <div style={{
          height: '100%',
          width: animated ? `${level}%` : '0%',
          borderRadius: '3px',
          background: 'var(--grad-primary)',
          transition: '1.2s cubic-bezier(0.4,0,0.2,1)',
          transitionDelay: '0.2s',
        }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const { data } = useData();  
  const { skills } = data;
  return (
    <>
      <style>{`
        .skills-bg {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-card);
          border-bottom: 1px solid var(--border-card);
          position: relative;
          overflow: hidden;
        }
        .skills-bg::before {
          content: '';
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(108,99,255,0.07) 0%, transparent 70%);
          pointer-events: none;
        }
        .skills-header {
          text-align: center;
          margin-bottom: 70px;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }
        .skills-panel {
          padding: 36px;
          border-radius: var(--radius-lg);
          background: var(--bg-card);
          border: 1px solid var(--border-card);
          position: relative;
          overflow: hidden;
        }
        .skills-panel::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--grad-primary);
        }
        .panel-title {
          font-family: var(--font-display);
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 28px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .panel-icon {
          width: 32px; height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
        }
        .tools-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .tool-badge {
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 500;
          border: 1px solid var(--border-card);
          background: var(--bg-secondary);
          color: var(--text-secondary);
          transition: var(--transition);
          cursor: default;
        }
        .tool-badge:hover {
          border-color: var(--accent-1);
          color: var(--accent-1);
          background: rgba(108,99,255,0.1);
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section id="skills" className="skills-bg">
        <div className="section-container">
          <div className="skills-header">
            <div className="section-label">Expertise</div>
            <h2 className="section-title">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              A curated stack built over years of shipping real-world products.
            </p>
          </div>

          <div className="skills-grid">
            {/* Languages */}
            <div className="skills-panel">
              <div className="panel-title">
                <div className="panel-icon" style={{ background: 'rgba(108,99,255,0.15)' }}>💻</div>
                Languages
              </div>
              {skills.languages.map(s => (
                <SkillBar key={s.name} name={s.name} level={s.level} />
              ))}
            </div>

            {/* Frameworks */}
            <div className="skills-panel">
              <div className="panel-title">
                <div className="panel-icon" style={{ background: 'rgba(255,107,157,0.15)' }}>⚡</div>
                Frameworks & Libraries
              </div>
              {skills.frameworks.map(s => (
                <SkillBar key={s.name} name={s.name} level={s.level} />
              ))}
            </div>

            {/* Tools & Platforms */}
            <div className="skills-panel" style={{ gridColumn: 'span 2' }}>
              <div className="panel-title">
                <div className="panel-icon" style={{ background: 'rgba(0,212,170,0.15)' }}>🛠️</div>
                Tools, Platforms & DevOps
              </div>
              <div className="tools-wrap">
                {skills.tools.map(t => (
                  <div key={t} className="tool-badge">{t}</div>
                ))}
              </div>
            </div>

            {/* Soft skills */}
            <div className="skills-panel" style={{ gridColumn: 'span 2' }}>
              <div className="panel-title">
                <div className="panel-icon" style={{ background: 'rgba(255,169,77,0.15)' }}>🌟</div>
                Soft Skills & Practices
              </div>
              <div className="tools-wrap">
                {skills.softSkills.map(s => (
                  <div key={s} className="tool-badge" style={{
                    borderColor: 'rgba(255,169,77,0.25)',
                    color: 'var(--accent-4)',
                    background: 'rgba(255,169,77,0.06)'
                  }}>{s}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
