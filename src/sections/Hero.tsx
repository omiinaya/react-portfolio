import React from 'react';
import { useTranslation } from 'react-i18next';
import { smoothScrollTo } from '../utils/smoothScroll';
import { useData } from '../contexts/DataContext';
import { useTheme } from '../contexts/ThemeContext';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedButton from '../components/AnimatedButton';
import SEO from '../components/SEO';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { profile } = useData();
  const { isDarkMode } = useTheme();
  
  const gitrollUrl = `https://gitroll.io/api/badges/profiles/v1/uupv0XPGvSwbc0uv4LzuUyBO7cmR2?theme=${isDarkMode ? 'dark' : 'light'}`;
  const handleScrollTo = (targetId: string) => {
    smoothScrollTo(targetId, {
      duration: 1000,
      easing: (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
      offset: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 80
    });
  };

  return (
    <>
      <SEO
        title={`${profile.basics.name} - ${profile.basics.headline} Portfolio`}
        description={`Welcome to the portfolio of ${profile.basics.name}, ${profile.basics.headline} based in ${profile.basics.location}. Specializing in React, TypeScript, and full-stack development.`}
        keywords={['portfolio', 'developer', profile.basics.headline.toLowerCase(), profile.basics.location, 'react', 'typescript']}
        type="profile"
      />
      <AnimatedSection id="hero" className="hero section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              {t('hero.greeting')} <span className="text-primary">{profile.basics.name}</span>
            </h1>
            <h2 className="hero-subtitle">{profile.basics.headline}</h2>
            <p className="hero-description">
              {t('hero.description')}
            </p>
            <div className="hero-actions">
              <AnimatedButton
                onClick={() => handleScrollTo('#projects')}
                variant="primary"
              >
                {t('hero.cta')}
              </AnimatedButton>
              <AnimatedButton
                onClick={() => handleScrollTo('#contact')}
                variant="secondary"
              >
                {t('contact.title')}
              </AnimatedButton>
            </div>
          </div>
          <div className="hero-stats">
            <div className="github-stats-container">
              {/* GitRoll Profile Badge */}
              <div className="gitroll-badge">
                <a
                  href="https://gitroll.io/profile/uupv0XPGvSwbc0uv4LzuUyBO7cmR2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gitroll-link"
                >
                  <img
                    src={gitrollUrl}
                    alt="GitRoll Profile"
                    className="gitroll-image"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </AnimatedSection>
    </>
  );
};

export default Hero;