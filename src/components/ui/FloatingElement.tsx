import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useParallax } from '../../hooks/useParallax';

interface FloatingElementProps {
  children: ReactNode;
  duration?: number;
  yOffset?: number;
  parallaxStrength?: number;
  className?: string;
  glow?: boolean;
}

export function FloatingElement({
  children,
  duration = 5,
  yOffset = 10,
  parallaxStrength = 0.04,
  className = '',
  glow = false,
}: FloatingElementProps) {
  const parallaxOffset = useParallax(parallaxStrength);

  return (
    <motion.div
      className={`relative inline-block ${className}`}
      animate={{
        x: parallaxOffset.x,
        y: [parallaxOffset.y - yOffset, parallaxOffset.y + yOffset, parallaxOffset.y - yOffset],
      }}
      transition={{
        y: {
          duration,
          repeat: Infinity,
          ease: 'easeInOut',
        },
        x: {
          type: 'spring',
          stiffness: 150,
          damping: 25,
        },
      }}
    >
      {glow && (
        <div className="absolute -inset-4 bg-gradient-to-r from-pryonx-cyan/20 to-pryonx-red/20 rounded-full blur-xl -z-10" />
      )}
      {children}
    </motion.div>
  );
}
