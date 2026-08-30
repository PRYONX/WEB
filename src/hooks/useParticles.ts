import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number; // Depth factor (0.2 to 2)
  vx: number;
  vy: number;
  size: number;
  baseOpacity: number;
  color: string;
}

export function useParticles(
  canvasRef: React.RefObject<HTMLCanvasElement>, 
  particleCount: number = 50,
  interactive: boolean = true
) {
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;

    const colors = [
      'rgba(0, 180, 216, ',   // Cyan
      'rgba(230, 57, 70, ',   // Pryonx Red
      'rgba(255, 255, 255, ', // White
    ];

    const resizeCanvas = () => {
      if (!canvas.parentElement) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      ctx.scale(dpr, dpr);

      // Re-initialize particles to fit inside canvas
      initParticles(width, height);
    };

    const initParticles = (w: number, h: number) => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < particleCount; i++) {
        const z = Math.random() * 1.5 + 0.5; // Depth multiplier
        const colorType = Math.random() > 0.85 ? colors[1] : (Math.random() > 0.4 ? colors[0] : colors[2]);
        newParticles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          z,
          vx: (Math.random() - 0.5) * 0.4 * z,
          vy: (Math.random() - 0.5) * 0.4 * z,
          size: (Math.random() * 2.5 + 1) * z,
          baseOpacity: (Math.random() * 0.4 + 0.2) / (z * 0.7),
          color: colorType,
        });
      }
      particlesRef.current = newParticles;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.targetX = e.clientX - rect.left;
      mouseRef.current.targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.targetX = -1000;
      mouseRef.current.targetY = -1000;
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    // Animation loop using refs - no React state updates in RAF
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.1;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.1;

      const particles = particlesRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Update & Draw Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around bounds softly
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // Mouse repelling physics with 3D depth reaction
        if (interactive && mx > 0 && my > 0) {
          const dx = mx - p.x;
          const dy = my - p.y;
          const distSq = dx * dx + dy * dy;
          const maxDist = 140 * p.z;

          if (distSq < maxDist * maxDist && distSq > 0) {
            const dist = Math.sqrt(distSq);
            const force = ((maxDist - dist) / maxDist) * 0.05 * p.z;
            p.x -= (dx / dist) * force * 15;
            p.y -= (dy / dist) * force * 15;
          }
        }

        // Render Particle with radial 3D depth glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.baseOpacity})`;
        ctx.fill();

        // Extra outer glow for larger foreground particles
        if (p.z > 1.2) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.baseOpacity * 0.25})`;
          ctx.fill();
        }
      }

      // Draw dynamic 3D connection lines
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];

          // Only connect particles at similar depth planes
          if (Math.abs(p1.z - p2.z) > 0.8) continue;

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;
          const maxConnectionDist = 130;

          if (distSq < maxConnectionDist * maxConnectionDist) {
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / maxConnectionDist) * 0.15 * Math.min(p1.baseOpacity, p2.baseOpacity);
            
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 180, 216, ${alpha})`;
            ctx.lineWidth = 0.8 * Math.min(p1.z, p2.z);
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particleCount, interactive]);
}

