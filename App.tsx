import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SocialLink } from './components/SocialLink';
import { LinkData } from './types';

// Icons defined as simple functional components or elements for cleaner data structure
const Icons = {
  Website: (
    <svg aria-label="Biểu tượng Website" role="img" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  TikTok: (
    <i className="fa-brands fa-tiktok text-xl"></i>
  ),
  Facebook: (
    <svg aria-label="Biểu tượng Facebook" role="img" className="w-6 h-6 fill-current" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
  Group: (
    <svg aria-label="Biểu tượng Cộng đồng" role="img" className="w-6 h-6 fill-current" viewBox="0 0 24 24">
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
    </svg>
  ),
  Telegram: (
    <svg aria-label="Biểu tượng Telegram" role="img" className="w-6 h-6 fill-current" viewBox="0 0 24 24">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  ),
  Instagram: (
    <i className="fa-brands fa-instagram text-2xl"></i>
  ),
  LinkedIn: (
    <svg aria-label="Biểu tượng LinkedIn" role="img" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  ),
  YouTube: (
    <svg aria-label="Biểu tượng YouTube" role="img" className="w-6 h-6 fill-current" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  ),
};

const links: LinkData[] = [
  {
    id: 'website',
    label: 'Website Chính Thức',
    href: 'https://nedu.nhi.sg',
    iconSvg: Icons.Website,
    containerHoverClass: 'hover:border-gray-900 hover:bg-gray-900',
    iconHoverClass: 'group-hover:text-black',
    iconColorClass: 'text-black',
  },
  {
    id: 'tiktok-official',
    label: 'TikTok Official',
    href: 'https://www.tiktok.com/@nedu.sg',
    iconSvg: Icons.TikTok,
    containerHoverClass: 'hover:border-gray-900 hover:bg-gray-900',
    iconHoverClass: 'group-hover:text-black',
    iconColorClass: 'text-black',
  },
  {
    id: 'tiktok-tho-dung',
    label: 'TikTok Thợ Đụng',
    href: 'https://www.tiktok.com/@thodungduide.nedu?_r=1&_t=ZS-93da8Zt3mxJ',
    iconSvg: Icons.TikTok,
    containerHoverClass: 'hover:border-gray-900 hover:bg-gray-900',
    iconHoverClass: 'group-hover:text-black',
    iconColorClass: 'text-black',
  },
  {
    id: 'facebook',
    label: 'Fanpage Facebook',
    href: 'https://www.facebook.com/neducation.sg',
    iconSvg: Icons.Facebook,
    containerHoverClass: 'hover:border-[#1877F2] hover:bg-[#1877F2]',
    iconHoverClass: 'group-hover:text-[#1877F2]',
    iconColorClass: 'text-[#1877F2]',
  },
  {
    id: 'facebook-group',
    label: 'Cộng đồng N-Education',
    href: 'https://www.facebook.com/share/g/17ba4f46K5/',
    iconSvg: Icons.Group,
    containerHoverClass: 'hover:border-[#1877F2] hover:bg-[#1877F2]',
    iconHoverClass: 'group-hover:text-[#1877F2]',
    iconColorClass: 'text-[#1877F2]',
  },
  {
    id: 'youtube',
    label: 'YouTube Channel',
    href: 'https://www.youtube.com/@neducationsg',
    iconSvg: Icons.YouTube,
    containerHoverClass: 'hover:border-[#FF0000] hover:bg-[#FF0000]',
    iconHoverClass: 'group-hover:text-[#FF0000]',
    iconColorClass: 'text-[#FF0000]',
  },
  {
    id: 'telegram',
    label: 'Cộng đồng Telegram',
    href: 'https://t.me/+FwPWHDuApOw5OGU1',
    iconSvg: Icons.Telegram,
    containerHoverClass: 'hover:border-[#229ED9] hover:bg-[#229ED9]',
    iconHoverClass: 'group-hover:text-[#229ED9]',
    iconColorClass: 'text-[#229ED9]',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/neducation.sg',
    iconSvg: Icons.Instagram,
    containerHoverClass: 'hover:border-[#E1306C] hover:bg-[#E1306C]',
    iconHoverClass: 'group-hover:text-[#E1306C]',
    iconColorClass: 'text-[#E1306C]',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/n-edu',
    iconSvg: Icons.LinkedIn,
    containerHoverClass: 'hover:border-[#0077b5] hover:bg-[#0077b5]',
    iconHoverClass: 'group-hover:text-[#0077b5]',
    iconColorClass: 'text-[#0077b5]',
  },
];

const RotatingHeadline: React.FC = () => {
    const phrases = [
        "LÀ CHÍNH MÌNH",
        "THẤU HIỂU BẢN THÂN",
        "QUẢN TRỊ CẢM XÚC"
    ];
    const [index, setIndex] = useState(0);
    const [fadeProp, setFadeProp] = useState('opacity-100');

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeProp('opacity-0');
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
                setFadeProp('opacity-100');
            }, 300); // Wait for fade out to complete before switching text
        }, 3000); // Changed to 3s

        return () => clearInterval(interval);
    }, [phrases.length]);

    return (
        <h2 className={`text-xl md:text-3xl font-extrabold text-[#FFA500] uppercase leading-tight my-2 drop-shadow-sm transition-opacity duration-300 ${fadeProp}`}>
            {phrases[index]}
        </h2>
    );
};

const App: React.FC = () => {
  return (
    <div className="max-w-lg mx-auto min-h-screen bg-white shadow-2xl relative overflow-hidden">
      <Header />

      <main className="pt-20 px-6 pb-12 text-center">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">N - Education</h1>
        <p className="text-xs font-medium text-[#f7b50c] uppercase tracking-wider mb-6">
          Người Việt • Làm hàng Việt • Cho người Việt
        </p>

        <div className="mb-8 p-4 bg-gray-50 rounded-2xl border border-gray-100">
          <p className="text-gray-500 italic text-xs md:text-sm font-light mb-1">
            "Hành trình vạn dặm bắt đầu từ một bước chân được..."
          </p>
          
          <RotatingHeadline />
          
          <p className="text-gray-700 font-bold text-sm md:text-base">...cùng N-Education"</p>
        </div>

        <div className="space-y-4">
          {links.map((link) => (
            <SocialLink key={link.id} data={link} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;