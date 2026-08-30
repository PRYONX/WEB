import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useParallax } from '../../hooks/useParallax';

interface ParallaxContainerProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

export function ParallaxContainer({ children, strength = 0.05, className = '' }: ParallaxContainerProps) {
  const offset = useParallax(strength);

  return (
    <motion.div
      className={className}
      animate={{
        x: offset.x,
        y: offset.y,
      }}
      transition={{ type: 'spring', stiffness: 100, damping: 30 }}
    >
      {children}
    </motion.div>
  );
}
