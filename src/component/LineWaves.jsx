import React from 'react';

export default function AnimatedRetroComicCard({
  tag = "LIVE EFFECT",
  title = "Infinite CSS Keyframe Loops",
  description = "By combining continuous custom translation matrix loops with hover-state overrides, we can keep elements dynamically moving without relying on heavy external animation engines.",
  imageUrl = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
  author = "S. Wave",
  badgeColor = "bg-yellow-300",
  accentColor = "bg-cyan-400"
}) {
  return (
    <div className="flex items-center justify-center p-8 bg-transparent">
      
      {/* Injecting custom keyframe animations straight into the document head */}
      <style>{`
        @keyframes dynamicWiggle {
          0% { transform: rotate(-2deg) skewX(1deg) translateY(-4px); }
          50% { transform: rotate(-1deg) skewX(-1deg) translateY(2px); }
          100% { transform: rotate(-2deg) skewX(1deg) translateY(-4px); }
        }
        @keyframes badgeFloat {
          0% { transform: rotate(3deg) translateY(0px); }
          50% { transform: rotate(5deg) translateY(-3px); }
          100% { transform: rotate(3deg) translateY(0px); }
        }
        @keyframes imageShift {
          0% { transform: rotate(-1deg) scale(1); }
          50% { transform: rotate(1deg) scale(1.02); }
          100% { transform: rotate(-1deg) scale(1); }
        }
        
        .animate-comic-card {
          animation: dynamicWiggle 6s ease-in-out infinite;
        }
        .animate-comic-badge {
          animation: badgeFloat 4s ease-in-out infinite;
        }
        .animate-comic-image {
          animation: imageShift 5s ease-in-out infinite;
        }
      `}</style>

      {/* 1. Main Card Container with continuous loops */}
      <div 
        className={`
          animate-comic-card
          relative w-full max-w-sm p-5 
          bg-white border-[4px] border-black rounded-none
          transition-all duration-300 ease-in-out
          box-shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]
          
          /* HOVER STATE: Disables the continuous infinite wiggle animation instantly and snaps square */
          hover:!animation-none hover:rotate-0 hover:skew-x-0 hover:translate-y-1
          hover:box-shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
          group
        `}
      >
        
        {/* 2. Floating Category Badge with infinite float loop */}
        <span 
          className={`
            animate-comic-badge
            absolute -top-4 left-6 
            px-3 py-1 
            text-xs font-black tracking-widest text-black 
            border-[3px] border-black uppercase rounded-none
            transition-all duration-300
            group-hover:!animation-none group-hover:rotate-0
            ${badgeColor}
          `}
        >
          {tag}
        </span>

        {/* 3. Image Framework with subtle breathing loop */}
        <div 
          className="
            animate-comic-image
            relative w-full h-48 overflow-hidden 
            border-[4px] border-black bg-neutral-200
            transition-all duration-300
            group-hover:!animation-none group-hover:rotate-0
          "
        >
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* 4. Text Content */}
        <div className="mt-5">
          <h3 className="text-2xl font-black leading-tight text-black uppercase tracking-tight">
            {title}
          </h3>
          
          <p className="mt-3 text-sm font-medium leading-relaxed text-neutral-700 border-t-2 border-dashed border-neutral-400 pt-3">
            {description}
          </p>
        </div>

        {/* 5. Footer Layout */}
        <div className="flex items-center justify-between mt-6 pt-3 border-t-[3px] border-black">
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase text-neutral-500">Written By</span>
            <span className="text-sm font-black text-black">{author}</span>
          </div>
          
          {/* Action Arrow Button */}
          <button 
            className={`
              w-10 h-10 
              flex items-center justify-center 
              border-[3px] border-black rounded-none
              font-black text-black text-lg
              transition-all duration-200
              box-shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
              active:translate-x-0.5 active:translate-y-0.5 active:box-shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]
              ${accentColor}
            `}
            aria-label="Read article"
          >
            →
          </button>
        </div>

      </div>
    </div>
  );
}