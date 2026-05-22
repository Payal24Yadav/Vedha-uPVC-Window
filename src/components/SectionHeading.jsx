import { motion } from 'framer-motion';
import { fadeInUp } from '../animations/variants';

const SectionHeading = ({ tag, title, subtitle, description, align = 'center', light = false }) => {
  const alignClass = align === 'left' ? 'items-start text-left' : align === 'right' ? 'items-end text-right' : 'items-center text-center';
  const eyebrowText = tag || subtitle;

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`section-heading flex flex-col ${alignClass}`}
    >
      {eyebrowText && (
        <div className="flex items-center gap-2">
          {align !== 'left' && align !== 'right' && (
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#4a7c59]" />
          )}
          <span className={`text-xs font-bold tracking-[0.16em] uppercase ${light ? 'text-[#8fb89a]' : 'text-[#4a7c59]'}`}>
            {eyebrowText}
          </span>
          {align !== 'left' && align !== 'right' && (
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#4a7c59]" />
          )}
          {align === 'left' && (
            <div className="h-px w-16 bg-gradient-to-r from-[#4a7c59] to-transparent" />
          )}
        </div>
      )}

      <h2
        className={`font-[family-name:var(--font-family-heading)] font-bold leading-tight tracking-tight ${
          light ? 'text-white' : 'text-[#1a3c34] dark:text-white'
        } text-3xl md:text-4xl lg:text-5xl`}
      >
        {title}
      </h2>

      {description && (
        <p className={`max-w-2xl text-base md:text-lg leading-relaxed ${
          light ? 'text-white/70' : 'text-[#2c2c2c]/60 dark:text-gray-400'
        }`}>
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
