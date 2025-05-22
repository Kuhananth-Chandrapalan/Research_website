import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
    </div>
  );
};