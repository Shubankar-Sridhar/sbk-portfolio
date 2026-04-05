import React, { useState } from 'react';
import { useData } from '../context/DataContext';

export default function SkillsEditor() {
  const { data, updateSkills } = useData();
  const [skills, setSkills] = useState(data.skills);
  const [newTool, setNewTool] = useState('');
  const [newSoftSkill, setNewSoftSkill] = useState('');

  const updateLanguage = (index, field, value) => {
    const updated = [...skills.languages];
    updated[index][field] = field === 'level' ? parseInt(value) : value;
    setSkills(prev => ({ ...prev, languages: updated }));
  };

  const addLanguage = () => {
    setSkills(prev => ({
      ...prev,
      languages: [...prev.languages, { name: 'New Language', level: 50 }]
    }));
  };

  const removeLanguage = (index) => {
    if (window.confirm('Remove this language?')) {
      setSkills(prev => ({
        ...prev,
        languages: prev.languages.filter((_, i) => i !== index)
      }));
    }
  };

  const updateFramework = (index, field, value) => {
    const updated = [...skills.frameworks];
    updated[index][field] = field === 'level' ? parseInt(value) : value;
    setSkills(prev => ({ ...prev, frameworks: updated }));
  };

  const addFramework = () => {
    setSkills(prev => ({
      ...prev,
      frameworks: [...prev.frameworks, { name: 'New Framework', level: 50 }]
    }));
  };

  const removeFramework = (index) => {
    if (window.confirm('Remove this framework?')) {
      setSkills(prev => ({
        ...prev,
        frameworks: prev.frameworks.filter((_, i) => i !== index)
      }));
    }
  };

  const addTool = () => {
    if (newTool.trim()) {
      setSkills(prev => ({
        ...prev,
        tools: [...prev.tools, newTool.trim()]
      }));
      setNewTool('');
    }
  };

  const removeTool = (index) => {
    if (window.confirm('Remove this tool?')) {
      setSkills(prev => ({
        ...prev,
        tools: prev.tools.filter((_, i) => i !== index)
      }));
    }
  };

  const addSoftSkill = () => {
    if (newSoftSkill.trim()) {
      setSkills(prev => ({
        ...prev,
        softSkills: [...prev.softSkills, newSoftSkill.trim()]
      }));
      setNewSoftSkill('');
    }
  };

  const removeSoftSkill = (index) => {
    if (window.confirm('Remove this skill?')) {
      setSkills(prev => ({
        ...prev,
        softSkills: prev.softSkills.filter((_, i) => i !== index)
      }));
    }
  };

  const handleSave = () => {
    updateSkills(skills);
    alert('✅ Skills updated!');
  };

  return (
    <div className="editor-container">
      <h2>Skills Management</h2>
      <p className="editor-desc">Add, edit, or remove skills with proficiency levels</p>

      {/* Languages */}
      <div className="editor-section">
        <h3>💻 Programming Languages</h3>
        {skills.languages.map((lang, idx) => (
          <div key={idx} className="skill-item">
            <input
              type="text"
              value={lang.name}
              onChange={e => updateLanguage(idx, 'name', e.target.value)}
              placeholder="Language name"
            />
            <input
              type="range"
              min="0"
              max="100"
              value={lang.level}
              onChange={e => updateLanguage(idx, 'level', e.target.value)}
            />
            <span className="skill-level">{lang.level}%</span>
            <button className="btn-icon" onClick={() => removeLanguage(idx)}>🗑️</button>
          </div>
        ))}
        <button className="btn-secondary" onClick={addLanguage}>+ Add Language</button>
      </div>

      {/* Frameworks */}
      <div className="editor-section">
        <h3>⚡ Frameworks & Libraries</h3>
        {skills.frameworks.map((fw, idx) => (
          <div key={idx} className="skill-item">
            <input
              type="text"
              value={fw.name}
              onChange={e => updateFramework(idx, 'name', e.target.value)}
              placeholder="Framework name"
            />
            <input
              type="range"
              min="0"
              max="100"
              value={fw.level}
              onChange={e => updateFramework(idx, 'level', e.target.value)}
            />
            <span className="skill-level">{fw.level}%</span>
            <button className="btn-icon" onClick={() => removeFramework(idx)}>🗑️</button>
          </div>
        ))}
        <button className="btn-secondary" onClick={addFramework}>+ Add Framework</button>
      </div>

      {/* Tools */}
      <div className="editor-section">
        <h3>🛠️ Tools & Platforms</h3>
        <div className="tags-editor">
          {skills.tools.map((tool, idx) => (
            <span key={idx} className="editable-tag">
              {tool}
              <button onClick={() => removeTool(idx)}>×</button>
            </span>
          ))}
        </div>
        <div className="add-tag">
          <input
            type="text"
            value={newTool}
            onChange={e => setNewTool(e.target.value)}
            placeholder="New tool (e.g., Docker)"
            onKeyPress={e => e.key === 'Enter' && addTool()}
          />
          <button className="btn-secondary" onClick={addTool}>Add</button>
        </div>
      </div>

      {/* Soft Skills */}
      <div className="editor-section">
        <h3>🌟 Soft Skills</h3>
        <div className="tags-editor">
          {skills.softSkills.map((skill, idx) => (
            <span key={idx} className="editable-tag">
              {skill}
              <button onClick={() => removeSoftSkill(idx)}>×</button>
            </span>
          ))}
        </div>
        <div className="add-tag">
          <input
            type="text"
            value={newSoftSkill}
            onChange={e => setNewSoftSkill(e.target.value)}
            placeholder="New skill (e.g., Leadership)"
            onKeyPress={e => e.key === 'Enter' && addSoftSkill()}
          />
          <button className="btn-secondary" onClick={addSoftSkill}>Add</button>
        </div>
      </div>

      <button className="btn-primary" onClick={handleSave}>
        💾 Save All Skills
      </button>
    </div>
  );
}