import React, { ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import { shouldReduceMotion } from '../utils/animations';

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled,
  ...props
}) => {
  const baseClasses = 'btn';
  const variantClass = `btn-${variant}`;
  const sizeClass = `btn-${size}`;
  
  const fullClassName = `${baseClasses} ${variantClass} ${sizeClass} ${className}`.trim();

  if (shouldReduceMotion()) {
    return (
      <button
        className={fullClassName}
        onClick={onClick}
        type={type}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }

  // Create a clean button without problematic props for motion
  const ButtonComponent = motion.button;

  return (
    <ButtonComponent
      className={fullClassName}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </ButtonComponent>
  );
};

export default AnimatedButton;