import { motion } from 'framer-motion';
import GalleryGrid from '../components/GalleryGrid';

const Gallery = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      className="page-shell bg-gray-50 dark:bg-gray-950"
    >
      {/* Header Banner */}
      <section className="page-hero relative overflow-hidden">
        <div className="site-container relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="eyebrow mb-3"
          >
            Finished Works
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-[family-name:var(--font-family-heading)] text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Installation Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          >
            Explore our collection of completed residential, commercial, and hospitality projects showcasing uPVC window and door systems.
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="page-content">
        <div className="site-container">
          <GalleryGrid />
        </div>
      </section>
    </motion.div>
  );
};

export default Gallery;
