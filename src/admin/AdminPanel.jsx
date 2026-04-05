import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import PersonalEditor from './PersonalEditor';
import SkillsEditor from './SkillsEditor';
import ProjectsEditor from './ProjectsEditor';
import ExperienceEditor from './ExperienceEditor';
import DataManager from './DataManager';
import './admin.css';

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('personal');
  const { resetToDefault, exportData, data } = useData();

  const tabs = [
    { id: 'personal', label: '👤 Personal', component: PersonalEditor },
    { id: 'skills', label: '💪 Skills', component: SkillsEditor },
    { id: 'projects', label: '📁 Projects', component: ProjectsEditor },
    { id: 'experience', label: '💼 Experience', component: ExperienceEditor },
    { id: 'data', label: '💾 Data Management', component: DataManager },
  ];

  const ActiveComponent = tabs.find(t => t.id === activeTab)?.component;

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h1>⚡ Admin Dashboard</h1>
        <p>Manage your portfolio content — changes save automatically to your browser</p>
        <div className="admin-badge">
          {data.personal.name} · Admin Mode Active
        </div>
      </div>

      <div className="admin-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`admin-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="admin-content">
        {ActiveComponent && <ActiveComponent />}
      </div>

      <div className="admin-footer">
        <button className="btn-secondary" onClick={resetToDefault}>
          ⚠️ Reset to Default
        </button>
        <button className="btn-primary" onClick={exportData}>
          📥 Export Data (JSON)
        </button>
      </div>
    </div>
  );
}