import React from 'react';
import { FileText, Download } from 'lucide-react';

interface DocumentCardProps {
  title: string;
  description?: string;
  fileName: string;
  downloadUrl: string;
  date?: string;
  fileSize?: string;
}

export const DocumentCard: React.FC<DocumentCardProps> = ({ 
  title, 
  description, 
  fileName, 
  downloadUrl, 
  date, 
  fileSize 
}) => {
  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If no actual download URL is provided, prevent default behavior
    if (downloadUrl === '#') {
      e.preventDefault();
      alert('Document is not available for download at this time.');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
      <div className="flex items-start">
        <div className="bg-blue-100 p-3 rounded-lg mr-4">
          <FileText size={24} className="text-blue-700" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-800 mb-1">{title}</h3>
          {description && (
            <p className="text-gray-600 text-sm mb-3">{description}</p>
          )}
          <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4">
            <span className="mr-4">{fileName}</span>
            {fileSize && <span className="mr-4">{fileSize}</span>}
            {date && <span>{date}</span>}
          </div>
          <a 
            href={downloadUrl} 
            className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium text-sm"
            onClick={handleDownload}
            download={fileName}
          >
            <Download size={16} className="mr-1" />
            Download
          </a>
        </div>
      </div>
    </div>
  );
}