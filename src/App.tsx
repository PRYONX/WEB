import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { SplashScreen } from './components/layout/SplashScreen';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Solutions } from './pages/Solutions';
import { HowWeWork } from './pages/HowWeWork';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <Router>
      <ScrollToTop />
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
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

