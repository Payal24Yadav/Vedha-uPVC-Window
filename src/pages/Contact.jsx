import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { companyData } from '../data/company';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Enter a valid phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.projectType) newErrors.projectType = 'Select a project type';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    loading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      console.log('Contact Inquiry Submitted:', formData);
    }, 1500);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      className="page-shell bg-gray-50 dark:bg-gray-950 py-12"
    >
      {/* Banner */}
      <section className="page-hero relative overflow-hidden mb-12">
        <div className="site-container relative z-10 text-center">
          <span className="eyebrow mb-3 inline-block">
            Get In Touch
          </span>
          <h1 className="font-[family-name:var(--font-family-heading)] text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Vedha uPVC
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Have a project in mind? Contact our sales office, drop us a line, or fill out the form below for a free measurement and quote.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="page-content">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left side: Info card & Integrated Map */}
            <div className="lg:col-span-5 w-full">
              <div className="app-card p-6 sm:p-8 flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white font-[family-name:var(--font-family-heading)] mb-6">
                    Sales Office & Factory
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-[#4a7c59]/10 dark:bg-[#4a7c59]/20 flex items-center justify-center text-[#2d5a3f] dark:text-[#b5d4be] flex-shrink-0">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Address</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm mt-1.5 leading-relaxed">{companyData.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-[#4a7c59]/10 dark:bg-[#4a7c59]/20 flex items-center justify-center text-[#2d5a3f] dark:text-[#b5d4be] flex-shrink-0">
                        <Phone size={20} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Call Us</h4>
                        <a href={`tel:${companyData.phone}`} className="block text-gray-700 dark:text-gray-300 hover:text-[#2d5a3f] dark:hover:text-[#b5d4be] text-sm mt-1.5 font-semibold transition-colors">
                          {companyData.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-[#4a7c59]/10 dark:bg-[#4a7c59]/20 flex items-center justify-center text-[#2d5a3f] dark:text-[#b5d4be] flex-shrink-0">
                        <Mail size={20} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Email</h4>
                        <a href={`mailto:${companyData.email}`} className="block text-gray-700 dark:text-gray-300 hover:text-[#2d5a3f] dark:hover:text-[#b5d4be] text-sm mt-1.5 font-semibold transition-colors">
                          {companyData.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Quick WhatsApp CTA */}
                  <div className="mt-6 mb-6">
                    <a
                      href={`https://wa.me/${companyData.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full flex items-center justify-center gap-2 py-3 bg-[#1a3c34] text-white rounded-xl font-semibold hover:bg-[#245247] transition-all"
                    >
                      <MessageSquare size={16} />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                {/* FIXED: Map is now safely embedded inside the card wrapper */}
                <div className="rounded-2xl overflow-hidden aspect-[16/10] border border-gray-100 dark:border-gray-800 shadow-inner relative bg-gray-200 dark:bg-gray-950 mt-4">
                  <iframe
                    title="Vedha uPVC Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4811802187313!2d77.10842837583626!3d11.00212005497204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8564f2dbdbec3%3A0xe54e60b13cfcfc37!2sSulur%2C%20Tamil%20Nadu%20641402!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    className="absolute inset-0 w-full h-full border-0 grayscale dark:invert-[0.9] dark:hue-rotate-180 opacity-90"
                    allowFullScreen=""
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Right side: Contact form */}
            <div className="lg:col-span-7 app-card p-6 sm:p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
              {!submitted ? (
                <>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white font-[family-name:var(--font-family-heading)] mb-6">
                    Request a Quote
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-950 border text-sm focus:outline-none focus:ring-2 focus:ring-[#4a7c59]/20 transition-all ${
                          errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-800 focus:border-[#4a7c59]'
                        }`}
                      />
                      {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1.5">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-950 border text-sm focus:outline-none focus:ring-2 focus:ring-[#4a7c59]/20 transition-all ${
                            errors.phone ? 'border-red-500' : 'border-gray-200 dark:border-gray-800 focus:border-[#4a7c59]'
                          }`}
                        />
                        {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1.5">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-950 border text-sm focus:outline-none focus:ring-2 focus:ring-[#4a7c59]/20 transition-all ${
                            errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-800 focus:border-[#4a7c59]'
                          }`}
                        />
                        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Project Type */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1.5">Project Type *</label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-950 border text-sm focus:outline-none focus:ring-2 focus:ring-[#4a7c59]/20 transition-all text-gray-700 dark:text-gray-300 ${
                          errors.projectType ? 'border-red-500' : 'border-gray-200 dark:border-gray-800 focus:border-[#4a7c59]'
                        }`}
                      >
                        <option value="">Select Project Type</option>
                        <option value="Villa / Individual Home">Villa / Individual Home</option>
                        <option value="Apartment / Flat">Apartment / Flat</option>
                        <option value="Commercial Complex">Commercial Complex</option>
                        <option value="Renovation / Replacement">Renovation / Replacement</option>
                        <option value="Builders & Developers">Bulk Builder / Developer Inquiry</option>
                      </select>
                      {errors.projectType && <p className="text-xs text-red-500 mt-1">{errors.projectType}</p>}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1.5">Message / Custom Requests</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Details about dimensions, count, options..."
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#4a7c59]/20 focus:border-[#4a7c59] transition-all resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#4a7c59] hover:bg-[#3d6649] text-white font-semibold rounded-xl disabled:opacity-75 transition-all shadow-md"
                      id="contact-submit-btn"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send size={15} />
                          Send Inquiry
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 dark:text-green-400">
                    <CheckCircle2 size={44} className="stroke-[1.5]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-[family-name:var(--font-family-heading)] mb-3">
                    Quote Request Sent!
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-8 text-sm leading-relaxed">
                    Thank you, <strong className="text-gray-900 dark:text-white font-semibold">{formData.name}</strong>. Your request for <strong className="text-gray-900 dark:text-white font-semibold">{formData.projectType}</strong> has been logged. Our design engineer will call you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
                    }}
                    className="px-8 py-3.5 bg-[#4a7c59] hover:bg-[#3d6649] text-white font-semibold rounded-xl transition-all"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              )}
            </div>

          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;