import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { staggerItem } from '../animations/variants';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ service, icon, title, description, features }) => {
  const data = service || { icon, title, description, features };
  const IconComponent = Icons[data.icon] || Icons.Settings;
  const serviceFeatures = data.features || [];

  return (
    <motion.div
      variants={staggerItem}
      className="app-card group p-7 sm:p-8 flex flex-col"
    >
      {/* Radial background gradient */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-radial from-[#4a7c59]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-600 rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="relative">
        {/* Icon */}
        <div className="icon-tile w-[52px] h-[52px] mb-5 group-hover:scale-105 transition-transform duration-500">
          <IconComponent size={24} className="text-white" />
        </div>

        <h3 className="font-[family-name:var(--font-family-heading)] text-xl font-bold text-[#1a3c34] dark:text-white mb-3">
          {data.title}
        </h3>
        <p className="text-[#2c2c2c]/60 dark:text-gray-400 text-sm leading-relaxed mb-6">
          {data.description}
        </p>

        {serviceFeatures.length > 0 && (
          <ul className="space-y-2.5 mb-6">
            {serviceFeatures.map((feat, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-[#2c2c2c]/70 dark:text-gray-300 leading-snug">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4a7c59] flex-shrink-0 mt-2" />
                {feat}
              </li>
            ))}
          </ul>
        )}

        <div className="flex items-center gap-2 text-sm font-semibold text-[#4a7c59] group-hover:gap-3 transition-all duration-300">
          <span>Learn More</span>
          <ArrowRight size={15} />
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
