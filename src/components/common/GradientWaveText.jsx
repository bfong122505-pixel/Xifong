export const GradientWaveText = ({
  text = "GRADIENT WAVE FLOW",
  className = "text-5xl md:text-7xl font-black",
  fromColor = "#ff0055",
  viaColor = "#00ffff",
  toColor = "#ffaa00",
  speed = "5s"
}) => {
  return (
    <>
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
};

export default GradientWaveText;

