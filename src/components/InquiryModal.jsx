import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { closeInquiryModal } from '../features/ui/uiSlice';
import { modalAnimation, overlayAnimation } from '../animations/variants';

const InquiryModal = () => {
  const dispatch = useDispatch();
  const { inquiryModalOpen, inquiryProduct } = useSelector((state) => state.ui);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (inquiryProduct) {
      setFormData(prev => ({ ...prev, product: inquiryProduct }));
    } else {
      setFormData(prev => ({ ...prev, product: '' }));
    }
    setSubmitted(false);
    setErrors({});
  }, [inquiryProduct, inquiryModalOpen]);

  useEffect(() => {
    if (inquiryModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [inquiryModalOpen]);

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
    if (!formData.product.trim()) newErrors.product = 'Select a product category';
    
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

    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      console.log('Inquiry Submitted:', formData);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {inquiryModalOpen && (
        <div className="fixed inset-0 z-55 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            variants={overlayAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => dispatch(closeInquiryModal())}
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            variants={modalAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative bg-white dark:bg-gray-900 w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl z-10 p-6 md:p-8 border border-gray-100 dark:border-gray-800"
            id="inquiry-modal"
          >
            {/* Close */}
            <button
              onClick={() => dispatch(closeInquiryModal())}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              id="close-inquiry-modal"
            >
              <X size={18} />
            </button>

            {!submitted ? (
              <>
                <h2 className="text-xl md:text-2xl font-[family-name:var(--font-family-heading)] font-bold text-gray-900 dark:text-white mb-2">
                  Get a Free Consultation
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                  Fill in your requirements and our technical expert will reach out to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4" id="inquiry-form">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-950 border text-sm focus:outline-none focus:ring-2 focus:ring-[#4a7c59]/20 transition-all ${
                        errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-200 dark:border-gray-800 focus:border-[#4a7c59] dark:focus:border-[#4a7c59]'
                      }`}
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-950 border text-sm focus:outline-none focus:ring-2 focus:ring-[#4a7c59]/20 transition-all ${
                        errors.phone ? 'border-red-500 focus:border-red-500' : 'border-gray-200 dark:border-gray-800 focus:border-[#4a7c59] dark:focus:border-[#4a7c59]'
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
                      placeholder="e.g. john@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-950 border text-sm focus:outline-none focus:ring-2 focus:ring-[#4a7c59]/20 transition-all ${
                        errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-200 dark:border-gray-800 focus:border-[#4a7c59] dark:focus:border-[#4a7c59]'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>

                  {/* Product Category Selection */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1.5">Product of Interest *</label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-950 border text-sm focus:outline-none focus:ring-2 focus:ring-[#4a7c59]/20 transition-all text-gray-700 dark:text-gray-300 ${
                        errors.product ? 'border-red-500 focus:border-red-500' : 'border-gray-200 dark:border-gray-800 focus:border-[#4a7c59] dark:focus:border-[#4a7c59]'
                      }`}
                    >
                      <option value="">Select a Product</option>
                      <option value="Sliding Windows">Sliding Windows</option>
                      <option value="Casement Windows">Casement Windows</option>
                      <option value="Fixed Windows">Fixed Windows</option>
                      <option value="Tilt & Turn Windows">Tilt & Turn Windows</option>
                      <option value="Sliding Doors">Sliding Doors</option>
                      <option value="French Doors">French Doors</option>
                      <option value="General Consultation">General Consultation / Other</option>
                    </select>
                    {errors.product && <p className="text-xs text-red-500 mt-1">{errors.product}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1.5">Message / Requirements</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g. Dimensions, quantity, custom requests..."
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#4a7c59]/20 focus:border-[#4a7c59] dark:focus:border-[#4a7c59] transition-all resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full mt-4 disabled:opacity-70"
                    id="submit-inquiry-btn"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={15} />
                        Submit Request
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 dark:text-green-400">
                  <CheckCircle2 size={44} className="stroke-[1.5]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-[family-name:var(--font-family-heading)] mb-3">
                  Thank You, {formData.name}!
                </h2>
                <p className="text-gray-500 dark:text-gray-400 max-w-sm mx-auto mb-8 text-sm leading-relaxed">
                  Your inquiry for <strong className="text-gray-900 dark:text-white font-medium">{formData.product}</strong> has been received. Our sales engineer will get in touch at <strong className="text-gray-900 dark:text-white font-medium">{formData.phone}</strong> shortly.
                </p>
                <button
                  onClick={() => dispatch(closeInquiryModal())}
                  className="btn-secondary px-8 py-3.5"
                  id="close-success-btn"
                >
                  Close Window
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default InquiryModal;
