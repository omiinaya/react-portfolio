import React, { useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { smoothScrollTo } from '../utils/smoothScroll';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  const handleNavClick = useCallback((targetId: string) => {
    smoothScrollTo(targetId, {
      duration: 800,
      easing: (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
      offset: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 80
    });
    onClose();
  }, [onClose]);

  // Close menu on escape key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.querySelector('.mobile-menu');
      if (menu && !menu.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const menuVariants = {
    closed: {
      x: '100%',
      transition: { duration: 0.3 }
    },
    open: {
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  const backdropVariants = {
    closed: {
      opacity: 0,
      transition: { duration: 0.2 }
    },
    open: {
      opacity: 1,
      transition: { duration: 0.2 }
    }
  };

  const navItemVariants = {
    closed: {
      opacity: 0,
      x: 20,
      transition: { duration: 0.2 }
    },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3
      }
    })
  };

  const navItems = [
    { id: '#hero', label: t('header.about') },
    { id: '#projects', label: t('header.projects') },
    { id: '#certifications', label: t('header.certifications') },
    { id: '#contact', label: t('header.contact') }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="mobile-menu-backdrop"
            variants={backdropVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={onClose}
          />
          
          {/* Menu */}
          <motion.div
            className="mobile-menu"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            role="dialog"
            aria-modal="true"
            aria-label={t('header.mobileMenu')}
          >
            <div className="mobile-menu-content">
              <nav className="mobile-nav">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="mobile-nav-link"
                    variants={navItemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    custom={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>
              
              <div className="mobile-menu-footer">
                <p className="mobile-menu-copyright">
                  © {new Date().getFullYear()} {t('header.logo')}
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default HamburgerMenu;