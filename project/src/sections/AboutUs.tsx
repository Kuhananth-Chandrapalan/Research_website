import React, { useEffect, useRef } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { TeamMember } from '../components/TeamMember';

export const AboutUs: React.FC = () => {
  const studentsRef = useRef<HTMLDivElement>(null);
  const supervisorsRef = useRef<HTMLDivElement>(null);

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

    const currentStudentsRef = studentsRef.current;
    const currentSupervisorsRef = supervisorsRef.current;
    
    if (currentStudentsRef) {
      observer.observe(currentStudentsRef);
    }
    
    if (currentSupervisorsRef) {
      observer.observe(currentSupervisorsRef);
    }

    return () => {
      if (currentStudentsRef) {
        observer.unobserve(currentStudentsRef);
      }
      
      if (currentSupervisorsRef) {
        observer.unobserve(currentSupervisorsRef);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="About Us" 
          subtitle="Meet the team behind the research project"
        />
        
        <div 
          ref={studentsRef}
          className="mb-16 transition-all duration-700 opacity-0 translate-y-10"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Research Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TeamMember 
              name="Dissanayake D.J.R"
              id="IT21313370"
              email="IT21323370@my.sliit.lk"
              image="/assets/profiles/dhananyaja.png"
            />
            
            <TeamMember 
              name="Kuhananth C"
              id="IT21302244"
              email="IT21302244@my.sliit.lk"
              image="/assets/profiles/kuhananth.jpg"
            />
            
            <TeamMember 
              name="Rizmaan M.F.M"
              id="IT21295188"
              email="IT21295188@my.sliit.lk"
              image="/assets/profiles/rizman.png"
            />
            
            <TeamMember 
              name="Sulakkana H.D.S.R"
              id="IT21224348"
              email="IT21224348@my.sliit.lk"
              image="/assets/profiles/ravindu.jpg"
            />
          </div>
        </div>
        
        <div 
          ref={supervisorsRef}
          className="transition-all duration-700 opacity-0 translate-y-10"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Supervisors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TeamMember 
              name="Mr. Samadhi Rathnayake"
              id=""
              email="Samadhi.r@sliit.lk"
              role="Supervisor"
              image="/assets/profiles/Samadhi Ratnayake​.png"
              fit="contain"
            />
            
            <TeamMember 
              name="Mr. Nelum Amarasena"
              id=""
              email="Nelum.a@sliit.lk"
              role="Co-Supervisor"
              image="/assets/profiles/Nelum Amarasena​.png"
              fit="contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};