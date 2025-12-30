/**
 * @file TestimonialsSection.tsx
 * @description Testimonials with gradient quote styling
 * 
 * WHY: Social proof with gradient accents for visual impact.
 *      Quote styling draws attention to client feedback.
 * 
 * WHAT: Grid of testimonial cards with gradient elements.
 * WHERE: Rendered on the About tab/page.
 */

import { Quote } from "lucide-react";
import { testimonials } from "@/data";
import { MESSAGES, SECTION_NUMBERS, SECTION_LABELS, GRADIENTS } from "@/constants";
import GradientText from "@/components/ui/GradientText";
import GradientBackground from "@/components/ui/GradientBackground";

const TestimonialsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <GradientBackground variant="glow" opacity={30} />
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/30 bg-card/80 backdrop-blur-sm mb-6">
            <span 
              className="w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center"
              style={{ background: GRADIENTS.primary }}
            >
              {SECTION_NUMBERS.testimonials}
            </span>
            <span className="text-primary font-medium text-sm">{SECTION_LABELS.testimonials}</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold">
            <GradientText>{MESSAGES.testimonials.title}</GradientText>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 border border-border/60 relative hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient quote icon */}
              <div 
                className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity"
                style={{ background: GRADIENTS.primary }}
              >
                <Quote className="w-5 h-5 text-white" />
              </div>
              
              <p className="text-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-3">
                {/* Gradient avatar placeholder */}
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ background: GRADIENTS.primary }}
                >
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
