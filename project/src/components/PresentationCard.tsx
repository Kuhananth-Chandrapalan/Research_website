import { Download, Presentation as FilePresentation } from 'lucide-react';
import React from 'react';

interface PresentationCardProps {
  title: string;
  date: string;
  type: string;
  downloadUrl: string;
  previewComponent?: React.ReactNode;  // Added previewComponent prop
}

export const PresentationCard: React.FC<PresentationCardProps> = ({
  title,
  date,
  type,
  downloadUrl,
  previewComponent,  // Destructure the previewComponent
}) => {
  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (downloadUrl === '#') {
      e.preventDefault();
      alert('Presentation is not available for download at this time.');
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
          <p className="text-gray-500 text-sm">
            {date} • {type}
          </p>
        </div>
      </div>

      {/* Render previewComponent if provided */}
      {previewComponent ? (
        <div className="mb-4">{previewComponent}</div>
      ) : null}

      <a
        href={downloadUrl}
        className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded text-center text-sm font-medium hover:bg-indigo-700 transition-colors"
        onClick={handleDownload}
        download
      >
        <Download size={16} className="mr-2" />
        Download
      </a>
    </div>
  );
};
