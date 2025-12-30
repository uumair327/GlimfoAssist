/**
 * @file HeroSection.tsx
 * @description Landing page hero with gradients and animations
 * 
 * WHY: First impression is critical for conversion. Gradients and
 *      animations create a premium, modern feel that engages visitors.
 * 
 * WHAT: Full-height hero with gradient text, animated elements, and CTA.
 * WHERE: Rendered on the Home tab/page.
 */

import { CheckCircle, Upload } from "lucide-react";
import { MESSAGES, GRADIENTS } from "@/constants";
import { TabId } from "@/constants/navigation";
import GradientText from "@/components/ui/GradientText";
import GradientBackground from "@/components/ui/GradientBackground";

interface HeroSectionProps {
  onNavigate: (tab: TabId) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Gradient mesh background */}
      <GradientBackground variant="mesh" opacity={60} />
      
      {/* Animated gradient orbs */}
      <div 
        className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-20"
        style={{ background: GRADIENTS.primary }}
      />
      <div 
        className="absolute bottom-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse opacity-15"
        style={{ background: GRADIENTS.accent, animationDelay: "1s" }}
      />

      {/* SVG curves with gradient */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="heroGradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="hsl(24, 95%, 53%)" stopOpacity="0.8" />
            <stop offset="50%" stopColor="hsl(35, 100%, 60%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(45, 100%, 65%)" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="40" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M -200 800 Q 400 200, 900 400 Q 1400 600, 1600 300 Q 1800 100, 2100 200"
          fill="none"
          stroke="url(#heroGradient)"
          strokeWidth="250"
          filter="url(#glow)"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/30 bg-card/80 backdrop-blur-sm mb-8 hover:border-primary/50 transition-colors">
              <span className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-amber-400 text-primary-foreground text-xs font-bold flex items-center justify-center">
                ✓
              </span>
              <span className="text-primary font-medium text-sm">{MESSAGES.hero.badge}</span>
            </div>

            {/* Heading with gradient */}
            <h1 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-display font-bold leading-[1.1] tracking-tight">
              <span className="text-foreground">{MESSAGES.hero.title[0]}</span>
              <br />
              <GradientText variant="primary" className="animate-gradient bg-[length:200%_auto]">
                {MESSAGES.hero.title[1]}
              </GradientText>
              <br />
              <span className="text-white">{MESSAGES.hero.title[2]}</span>
            </h1>
            <span className="sr-only">{MESSAGES.hero.seoText}</span>

            {/* Subtitle */}
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              {MESSAGES.hero.subtitle}
            </p>

            {/* Features */}
            <div className="mt-8 grid grid-cols-2 gap-3 max-w-lg">
              {MESSAGES.hero.features.map((feature, index) => (
                <div 
                  key={feature} 
                  className="flex items-center gap-2 text-sm text-muted-foreground group animate-fade-in-left"
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button with gradient */}
            <div className="mt-10 animate-fade-in-up" style={{ animationDelay: "600ms" }}>
              <button
                onClick={() => onNavigate("contact")}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-[15px] text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 group"
                style={{ background: GRADIENTS.primary }}
              >
                <Upload className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                {MESSAGES.hero.cta}
              </button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="flex justify-center lg:justify-end pt-8 lg:pt-0 animate-fade-in-right" style={{ animationDelay: "300ms" }}>
            <div className="relative animate-float">
              {/* Gradient glow behind image */}
              <div 
                className="absolute -inset-8 rounded-[40px] blur-3xl opacity-30"
                style={{ background: GRADIENTS.primary }}
              />
              
              <div className="relative w-[340px] h-[340px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] rounded-[28px] overflow-hidden shadow-2xl border border-primary/20 hover:border-primary/40 transition-colors duration-500">
                <img
                  src="/image/new.png"
                  alt="Technology workspace"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay on image */}
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{ background: "linear-gradient(135deg, transparent 50%, hsl(24, 95%, 53%, 0.3) 100%)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
