import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { pageTransitionVariants, withReducedMotion } from '../utils/animations';

interface AnimatedPageProps {
  children: ReactNode;
  className?: string;
}

const AnimatedPage: React.FC<AnimatedPageProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      className={className}
      variants={withReducedMotion(pageTransitionVariants)}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;