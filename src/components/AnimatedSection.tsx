import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { sectionRevealVariants, withReducedMotion } from '../utils/animations';

interface AnimatedSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  viewport?: { once?: boolean; margin?: string };
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  id,
  className = '',
  viewport = { once: true, margin: '-50px' }
}) => {
  return (
    <motion.section
      id={id}
      className={className}
      variants={withReducedMotion(sectionRevealVariants)}
      initial="offscreen"
      whileInView="onscreen"
      viewport={viewport}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;