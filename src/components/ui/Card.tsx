import { motion } from 'framer-motion';
import { ReactNode, useRef, useState } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  featured?: boolean;
  onClick?: () => void;
  enable3D?: boolean;
}

export function Card({ children, className = '', featured = false, onClick, enable3D = true }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !enable3D) return;
    
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * -8; // Max 8 degrees tilt
    const rotateYValue = ((x - centerX) / centerX) * 8;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.15,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  const baseStyles = 'relative rounded-xl p-6 transition-all duration-300 overflow-hidden';
  const variantStyles = featured
    ? 'bg-gradient-to-br from-pryonx-surface to-pryonx-surface-light border-2 border-pryonx-red/80 shadow-lg shadow-pryonx-red/20 hover:shadow-pryonx-red/40 hover:border-pryonx-red'
    : 'bg-pryonx-surface/90 backdrop-blur-sm border border-gray-800 hover:border-pryonx-cyan/60 hover:shadow-lg hover:shadow-pryonx-cyan/15';
  
  return (
    <motion.div
      ref={ref}
      className={`${baseStyles} ${variantStyles} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: enable3D ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)` : undefined,
        transformStyle: enable3D ? 'preserve-3d' : undefined,
      }}
      whileHover={{ 
        y: -6,
        scale: enable3D ? 1.015 : 1,
      }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
    >
      {/* 3D Reflection Glare Overlay */}
      {enable3D && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, ${glare.opacity}) 0%, transparent 65%)`,
          }}
        />
      )}

      {/* Card Content with 3D Depth transform */}
      <div style={{ transform: enable3D ? 'translateZ(20px)' : undefined }}>
        {children}
      </div>
    </motion.div>
  );
}

