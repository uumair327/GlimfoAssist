/**
 * @file ContactSection.tsx
 * @description Contact form with gradient styling
 * 
 * WHY: Primary conversion point with gradient accents for visual appeal.
 *      Form styling maintains brand consistency.
 * 
 * WHAT: Two-column layout with gradient-styled form.
 * WHERE: Rendered on the Contact tab/page.
 */

import { useState } from "react";
import { Mail, MessageCircle, Upload, ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { 
  MESSAGES, 
  SECTION_NUMBERS, 
  SECTION_LABELS, 
  CONTACT_INFO, 
  SERVICE_OPTIONS,
  APP_CONFIG,
  BRAND,
  GRADIENTS
} from "@/constants";
import GradientText from "@/components/ui/GradientText";
import GradientBackground from "@/components/ui/GradientBackground";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    details: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.service || !formData.details) {
      toast.error(MESSAGES.toast.validationError);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error(MESSAGES.toast.emailError);
      return;
    }
    setIsSubmitting(true);
    try {
      const htmlContent = buildHtmlContent();
      const textContent = buildTextContent();
      const emailPromises = CONTACT_INFO.emails.map((to) =>
        fetch(APP_CONFIG.apiEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            to,
            subject: `New Project Requirement - ${formData.service} from ${formData.name}`,
            text: textContent,
            html: htmlContent,
            replyTo: formData.email, // Allow direct reply to submitter
          }),
        })
      );
      const responses = await Promise.all(emailPromises);
      if (responses.every((res) => res.ok)) {
        toast.success(MESSAGES.toast.success);
        setFormData({ name: "", email: "", service: "", details: "" });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error(MESSAGES.toast.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const buildHtmlContent = () => `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #f97316; margin-bottom: 20px;">New Project Requirement</h2>
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Service:</strong> ${formData.service}</p>
        <p><strong>Details:</strong></p>
        <p style="white-space: pre-wrap; background: white; padding: 15px; border-radius: 4px;">${formData.details}</p>
      </div>
      <p style="margin-top: 20px; color: #666; font-size: 12px;">From ${BRAND.name} contact form.</p>
    </div>
  `;

  const buildTextContent = () => `
New Project Requirement

Name: ${formData.name}
Email: ${formData.email}
Service: ${formData.service}

Details:
${formData.details}

---
From ${BRAND.name} contact form.
  `;

  return (
    <section className="py-24 relative overflow-hidden">
      <GradientBackground variant="mesh" opacity={40} />
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/30 bg-card/80 backdrop-blur-sm mb-6">
              <span 
                className="w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center"
                style={{ background: GRADIENTS.primary }}
              >
                {SECTION_NUMBERS.contact}
              </span>
              <span className="text-primary font-medium text-sm">{SECTION_LABELS.contact}</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight">
              <GradientText>{MESSAGES.contact.title[0]}</GradientText>
              <br />
              <span className="text-white">{MESSAGES.contact.title[1]}</span>
            </h2>
            
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
              {MESSAGES.contact.subtitle}
            </p>

            {/* Contact Options */}
            <div className="mt-8 space-y-4">
              <a 
                href={`mailto:${CONTACT_INFO.primaryEmail}`} 
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/60 hover:border-primary/40 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10"
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: GRADIENTS.primarySubtle }}
                >
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{MESSAGES.contact.emailLabel}</div>
                  <div className="text-sm text-muted-foreground">{CONTACT_INFO.emails.join(" | ")}</div>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground ml-auto group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </a>
              
              <a 
                href={`tel:${CONTACT_INFO.primaryPhone}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/60 hover:border-primary/40 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10"
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: GRADIENTS.primarySubtle }}
                >
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{MESSAGES.contact.phoneLabel}</div>
                  <div className="text-sm text-muted-foreground">{CONTACT_INFO.phones.join(" | ")}</div>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground ml-auto group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="bg-card rounded-2xl p-8 border border-border/60 animate-fade-in-right hover:border-primary/30 transition-colors">
            <h3 className="text-xl font-display font-semibold text-foreground mb-6">
              {MESSAGES.contact.formTitle}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border/60 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" 
                  placeholder={MESSAGES.form.namePlaceholder} 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border/60 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" 
                  placeholder={MESSAGES.form.emailPlaceholder} 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Service Required</label>
                <select 
                  name="service" 
                  value={formData.service} 
                  onChange={handleChange} 
                  required 
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border/60 text-foreground focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">{MESSAGES.form.servicePlaceholder}</option>
                  {SERVICE_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Project Details</label>
                <textarea 
                  name="details" 
                  value={formData.details} 
                  onChange={handleChange} 
                  required 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border/60 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none" 
                  placeholder={MESSAGES.form.detailsPlaceholder} 
                />
              </div>
              
              {/* Gradient submit button */}
              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full inline-flex items-center justify-center gap-2 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ background: GRADIENTS.primary }}
              >
                {isSubmitting ? (
                  <><Loader2 className="w-5 h-5 animate-spin" />{MESSAGES.contact.submittingButton}</>
                ) : (
                  <><Upload className="w-5 h-5" />{MESSAGES.contact.submitButton}</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
