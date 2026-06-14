import React from 'react';

export default function FloatingRibbonText({
  text = "FLOATING RIBBON WAVE",
  className = "text-5xl md:text-7xl font-black", // Handles styling sizes and weights
  textColor = "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400", // Vibrant color stream
  speed = "3s",             // Time taken for a single letter to complete one wave cycle
  waveHeight = "15px",      // Vertical height displacement of the floating wave
  staggerDelay = 0.12       // Time delay (in seconds) between each consecutive letter
}) {
  
  const characters = text.split("");

  return (
    <>
      {/* Injecting smooth hardware-accelerated continuous sine keyframes */}
      <style>{`
        @keyframes ribbonWave {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-${waveHeight}) rotate(3deg);
          }
          75% {
            transform: translateY(${waveHeight}) rotate(-3deg);
          }
        }

        .animate-ribbon-char {
          display: inline-block;
          animation-name: ribbonWave;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          will-change: transform; /* Boosts performance onto GPU layers */
        }
      `}</style>

      {/* Main Wrapper Container */}
      <div className="flex flex-wrap items-center justify-center py-16 select-none overflow-hidden">
        {characters.map((char, index) => {
          // If the character is a space, render a structured gap layout block
          if (char === " ") {
            return <div key={index} className="w-6" />;
          }

          return (
            <span
              key={index}
              style={{
                animationDuration: speed,
                // Incremental lag offset creates the ribbon wave curve pattern
                animationDelay: `${index * staggerDelay}s`,
              }}
              className={`
                animate-ribbon-char
                ${className} 
                ${textColor}
              `}
            >
              {char}
            </span>
          );
        })}
      </div>
    </>
  );
}