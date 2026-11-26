import React, { useEffect } from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Compass,
  Users,
  GitMerge,
  BarChart3,
  Quote,
  Star,
  Target,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  Briefcase,
  ExternalLink,
  Newspaper,
} from "lucide-react";
import { CaseStudy } from "../types";

interface CaseStudiesProps {
  onBackToHome: () => void;
  onContactClick?: () => void;
  focusedStudyId?: string | null;
}

interface CaseStudiesPreviewProps {
  onSelectCaseStudy: (studyId: string) => void;
  onViewAll: () => void;
}

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: "case-study-1",
    number: "01",
    projectLabel: "01 / Product & Business Leadership",
    category: "Product Management & Business Leadership",
    title: "From Product Ownership to Business Unit Leadership",
    subtitle:
      "Managing product priorities, aligning cross-functional teams, and connecting product decisions with business performance at HulkApps.",
    introduction: [
      "During my time at HulkApps, I progressed from Project Manager to Senior Product Manager, taking on increasingly broad responsibilities across product management and business operations.",
      "My role extended beyond product ownership and roadmapping to include people management, cross-functional alignment, and profitability oversight for the product assets under my leadership.",
      "This experience strengthened my ability to approach product management from both a customer and a business perspective, connecting product decisions with broader organizational objectives.",
    ],
    highlights: [
      {
        value: "4.5 Years",
        label: "Professional Journey",
        detail: "Progression from Project Manager to Senior Product Manager.",
      },
      {
        value: "Product & Business Ownership",
        label: "Expanded Responsibilities",
        detail: "Product ownership, roadmapping, people management, and profitability oversight.",
      },
      {
        value: "Strategic Contribution",
        label: "Business Acquisition",
        detail: "Contributed to the acquisition journey of HulkApps by Shop Circle.",
      },
    ],
    visualFramework: {
      title: "Connecting Product Management with Business Leadership",
      type: "pillars",
      steps: [
        {
          stepLabel: "01",
          title: "Product Ownership",
          description: "Product direction and roadmapping.",
          iconName: "Compass",
        },
        {
          stepLabel: "02",
          title: "People Management",
          description: "Supporting and managing people within the business unit.",
          iconName: "Users",
        },
        {
          stepLabel: "03",
          title: "Cross-Functional Alignment",
          description: "Connecting business unit priorities with central teams.",
          iconName: "GitMerge",
        },
        {
          stepLabel: "04",
          title: "Business Performance",
          description: "Maintaining visibility over profitability and business objectives.",
          iconName: "BarChart3",
        },
      ],
    },
    phases: [
      {
        number: "Phase 01",
        title: "Growing into Product Ownership",
        subtitle: "From Project Management to Senior Product Manager",
        paragraphs: [
          "I joined HulkApps as a Project Manager and progressively developed into a Senior Product Manager role.",
          "As my responsibilities evolved, my focus expanded from project management into product ownership and roadmapping, alongside broader responsibilities within the business.",
          "This progression gave me a practical understanding of how product management connects planning, execution, people, and business objectives.",
        ],
        calloutLabel: "Key Learning",
        calloutText:
          "Product management requires more than managing individual projects. It involves understanding the broader direction of a product and its relationship with the business.",
      },
      {
        number: "Phase 02",
        title: "Product & Business Unit Management",
        subtitle: "Connecting Product Decisions with Organizational Objectives",
        paragraphs: [
          "My responsibilities extended across several aspects of managing one of HulkApps' key business units.",
          "Alongside product ownership and roadmapping, I was involved in people management, cross-functional alignment with central teams, and P&L oversight for the product assets under my leadership.",
          "This broader scope strengthened my understanding of the relationship between product priorities, organizational alignment, and financial performance.",
        ],
        calloutLabel: "Core Responsibility",
        calloutText:
          "Connecting product ownership with people, organizational priorities, and business profitability.",
      },
      {
        number: "Phase 03",
        title: "Strategic Business Contribution",
        subtitle: "Supporting Organizational Growth and Transition",
        paragraphs: [
          "During my time at HulkApps, I also contributed to the company's acquisition journey by Shop Circle.",
          "My involvement included participation in the early introductions, alongside my ongoing contribution as a member of the product and business leadership team.",
          "This experience reinforced the importance of collaboration, organizational trust, and the broader business context in which product teams operate.",
        ],
        calloutLabel: "Key Contribution",
        calloutText: "Supporting the organization during an important strategic business transition.",
        highlightTone: true,
      },
    ],
    recognition: {
      heading: "Professional Recognition",
      quote:
        "Her primary responsibilities extended beyond just product ownership and roadmapping. She managed many facets of running one of our key Business Units, including people management, cross-functional alignment with central teams, and P&L (profitability) oversight for the assets under her leadership.",
      author: "Alen Malkoc",
      roles: ["Founder / CEO, HulkApps", "Chief Revenue Officer, Shop Circle"],
      source: "Source: Professional letter of recommendation.",
    },
    takeaway: [
      "Effective product management extends beyond defining features and maintaining a roadmap.",
      "It requires understanding how product decisions influence customers, teams, operational priorities, and overall business performance.",
      "This experience shaped my approach to product management as a discipline that connects customer value, strategic direction, organizational alignment, and business objectives.",
    ],
    competenciesHeading: "Demonstrated Competencies",
    competencies: [
      "Product Ownership",
      "Product Roadmapping",
      "Product Management",
      "Business Unit Management",
      "People Management",
      "Cross-Functional Alignment",
      "P&L Oversight",
      "Business Leadership",
      "Strategic Collaboration",
    ],
  },
  {
    id: "case-study-2",
    number: "02",
    projectLabel: "02 / Product Launch & Market Expansion",
    category: "Product Launch & International Market Expansion",
    title: "Bringing Physical and Digital Products to the US Market",
    subtitle:
      "International market entry, post-launch e-commerce product management, and commercial execution at Hides and Skins.",
    metadata: [
      { label: "Company", value: "Hides and Skins" },
      { label: "Role", value: "Product & Project Manager" },
      { label: "Duration", value: "3 years and 11 months" },
      { label: "Target Market", value: "United States" },
    ],
    introduction: [
      "Before joining HulkApps, I spent nearly four years at Hides and Skins, working across product management, project management, and international e-commerce.",
      "During this time, my work spanned bringing a Bosnian-made physical product to the US market through Amazon FBA and stepping in just post-launch to manage two distinct e-commerce applications for selling leather goods across the United States.",
      "These initiatives required navigating complex market-entry requirements, platform restrictions, business objectives, and customer expectations while translating product ambitions into practical execution.",
      "The experience shaped my understanding of product management across both physical and digital products, particularly when operating within challenging commercial and regulatory environments.",
    ],
    highlights: [
      {
        value: "FBA Launch + 2 Apps",
        label: "Physical & Digital Scope",
        detail: "Launched a physical product through Amazon FBA and managed two distinct post-launch e-commerce applications.",
      },
      {
        value: "10,000+ Users",
        label: "Digital Product Adoption",
        detail: "Surpassed 10,000 users by the end of the year, as reported by the company's CEO.",
      },
      {
        value: "3× Sales",
        label: "Commercial Product Outcome",
        detail: "Sales tripled during the reported period, according to the company's CEO.",
      },
    ],
    previewSummary:
      "Nearly four years of product and project management experience at Hides and Skins, bringing a physical product to Amazon FBA and stepping in just post-launch to manage two distinct e-commerce applications serving the US market.",
    previewHighlights: [
      {
        value: "FBA Launch + 2 Apps",
        label: "Physical & Digital Scope",
        detail: "Physical launch and post-launch app management.",
      },
      {
        value: "10,000+ Users",
        label: "Digital Product Adoption",
        detail: "Reported year-end adoption.",
      },
      {
        value: "3× Sales",
        label: "Commercial Product Outcome",
        detail: "Reported commercial outcome.",
      },
    ],
    visualFramework: {
      title: "From Product Opportunity to Market Execution",
      type: "journey",
      steps: [
        {
          stepLabel: "Stage 1",
          title: "Market Opportunity",
          description: "Identifying opportunities to introduce physical and digital products to the US market.",
          tone: "neutral",
        },
        {
          stepLabel: "Stage 2",
          title: "Feasibility & Constraints",
          description: "Navigating international regulations, marketplace requirements, and commercial challenges.",
          tone: "neutral",
        },
        {
          stepLabel: "Stage 3",
          title: "Market Entry & Product Management",
          description: "Launching a physical product via Amazon FBA and managing two distinct post-launch e-commerce applications.",
          tone: "neutral",
        },
        {
          stepLabel: "Stage 4",
          title: "Commercial Outcomes",
          description: "Expanding market access, building a digital customer base, and supporting business performance.",
          tone: "positive",
        },
      ],
    },
    phases: [
      {
        number: "Phase 01",
        title: "International Market Entry & Amazon FBA Launch",
        subtitle: "Turning a Complex Market Opportunity into a Product Launch",
        paragraphs: [
          "One of the most challenging initiatives during my time at Hides and Skins was bringing a Bosnian-made product to the American market through Amazon's Fulfillment by Amazon (FBA) program.",
          "At the time, businesses operating from Bosnia and Herzegovina faced significant barriers to accessing international marketplaces, including restrictive platform requirements and complex international regulations.",
          "My work involved navigating these challenges and finding a viable pathway for bringing the product to the US market.",
          "Despite the complexity of the process, the product was successfully launched through Amazon FBA.",
          "This experience required a combination of problem-solving, persistence, project management, commercial understanding, and the ability to work within external constraints.",
        ],
        calloutLabel: "Key Achievement",
        calloutText:
          "Successfully bringing a Bosnian-made physical product to the US market through Amazon FBA despite significant market-entry barriers.",
      },
      {
        number: "Phase 02",
        title: "Digital Product Management & E-Commerce Operations",
        subtitle: "Stepping In Post-Launch to Manage Two Distinct E-Commerce Applications",
        paragraphs: [
          "Alongside the physical product initiative, I stepped in just post-launch to manage two distinct e-commerce applications designed to sell leather goods across the United States.",
          "The objective was to strengthen and grow digital sales channels that connected the company's physical product offering with an accessible online customer experience.",
          "My work combined product and project management responsibilities, connecting commercial objectives with the ongoing management and evolution of both digital products.",
          "Particular attention was given to how customers discovered products, navigated the purchasing experience, and interacted with the digital sales channels.",
          "This experience allowed me to develop a broader understanding of the relationship between digital product decisions, customer experience, and commercial performance.",
        ],
        calloutLabel: "Key Achievement",
        calloutText:
          "Managed two distinct post-launch e-commerce applications serving the US leather goods market.",
      },
      {
        number: "Phase 03",
        title: "Product Outcomes & Business Performance",
        subtitle: "Connecting Product Execution with Commercial Results",
        paragraphs: [
          "The digital product initiatives delivered meaningful commercial outcomes.",
          "According to the company's CEO, the user base expanded from a handful of users to 700 within two months and surpassed 10,000 users by the end of the year. Sales also tripled during the reported period.",
          "These results illustrate how disciplined product management, customer experience, and commercial objectives can work together to support business performance.",
          "For me, the experience reinforced the importance of approaching product management holistically, considering not only the product itself but also its market, customers, operational requirements, and business objectives.",
        ],
        calloutLabel: "Reported Outcome",
        calloutText:
          "More than 10,000 users by year-end and a threefold increase in sales.",
        highlightTone: true,
      },
    ],
    supportingContextAfterPhaseIndex: 0,
    supportingContext: {
      eyebrow: "Supporting Market Context",
      title: "Opening International Market Opportunities for Bosnian Businesses",
      paragraphs: [
        "In June 2021, Klix.ba reported on Amazon's decision to expand seller eligibility to Bosnia and Herzegovina, highlighting the barriers that local businesses had previously faced when accessing the marketplace.",
        "This provides additional context for the regulatory and commercial environment surrounding international e-commerce initiatives in Bosnia and Herzegovina.",
      ],
      publication: "Klix.ba",
      published: "June 15, 2021",
      articleTitle: "Bosanci i Hercegovci konačno mogu kupovati i prodavati na Amazonu",
      buttonText: "Read the Article",
      url: "https://www.klix.ba/biznis/bosanci-i-hercegovci-konacno-mogu-kupovati-i-prodavati-na-amazonu/210614150",
      disclaimer:
        "Referenced solely as supporting market context on international marketplace eligibility for businesses operating from Bosnia and Herzegovina.",
    },
    performanceHighlights: {
      heading: "Product Performance Highlights",
      metrics: [
        { value: "700 Users", description: "Within the first two months." },
        { value: "10,000+ Users", description: "By the end of the year." },
        { value: "3× Sales", description: "Reported commercial improvement." },
      ],
      caption: "Results reported by the CEO of Hides and Skins.",
    },
    recognition: {
      heading: "Founder & Executive Recognition",
      quote:
        "She took us from a handful of users to 700 in just two months, and blew past the 10,000-user mark by the end of the year, all while tripling our sales.",
      author: "CEO, Hides and Skins",
      roles: ["Founder & Executive Leadership"],
      source: "Professional Testimonial",
    },
    roleContribution: [
      "My responsibilities combined product management and project management across physical and digital product initiatives.",
      "Throughout my time at Hides and Skins, I worked on bringing a physical product to market, navigating external constraints, managing two distinct post-launch digital products, and connecting product execution with commercial objectives.",
      "The experience required adaptability, structured problem-solving, customer understanding, and the ability to translate business ambitions into practical product initiatives.",
    ],
    takeawayTitle: "Bringing Products to Market Requires More Than Product Development",
    takeaway: [
      "Successful product management requires an understanding of the wider environment in which a product operates.",
      "Market conditions, regulatory requirements, platform restrictions, customer expectations, and commercial objectives all influence how a product moves from opportunity to execution.",
      "This experience taught me the importance of combining strategic thinking with practical problem-solving and persistence, particularly when bringing products into new and challenging markets.",
      "It continues to shape my approach to product management today.",
    ],
    competenciesHeading: "Demonstrated Product Management Competencies",
    competencies: [
      "Product Management",
      "Project Management",
      "Product Launch",
      "Go-to-Market Execution",
      "International Market Entry",
      "E-Commerce Product Development",
      "Commercial Product Management",
      "Regulatory & Platform Constraints",
      "Customer Journey",
      "Business Performance",
      "Strategic Problem-Solving",
    ],
  },
  {
    id: "case-study-3",
    number: "03",
    projectLabel: "03 / Product Strategy & Customer Experience",
    category: "Product Strategy & Customer Experience",
    title: "Improving the Customer Journey in an Early-Stage SaaS Product",
    subtitle: "Product assessment, strategic prioritization, and user journey restructuring.",
    introduction: [
      "Understanding customer behavior, identifying gaps in the product experience, and prioritizing improvements that help users experience meaningful product value.",
      "This project demonstrates how product assessment and informed prioritization can help teams address underlying product challenges without unnecessarily expanding functionality.",
    ],
    highlights: [
      {
        value: "85% vs 27%",
        label: "Key Product Insight",
        detail: "Onboarding completion compared with completion of the first meaningful product action.",
      },
      {
        value: "Signup → Return",
        label: "Product Prioritization",
        detail: "Improving the existing customer experience before adding new features.",
      },
      {
        value: "20% → 43%",
        label: "Observed Product Outcome",
        detail: "A 23-percentage-point increase in retention, equivalent to a 115% relative improvement.",
      },
    ],
    visualFramework: {
      title: "Product Experience & Customer Value Journey",
      type: "journey",
      steps: [
        {
          stepLabel: "Stage 1",
          title: "Initial Experience",
          description: "Simplifying the entry point and reducing unnecessary friction.",
          tone: "neutral",
        },
        {
          stepLabel: "Stage 2",
          title: "Value Discovery",
          description: "Helping users understand and experience the product's core value.",
          tone: "neutral",
        },
        {
          stepLabel: "Stage 3",
          title: "Meaningful Product Interaction",
          description: "Supporting users in completing a relevant product action.",
          tone: "neutral",
        },
        {
          stepLabel: "Stage 4",
          title: "Continued Product Usage",
          description: "Creating clearer reasons for users to return to the product.",
          tone: "positive",
        },
      ],
      footerNote: "Observed Outcome: Retention increased from 20% to 43%.",
    },
    phases: [
      {
        number: "Phase 01",
        title: "Product Assessment & Problem Identification",
        subtitle: "Understanding the Problem Before Defining the Solution",
        paragraphs: [
          "An early-stage self-serve SaaS product was experiencing challenges in turning new signups into returning users.",
          "Although 85% of users completed onboarding, only 27% reached the first meaningful product action.",
          "I assessed the end-to-end user journey to better understand the relationship between onboarding completion, customer behavior, and the product's ability to deliver meaningful value.",
          "By combining product data, customer journey analysis, and principles of product psychology, I identified a significant gap between completing the initial onboarding process and experiencing the product's core value.",
        ],
        calloutLabel: "Key Product Insight",
        calloutText:
          "Completing onboarding does not necessarily mean that customers understand or experience the value of a product.",
      },
      {
        number: "Phase 02",
        title: "Product Strategy & Prioritization",
        subtitle: "Focusing on the Right Product Improvements",
        paragraphs: [
          "Rather than expanding the product's functionality, the focus shifted toward improving the existing customer experience.",
          "Based on the assessment, we prioritized restructuring the user journey, reducing unnecessary friction, improving the first meaningful product interaction, and helping users better understand the value of the product.",
          "The approach centered on making more effective use of existing product capabilities before introducing additional features.",
          "This established a clearer direction for product improvements, grounded in observed customer behavior rather than assumptions.",
        ],
        calloutLabel: "Key Product Decision",
        calloutText:
          "Prioritize improvements to the existing customer experience before investing in additional functionality.",
      },
      {
        number: "Phase 03",
        title: "Product Outcomes & Evaluation",
        subtitle: "Evaluating the Impact of Product Decisions",
        paragraphs: [
          "Following the changes to the user journey, retention increased from 20% to 43%, representing a 23-percentage-point increase and a 115% relative improvement.",
          "The observed results highlighted the importance of understanding how customers interact with a product and prioritizing improvements that address their actual experience.",
          "This project reinforced the value of connecting product assessment, informed prioritization, and practical improvements with measurable product outcomes.",
        ],
        calloutLabel: "Observed Outcome",
        calloutText:
          "Retention increased from 20% to 43% following the product experience improvements.",
        highlightTone: true,
      },
    ],
    roleContribution: [
      "My contribution focused on understanding the underlying product challenge, analyzing the existing customer experience, identifying opportunities for improvement, and translating product insights into actionable priorities.",
      "The objective was to establish a clearer direction for product improvements based on customer behavior and observed product performance.",
    ],
    takeaway: [
      "Effective product management begins with understanding the problem before deciding what to build.",
      "Not every product challenge requires new features or additional functionality. Sometimes, the most valuable improvements come from reassessing the existing product experience, challenging assumptions, and prioritizing what matters most to customers.",
      "This project demonstrates the importance of connecting customer understanding, product strategy, and informed decision-making to create meaningful product improvements.",
    ],
    competenciesHeading: "Demonstrated Competencies",
    competencies: [
      "Product Assessment",
      "Problem Identification",
      "Customer Journey Analysis",
      "Product Prioritization",
      "Product Analytics",
      "Product Psychology",
      "Data-Informed Decision-Making",
      "Customer Experience Improvement",
    ],
  },
  {
    id: "case-study-4",
    number: "04",
    projectLabel: "04 / Customer Advocacy & Problem Resolution",
    category: "Customer Advocacy & Product Experience",
    title: "Turning Customer Frustration into Customer Advocacy",
    subtitle:
      "Rebuilding customer confidence for the Victoria Beckham e-commerce store during my time at HulkApps.",
    introduction: [
      "A practical example of how customer understanding, personal accountability, and a solution-oriented approach can transform a challenging customer experience into positive product advocacy.",
      "This case highlights the importance of listening to customers, understanding their concerns, and recognizing that the product experience extends beyond functionality alone.",
    ],
    highlights: [
      {
        value: "4 Days",
        label: "Customer Experience Turnaround",
        detail: "From an expressed intention to uninstall the application to a positive public review.",
      },
      {
        value: "5 Stars",
        label: "Customer Satisfaction",
        detail: "Positive public review on the Shopify App Store.",
      },
      {
        value: "10/10",
        label: "Customer Recommendation",
        detail: "Explicit recommendation of the application and HulkApps team.",
      },
    ],
    visualFramework: {
      title: "From Customer Frustration to Customer Advocacy",
      type: "timeline",
      steps: [
        {
          stepLabel: "June 26, 2022",
          title: "Customer Dissatisfaction",
          description:
            "The customer expressed dissatisfaction with a compatibility issue involving the application's integration with their custom Shopify theme and communicated their intention to uninstall the application.",
          tone: "challenge",
        },
        {
          stepLabel: "June 30, 2022",
          title: "Positive Public Review",
          description:
            "The customer published a five-star review on the Shopify App Store, praising the application and the support provided by the HulkApps team.",
          tone: "positive",
        },
        {
          stepLabel: "July 1, 2022",
          title: "Personal Recognition",
          description:
            "The customer personally acknowledged my contribution, highlighting my professionalism and consideration throughout the experience.",
          tone: "positive",
        },
      ],
    },
    phases: [
      {
        number: "Phase 01",
        title: "Customer Feedback & Problem Identification",
        subtitle: "Understanding the Customer's Perspective",
        paragraphs: [
          "The Victoria Beckham e-commerce store encountered compatibility challenges between one of HulkApps' Shopify applications and its custom store theme.",
          "Following an unsuccessful attempt to resolve the issue, the customer expressed dissatisfaction and communicated their intention to uninstall the application and explore alternative solutions.",
          "The situation highlighted the importance of understanding not only the technical product challenge but also the customer's expectations and overall experience.",
        ],
        calloutLabel: "Key Challenge",
        calloutText: "A product compatibility issue had escalated into a loss of customer confidence.",
      },
      {
        number: "Phase 02",
        title: "Customer Advocacy & Solution-Oriented Communication",
        subtitle: "Rebuilding Confidence Through Personal Accountability",
        paragraphs: [
          "I became personally involved in addressing the challenging customer experience.",
          "My approach focused on understanding the customer's concerns, maintaining constructive communication, and helping move the situation toward a positive outcome.",
          "The experience reinforced the importance of empathy, professionalism, and personal accountability when customers encounter difficulties using a product.",
          "Rather than viewing the situation solely as a technical challenge, I recognized the importance of the relationship between customer confidence and the overall product experience.",
        ],
        calloutLabel: "Key Principle",
        calloutText:
          "Customer feedback is an opportunity to understand unmet expectations and improve the relationship between customers and the product.",
      },
      {
        number: "Phase 03",
        title: "Customer Experience & Relationship Outcome",
        subtitle: "From Dissatisfaction to Advocacy",
        paragraphs: [
          "Four days after expressing their intention to uninstall the application, the customer published a five-star review on the Shopify App Store, praising the application and the exceptional support provided by the HulkApps team.",
          "The customer subsequently reached out to me personally, acknowledging my individual contribution and highlighting the professionalism and consideration demonstrated throughout the experience.",
        ],
        calloutLabel: "Observed Outcome",
        calloutText:
          "A customer who had expressed their intention to leave became a public advocate for the application and its team.",
        highlightTone: true,
      },
    ],
    recognition: {
      heading: "Featured Customer Feedback",
      quote:
        "We have never felt more appreciated and taken care of. Highly recommend this app and the hulkapps team 10 out of 10!",
      author: "Victoria Beckham",
      roles: ["Public Shopify App Store Review"],
      source: "June 30, 2022",
      rating: 5,
      clarification:
        "Work undertaken during my employment at HulkApps. This review was published publicly under the Victoria Beckham Shopify store name.",
    },
    takeaway: [
      "A successful product experience extends beyond features and functionality.",
      "It also depends on how effectively a business understands customer needs, responds to challenges, and builds trust.",
      "Customer feedback provides valuable insight into the gaps between product capabilities and real-world expectations.",
      "Approaching these concerns with empathy, accountability, and a solution-oriented mindset can help strengthen customer confidence and improve the overall product experience.",
    ],
    competenciesHeading: "Demonstrated Competencies",
    competencies: [
      "Customer Advocacy",
      "Voice of the Customer",
      "Customer Empathy",
      "Problem Identification",
      "Stakeholder Communication",
      "Customer Experience Management",
      "Problem Resolution",
      "Personal Accountability",
    ],
  },
];

const PillarIcon: React.FC<{ iconName?: string }> = ({ iconName }) => {
  switch (iconName) {
    case "Users":
      return <Users className="w-5 h-5 text-sage-600" />;
    case "GitMerge":
      return <GitMerge className="w-5 h-5 text-sage-600" />;
    case "BarChart3":
      return <BarChart3 className="w-5 h-5 text-sage-600" />;
    case "Compass":
    default:
      return <Compass className="w-5 h-5 text-sage-600" />;
  }
};

export const CaseStudiesPreview: React.FC<CaseStudiesPreviewProps> = ({
  onSelectCaseStudy,
  onViewAll,
}) => {
  return (
    <section
      className="py-24 bg-white px-4 sm:px-6 lg:px-8 border-b border-sand-300"
      id="selected-work-preview"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-sage-500 block mb-2">
              Product Management in Practice
            </span>
            <h2 className="text-4xl sm:text-5xl font-normal font-display text-silver-900 tracking-tight">
              Selected <span className="italic text-sage-500 font-medium">Product Work</span>
            </h2>
            <p className="text-sage-600 font-sans mt-3 text-sm sm:text-base max-w-xl font-light leading-relaxed">
              Real product challenges, thoughtful prioritization, and outcomes across leadership, product launches, strategy, and customer experience.
            </p>
          </div>

          <button
            onClick={onViewAll}
            className="self-start md:self-auto px-6 py-3 bg-sand-50 hover:bg-sand-100 text-silver-900 border border-sand-300 rounded-lg font-sans text-xs font-semibold uppercase tracking-wider transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            Explore My Work
            <ArrowRight className="w-3.5 h-3.5 text-sage-600" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES_DATA.map((study) => {
            const summaryText = study.previewSummary || study.subtitle;
            const previewStats = study.previewHighlights || study.highlights;
            return (
              <div
                key={study.id}
                className="bg-sand-50/70 rounded-3xl p-8 border border-sand-300 shadow-sm hover:shadow-lg hover:border-sage-400 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="mb-5">
                    <span className="inline-block px-3 py-1 rounded-lg bg-white border border-sand-300 text-[10px] font-mono font-bold uppercase tracking-wider text-sage-600">
                      {study.projectLabel}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-medium text-silver-900 leading-snug mb-3 group-hover:text-sage-700 transition-colors">
                    {study.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-sage-600 font-sans font-light leading-relaxed mb-6">
                    {summaryText}
                  </p>
                </div>

                <div className="pt-5 border-t border-sand-200 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {previewStats.map((stat, idx) => (
                      <div key={idx} className="bg-white rounded-xl p-3.5 border border-sand-200">
                        <div className="text-base font-display font-semibold text-silver-900 leading-snug">
                          {stat.value}
                        </div>
                        <div className="text-[11px] text-sage-600 font-sans font-light mt-1 leading-snug">
                          {stat.detail}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectCaseStudy(study.id)}
                    className="w-full py-3 px-4 rounded-xl bg-silver-900 hover:bg-sage-600 text-white font-sans text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Explore Project
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const CaseStudies: React.FC<CaseStudiesProps> = ({
  onBackToHome,
  onContactClick,
  focusedStudyId,
}) => {
  useEffect(() => {
    if (focusedStudyId) {
      const target = document.getElementById(focusedStudyId);
      if (target) {
        setTimeout(() => {
          const offset = target.getBoundingClientRect().top + window.pageYOffset - 96;
          window.scrollTo({ top: offset, behavior: "smooth" });
        }, 80);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [focusedStudyId]);

  const scrollToStudy = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = el.getBoundingClientRect().top + window.pageYOffset - 96;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <section
      className="bg-sand-50 min-h-screen py-24 px-4 sm:px-6 lg:px-8 border-b border-sand-300"
      id="case-studies-workspace"
    >
      <div className="max-w-7xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="mb-12" id="case-studies-nav">
          <button
            onClick={onBackToHome}
            className="group flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.15em] text-sage-500 hover:text-silver-900 transition-colors cursor-pointer"
            id="back-to-home-btn"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Portfolio
          </button>
        </div>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-center md:text-left md:flex md:items-end md:justify-between mb-12 gap-8"
          id="case-studies-header"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-sage-500 block mb-3">
              Product Management in Practice
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-medium tracking-tight text-silver-900 leading-none">
              Selected Product <span className="italic text-sage-600">Work</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-silver-900 font-display italic">
              Real product challenges. Thoughtful decisions. Meaningful outcomes.
            </p>
            <p className="mt-3 text-sm sm:text-base text-sage-700 leading-relaxed font-sans max-w-2xl font-light">
              Explore a selection of my professional experience, showcasing how I approach product challenges, connect customer needs with business objectives, guide product decisions, and collaborate with teams to turn strategy into execution.
            </p>
          </div>

          <div className="mt-8 md:mt-0 flex-shrink-0">
            <a
              href="https://calendly.com/belma-belmapmlab/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-silver-900 hover:bg-silver-800 active:bg-silver-950 text-white rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2 shadow-sm"
              id="case-studies-header-cta"
            >
              <Calendar className="w-4 h-4 text-gold-400" />
              Book a Free Discovery Call
            </a>
          </div>
        </motion.div>

        {/* Quick Index Jump Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16" id="case-studies-index">
          {CASE_STUDIES_DATA.map((study) => (
            <button
              key={study.id}
              onClick={() => scrollToStudy(study.id)}
              className="text-left p-5 rounded-2xl bg-white border border-sand-300 hover:border-sage-400 hover:shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-[10px] font-mono font-bold uppercase tracking-wider text-sage-500 mb-1.5">
                  <span>{study.projectLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-clay-400 group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
                </div>
                <div className="font-display text-lg font-medium text-silver-900 leading-snug">
                  {study.title}
                </div>
              </div>
              <div className="text-xs text-sage-600 font-sans mt-2">{study.category}</div>
            </button>
          ))}
        </div>

        {/* All Four Case Studies */}
        <div className="space-y-16">
          {CASE_STUDIES_DATA.map((study) => (
            <motion.article
              key={study.id}
              id={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45 }}
              className="bg-white border border-sand-300 rounded-3xl shadow-sm overflow-hidden"
            >
              {/* Top Header & Highlights */}
              <div className="p-8 sm:p-12 border-b border-sand-200 bg-gradient-to-br from-[#FAF8F5] via-white to-sand-100/40">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="px-3.5 py-1.5 rounded-full bg-sage-50 border border-sage-200 text-[11px] font-mono font-bold uppercase tracking-wider text-sage-600">
                    {study.projectLabel}
                  </span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-display font-normal text-silver-950 tracking-tight max-w-4xl leading-tight">
                  {study.title}
                </h2>

                <p className="mt-4 text-base sm:text-lg text-sage-600 font-sans font-light max-w-3xl leading-relaxed">
                  {study.subtitle}
                </p>

                {/* Optional Engagement Metadata Strip */}
                {study.metadata && study.metadata.length > 0 && (
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl">
                    {study.metadata.map((item, idx) => (
                      <div
                        key={idx}
                        className="px-4 py-3 rounded-xl bg-white border border-sand-200"
                      >
                        <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-clay-500">
                          {item.label}
                        </div>
                        <div className="text-xs sm:text-sm font-sans font-medium text-silver-900 mt-0.5">
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Introduction */}
                <div className="mt-6 space-y-3 max-w-3xl text-sm sm:text-base text-silver-800 font-sans font-light leading-relaxed">
                  {study.introduction.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {/* Key Highlights */}
                <div className="mt-10 pt-8 border-t border-sand-200">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-clay-500 mb-4">
                    Key Highlights
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                    {study.highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-sand-50/80 border border-sand-200/90 flex flex-col justify-between"
                      >
                        <div>
                          <div className="text-xl sm:text-2xl font-display font-semibold text-silver-900 tracking-tight leading-snug">
                            {item.value}
                          </div>
                          <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-sage-600 mt-1.5">
                            {item.label}
                          </div>
                        </div>
                        <div className="text-xs text-sage-600 font-sans mt-2 font-light leading-relaxed">
                          {item.detail}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Visual Framework Block */}
              <div className="px-8 sm:px-12 py-8 bg-sand-50/60 border-b border-sand-200">
                <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-sage-600 mb-5 flex items-center gap-2">
                  {study.visualFramework.type === "timeline" ? (
                    <Clock className="w-4 h-4 text-sage-500" />
                  ) : study.visualFramework.type === "pillars" ? (
                    <Briefcase className="w-4 h-4 text-sage-500" />
                  ) : (
                    <Compass className="w-4 h-4 text-sage-500" />
                  )}
                  {study.visualFramework.title}
                </div>

                {study.visualFramework.type === "pillars" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {study.visualFramework.steps.map((step, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-white border border-sand-200 relative flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <div className="p-2.5 rounded-xl bg-sage-50 border border-sage-200">
                              <PillarIcon iconName={step.iconName} />
                            </div>
                            <span className="text-[11px] font-mono font-bold text-clay-400">
                              {step.stepLabel}
                            </span>
                          </div>
                          <div className="text-sm font-semibold text-silver-900">
                            {step.title}
                          </div>
                          <p className="text-xs text-sage-600 font-light mt-1.5 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {study.visualFramework.type === "journey" && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                      {study.visualFramework.steps.map((step, idx) => (
                        <div
                          key={idx}
                          className={`p-4 rounded-xl border ${
                            step.tone === "positive"
                              ? "bg-sage-50 border-sage-300"
                              : "bg-white border-sand-200"
                          }`}
                        >
                          <div
                            className={`text-[10px] font-mono uppercase font-semibold ${
                              step.tone === "positive" ? "text-sage-700" : "text-sage-500"
                            }`}
                          >
                            {step.stepLabel}
                          </div>
                          <div className="text-sm font-semibold text-silver-900 mt-1">
                            {step.title}
                          </div>
                          <div className="text-xs text-sage-600 font-light mt-1 leading-relaxed">
                            {step.description}
                          </div>
                        </div>
                      ))}
                    </div>
                    {study.visualFramework.footerNote && (
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sage-50 border border-sage-200 text-xs font-mono font-semibold text-sage-700">
                        <CheckCircle2 className="w-4 h-4 text-sage-600 flex-shrink-0" />
                        <span>{study.visualFramework.footerNote}</span>
                      </div>
                    )}
                  </div>
                )}

                {study.visualFramework.type === "timeline" && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {study.visualFramework.steps.map((step, idx) => {
                      const isChallenge = step.tone === "challenge";
                      return (
                        <div
                          key={idx}
                          className={`p-5 rounded-2xl border ${
                            isChallenge
                              ? "bg-clay-50 border-clay-200"
                              : "bg-sage-50 border-sage-200"
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            {isChallenge ? (
                              <AlertCircle className="w-4 h-4 text-clay-500 flex-shrink-0" />
                            ) : (
                              <CheckCircle2 className="w-4 h-4 text-sage-600 flex-shrink-0" />
                            )}
                            <span
                              className={`text-[11px] font-mono font-bold uppercase tracking-wider ${
                                isChallenge ? "text-clay-600" : "text-sage-700"
                              }`}
                            >
                              {step.stepLabel}
                            </span>
                          </div>
                          <div
                            className={`text-sm font-semibold ${
                              isChallenge ? "text-clay-900" : "text-sage-900"
                            }`}
                          >
                            {step.title}
                          </div>
                          <p
                            className={`text-xs font-light mt-1.5 leading-relaxed ${
                              isChallenge ? "text-clay-700" : "text-sage-700"
                            }`}
                          >
                            {step.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Narrative Phases & Supporting Evidence */}
              <div className="p-8 sm:p-12 space-y-10">
                {study.phases.map((phase, idx) => (
                  <React.Fragment key={idx}>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                      <div className="md:col-span-4 space-y-1">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-sage-500 block">
                          {phase.number}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-display font-medium text-silver-900 leading-snug">
                          {phase.title}
                        </h3>
                        <p className="text-xs text-clay-500 font-sans italic">
                          {phase.subtitle}
                        </p>
                      </div>
                      <div
                        className={`md:col-span-8 p-6 sm:p-7 rounded-2xl border ${
                          phase.highlightTone
                            ? "bg-sage-50/70 border-sage-200"
                            : "bg-sand-50/50 border-sand-200"
                        }`}
                      >
                        <div className="space-y-3 text-sm sm:text-base text-silver-800 font-sans font-light leading-relaxed">
                          {phase.paragraphs.map((p, pIdx) => (
                            <p key={pIdx}>{p}</p>
                          ))}
                        </div>
                        <div
                          className={`mt-4 pt-4 border-t flex items-start gap-2 text-xs font-mono ${
                            phase.highlightTone
                              ? "border-sage-200 text-sage-700 font-semibold"
                              : "border-sand-200 text-sage-600"
                          }`}
                        >
                          <Target className="w-4 h-4 text-sage-500 flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>{phase.calloutLabel}:</strong> {phase.calloutText}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Optional Supporting Market Context Callout */}
                    {study.supportingContext &&
                      study.supportingContextAfterPhaseIndex === idx && (
                        <div className="p-6 sm:p-8 rounded-2xl bg-sand-50 border border-sand-300 space-y-4">
                          <div className="flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-widest text-clay-500">
                            <Newspaper className="w-4 h-4 text-sage-600" />
                            <span>{study.supportingContext.eyebrow}</span>
                          </div>

                          <h4 className="text-xl sm:text-2xl font-display font-medium text-silver-900">
                            {study.supportingContext.title}
                          </h4>

                          <div className="space-y-2.5 text-sm sm:text-base text-silver-800 font-sans font-light leading-relaxed max-w-4xl">
                            {study.supportingContext.paragraphs.map((p, pIdx) => (
                              <p key={pIdx}>{p}</p>
                            ))}
                          </div>

                          <div className="pt-4 border-t border-sand-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div className="space-y-1">
                              <div className="text-xs font-mono text-sage-600">
                                {study.supportingContext.publication} · Published{" "}
                                {study.supportingContext.published}
                              </div>
                              <div className="text-sm font-sans font-medium text-silver-900">
                                {study.supportingContext.articleTitle}
                              </div>
                              {study.supportingContext.disclaimer && (
                                <p className="text-[11px] text-sage-500 font-sans italic">
                                  {study.supportingContext.disclaimer}
                                </p>
                              )}
                            </div>

                            <a
                              href={study.supportingContext.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="self-start sm:self-center flex-shrink-0 px-5 py-2.5 rounded-full bg-white hover:bg-sage-50 text-silver-900 border border-sand-300 hover:border-sage-400 font-sans text-xs font-semibold uppercase tracking-wider transition-all inline-flex items-center gap-2"
                            >
                              {study.supportingContext.buttonText}
                              <ExternalLink className="w-3.5 h-3.5 text-sage-600" />
                            </a>
                          </div>
                        </div>
                      )}
                  </React.Fragment>
                ))}

                {/* Optional Product Performance Highlights */}
                {study.performanceHighlights && (
                  <div className="p-6 sm:p-8 rounded-2xl bg-sage-50/50 border border-sage-200 space-y-5">
                    <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-sage-700">
                      {study.performanceHighlights.heading}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {study.performanceHighlights.metrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="p-5 rounded-xl bg-white border border-sand-200"
                        >
                          <div className="text-2xl sm:text-3xl font-display font-semibold text-silver-900">
                            {metric.value}
                          </div>
                          <div className="text-xs sm:text-sm text-sage-600 font-sans font-light mt-1">
                            {metric.description}
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs font-mono text-sage-600">
                      {study.performanceHighlights.caption}
                    </p>
                  </div>
                )}

                {/* Professional Recognition, Founder Recognition, or Featured Customer Feedback */}
                {study.recognition && (
                  <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-sand-50 to-white border border-sand-300 relative overflow-hidden">
                    <div className="absolute top-5 right-6 text-sand-200 pointer-events-none">
                      <Quote className="w-12 h-12 stroke-[1.2]" />
                    </div>
                    <div className="relative z-10 space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-sage-600">
                          {study.recognition.heading}
                        </span>
                        {study.recognition.rating && (
                          <div
                            className="flex items-center gap-1"
                            aria-label={`${study.recognition.rating} out of 5 stars`}
                          >
                            {Array.from({ length: study.recognition.rating }).map((_, sIdx) => (
                              <Star
                                key={sIdx}
                                className="w-4 h-4 text-amber-500 fill-amber-400"
                              />
                            ))}
                          </div>
                        )}
                      </div>

                      <blockquote className="text-lg sm:text-xl font-display italic text-charcoal-800 leading-relaxed max-w-4xl">
                        &ldquo;{study.recognition.quote}&rdquo;
                      </blockquote>

                      <div className="pt-2 border-t border-sand-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs">
                        <div>
                          <div className="font-sans font-semibold text-silver-900">
                            — {study.recognition.author}
                          </div>
                          <div className="text-sage-600 font-sans">
                            {study.recognition.roles.join(" · ")}
                          </div>
                        </div>
                        <div className="font-mono text-[11px] text-clay-500">
                          {study.recognition.source}
                        </div>
                      </div>

                      {study.recognition.clarification && (
                        <p className="text-[11px] text-sage-500 font-sans italic">
                          {study.recognition.clarification}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Optional My Role & Contribution block */}
                {study.roleContribution && (
                  <div className="p-6 sm:p-7 rounded-2xl bg-sand-50 border border-sand-200">
                    <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-clay-500 mb-3">
                      My Role & Contribution
                    </div>
                    <div className="space-y-3 text-sm sm:text-base text-silver-800 font-sans font-light leading-relaxed">
                      {study.roleContribution.map((para, idx) => (
                        <p key={idx}>{para}</p>
                      ))}
                    </div>
                  </div>
                )}

                {/* Core Product Management Takeaway */}
                <div className="p-6 sm:p-8 rounded-2xl bg-silver-900 text-white space-y-3">
                  <div className="flex items-center gap-2 text-gold-400 text-xs font-mono font-bold uppercase tracking-widest">
                    <Sparkles className="w-4 h-4" />
                    Core Product Management Takeaway
                  </div>
                  {study.takeawayTitle && (
                    <h4 className="text-xl sm:text-2xl font-display font-medium text-white">
                      {study.takeawayTitle}
                    </h4>
                  )}
                  <div className="space-y-2.5 text-sm sm:text-base text-silver-200 font-sans font-light leading-relaxed max-w-4xl">
                    {study.takeaway.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </div>

                {/* Demonstrated Competencies */}
                <div className="pt-2">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-sage-500 mb-3">
                    {study.competenciesHeading || "Demonstrated Competencies"}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {study.competencies.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg bg-sand-50 border border-sand-200 text-xs font-sans font-medium text-silver-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-sand-200 mt-6 flex items-center justify-between">
                    <button
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      className="group inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-sage-500 hover:text-silver-900 transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
                      Back to Selected Work
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Final Call To Action */}
        <div
          className="mt-16 p-8 sm:p-12 rounded-3xl bg-[#2C3639] text-[#F2EDE4] border border-white/10 shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative overflow-hidden"
          id="case-studies-final-cta"
        >
          <div className="space-y-3 max-w-2xl relative z-10">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-sage-300 block">
              Let's Work Together
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-normal text-white leading-tight">
              Bring Clarity to Your Product Challenges.
            </h2>
            <p className="text-sm sm:text-base text-sand-100/85 font-sans font-light leading-relaxed">
              Whether you need to define your product direction, evaluate opportunities, prioritize improvements, or bring more structure to your product development, let's explore how I can help.
            </p>
            <p className="text-xs font-mono text-sage-300 pt-1">
              30 minutes · No obligation · Explore mutual fit
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto relative z-10 flex-shrink-0">
            <a
              href="https://calendly.com/belma-belmapmlab/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#FAF8F5] text-[#2C3639] hover:bg-white rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 text-center shadow-sm"
            >
              Book a Free Discovery Call
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            {onContactClick && (
              <button
                onClick={onContactClick}
                className="px-6 py-3.5 border border-silver-600 hover:border-sand-200 text-sand-100 hover:text-white rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all text-center cursor-pointer"
              >
                Get in Touch
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
