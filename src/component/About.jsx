import React from 'react';
import AnimatedRetroComicCard from './LineWaves';
import GradientWaveText from './Text'
import ListAbout from "./ListAbout";

export default function AboutSection() {
  // Categorized tech stack for quick scanning
  const skills = [
    { category: "Frontend", items: ["React", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3" , "Bootstrap 5"] },
    { category: "Design & Tools", items: ["Figma", "Git/GitHub", "VS Code", "Responsive Design"] },
  ];

  return (
    <section id = "about" className="bg-slate-50 py-16 px-6 md:px-12 lg:px-24 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group w-full max-w-sm">
            
            <div className="absolute -inset-1 bg-gradient-to-r fun-gradient from-blue-500 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            
             {/* df */}
             <AnimatedRetroComicCard 
                tag="FONG DEV"
                title="MY Background"
                description="Let me introduce myself, I come from SiemReap and currently I am a student at NTTI university in year 2. My major is IT because I love technology, especially web developer. I like to learning code by myself and practice making websites. I'm always happy to connect with people who share the same interest!"
                imageUrl="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=600&auto=format&fit=crop"
                author="CHUM SIVFONG"
                badgeColor="bg-orange-400"
                accentColor="bg-yellow-300"
             />
          </div>
        </div>

        
        <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
          <GradientWaveText 
            text="ABOUT ME" 
            className="text-3xl md:text-7xl font-black tracking-tighter cursor-target w-max"
            fromColor="#ff007f" 
            viaColor="#7f00ff" 
            toColor="#00ffff"
            speed="4s" // Moving slightly faster

             
          />

           <div className="grid grid-cols-2 gap-2">
            <ListAbout q = "NAME"  a = "Chum Sivfong" />
            <ListAbout q = "Hometown"  a = "SiemReap" />
            <ListAbout q = "Current Address"  a = "Phnom Penh , Cambodia" />
            <ListAbout q = "Education"  a = "Computer Science" />
            <ListAbout q = "High School Rank"  a = "Grade B" />
            <ListAbout q = "Skills"  a = "Web Developer, Frotend developer" />
           </div>

           
          <div className="pt-4">
          <GradientWaveText 
            text="MY CORE SKILLS" 
            className="text-xl font-black tracking-tighter"
            fromColor="#ff007f" 
            viaColor="#7f00ff" 
            toColor="#00ffff"
            speed="4s" // Moving slightly faster
             
          />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-1">
              {skills.map((group, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">{group.category}</span>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {group.items.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className=" cursor-target px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-medium rounded-md transition-colors"
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
}