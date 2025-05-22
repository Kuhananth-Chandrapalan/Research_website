import React, { useEffect, useRef } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { PresentationCard } from '../components/PresentationCard';

export const Presentations: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="presentations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Presentations" 
          subtitle="Access our project presentations and slides"
        />
        
        <div 
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 opacity-0 translate-y-10"
        >
          <PresentationCard 
            title="Proposal Presentation"
            date="August 2024"
            type="PowerPoint"
            previewUrl="#"
            downloadUrl="#"
          />
          
          <PresentationCard 
            title="Progress Review 1"
            date="October 2024"
            type="PowerPoint"
            previewUrl="#"
            downloadUrl="#"
          />
          
          <PresentationCard 
            title="Progress Review 2"
            date="January 2025"
            type="PowerPoint"
            previewUrl="#"
            downloadUrl="#"
          />
          
          <PresentationCard 
            title="Final Viva Slides"
            date="May 2025"
            type="PowerPoint"
            previewUrl="#"
            downloadUrl="#"
          />
        </div>
      </div>
    </section>
  );
};