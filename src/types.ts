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

export type ActiveSection = "home" | "about" | "services" | "contact";
