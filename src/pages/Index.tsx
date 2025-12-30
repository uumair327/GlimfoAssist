import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ServicesPage from "./ServicesPage";
import HowItWorksPage from "./HowItWorksPage";
import ContactPage from "./ContactPage";
import { TabId } from "@/constants/navigation";
import { faqs } from "@/data";
import { BRAND } from "@/constants";

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabId>("home");

  useEffect(() => {
    // Scroll to top when tab changes
    window.scrollTo(0, 0);
  }, [activeTab]);

  useEffect(() => {
    // Add structured data for FAQ
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        ...faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        })),
        {
          "@type": "Question",
          "name": `What services does ${BRAND.name} offer?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `${BRAND.name} offers technical report writing, final year projects, dissertation and thesis writing, research paper writing, system design, documentation, and assignment help for technology-focused academic and professional work.`
          }
        },
        {
          "@type": "Question",
          "name": `How does ${BRAND.name} ensure quality?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `${BRAND.name} is powered by software engineers and technical writers with hands-on industry and academic experience. We provide 100% original, plagiarism-free work with complete documentation and code.`
          }
        }
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(faqSchema);
    script.id = "faq-schema";
    
    const existing = document.getElementById("faq-schema");
    if (existing) existing.remove();
    
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById("faq-schema");
      if (scriptToRemove) scriptToRemove.remove();
    };
  }, []);

  const renderPage = () => {
    switch (activeTab) {
      case "home":
        return <HomePage onNavigate={setActiveTab} />;
      case "about":
        return <AboutPage />;
      case "services":
        return <ServicesPage />;
      case "how-it-works":
        return <HowItWorksPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setActiveTab} />;
    }
  };

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      {renderPage()}
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
