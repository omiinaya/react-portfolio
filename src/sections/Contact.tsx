import React from 'react';
import { useTranslation } from 'react-i18next';
import { useData } from '../contexts/DataContext';
import AnimatedSection from '../components/AnimatedSection';
import SEO from '../components/SEO';
import ExecutiveContactPanel from '../components/ExecutiveContactPanel';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const { profile } = useData();

  return (
    <>
      <SEO
        title={`${profile.basics.name} | Portfolio`}
        description={`Contact ${profile.basics.name}, Full Stack Developer based in ${profile.basics.location}. Available for freelance projects and full-time opportunities.`}
        keywords={['contact', 'hire developer', 'freelance', 'full stack developer', profile.basics.location, 'react developer']}
        type="website"
      />
      <AnimatedSection id="contact" className="contact section">
        <div className="container">
          <h2 className="section-title">{t('contact.title')}</h2>
          <ExecutiveContactPanel />
        </div>
      </AnimatedSection>
    </>
  );
};

export default Contact;