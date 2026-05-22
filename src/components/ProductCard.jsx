import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { Eye, MessageSquare, Check, Star } from 'lucide-react';
import { staggerItem } from '@/animations/variants';
import { openProductModal } from '../features/products/productSlice';
import { openInquiryModal } from '../features/ui/uiSlice';

const fallbackImages = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&h=650&fit=crop&auto=format&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&h=650&fit=crop&auto=format&q=80',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&h=650&fit=crop&auto=format&q=80',
];

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(product.image);
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    setImageSrc(product.image);
    setImgLoaded(false);
    setImageFailed(false);
  }, [product.image]);

  const handleImageError = () => {
    const fallback = fallbackImages[(product.id - 1) % fallbackImages.length];
    if (imageSrc !== fallback) {
      setImageSrc(fallback);
      setImgLoaded(false);
    } else {
      setImageFailed(true);
      setImgLoaded(true);
    }
  };

  return (
    <motion.div
      variants={staggerItem}
      className="balanced-card app-card group flex flex-col"
    >
      {/* Image */}
      <div className="media-frame product-image-frame bg-[#f5f0eb] dark:bg-[#1a3c34]/20">
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#e7efe8] via-[#f8faf7] to-[#d9e7dd] px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4a7c59]">
            {product.category}
          </p>
          <p className="mt-2 font-[family-name:var(--font-family-heading)] text-xl font-bold text-[#1a3c34]">
            {product.name}
          </p>
        </div>
        {!imgLoaded && !imageFailed && (
          <div className="absolute inset-0 skeleton" />
        )}
        {!imageFailed && (
          <motion.img
            src={imageSrc}
            alt={product.name}
            className={`relative z-10 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImgLoaded(true)}
            onError={handleImageError}
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        )}
        {/* Overlay badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {product.isNew && (
            <span className="px-3 py-1 bg-[#1a3c34] text-white text-xs font-semibold rounded-full">New</span>
          )}
          {product.isBestSeller && (
            <span className="px-3 py-1 bg-gradient-to-r from-[#c4a265] to-[#dcc08a] text-white text-xs font-semibold rounded-full flex items-center gap-1">
              <Star size={10} fill="white" /> Best Seller
            </span>
          )}
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c34]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
          <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => dispatch(openProductModal(product))}
            className="btn-secondary min-h-0 px-4 py-2 text-sm bg-white/92 backdrop-blur-sm"
            id={`view-product-${product.id}`}
          >
            <Eye size={14} /> Quick View
          </motion.button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-xs font-semibold text-[#4a7c59] uppercase tracking-widest mb-1.5">{product.category}</p>
            <h3 className="font-[family-name:var(--font-family-heading)] text-xl font-bold text-[#1a3c34] dark:text-white leading-tight">
              {product.name}
            </h3>
          </div>
        </div>

        <p className="text-sm text-[#2c2c2c]/65 dark:text-gray-400 leading-relaxed mb-5">
          {product.description}
        </p>

        {product.features && (
          <ul className="space-y-2.5 mb-6">
            {product.features.slice(0, 3).map((f, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-[#2c2c2c]/70 dark:text-gray-300 leading-snug">
                <Check size={14} className="text-[#4a7c59] flex-shrink-0 mt-0.5" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        )}

        <button
          onClick={() => dispatch(openInquiryModal(product.name))}
          className="btn-primary w-full mt-auto text-sm"
          id={`inquiry-${product.id}`}
        >
          <MessageSquare size={14} />
          Get Free Quote
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
