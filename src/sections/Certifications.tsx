import React from 'react';
import { useTranslation } from 'react-i18next';
import { useData } from '../contexts/DataContext';

const Certifications: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { profile } = useData();

  return (
    <section id="certifications" className="certifications section">
      <div className="container">
        <h2 className="section-title">{t('certifications.title')}</h2>
        <div className="certifications-grid">
         {profile.sections.certifications.items.map((cert) => (
           <div key={cert.id} className="certification-card card">
             <div className="certification-content">
               <h3 className="certification-title">{cert.name}</h3>
               <p className="certification-issuer">{cert.issuer}</p>
               <p className="certification-date">
                 {t('certifications.issued')}: {cert.date}
               </p>
               {cert.url.href && (
                 <a
                   href={cert.url.href}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="certification-link"
                 >
                   {t('certifications.viewCertification')}
                 </a>
               )}
             </div>
           </div>
         ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;