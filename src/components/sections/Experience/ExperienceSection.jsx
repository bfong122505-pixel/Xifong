import { GradientWaveText } from "../../common/GradientWaveText";
import { ProjectCard } from "./ProjectCard";
import { projectsData } from "../../../data/projects";

export const ExperienceSection = ({ className = "" }) => {
  return (
    <section id="experience" className={`my-2.5 ${className}`}>
      <div className="w-full flex justify-center items-center mb-6">
        <GradientWaveText
          text="Experience"
          className="text-3xl md:text-7xl font-black tracking-tighter cursor-target w-max m-auto"
          fromColor="#ff007f"
          viaColor="#7f00ff"
          toColor="#00ffff"
          speed="4s"
        />
      </div>

      <div className="space-y-6">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;

