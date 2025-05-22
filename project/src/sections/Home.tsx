import { ArrowDown } from 'lucide-react';
import React, { useEffect, useRef } from 'react';

export const Home: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = homeRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 opacity-90"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)', 
          opacity: 0.2 
        }}
      ></div>
      
      <div className="container mx-auto px-4 py-20 lg:py-0 h-screen flex items-center relative z-10">
        <div ref={homeRef} className="max-w-4xl mx-auto text-center transition-all duration-1000 opacity-0 translate-y-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Real-Time Traffic Anomaly Detection Using Deep Learning and Decentralized Storage
          </h1>
          
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
          
          <p className="text-xl text-blue-100 mb-8">
            Final-Year Research Project ID: 24-25J-206
          </p>
          
          <div className="mb-12 bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <h2 className="text-lg font-semibold text-blue-200 mb-3">Abstract</h2>
            <p className="text-white/90 leading-relaxed">
            This project presents a modular, AI-powered framework for enhancing road safety through real-time detection of critical traffic events and secure blockchain-based logging. The system integrates video-based anomaly detection using YOLOv8, pedestrian intent recognition via time-to-collision (TTC) analysis, red-light and pothole detection, and tamper-proof storage using smart contracts and BZ2-compressed Base64-encoded logs. Evaluated across real-world datasets, the solution achieved a 92.9% F1-score and real-time performance, offering a scalable foundation for intelligent and accountable transportation systems.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => scrollToSection('domain')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              Learn More
            </button>
            <button 
              onClick={() => scrollToSection('documents')}
              className="bg-transparent hover:bg-white/10 text-white border border-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              View Research Paper
            </button>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection('domain')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-blue-300 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};