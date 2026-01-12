import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Properties', href: '#properties' },
    { label: 'Shortlets', href: '#shortlets' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50">
      {/* Glass bar */}
      <div className="bg-white/85 backdrop-blur-xl border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3"
            >
              <div className="leading-tight">
                <h1 className="text-xl font-semibold tracking-wide text-gray-900">
                  REAL ESTATE BY TJ
                </h1>
              </div>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              <div className="flex items-center gap-8">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="relative text-sm font-medium text-gray-700 hover:text-gray-900 transition"
                  >
                    {item.label}
                    <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </div>

              {/* Divider */}
              <span className="h-8 w-px bg-black/10" />

              {/* Contact */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Phone className="w-4 h-4 text-red-600" />
                  +234 700 12345
                </div>

                <button className="px-6 py-2.5 rounded-xl bg-red-600 text-white text-sm font-medium hover:bg-red-700 hover:shadow-lg transition-all">
                  Contact Us
                </button>
              </div>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-800"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-black/5"
          >
            <div className="px-6 py-6 space-y-5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-800 text-lg font-medium hover:text-red-600 transition"
                >
                  {item.label}
                </a>
              ))}

              <div className="pt-6 border-t border-black/10 space-y-4">
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <Phone className="w-4 h-4 text-red-600" />
                  +234 700 ELITE
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <MapPin className="w-4 h-4 text-red-600" />
                  Victoria Island, Lagos
                </div>

                <button className="w-full mt-4 py-3 rounded-xl bg-red-600 text-white font-medium hover:bg-red-700 transition">
                  Contact Us
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
