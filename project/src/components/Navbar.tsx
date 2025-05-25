import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <img
              src="/assets/sliit-logo.png"
              alt="SLIIT Logo"
              className="h-8 w-auto"
            />
            <div className="flex flex-col">
              <span className={`text-xl font-bold ${isScrolled ? 'text-black' : 'text-white'}`}>Eagle Eye</span>
              <span className="hidden md:inline-block text-sm font-medium text-gray-600">
                Research Project 24-25J-206
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {[
                'home',
                'domain',
                'milestones',
                'documents',
                'presentations',
                'about',
                'contact'
              ].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className={`font-medium transition-colors capitalize ${isScrolled ? 'text-gray-700 hover:text-blue-800' : 'text-white hover:text-blue-200'}`}
                  >
                    {section.replace(/^\w/, (c) => c.toUpperCase())}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-800"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="py-2 px-4">
            {[
              'home',
              'domain',
              'milestones',
              'documents',
              'presentations',
              'about',
              'contact'
            ].map((section) => (
              <li className="py-2" key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`font-medium transition-colors w-full text-left capitalize ${isScrolled ? 'text-gray-700 hover:text-blue-800' : 'text-white hover:text-blue-200'}`}
                >
                  {section.replace(/^\w/, (c) => c.toUpperCase())}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
