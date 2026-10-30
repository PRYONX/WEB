import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { SplashScreen } from './components/layout/SplashScreen';
import { SeoSync } from './components/seo/SeoSync';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Solutions } from './pages/Solutions';
import { HowWeWork } from './pages/HowWeWork';
import { About } from './pages/About';
import { Team } from './pages/Team';
import { Contact } from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  // Show splash only once per browsing session so repeat visitors and
  // search-engine crawlers get immediate access to page content (better LCP).
  const [showSplash, setShowSplash] = useState(() => {
    try {
      return sessionStorage.getItem('pryonx-splash-seen') !== 'true';
    } catch {
      return true;
    }
  });

  const handleSplashComplete = () => {
    setShowSplash(false);
    try {
      sessionStorage.setItem('pryonx-splash-seen', 'true');
    } catch {
      // sessionStorage unavailable (e.g. crawler) - splash won't reshow this load
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <SeoSync />
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <div className={`min-h-screen flex flex-col transition-opacity duration-700 ${showSplash ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <Navigation />


        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/how-we-work" element={<HowWeWork />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

