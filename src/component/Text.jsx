import React from 'react';

export default function GradientWaveText({
  text = "GRADIENT WAVE FLOW",
  className = "text-5xl md:text-7xl font-black", // Default size and weight
  fromColor = "#ff0055", // Neon Pink
  viaColor = "#00ffff",  // Neon Cyan
  toColor = "#ffaa00",   // Neon Orange
  speed = "5s"           // Time to complete one full wave loop
}) {
  return (
    <>
      {/* Injecting custom CSS keyframe loop directly into the document head */}
      <style>{`
        @keyframes gradientWave {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient-text {
          background-size: 200% auto;
          animation: gradientWave ${speed} linear infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* The Text Layer */}
      <span
        style={{
          backgroundImage: `linear-gradient(to right, ${fromColor}, ${viaColor}, ${toColor}, ${fromColor})`
        }}
        className={`
          animate-gradient-text
          inline-block
          uppercase
          tracking-tight
          transition-transform
          duration-300
          hover:scale-[1.02]
          cursor-default
          ${className}
        `}
      >
        {text}
      </span>
    </>
  );
}