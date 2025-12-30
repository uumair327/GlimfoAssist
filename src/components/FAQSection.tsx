/**
 * @file FAQSection.tsx
 * @description FAQ accordion with gradient styling
 * 
 * WHY: Addresses concerns with visually appealing accordion.
 *      Gradient accents maintain brand consistency.
 * 
 * WHAT: Accordion with gradient-styled items.
 * WHERE: Rendered on the How It Works tab/page.
 */

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data";
import { MESSAGES, SECTION_NUMBERS, SECTION_LABELS, GRADIENTS } from "@/constants";
import GradientText from "@/components/ui/GradientText";
import GradientBackground from "@/components/ui/GradientBackground";

const FAQSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-card/50">
      <GradientBackground variant="glow" opacity={30} />
      
      <div className="relative z-10 max-w-[800px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/30 bg-background/80 backdrop-blur-sm mb-6">
            <span 
              className="w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center"
              style={{ background: GRADIENTS.primary }}
            >
              {SECTION_NUMBERS.faq}
            </span>
            <span className="text-primary font-medium text-sm">{SECTION_LABELS.faq}</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold">
            <GradientText>{MESSAGES.faq.title}</GradientText>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background rounded-xl border border-border/60 px-6 hover:border-primary/40 transition-all duration-300 animate-fade-in-up data-[state=open]:shadow-lg data-[state=open]:shadow-primary/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5 hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
