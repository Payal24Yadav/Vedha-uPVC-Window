import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight } from 'lucide-react';
import { closeProductModal } from '../features/products/productSlice';
import { openInquiryModal } from '../features/ui/uiSlice';
import { modalAnimation, overlayAnimation } from '../animations/variants';

const ProductDetailModal = () => {
  const dispatch = useDispatch();
  const { selectedProduct, productModalOpen } = useSelector((state) => state.products);
  const [activeImage, setActiveImage] = useState('');

  useEffect(() => {
    if (selectedProduct) {
      setActiveImage(selectedProduct.image);
    }
  }, [selectedProduct]);

  useEffect(() => {
    if (productModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [productModalOpen]);

  if (!selectedProduct) return null;

  const handleInquiry = () => {
    dispatch(closeProductModal());
    setTimeout(() => {
      dispatch(openInquiryModal(selectedProduct.name));
    }, 300);
  };

  const images = [selectedProduct.image, ...(selectedProduct.gallery || [])];

  return (
    <AnimatePresence>
      {productModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            variants={overlayAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => dispatch(closeProductModal())}
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            variants={modalAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative bg-white dark:bg-gray-900 w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl z-10 my-8 border border-gray-100 dark:border-gray-800"
            id="product-detail-modal"
          >
            {/* Close button */}
            <button
              onClick={() => dispatch(closeProductModal())}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm flex items-center justify-center text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-white dark:hover:bg-gray-700 transition-all shadow-md"
              id="close-product-modal"
            >
              <X size={20} />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Media Column */}
              <div className="p-6 md:p-8 bg-gray-50 dark:bg-gray-950 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-gray-100 dark:border-gray-800">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800 shadow-inner">
                  <img
                    src={activeImage}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>

                {/* Thumbnails */}
                {images.length > 1 && (
                  <div className="flex gap-3 overflow-x-auto mt-5 pb-2 scrollbar-none">
                    {images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImage(img)}
                        className={`relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                          activeImage === img
                            ? 'border-[#4a7c59] shadow-md shadow-[#4a7c59]/10'
                            : 'border-transparent opacity-75 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Content Column */}
              <div className="p-6 md:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-[#2d5a3f] dark:text-[#b5d4be] uppercase tracking-widest px-2.5 py-1 bg-[#4a7c59]/10 dark:bg-[#4a7c59]/20 rounded-lg">
                      {selectedProduct.type} {selectedProduct.category === 'doors' ? 'Door' : 'Window'}
                    </span>
                    {selectedProduct.badge && (
                      <span className="text-xs font-semibold text-white bg-gradient-to-r from-[#1a3c34] to-[#4a7c59] px-2.5 py-1 rounded-lg">
                        {selectedProduct.badge}
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-family-heading)] font-bold text-gray-900 dark:text-white mb-4">
                    {selectedProduct.name}
                  </h2>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                    {selectedProduct.description}
                  </p>

                  {/* Features List */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">Key Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedProduct.features?.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                          <div className="w-5 h-5 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center flex-shrink-0">
                            <Check size={12} className="text-green-600 dark:text-green-400" />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specifications Table */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">Specifications</h3>
                    <div className="bg-gray-50 dark:bg-gray-950 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800">
                      <table className="w-full border-collapse text-sm">
                        <tbody>
                          {Object.entries(selectedProduct.specs || {}).map(([key, val]) => (
                            <tr key={key} className="border-b last:border-0 border-gray-100 dark:border-gray-800">
                              <td className="px-4 py-2.5 font-medium text-gray-500 dark:text-gray-400 capitalize">{key}</td>
                              <td className="px-4 py-2.5 text-gray-900 dark:text-white font-semibold">{val}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Footer bar */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-gray-800 mt-6 gap-4">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Estimated Price</p>
                    <p className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{selectedProduct.price}</p>
                  </div>
                  <button
                    onClick={handleInquiry}
                    className="btn-primary px-6 py-3.5"
                    id="modal-inquire-btn"
                  >
                    Get Free Quote
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProductDetailModal;
