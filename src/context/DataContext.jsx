import React, { createContext, useContext, useState, useEffect } from 'react';
import { defaultData } from '../data/defaultData';

const DataContext = createContext();

const STORAGE_KEY = 'portfolio_data';

export function DataProvider({ children }) {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : defaultData;
  });

  const [isAdminMode, setIsAdminMode] = useState(false);
  const [pendingChanges, setPendingChanges] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  // Generic update function with confirmation
  const updateData = (section, newValue, requiresConfirmation = true) => {
    if (requiresConfirmation) {
      setPendingChanges({ section, newValue });
      setShowConfirm(true);
      return false;
    }
    
    setData(prev => ({
      ...prev,
      [section]: newValue
    }));
    return true;
  };

  const confirmChanges = () => {
    if (pendingChanges) {
      setData(prev => ({
        ...prev,
        [pendingChanges.section]: pendingChanges.newValue
      }));
      setPendingChanges(null);
      setShowConfirm(false);
    }
  };

  const cancelChanges = () => {
    setPendingChanges(null);
    setShowConfirm(false);
  };

  // Specific update functions for each section
  const updatePersonal = (personalData) => updateData('personal', personalData);
  const updateSkills = (skillsData) => updateData('skills', skillsData);
  const updateProjects = (projectsData) => updateData('projects', projectsData);
  const updateExperience = (experienceData) => updateData('experience', experienceData);
  const updateEducation = (educationData) => updateData('education', educationData);
  const updateCertifications = (certificationsData) => updateData('certifications', certificationsData);

  // Reset to default
  const resetToDefault = () => {
    if (window.confirm('⚠️ This will reset ALL data to default. Are you sure?')) {
      setData(defaultData);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData));
    }
  };

  // Export data as JSON file
  const exportData = () => {
    const dataStr = JSON.stringify(data, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `portfolio-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Import data from JSON file
  const importData = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result);
        if (window.confirm('Import will replace current data. Continue?')) {
          setData(imported);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(imported));
        }
      } catch (err) {
        alert('Invalid JSON file');
      }
    };
    reader.readAsText(file);
  };

  return (
    <DataContext.Provider value={{
      data,
      isAdminMode,
      setIsAdminMode,
      updatePersonal,
      updateSkills,
      updateProjects,
      updateExperience,
      updateEducation,
      updateCertifications,
      resetToDefault,
      exportData,
      importData,
      showConfirm,
      confirmChanges,
      cancelChanges,
      pendingChanges
    }}>
      {children}
      {showConfirm && (
        <ConfirmModal 
          onConfirm={confirmChanges}
          onCancel={cancelChanges}
        />
      )}
    </DataContext.Provider>
  );
}

// Confirmation Modal Component
function ConfirmModal({ onConfirm, onCancel }) {
  return (
    <div className="confirm-overlay" onClick={onCancel}>
      <div className="confirm-modal" onClick={e => e.stopPropagation()}>
        <h3>Confirm Changes</h3>
        <p>Are you sure you want to save these changes?</p>
        <div className="confirm-actions">
          <button className="btn-secondary" onClick={onCancel}>Cancel</button>
          <button className="btn-primary" onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
}

export const useData = () => useContext(DataContext);