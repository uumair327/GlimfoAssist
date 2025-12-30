/**
 * @file services.ts
 * @description Service offerings data for the Services section
 * 
 * WHY: Defines all services offered by GlimfoAssist in a structured format.
 *      Separating this data allows:
 *      - Easy addition/removal of services without touching UI code
 *      - Consistent service card rendering
 *      - Potential reuse in other contexts (pricing, comparison tables)
 * 
 * WHAT: Array of service objects with icon, title, and description.
 * WHERE: Rendered by ServicesSection component as service cards.
 * WHO: Business team for service definitions, marketing for descriptions.
 */

import { 
  FileText, 
  Code, 
  GraduationCap, 
  BookOpen, 
  Layers, 
  FileCode, 
  BookMarked, 
  Bug, 
  PenTool,
  LucideIcon
} from "lucide-react";

export interface Service {
  /** Lucide icon component for visual representation */
  icon: LucideIcon;
  /** Service name displayed as card heading */
  title: string;
  /** Brief description of what the service includes */
  description: string;
}

export const services: Service[] = [
  {
    icon: FileText,
    title: "Technical Report Writing",
    description: "Structured, clear, and technically accurate reports in CS, AI/ML, Data Science, IoT, Cybersecurity, Cloud Computing & more.",
  },
  {
    icon: Code,
    title: "Technical Projects",
    description: "End-to-end project support from idea to implementation. Working live projects with source code, reports, PPTs & GitHub setup.",
  },
  {
    icon: GraduationCap,
    title: "Dissertation",
    description: "Coverage includes problem statement, literature review, methodology & results.",
  },
  {
    icon: BookOpen,
    title: "Research Paper Writing",
    description: "Topic refinement, technical content writing, figures, tables, references & formatting as per journal/conference guidelines upto 20 pages.",
  },
  {
    icon: Layers,
    title: "System Design & Architecture",
    description: "High-level architecture, low-level component design, data flow & sequence diagrams. Ideal for startups & academic submissions.",
  },
  {
    icon: FileCode,
    title: "SRS, HLD & LLD Documentation",
    description: "Industry-standard Software Requirement Specification, High-Level Design & Low-Level Design documentation.",
  },
  {
    icon: BookMarked,
    title: "Code Documentation & Manuals",
    description: "Inline comments, API documentation, user & admin manuals, installation & deployment guides.",
  },
  {
    icon: Bug,
    title: "Project Review & Debugging",
    description: "Code review, refactoring, bug fixing, logic correction, performance optimization & enhancement suggestions.",
  },
  {
    icon: PenTool,
    title: "Assignment Help",
    description: "Programming, data structures, algorithms, DBMS, OS, networks, AI/ML assignments with concept clarity & correct solutions.",
  },
];
