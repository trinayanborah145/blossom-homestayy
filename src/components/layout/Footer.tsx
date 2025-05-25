import React from 'react';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-pink-700 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Blossom Homestay</h3>
            <p className="mb-4 text-pink-100">
              Experience the perfect blend of nature and comfort at our serene homestay nestled in the heart of nature.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/blossom_homestay_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-pink-200 transition-colors"
                aria-label="Visit our Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Rooms', 'Gallery', 'Amenities', 'Attractions', 'Reviews', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-pink-100 hover:text-pink-200 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 flex-shrink-0" size={18} />
                <a 
                  href="https://www.google.com/maps?q=26.7566111,94.1935278&entry=gps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  View on Google Maps
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 flex-shrink-0" size={18} />
                <a href="tel:+919954488644" className="hover:underline">+91 99544 88644</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 flex-shrink-0" size={18} />
                <a href="mailto:hello@blossomhomestay.com" className="hover:underline">hello@blossomhomestay.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-pink-600 mt-8 pt-8 text-center text-pink-200">
          <p>&copy; {new Date().getFullYear()} Blossom Homestay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;