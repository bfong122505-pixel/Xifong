export const FloatingRibbonText = ({
  text = "FLOATING RIBBON WAVE",
  className = "text-5xl md:text-7xl font-black",
  textColor = "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400",
  speed = "3s",
  waveHeight = "15px",
  staggerDelay = 0.12
}) => {
  const characters = text.split("");

  return (
    <>
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
          will-change: transform;
        }
      `}</style>

      <div className="flex flex-wrap items-center justify-center py-16 select-none overflow-hidden">
        {characters.map((char, index) => {
          if (char === " ") {
            return <div key={index} className="w-6" />;
          }

          return (
            <span
              key={index}
              style={{
                animationDuration: speed,
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
};

export default FloatingRibbonText;

