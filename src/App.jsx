import {
  TargetCursor,
  LightningCanvas,
  ScrollReveal,
  Header,
  Footer,
  HeroSection,
  TechSlider,
  ExperienceSection,
  AboutSection,
  ContactSection
} from './components';

export default function App() {
  return (
    <div className="h-full w-full bg-[#120F17]">
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />
   
      <Header className="z-[100]" />
      
      {/* Hero Section */}
      <div className="w-full relative h-210 md:h-180 bg-[#120F17] z-10 overflow-hidden">
        <HeroSection className="z-1" />
        <LightningCanvas hue={260} xOffset={0} speed={1} intensity={1} size={1} className="z-20" />
      </div>

      {/* Tech Stack Infinite Slider */}
      <ScrollReveal distance="20px" duration="600ms">
        <TechSlider className="relative m-1" />
      </ScrollReveal>
      
      {/* Experience & Projects Showcase */}
      <ScrollReveal>
        <ExperienceSection />
      </ScrollReveal>

      {/* About Section */}
      <ScrollReveal distance="50px" duration="900ms">
        <AboutSection />
      </ScrollReveal>

      {/* Contact Section */}
      <ScrollReveal distance="60px" duration="1000ms" delay="100ms">
        <div className="h-fit w-full">
          <ContactSection />
        </div>
      </ScrollReveal>

      {/* Footer */}
      <Footer />
    </div>
  );
}
