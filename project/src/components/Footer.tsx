import React from 'react';
import { Github, Linkedin, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SLIIT Research Project</h3>
            <p className="text-gray-300 mb-4">
              Real-Time Traffic Anomaly Detection Using Deep Learning and Decentralized Storage
            </p>
            <p className="text-gray-400 text-sm">
              ID: 24-25J-206
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#domain" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Domain
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-gray-400 text-sm">
                Sri Lanka Institute of Information Technology<br />
                New Kandy Road, Malabe<br />
                Sri Lanka
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} SLIIT. All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-gray-400 text-sm mr-2">Powered by</span>
            <span className="text-xl font-bold text-white">SLIIT</span>
          </div>
        </div>
      </div>
    </footer>
  );
};