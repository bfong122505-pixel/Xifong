import './App.css'
import Header from './component/header'
import Lightning from './GlitchText';
import HomeHero from './component/homeHero'
import SlideCodeLanguage from "./component/slideCodeLanguage";
import AboutSection from './component/About'
import TargetCursor from './component/Cursor';
import ContactSection from './component/ContactPage'
import ScrollReveal from './component/ScrollReveal' // IMPORT THE WRAPPER

function App() {
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
      <div className="w-full relative h-207 md:h-180 bg-[#120F17] z-10 overflow-hidden">
        <HomeHero className="z-1" />
        <Lightning hue={260} xOffset={0} speed={1} intensity={1} size={1} className="z-20" />
      </div>

      {/* --- APPLIED TO SLIDER --- */}
      <ScrollReveal distance="20px" duration="600ms">
        <SlideCodeLanguage className="relative m-1" />
      </ScrollReveal>
      
      {/* --- APPLIED TO ABOUT SECTION --- */}
      <ScrollReveal distance="50px" duration="900ms">
        <AboutSection />
      </ScrollReveal>

      {/* --- APPLIED TO CONTACT SECTION --- */}
      <ScrollReveal distance="60px" duration="1000ms" delay="100ms">
        <div className="h-fit w-full">
          <ContactSection />
        </div>
      </ScrollReveal>

      {/* Footer */}
      <hr className="border-neutral-900" />
      <div className="text-center p-5 bg-[#0a0710] text-sm text-neutral-500 font-medium">
        © 2026 Chum Sivfong. All rights reserved.
      </div>
      
    </div>
  )
}

export default App