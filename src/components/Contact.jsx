import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import emailjs from 'emailjs-com';

export default function Contact() {
  const { data } = useData(); 
  const { personal } = data;
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      setTimeout(() => setStatus(null), 3000);
      return;
    }

    setLoading(true);

    try {
      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject || 'New Contact Form Message',
        message: form.message,
        to_email: personal.email,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <>
      <style>{`
        .contact-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        .contact-info-card {
          padding: 40px;
          border-radius: var(--radius-xl);
          background: var(--bg-card);
          border: 1px solid var(--border-card);
          position: relative;
          overflow: hidden;
        }
        .contact-info-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--grad-primary);
        }
        .contact-heading {
          font-family: var(--font-display);
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }
        .contact-sub {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 36px;
        }
        .contact-items { display: flex; flex-direction: column; gap: 16px; margin-bottom: 36px; }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 18px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-card);
          background: var(--bg-secondary);
          transition: var(--transition);
          text-decoration: none;
          color: inherit;
        }
        .contact-item:hover {
          border-color: var(--border-subtle);
          background: rgba(108,99,255,0.06);
        }
        .contact-icon {
          width: 40px; height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }
        .contact-item-label {
          font-size: 11px;
          font-family: var(--font-mono);
          color: var(--text-muted);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 2px;
        }
        .contact-item-value {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-primary);
        }
        .hire-me-block {
          padding: 28px;
          border-radius: var(--radius-lg);
          background: var(--grad-soft);
          border: 1px solid var(--border-subtle);
          text-align: center;
        }
        .hire-me-block p {
          font-size: 14px;
          color: var(--text-secondary);
          margin-bottom: 16px;
        }
        .hire-me-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 36px;
          border-radius: var(--radius-md);
          background: var(--grad-primary);
          background-size: 200% 200%;
          animation: gradientShift 4s ease infinite;
          color: white;
          font-family: var(--font-display);
          font-size: 17px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: var(--transition);
          text-decoration: none;
          letter-spacing: -0.01em;
        }
        .hire-me-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 40px rgba(108,99,255,0.45);
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .form-group { display: flex; flex-direction: column; gap: 8px; }
        .form-label {
          font-size: 12px;
          font-weight: 600;
          font-family: var(--font-mono);
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .form-input {
          background: var(--bg-card);
          border: 1px solid var(--border-card);
          border-radius: var(--radius-sm);
          padding: 14px 18px;
          color: var(--text-primary);
          font-size: 15px;
          font-family: var(--font-body);
          transition: var(--transition);
          outline: none;
        }
        .form-input:focus {
          border-color: var(--accent-1);
          box-shadow: 0 0 0 3px rgba(108,99,255,0.12);
        }
        .form-input::placeholder { color: var(--text-muted); }
        .form-textarea { min-height: 140px; resize: vertical; line-height: 1.6; }
        .form-submit {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }
        .status-msg {
          font-size: 14px;
          padding: 10px 16px;
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
        }
        .status-success {
          background: rgba(0,212,170,0.1);
          color: var(--accent-3);
          border: 1px solid rgba(0,212,170,0.25);
        }
        .status-error {
          background: rgba(255,107,107,0.1);
          color: #ff6b6b;
          border: 1px solid rgba(255,107,107,0.25);
        }
        @media (max-width: 900px) {
          .contact-inner { grid-template-columns: 1fr; gap: 40px; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>

      <section id="contact">
        <div className="section-container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div className="section-label">Get In Touch</div>
            <h2 className="section-title">
              Let's Work <span className="gradient-text">Together</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Whether you have a project in mind or just want to say hello — my inbox is always open.
            </p>
          </div>

          <div className="contact-inner">
            <div className="contact-info-card">
              <h3 className="contact-heading">
                Ready to build<br />something great?
              </h3>
              <p className="contact-sub">
                I'm currently open to new opportunities — full-time roles, freelance projects,
                and technical consulting. Let's create something remarkable together.
              </p>

              <div className="contact-items">
                <a href={`mailto:${personal.email}`} className="contact-item">
                  <div className="contact-icon" style={{ background: 'rgba(108,99,255,0.15)' }}>✉️</div>
                  <div>
                    <div className="contact-item-label">Email</div>
                    <div className="contact-item-value">{personal.email}</div>
                  </div>
                </a>
                <div className="contact-item">
                  <div className="contact-icon" style={{ background: 'rgba(0,212,170,0.15)' }}>📍</div>
                  <div>
                    <div className="contact-item-label">Location</div>
                    <div className="contact-item-value">{personal.location}</div>
                  </div>
                </div>
                {personal.socialLinks.linkedin && (
                  <a href={personal.socialLinks.linkedin} target="_blank" rel="noreferrer" className="contact-item">
                    <div className="contact-icon" style={{ background: 'rgba(0,119,181,0.15)' }}>in</div>
                    <div>
                      <div className="contact-item-label">LinkedIn</div>
                      <div className="contact-item-value">Connect with me</div>
                    </div>
                  </a>
                )}
              </div>

              <div className="hire-me-block">
                <p>Looking to bring on a skilled developer?</p>
                <a href={`mailto:${personal.email}?subject=Hiring Inquiry`} className="hire-me-btn">
                  💼 Hire Me
                </a>
              </div>
            </div>

            <div className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input className="form-input" placeholder="John Doe"
                    value={form.name} onChange={e => set('name', e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input className="form-input" type="email" placeholder="john@company.com"
                    value={form.email} onChange={e => set('email', e.target.value)} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <input className="form-input" placeholder="Project Inquiry"
                  value={form.subject} onChange={e => set('subject', e.target.value)} />
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-input form-textarea"
                  placeholder="Tell me about your project, timeline, and budget…"
                  value={form.message} onChange={e => set('message', e.target.value)} />
              </div>

              <div className="form-submit">
                {status === 'success' && (
                  <div className="status-msg status-success">
                    ✓ Message sent! I'll get back to you soon.
                  </div>
                )}
                {status === 'error' && (
                  <div className="status-msg status-error">
                    ✗ Please fill in all required fields.
                  </div>
                )}
                <button className="btn-primary" onClick={handleSubmit} disabled={loading}
                  style={{ marginLeft: 'auto', opacity: loading ? 0.7 : 1 }}>
                  {loading ? 'Sending…' : 'Send Message →'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}