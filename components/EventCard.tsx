import React from 'react';

export const EventCard: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border-2 border-brand-gold shadow-glow overflow-hidden mb-8 transform transition hover:scale-[1.02]">
      <div className="bg-brand-gold py-2 text-white font-bold text-sm uppercase tracking-wide text-center">
        Sự kiện nổi bật
      </div>
      <div className="p-5 text-left">
        <h3 className="text-lg font-bold text-gray-900 mb-3">Khóa học Offline: Thấu hiểu bản thân</h3>
        
        <div className="space-y-3 text-sm text-gray-600">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-brand-gold shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="font-semibold">05 - 08/03/2026 (3.5 ngày)</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-brand-gold shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="font-semibold">Đà Nẵng (64 Học viên)</span>
          </div>
        </div>

        <a 
          href="https://nedu.nhi.sg/program-offline/la-chinh-minh" 
          className="mt-4 block w-full py-2 bg-gray-900 text-white text-center rounded-lg font-medium hover:bg-brand-gold transition-colors"
        >
          Xem chi tiết & Đăng ký
        </a>
      </div>
    </div>
  );
};