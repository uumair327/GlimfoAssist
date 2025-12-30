/**
 * @file steps.ts
 * @description Process steps data for the How It Works section
 * 
 * WHY: Defines the customer journey from inquiry to delivery.
 *      Clear process steps build trust by showing transparency and
 *      setting expectations. Separating this data allows easy
 *      process updates without UI changes.
 * 
 * WHAT: Array of step objects with icon, number, title, and description.
 * WHERE: Rendered by HowItWorksSection as a visual process flow.
 * WHO: Operations team for process definition, UX for flow optimization.
 */

import { Upload, Users, Code, CheckCircle, Send, LucideIcon } from "lucide-react";

export interface Step {
  /** Lucide icon representing the step */
  icon: LucideIcon;
  /** Step number for visual ordering (e.g., "01", "02") */
  number: string;
  /** Step name displayed as heading */
  title: string;
  /** Brief explanation of what happens in this step */
  description: string;
}

export const steps: Step[] = [
  {
    icon: Upload,
    number: "01",
    title: "Requirement Submission",
    description: "Share your topic, guidelines, or problem statement with us.",
  },
  {
    icon: Users,
    number: "02",
    title: "Analysis & Planning",
    description: "We assign the right tech expert to understand your needs.",
  },
  {
    icon: Code,
    number: "03",
    title: "Development",
    description: "Writing, coding, documentation, or assignment solution begins.",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Review & Quality Check",
    description: "Plagiarism check, technical validation, and quality assurance.",
  },
  {
    icon: Send,
    number: "05",
    title: "Delivery",
    description: "Final files delivered with post-delivery support included.",
  },
];
