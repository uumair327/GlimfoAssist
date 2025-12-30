/**
 * @file HowItWorksSection.tsx
 * @description Process steps with gradient timeline
 * 
 * WHY: Visual process flow with gradient accents guides users.
 *      Animated steps create engaging experience.
 * 
 * WHAT: Timeline with numbered steps and gradient styling.
 * WHERE: Rendered on the How It Works tab/page.
 */

import { steps } from "@/data";
import { MESSAGES, SECTION_NUMBERS, SECTION_LABELS, GRADIENTS } from "@/constants";
import GradientText from "@/components/ui/GradientText";
import GradientBackground from "@/components/ui/GradientBackground";

const HowItWorksSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-card/50">
      <GradientBackground variant="radial" opacity={30} />
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/30 bg-background/80 backdrop-blur-sm mb-6">
            <span 
              className="w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center"
              style={{ background: GRADIENTS.primary }}
            >
              {SECTION_NUMBERS.howItWorks}
            </span>
            <span className="text-primary font-medium text-sm">{SECTION_LABELS.howItWorks}</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold">
            <GradientText>{MESSAGES.howItWorks.title}</GradientText>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            {MESSAGES.howItWorks.subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Gradient connection line */}
          <div 
            className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 opacity-30"
            style={{ background: GRADIENTS.primary }}
          />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Gradient icon circle */}
                <div className="relative z-10 mx-auto mb-4">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center bg-background border-2 border-primary/50 group-hover:border-primary transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20"
                  >
                    <step.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  {/* Gradient glow on hover */}
                  <div 
                    className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity"
                    style={{ background: GRADIENTS.primary }}
                  />
                </div>

                {/* Gradient number */}
                <GradientText className="text-xs font-bold mb-2">
                  {step.number}
                </GradientText>

                <h3 className="text-base font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
