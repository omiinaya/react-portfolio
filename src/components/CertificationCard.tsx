import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface CertificationCardProps {
  certification: {
    id: string;
    name: string;
    issuer: string;
    date: string;
    summary: string;
    url?: {
      label: string;
      href: string;
    };
    skills?: string[];
    image?: string;
  };
}

const CertificationCard: React.FC<CertificationCardProps> = ({ certification }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="certification-card card"
      whileHover={{
        y: -5,
        transition: { duration: 0.2 }
      }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Image Section */}
      <div className="certification-image">
        <div className="image-container">
          {certification.image ? (
            <img
              src={certification.image}
              alt={`${certification.name} certification badge`}
              className="certification-badge"
              onError={(e) => {
                // Fallback to placeholder if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.nextElementSibling?.classList.remove('hidden');
              }}
            />
          ) : null}
          <div className={`image-placeholder ${certification.image ? 'hidden' : ''}`}>
            <svg
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth="2"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <line x1="3" y1="9" x2="21" y2="9" />
              <line x1="9" y1="21" x2="9" y2="9" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="certification-content">
        {/* Title and Issuer */}
        <div className="certification-header">
          <h3 className="certification-title">{certification.name}</h3>
          <p className="certification-issuer">{certification.issuer}</p>
        </div>

        {/* Skills Bubbles */}
        {certification.skills && certification.skills.length > 0 && (
          <div className="certification-skills">
            {certification.skills.map((skill, index) => (
              <span key={index} className="skill-bubble">
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* Summary/Description */}
        {certification.summary && (
          <p className="certification-summary">{certification.summary}</p>
        )}

        {/* Action Buttons */}
        <div className="certification-actions">
          {/* Verification Button - Always shown but conditionally disabled */}
          <button
            className={`btn btn-primary ${!certification.url?.href ? 'btn-disabled' : ''}`}
            onClick={() => {
              if (certification.url?.href) {
                window.open(certification.url.href, '_blank', 'noopener,noreferrer');
              }
            }}
            disabled={!certification.url?.href}
            title={!certification.url?.href ? t('certifications.noVerificationLink') : t('certifications.verify')}
          >
            {t('certifications.verify')}
          </button>
        </div>

        {/* Date */}
        <p className="certification-date">
          {t('certifications.issued')}: {certification.date}
        </p>
      </div>
    </motion.div>
  );
};

export default CertificationCard;