const renderIcon = (type) => {
  switch (type) {
    case "telegram":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m22 2-7 20-4-9-9-4Z" />
          <path d="M22 2 11 13" />
        </svg>
      );
    case "facebook":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    case "phone":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      );
    case "email":
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
  }
};

export const SocialCard = ({
  link = "mailto:sivfongchum@gmail.com",
  platform = "Gmail",
  account = "sivfongchum@gmail.com",
  gradientColors = "from-rose-500 via-purple-500 to-rose-500",
  speed = "4s",
  iconType = "email"
}) => {
  return (
    <>
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
        target={link.startsWith("http") ? "_blank" : "_self"}
        rel="noopener noreferrer"
        className="
          relative block p-[2px] rounded-xl overflow-hidden group 
          transition-transform duration-300 ease-out hover:-translate-y-1.5
          shadow-[0_4px_20px_rgba(0,0,0,0.3)]
        "
      >
        {/* Animated Gradient Border */}
        <div className={`absolute inset-0 animate-card-border bg-gradient-to-r ${gradientColors}`} />

        {/* Inner Content Card */}
        <div className="relative flex items-center p-4 bg-slate-900 rounded-[10px] w-full h-full z-10 transition-colors duration-300 group-hover:bg-slate-800/90">
          {/* Icon Container */}
          <div className="w-11 h-11 rounded-lg bg-white/5 text-slate-300 flex items-center justify-center mr-4 shrink-0 transition-all duration-300 group-hover:bg-white/10 group-hover:text-white group-hover:scale-105">
            {renderIcon(iconType)}
          </div>

          {/* Platform and Account */}
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

          {/* Micro Arrow */}
          <div className="text-slate-500 transform translate-x-2 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 pl-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </div>
      </a>
    </>
  );
};

export default SocialCard;

