import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useData } from '../contexts/DataContext';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedButton from '../components/AnimatedButton';
import FormStatus from '../components/FormStatus';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, withReducedMotion } from '../utils/animations';
import { validateContactForm, ContactFormData } from '../utils/validation';
import { sendContactEmail } from '../services/emailService';
import { trackFormSubmission, isDevelopmentMode } from '../utils/analytics';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const { profile } = useData();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    website: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = validateContactForm(formData);
    setErrors(validationErrors);
    
    // If there are errors, don't submit
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await sendContactEmail(formData);
      
      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: t('contact.success', 'Message sent successfully!')
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: '',
          website: ''
        });
        // Track successful form submission
        if (!isDevelopmentMode()) {
          trackFormSubmission('Contact Form', true);
        }
      } else {
        setSubmitStatus({
          type: 'error',
          message: t('contact.error', result.message || 'Failed to send message. Please try again.')
        });
        // Track failed form submission
        if (!isDevelopmentMode()) {
          trackFormSubmission('Contact Form', false);
        }
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: t('contact.error', 'An unexpected error occurred. Please try again.')
      });
      // Track error in form submission
      if (!isDevelopmentMode()) {
        trackFormSubmission('Contact Form', false);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const dismissStatus = () => {
    setSubmitStatus({ type: null, message: '' });
  };

  return (
    <>
      <SEO
        title={`${profile.basics.name} | Portfolio`}
        description={`Contact ${profile.basics.name}, Full Stack Developer based in ${profile.basics.location}. Available for freelance projects and full-time opportunities.`}
        keywords={['contact', 'hire developer', 'freelance', 'full stack developer', profile.basics.location, 'react developer']}
        type="website"
      />
      <AnimatedSection id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">{t('contact.title')}</h2>
        <div className="contact-content">
          <motion.div
            className="contact-info"
            variants={withReducedMotion(slideInFromLeft)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
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
          </motion.div>
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            variants={withReducedMotion(slideInFromRight)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            noValidate
          >
            {submitStatus.type && (
              <FormStatus
                type={submitStatus.type}
                message={submitStatus.message}
                onDismiss={dismissStatus}
              />
            )}

            <div className="form-group">
              <label htmlFor="name">{t('contact.name')}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <span id="name-error" className="error-message" role="alert">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">{t('contact.email')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <span id="email-error" className="error-message" role="alert">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="message">{t('contact.message')}</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'error' : ''}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <span id="message-error" className="error-message" role="alert">
                  {errors.message}
                </span>
              )}
            </div>

            {/* Honeypot field for spam protection */}
            <div className="form-group" style={{ display: 'none' }} aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <AnimatedButton
              type="submit"
              disabled={isSubmitting}
              className={isSubmitting ? 'loading' : ''}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  {t('contact.sending', 'Sending...')}
                </>
              ) : (
                t('contact.send')
              )}
            </AnimatedButton>
          </motion.form>
        </div>
      </div>
      </AnimatedSection>
    </>
  );
};

export default Contact;