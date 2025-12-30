/**
 * @file AboutSection.tsx
 * @description About section with gradient stats and animations
 * 
 * WHY: Builds trust with gradient-highlighted statistics.
 *      Visual hierarchy guides attention to key metrics.
 * 
 * WHAT: Two-column layout with description and gradient stat cards.
 * WHERE: Rendered on the About tab/page.
 */

import { Users, Target, Award } from "lucide-react";
import { MESSAGES, SECTION_NUMBERS, SECTION_LABELS, GRADIENTS } from "@/constants";
import GradientText from "@/components/ui/GradientText";
import GradientBackground from "@/components/ui/GradientBackground";

const iconMap = [Users, Target, Award];

const AboutSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-card/50">
      <GradientBackground variant="radial" opacity={30} />
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/30 bg-background/80 backdrop-blur-sm mb-6">
              <span 
                className="w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center"
                style={{ background: GRADIENTS.primary }}
              >
                {SECTION_NUMBERS.about}
              </span>
              <span className="text-primary font-medium text-sm">{SECTION_LABELS.about}</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight">
              {MESSAGES.about.title[0]}
              <br />
              <GradientText>{MESSAGES.about.title[1]}</GradientText>
            </h2>

            <p className="mt-6 text-muted-foreground leading-relaxed">
              {MESSAGES.about.description}
            </p>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              {MESSAGES.about.mission}
            </p>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {MESSAGES.about.stats.map((stat, index) => {
              const Icon = iconMap[index];
              return (
                <div
                  key={index}
                  className="group bg-background rounded-2xl p-6 border border-border/60 text-center hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Gradient icon circle */}
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                    style={{ background: GRADIENTS.primarySubtle }}
                  >
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  {/* Gradient stat number */}
                  <GradientText className="text-3xl font-display font-bold">
                    {stat.value}
                  </GradientText>
                  
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
