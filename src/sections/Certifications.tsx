import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useData } from '../contexts/DataContext';
import CertificationCard from '../components/CertificationCard';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedButton from '../components/AnimatedButton';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { staggerContainerVariants, staggerItemVariants, withReducedMotion } from '../utils/animations';

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
    <>
      <SEO
        title={`Certifications - ${profile.basics.name} Portfolio`}
        description={`View ${profile.basics.name}'s professional certifications including CompTIA A+, Tech+, ITF+, Full Stack Development, and Microsoft certifications.`}
        keywords={['certifications', 'comptia', 'microsoft', 'full stack developer', 'professional certifications', 'IT certifications']}
        type="website"
      />
      <AnimatedSection id="certifications" className="certifications section">
      <div className="container">
        <h2 className="section-title">{t('certifications.title')}</h2>
        <motion.div
          className="certifications-grid"
          variants={withReducedMotion(staggerContainerVariants)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {visibleCertifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={withReducedMotion(staggerItemVariants)}
            >
              <CertificationCard certification={cert} />
            </motion.div>
          ))}
        </motion.div>
        {hasMoreCertifications && (
          <div className="certifications-toggle">
            <AnimatedButton
              className="certifications-toggle-btn"
              onClick={toggleShowAll}
            >
              {showAll
                ? t('certifications.showLess')
                : t('certifications.showAll', { count: certifications.length })}
            </AnimatedButton>
          </div>
        )}
      </div>
      </AnimatedSection>
    </>
  );
};

export default Certifications;