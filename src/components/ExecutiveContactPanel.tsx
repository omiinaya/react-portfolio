import React from 'react';
import { useTranslation } from 'react-i18next';
import { useData } from '../contexts/DataContext';
import { motion } from 'framer-motion';
import { slideInFromTop, withReducedMotion } from '../utils/animations';
import { trackSocialMediaClick, isDevelopmentMode } from '../utils/analytics';

const ExecutiveContactPanel: React.FC = () => {
  const { t } = useTranslation();
  const { profile } = useData();

  // Miami area coordinates for approximate location
  const lat = 25.7617;
  const lng = -80.1918;

  const handleSocialClick = (network: string, url: string) => {
    if (!isDevelopmentMode()) {
      trackSocialMediaClick(network, url);
    }
  };

  return (
    <motion.div
      className="executive-contact-panel"
      variants={withReducedMotion(slideInFromTop)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {/* Header Section */}
      <div className="contact-panel-header">
        <h3 className="contact-panel-title">{t('contact.getInTouch', 'Get in Touch')}</h3>
        <p className="contact-panel-subtitle">
          {t('contact.availableForOpportunities', 'Available for new opportunities and collaborations')}
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="contact-panel-content">
        {/* Left Column - Slim Contact Cards */}
        <div className="contact-info-column">
          <div className="contact-info-section">
            <div className="contact-info-item slim">
              <div className="contact-icon-wrapper">
                <EmailIcon />
              </div>
              <div className="contact-info-content">
                <h4 className="contact-info-label">{t('contact.email')}</h4>
                <a
                  href={`mailto:${profile.basics.email}`}
                  className="contact-info-value contact-link"
                  onClick={() => handleSocialClick('Email', `mailto:${profile.basics.email}`)}
                >
                  {profile.basics.email}
                </a>
              </div>
            </div>

            <div className="contact-info-item slim">
              <div className="contact-icon-wrapper">
                <LocationIcon />
              </div>
              <div className="contact-info-content">
                <h4 className="contact-info-label">{t('contact.location')}</h4>
                <span className="contact-info-value">{profile.basics.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Center Column - Map (positioned below contact info) */}
        <div className="map-column">
          <div className="map-section">
            <div className="map-container-executive">
              <div className="openstreetmap-frame">
                <iframe
                  width="100%"
                  height="280"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${lng-0.08}%2C${lat-0.08}%2C${lng+0.08}%2C${lat+0.08}&layer=mapnik&marker=${lat}%2C${lng}`}
                  title="Approximate Location Map"
                  loading="lazy"
                />
              </div>
              <div className="map-disclaimer">
                <small>Approximate location in {profile.basics.location}</small>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Vertical Social Links */}
        <div className="social-column">
          <div className="social-section">
            <h4 className="social-section-title">{t('contact.connect', 'Connect With Me')}</h4>
            <div className="social-links-vertical">
              {profile.sections.profiles.items.map((profileItem) => (
                <a
                  key={profileItem.id}
                  href={profileItem.url.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-vertical"
                  aria-label={`Visit my ${profileItem.network} profile`}
                  onClick={() => handleSocialClick(profileItem.network, profileItem.url.href)}
                >
                  <div className="social-icon-wrapper">
                    {getSocialIcon(profileItem.network)}
                  </div>
                  <span className="social-network-name">{profileItem.network}</span>
                </a>
              ))}
              <a
                href={`mailto:${profile.basics.email}`}
                className="social-link-vertical"
                aria-label="Send me an email"
                onClick={() => handleSocialClick('Email', `mailto:${profile.basics.email}`)}
              >
                <div className="social-icon-wrapper">
                  <EmailIcon />
                </div>
                <span className="social-network-name">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Social Icon Helper Function
const getSocialIcon = (network: string) => {
  switch (network.toLowerCase()) {
    case 'github':
      return <GitHubIcon />;
    case 'x':
      return <TwitterIcon />;
    case 'linkedin':
      return <LinkedInIcon />;
    default:
      return null;
  }
};

// SVG Icons
const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default ExecutiveContactPanel;