import { motion } from 'framer-motion';
import { servicesData, processSteps } from '../data/services';
import ServiceCard from '../components/ServiceCard';
import SectionHeading from '../components/SectionHeading';
import { fadeInUp, staggerContainer, staggerItem } from '../animations/variants';

const Services = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      className="page-shell bg-gray-50 dark:bg-gray-950"
    >
      {/* Page Header */}
      <section className="page-hero relative overflow-hidden">
        <div className="site-container relative z-10 text-center">
          <motion.span 
            variants={fadeInUp}
            className="eyebrow mb-3"
          >
            End-To-End Support
          </motion.span>
          <motion.h1 
            variants={fadeInUp}
            className="font-[family-name:var(--font-family-heading)] text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Our Professional Services
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          >
            We handle everything from site measurements and design advisory to automated custom fabrication, certified installation, and after-sales maintenance.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="page-content">
        <div className="site-container">
          <div className="balanced-card-grid">
            {servicesData.map((service, idx) => (
              <ServiceCard
                key={service.id}
                index={idx}
                service={service}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="site-section bg-white dark:bg-gray-900 relative">
        <div className="site-container section-stack relative z-10">
          <SectionHeading
            subtitle="The Journey"
            title="How We Work"
            description="Our structured engineering process ensures hassle-free delivery and precision installation from start to finish."
          />

          {/* Process Timeline/Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 lg:gap-4">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="app-card p-6 text-center"
              >
                {/* Step indicator */}
                <div className="w-10 h-10 rounded-full bg-[#1a3c34] text-white font-extrabold text-sm flex items-center justify-center mx-auto mb-4 shadow-md shadow-[#1a3c34]/20">
                  {step.step}
                </div>
                
                <h4 className="font-bold text-gray-900 dark:text-white text-base mb-2">{step.title}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
