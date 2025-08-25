import React from 'react';
import { useTranslation } from 'react-i18next';
import { Experience as ExperienceType } from '../types';

const Experience: React.FC = () => {
  const { t } = useTranslation();
  const experiences: ExperienceType[] = [
    {
      id: '1',
      company: t('experience.companies.techcorp'),
      position: t('experience.positions.seniorFullStack'),
      period: `2022 - ${t('experience.present')}`,
      description: t('experience.descriptions.techcorp', { returnObjects: true }) as string[],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL']
    },
    {
      id: '2',
      company: t('experience.companies.startupxyz'),
      position: t('experience.positions.frontendDeveloper'),
      period: '2020 - 2022',
      description: t('experience.descriptions.startupxyz', { returnObjects: true }) as string[],
      technologies: ['React', 'TypeScript', 'CSS3', 'GraphQL']
    },
    {
      id: '3',
      company: t('experience.companies.devstudio'),
      position: t('experience.positions.juniorDeveloper'),
      period: '2019 - 2020',
      description: t('experience.descriptions.devstudio', { returnObjects: true }) as string[],
      technologies: ['JavaScript', 'React', 'Python', 'MySQL']
    }
  ];

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title">{t('experience.title')}</h2>
        <div className="experience-list">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-item card">
              <div className="experience-header">
                <h3 className="experience-company">{exp.company}</h3>
                <span className="experience-period">{exp.period}</span>
              </div>
              <h4 className="experience-position">{exp.position}</h4>
              <ul className="experience-description">
                {exp.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="experience-technologies">
                {exp.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;