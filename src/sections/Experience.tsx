import React from 'react';
import { useTranslation } from 'react-i18next';
import { useData } from '../contexts/DataContext';

const Experience: React.FC = () => {
  const { t } = useTranslation();
  const { profile } = useData();

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title">{t('experience.title')}</h2>
        <div className="experience-content">
          <div className="experience-list">
           {profile.sections.experience.items.map((exp) => (
             <div key={exp.id} className="experience-item card">
               <div className="experience-header">
                 <h3 className="experience-company">{exp.company}</h3>
                 <span className="experience-period">{exp.date}</span>
               </div>
               <h4 className="experience-position">{exp.position}</h4>
               <div
                 className="experience-description"
                 dangerouslySetInnerHTML={{ __html: exp.summary }}
               />
             </div>
           ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;