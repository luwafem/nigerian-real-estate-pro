import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { properties } from '../data/properties';
import PropertyCard from './PropertyCard';
import { ChevronRight, Sparkles } from 'lucide-react';

const TabbedProperties = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProperties = properties.filter((property) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'properties') return property.type === 'property';
    if (activeTab === 'shortlets') return property.type === 'shortlet';
    return true;
  });

  const tabs = [
    { id: 'all', label: 'All Listings', count: properties.length },
    {
      id: 'properties',
      label: 'Properties',
      count: properties.filter((p) => p.type === 'property').length
    },
    {
      id: 'shortlets',
      label: 'Short-Lets',
      count: properties.filter((p) => p.type === 'shortlet').length
    }
  ];

  return (
    <section id="listings" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header - matching navbar's typography and spacing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-red-600" />
            <p className="uppercase tracking-[0.3em] text-[11px] text-gray-500 font-medium">
              Premium Selection
            </p>
            <span className="h-px w-8 bg-red-600" />
          </div>


          <p className="text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed">
            Discover our curated collection of premium real estate and short-lets in Nigeria's most exclusive locations.
          </p>
        </motion.div>

        {/* Tabs - matching navbar's glass effect and button styling */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex items-center gap-1 rounded-xl bg-white/85 backdrop-blur-xl border border-black/5 p-1.5 shadow-sm">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-white bg-red-600 shadow-sm'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-black/5'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {tab.label}
                    <span
                      className={`px-2 py-0.5 rounded-md text-xs ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-black/5 text-gray-600'
                      }`}
                    >
                      {tab.count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Grid with animated container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state - matching aesthetic */}
        {filteredProperties.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-white/50 backdrop-blur-sm rounded-xl border border-black/5 mt-8"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 mb-6">
              <div className="w-10 h-10 rounded-lg border border-red-600 flex items-center justify-center">
                <span className="text-red-600 font-semibold">EH</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No listings available
            </h3>
            <p className="text-gray-600 text-sm max-w-md mx-auto mb-6">
              We're constantly updating our portfolio. Check back soon or explore other categories.
            </p>
            <button
              onClick={() => setActiveTab('all')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 text-white text-sm font-medium hover:bg-red-700 hover:shadow-lg transition-all"
            >
              View All Properties
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}

        {/* View All CTA - matches navbar button styling */}
        {filteredProperties.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-16 pt-10 border-t border-black/5"
          >
            <button className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-xl bg-red-600 text-white text-sm font-medium hover:bg-red-700 hover:shadow-xl transition-all duration-300">
              View All Properties
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <p className="text-gray-500 text-xs mt-4 uppercase tracking-wider">
              Showing {filteredProperties.length} of {properties.length} total properties
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TabbedProperties;