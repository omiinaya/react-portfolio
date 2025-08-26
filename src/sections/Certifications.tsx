import React from 'react';
import { useTranslation } from 'react-i18next';
import { useData } from '../contexts/DataContext';
import CertificationCard from '../components/CertificationCard';

const Certifications: React.FC = () => {
  const { t } = useTranslation();
  const { profile } = useData();

  return (
    <section id="certifications" className="certifications section">
      <div className="container">
        <h2 className="section-title">{t('certifications.title')}</h2>
        <div className="certifications-grid">
          {profile.sections.certifications.items.map((cert) => (
            <CertificationCard key={cert.id} certification={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;