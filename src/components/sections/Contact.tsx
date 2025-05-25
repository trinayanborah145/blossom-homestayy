import React from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the contact form data to a server
    alert('Message sent! We will get back to you soon.');
    // Reset form
    (e.target as HTMLFormElement).reset();
  };
  
  return (
    <Section id="contact" title="Contact Us" subtitle="Get in touch with us for any inquiries">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <div className="mb-8">
            <h3 className="text-xl font-serif text-green-800 mb-4">Reach Out to Us</h3>
            <p className="text-gray-700 mb-6">
              Have questions or need more information? We're here to help make your stay perfect. Reach out to us through any of the following channels.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-green-600 mr-3 mt-1" size={20} />
                <div>
                  <strong className="block text-gray-800">Location</strong>
                  <address className="not-italic text-gray-600">
                    <a 
                      href="https://www.google.com/maps?q=26.7566111,94.1935278&entry=gps"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      View on Google Maps
                    </a>
                  </address>
                </div>
              </li>
              
              <li className="flex items-start">
                <Phone className="text-green-600 mr-3 mt-1" size={20} />
                <div>
                  <strong className="block text-gray-800">Phone</strong>
                  <a href="tel:+919954488644" className="text-gray-600 hover:text-green-700">
                    +91 99544 88644
                  </a>
                  <p className="text-gray-500 text-sm">Available 24/7</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <Mail className="text-green-600 mr-3 mt-1" size={20} />
                <div>
                  <strong className="block text-gray-800">Email</strong>
                  <a href="mailto:hello@blossomhomestay.com" className="text-gray-600 hover:text-green-700">
                    hello@blossomhomestay.com
                  </a>
                  <p className="text-gray-500 text-sm">We typically respond within 24 hours</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Map */}
          <div className="h-80 bg-gray-200 rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3568.26171875!2d94.190953!3d26.7566111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1zMjbCsDQ1JzIzLjgiTiA5NMKwMTEnMzYuNyJF!2zMjXCsDQ1JzIzLjgiTiA5NMKwMTEnMzYuNyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Map location"
            ></iframe>
          </div>
        </div>
        
        {/* Contact Form */}
        <div>
          <h3 className="text-xl font-serif text-green-800 mb-4">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>
            
            <Button type="submit" variant="primary">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;