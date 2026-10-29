import { BlurText } from "../../common/BlurText";
import { TextType } from "../../common/TextType";
import { TechBadges3D } from "./TechBadges3D";
import { heroData } from "../../../data/hero";

export const HeroSection = ({ className = "" }) => {
  const { welcomeBadge, typingTexts, headline, description, ctaButtons } = heroData;

  return (
    <div
      id="home"
      className={`absolute top-[65px] bottom-0 left-0 right-0 bg-transparent flex md:flex-row z-2 items-center justify-center flex-col-reverse mb-2 ${className}`}
    >
      {/* Left side: Intro & Hero Callouts */}
      <div className="w-full mb-5 md:mb-1 md:w-1/2 flex flex-col justify-center px-6 md:px-16 text-white z-2 items-center md:items-baseline">
        <BlurText
          text={welcomeBadge}
          delay={200}
          animateBy="words"
          direction="top"
          className="text-purple-400 font-semibold tracking-wide uppercase text-sm mb-2 block"
        />

        <TextType
          text={typingTexts}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor
          cursorCharacter="_"
          deletingSpeed={50}
          variableSpeed={false}
          cursorBlinkDuration={0.5}
          className="text-2xl md:text-3xl font-bold text-amber-50 mb-3"
        />

        <h1 className="text-[15px] md:text-5xl font-extrabold tracking-tight mb-4 leading-tight md:whitespace-normal">
          {headline.main} <span className="text-purple-500 shadow-sm">{headline.highlight}</span>
        </h1>

        <p className="text-base md:text-lg text-gray-300 mb-8 max-w-md text-justify">
          {description}
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
          <a
            href={ctaButtons.primary.href}
            className="cursor-target px-6 py-3 bg-purple-600 hover:bg-purple-700 font-medium rounded-lg transition duration-300 shadow-lg shadow-purple-600/30 text-center"
          >
            {ctaButtons.primary.label}
          </a>

          <a
            href={ctaButtons.secondary.href}
            className="cursor-target px-6 py-3 overflow-hidden relative w-max h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group"
          >
            {ctaButtons.secondary.label}
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left" />
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left" />
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left" />
            <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
              {ctaButtons.secondary.hoverLabel}
            </span>
          </a>
        </div>
      </div>

      {/* Right side: 3D interactive tech badges */}
      <div className="md:flex md:w-1/2 justify-center items-center">
        <TechBadges3D />
      </div>
    </div>
  );
};

export default HeroSection;

