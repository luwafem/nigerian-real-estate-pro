import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ChevronRight, Sparkles, MapPin, Home, Building, ChevronDown, Shield } from 'lucide-react';

const Hero = () => {
  const quickFilters = [
    { label: 'Lagos', icon: <MapPin className="w-3.5 h-3.5" /> },
    { label: 'Abuja', icon: <MapPin className="w-3.5 h-3.5" /> },
    { label: 'Short-Lets', icon: <Home className="w-3.5 h-3.5" /> },
    { label: 'For Sale', icon: <Building className="w-3.5 h-3.5" /> },
    { label: 'Luxury Villas', icon: <Sparkles className="w-3.5 h-3.5" /> }
  ];

  return (
    <div className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background with enhanced image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Luxury Property"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
          
          {/* Subtle noise texture */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl text-white"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-red-600" />
            <p className="uppercase tracking-[0.3em] text-[11px] text-white font-medium">
              REAL ESTATE BY TJ
            </p>
            <span className="h-px w-8 bg-red-600" />
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 tracking-tight leading-tight">
            Discover Premium
            <span className="block mt-2">
              Properties in{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-red-600">Nigeria</span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-red-600/30 -z-10 blur-md" />
              </span>
            </span>
          </h1>

          <p className="text-lg text-gray-300 mb-14 leading-relaxed max-w-2xl">
            Handpicked luxury homes, exclusive short-lets, and elite property 
            investments in Nigeria's most desirable locations.
          </p>

          {/* Glass Search Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="backdrop-blur-2xl bg-white/10 rounded-xl border border-white/20 shadow-2xl p-6"
          >
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-1 relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <Search className="w-5 h-5 text-gray-300" />
                </div>
                <input
                  type="text"
                  placeholder="Search by location, property type, or keyword"
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-gray-300 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition-colors"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="group flex items-center gap-2 px-5 py-3.5 rounded-xl border border-white/20 text-gray-200 hover:border-red-500/50 hover:bg-red-500/10 hover:text-white transition-all duration-300">
                  <Filter className="w-4 h-4 transition-transform group-hover:rotate-90" />
                  Filters
                </button>

                <button className="group/btn flex items-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 text-white text-sm font-medium hover:bg-red-700 hover:shadow-xl transition-all duration-300">
                  Search
                  <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Quick Filters */}
          </motion.div>

          {/* Stats */}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-300 uppercase tracking-wider">Explore</span>
          <div className="w-6 h-10 border border-white/40 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-red-500 rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>

      {/* Floating Premium Badges */}

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-0" />
    </div>
  );
};

export default Hero;