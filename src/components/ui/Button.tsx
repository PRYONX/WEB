import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pryonx-cyan focus:ring-offset-2 focus:ring-offset-pryonx-dark-bg rounded-lg relative overflow-hidden group shadow-md';
  
  const variantStyles = {
    primary: 'bg-pryonx-red text-white hover:bg-red-500 shadow-pryonx-red/25 hover:shadow-lg hover:shadow-pryonx-red/40',
    secondary: 'bg-pryonx-cyan text-white hover:bg-cyan-500 shadow-pryonx-cyan/25 hover:shadow-lg hover:shadow-pryonx-cyan/40',
    outline: 'border-2 border-pryonx-cyan text-pryonx-cyan hover:bg-pryonx-cyan hover:text-white shadow-pryonx-cyan/10 hover:shadow-lg hover:shadow-pryonx-cyan/30',
  };
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg font-semibold',
  };

  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  const content = (
    <>
      <span className="relative z-10 flex items-center justify-center space-x-2">
        {children}
      </span>
      
      {/* Light shine sweep effect */}
      <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
    </>
  );

  if (isInternalLink && href) {
    return (
      <motion.div
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.96 }}
        className="inline-block"
      >
        <Link
          to={href}
          className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        >
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.96 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.96 }}
    >
      {content}
    </motion.button>
  );
}

