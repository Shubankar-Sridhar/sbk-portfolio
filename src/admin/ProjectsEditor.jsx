import React, { useState } from 'react';
import { useData } from '../context/DataContext';

export default function ProjectsEditor() {
  const { data, updateProjects } = useData();
  const [projects, setProjects] = useState(data.projects);
  const [editingId, setEditingId] = useState(null);

  const addProject = () => {
    const newProject = {
      id: Date.now(),
      name: 'New Project',
      description: 'Project description here',
      longDescription: 'Detailed description',
      tags: ['React', 'Node.js'],
      github: '',
      docker: '',
      hosted: '',
      featured: false,
    };
    setProjects(prev => [...prev, newProject]);
    setEditingId(newProject.id);
  };

  const updateProject = (id, field, value) => {
    setProjects(prev => prev.map(p =>
      p.id === id ? { ...p, [field]: value } : p
    ));
  };

  const updateTags = (id, tagsString) => {
    const tags = tagsString.split(',').map(t => t.trim()).filter(Boolean);
    updateProject(id, 'tags', tags);
  };

  const deleteProject = (id) => {
    if (window.confirm('Delete this project permanently?')) {
      setProjects(prev => prev.filter(p => p.id !== id));
    }
  };

  const duplicateProject = (project) => {
    const newProject = {
      ...project,
      id: Date.now(),
      name: `${project.name} (Copy)`,
    };
    setProjects(prev => [...prev, newProject]);
  };

  const handleSave = () => {
    updateProjects(projects);
    alert('✅ Projects saved!');
  };

  return (
    <div className="editor-container">
      <div className="editor-header-actions">
        <h2>Projects Management</h2>
        <button className="btn-primary" onClick={addProject}>+ New Project</button>
      </div>
      <p className="editor-desc">Add, edit, or remove projects from your portfolio</p>

      <div className="projects-editor-list">
        {projects.map(project => (
          <div key={project.id} className="project-editor-card">
            <div className="project-editor-header">
              <input
                type="text"
                value={project.name}
                onChange={e => updateProject(project.id, 'name', e.target.value)}
                className="project-title-input"
                placeholder="Project name"
              />
              <div className="project-actions">
                <button className="btn-icon" onClick={() => duplicateProject(project)}>📋</button>
                <button className="btn-icon delete" onClick={() => deleteProject(project.id)}>🗑️</button>
              </div>
            </div>

            <div className="project-editor-fields">
              <div className="form-group">
                <label>Short Description</label>
                <input
                  type="text"
                  value={project.description}
                  onChange={e => updateProject(project.id, 'description', e.target.value)}
                  placeholder="Brief one-line description"
                />
              </div>

              <div className="form-group">
                <label>Long Description</label>
                  <textarea
                    rows="3"
                    value={project.longDescription}
                    onChange={e => updateProject(project.id, 'longDescription', e.target.value)}
                    placeholder="Detailed description"
                  />
              </div>

              <div className="form-group">
                <label>Tags (comma-separated)</label>
                <input
                  type="text"
                  value={project.tags.join(', ')}
                  onChange={e => updateTags(project.id, e.target.value)}
                  placeholder="React, Node.js, Docker"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>GitHub URL</label>
                  <input
                    type="url"
                    value={project.github || ''}
                    onChange={e => updateProject(project.id, 'github', e.target.value)}
                    placeholder="https://github.com/..."
                  />
                </div>
                <div className="form-group">
                  <label>Docker Hub URL</label>
                  <input
                    type="url"
                    value={project.docker || ''}
                    onChange={e => updateProject(project.id, 'docker', e.target.value)}
                    placeholder="https://hub.docker.com/..."
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Live Demo URL</label>
                  <input
                    type="url"
                    value={project.hosted || ''}
                    onChange={e => updateProject(project.id, 'hosted', e.target.value)}
                    placeholder="https://myproject.com"
                  />
                </div>
                <div className="form-group checkbox">
                  <label>
                    <input
                      type="checkbox"
                      checked={project.featured}
                      onChange={e => updateProject(project.id, 'featured', e.target.checked)}
                    />
                    ⭐ Featured Project
                  </label>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="btn-primary save-all" onClick={handleSave}>
        💾 Save All Projects
      </button>
    </div>
  );
}