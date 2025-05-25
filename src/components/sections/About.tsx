import React from 'react';
import Section from '../ui/Section';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Our Homestay" subtitle="Classic taste, vintage textures">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed text-lg italic">
            An aesthetic retreat for the quiet-hearted.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Nestled in a peaceful corner, Blossom Homestay offers a perfect blend of classic charm and modern comfort. Our carefully curated spaces are designed to provide a tranquil escape from the hustle and bustle of everyday life.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We offer cozy 1 BHK and spacious 2 BHK units, each thoughtfully designed with vintage aesthetics and contemporary amenities. Whether you're seeking a romantic getaway or a peaceful solo retreat, our homestay provides the perfect setting.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At just ₹1000 per night, experience the perfect blend of comfort and style. Our rooms feature plush bedding, modern furnishings, and all the amenities you need for a comfortable stay.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <img 
              src="/Flux_Dev_A_sleek_and_contemporary_bathroom_with_premium_amenit_2.jpg" 
              alt="Luxury bathroom" 
              className="rounded-lg h-48 w-full object-cover"
            />
            <img 
              src="/Flux_Dev_Create_a_warm_and_inviting_image_for_the_homepage_of__0.jpg" 
              alt="Cozy living area" 
              className="rounded-lg h-64 w-full object-cover"
            />
          </div>
          <div className="space-y-4 mt-8">
            <img 
              src="/Flux_Dev_Create_a_warm_and_inviting_image_for_the_homepage_of__1.jpg" 
              alt="Elegant bedroom" 
              className="rounded-lg h-64 w-full object-cover"
            />
            <img 
              src="/Flux_Dev_Create_a_warm_and_inviting_image_for_the_homepage_of__2.jpg" 
              alt="Dining area with a view" 
              className="rounded-lg h-48 w-full object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;