import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { staggerItem } from '../animations/variants';

const FeatureCard = ({ icon, title, description, index = 0 }) => {
  const IconComponent = Icons[icon] || Icons.Star;

  return (
    <motion.div
      variants={staggerItem}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="balanced-card app-card group cursor-default min-h-[210px]"
    >
      {/* Background gradient glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4a7c59]/6 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 flex h-full flex-col p-7 sm:p-8">
        {/* Icon container */}
        <div className="icon-tile relative w-14 h-14 mb-6 group-hover:shadow-[#4a7c59]/40 transition-shadow duration-500">
          <IconComponent size={24} className="text-white" />
          {/* Subtle corner accent */}
          <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#6b9e7a]/60" />
        </div>

        <h3 className="font-[family-name:var(--font-family-heading)] text-xl font-bold text-[#1a3c34] dark:text-white mb-3 leading-tight">
          {title}
        </h3>
        <p className="text-sm text-[#2c2c2c]/60 dark:text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-7 right-7 h-0.5 bg-gradient-to-r from-[#1a3c34] to-[#4a7c59] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
    </motion.div>
  );
};

export default FeatureCard;
