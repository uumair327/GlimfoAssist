/**
 * @file Navbar.tsx
 * @description Navigation with gradient logo and CTA
 * 
 * WHY: Primary navigation with gradient branding for visual impact.
 *      Active state uses gradient for clear indication.
 * 
 * WHAT: Fixed header with gradient logo and styled nav items.
 * WHERE: Rendered at the top of every page.
 */

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BRAND, NAV_LINKS, MESSAGES, GRADIENTS } from "@/constants";
import { TabId } from "@/constants/navigation";
import GradientText from "@/components/ui/GradientText";

interface NavbarProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

const Navbar = ({ activeTab, onTabChange }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (id: TabId) => {
    onTabChange(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Gradient Logo */}
          <button 
            onClick={() => onTabChange("home")} 
            className="text-3xl md:text-4xl font-display font-bold"
          >
            <span className="text-foreground">{BRAND.nameParts.first}</span>
            <GradientText>{BRAND.nameParts.second}</GradientText>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm transition-all duration-300 ${
                  activeTab === link.id 
                    ? "text-primary font-medium" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeTab === link.id ? (
                  <GradientText>{link.name}</GradientText>
                ) : (
                  link.name
                )}
              </button>
            ))}
          </div>

          {/* Gradient CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => onTabChange("contact")}
              className="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-full font-medium text-sm hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
              style={{ background: GRADIENTS.primary }}
            >
              {MESSAGES.cta.getStarted}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/40 animate-fade-in-down">
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left py-2 transition-colors ${
                  activeTab === link.id 
                    ? "text-primary font-medium" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("contact")}
              className="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-full font-medium text-sm mt-4"
              style={{ background: GRADIENTS.primary }}
            >
              {MESSAGES.cta.getStarted}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
