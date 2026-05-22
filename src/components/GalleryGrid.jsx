import { useState } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { ZoomIn } from 'lucide-react';
import { openLightbox } from '../features/ui/uiSlice';
import { staggerItem } from '../animations/variants';

const GalleryGrid = ({ items = [] }) => {
  const dispatch = useDispatch();
  const filteredItems = useSelector((state) => state.gallery.filteredItems);
  const galleryItems = items.length ? items : filteredItems;
  const [imgLoaded, setImgLoaded] = useState({});

  const handleLoad = (id) => setImgLoaded((prev) => ({ ...prev, [id]: true }));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 equal-card-grid">
      {galleryItems.map((item) => (
        <motion.div
          key={item.id}
          variants={staggerItem}
          className="app-card group relative cursor-pointer"
          onClick={() => dispatch(openLightbox(item.image))}
          id={`gallery-item-${item.id}`}
        >
          {!imgLoaded[item.id] && (
            <div className="absolute inset-0 skeleton" />
          )}
          <motion.img
            src={item.image}
            alt={item.caption || item.title}
            className={`aspect-[4/3] w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${imgLoaded[item.id] ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => handleLoad(item.id)}
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c34]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
            <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
              <div className="flex items-center gap-2 text-white mb-1">
                <ZoomIn size={16} />
                <span className="text-xs font-medium">View Full</span>
              </div>
              {(item.caption || item.title) && (
                <p className="text-white/85 text-xs">{item.caption || item.title}</p>
              )}
            </div>
          </div>
          {/* Category badge */}
          {item.category && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-[#1a3c34]/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
              {item.category}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default GalleryGrid;
