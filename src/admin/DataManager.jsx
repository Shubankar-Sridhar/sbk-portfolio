import React, { useRef } from 'react';
import { useData } from '../context/DataContext';

export default function DataManager() {
  const { exportData, importData, resetToDefault } = useData();
  const fileInputRef = useRef();

  const handleImport = (e) => {
    const file = e.target.files[0];
    if (file) {
      importData(file);
    }
    e.target.value = '';
  };

  const handleReset = () => {
    if (window.confirm('⚠️⚠️⚠️ WARNING: This will erase ALL current data and restore default content. This cannot be undone. Are you ABSOLUTELY sure?')) {
      resetToDefault();
    }
  };

  return (
    <div className="editor-container">
      <h2>Data Management</h2>
      <p className="editor-desc">Backup, restore, or reset your portfolio data</p>

      <div className="data-management-cards">
        <div className="data-card">
          <div className="data-card-icon">📥</div>
          <h3>Export Data</h3>
          <p>Download all portfolio data as a JSON file. Great for backups!</p>
          <button className="btn-primary" onClick={exportData}>
            Export to JSON
          </button>
        </div>

        <div className="data-card">
          <div className="data-card-icon">📤</div>
          <h3>Import Data</h3>
          <p>Restore from a previously exported JSON file.</p>
          <input
            ref={fileInputRef}
            type="file"
            accept=".json"
            onChange={handleImport}
            style={{ display: 'none' }}
          />
          <button className="btn-secondary" onClick={() => fileInputRef.current.click()}>
            Import JSON File
          </button>
        </div>

        <div className="data-card warning">
          <div className="data-card-icon">⚠️</div>
          <h3>Reset to Default</h3>
          <p>⚠️ DANGER: This will erase all custom data and restore the original portfolio content.</p>
          <button className="btn-danger" onClick={handleReset}>
            Reset Everything
          </button>
        </div>
      </div>

      <div className="info-box">
        <h4>💡 How Data Persistence Works</h4>
        <ul>
          <li>All changes are saved to your browser's <strong>localStorage</strong></li>
          <li>Data persists across page refreshes and browser restarts</li>
          <li>Clearing browser data will remove your customizations</li>
          <li>Export regularly to keep backups!</li>
          <li>To make changes permanent, export the JSON and replace <code>defaultData.js</code></li>
        </ul>
      </div>
    </div>
  );
}