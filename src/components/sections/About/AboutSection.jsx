import { ComicCard } from "../../common/ComicCard";
import { GradientWaveText } from "../../common/GradientWaveText";
import { InfoBadge } from "./InfoBadge";
import { personalInfoData } from "../../../data/personalInfo";

export const AboutSection = () => {
  const { comicCard, quickStats, skillsByCategory } = personalInfoData;

  return (
    <section id="about" className="py-16 px-6 md:px-12 lg:px-24 bg-slate-900 text-slate-100 duration-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Comic Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group w-full max-w-sm">
            <div className="absolute -inset-1 bg-gradient-to-r fun-gradient from-blue-500 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
            <ComicCard
              tag={comicCard.tag}
              title={comicCard.title}
              description={comicCard.description}
              imageUrl={comicCard.imageUrl}
              author={comicCard.author}
              badgeColor={comicCard.badgeColor}
              accentColor={comicCard.accentColor}
            />
          </div>
        </div>

        {/* Right Info and Skills */}
        <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
          <GradientWaveText
            text="ABOUT ME"
            className="text-3xl md:text-7xl font-black tracking-tighter cursor-target w-max"
            fromColor="#ff007f"
            viaColor="#7f00ff"
            toColor="#00ffff"
            speed="4s"
          />

          <div className="grid grid-cols-2 gap-2">
            {quickStats.map((stat, idx) => (
              <InfoBadge key={idx} label={stat.label} value={stat.value} />
            ))}
          </div>

          <div className="pt-4">
            <GradientWaveText
              text="MY CORE SKILLS"
              className="text-xl font-black tracking-tighter"
              fromColor="#ff007f"
              viaColor="#7f00ff"
              toColor="#00ffff"
              speed="4s"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-1">
              {skillsByCategory.map((group, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm"
                >
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">
                    {group.category}
                  </span>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {group.items.map((skill, idx) => (
                      <span
                        key={idx}
                        className="cursor-target px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-medium rounded-md transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

