import React, { useState } from 'react';
import { useData } from '../context/DataContext';

export default function Experience() {
  const { data } = useData(); 
  const { experience } = data;
  const [active, setActive] = useState(0);
  const current = experience[active];

  return (
    <>
      <style>{`
        .exp-bg {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-card);
          border-bottom: 1px solid var(--border-card);
        }
        .exp-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .exp-layout {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 40px;
          align-items: start;
        }
        .exp-tab-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          position: sticky;
          top: 100px;
        }
        .exp-tab {
          padding: 16px 20px;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: var(--transition);
          border: 1px solid transparent;
          text-align: left;
        }
        .exp-tab:hover {
          background: var(--bg-card);
          border-color: var(--border-card);
        }
        .exp-tab.active {
          background: var(--bg-card);
          border-color: var(--border-subtle);
          box-shadow: var(--shadow-card);
        }
        .exp-tab.active::before {
          content: '';
          display: block;
          width: 3px; height: 100%;
          position: absolute;
          left: 0; top: 0;
          background: var(--grad-primary);
          border-radius: 2px;
        }
        .exp-tab { position: relative; }
        .tab-company {
          font-family: var(--font-display);
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 4px;
        }
        .tab-period {
          font-size: 12px;
          font-family: var(--font-mono);
          color: var(--text-muted);
        }
        .exp-panel {
          padding: 40px;
          border-radius: var(--radius-lg);
          background: var(--bg-card);
          border: 1px solid var(--border-card);
          animation: fadeInUp 0.4s ease;
          position: relative;
          overflow: hidden;
        }
        .exp-panel::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--grad-primary);
        }
        .exp-role {
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 6px;
          letter-spacing: -0.02em;
        }
        .exp-company-name {
          font-size: 17px;
          color: var(--accent-1);
          font-weight: 600;
          margin-bottom: 8px;
        }
        .exp-period {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--text-muted);
          margin-bottom: 28px;
          letter-spacing: 0.05em;
        }
        .exp-description {
          font-size: 16px;
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 28px;
        }
        .exp-tags { display: flex; gap: 8px; flex-wrap: wrap; }
        @media (max-width: 768px) {
          .exp-layout { grid-template-columns: 1fr; }
          .exp-tab-list { flex-direction: row; overflow-x: auto; position: static; }
          .exp-tab { flex-shrink: 0; }
          .exp-panel { padding: 24px; }
          .exp-role { font-size: 22px; }
        }
      `}</style>

      <section id="experience" className="exp-bg">
        <div className="section-container">
          <div className="exp-header">
            <div className="section-label">Career</div>
            <h2 className="section-title">
              Work <span className="gradient-text">Experience</span>
            </h2>
          </div>

          <div className="exp-layout">
            {/* Tabs */}
            <div className="exp-tab-list">
              {experience.map((e, i) => (
                <div
                  key={e.id}
                  className={`exp-tab ${i === active ? 'active' : ''}`}
                  onClick={() => setActive(i)}
                >
                  <div className="tab-company">{e.company}</div>
                  <div className="tab-period">{e.period}</div>
                </div>
              ))}
            </div>

            {/* Panel */}
            <div className="exp-panel" key={current.id}>
              <h3 className="exp-role">{current.role}</h3>
              <div className="exp-company-name">{current.company}</div>
              <div className="exp-period">📅 {current.period}</div>
              <p className="exp-description">{current.description}</p>
              <div className="exp-tags">
                {current.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
