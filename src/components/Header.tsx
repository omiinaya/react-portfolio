import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';
import { smoothScrollTo, scrollToTop } from '../utils/smoothScroll';
import '../styles/theme.css';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { isDarkMode, toggleTheme } = useTheme();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const handleNavClick = useCallback((targetId: string) => {
    smoothScrollTo(targetId, {
      duration: 1000,
      easing: (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
      offset: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 80
    });
  }, []);

  const handleLogoClick = useCallback(() => {
    scrollToTop({
      duration: 1000,
      easing: (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
    });
  }, []);

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    setIsLanguageDropdownOpen(false);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="nav-brand">
            <button
              onClick={handleLogoClick}
              className="logo-button"
              aria-label="Scroll to top"
            >
              <h1 className="logo">{t('header.logo')}</h1>
            </button>
          </div>
          
          <div className="nav-menu">
          <button onClick={() => handleNavClick('#hero')} className="nav-link">{t('header.about')}</button>
          {/* 
          <button onClick={() => handleNavClick('#experience')} className="nav-link">{t('header.experience')}</button>
          */}
          <button onClick={() => handleNavClick('#projects')} className="nav-link">{t('header.projects')}</button>
          <button onClick={() => handleNavClick('#certifications')} className="nav-link">{t('header.certifications')}</button>
          <button onClick={() => handleNavClick('#contact')} className="nav-link">{t('header.contact')}</button>
        </div>
          
          <div className="nav-actions">
            {/* GitHub Repository Link */}
            <a
              href="https://github.com/omiinaya/new-react-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
              aria-label={t('header.github')}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>

            {/* Language Selector */}
            <div className="language-selector">
              <button
                onClick={toggleLanguageDropdown}
                className="language-toggle"
                aria-label={t('header.language')}
                aria-expanded={isLanguageDropdownOpen}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </button>
              
              {isLanguageDropdownOpen && (
                <div className="language-dropdown">
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`language-option ${i18n.language === 'en' ? 'active' : ''}`}
                  >
                    {t('languages.en')}
                  </button>
                  <button
                    onClick={() => handleLanguageChange('es')}
                    className={`language-option ${i18n.language === 'es' ? 'active' : ''}`}
                  >
                    {t('languages.es')}
                  </button>
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            >
              {isDarkMode ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;