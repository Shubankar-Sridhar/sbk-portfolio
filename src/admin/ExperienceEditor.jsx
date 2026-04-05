import React, { useState } from 'react';
import { useData } from '../context/DataContext';

export default function ExperienceEditor() {
  const { data, updateExperience } = useData();
  const [experience, setExperience] = useState(data.experience);

  const addExperience = () => {
    const newExp = {
      id: Date.now(),
      role: 'New Role',
      company: 'Company Name',
      period: '2024 – Present',
      description: 'Describe your responsibilities and achievements...',
      tags: ['Skill1', 'Skill2'],
    };
    setExperience(prev => [...prev, newExp]);
  };

  const updateExp = (id, field, value) => {
    setExperience(prev => prev.map(exp =>
      exp.id === id ? { ...exp, [field]: value } : exp
    ));
  };

  const updateTags = (id, tagsString) => {
    const tags = tagsString.split(',').map(t => t.trim()).filter(Boolean);
    updateExp(id, 'tags', tags);
  };

  const deleteExp = (id) => {
    if (window.confirm('Delete this work experience?')) {
      setExperience(prev => prev.filter(exp => exp.id !== id));
    }
  };

  const moveExp = (id, direction) => {
    const index = experience.findIndex(exp => exp.id === id);
    if (direction === 'up' && index > 0) {
      const newExp = [...experience];
      [newExp[index - 1], newExp[index]] = [newExp[index], newExp[index - 1]];
      setExperience(newExp);
    } else if (direction === 'down' && index < experience.length - 1) {
      const newExp = [...experience];
      [newExp[index], newExp[index + 1]] = [newExp[index + 1], newExp[index]];
      setExperience(newExp);
    }
  };

  const handleSave = () => {
    updateExperience(experience);
    alert('✅ Experience updated!');
  };

  return (
    <div className="editor-container">
      <div className="editor-header-actions">
        <h2>Work Experience</h2>
        <button className="btn-primary" onClick={addExperience}>+ Add Position</button>
      </div>
      <p className="editor-desc">Manage your professional history (drag handles to reorder)</p>

      <div className="experience-editor-list">
        {experience.map((exp, idx) => (
          <div key={exp.id} className="experience-editor-card">
            <div className="exp-editor-header">
              <div className="exp-order-controls">
                <button onClick={() => moveExp(exp.id, 'up')} disabled={idx === 0}>↑</button>
                <button onClick={() => moveExp(exp.id, 'down')} disabled={idx === experience.length - 1}>↓</button>
              </div>
              <input
                type="text"
                value={exp.role}
                onChange={e => updateExp(exp.id, 'role', e.target.value)}
                className="exp-role-input"
                placeholder="Job title"
              />
              <button className="btn-icon delete" onClick={() => deleteExp(exp.id)}>🗑️</button>
            </div>

            <div className="exp-editor-fields">
              <div className="form-row">
                <div className="form-group">
                  <label>Company</label>
                  <input
                    type="text"
                    value={exp.company}
                    onChange={e => updateExp(exp.id, 'company', e.target.value)}
                    placeholder="Company name"
                  />
                </div>
                <div className="form-group">
                  <label>Period</label>
                  <input
                    type="text"
                    value={exp.period}
                    onChange={e => updateExp(exp.id, 'period', e.target.value)}
                    placeholder="2022 – Present"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  rows="3"
                  value={exp.description}
                  onChange={e => updateExp(exp.id, 'description', e.target.value)}
                  placeholder="Describe your role, achievements, and responsibilities..."
                />
              </div>

              <div className="form-group">
                <label>Technologies (comma-separated)</label>
                <input
                  type="text"
                  value={exp.tags.join(', ')}
                  onChange={e => updateTags(exp.id, e.target.value)}
                  placeholder="React, Node.js, PostgreSQL"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="btn-primary save-all" onClick={handleSave}>
        💾 Save All Experience
      </button>
    </div>
  );
}