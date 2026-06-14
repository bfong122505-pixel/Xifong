import React from 'react';
import FloatingRibbonText from './Textan'
import AnimatedSocialCard from './socailbox'
import ScrollReveal from './ScrollReveal' // IMPORT THE WRAPPER
export default function ContactSection() {
  return (
    <section id="contact" className="bg-slate-900 text-slate-100 py-20 px-6">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        
        {/* Intro Text */}
        <div className="space-y-4">
        <FloatingRibbonText 
          text="Hiring Me"
          className="text-6xl md:text-8xl font-extrabold tracking-tighter"
          speed="3.5s"
          waveHeight="20px"
          staggerDelay={0.1}
        />
          <p className="text-slate-400 leading-relaxed max-w-xl mx-auto">
            Have a project in mind, a question, or just want to say hi? Feel free to reach out. 
            As a web developer, I'm always open to discussing new opportunities and bringing digital ideas to life.
          </p>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
          
          {/* Telegram */}
 
           <ScrollReveal distance="20px" duration="600ms">
           <AnimatedSocialCard 
            link="https://t.me/Sivfong_chum"
            platform="Telegram"
            account="@Sivfong_chum"
            gradientColors="from-cyan-50 to-cyan-500"
            icon={(
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m22 2-7 20-4-9-9-4Z"/>
                <path d="M22 2 11 13"/>
              </svg>
            )}
            />
            
           </ScrollReveal>
          

          {/* Facebook */}
          <ScrollReveal distance="20px" duration="600ms">

          <AnimatedSocialCard 
            link="https://web.facebook.com/profile.php?id=61580870189832"
            platform="Facebook"
            account="Rafael Sivfong"
            gradientColors="from-blue-50 to-blue-500"
            icon={(
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
            )}
            />
            </ScrollReveal>
         

          {/* Phone */}
          <ScrollReveal distance="20px" duration="600ms">

          <AnimatedSocialCard 
          link="tel:+8550964396354"
          platform="Phone"
          account="+855 96 439 6354"
          gradientColors="from-green-50  to-green-500"
          icon = {(
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>)}
        />
</ScrollReveal>
         
        
          {/* Gmail */}
          <ScrollReveal distance="20px" duration="600ms">
          <AnimatedSocialCard 
          link="mailto:sivfongchum@gmail.com"
          platform="Gmail"
          account="sivfongchum@gmail.com"
          gradientColors="from-rose-50   to-rose-500"
        />
            
           </ScrollReveal>
         

        </div>
      </div>
    </section>
  );
}