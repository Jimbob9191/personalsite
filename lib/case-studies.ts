export type Block =
  | { type: "text"; content: string }
  | { type: "image"; src: string; alt: string; caption?: string };

export type CaseStudy = {
  slug: string;
  title: string;
  tags: string[];
  summary: string;
  year: string;
  blocks: Block[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "design-system",
    title: "Building a Design System",
    tags: ["Design Systems", "Figma", "Tokens"],
    summary:
      "How we unified the design language across 12 product teams and reduced design debt by 40%.",
    year: "2024",
    blocks: [
      {
        type: "text",
        content:
          "The challenge was creating a single source of truth for a fragmented suite of products that had grown organically over five years. Each team had developed its own patterns, creating inconsistency for users moving between surfaces.",
      },
      {
        type: "image",
        src: "/placeholder.svg",
        alt: "Component library overview",
        caption: "The component library — 200+ components across 6 categories",
      },
      {
        type: "text",
        content:
          "We started with an audit. Three weeks of cataloguing every UI pattern in production, annotating divergence, and prioritising by frequency. The result was a clear hierarchy of what to tackle first.",
      },
      {
        type: "image",
        src: "/placeholder.svg",
        alt: "Token architecture diagram",
        caption: "Token architecture: global → semantic → component",
      },
      {
        type: "text",
        content:
          "Adoption was the real challenge. We ran fortnightly office hours, embedded into two product teams for a quarter, and built migration guides for every deprecated pattern. Six months after launch, all new features were built on the system.",
      },
    ],
  },
  {
    slug: "mobile-checkout",
    title: "Mobile Checkout Redesign",
    tags: ["UX Research", "Mobile", "Conversion"],
    summary:
      "Redesigning the checkout flow to reduce cart abandonment by 28% on mobile.",
    year: "2023",
    blocks: [
      {
        type: "text",
        content:
          "Session recordings showed users consistently dropping off at the same point: the payment step on mobile. The form was designed for desktop, ported to mobile as an afterthought, and it showed.",
      },
      {
        type: "image",
        src: "/placeholder.svg",
        alt: "Checkout funnel analysis",
        caption: "Drop-off analysis — 64% of abandonment occurred at step 3",
      },
      {
        type: "text",
        content:
          "We ran five rounds of usability testing with 40 participants. Key findings: users didn't trust the security indicators, the keyboard covered critical fields, and the progress indicator was invisible at the top of the screen.",
      },
      {
        type: "image",
        src: "/placeholder.svg",
        alt: "Redesigned checkout screens",
        caption: "Before and after — single-screen layout with sticky CTA",
      },
      {
        type: "text",
        content:
          "The redesign collapsed three steps into one, moved the security badge to a persistent position near the CTA, and used the native keyboard APIs to prevent field occlusion. A/B testing over 30 days confirmed a 28% reduction in abandonment.",
      },
    ],
  },
  {
    slug: "onboarding-flow",
    title: "Onboarding Flow Overhaul",
    tags: ["Product Design", "Onboarding", "Retention"],
    summary:
      "Rethinking first-run experience to lift day-7 retention from 22% to 41%.",
    year: "2023",
    blocks: [
      {
        type: "text",
        content:
          "The existing onboarding was a nine-step wizard built when the product had half the features it does today. New users were overwhelmed before they reached the first moment of value.",
      },
      {
        type: "image",
        src: "/placeholder.svg",
        alt: "User journey mapping workshop",
        caption: "Journey mapping session — identifying the 'aha moment'",
      },
      {
        type: "text",
        content:
          "Through cohort analysis we identified that users who completed one specific action in the first session retained at 3× the rate. Everything in the new onboarding points toward that action.",
      },
      {
        type: "image",
        src: "/placeholder.svg",
        alt: "New onboarding screens",
        caption: "Progressive disclosure — complexity revealed as needed",
      },
      {
        type: "text",
        content:
          "The new flow is three screens. It collects just enough context to personalise the empty state, then gets out of the way. Day-7 retention moved from 22% to 41% in the first full month after release.",
      },
    ],
  },
];
