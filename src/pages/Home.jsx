import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Award,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { productsData } from "../data/products";
import { companyData, featuresData, whyChooseUsData } from "../data/company";
import { faqsData } from "../data/faqs";
import FeatureCard from "../components/FeatureCard";
import ProductCard from "../components/ProductCard";
import TestimonialSlider from "../components/TestimonialSlider";
import FAQAccordion from "../components/FAQAccordion";
import SectionHeading from "../components/SectionHeading";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  imageHover,
} from "../animations/variants";
import Hero from "../components/Hero";

const Home = () => {
  // Grab top 3 products for featured section
  const featuredProducts = productsData.slice(0, 3);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      className="overflow-hidden"
    >
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Key Features (Value Props) */}
      <section className="site-section bg-white dark:bg-gray-900 relative">
        <div className="site-container section-stack relative z-10">
          <SectionHeading
            subtitle="Engineered Excellence"
            title="Why Choose Vedha uPVC?"
            description="Our windows and doors are designed to offer maximum protection, efficiency, and beauty for modern Indian buildings."
          />

          <div className="balanced-card-grid">
            {featuresData.map((feature, idx) => (
              <FeatureCard
                key={idx}
                index={idx}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Products */}
      <section className="site-section bg-gray-50 dark:bg-gray-950 relative">
        <div className="site-container section-stack relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="eyebrow mb-3">Product Gallery</span>
              <h2 className="font-[family-name:var(--font-family-heading)] text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Featured Windows & Doors
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-[#2d5a3f] dark:text-[#b5d4be] hover:text-[#1a3c34] dark:hover:text-white font-semibold text-sm mt-4 md:mt-0 transition-colors group"
            >
              View Full Catalog
              <ChevronRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
          </div>

          <div className="balanced-card-grid">
            {featuredProducts.map((product, idx) => (
              <ProductCard key={product.id} index={idx} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. German Technology / Trust Section */}
      <section className="site-section bg-white dark:bg-gray-900 relative py-16 lg:py-24">
        <div className="site-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left side: Pure 4 Images Asymmetric Layout */}
            <div className="relative max-w-2xl mx-auto lg:mx-0 w-full lg:col-span-5">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {/* First Column - 2 Images */}
                <div className="space-y-4 sm:space-y-6">
                  <div className="media-frame aspect-[4/5] relative rounded-[2rem] overflow-hidden shadow-[0_24px_70px_rgba(15,40,32,0.14)] border border-gray-100 dark:border-gray-800 bg-gray-100">
                    <img
                      src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp&q=90"
                      alt="Premium luxury modern interior view"
                      className="w-full h-full object-cover absolute inset-0"
                      loading="lazy"
                    />
                  </div>
                  <div className="media-frame aspect-[4/5] relative rounded-[2rem] overflow-hidden shadow-[0_24px_70px_rgba(15,40,32,0.14)] border border-gray-100 dark:border-gray-800 bg-gray-100">
                    <img
                      src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp&q=90"
                      alt="Clean residential interior architecture"
                      className="w-full h-full object-cover absolute inset-0"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Second Column - 2 Images (Offset/Asymmetric pattern) */}
                <div className="space-y-4 sm:space-y-6 pt-8 sm:pt-12">
                  <div className="media-frame aspect-[4/5] relative rounded-[2rem] overflow-hidden shadow-[0_24px_70px_rgba(15,40,32,0.14)] border border-gray-100 dark:border-gray-800 bg-gray-100">
                    <img
                      src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp&q=90"
                      alt="Modern window systems design"
                      className="w-full h-full object-cover absolute inset-0"
                      loading="lazy"
                    />
                  </div>
                  <div className="media-frame aspect-[4/5] relative rounded-[2rem] overflow-hidden shadow-[0_24px_70px_rgba(15,40,32,0.14)] border border-gray-100 dark:border-gray-800 bg-gray-100">
                    <img
                      src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp&q=90"
                      alt="Luxury living room glass fenestration"
                      className="w-full h-full object-cover absolute inset-0"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Value description (Taking 7 cols) */}
            <motion.div
              className="lg:col-span-7 flex flex-col justify-center"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.span
                variants={staggerItem}
                className="eyebrow mb-4 inline-block text-[#4a7c59] font-bold uppercase tracking-widest text-sm"
              >
                Built to Last
              </motion.span>
              <motion.h2
                variants={staggerItem}
                className="font-[family-name:var(--font-family-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6"
              >
                German Technology Meets Indian Craftsmanship
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed mb-8"
              >
                Every Vedha profile is extruded using advanced formulations
                designed specifically to withstand extreme tropical weather
                conditions. Reinforced with galvanized steel inserts, our uPVC
                windows and doors retain their shape, strength, and color for
                generations.
              </motion.p>

              {/* Features Grid */}
              <motion.div
                variants={staggerItem}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {whyChooseUsData.slice(0, 4).map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 items-start bg-gray-50/50 dark:bg-gray-800/40 p-4 rounded-2xl border border-gray-100/50 dark:border-gray-800"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#4a7c59]/10 dark:bg-[#4a7c59]/20 flex items-center justify-center text-[#2d5a3f] dark:text-[#b5d4be] flex-shrink-0">
                      <CheckCircle2 size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white text-sm md:text-base">
                        {item.title}
                      </h4>
                      <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="flex gap-4 items-start bg-gray-50/50 dark:bg-gray-800/40 p-4 rounded-2xl border border-gray-100/50 dark:border-gray-800">
                  <div className="w-10 h-10 rounded-xl bg-[#4a7c59]/10 dark:bg-[#4a7c59]/20 flex items-center justify-center text-[#2d5a3f] dark:text-[#b5d4be] flex-shrink-0">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm md:text-base">
                      Acoustic Comfort
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm mt-1 leading-relaxed">
                      Multi-chambered profile engineering that cuts down outside
                      traffic noise by up to 40dB.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-gray-50/50 dark:bg-gray-800/40 p-4 rounded-2xl border border-gray-100/50 dark:border-gray-800">
                  <div className="w-10 h-10 rounded-xl bg-[#4a7c59]/10 dark:bg-[#4a7c59]/20 flex items-center justify-center text-[#2d5a3f] dark:text-[#b5d4be] flex-shrink-0">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm md:text-base">
                      Thermal Insulation
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm mt-1 leading-relaxed">
                      Low thermal conductivity limits heat transfer inside,
                      drastically reducing AC power bills.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* 5. Testimonial Section */}
      <section className="site-section bg-gray-50 dark:bg-gray-950 relative py-16 lg:py-24 overflow-hidden w-full">
        <div className="site-container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <SectionHeading
              subtitle="Client Stories"
              title="What Our Clients Say"
              description="Read testimonials from homeowners, architects, and developers who trusted Vedha uPVC for their projects."
            />
          </div>

          {/* Testimonial Component Wrapper — Iss container ki wajah se content screen se bahar stretch nahi hoga */}
          <div className="w-full max-w-full overflow-hidden px-1 py-4">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* 6. FAQs Section */}
      <section
        id="faq"
        className="site-section bg-white dark:bg-gray-900 relative py-16 lg:py-24"
      >
        <div className="site-container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Heading Container */}
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <SectionHeading
              subtitle="Have Questions?"
              title="Frequently Asked Questions"
              description="Find answers to common queries about uPVC windows, doors, custom specifications, installation, and services."
            />
          </div>

          {/* FAQ Accordion Wrapper — FIXED: max-w-5xl lagaya hai taaki width badi ho jaye aur pura area utilize ho */}
          <div className="w-full max-w-5xl mx-auto px-2 sm:px-4">
            <FAQAccordion faqs={faqsData} />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
