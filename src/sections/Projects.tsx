import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Project } from '../types';
import { useData } from '../contexts/DataContext';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const { profile } = useData();
  const [showAll, setShowAll] = useState(false);
  
  const projects: Project[] = profile.sections.projects.items.map(item => ({
    id: item.id,
    title: item.name,
    description: item.description,
    technologies: item.technologies,
    githubUrl: item.url.href,
    liveUrl: item.url.href,
    image: item.image
  }));

  const visibleProjects = showAll ? projects : projects.slice(0, 3);
  const hasMoreProjects = projects.length > 3;

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">{t('projects.title')}</h2>
        <div className="projects-grid">
          {visibleProjects.map((project) => (
            <div key={project.id} className="project-card card">
              <div className="project-image">
                <div className="image-placeholder">
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
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                    >
                      {t('projects.viewCode')}
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      {t('projects.viewProject')}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {hasMoreProjects && (
          <div className="projects-toggle">
            <button
              className="btn btn-primary projects-toggle-btn"
              onClick={toggleShowAll}
            >
              {showAll
                ? t('projects.showLess')
                : t('projects.showAll', { count: projects.length })}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;