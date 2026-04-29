import React from 'react';
import { useData } from '../context/DataContext';
export default function About() {
  const { data } = useData();  
  const { personal, education, certifications } = data;
  return (
    <>
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }
        .about-image-block {
          position: relative;
        }
        .about-image-frame {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          aspect-ratio: 4/5;
          background: var(--bg-card);
          border: 1px solid var(--border-card);
        }
        .about-image-placeholder {
          width: 100%; height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          background: var(--grad-soft);
        }
        .about-image-placeholder .big-initial {
          font-family: var(--font-display);
          font-size: 140px;
          font-weight: 800;
          background: var(--grad-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          opacity: 0.35;
        }
        .about-accent-box {
          position: absolute;
          bottom: -20px; right: -20px;
          width: 140px; height: 140px;
          border-radius: var(--radius-md);
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          box-shadow: var(--shadow-card);
        }
        .about-accent-value {
          font-family: var(--font-display);
          font-size: 42px;
          font-weight: 800;
          background: var(--grad-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
        }
        .about-accent-label {
          font-size: 12px;
          color: var(--text-muted);
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          text-align: center;
        }
        .about-bio {
          font-size: 16px;
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 36px;
          white-space: pre-line;
        }
        .about-bio p + p { margin-top: 16px; }
        .about-info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 36px;
        }
        .info-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .info-label {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .info-value {
          font-size: 15px;
          font-weight: 500;
          color: var(--text-primary);
        }
        .education-block { margin-bottom: 28px; }
        .edu-item {
          padding: 16px 20px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-card);
          background: var(--bg-card);
          margin-bottom: 10px;
        }
        .edu-degree {
          font-weight: 600;
          font-size: 15px;
          margin-bottom: 4px;
        }
        .edu-meta {
          font-size: 13px;
          color: var(--text-secondary);
          display: flex;
          gap: 8px;
          align-items: center;
        }
        .edu-meta::before {
          content: '🎓';
          font-size: 12px;
        }
        .cert-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .cert-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: var(--text-secondary);
        }
        .cert-item::before {
          content: '✦';
          color: var(--accent-3);
          font-size: 10px;
          flex-shrink: 0;
        }
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr; gap: 40px; }
          .about-image-block { display: none; }
        }
      `}</style>

      <section id="about">
        <div className="section-container">
          <div className="about-grid">
            {/* Left – image */}
            <div className="about-image-block">
              <div className="about-image-frame">
                <div className="about-image-placeholder">
                <img
                  src="https://github.com/Shubankar-Sridhar/staticFiles/raw/main/My_Picture.png"
                  alt={personal.name.split(' ')[0][0]}
                  className="about-image"
                />
              </div>
              </div>
              <div className="about-accent-box">
                <div className="about-accent-value">7+</div>
                <div className="about-accent-label">Projects</div>
              </div>
            </div>

            {/* Right – content */}
            <div>
              <div className="section-label">About Me</div>
              <h2 className="section-title">
                Crafting Digital<br />
                <span className="gradient-text">Experiences</span>
              </h2>

              <div className="about-bio">
                {personal.bio.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="about-info-grid">
                <div className="info-item">
                  <span className="info-label">Location</span>
                  <span className="info-value">{personal.location}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Email</span>
                  <span className="info-value" style={{ color: 'var(--accent-1)', wordBreak: 'break-all' }}>
                    {personal.email}
                  </span>
                </div>
                <div className="info-item">
                  <span className="info-label">Status</span>
                  <span className="info-value" style={{ color: 'var(--accent-3)' }}>
                    ● Open to Work
                  </span>
                </div>
                <div className="info-item">
                  <span className="info-label">Type</span>
                  <span className="info-value">Full-time / Contract</span>
                </div>
              </div>

              {/* Education */}
              <div className="education-block">
                <div className="section-label" style={{ marginBottom: '12px' }}>Education</div>
                {education.map((e, i) => (
                  <div key={i} className="edu-item">
                    <div className="edu-degree">{e.degree}</div>
                    <div className="edu-meta">
                      {e.institution} · {e.year} · {e.note}
                    </div>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div>
                <div className="section-label" style={{ marginBottom: '12px' }}>Certifications</div>
                <ul className="cert-list">
                  {certifications.map((c, i) => (
                    <li key={i} className="cert-item">{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
