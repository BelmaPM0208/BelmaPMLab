import { Service } from "./types";

export const SERVICES_DATA: Service[] = [
  {
    id: "strategy-roadmap",
    title: "Product Strategy & Roadmap",
    description: "A focused strategic engagement designed to bring clarity and direction to your product. I assess your current product, customer needs, market opportunities, and business objectives to develop an actionable product strategy and prioritized roadmap that your team can confidently execute.",
    iconName: "Compass",
    deliverables: [
      "Product assessment, customer insights, and market analysis",
      "Product vision, strategic objectives, and success metrics",
      "Feature prioritization and actionable product roadmap"
    ],
    growthFocus: "A clear product strategy, actionable roadmap, and focused execution aligned with your business goals",
    badge: "Strategic Deliverable",
    terms: "50% payment in advance, 50% after the strategy is delivered"
  },
  {
    id: "retainer",
    title: "Fractional Product Management",
    description: "Hands-on fractional product management tailored to your business needs. I work as an extension of your team, taking ownership of product priorities, aligning stakeholders, and guiding development from strategy to execution, without the commitment of a full-time hire.",
    iconName: "Activity",
    deliverables: [
       "Own and manage the product roadmap, prioritize initiatives, and align development efforts with business objectives",
       "Lead continuous product discovery, analyze customer feedback, and track key product performance metrics",
       "Collaborate with cross-functional teams, facilitate product planning, and drive focused execution and continuous improvement"
    ],
    growthFocus: "Ongoing product ownership, strategic alignment, and hands-on execution",
    badge: "Flagship Service",
    terms: "3–6 month retainer tailored to your team's needs, with the option to extend"
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
  philosophy: "I use data to understand how customers interact with your product, identify growth opportunities, and turn insights into practical strategies. I also use AI to help teams work smarter and move faster.",
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
    { title: "Product Psychology Specialization", organization: "Growth.Design" },
    { title: "AIC™ - AI Micro-Certification", organization: "Product School" },
    { title: "Cyber Security Fundamentals", organization: "Shop Circle Training" },
    { title: "Web Development Fundamentals", organization: "KFC Center" }
  ],
  bioText: [
    "I help B2B SaaS companies and founders bring clarity, structure, and strategic direction to their products through fractional product management and product strategy." 
    "Whether you need an experienced product manager to work alongside your team, define your product vision, prioritize your roadmap, or navigate complex product decisions, I bring the expertise and hands-on support you need without the commitment of a full-time hire." 
    "My approach combines customer discovery, market understanding, business objectives, and data-driven decision-making to ensure your team is building the right things for the right reasons. I bridge the gap between business strategy, customer needs, and product development, helping your team stay aligned, focused, and accountable for meaningful outcomes. Every business is unique, which is why I adapt my approach to your company's needs, maturity, and ambitions. From defining your product strategy and validating new opportunities to managing day-to-day product activities and improving existing products, I work as an extension of your team. No unnecessary complexity, generic frameworks, or strategies that sit in a presentation. Just clear direction, practical solutions, and hands-on execution that creates lasting value. Ready to bring more clarity and focus to your product? Let's book a call. ",
     
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
