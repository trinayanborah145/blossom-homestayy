import React, { useState } from 'react';
import Section from '../ui/Section';
import { X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const images = [
    {
      src: '/pexels-scene-design-144978225-29305006.jpg',
      alt: 'Cozy living area with modern furniture',
      category: 'interior'
    },
    {
      src: '/Screenshot 2025-05-24 165944.png',
      alt: 'Elegant bedroom with comfortable bedding',
      category: 'rooms'
    },
    {
      src: '/Flux_Dev_A_sleek_and_contemporary_bathroom_with_premium_amenit_2.jpg',
      alt: 'Modern bathroom with premium amenities',
      category: 'bathroom'
    },
    {
      src: '/Screenshot 2025-05-24 170037.png',
      alt: 'Spacious living room with natural light',
      category: 'living space'
    },
    {
      src: '/Screenshot 2025-05-24 170132.png',
      alt: 'Stylish dining area with modern decor',
      category: 'dining'
    },
    {
      src: '/Flux_Dev_Create_a_warm_and_inviting_image_for_the_homepage_of__3.jpg',
      alt: 'Inviting homestay exterior with garden',
      category: 'property'
    }
  ];

  return (
    <Section id="gallery" title="Photo Gallery" subtitle="Explore our property and surroundings through images">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {images.map((image, index) => (
          <div 
            key={index}
            className="overflow-hidden rounded-lg h-64 cursor-pointer relative group"
            onClick={() => setSelectedImage(image.src)}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
              <div className="p-3 w-full bg-black bg-opacity-60 text-white text-sm">
                {image.alt}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Enlarged view" 
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      )}
    </Section>
  );
};

export default Gallery;