/**
 * @file ServicesSection.tsx
 * @description Services grid with gradient accents and animations
 * 
 * WHY: Showcases services with visual appeal using gradients.
 *      Card hover effects create interactivity and engagement.
 * 
 * WHAT: Grid of service cards with gradient icons and borders.
 * WHERE: Rendered on the Services tab/page.
 */

import { services } from "@/data";
import { MESSAGES, SECTION_NUMBERS, SECTION_LABELS, GRADIENTS } from "@/constants";
import GradientText from "@/components/ui/GradientText";
import GradientBackground from "@/components/ui/GradientBackground";

const ServicesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <GradientBackground variant="glow" opacity={40} />
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/30 bg-card/80 backdrop-blur-sm mb-6">
            <span 
              className="w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center"
              style={{ background: GRADIENTS.primary }}
            >
              {SECTION_NUMBERS.services}
            </span>
            <span className="text-primary font-medium text-sm">{SECTION_LABELS.services}</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            <GradientText>{MESSAGES.services.title}</GradientText>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            {MESSAGES.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 border border-border/60 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient icon background */}
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{ background: GRADIENTS.primarySubtle }}
              >
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              
              {/* Gradient line on hover */}
              <div 
                className="h-0.5 w-0 group-hover:w-full mt-4 transition-all duration-500 rounded-full"
                style={{ background: GRADIENTS.primary }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
