import React from 'react';
import { motion } from 'framer-motion';
import { shouldReduceMotion } from '../utils/animations';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  if (shouldReduceMotion()) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <svg
          className={`${sizeClasses[size]} text-primary`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            className="opacity-25"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
    );
  }

  return (
    <motion.div
      className={`flex items-center justify-center ${className}`}
      animate={{ rotate: 360 }}
      transition={{ rotate: { duration: 1, repeat: Infinity, ease: 'linear' } }}
    >
      <svg
        className={`${sizeClasses[size]} text-primary`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          className="opacity-25"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </motion.div>
  );
};

export default LoadingSpinner;