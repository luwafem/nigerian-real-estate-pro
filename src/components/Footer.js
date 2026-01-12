import React from 'react';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ChevronRight,
  Shield,
  Sparkles,
  Home,
  ArrowUp,
  Building,
  Heart,
  Globe,
  Clock
} from 'lucide-react';
import { companyInfo } from '../data/properties';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook className="w-4 h-4" />, label: 'Facebook' },
    { icon: <Twitter className="w-4 h-4" />, label: 'Twitter' },
    { icon: <Instagram className="w-4 h-4" />, label: 'Instagram' },
    { icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn' }
  ];

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Properties', href: '#properties' },
    { label: 'Shortlets', href: '#shortlets' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  const footerLinks = {
    "Properties": [
      { label: 'Luxury Homes', href: '#' },
      { label: 'Apartments', href: '#' },
      { label: 'Commercial', href: '#' },
      { label: 'Land', href: '#' },
    ],
    "Shortlets": [
      { label: 'Lagos Shortlets', href: '#' },
      { label: 'Abuja Shortlets', href: '#' },
      { label: 'Beach Houses', href: '#' },
      { label: 'Serviced Apartments', href: '#' },
    ],
    "Company": [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Blog', href: '#' },
    ],
    "Support": [
      { label: 'Help Center', href: '#' },
      { label: 'Contact Us', href: '#' },
      { label: 'FAQ', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ]
  };

  return (
    <footer className="bg-white pt-20 pb-12 border-t border-black/5">
      {/* Top border matching navbar style */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-red-600/30 to-transparent mb-16" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content - New Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Brand & Contact */}
          <div className="space-y-12">
            {/* Brand Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="leading-tight">
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                    REAL ESTATE BY TJ
                  </h2>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-gray-500">
                    Premium Real Estate • Nigeria
                  </p>
                </div>
              </div>
              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 group">
                  <div className="p-2 rounded-lg bg-red-50 border border-red-100 group-hover:bg-red-100 transition-colors">
                    <Phone className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Call us</p>
                    <p className="text-gray-900 font-medium">{companyInfo.contact.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 group">
                  <div className="p-2 rounded-lg bg-red-50 border border-red-100 group-hover:bg-red-100 transition-colors">
                    <Mail className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Email us</p>
                    <p className="text-gray-900 font-medium">{companyInfo.contact.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 group">
                  <div className="p-2 rounded-lg bg-red-50 border border-red-100 group-hover:bg-red-100 transition-colors">
                    <MapPin className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Visit us</p>
                    <p className="text-gray-900 font-medium">{companyInfo.contact.address}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm font-medium text-gray-700 mb-4">Follow us</p>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href="#"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative p-3 rounded-xl bg-gray-50 border border-black/5 hover:bg-red-50 hover:border-red-200 transition-all duration-300"
                    >
                      <div className="text-gray-600 group-hover:text-red-600 transition-colors">
                        {social.icon}
                      </div>
                      <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {social.label}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Newsletter - Now integrated in left column */}
          </div>

          {/* Right Column - Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-6 flex items-center gap-2">
                  {category === 'Properties' }
                  {category === 'Shortlets' }
                  {category === 'Company' }
                  {category === 'Support' }
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <li key={link.label}>
                      <a 
                        href={link.href}
                        className="group flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm transition-colors duration-300"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust & Assurance Section */}

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-sm">
              © {currentYear} Elite Homes Nigeria. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs mt-1">
              Premium Real Estate & Luxury Shortlets
            </p>
          </div>

          {/* Bottom Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-700 transition-colors">Privacy Policy</a>
            <span className="h-3 w-px bg-black/20 hidden md:block" />
            <a href="#" className="hover:text-gray-700 transition-colors">Terms of Service</a>
            <span className="h-3 w-px bg-black/20 hidden md:block" />
            <a href="#" className="hover:text-gray-700 transition-colors">Cookie Policy</a>
            <span className="h-3 w-px bg-black/20 hidden md:block" />
            <a href="#" className="hover:text-gray-700 transition-colors">Sitemap</a>
          </div>

          {/* Country Selector */}
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Globe className="w-3 h-3" />
            <select className="bg-transparent border-none outline-none text-gray-700">
              <option>Nigeria</option>
              <option>Global</option>
            </select>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 p-3 rounded-xl bg-red-600 text-white hover:bg-red-700 hover:shadow-xl transition-all duration-300 z-40 shadow-lg"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;