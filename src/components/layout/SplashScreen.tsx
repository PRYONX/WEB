import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';
import logo from '../../assets/logo.png';
import { ParticleBackground } from '../ui/ParticleBackground';

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [showSkip, setShowSkip] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Show skip button quickly
    const skipTimer = setTimeout(() => setShowSkip(true), 600);

    // Smooth progress bar counter
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);
    
    // Auto-complete after ~2.6 seconds
    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 600); // Allow fade-out exit animation
    }, 2600);

    return () => {
      clearTimeout(skipTimer);
      clearTimeout(completeTimer);
      clearInterval(interval);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsVisible(false);
    setTimeout(onComplete, 400);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-pryonx-dark-bg flex items-center justify-center overflow-hidden"
        >
          {/* Particle background */}
          <ParticleBackground particleCount={60} interactive={false} />

          {/* Ambient Glowing Orbs */}
          <motion.div
            className="absolute w-[500px] h-[500px] bg-pryonx-cyan/15 rounded-full blur-[120px] pointer-events-none"
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute w-[400px] h-[400px] bg-pryonx-red/15 rounded-full blur-[100px] pointer-events-none"
            animate={{
              scale: [1.2, 0.9, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />
          
          <div className="relative z-10 text-center px-4 max-w-lg mx-auto">
            {/* Outer Glowing Energy Rings */}
            <div className="relative flex justify-center items-center mb-8">
              <motion.div
                className="absolute w-40 h-40 rounded-full border border-pryonx-cyan/30"
                animate={{
                  scale: [1, 1.25, 1],
                  rotate: [0, 180, 360],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute w-48 h-48 rounded-full border border-dashed border-pryonx-red/30"
                animate={{
                  scale: [1.1, 0.95, 1.1],
                  rotate: [360, 180, 0],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />

              {/* Logo Reveal */}
              <motion.div
                initial={{ scale: 0.3, opacity: 0, rotateY: -90 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 p-4"
              >
                <img 
                  src={logo} 
                  alt="PRYONX Logo" 
                  className="h-28 md:h-32 w-auto mx-auto object-contain drop-shadow-[0_0_25px_rgba(0,180,216,0.5)]"
                />
              </motion.div>
            </div>
            
            {/* Text Animations */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-3"
            >
              <motion.h1 
                className="text-4xl md:text-5xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-pryonx-cyan font-space-grotesk"
                animate={{ 
                  filter: [
                    'drop-shadow(0 0 15px rgba(0, 180, 216, 0.4))', 
                    'drop-shadow(0 0 35px rgba(0, 180, 216, 0.8))', 
                    'drop-shadow(0 0 15px rgba(0, 180, 216, 0.4))'
                  ] 
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                PRYONX
              </motion.h1>

              <motion.div 
                className="flex items-center justify-center space-x-2 text-xs md:text-sm text-pryonx-cyan font-semibold tracking-widest uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <Sparkles size={14} className="animate-spin text-pryonx-red" />
                <span>AI Automation & Advanced Solutions</span>
                <Sparkles size={14} className="animate-spin text-pryonx-cyan" />
              </motion.div>
            </motion.div>

            {/* Glowing Futuristic Progress Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-10 max-w-xs mx-auto"
            >
              <div className="h-1.5 w-full bg-gray-800/80 rounded-full overflow-hidden p-0.5 border border-gray-700/50 backdrop-blur-sm">
                <motion.div 
                  className="h-full bg-gradient-to-r from-pryonx-cyan via-blue-400 to-pryonx-red rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut' }}
                />
              </div>
              <div className="mt-2 flex justify-between items-center text-[10px] text-gray-400 uppercase tracking-widest font-mono">
                <span>Initializing System</span>
                <span>{progress}%</span>
              </div>
            </motion.div>
          </div>

          {/* Floating Skip button */}
          <AnimatePresence>
            {showSkip && (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                onClick={handleSkip}
                className="absolute bottom-8 right-8 z-20 flex items-center space-x-2 text-xs font-medium uppercase tracking-wider text-gray-400 hover:text-white bg-pryonx-surface/80 border border-gray-700/60 px-4 py-2 rounded-full backdrop-blur-md hover:border-pryonx-cyan transition-all"
              >
                <span>Skip Intro</span>
                <X size={14} />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

