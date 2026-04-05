import React, { useState } from 'react';
import { useData } from '../context/DataContext';
function ProjectCard({ project, featured }) {
  const [expanded, setExpanded] = useState(false);

  // Helper function to safely open URLs
  const openLink = (url, type) => {
    if (!url || url === '#') {
      console.warn(`No ${type} URL provided for ${project.name}`);
      return;
    }
    
    // Ensure URL has protocol
    let finalUrl = url;
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      finalUrl = 'https://' + url;
    }
    
    console.log(`Opening ${type}:`, finalUrl);
    window.open(finalUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`project-card glass-card ${featured ? 'featured' : ''}`}>
      {featured && (
        <div className="featured-badge">⭐ Featured</div>
      )}

      <div className="card-body">
        <div className="card-tags" style={{ marginBottom: '16px' }}>
          {project.tags.map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        <h3 className="card-title">{project.name}</h3>

        <p className="card-desc">
          {expanded ? project.longDescription : project.description}
        </p>

        {project.longDescription && project.longDescription !== project.description && (
          <button className="expand-btn" onClick={() => setExpanded(x => !x)}>
            {expanded ? '↑ Show less' : '↓ Read more'}
          </button>
        )}
      </div>

      <div className="card-links">
        {project.github && project.github !== '#' && (
          <button 
            className="link-btn link-github"
            onClick={() => openLink(project.github, 'GitHub')}
            style={{ cursor: 'pointer' }}
          >
            <span>⬡</span> GitHub
          </button>
        )}
        {project.docker && project.docker !== '#' && (
          <button 
            className="link-btn link-docker"
            onClick={() => openLink(project.docker, 'Docker')}
            style={{ cursor: 'pointer' }}
          >
            <span>🐳</span> Docker
          </button>
        )}
        {project.hosted && project.hosted !== '#' && (
          <button 
            className="link-btn link-live"
            onClick={() => openLink(project.hosted, 'Live Demo')}
            style={{ cursor: 'pointer' }}
          >
            <span>↗</span> Live Demo
          </button>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const { data } = useData();
  const [projects, setProjects] = useState(data.projects);
  const [filter, setFilter] = useState('All');
  const [showModal, setShowModal] = useState(false);

  const allTags = ['All', ...new Set(projects.flatMap(p => p.tags))];
  const filtered = filter === 'All' ? projects : projects.filter(p => p.tags.includes(filter));

  //const addProject = p => setProjects(prev => [p, ...prev]);

  return (
    <>
      <style>{`
        .projects-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 48px;
          flex-wrap: wrap;
          gap: 24px;
        }
        .filter-bar {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }
        .filter-btn {
          padding: 7px 18px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 500;
          border: 1px solid var(--border-card);
          background: transparent;
          color: var(--text-secondary);
          cursor: pointer;
          transition: var(--transition);
          font-family: var(--font-body);
        }
        .filter-btn:hover {
          border-color: var(--accent-1);
          color: var(--accent-1);
        }
        .filter-btn.active {
          background: var(--accent-1);
          border-color: var(--accent-1);
          color: white;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 24px;
        }
        .project-card {
          display: flex;
          flex-direction: column;
          padding: 28px;
          position: relative;
          animation: fadeInUp 0.5s ease both;
        }
        .project-card.featured {
          border-color: rgba(108,99,255,0.3);
        }
        .project-card.featured::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: var(--radius-lg);
          background: linear-gradient(135deg, rgba(108,99,255,0.06) 0%, transparent 60%);
        }
        .featured-badge {
          position: absolute;
          top: 18px; right: 18px;
          font-size: 11px;
          font-family: var(--font-mono);
          color: var(--accent-4);
          background: rgba(255,169,77,0.1);
          border: 1px solid rgba(255,169,77,0.25);
          padding: 4px 10px;
          border-radius: 100px;
          letter-spacing: 0.05em;
        }
        .card-body { flex: 1; }
        .card-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .card-title {
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }
        .card-desc {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 12px;
        }
        .expand-btn {
          background: none;
          border: none;
          color: var(--accent-1);
          font-size: 12px;
          font-family: var(--font-mono);
          cursor: pointer;
          padding: 0;
          margin-bottom: 20px;
          transition: var(--transition);
        }
        .expand-btn:hover { opacity: 0.7; }
        .card-links {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid var(--border-card);
        }
        .link-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 14px;
          border-radius: var(--radius-sm);
          font-size: 12px;
          font-weight: 600;
          font-family: var(--font-mono);
          text-decoration: none;
          transition: var(--transition);
          border: 1px solid transparent;
        }
        .link-github {
          background: rgba(255,255,255,0.05);
          color: var(--text-secondary);
          border-color: var(--border-card);
        }
        .link-github:hover { border-color: #6e7681; color: var(--text-primary); }
        .link-docker {
          background: rgba(0,122,255,0.08);
          color: #4da6ff;
          border-color: rgba(0,122,255,0.2);
        }
        .link-docker:hover { background: rgba(0,122,255,0.15); }
        .link-live {
          background: rgba(0,212,170,0.08);
          color: var(--accent-3);
          border-color: rgba(0,212,170,0.2);
        }
        .link-live:hover { background: rgba(0,212,170,0.15); }
        /* Modal */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(7,8,13,0.85);
          backdrop-filter: blur(10px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: fadeIn 0.2s ease;
        }
        .modal-box {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-xl);
          width: 100%;
          max-width: 580px;
          max-height: 90vh;
          overflow-y: auto;
          animation: fadeInUp 0.3s ease;
        }
        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 28px 32px 0;
        }
        .modal-close {
          background: none;
          border: none;
          color: var(--text-muted);
          font-size: 20px;
          cursor: pointer;
          transition: var(--transition);
          padding: 4px;
        }
        .modal-close:hover { color: var(--text-primary); }
        .modal-body { padding: 24px 32px; display: flex; flex-direction: column; gap: 16px; }
        .modal-footer {
          display: flex;
          gap: 12px;
          justify-content: flex-end;
          padding: 0 32px 28px;
        }
        .field-group { display: flex; flex-direction: column; gap: 6px; }
        .field-label {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-muted);
          font-family: var(--font-mono);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .field-input {
          background: var(--bg-secondary);
          border: 1px solid var(--border-card);
          border-radius: var(--radius-sm);
          padding: 12px 16px;
          color: var(--text-primary);
          font-size: 14px;
          font-family: var(--font-body);
          transition: var(--transition);
          outline: none;
        }
        .field-input:focus { border-color: var(--accent-1); }
        .field-textarea { min-height: 90px; resize: vertical; }
        .featured-check {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: var(--text-secondary);
          cursor: pointer;
        }
        .featured-check input { accent-color: var(--accent-1); width: 16px; height: 16px; }
        @media (max-width: 600px) {
          .projects-grid { grid-template-columns: 1fr; }
        }
        
        .link-btn {
          cursor: pointer !important;
          pointer-events: auto !important;
          position: relative !important;
          z-index: 100 !important;
        }

        .link-btn:active {
          transform: scale(0.95);
        }

        .project-card {
          pointer-events: auto !important;
        }

        .card-links {
          pointer-events: auto !important;
          position: relative;
          z-index: 10;
        }

        /* Ensure no overlay is blocking */
        .project-card::after {
          pointer-events: none !important;
        }
      `}</style>

      <section id="projects">
        <div className="section-container">
          <div className="projects-header">
            <div>
              <div className="section-label">Portfolio</div>
              <h2 className="section-title">
                Featured <span className="gradient-text">Projects</span>
              </h2>
              <p className="section-subtitle">
                Production-ready software — open source, containerised, and deployable.
              </p>
            </div>
            {/*<button className="btn-primary" onClick={() => setShowModal(true)}>
              + Add Project
            </button>
            */}
          </div>

          {/* Filter bar */}
          <div className="filter-bar">
            {allTags.map(t => (
              <button
                key={t}
                className={`filter-btn ${filter === t ? 'active' : ''}`}
                onClick={() => setFilter(t)}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <div className="projects-grid">
            {filtered.map(p => (
              <ProjectCard key={p.id} project={p} featured={p.featured} />
            ))}
          </div>
        </div>
      </section>

      
    </>
  );
}
