import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

// Layout & Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductDetailModal from './components/ProductDetailModal';
import InquiryModal from './components/InquiryModal';
import LightboxModal from './components/LightboxModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import Contact from './pages/Contact';

// Hooks
import { useScrollProgress } from './hooks/useScroll';

const App = () => {
  const location = useLocation();
  const { darkMode, scrollProgress } = useSelector((state) => state.ui);

  // Hook up scroll progress calculator
  useScrollProgress();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  // Sync dark mode class on HTML document element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-150 transition-colors duration-300">
      {/* Scroll indicator */}
      <div 
        className="scroll-progress" 
        style={{ width: `${scrollProgress}%` }} 
      />

      {/* Navigation bar */}
      <Navbar />

      {/* Page contents wrapper */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Footer bar */}
      <Footer />

      {/* Global Modals */}
      <ProductDetailModal />
      <InquiryModal />
      <LightboxModal />
    </div>
  );
};

export default App;
