import { techStackData } from "../../../data/techStack";

export const TechSlider = ({ className = "" }) => {
  // Render multiple sets for seamless infinite scrolling
  const trackGroups = [0, 1, 2, 3];

  return (
    <div className={`relative w-full overflow-hidden bg-white py-2 m-auto ${className}`}>
      <div className="flex w-max animate-slide-infinite mx-3 overflow-hidden">
        {trackGroups.map((groupIndex) => (
          <div
            key={groupIndex}
            className="flex gap-4 px-2 md:[&>img]:h-20 md:[&>img]:w-20 md:[&>img]:object-contain [&>img]:h-15 [&>img]:w-15 [&>img]:object-contain"
          >
            {techStackData.map((tech, itemIndex) => (
              <img
                key={`${groupIndex}-${itemIndex}`}
                src={tech.icon}
                alt={tech.alt}
                className={groupIndex === 0 && itemIndex === 0 ? "animate-cycle-ss" : undefined}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSlider;

