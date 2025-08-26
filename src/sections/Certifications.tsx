import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useData } from '../contexts/DataContext';
import CertificationCard from '../components/CertificationCard';

const Certifications: React.FC = () => {
  const { t } = useTranslation();
  const { profile } = useData();
  const [showAll, setShowAll] = useState(false);

  const certifications = profile.sections.certifications.items;
  const visibleCertifications = showAll ? certifications : certifications.slice(0, 4);
  const hasMoreCertifications = certifications.length > 4;

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section id="certifications" className="certifications section">
      <div className="container">
        <h2 className="section-title">{t('certifications.title')}</h2>
        <div className="certifications-grid">
          {visibleCertifications.map((cert) => (
            <CertificationCard key={cert.id} certification={cert} />
          ))}
        </div>
        {hasMoreCertifications && (
          <div className="certifications-toggle">
            <button
              className="btn btn-primary certifications-toggle-btn"
              onClick={toggleShowAll}
            >
              {showAll
                ? t('certifications.showLess')
                : t('certifications.showAll', { count: certifications.length })}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;