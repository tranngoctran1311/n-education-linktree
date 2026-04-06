import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="relative">
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 z-10"></div>
        <img 
          src="./Banner_bio.png" 
          alt="N Education Banner" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-32 h-32 rounded-full border-[6px] border-white bg-white shadow-lg overflow-hidden flex items-center justify-center bg-brand-gold">
          <img 
            src="./logo_nedu.png" 
            alt="N Education Logo" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};
