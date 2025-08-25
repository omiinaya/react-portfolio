import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <p>&copy; {currentYear} {t('footer.copyright')}</p>
          </div>
          <div className="footer-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-link">
              {t('footer.github')}
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">
              {t('footer.linkedin')}
            </a>
            <a href="mailto:contact@example.com" className="footer-link">
              {t('footer.email')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;