import React from 'react';
import { useTranslation } from 'react-i18next';
import { smoothScrollTo } from '../utils/smoothScroll';
import { useData } from '../contexts/DataContext';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { profile } = useData();
  const handleScrollTo = (targetId: string) => {
    smoothScrollTo(targetId, {
      duration: 1000,
      easing: (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
      offset: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 80
    });
  };

  return (
    <section id="hero" className="hero section">
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
              <button onClick={() => handleScrollTo('#projects')} className="btn btn-primary">
                {t('hero.cta')}
              </button>
              <button onClick={() => handleScrollTo('#contact')} className="btn">
                {t('contact.title')}
              </button>
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
                    src="https://gitroll.io/api/badges/profiles/v1/uupv0XPGvSwbc0uv4LzuUyBO7cmR2?theme=dark"
                    alt="GitRoll Profile"
                    className="gitroll-image"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;