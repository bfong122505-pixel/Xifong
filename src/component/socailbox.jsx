import React from 'react';

export default function AnimatedSocialCard({
  link = "mailto:sivfongchum@gmail.com",
  platform = "Gmail",
  account = "sivfongchum@gmail.com",
  // Default gradient theme matches your rose accent
  gradientColors = "from-rose-500 via-purple-500 to-rose-500",
  speed = "4s",
  // Slot to pass any Lucide or raw SVG icon cleanly
  icon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  )
}) {
  return (
    <>
      {/* Injecting continuous tracking border keyframes */}
      <style>{`
        @keyframes borderTrack {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-card-border {
          background-size: 200% 200%;
          animation: borderTrack ${speed} linear infinite;
        }
      `}</style>

      <a 
        href={link}
        target={link.startsWith('http') ? '_blank' : '_self'}
        rel="noopener noreferrer"
        className="
          relative block p-[2px] rounded-xl overflow-hidden group 
          transition-transform duration-300 ease-out hover:-translate-y-1.5
          shadow-[0_4px_20px_rgba(0,0,0,0.3)]
        "
      >
        {/* 1. INFINITE ANIMATION BOUNDING LAYER (Acts as a glowing continuous border) */}
        <div className={`absolute inset-0 animate-card-border bg-gradient-to-r ${gradientColors}`} />

        {/* 2. INNER CONTENT CONTAINER MASK */}
        <div className="relative flex items-center p-4 bg-slate-900 rounded-[10px] w-full h-full z-10 transition-colors duration-300 group-hover:bg-slate-800/90">
          
          {/* Icon Wrap Framework */}
          <div className="w-11 h-11 rounded-lg bg-white/5 text-slate-300 flex items-center justify-center mr-4 shrink-0 transition-all duration-300 group-hover:bg-white/10 group-hover:text-white group-hover:scale-105">
            {icon}
          </div>
          
          {/* Text Metrics Block */}
          <div className="min-w-0 flex-1">
            <span className="block text-xs font-black tracking-widest text-slate-400 uppercase mb-0.5 transition-colors duration-300 group-hover:text-slate-300">
              {platform}
            </span>
            
            <p className="
              font-bold text-sm text-slate-200 truncate 
              transition-transform duration-300 ease-out 
              group-hover:translate-x-1 group-hover:text-white
            ">
              {account}
            </p>
          </div>

          {/* Action Trigger Micro Arrow */}
          <div className="text-slate-500 transform translate-x-2 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 pl-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </div>

        </div>
      </a>
    </>
  );
}