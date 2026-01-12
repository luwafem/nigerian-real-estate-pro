import React from 'react';
import { motion } from 'framer-motion';
import { Bed, Bath, Square, MapPin, ChevronRight, Sparkles, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  const [isSaved, setIsSaved] = React.useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })
      .format(price)
      .replace('NGN', '₦');
  };

  // Badge style matching navbar aesthetic
  const badgeColor =
    property.type === 'shortlet'
      ? 'bg-red-600 text-white'
      : property.category === 'sale'
      ? 'bg-red-500 text-white'
      : 'bg-red-400 text-white';

  const handleSaveClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSaved(!isSaved);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-white rounded-xl overflow-hidden border border-black/5 group hover:shadow-xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent" />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${badgeColor} backdrop-blur-sm`}
          >
            {property.type === 'shortlet'
              ? 'Shortlet'
              : property.category === 'sale'
              ? 'For Sale'
              : 'For Rent'}
          </span>
          
          {/* Premium badge */}
          {property.isPremium && (
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-900 border border-black/5 inline-flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Premium
            </span>
          )}
        </div>

        {/* Save button */}
        <button
          onClick={handleSaveClick}
          className={`absolute top-4 right-4 p-2 rounded-xl backdrop-blur-sm transition-all duration-300 ${
            isSaved 
              ? 'bg-red-600 text-white' 
              : 'bg-white/90 text-gray-600 hover:bg-red-50 hover:text-red-600'
          }`}
        >
          <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
        </button>

        {/* Price */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1.5 rounded-xl text-sm font-semibold bg-white/90 backdrop-blur-xl text-red-600 border border-black/5">
              {formatPrice(property.price)}
              {property.pricePeriod ? `/${property.pricePeriod}` : ''}
            </span>
            
            {/* Status indicator */}
            {property.status === 'available' && (
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg border border-black/5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="text-xs font-medium text-gray-700">Available</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900 tracking-tight group-hover:text-red-600 transition-colors duration-300 mb-2">
            {property.title}
          </h3>
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="w-4 h-4 mr-1.5 text-red-600 flex-shrink-0" />
            <span className="truncate">{property.location}</span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-3 gap-3 py-4 border-t border-black/5 mb-4">
          <div className="flex flex-col items-center p-3 rounded-lg bg-gray-50 hover:bg-red-50 transition-colors group/feature">
            <Bed className="w-5 h-5 text-red-600 mb-2 group-hover/feature:scale-110 transition-transform" />
            <span className="text-sm font-medium text-gray-900">{property.bedrooms}</span>
            <span className="text-xs text-gray-600">Beds</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-lg bg-gray-50 hover:bg-red-50 transition-colors group/feature">
            <Bath className="w-5 h-5 text-red-600 mb-2 group-hover/feature:scale-110 transition-transform" />
            <span className="text-sm font-medium text-gray-900">{property.bathrooms}</span>
            <span className="text-xs text-gray-600">Baths</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-lg bg-gray-50 hover:bg-red-50 transition-colors group/feature">
            <Square className="w-5 h-5 text-red-600 mb-2 group-hover/feature:scale-110 transition-transform" />
            <span className="text-sm font-medium text-gray-900">{property.squareFeet.toLocaleString()}</span>
            <span className="text-xs text-gray-600">sqft</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {property.description}
        </p>

        {/* Feature tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {property.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-medium border border-red-100"
            >
              {feature}
            </span>
          ))}
          {property.features.length > 3 && (
            <span className="px-2.5 py-1 bg-gray-50 text-gray-600 rounded-lg text-xs font-medium border border-gray-100">
              +{property.features.length - 3} more
            </span>
          )}
        </div>

        {/* CTA Button */}
        <Link
          to={`/property/${property.id}`}
          className="group/btn flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-red-600 text-white text-sm font-medium hover:bg-red-700 hover:shadow-lg transition-all duration-300"
        >
          View Details
          <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>

      {/* Quick view info on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center justify-between">
            <div className="text-white text-sm">
              <div className="font-medium mb-1">Click to view details</div>
              <div className="text-white/80 text-xs">{property.bedrooms} beds • {property.bathrooms} baths • {property.squareFeet.toLocaleString()} sqft</div>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <ChevronRight className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;