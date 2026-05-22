import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowUpRight, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { companyData } from '../data/company';
import { fadeInUp, staggerContainer, staggerItem } from '../animations/variants';

const footerLinks = [
  {
    title: 'Products',
    links: [
      { label: 'Sliding Windows', path: '/products' },
      { label: 'Casement Windows', path: '/products' },
      { label: 'Fixed Windows', path: '/products' },
      { label: 'Tilt & Turn Windows', path: '/products' },
      { label: 'Sliding Doors', path: '/products' },
      { label: 'French Doors', path: '/products' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', path: '/about' },
      { label: 'Our Gallery', path: '/gallery' },
      { label: 'Services', path: '/services' },
      { label: 'Contact', path: '/contact' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'FAQs', path: '/#faq' },
      { label: 'Warranty', path: '/services' },
      { label: 'Maintenance Tips', path: '/services' },
      { label: 'Get a Quote', path: '/contact' },
    ],
  },
];

const socialIcons = [
  { icon: Facebook, href: companyData.social.facebook, label: 'Facebook' },
  { icon: Instagram, href: companyData.social.instagram, label: 'Instagram' },
  { icon: Linkedin, href: companyData.social.linkedin, label: 'LinkedIn' },
  { icon: Youtube, href: companyData.social.youtube, label: 'YouTube' },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 pt-20 pb-8 relative overflow-hidden">
      <div className="site-container relative z-10">
        {/* CTA Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12 pb-12 border-b border-gray-800"
        >
          <h2 className="font-[family-name:var(--font-family-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Get a free consultation and quote for your dream windows and doors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-primary px-8 py-4"
            >
              Get Free Quote
              <ArrowUpRight size={18} />
            </Link>
            <a
              href={`https://wa.me/${companyData.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-on-dark px-8 py-4"
            >
              WhatsApp Us
            </a>
          </div>
        </motion.div>

        {/* Footer Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-12"
        >
          {/* Brand */}
          <motion.div variants={staggerItem} className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="icon-tile w-11 h-11">
                <span className="text-white font-bold text-xl font-[family-name:var(--font-family-heading)]">V</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Vedha</h3>
                <p className="text-xs text-gray-400 tracking-widest uppercase">uPVC Windows & Doors</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-sm">
              Premium uPVC fenestration solutions crafted with German engineering and Indian craftsmanship for modern architecture.
            </p>
            <div className="space-y-3">
              <a href={`tel:${companyData.phone}`} className="flex items-center gap-3 text-gray-400 hover:text-[#b5d4be] transition-colors">
                <Phone size={16} /> {companyData.phone}
              </a>
              <a href={`mailto:${companyData.email}`} className="flex items-center gap-3 text-gray-400 hover:text-[#b5d4be] transition-colors">
                <Mail size={16} /> {companyData.email}
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="text-sm">{companyData.address}</span>
              </div>
            </div>
          </motion.div>

          {/* Links */}
          {footerLinks.map((group) => (
            <motion.div key={group.title} variants={staggerItem}>
              <h4 className="text-white font-semibold mb-5">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-[#b5d4be] transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800 gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Vedha uPVC Windows & Doors. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-[#2d5a3f] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
