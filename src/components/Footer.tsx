import React from 'react';
import { useTranslation } from 'react-i18next';
import { useData } from '../contexts/DataContext';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { profile } = useData();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <p>&copy; {currentYear} {t('footer.copyright')}</p>
          </div>
         <div className="footer-links">
           {profile.sections.profiles.items.map((profile) => (
             <a
               key={profile.id}
               href={profile.url.href}
               target="_blank"
               rel="noopener noreferrer"
               className="footer-link"
             >
               {profile.network}
             </a>
           ))}
           <a href={`mailto:${profile.basics.email}`} className="footer-link">
             Email
           </a>
         </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;