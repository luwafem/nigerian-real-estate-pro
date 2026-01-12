export const properties = [
  {
    id: 1,
    type: 'property',
    category: 'sale',
    title: 'Luxury Villa in Banana Island',
    location: 'Banana Island, Lagos',
    price: 250000000,
    priceUnit: '₦',
    bedrooms: 5,
    bathrooms: 6,
    squareFeet: 4500,
    yearBuilt: 2020,
    description: 'An exquisite modern villa with panoramic views of the lagoon. Features include smart home automation, private pool, and 24/7 security.',
    features: ['Smart Home', 'Swimming Pool', 'Gym', 'Cinema Room', 'Wine Cellar', 'Generator'],
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    ],
    agent: {
      name: 'Adeola Williams',
      phone: '+234 803 123 4567',
      email: 'adeola@premierhomes.ng',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1064&q=80'
    },
    status: 'Available',
    furnished: true,
    parking: 3,
    neighborhood: 'Exclusive gated community with clubhouse, tennis courts, and private beach access.'
  },
  {
    id: 2,
    type: 'shortlet',
    category: 'rent',
    title: 'Modern Apartment in Victoria Island',
    location: 'Victoria Island, Lagos',
    price: 350000,
    priceUnit: '₦',
    pricePeriod: 'per month',
    bedrooms: 3,
    bathrooms: 3,
    squareFeet: 2800,
    yearBuilt: 2021,
    description: 'Fully serviced luxury apartment with concierge service, daily cleaning, and premium amenities.',
    features: ['Daily Cleaning', 'Concierge', 'High-speed WiFi', 'Netflix', 'Fully Equipped Kitchen', '24/7 Security'],
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80'
    ],
    agent: {
      name: 'Chinedu Okoro',
      phone: '+234 802 987 6543',
      email: 'chinedu@premierhomes.ng',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    status: 'Available',
    furnished: true,
    parking: 2,
    minimumStay: '1 month',
    amenities: ['Gym', 'Swimming Pool', 'Business Center']
  },
  {
    id: 3,
    type: 'property',
    category: 'rent',
    title: 'Penthouse Suite in Ikoyi',
    location: 'Ikoyi, Lagos',
    price: 180000,
    priceUnit: '₦',
    pricePeriod: 'per month',
    bedrooms: 4,
    bathrooms: 4,
    squareFeet: 3800,
    yearBuilt: 2022,
    description: 'Stunning penthouse with panoramic city views, private terrace, and premium finishes throughout.',
    features: ['Private Terrace', 'Smart Home System', 'Wine Storage', 'Home Office', 'Jacuzzi'],
    images: [
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    ],
    agent: {
      name: 'Funke Adebayo',
      phone: '+234 805 456 7890',
      email: 'funke@premierhomes.ng',
      photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80'
    },
    status: 'Available',
    furnished: true,
    parking: 3
  },
  {
    id: 4,
    type: 'shortlet',
    category: 'rent',
    title: 'Executive Shortlet in Lekki Phase 1',
    location: 'Lekki Phase 1, Lagos',
    price: 85000,
    priceUnit: '₦',
    pricePeriod: 'per night',
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1800,
    yearBuilt: 2023,
    description: 'Perfect for business travelers and vacationers. Includes housekeeping, utilities, and high-speed internet.',
    features: ['Daily Housekeeping', 'High-speed WiFi', 'Workstation', 'Laundry Service', 'Netflix/Showmax'],
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    ],
    agent: {
      name: 'Emeka Nwankwo',
      phone: '+234 706 123 4567',
      email: 'emeka@premierhomes.ng',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80'
    },
    status: 'Available',
    furnished: true,
    parking: 2,
    minimumStay: '3 nights'
  },
  {
    id: 5,
    type: 'property',
    category: 'sale',
    title: 'Waterfront Mansion in Chevron',
    location: 'Chevron Drive, Lekki',
    price: 450000000,
    priceUnit: '₦',
    bedrooms: 6,
    bathrooms: 7,
    squareFeet: 5200,
    yearBuilt: 2021,
    description: 'Magnificent waterfront property with private dock, infinity pool, and lush gardens.',
    features: ['Private Dock', 'Infinity Pool', 'Home Theater', 'Staff Quarters', 'Wine Cellar', 'Smart Garden'],
    images: [
      'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80'
    ],
    agent: {
      name: 'Adeola Williams',
      phone: '+234 803 123 4567',
      email: 'adeola@premierhomes.ng',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1064&q=80'
    },
    status: 'Available',
    furnished: true,
    parking: 4
  },
  {
    id: 6,
    type: 'shortlet',
    category: 'rent',
    title: 'Luxury Shortlet in Abuja Central',
    location: 'Maitama, Abuja',
    price: 120000,
    priceUnit: '₦',
    pricePeriod: 'per night',
    bedrooms: 3,
    bathrooms: 3,
    squareFeet: 2200,
    yearBuilt: 2022,
    description: 'Premium serviced apartment in the heart of Abuja. Ideal for diplomatic and business stays.',
    features: ['24/7 Concierge', 'Meeting Room', 'Chef Service Available', 'Airport Pickup', 'Daily Newspaper'],
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    ],
    agent: {
      name: 'Ngozi Eze',
      phone: '+234 909 876 5432',
      email: 'ngozi@premierhomes.ng',
      photo: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80'
    },
    status: 'Available',
    furnished: true,
    parking: 2,
    minimumStay: '2 nights'
  }
];

export const companyInfo = {
  name: 'REALESTATE BY TJ',
  tagline: 'Premium Real Estate & Luxury Shortlets',
  contact: {
    phone: '+234 700 ELITE HOMES',
    email: 'info@realestatebytj.ng',
    address: '1004, Bishop Aboyade Cole Street, Victoria Island, Lagos'
  },
  services: ['Property Sales', 'Property Rentals', 'Shortlets', 'Property Management', 'Real Estate Investment']
};