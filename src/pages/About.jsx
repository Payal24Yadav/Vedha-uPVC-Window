import { motion } from 'framer-motion';
import { ShieldCheck, Compass, Target, History, Users2 } from 'lucide-react';
import { companyData } from '../data/company';
import SectionHeading from '../components/SectionHeading';
import { useCounter } from '../hooks/useScroll';
import { fadeInUp, staggerContainer, staggerItem } from '../animations/variants';

const StatCard = ({ val, suffix, label }) => {
  const { count, ref } = useCounter(val, 2000, true);
  return (
    <div ref={ref} className="app-card p-6 text-center">
      <h3 className="text-4xl font-extrabold text-[#1a3c34] dark:text-[#b5d4be]">
        {count}
        {suffix}
      </h3>
      <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-2 uppercase tracking-wide">
        {label}
      </p>
    </div>
  );
};

const About = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      className="page-shell bg-white dark:bg-gray-950"
    >
      {/* 1. Header Hero */}
      <section className="page-hero relative bg-gray-50 dark:bg-gray-950 overflow-hidden border-b border-gray-100 dark:border-gray-800/80">
        <div className="site-container relative z-10 text-center">
          <motion.span 
            variants={fadeInUp}
            className="eyebrow mb-4"
          >
            Our Story
          </motion.span>
          <motion.h1 
            variants={fadeInUp}
            className="font-[family-name:var(--font-family-heading)] text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Crafting Quality, <span className="text-gradient">Framing Views</span>
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Established in 2010, we are South India's premier manufacturer and installer of high-performance uPVC windows and doors.
          </motion.p>
        </div>
      </section>

      {/* 2. Intro & Stats */}
      <section className="site-section bg-white dark:bg-gray-900">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-10 lg:mb-12">
            <div className="lg:col-span-7">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white font-[family-name:var(--font-family-heading)] mb-6">
                Premium Fenestration Solutions Crafted for Generations
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {companyData.description}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                From our state-of-the-art facility in Coimbatore, Tamil Nadu, we custom-fabricate every order using advanced automated systems. Our products undergo rigorous quality tests ensuring perfect insulation, leak-proof performance, and superior aesthetics.
              </p>
            </div>
            
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {companyData.stats.map((stat, idx) => (
                <StatCard
                  key={idx}
                  val={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Vision */}
            <div className="app-card p-6 sm:p-8 flex gap-5">
              <div className="icon-tile w-12 h-12">
                <Compass size={22} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Our Vision</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{companyData.vision}</p>
              </div>
            </div>

            {/* Mission */}
            <div className="app-card p-6 sm:p-8 flex gap-5">
              <div className="icon-tile w-12 h-12">
                <Target size={22} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Our Mission</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{companyData.mission}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. History Timeline */}
      <section className="site-section bg-gray-50 dark:bg-gray-950">
        <div className="site-container section-stack">
          <SectionHeading
            subtitle="Our Milestones"
            title="Company Timeline"
            description="Trace our growth path from a modest manufacturing workshop to one of South India's leading brands."
          />

          <div className="relative max-w-4xl mx-auto w-full">
            {/* Center line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#4a7c59]/25 dark:bg-[#4a7c59]/35" />

            <div className="space-y-12">
              {companyData.timeline.map((item, idx) => (
                <div key={idx} className={`relative flex flex-col md:flex-row ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'} items-start`}>
                  {/* Icon Node */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#1a3c34] border-4 border-white dark:border-gray-900 flex items-center justify-center text-white z-10">
                    <History size={10} />
                  </div>

                  {/* Spacer or Card */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <motion.div
                      initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5 }}
                      className="app-card p-6"
                    >
                      <span className="inline-block px-3 py-1 rounded-lg text-xs font-bold bg-[#4a7c59]/10 dark:bg-[#4a7c59]/20 text-[#2d5a3f] dark:text-[#b5d4be] mb-3">
                        {item.year}
                      </span>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </motion.div>
                  </div>
                  
                  {/* Empty block for layout spacing */}
                  <div className="hidden md:block w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Leadership Team */}
      <section className="site-section bg-white dark:bg-gray-900">
        <div className="site-container section-stack">
          <SectionHeading
            subtitle="Meet The Leaders"
            title="Our Dedicated Team"
            description="An experienced team of design engineers, craftsmen, and installation supervisors committed to excellence."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
            {companyData.team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="app-card group p-6 text-center"
              >
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-5 border-4 border-white dark:border-gray-900 shadow-md">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">{member.name}</h4>
                <p className="text-sm font-medium text-[#2d5a3f] dark:text-[#b5d4be] mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
