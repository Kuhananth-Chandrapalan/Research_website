import React, { useEffect, useRef } from 'react';
import { GanttChart } from '../components/GanttChart';
import { SectionTitle } from '../components/SectionTitle';

export const Milestones: React.FC = () => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

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

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="milestones" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Project Milestones" 
          subtitle="Timeline and key deliverables for our research project"
        />
        
        <div 
          ref={(el) => (elementsRef.current[0] = el)}
          className="mb-16 transition-all duration-700 opacity-0 translate-y-10"
        >
          <GanttChart />
        </div>
        
        <div 
          ref={(el) => (elementsRef.current[1] = el)}
          className="transition-all duration-700 opacity-0 translate-y-10"
        >
          <div className="relative border-l-4 border-blue-600 pl-6 ml-4 space-y-12">
  {[
    {
      title: 'Proposal',
      date: 'August 2024',
      color: 'blue',
      description: 'Initial project proposal submission outlining research objectives, methodology, and expected outcomes.'
    },
    {
      title: 'Progress Review 1',
      date: 'October 2024',
      color: 'green',
      description: 'First progress review presenting initial implementation of YOLOv8 and CNN models for vehicle detection.'
    },
    {
      title: 'Progress Review 2',
      date: 'January 2025',
      color: 'orange',
      description: 'Second review demonstrating LSTM and HMM integration for anomaly detection and initial blockchain implementation.'
    },
    {
      title: 'Final Report Submission',
      date: 'April 2025',
      color: 'red',
      description: 'Submission of the complete report detailing methodology, implementation, results, and conclusions.'
    },
    {
      title: 'Viva',
      date: 'May 2025',
      color: 'purple',
      description: 'Final presentation and defense of the research before the panel, demonstrating the system.'
    },
    {
      title: 'Key Deliverables',
      date: 'Ongoing',
      color: 'gray',
      description: [
        'Functional detection system for traffic anomalies',
        'Blockchain implementation for secure data storage',
        'Smart contracts for automated enforcement',
        'Complete documentation and research findings'
      ]
    }
  ].map((item, index) => (
    <div key={index} className="relative flex items-start gap-6">
      <div className={`absolute left-[-35px] w-6 h-6 rounded-full bg-${item.color}-600 border-4 border-white`}></div>
      <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-1">{item.title}</h3>
          <p className={`text-${item.color}-700 font-medium mb-2`}>{item.date}</p>
          {Array.isArray(item.description) ? (
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {item.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">{item.description}</p>
          )}
        </div>
      </div>
    </div>
  ))}
</div>

        </div>
      </div>
    </section>
  );
};