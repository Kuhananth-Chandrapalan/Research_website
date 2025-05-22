import { Mail } from 'lucide-react';
import React from 'react';

interface TeamMemberProps {
  name: string;
  id: string;
  email: string;
  role?: string;
  image: string;
  fit?: 'cover' | 'contain';
}

export const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  id,
  email,
  role = 'Student',
  image,
  fit = 'cover' // default to object-cover
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 flex flex-col h-full">
      {/* Image container with adjustable fit */}
      <div className="w-full h-80 bg-gray-100">
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-${fit} object-top`}
        />
      </div>
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-xl font-bold text-gray-800">{name}</h3>
          <p className="text-blue-700 font-medium mb-2">{role}</p>
          {id && <p className="text-gray-600 text-sm mb-4">{id}</p>}
        </div>
        <div className="flex items-center text-gray-600">
          <Mail size={16} className="mr-2" />
          <a
            href={`mailto:${email}`}
            className="text-sm hover:text-blue-700 transition-colors break-all"
          >
            {email}
          </a>
        </div>
      </div>
    </div>
  );
};
