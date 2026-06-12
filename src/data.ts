import { Service } from "./types";

export const SERVICES_DATA: Service[] = [
  {
    id: "strategy-roadmap",
    title: "One-Time Strategy & AI-Enhanced Roadmap",
    description: "A tailored, high-fidelity strategic growth blueprint where I analyze your current funnel, pinpoint core friction spots, and leverage predictive AI tools to design a custom product strategy and roadmap.",
    iconName: "Compass",
    deliverables: [
      "Custom product growth strategic blueprint & AI prompt libraries",
      "User activation & cohort loop specifications",
      "AI-accelerated feature prioritization & execution roadmap"
    ],
    growthFocus: "Defined final deliverable supercharged by AI-driven scaling",
    badge: "Strategic Deliverable",
    terms: "50% payment in advance, 50% after the strategy is delivered"
  },
  {
    id: "retainer",
    title: "2-3 Month AI-Collaborative Retainer",
    description: "Active oversight and consulting support where I guide your in-house product and development teams, utilizing state-of-the-art AI productivity tools to quickly audit, oversee, and transition the defined growth strategy.",
    iconName: "Activity",
    deliverables: [
      "Agile steering & AI-powered implementation quality audits",
      "Onboarding telemetry metrics & cohort oversight",
      "Regular strategy syncs, loops optimization, and custom AI playbook workflows"
    ],
    growthFocus: "Active steering utilizing AI-co-piloted sprint execution",
    badge: "Retainer Model",
    terms: "Retainer can be extended upon request"
  },
  {
    id: "pmf-diagnostics",
    title: "AI-Powered PMF Engine",
    description: "A rigorous diagnostic framework focusing on validating product resonance, analyzing churn dynamics through AI pattern mapping, and aligning core feature value with organic market demand. Coming shortly.",
    iconName: "Trophy",
    deliverables: [
      "Market fit baseline & AI-driven churn diagnostics",
      "Retention curve validation checklists",
      "Ecosystem-wide strategic alignment plan"
    ],
    growthFocus: "Aligning product capabilities with automated market pulls",
    badge: "Coming Soon",
    terms: "Available soon — Book a discovery call to join the priority queue"
  }
];

export const BIOGRAPHY_DATA = {
  name: "Belma Čabaravdić H.",
  tagline: "AI-Powered Senior Product Manager & Growth Strategist",
  philosophy: "I dive deep into the analytics to align business goals with user performance, driving growth strategies and accelerating execution through advanced AI workflows.",
  experience: [
    {
      role: "Senior Product Manager",
      period: "Dec 2024 - Present | HulkApps / Shop Circle",
      achievements: [
        "Architect and direct SaaS application roadmap, scaling the core Shopify client base by 38% and overall Monthly Recurring Revenue (MRR) by 33%.",
        "Pioneered a tailored monetization and tiered pricing restructuring that achieved a continuous 27% MoM growth rate.",
        "Drove functional specifications and metrics validation for an innovative AI-powered 404 matching tool, minimizing latency and maximizing active checkout conversion.",
        "Manage agile rituals, prioritizing cross-platform backlog streams and cutting technical debt to improve overall performance metrics by 35%."
      ]
    },
    {
      role: "Product Manager",
      period: "Feb 2022 - Dec 2024 | HulkApps / Shop Circle",
      achievements: [
        "Earned rapid promotion to Senior Product Manager in recognition of high-impact leadership and team steering.",
        "Oversaw multi-disciplinary engineering squads, maintaining complete ownership over backlog refinement and user flow tracking.",
        "Facilitated 750%+ client acquisition growth through quantitative GTM strategies, scaling the active application score from 3.2★ to a pristine 4.7★."
      ]
    },
    {
      role: "Project Manager",
      period: "Nov 2021 - Feb 2022 | HulkApps / Shop Circle",
      achievements: [
        "Spearheaded systemic customer feedback audits to re-organize the front-line merchant support journey.",
        "Introduced operational enhancements that dropped customer inquiry volume by 35%, elevating customer satisfaction scores from 4.5★ to 4.7★."
      ]
    },
    {
      role: "Project Manager",
      period: "Nov 2020 - Nov 2021 | Hides & Skins, Inc.",
      achievements: [
        "Pioneered and executed the commercial launch of Bosnian-made products on Amazon FBA.",
        "Structured strategic international freight partnerships, ensuring absolute alignment with Ex/Im restrictions and custom regulations."
      ]
    },
    {
      role: "Administrative Manager",
      period: "Oct 2017 - Oct 2020 | Rebecca Oliver, Esq. (Remote)",
      achievements: [
        "Translated complex client claims and metrics into automated analytics charts, helping clear project blockages.",
        "Reduced administrative backlog and claims resolution cycle times by 15%, establishing standard loops that supported over 4,000 satisfied clients with 95% positive feedback."
      ]
    }
  ],
  credentials: [
    { title: "LLM - International Business Law", organization: "Tilburg University" },
    { title: "PSPO I - Professional Scrum Product Owner", organization: "Scrum.org" },
    { title: "Product Psychology Specialization", organization: "Product.Growth" },
    { title: "AIC™ - AI Micro-Certification", organization: "Product School" },
    { title: "Cyber Security Fundamentals", organization: "Shop Circle Training" },
    { title: "Web Development Fundamentals", organization: "King Fahd Cultural Center" }
  ],
  bioText: [
    "I help (B2B) SaaS companies grow their revenue using their own product and AI. By combining Product-Led Growth (PLG) with AI automation, I build simple systems that attract and keep users.",
    "Every business is unique, which is why I use a customized, AI-driven playbook to find exactly what's slowing you down. Together, we will stop the leaks: Find out why users leave and fix it. Smooth the journey: Make it easier for customers to adopt your product. Build a plan: Create a clear, profitable roadmap for your team. Ready to stop guessing and start growing? Let’s book a call."
  ]
};

import { Testimonial } from "./types";

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Alen Malkoč",
    role: "ex. CEO @ HulkApps / Shop Circle, currently Founder and CEO of Flyrank AI",
    company: "HulkApps / Shop Circle",
    avatarChar: "A",
    content: "Belma is a type of Product Manager who ties every product decision directly to data and business growth. While at HulkApps/Shop Circle, she re-defined our monetization strategy, resulting in an immediate 27% MoM revenue increase, and scaled our client base by 38%. She doesn't just manage a backlog; she understands how to build features that drive user adoption and real bottom-line revenue. Belma analyzed our support tickets, mapped out the friction points in our onboarding, and suggested a redesign that ultimately lowered our ticket volume by 35%. She spearheaded AI initiatives that vastly improved our merchant experience. Any startup/scale-up looking to unlock their next stage of growth would be lucky to have her strategic mind in their corner. And my favorite part of working with Belma was that she was never afraid to ask a question.",
    impactMetric: "+27% MoM",
    impactLabel: "Revenue Growth",
    secondaryImpactMetric: "-35%",
    secondaryImpactLabel: "Ticket Volume Drop",
    category: "SaaS Product Led Growth",
    rating: 5,
    websiteUrl: "https://shopcircle.co"
  },
  {
    id: "testimonial-2",
    name: "Belmin Nazifović",
    role: "Founder & CEO",
    company: "Hides & Skins",
    avatarChar: "B",
    content: "If you’re looking to scale a digital product fast, Belma PM Lab is the ultimate partner. Belma took our traditional craftsmanship brand and seamlessly transitioned us into the digital space, conceptualizing and launching two distinct e-commerce apps.\n\nShe took us from a handful of users to 700 in just two months, and blew past the 10,000-user mark by the end of the year, all while tripling our sales. Her strategic vision for high-conversion customer journeys and explosive user acquisition is unmatched. If you want real, measurable growth, work with Belma.",
    impactMetric: "10k+ Users",
    impactLabel: "User Base Growth",
    secondaryImpactMetric: "3x Sales",
    secondaryImpactLabel: "Revenue Tripled",
    category: "SaaS Product Led Growth",
    rating: 5,
    websiteUrl: "https://hidesandskins.ba/en"
  }
];
