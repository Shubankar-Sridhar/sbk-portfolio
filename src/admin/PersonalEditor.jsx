import React, { useState } from 'react';
import { useData } from '../context/DataContext';

export default function PersonalEditor() {
  const { data, updatePersonal } = useData();
  const [form, setForm] = useState(data.personal);

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSocialChange = (platform, url) => {
    setForm(prev => ({
      ...prev,
      socialLinks: { ...prev.socialLinks, [platform]: url }
    }));
  };

  const handleSave = () => {
    updatePersonal(form);
    alert('✅ Personal information updated!');
  };

  return (
    <div className="editor-container">
      <h2>Personal Information</h2>
      <p className="editor-desc">Edit your name, bio, contact info, and social links</p>

      <div className="editor-form">
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            value={form.name}
            onChange={e => handleChange('name', e.target.value)}
            placeholder="Your name"
          />
        </div>

        <div className="form-group">
          <label>Title / Role</label>
          <input
            type="text"
            value={form.title}
            onChange={e => handleChange('title', e.target.value)}
            placeholder="e.g., Senior Full Stack Developer"
          />
        </div>

        <div className="form-group">
          <label>Tagline</label>
          <input
            type="text"
            value={form.tagline}
            onChange={e => handleChange('tagline', e.target.value)}
            placeholder="Short catchy description"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={form.email}
            onChange={e => handleChange('email', e.target.value)}
            placeholder="your@email.com"
          />
        </div>

        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            value={form.location}
            onChange={e => handleChange('location', e.target.value)}
            placeholder="City, Country"
          />
        </div>

        <div className="form-group">
          <label>Bio (supports line breaks)</label>
          <textarea
            rows="6"
            value={form.bio}
            onChange={e => handleChange('bio', e.target.value)}
            placeholder="Tell your story..."
          />
        </div>

        <div className="form-section">
          <h3>Social Links</h3>
          <div className="form-group">
            <label>GitHub URL</label>
            <input
              type="url"
              value={form.socialLinks.github || ''}
              onChange={e => handleSocialChange('github', e.target.value)}
              placeholder="https://github.com/username"
            />
          </div>
          <div className="form-group">
            <label>LinkedIn URL</label>
            <input
              type="url"
              value={form.socialLinks.linkedin || ''}
              onChange={e => handleSocialChange('linkedin', e.target.value)}
              placeholder="https://linkedin.com/in/username"
            />
          </div>
          <div className="form-group">
            <label>Twitter URL</label>
            <input
              type="url"
              value={form.socialLinks.twitter || ''}
              onChange={e => handleSocialChange('twitter', e.target.value)}
              placeholder="https://twitter.com/username"
            />
          </div>
          <div className="form-group">
            <label>Docker Hub URL</label>
            <input
              type="url"
              value={form.socialLinks.dockerhub || ''}
              onChange={e => handleSocialChange('dockerhub', e.target.value)}
              placeholder="https://hub.docker.com/u/username"
            />
          </div>
        </div>

        <button className="btn-primary" onClick={handleSave}>
          💾 Save Changes
        </button>
      </div>
    </div>
  );
}