/**
 * @file Footer.tsx
 * @description Footer with gradient logo
 * 
 * WHY: Consistent branding with gradient logo in footer.
 *      Reinforces brand identity at page end.
 * 
 * WHAT: Simple footer with gradient-styled logo.
 * WHERE: Rendered at the bottom of every page.
 */

import { BRAND, MESSAGES } from "@/constants";
import GradientText from "@/components/ui/GradientText";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/60">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Gradient Logo */}
          <div className="text-3xl md:text-4xl font-display font-bold">
            <span className="text-foreground">{BRAND.nameParts.first}</span>
            <GradientText>{BRAND.nameParts.second}</GradientText>
          </div>
          
          <p className="text-sm text-muted-foreground">
            {MESSAGES.footer.copyright}
          </p>

          <div className="flex items-center gap-6">
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
