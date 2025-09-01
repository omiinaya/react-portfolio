import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useData } from '../contexts/DataContext';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const { profile } = useData();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">{t('contact.title')}</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>{t('contact.header')}</h3>
            <p>
              {t('contact.description')}
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <strong>{t('contact.email')}:</strong>
                <a href={`mailto:${profile.basics.email}`}>{profile.basics.email}</a>
              </div>
              <div className="contact-item">
                <strong>{t('contact.location')}:</strong>
                <span>{profile.basics.location}</span>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t('contact.name')}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t('contact.email')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t('contact.message')}</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              {t('contact.send')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;