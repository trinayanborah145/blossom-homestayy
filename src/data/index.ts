import { Room, Review, Attraction, Amenity } from '../types';
import { Wifi, Utensils, Car, Mountain, Fan, Coffee, ShieldCheck, Dog } from 'lucide-react';

export const rooms: Room[] = [
  {
    id: '1',
    name: '1 BHK Classic Suite',
    description: 'A cozy and comfortable 1 BHK unit featuring a bedroom, living area, and kitchenette. Perfect for couples or solo travelers seeking a peaceful retreat with all modern amenities.',
    price: 1000,
    capacity: 2,
    images: [
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    amenities: ['1 Bedroom', 'Living area', 'Kitchenette', 'Attached bathroom', 'Free Wi-Fi', 'Air conditioning']
  },
  {
    id: '2',
    name: '2 BHK Deluxe Suite',
    description: 'Spacious 2 BHK unit with two bedrooms, a living area, and kitchenette. Ideal for small families or groups looking for a comfortable stay with a touch of vintage elegance.',
    price: 1800,
    capacity: 4,
    images: [
      'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2736388/pexels-photo-2736388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    amenities: ['2 Bedrooms', 'Living area', 'Kitchenette', '2 Attached bathrooms', 'Free Wi-Fi', 'Air conditioning', 'TV']
  }
];

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Prachi Majumder',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5,
    comment: 'An absolutely magical stay! The surroundings were breathtaking and the hospitality was exceptional. Can\'t wait to return!',
    date: '2023-06-15'
  },
  {
    id: '2',
    name: 'Vikash Goenka',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4,
    comment: 'Beautiful property with excellent amenities. The hosts were very accommodating and the food was delicious. Highly recommend!',
    date: '2023-07-20'
  },
  {
    id: '3',
    name: 'Minakshi Gogoi',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5,
    comment: 'Perfect getaway from the city! The peace and quiet was exactly what we needed. The hiking trails nearby were an added bonus.',
    date: '2023-08-05'
  }
];

export const attractions: Attraction[] = [
  {
    id: '1',
    name: 'Sukapha Samannay Kshetra',
    description: 'A cultural landmark honoring Ahom king Sukapha, the founder of the Ahom dynasty. It beautifully showcases Assam\'s unity, heritage, and historical legacy.',
    distance: '15 km',
    image: '/FileUpload.jpg'
  },
  {
    id: '2',
    name: 'Toklai Tea Research Centre',
    description: 'Established in 1911, it\'s the world\'s oldest and largest tea research center. Explore Assam\'s rich tea heritage and innovations in tea cultivation here.',
    distance: '8 km',
    image: '/unnamed.webp'
  },
  {
    id: '3',
    name: 'Hollongapar Gibbon Sanctuary',
    description: 'Home to India\'s only ape, the Hoolock Gibbon, and lush evergreen forests. A paradise for wildlife lovers and nature enthusiasts.',
    distance: '25 km',
    image: '/unnamed (1).webp'
  },
  {
    id: '4',
    name: 'Majuli',
    description: 'The world\'s largest river island, nestled in the mighty Brahmaputra. Known for its satras (Vaishnavite monasteries), vibrant culture, and scenic beauty.',
    distance: '35 km',
    image: '/licensed-image.jpg'
  }
];

export const amenities: Amenity[] = [
  {
    id: '1',
    name: 'Free Wi-Fi',
    icon: 'Wifi',
    description: 'High-speed internet available throughout the property'
  },
  {
    id: '2',
    name: 'Home-cooked Meals',
    icon: 'Utensils',
    description: 'Delicious local cuisine prepared with fresh ingredients'
  },
  {
    id: '3',
    name: 'Parking',
    icon: 'Car',
    description: 'Free on-site parking for all guests'
  },
  {
    id: '4',
    name: 'Nature Walks',
    icon: 'Mountain',
    description: 'Guided walks through the surrounding natural landscape'
  },
  {
    id: '5',
    name: 'Air Conditioning',
    icon: 'Fan',
    description: 'Climate control in all rooms for your comfort'
  },
  {
    id: '6',
    name: 'Complimentary Breakfast',
    icon: 'Coffee',
    description: 'Fresh breakfast served daily with local specialties'
  },
  {
    id: '7',
    name: '24/7 Security',
    icon: 'ShieldCheck',
    description: 'Round-the-clock security for peace of mind'
  },
  {
    id: '8',
    name: 'Pet Friendly',
    icon: 'Dog',
    description: 'Well-behaved pets are welcome in selected accommodations'
  }
];