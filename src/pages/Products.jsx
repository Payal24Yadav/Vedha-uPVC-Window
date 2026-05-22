import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal } from 'lucide-react';
import { setCategory, setType } from '../features/products/productSlice';
import { productCategories, productTypes } from '../data/products';
import ProductCard from '../components/ProductCard';
import SectionHeading from '../components/SectionHeading';

const Products = () => {
  const dispatch = useDispatch();
  const { filteredProducts, activeCategory, activeType } = useSelector((state) => state.products);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      className="page-shell bg-gray-50 dark:bg-gray-950"
    >
      {/* Banner */}
      <section className="page-hero relative overflow-hidden">
        <div className="site-container relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="eyebrow mb-3"
          >
            Fenestration Catalog
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-[family-name:var(--font-family-heading)] text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Premium Windows & Doors
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          >
            Browse our range of German-engineered uPVC systems, custom-manufactured to offer outstanding energy efficiency, security, and aesthetics.
          </motion.p>
        </div>
      </section>

      {/* Filter and Grid Container */}
      <section className="page-content">
        <div className="site-container content-stack">
          <div className="app-card p-5 sm:p-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              
              {/* Category selector */}
              <div className="flex flex-wrap gap-2.5">
                {productCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => dispatch(setCategory(cat.id))}
                    className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      activeCategory === cat.id
                        ? 'bg-[#1a3c34] text-white shadow-lg shadow-[#1a3c34]/20'
                        : 'bg-gray-50 dark:bg-gray-950 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Type drop-down or tabs */}
              <div className="flex items-center gap-3">
                <SlidersHorizontal size={18} className="text-gray-400 flex-shrink-0" />
                <label className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type:</label>
                <select
                  value={activeType}
                  onChange={(e) => dispatch(setType(e.target.value))}
                  className="px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 text-gray-700 dark:text-gray-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#4a7c59]/20 focus:border-[#4a7c59] dark:focus:border-[#4a7c59]"
                >
                  {productTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

            </div>
          </div>

          {/* Grid display */}
          <AnimatePresence mode="popLayout">
            {filteredProducts.length > 0 ? (
              <motion.div 
                layout 
                className="balanced-card-grid"
              >
                {filteredProducts.map((product, idx) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    <ProductCard
                      product={product}
                      index={idx}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="app-card text-center py-14 px-6"
              >
                <p className="text-gray-500 dark:text-gray-400 text-lg">No products match the selected criteria.</p>
                <button
                  onClick={() => {
                    dispatch(setCategory('all'));
                    dispatch(setType('all'));
                  }}
                  className="btn-primary mt-4 text-sm"
                >
                  Reset Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </motion.div>
  );
};

export default Products;
