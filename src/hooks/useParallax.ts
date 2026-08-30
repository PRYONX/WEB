import { useEffect, useState } from 'react';

export function useParallax(strength: number = 0.05) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const offsetX = (e.clientX - centerX) * strength;
      const offsetY = (e.clientY - centerY) * strength;
      
      setOffset({ x: offsetX, y: offsetY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [strength]);

  return offset;
}
