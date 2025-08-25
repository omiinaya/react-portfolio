import React from 'react';
import { useTranslation } from 'react-i18next';
import { Experience as ExperienceType } from '../types';

const Experience: React.FC = () => {
  const { t } = useTranslation();
  const experiences: ExperienceType[] = [
    {
      id: '1',
      company: 'TechCorp Inc.',
      position: 'Senior Full Stack Developer',
      period: '2022 - Present',
      description: [
        'Led development of a microservices architecture serving 100k+ users',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Mentored junior developers and conducted code reviews'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL']
    },
    {
      id: '2',
      company: 'StartupXYZ',
      position: 'Frontend Developer',
      period: '2020 - 2022',
      description: [
        'Built responsive user interfaces with React and TypeScript',
        'Collaborated with designers to implement pixel-perfect UIs',
        'Optimized application performance reducing load time by 40%'
      ],
      technologies: ['React', 'TypeScript', 'CSS3', 'GraphQL']
    },
    {
      id: '3',
      company: 'DevStudio',
      position: 'Junior Developer',
      period: '2019 - 2020',
      description: [
        'Developed and maintained web applications using modern frameworks',
        'Participated in agile development processes',
        'Contributed to open source projects'
      ],
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