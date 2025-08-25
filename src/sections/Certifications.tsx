import React from 'react';
import { Certification } from '../types';

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      id: '1',
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      issueDate: 'December 2023',
      credentialUrl: 'https://aws.amazon.com/certification'
    },
    {
      id: '2',
      title: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      issueDate: 'August 2023',
      credentialUrl: 'https://cloud.google.com/certification'
    },
    {
      id: '3',
      title: 'React Developer Certification',
      issuer: 'Meta',
      issueDate: 'March 2023',
      credentialUrl: 'https://www.meta.com'
    },
    {
      id: '4',
      title: 'Node.js Certified Developer',
      issuer: 'OpenJS Foundation',
      issueDate: 'January 2023',
      credentialUrl: 'https://openjsf.org'
    }
  ];

  return (
    <section id="certifications" className="certifications section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="certification-card card">
              <div className="certification-content">
                <h3 className="certification-title">{cert.title}</h3>
                <p className="certification-issuer">{cert.issuer}</p>
                <p className="certification-date">Issued: {cert.issueDate}</p>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certification-link"
                  >
                    View Credential
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