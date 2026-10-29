import { heroData } from "../../../data/hero";

export const TechBadges3D = () => {
  const { heroImage, floatingBadges } = heroData;

  return (
    <div className="hover-3d relative cursor-target">
      <figure className="max-w-100 rounded-2xl">
        <img src={heroImage.src} alt={heroImage.alt} />
      </figure>

      {/* 8 empty divs required by DaisyUI hover-3d perspective */}
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />

      {/* Floating Animated Badges */}
      {floatingBadges.map((badge, idx) => (
        <div key={idx} className={badge.containerClass}>
          <img src={badge.src} alt={badge.alt} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
};

export default TechBadges3D;

