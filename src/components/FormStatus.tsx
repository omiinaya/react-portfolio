import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { fadeInVariants } from '../utils/animations';

interface FormStatusProps {
  type: 'success' | 'error';
  message: string;
  onDismiss?: () => void;
}

const FormStatus: React.FC<FormStatusProps> = ({ type, message, onDismiss }) => {
  const { t } = useTranslation();
  
  const getIcon = () => {
    switch (type) {
      case 'success':
        return '✅';
      case 'error':
        return '❌';
      default:
        return '';
    }
  };

  const getBgColor = () => {
    switch (type) {
      case 'success':
        return 'bg-green-100 dark:bg-green-900/20 border-green-200 dark:border-green-800';
      case 'error':
        return 'bg-red-100 dark:bg-red-900/20 border-red-200 dark:border-red-800';
      default:
        return '';
    }
  };

  const getTextColor = () => {
    switch (type) {
      case 'success':
        return 'text-green-800 dark:text-green-200';
      case 'error':
        return 'text-red-800 dark:text-red-200';
      default:
        return '';
    }
  };

  return (
    <motion.div
      className={`${getBgColor()} ${getTextColor()} border rounded-lg p-4 mb-6 relative`}
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      role="alert"
      aria-live="polite"
    >
      <div className="flex items-start">
        <span className="text-lg mr-3">{getIcon()}</span>
        <p className="flex-1">{message}</p>
        {onDismiss && (
          <button
            onClick={onDismiss}
            className="ml-4 text-current hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-current rounded"
            aria-label={t('contact.dismiss', 'Dismiss message')}
          >
            <span className="text-xl">×</span>
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default FormStatus;