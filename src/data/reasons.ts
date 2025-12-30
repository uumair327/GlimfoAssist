/**
 * @file reasons.ts
 * @description Reasons to choose GlimfoAssist (USPs/differentiators)
 * 
 * WHY: Highlights unique selling propositions and competitive advantages.
 *      These reasons address the "why us" question and help convert
 *      visitors who are comparing options. Separated for easy updates
 *      as business differentiators evolve.
 * 
 * WHAT: Array of reason objects with icon, title, and description.
 * WHERE: Rendered by WhyChooseSection as feature cards.
 * WHO: Marketing team for positioning, sales for value proposition.
 */

import { Target, Users, FileCheck, Zap, MessageCircle, HeadphonesIcon, LucideIcon } from "lucide-react";

export interface Reason {
  /** Lucide icon representing the benefit */
  icon: LucideIcon;
  /** Short benefit title */
  title: string;
  /** Explanation of the benefit */
  description: string;
}

export const reasons: Reason[] = [
  {
    icon: Target,
    title: "Technology-Only Focus",
    description: "No non-tech dilution. We specialize exclusively in CS, IT, and emerging technology domains.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Engineers & researchers with hands-on industry and academic experience.",
  },
  {
    icon: FileCheck,
    title: "Original Deliverables",
    description: "100% plagiarism-free work written from scratch and thoroughly checked.",
  },
  {
    icon: Zap,
    title: "Working Implementations",
    description: "Practical, working solutions that demonstrate applicability.",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description: "Transparent process with regular updates and timely delivery.",
  },
  {
    icon: HeadphonesIcon,
    title: "Post-Delivery Support",
    description: "Continued assistance after delivery to ensure your success.",
  },
];
