import React from 'react';
import { Presentation as FilePresentation, ExternalLink, Download } from 'lucide-react';

interface PresentationCardProps {
  title: string;
  date: string;
  type: string;
  previewUrl: string;
  downloadUrl: string;
}

export const PresentationCard: React.FC<PresentationCardProps> = ({ 
  title, 
  date, 
  type, 
  previewUrl, 
  downloadUrl 
}) => {
  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If no actual download URL is provided, prevent default behavior
    if (downloadUrl === '#') {
      e.preventDefault();
      alert('Presentation is not available for download at this time.');
    }
  };

  const handlePreview = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If no actual preview URL is provided, prevent default behavior
    if (previewUrl === '#') {
      e.preventDefault();
      alert('Preview is not available at this time.');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
      <div className="flex items-center mb-4">
        <div className="bg-indigo-100 p-3 rounded-lg mr-4">
          <FilePresentation size={24} className="text-indigo-700" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          <p className="text-gray-500 text-sm">{date} • {type}</p>
        </div>
      </div>
      <div className="flex space-x-4">
        <a 
          href={previewUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded text-center text-sm font-medium hover:bg-gray-50 transition-colors"
          onClick={handlePreview}
        >
          <span className="flex items-center justify-center">
            <ExternalLink size={16} className="mr-2" />
            Preview
          </span>
        </a>
        <a 
          href={downloadUrl} 
          className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded text-center text-sm font-medium hover:bg-indigo-700 transition-colors"
          onClick={handleDownload}
          download
        >
          <span className="flex items-center justify-center">
            <Download size={16} className="mr-2" />
            Download
          </span>
        </a>
      </div>
    </div>
  );
}