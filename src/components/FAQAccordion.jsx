import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { staggerItem } from '../animations/variants';

const FAQItem = ({ question, answer, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      variants={staggerItem}
      className={`rounded-2xl border transition-all duration-400 overflow-hidden shadow-[0_12px_34px_rgba(15,40,32,0.06)] ${
        open
          ? 'bg-gradient-to-br from-[#1a3c34]/5 to-[#4a7c59]/5 border-[#4a7c59]/30 dark:from-[#4a7c59]/10 dark:to-[#1a3c34]/10 dark:border-[#4a7c59]/20'
          : 'bg-white dark:bg-[#1a2a1f] border-[#4a7c59]/8 dark:border-white/5 hover:border-[#4a7c59]/20'
      }`}
    >
      <button
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
        onClick={() => setOpen(!open)}
        id={`faq-${index}`}
      >
        <span className={`font-semibold text-base sm:text-lg leading-snug transition-colors duration-300 ${
          open ? 'text-[#1a3c34] dark:text-[#6b9e7a]' : 'text-[#2c2c2c] dark:text-white'
        }`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            open ? 'bg-[#1a3c34] text-white' : 'bg-[#4a7c59]/10 text-[#4a7c59]'
          }`}
        >
          <ChevronDown size={16} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-5 pb-5 sm:px-6 sm:pb-6">
              <div className="h-px bg-[#4a7c59]/15 mb-4" />
              <p className="text-[#2c2c2c]/65 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQAccordion = ({ faqs = [] }) => (
  <div className="max-w-5xl mx-auto space-y-4">
    {faqs.map((faq, i) => (
      <FAQItem key={i} index={i} question={faq.question} answer={faq.answer} />
    ))}
  </div>
);

export default FAQAccordion;
