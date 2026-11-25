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

export interface CaseStudyHighlight {
  value: string;
  label: string;
  detail: string;
}

export interface CaseStudyFrameworkStep {
  stepLabel?: string;
  title: string;
  description: string;
  iconName?: "Compass" | "Users" | "GitMerge" | "BarChart3";
  tone?: "challenge" | "neutral" | "positive";
}

export interface CaseStudyPhase {
  number: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  calloutLabel: string;
  calloutText: string;
  highlightTone?: boolean;
}

export interface CaseStudyRecognition {
  heading: string;
  quote: string;
  author: string;
  roles: string[];
  source: string;
  rating?: number;
  clarification?: string;
}

export interface CaseStudyMetadataItem {
  label: string;
  value: string;
}

export interface CaseStudySupportingContext {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  publication: string;
  published: string;
  articleTitle: string;
  buttonText: string;
  url: string;
  disclaimer?: string;
}

export interface CaseStudyPerformanceHighlights {
  heading: string;
  metrics: { value: string; description: string }[];
  caption: string;
}

export interface CaseStudy {
  id: string;
  number: string;
  projectLabel: string;
  category: string;
  title: string;
  subtitle: string;
  metadata?: CaseStudyMetadataItem[];
  introduction: string[];
  highlights: CaseStudyHighlight[];
  previewSummary?: string;
  previewHighlights?: CaseStudyHighlight[];
  visualFramework: {
    title: string;
    type: "pillars" | "journey" | "timeline";
    steps: CaseStudyFrameworkStep[];
    footerNote?: string;
  };
  phases: CaseStudyPhase[];
  supportingContextAfterPhaseIndex?: number;
  supportingContext?: CaseStudySupportingContext;
  performanceHighlights?: CaseStudyPerformanceHighlights;
  roleContribution?: string[];
  recognition?: CaseStudyRecognition;
  takeawayTitle?: string;
  takeaway: string[];
  competenciesHeading?: string;
  competencies: string[];
}

