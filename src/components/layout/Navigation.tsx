import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import { siteData } from '../../data/site-data';
import { Button } from '../ui/Button';
import logo from '../../assets/logo.png';

export function Navigation() {

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navStyles = isScrolled
    ? 'bg-pryonx-dark-bg/95 backdrop-blur-lg shadow-xl shadow-black/40 border-b border-gray-800/80 py-3'
    : 'bg-pryonx-dark-bg/70 backdrop-blur-md py-4 md:py-5 border-b border-transparent';

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navStyles}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group cursor-pointer flex-shrink-0">
            <motion.img 
              src={logo} 
              alt="PRYONX Logo - AI Automation | Advanced AI Solutions" 
              className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover transition-transform duration-300 group-hover:scale-105 filter group-hover:drop-shadow-[0_0_12px_rgba(0,180,216,0.6)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-5 lg:space-x-8">
            {siteData.navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative text-xs lg:text-sm font-medium transition-colors duration-200 py-1 flex-shrink-0 ${
                    isActive ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pryonx-cyan to-pryonx-red rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}

            <div className="flex-shrink-0">
              <Button href={siteData.googleFormUrl} size="sm" className="whitespace-nowrap">
                <span className="hidden lg:inline">{siteData.cta.primary}</span>
                <span className="lg:hidden">Get Started</span>
              </Button>
            </div>
          </div>




          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={26} className="text-pryonx-cyan" /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-pryonx-surface/95 backdrop-blur-xl border-t border-gray-800 shadow-2xl"
          >
            <div className="container-custom py-6 space-y-4">
              {siteData.navigation.map((item, index) => {
                const isActive = location.pathname === item.href;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.href}
                      className={`block text-base font-medium py-2 transition-colors ${
                        isActive ? 'text-pryonx-cyan font-bold pl-2 border-l-2 border-pryonx-cyan' : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
              <div className="pt-4">
                <Button href={siteData.googleFormUrl} className="w-full">
                  {siteData.cta.primary}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

