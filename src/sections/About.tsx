import React from 'react';
import { useTranslation } from 'react-i18next';
import { useData } from '../contexts/DataContext';
import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';
import { staggerContainerVariants, staggerItemVariants, withReducedMotion } from '../utils/animations';

const About: React.FC = () => {
  const { t } = useTranslation();
  const { profile } = useData();
  const skills = [
    'React',
    'TypeScript',
    'Node.js',
    'Python',
    'PostgreSQL',
    'AWS',
    'Docker',
    'Git'
  ];

  return (
    <AnimatedSection id="about" className="about section">
      <div className="container">
        <h2 className="section-title">{t('about.title')}</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              {t('about.description')}
            </p>
            
            <div className="skills">
              <h3 className="skills-title">{t('about.skills')}</h3>
              <motion.div
                className="skills-grid"
                variants={withReducedMotion(staggerContainerVariants)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-20px' }}
              >
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="skill-tag"
                    variants={withReducedMotion(staggerItemVariants)}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;