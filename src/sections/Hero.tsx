import React from 'react';
import { smoothScrollTo } from '../utils/smoothScroll';

const Hero: React.FC = () => {
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
              Hi, I'm <span className="text-primary">Developer</span>
            </h1>
            <h2 className="hero-subtitle">Full Stack Developer</h2>
            <p className="hero-description">
              Passionate about creating innovative web solutions with modern technologies.
              I love turning complex problems into simple, beautiful, and intuitive designs.
            </p>
            <div className="hero-actions">
              <button onClick={() => handleScrollTo('#projects')} className="btn btn-primary">
                View My Work
              </button>
              <button onClick={() => handleScrollTo('#contact')} className="btn">
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              <svg
                width="200"
                height="200"
                viewBox="0 0 200 200"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="2"
              >
                <circle cx="100" cy="100" r="80" />
                <circle cx="100" cy="80" r="30" />
                <path d="M60 140 C70 120, 130 120, 140 140" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;