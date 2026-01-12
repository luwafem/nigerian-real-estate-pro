import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Award, 
  TrendingUp,
  Home,
  Users,
  Clock,
  ChevronRight,
  Sparkles,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Hero from '../components/Hero';
import TabbedProperties from '../components/TabbedProperties';
import { companyInfo } from '../data/properties';

const HomePage = () => {

  const services = [
    {
      title: 'Property Sales',
      description: 'Premium residential and commercial properties across Nigeria',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'bg-red-600'
    },
    {
      title: 'Shortlets',
      description: 'Luxury furnished apartments for short and long stays',
      icon: <Home className="w-6 h-6" />,
      color: 'bg-red-500'
    },
    {
      title: 'Property Management',
      description: 'Full-service management for property owners',
      icon: <Shield className="w-6 h-6" />,
      color: 'bg-red-400'
    }
  ];

  const benefits = [
    'Verified property listings',
    '24/7 customer support',
    'Legal & documentation assistance',
    'Competitive pricing',
    'Premium locations only',
    'Personalized property tours'
  ];

  return (
    <>
      <Hero />

      {/* Stats Section - matching glass aesthetic */}

      {/* Properties Listings */}
      <TabbedProperties />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-red-600" />
              <p className="uppercase tracking-[0.3em] text-[11px] text-gray-500 font-medium">
                Our Expertise
              </p>
              <span className="h-px w-8 bg-red-600" />
            </div>
            

            <p className="text-gray-600 text-sm max-w-2xl mx-auto leading-relaxed">
              Comprehensive real estate solutions tailored to your needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-white rounded-xl border border-black/5 p-8 hover:shadow-xl transition-all duration-300 h-full">
                  <div className={`inline-flex p-3 rounded-xl ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-6">{service.description}</p>
                  
                  <button className="inline-flex items-center gap-2 text-red-600 text-sm font-medium group-hover:gap-3 transition-all">
                    Learn more
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 bg-white/85 backdrop-blur-xl rounded-xl border border-black/5 p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                  <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          {/* Decorative elements */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-white/50" />
              <p className="uppercase tracking-[0.3em] text-[11px] text-white/80 font-medium">
                Start Your Journey
              </p>
              <span className="h-px w-8 bg-white/50" />
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 tracking-tight">
              Ready to Find Your Dream Property?
            </h2>
            
            <p className="text-white/90 text-sm mb-10 max-w-xl mx-auto leading-relaxed">
              Contact our expert team today for personalized assistance and premium service
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group/btn inline-flex items-center gap-3 px-8 py-3.5 rounded-xl bg-white text-red-600 text-sm font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Schedule Consultation
                <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
              
              <div className="flex items-center gap-3 px-8 py-3.5 rounded-xl border-2 border-white/30 text-white text-sm font-medium hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                <Phone className="w-4 h-4" />
                {companyInfo.contact.phone}
              </div>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-wrap justify-center items-center gap-6 text-white/70 text-xs uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <Shield className="w-3 h-3" />
                  <span>Verified Listings</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3 h-3" />
                  <span>Premium Properties</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-3 h-3" />
                  <span>Dedicated Support</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

// Adding Phone icon component since it's used in CTA
const Phone = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

export default HomePage;