import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { toggleDarkMode } from '../features/ui/uiSlice';

import { useEffect } from 'react';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.ui);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={() => dispatch(toggleDarkMode())}
      id="theme-toggle"
      aria-label="Toggle dark mode"
      className="relative w-10 h-10 rounded-full flex items-center justify-center bg-[#4a7c59]/10 dark:bg-[#4a7c59]/20 hover:bg-[#4a7c59]/20 dark:hover:bg-[#4a7c59]/30 transition-colors duration-300 text-[#1a3c34] dark:text-[#6b9e7a]"
    >
      <motion.div
        key={darkMode ? 'moon' : 'sun'}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {darkMode ? <Moon size={16} /> : <Sun size={16} />}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
