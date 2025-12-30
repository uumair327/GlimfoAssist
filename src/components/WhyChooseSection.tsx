/**
 * @file WhyChooseSection.tsx
 * @description USPs section with gradient cards
 * 
 * WHY: Highlights differentiators with gradient accents.
 *      Visual consistency reinforces brand identity.
 * 
 * WHAT: Grid of benefit cards with gradient styling.
 * WHERE: Rendered on the About tab/page.
 */

import { reasons } from "@/data";
import { MESSAGES, SECTION_NUMBERS, SECTION_LABELS, GRADIENTS } from "@/constants";
import GradientText from "@/components/ui/GradientText";
import GradientBackground from "@/components/ui/GradientBackground";

const WhyChooseSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-card/50">
      <GradientBackground variant="mesh" opacity={30} />
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/30 bg-background/80 backdrop-blur-sm mb-6">
            <span 
              className="w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center"
              style={{ background: GRADIENTS.primary }}
            >
              {SECTION_NUMBERS.whyUs}
            </span>
            <span className="text-primary font-medium text-sm">{SECTION_LABELS.whyUs}</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold">
            <GradientText>{MESSAGES.whyChoose.title}</GradientText>
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-background rounded-2xl p-6 border border-border/60 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                style={{ background: GRADIENTS.primarySubtle }}
              >
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
