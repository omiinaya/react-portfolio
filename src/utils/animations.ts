import { Variants } from 'framer-motion';

/**
 * Animation configurations for Framer Motion
 */

// Page transition animations
export const pageTransitionVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Section reveal animations
export const sectionRevealVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

// Staggered children animations
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

// Button hover animations
export const buttonHoverVariants: Variants = {
  rest: {
    scale: 1,
    transition: {
      duration: 0.2,
      type: 'tween' as const,
      ease: 'easeIn',
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      type: 'tween' as const,
      ease: 'easeOut',
    },
  },
  tap: {
    scale: 0.95,
  },
};

// Loading animations
export const loadingSpinnerVariants: Variants = {
  animate: {
    rotate: 360,
    transition: {
      rotate: {
        duration: 1,
        repeat: Infinity,
        ease: 'linear' as const,
      },
    },
  },
};

export const pulseVariants = {
  animate: {
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Fade in animations
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// Slide in animations
export const slideInFromLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const slideInFromRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const slideInFromTop: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// Utility function to check for reduced motion preference
export const shouldReduceMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Utility function to get reduced motion variants
export const getReducedMotionVariants = (variants: Variants): Variants => {
  if (shouldReduceMotion()) {
    return {
      initial: { opacity: 1 },
      enter: { opacity: 1 },
      exit: { opacity: 1 },
    };
  }
  return variants;
};

// Utility function to apply animations with reduced motion support
export const withReducedMotion = <T extends Variants>(variants: T): T => {
  if (shouldReduceMotion()) {
    return {
      ...variants,
      initial: { opacity: 1 },
      enter: { opacity: 1 },
      exit: { opacity: 1 },
    } as T;
  }
  return variants;
};