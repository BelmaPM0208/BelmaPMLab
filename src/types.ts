export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Used to dynamically choose Lucide icons
  deliverables: string[];
  growthFocus: string; // Specific value proposition
  badge?: string; // Optional highlight badge
  terms?: string; // Payment terms or execution details
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
  newsletter: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarChar: string;
  content: string;
  impactMetric: string;
  impactLabel: string;
  secondaryImpactMetric?: string;
  secondaryImpactLabel?: string;
  category: "SaaS Product Led Growth" | "Agile Roadmap Delivery" | "Operational Systems";
  rating: number;
  websiteUrl?: string;
}

export type ActiveSection = "home" | "about" | "services" | "testimonials" | "contact";

export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  category: string;
  diagnostic: string;
  strategy: string;
  outcome: string;
  metrics: {
    value: string;
    label: string;
    detail: string;
  }[];
}

export type ActiveSection = "home" | "about" | "services" | "case-studies" | "testimonials" | "contact";
