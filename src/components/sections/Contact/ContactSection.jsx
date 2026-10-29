import { FloatingRibbonText } from "../../common/FloatingRibbonText";
import { ScrollReveal } from "../../common/ScrollReveal";
import { SocialCard } from "./SocialCard";
import { contactData } from "../../../data/contact";

export const ContactSection = () => {
  const { heading, subheading, socials } = contactData;

  return (
    <section id="contact" className="bg-slate-900 text-slate-100 py-20 px-6">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        {/* Intro */}
        <div className="space-y-4">
          <FloatingRibbonText
            text={heading}
            className="text-6xl md:text-8xl font-extrabold tracking-tighter"
            speed="3.5s"
            waveHeight="20px"
            staggerDelay={0.1}
          />
          <p className="text-slate-400 leading-relaxed max-w-xl mx-auto">
            {subheading}
          </p>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
          {socials.map((social) => (
            <ScrollReveal key={social.id} distance="20px" duration="600ms">
              <SocialCard
                link={social.link}
                platform={social.platform}
                account={social.account}
                gradientColors={social.gradientColors}
                iconType={social.iconType}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

