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
    slug: "ecommerce-white-label",
    title: "Ecommerce White Label",
    tags: ["Product Design", "Ecommerce", "White Label"],
    summary: "Designing a flexible white-label ecommerce platform for multiple brand partners.",
    year: "2025",
    blocks: [
      {
        type: "text",
        content: "Coming soon.",
      },
    ],
  },
  {
    slug: "metamask-onboarding",
    title: "Metamask Onboarding",
    tags: ["UX Research", "Web3", "Onboarding"],
    summary: "Redesigning the onboarding experience for one of the world's most-used crypto wallets.",
    year: "2024",
    blocks: [
      {
        type: "text",
        content: "Coming soon.",
      },
    ],
  },
  {
    slug: "client-management-portal",
    title: "Redesigning A Client Management Portal",
    tags: ["Product Design", "B2B", "SaaS"],
    summary: "A ground-up redesign of a client management portal to improve usability and workflow efficiency.",
    year: "2020",
    blocks: [
      {
        type: "text",
        content: "Coming soon.",
      },
    ],
  },
  {
    slug: "payment-portal",
    title: "Redesigning A Payment Portal",
    tags: ["UX Research", "Fintech", "Payments"],
    summary: "Rethinking a payment portal to reduce friction and increase successful transaction rates.",
    year: "2019",
    blocks: [
      {
        type: "text",
        content: "Coming soon.",
      },
    ],
  },
];
