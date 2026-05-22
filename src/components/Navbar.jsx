import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronRight, Leaf } from 'lucide-react';
import { toggleMobileMenu, closeMobileMenu } from '../features/ui/uiSlice';
import { companyData } from '../data/company';
import { mobileMenuAnimation, overlayAnimation } from '../animations/variants';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/products', label: 'Products' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/services', label: 'Services' },
  { path: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const dispatch = useDispatch();
  const { mobileMenuOpen } = useSelector((state) => state.ui);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    dispatch(closeMobileMenu());
  }, [location, dispatch]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`site-navbar fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? 'py-2 md:py-3' : 'py-3 md:py-5'
        }`}
      >
        <div className="nav-container">
          <div className={`nav-pill flex items-center justify-between rounded-full px-4 sm:px-5 md:px-8 py-3 transition-all duration-700 ${
            scrolled
              ? 'bg-white/85 dark:bg-[#0f1a14]/90 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-gray-200/40 dark:border-white/5'
              : 'bg-white/50 dark:bg-[#0f1a14]/50 backdrop-blur-xl border border-white/30 dark:border-white/10'
          }`}>
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group" id="nav-logo">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1a3c34] to-[#4a7c59] flex items-center justify-center shadow-lg shadow-[#4a7c59]/20 group-hover:shadow-[#4a7c59]/40 transition-shadow duration-500">
                <Leaf size={18} className="text-white" />
              </div>
              <div className="block min-w-0">
                <h1 className="text-base sm:text-lg font-bold text-[#1a3c34] dark:text-white leading-none tracking-tight font-[family-name:var(--font-family-heading)]">Vedha</h1>
                <p className="text-[8px] sm:text-[9px] text-[#4a7c59] dark:text-[#6b9e7a] font-semibold tracking-[0.14em] sm:tracking-[0.2em] uppercase whitespace-nowrap">uPVC Windows</p>
              </div>
            </Link>

            {/* Desktop Nav — Center */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-400 ${
                      isActive
                        ? 'text-[#1a3c34] dark:text-[#6b9e7a] bg-[#4a7c59]/10 dark:bg-[#4a7c59]/20'
                        : 'text-[#2c2c2c]/70 dark:text-gray-300 hover:text-[#1a3c34] dark:hover:text-[#6b9e7a] hover:bg-[#4a7c59]/5 dark:hover:bg-[#4a7c59]/10'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Desktop Actions — Right */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${companyData.phone}`}
                className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#1a3c34] to-[#2d5a3f] hover:from-[#2d5a3f] hover:to-[#3a6247] text-white text-sm font-semibold rounded-full transition-all duration-400 shadow-lg shadow-[#1a3c34]/20 hover:shadow-[#1a3c34]/40"
                id="nav-call-btn"
              >
                <Phone size={14} />
                Free Consultation
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => dispatch(toggleMobileMenu())}
                className="w-10 h-10 rounded-full flex items-center justify-center text-[#1a3c34] dark:text-gray-200 hover:bg-[#4a7c59]/10 dark:hover:bg-[#4a7c59]/20 transition-colors"
                aria-label="Toggle menu"
                id="mobile-menu-toggle"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              variants={overlayAnimation}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => dispatch(closeMobileMenu())}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 lg:hidden"
            />
            <motion.div
              variants={mobileMenuAnimation}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-[#faf8f5] dark:bg-[#0f1a14] z-50 shadow-2xl lg:hidden overflow-y-auto"
              id="mobile-sidebar"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1a3c34] to-[#4a7c59] flex items-center justify-center">
                      <Leaf size={18} className="text-white" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-[#1a3c34] dark:text-white font-[family-name:var(--font-family-heading)]">Vedha</h2>
                      <p className="text-xs text-[#4a7c59] dark:text-[#6b9e7a]">uPVC Windows & Doors</p>
                    </div>
                  </div>
                  <button
                    onClick={() => dispatch(closeMobileMenu())}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-[#2c2c2c]/60 hover:bg-[#4a7c59]/10 dark:text-gray-400 dark:hover:bg-[#4a7c59]/20"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-5 py-4 rounded-2xl text-base font-medium transition-all duration-300 ${
                          isActive
                            ? 'text-[#1a3c34] bg-[#4a7c59]/10 dark:bg-[#4a7c59]/20 dark:text-[#6b9e7a]'
                            : 'text-[#2c2c2c]/70 dark:text-gray-300 hover:bg-[#4a7c59]/5 dark:hover:bg-[#4a7c59]/10'
                        }`
                      }
                    >
                      {link.label}
                      <ChevronRight size={16} className="opacity-30" />
                    </NavLink>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-[#4a7c59]/10 dark:border-white/5">
                  <a
                    href={`tel:${companyData.phone}`}
                    className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-[#1a3c34] to-[#2d5a3f] text-white font-semibold rounded-2xl shadow-lg shadow-[#1a3c34]/20"
                  >
                    <Phone size={16} />
                    Free Consultation
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
