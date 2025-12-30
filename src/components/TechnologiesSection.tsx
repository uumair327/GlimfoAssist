/**
 * @file TechnologiesSection.tsx
 * @description Tech stack with gradient tag styling
 * 
 * WHY: Showcases expertise with gradient-highlighted tags.
 *      Interactive hover effects engage visitors.
 * 
 * WHAT: Two-column layout with gradient tech tags.
 * WHERE: Rendered on the Services tab/page.
 */

import { technologies, tools } from "@/data";
import { MESSAGES, SECTION_NUMBERS, SECTION_LABELS, GRADIENTS } from "@/constants";
import GradientText from "@/components/ui/GradientText";
import GradientBackground from "@/components/ui/GradientBackground";

const TechnologiesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <GradientBackground variant="mesh" opacity={40} />
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Technologies */}
          <div className="animate-fade-in-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/30 bg-card/80 backdrop-blur-sm mb-6">
              <span 
                className="w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center"
                style={{ background: GRADIENTS.primary }}
              >
                {SECTION_NUMBERS.technologies}
              </span>
              <span className="text-primary font-medium text-sm">{SECTION_LABELS.technologies}</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
              <GradientText>{MESSAGES.technologies.title}</GradientText>
            </h2>

            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="group relative px-4 py-2.5 rounded-full bg-card/90 border border-border/60 text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-default hover:scale-105 hover:-translate-y-0.5 animate-scale-in"
                  style={{ animationDelay: `${index * 30}ms` }}
                >
                  {tech}
                  {/* Gradient glow on hover */}
                  <span 
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity"
                    style={{ background: GRADIENTS.primary }}
                  />
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="animate-fade-in-right">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/30 bg-card/80 backdrop-blur-sm mb-6">
              <span 
                className="w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center"
                style={{ background: GRADIENTS.primary }}
              >
                {SECTION_NUMBERS.tools}
              </span>
              <span className="text-primary font-medium text-sm">{SECTION_LABELS.tools}</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
              <GradientText>{MESSAGES.technologies.toolsTitle}</GradientText>
            </h2>

            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="group relative px-4 py-2.5 rounded-full bg-card/90 border border-border/60 text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-default hover:scale-105 hover:-translate-y-0.5 animate-scale-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {tool}
                  <span 
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity"
                    style={{ background: GRADIENTS.primary }}
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
