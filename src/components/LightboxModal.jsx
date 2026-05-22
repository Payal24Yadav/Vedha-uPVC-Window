import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { closeLightbox } from '../features/ui/uiSlice';
import { overlayAnimation, modalAnimation } from '../animations/variants';

const LightboxModal = () => {
  const dispatch = useDispatch();
  const { lightboxOpen, lightboxImage } = useSelector((state) => state.ui);

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [lightboxOpen]);

  if (!lightboxImage) return null;

  return (
    <AnimatePresence>
      {lightboxOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            variants={overlayAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => dispatch(closeLightbox())}
            className="fixed inset-0 bg-black/90 backdrop-blur-md"
          />

          {/* Close button */}
          <button
            onClick={() => dispatch(closeLightbox())}
            className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
            id="close-lightbox"
          >
            <X size={24} />
          </button>

          {/* Image */}
          <motion.div
            variants={modalAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative max-w-5xl max-h-[85vh] z-10 rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={lightboxImage}
              alt="Installation view"
              className="w-full h-full object-contain max-h-[85vh]"
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LightboxModal;
