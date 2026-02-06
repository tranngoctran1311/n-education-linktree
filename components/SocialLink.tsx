import React from 'react';
import { LinkData } from '../types';

interface SocialLinkProps {
  data: LinkData;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ data }) => {
  return (
    <a 
      href={data.href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`link-item group relative w-full flex items-center bg-white border border-gray-200 rounded-full p-1 pl-1 shadow-soft hover:shadow-xl ${data.containerHoverClass}`}
    >
      <div className={`w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center ${data.iconColorClass || 'text-gray-900'} group-hover:bg-white transition-colors ${data.iconHoverClass}`}>
        {data.iconSvg}
      </div>
      <span className="flex-1 text-center font-bold text-sm md:text-base text-gray-800 group-hover:text-white pr-12">
        {data.label}
      </span>
    </a>
  );
};