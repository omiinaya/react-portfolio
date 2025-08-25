import React from 'react';
import { useTranslation } from 'react-i18next';
import { Certification } from '../types';

const Certifications: React.FC = () => {
  const { t, i18n } = useTranslation();
  const certifications: Certification[] = [
    {
      id: '1',
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      issueDate: '2023-12-01',
      credentialUrl: 'https://aws.amazon.com/certification'
    },
    {
      id: '2',
      title: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      issueDate: '2023-08-01',
      credentialUrl: 'https://cloud.google.com/certification'
    },
    {
      id: '3',
      title: 'React Developer Certification',
      issuer: 'Meta',
      issueDate: '2023-03-01',
      credentialUrl: 'https://www.meta.com'
    },
    {
      id: '4',
      title: 'Node.js Certified Developer',
      issuer: 'OpenJS Foundation',
      issueDate: '2023-01-01',
      credentialUrl: 'https://openjsf.org'
    }
  ];

  return (
    <section id="certifications" className="certifications section">
      <div className="container">
        <h2 className="section-title">{t('certifications.title')}</h2>
        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="certification-card card">
              <div className="certification-content">
                <h3 className="certification-title">{cert.title}</h3>
                <p className="certification-issuer">{cert.issuer}</p>
                <p className="certification-date">
                  {t('certifications.issued')}: {new Date(cert.issueDate).toLocaleDateString(i18n.language, { month: 'long', year: 'numeric' })}
                </p>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
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