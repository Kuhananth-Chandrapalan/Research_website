import { Mail, MapPin, Phone } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import { ContactForm } from '../components/ContactForm';
import { SectionTitle } from '../components/SectionTitle';

export const Contact: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const currentFormRef = formRef.current;
    const currentInfoRef = infoRef.current;
    
    if (currentFormRef) {
      observer.observe(currentFormRef);
    }
    
    if (currentInfoRef) {
      observer.observe(currentInfoRef);
    }

    return () => {
      if (currentFormRef) {
        observer.unobserve(currentFormRef);
      }
      
      if (currentInfoRef) {
        observer.unobserve(currentInfoRef);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Get in Touch" 
          subtitle="Find our contact details below and reach out to us"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div 
            ref={infoRef}
            className="transition-all duration-700 opacity-0 translate-y-10"
          >
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <Mail size={20} className="text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Email</h4>
                      <p className="text-gray-600">it22302244@my.sliit.lk</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <Phone size={20} className="text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Phone</h4>
                      <p className="text-gray-600">+94 75 6095 000</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <MapPin size={20} className="text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Address</h4>
                      <p className="text-gray-600">
                        Sri Lanka Institute of Information Technology,<br />
                        New Kandy Road, Malabe,<br />
                        Sri Lanka
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-80">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.575840363564!2d79.97341491477305!3d6.914677395003844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256db1a6771c5%3A0x2c63e344ab9a7536!2sSri%20Lanka%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2s!4v1652345678901!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SLIIT Location"
                ></iframe>
              </div>
            </div>
          </div>

          <div 
            ref={formRef}
            className="transition-all duration-700 opacity-0 translate-y-10"
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};