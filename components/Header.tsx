import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="relative">
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 z-10"></div>
        <img 
          src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/557456310_122133167012927754_4986590599652033895_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=UbXCT6TxunsQ7kNvwEr4YIM&_nc_oc=Adn89axORU2u34dKwYDJhD59NV8nknW_d-MqfXckHz2cpuBWuxhephKqoyGE-gcJGJcxDe4m-b7fqWdPq7gRSqus&_nc_zt=23&_nc_ht=scontent.fdad3-6.fna&_nc_gid=p6QsKFqv8drj0LGnODO78g&oh=00_AfvJjF3AsC-07_aC5pNdNxJHP_Rt8Dc89owiACzZF3nlnA&oe=698ABBF1" 
          alt="N Education Banner" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-32 h-32 rounded-full border-[6px] border-white bg-white shadow-lg overflow-hidden flex items-center justify-center bg-brand-gold">
          <img 
            src="https://scontent.fdad3-3.fna.fbcdn.net/v/t39.30808-6/516836696_1158615059717738_2905765438982771937_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=VvazfVIPlI0Q7kNvwGLOIm_&_nc_oc=AdlUQpYrIcOuV5d_TR7cmFXreoeSVWd8BAr9k_NkaGM0j920MIjmcNBe7eJrzZOsIPXrc1hyok9OUqWxnBH2C0HK&_nc_zt=23&_nc_ht=scontent.fdad3-3.fna&_nc_gid=0pIIMZ80VZiitGB-GhqKYA&oh=00_Afv1Lghd84HvkuXa6zglD6u0MpG8Z4-1KASmbAx4AkjDiQ&oe=698AC00C" 
            alt="N Education Logo" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};