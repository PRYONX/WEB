import { useRef } from 'react';
import { useParticles } from '../../hooks/useParticles';

interface ParticleBackgroundProps {
  particleCount?: number;
  className?: string;
  interactive?: boolean;
}

export function ParticleBackground({ 
  particleCount = 50, 
  className = '',
  interactive = true 
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useParticles(canvasRef, particleCount, interactive);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ opacity: 0.75 }}
    />
  );
}

