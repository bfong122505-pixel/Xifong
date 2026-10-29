export const InfoBadge = ({ label, value, speed = "4s" }) => {
  return (
    <>
      <style>{`
        @keyframes borderWave {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient-border {
          background-size: 200% 200%;
          animation: borderWave ${speed} ease infinite;
        }
      `}</style>

      <div className="relative pl-4 py-2 group cursor-pointer transition-all duration-300">
        <div 
          className="
            absolute left-0 top-0 bottom-0 w-[3px] 
            animate-gradient-border
            bg-gradient-to-b from-[#ff0055] via-[#00ffff] to-[#ffaa00]
            transition-all duration-300 
            group-hover:w-[5px] group-hover:shadow-[0_0_15px_rgba(0,255,255,0.5)]
          "
        />

        <span 
          className="
            text-xs font-black tracking-widest text-[#999999] uppercase block
            transition-colors duration-300 
            group-hover:text-white
          "
        >
          {label}
        </span>

        <strong 
          className="
            text-base font-bold text-neutral-200 block mt-0.5
            transition-all duration-300 
            group-hover:text-transparent group-hover:bg-clip-text 
            group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#00ffff]
            group-hover:translate-x-1
          "
        >
          {value}
        </strong>
      </div>
    </>
  );
};

export default InfoBadge;

