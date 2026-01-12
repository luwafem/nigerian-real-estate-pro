import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Bed,
  Bath,
  Square,
  Car,
  MapPin,
  CheckCircle,
  Phone,
  Mail,
  Share2,
  Heart,
  Calendar,
  Clock,
  Users,
  Star,
  Shield,
  ChevronRight,
  Sparkles,
  Home,
  Building,
  ArrowUpRight,
  Maximize2
} from 'lucide-react';
import { properties } from '../data/properties';

const PropertyDetails = () => {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  const [saved, setSaved] = useState(false);
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white pt-24">
        <div className="text-center">
          <div className="w-16 h-16 rounded-xl border border-red-600 flex items-center justify-center mx-auto mb-4">
            <span className="text-red-600 font-semibold">EH</span>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Property Not Found
          </h2>
          <p className="text-gray-600 text-sm mb-6 max-w-sm">
            The property you're looking for doesn't exist or has been removed.
          </p>
          <Link 
            to="/"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-red-600 text-white text-sm font-medium hover:bg-red-700 hover:shadow-lg transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price) =>
    new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })
      .format(price)
      .replace('NGN', '₦');

  // Badge color logic matching property card
  const badgeColor =
    property.type === 'shortlet'
      ? 'bg-red-600 text-white'
      : property.category === 'sale'
      ? 'bg-red-500 text-white'
      : 'bg-red-400 text-white';

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 space-y-8">
        {/* Back Button & Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Listings
          </Link>
          
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Link to="/" className="hover:text-gray-700">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span>Property Details</span>
          </div>
        </div>

        {/* Property Header - Glass Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/85 backdrop-blur-xl rounded-xl border border-black/5 p-6 shadow-sm"
        >
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${badgeColor}`}>
                  {property.type === 'shortlet'
                    ? 'Shortlet'
                    : property.category === 'sale'
                    ? 'For Sale'
                    : 'For Rent'}
                </span>
                {property.isPremium && (
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-900 border border-black/5">
                    <Sparkles className="w-3 h-3 inline mr-1" />
                    Premium
                  </span>
                )}
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-50 text-gray-700 border border-black/5">
                  {property.status}
                </span>
              </div>

              <div>
                <h1 className="text-3xl font-semibold text-gray-900 mb-2 tracking-tight">
                  {property.title}
                </h1>
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin className="w-4 h-4 mr-2 text-red-600" />
                  {property.location}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 flex-wrap lg:flex-nowrap">
              <div className="text-right">
                <div className="text-2xl font-bold text-red-600">
                  {formatPrice(property.price)}
                  {property.pricePeriod && (
                    <span className="text-sm font-normal text-gray-600">
                      /{property.pricePeriod}
                    </span>
                  )}
                </div>
                {property.minimumStay && (
                  <div className="text-gray-600 text-xs mt-1">
                    Minimum stay: {property.minimumStay}
                  </div>
                )}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setSaved(!saved)}
                  className={`group p-2.5 rounded-xl border transition-all duration-300 ${
                    saved 
                      ? 'bg-red-50 border-red-200 text-red-600' 
                      : 'bg-white border-black/5 text-gray-600 hover:border-red-200 hover:bg-red-50'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${saved ? 'fill-current' : ''} group-hover:scale-110 transition-transform`} />
                </button>
                <button className="p-2.5 rounded-xl border border-black/5 bg-white text-gray-600 hover:border-red-200 hover:bg-red-50 transition-all duration-300 group">
                  <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Main Image */}
            <motion.div
              key={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-96 rounded-xl overflow-hidden border border-black/5 group"
            >
              <img
                src={property.images[activeImage]}
                alt={`Property ${activeImage + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              
              {/* Image Count */}
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-sm text-sm font-medium text-gray-900">
                {activeImage + 1} / {property.images.length}
              </div>
              
              {/* Expand Button */}
              <button className="absolute bottom-4 right-4 p-2.5 rounded-xl bg-white/90 backdrop-blur-sm text-gray-900 hover:bg-white transition-colors">
                <Maximize2 className="w-5 h-5" />
              </button>
            </motion.div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {property.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative h-20 rounded-xl overflow-hidden border transition-all duration-300 ${
                    activeImage === index 
                      ? 'border-red-600 ring-1 ring-red-600' 
                      : 'border-black/5 hover:border-red-300'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {activeImage === index && (
                    <div className="absolute inset-0 bg-red-600/20" />
                  )}
                </button>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl border border-black/5 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-700 mb-6 flex items-center gap-2">
                <Home className="w-4 h-4 text-red-600" />
                Property Details
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex flex-col items-center p-4 rounded-lg bg-gray-50 hover:bg-red-50 transition-colors">
                  <Bed className="w-5 h-5 text-red-600 mb-2" />
                  <span className="text-sm font-medium text-gray-900">{property.bedrooms}</span>
                  <span className="text-xs text-gray-600">Bedrooms</span>
                </div>
                <div className="flex flex-col items-center p-4 rounded-lg bg-gray-50 hover:bg-red-50 transition-colors">
                  <Bath className="w-5 h-5 text-red-600 mb-2" />
                  <span className="text-sm font-medium text-gray-900">{property.bathrooms}</span>
                  <span className="text-xs text-gray-600">Bathrooms</span>
                </div>
                <div className="flex flex-col items-center p-4 rounded-lg bg-gray-50 hover:bg-red-50 transition-colors">
                  <Square className="w-5 h-5 text-red-600 mb-2" />
                  <span className="text-sm font-medium text-gray-900">{property.squareFeet.toLocaleString()}</span>
                  <span className="text-xs text-gray-600">Square Feet</span>
                </div>
                <div className="flex flex-col items-center p-4 rounded-lg bg-gray-50 hover:bg-red-50 transition-colors">
                  <Car className="w-5 h-5 text-red-600 mb-2" />
                  <span className="text-sm font-medium text-gray-900">{property.parking}</span>
                  <span className="text-xs text-gray-600">Parking</span>
                </div>
                <div className="flex flex-col items-center p-4 rounded-lg bg-gray-50 hover:bg-red-50 transition-colors">
                  <Building className="w-5 h-5 text-red-600 mb-2" />
                  <span className="text-sm font-medium text-gray-900">{property.yearBuilt}</span>
                  <span className="text-xs text-gray-600">Year Built</span>
                </div>
                <div className="flex flex-col items-center p-4 rounded-lg bg-gray-50 hover:bg-red-50 transition-colors">
                  <span className={`text-sm font-medium ${property.furnished ? 'text-red-600' : 'text-gray-900'}`}>
                    {property.furnished ? 'Yes' : 'No'}
                  </span>
                  <span className="text-xs text-gray-600">Furnished</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl border border-black/5 p-6"
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-red-600" />
                Description
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{property.description}</p>
              
              {property.neighborhood && (
                <div className="pt-6 border-t border-black/5">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-600" />
                    Neighborhood
                  </h3>
                  <p className="text-gray-600 text-sm">{property.neighborhood}</p>
                </div>
              )}
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl border border-black/5 p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600" />
                  Features & Amenities
                </h2>
                <button
                  onClick={() => setShowAllFeatures(!showAllFeatures)}
                  className="text-sm text-red-600 hover:text-red-700 font-medium flex items-center gap-1"
                >
                  {showAllFeatures ? 'Show Less' : 'Show All'}
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {(showAllFeatures ? property.features : property.features.slice(0, 6)).map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                    <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Agent Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl border border-black/5 p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-700 mb-6 flex items-center gap-2">
                <Shield className="w-4 h-4 text-red-600" />
                Contact Agent
              </h3>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <img
                    src={property.agent.photo}
                    alt={property.agent.name}
                    className="w-16 h-16 rounded-xl object-cover border-2 border-red-100"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{property.agent.name}</h4>
                  <p className="text-xs text-gray-600 mb-2">Licensed Real Estate Agent</p>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">4.9 (42 reviews)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <a
                  href={`tel:${property.agent.phone}`}
                  className="group/btn flex items-center justify-center gap-2 bg-red-600 text-white py-2.5 rounded-xl text-sm font-medium hover:bg-red-700 hover:shadow-lg transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  Call Agent
                  <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
                <a
                  href={`mailto:${property.agent.email}`}
                  className="flex items-center justify-center gap-2 border border-red-600 text-red-600 py-2.5 rounded-xl text-sm font-medium hover:bg-red-50 transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                  Send Email
                </a>
              </div>

              <div className="pt-6 border-t border-black/5 space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Phone className="w-4 h-4 text-red-600" />
                  {property.agent.phone}
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Mail className="w-4 h-4 text-red-600" />
                  {property.agent.email}
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Clock className="w-4 h-4 text-red-600" />
                  Available 24/7
                </div>
              </div>
            </motion.div>

            {/* Schedule Tour */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-red-600 to-red-700 rounded-xl p-6 text-white"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-lg bg-white/20">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Schedule a Tour</h3>
                  <p className="text-white/90 text-sm">
                    Book a private viewing of this premium property
                  </p>
                </div>
              </div>
              
              <button className="group/btn w-full bg-white text-red-600 text-sm font-semibold py-3 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4" />
                Book Viewing
                <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl border border-black/5 p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-700 mb-6 flex items-center gap-2">
                <Clock className="w-4 h-4 text-red-600" />
                Additional Information
              </h3>
              
              <div className="space-y-4">
                {property.availableDate && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Available From</span>
                    <span className="text-sm font-medium text-gray-900">{property.availableDate}</span>
                  </div>
                )}
                
                {property.deposit && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Security Deposit</span>
                    <span className="text-sm font-medium text-gray-900">{formatPrice(property.deposit)}</span>
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Property Type</span>
                  <span className="text-sm font-medium text-gray-900">{property.propertyType || 'Residential'}</span>
                </div>
                
                {property.petsAllowed !== undefined && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Pets Allowed</span>
                    <span className={`text-sm font-medium ${property.petsAllowed ? 'text-red-600' : 'text-gray-900'}`}>
                      {property.petsAllowed ? 'Yes' : 'No'}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-xl border border-black/5 p-6"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-red-50 border border-red-100">
                  <Shield className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-gray-900">Verified Property</p>
                    <p className="text-xs text-gray-600">Documentation verified</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-red-50 border border-red-100">
                  <Users className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-gray-900">24/7 Support</p>
                    <p className="text-xs text-gray-600">Dedicated customer service</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;