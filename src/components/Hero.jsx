import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

// Framer Motion animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1] // Custom smooth ease-out
    }
  }
};

const Hero = () => {
  // 3 Slider Premium Architecture Images for Vedha uPVC
  const sliderImages = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=900&fit=crop",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&h=900&fit=crop",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&h=900&fit=crop"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  return (
    // FIXED: Reduced overall height from min-h-screen to min-h-[70vh]
    // FIXED: Changed alignment from flex items-center to items-start for less initial space
    <section className="hero-section relative min-h-[70vh] flex items-start overflow-hidden bg-gray-900 text-white">
      
      {/* 1. Full-Screen Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={sliderImages[currentSlide]}
            alt="Premium Vedha uPVC Architecture"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
        
        {/* 2. Premium Text Contrast Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 via-transparent to-transparent" />
      </div>

      {/* 3. Content Wrapper */}
      {/* FIXED: Reduced top padding from py-20/py-32 to pt-10/pt-16 for less top space */}
      <div className="site-container relative z-10 w-full pt-10 lg:pt-16 pb-20">
        <div className="max-w-3xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-left"
          >
            {/* Tagline Badge */}
            <motion.span 
              variants={staggerItem} 
              className="inline-block bg-[#4a7c59]/90 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-sm"
            >
              Premium uPVC Fenestration
            </motion.span>

            {/* Typography */}
            {/* FIXED: Reduced text size slightly on smaller screens from text-4xl to text-3xl */}
            <motion.h1
              variants={staggerItem}
              className="font-[family-name:var(--font-family-heading)] text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-5 drop-shadow-sm"
            >
              Crafting Premium Views For{" "}
              <span className="text-[#b5d4be]">Modern Architecture</span>
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-base md:text-lg text-gray-200 leading-relaxed mb-8 max-w-xl drop-shadow-sm"
            >
              Elevate your living experience with German-engineered uPVC
              windows & doors. Superior noise reduction, energy efficiency,
              and lifetime durability.
            </motion.p>

            {/* Call to Actions */}
            <motion.div variants={staggerItem} className="flex flex-wrap gap-4 items-center">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#4a7c59] hover:bg-[#3d6649] text-white font-semibold rounded-xl transition-all shadow-lg shadow-black/20 group"
                id="hero-explore-btn"
              >
                Explore Products
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 backdrop-blur-sm transition-all"
                id="hero-contact-btn"
              >
                Get Free Quote
              </Link>
            </motion.div>

            {/* Counter Achievements Block */}
            {/* FIXED: Reduced top margin from mt-16 to mt-12 */}
            <motion.div
              variants={staggerItem}
              className="grid grid-cols-3 gap-4 md:gap-8 mt-12 pt-8 border-t border-white/20 max-w-xl"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#b5d4be]">
                  14+
                </h3>
                <p className="text-[10px] md:text-xs text-gray-300 font-medium tracking-wide uppercase mt-1">
                  Years Experience
                </p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#b5d4be]">
                  2500+
                </h3>
                <p className="text-[10px] md:text-xs text-gray-300 font-medium tracking-wide uppercase mt-1">
                  Projects Done
                </p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#b5d4be]">
                  98%
                </h3>
                <p className="text-[10px] md:text-xs text-gray-300 font-medium tracking-wide uppercase mt-1">
                  Happy Clients
                </p>
              </div>
            </motion.div>

            {/* Integrated floating badge */}
            <motion.div 
              variants={staggerItem}
              className="inline-flex items-center gap-3 mt-6 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10"
            >
              <div className="w-8 h-8 rounded-lg bg-[#4a7c59] flex items-center justify-center text-white flex-shrink-0">
                <Shield size={16} />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-white">15-Year Structural Warranty</h4>
                <p className="text-[10px] text-gray-300">German Quality Reinforced Profiles</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* 4. Carousel Slide Indicators */}
      <div className="absolute bottom-6 right-6 z-20 flex gap-2">
        {sliderImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentSlide === idx ? 'w-8 bg-[#4a7c59]' : 'w-2 bg-white/40'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;