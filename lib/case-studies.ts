export type Block =
  | { type: "text"; title?: string; paragraphs: string[] }
  | { type: "metrics"; title?: string; items: { label: string; value: string }[] }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "carousel"; images: { src: string; alt: string }[]; caption?: string };

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
        title: "Background",
        paragraphs: [
          "Pavers group operated seven websites for their different footwear brands, using a range of different tech stacks including shopify, shopify 2.0 and Nuxt headless. This complexity lead to compatibility issues between the sites, a confusing code base and inconsistent feature releases.",
          "To combat this, all sites (starting with the Pavers brand) were to be moved to a single hydrogen headless platform, sharing a single codebase with individual styling.",
          "The scope for Jones Bootmaker was clear: migrate to Hydrogen, align its UI and templates with Pavers, and ensure brand-specific configuration through variables and tokens. This would not only streamlined development but also allowed each brand to retain its unique identity within a scalable framework.",
        ],
      },
      {
        type: "image",
        src: "/images/ecommerce-white-label/background.png",
        alt: "Ecommerce white label background",
      },
      {
        type: "text",
        title: "The Problem",
        paragraphs: [
          "The team was spending significant time duplicating work, fixing avoidable errors, and maintaining divergent features across brands. This created:\n\n- Operational drag (duplicate content updates, disjointed releases).\n- UX inconsistency across brands.\n- Slower experimentation and fragmented analytics.",
          "We had already rebuilt the main Pavers site from Nuxt to Shopify Hydrogen headless with a clean, accessible codebase and embedded CRO wins. The next step was to bring Jones Bootmaker onto the same platform via a white‑label approach so we could maintain one codebase, multiple brands.",
        ],
      },
      {
        type: "image",
        src: "/images/ecommerce-white-label/current-system.png",
        alt: "Current system overview",
      },
      {
        type: "text",
        title: "Research & Discovery",
        paragraphs: [
          "Over the course of a couple of weeks we undertook stakeholder interviews, reviewed heat maps, site analytics, feature usage and user personas to discover these key insights:\n\n- Features that had successfully driven measurable revenue growth (through CRO) on the Pavers brand were not implemented on the Jones brand. This created a clear opportunity gap where revenue was being left on the table. Eg: Wishlist and Combined listings functionality.\n- Each site relied on a different mix of third-party solutions, with some integrations redundant or outdated. This lack of unification created inefficiencies and required consolidating functionality to streamline both performance and cost. Eg: Collection building and recommendations tools.\n- Different teams had established separate reporting setups across brands, meaning data tracking was inconsistent and siloed. Coordinating with stakeholders across departments was critical to ensure a smooth migration and alignment of reporting standards. Eg: GA4 and GTM integrations.\n- Page structures, user flows, and core features varied significantly between the two brands. This inconsistency required a detailed review to determine where unification was needed, and where differentiation between the brands was strategically valuable. Eg: the presence of a cart page on Pavers and only a mini cart on Jones.\n- The existing site architectures were not designed with scalability in mind. Any redesign or migration needed to account for future growth, new features, and potential third-party integrations without introducing technical debt. Eg: Language translation for different regions and CMS functionality allowing content to be replicated across sites.\n- Variations in site speed, technical SEO implementation, and content structure posed potential risks to organic traffic. Aligning both brands on best practices was essential to protect visibility during and after migration.",
        ],
      },
      {
        type: "image",
        src: "/images/ecommerce-white-label/users.png",
        alt: "User research overview",
      },
      {
        type: "text",
        title: "Process",
        paragraphs: [
          "As the product manager and design lead, I owned the backlog, prioritised features, aligned brand stakeholders, coordinated teams and managed delivery from concept to launch. With this being my first large scale project for the business and on a very short turnaround, we had to move quickly and decisively to stay on track.",
          "Throughout the project, we worked in a scrum / agile structure with daily standups, weekly planning meetings and retros.",
        ],
      },
      {
        type: "image",
        src: "/images/ecommerce-white-label/weekly.png",
        alt: "Weekly planning structure",
      },
      {
        type: "text",
        paragraphs: [
          "I began by meeting stakeholders from each brand to agree on the overall timeline and identify potential site specific changes required to make the replatforming possible. From there, I drafted a rough backlog and sprint plan, detailing the first couple of weeks where the development team would set up components and CMS structures to support theming across multiple brands.",
        ],
      },
      {
        type: "image",
        src: "/images/ecommerce-white-label/project-overview.png",
        alt: "Project overview",
      },
      {
        type: "text",
        paragraphs: [
          "While the dev team established the framework, I designed a flexible theming system that included brand tokens, typography, colour, and spacing so that a single component library could serve multiple brands. I also defined clear rules for where brands could diverge eg: accent colours and typography scale, versus where consistency was critical (checkout flows). This gave us a clearer view of feature parity between sites and surfaced larger differences requiring strategic decisions.",
        ],
      },
      {
        type: "image",
        src: "/images/ecommerce-white-label/tokens.png",
        alt: "Brand tokens and theming system",
      },
      {
        type: "text",
        paragraphs: [
          "Throughout the project, I ran ongoing stakeholder review sessions to evaluate changes. Where CRO data already existed, we adopted the proven winning configuration by default. For untested features, we facilitated deeper discussions between stakeholders and set up new CRO tests where needed. For example: PDP images on Pavers used a carousel, while Jones used a grid. With no existing data, I initiated a CRO test, which confirmed the grid layout performed better.",
        ],
      },
      {
        type: "image",
        src: "/images/ecommerce-white-label/carousel-vs-grid.png",
        alt: "Carousel vs grid CRO test",
      },
      {
        type: "text",
        paragraphs: [
          "Due to time restraints, not every feature could be tested ahead of launch. For instance, PLP / Collection filter layouts and product card details defaulted to the Pavers implementation, with post-launch tests planned to validate and optimise.",
          "To keep development unblocked, I ran staggered design handoffs, accepting functionally correct (but not pixel-perfect) builds when necessary. Each sprint included handoffs of a few core pages eg: PDP and PLP designs for both brands. These would be signed off by stakeholders before moving into development the next sprint.",
          "Third-party integrations were a major risk area, particularly for marketing teams such as CRM, Paid Social, and PPC platforms. To mitigate delays, we pushed to implement and configure these systems as early as possible, enabling UAT by marketing teams and external partners before UI completion.",
          "By the halfway point, we were working closely with ecommerce and marketing teams on QA and UAT. Without a dedicated QA resource, testing was shared between myself and the development team before handoff to business stakeholders for sign off.",
          "Given the high risks around tagging, tracking, product feeds, and campaign setup, I collaborated with developers and an external agency to document site changes, minimise performance impact, and preserve tracking accuracy.",
          "In the final weeks, I facilitated group UAT sessions with wider business teams. Especially those not involved in day to day development or testing, to uncover overlooked issues and build a backlog of enhancements for post launch.",
        ],
      },
      {
        type: "text",
        title: "Outcomes",
        paragraphs: [
          "By the end of the project, our team had gained deep insights into the systems, third-party integrations, and design nuances of both brands. We successfully unified our tech stack and used the opportunity to document a range of new features and functionalities - many of which had previously been overlooked or not fully understood.",
          "- A single white label codebase powering multiple brands.\n- CRO wins from Pavers seamlessly applied to Jones from day one.\n- Introduced new features including Wishlist, Pre-Order, Purchase on Collection Page, and Combined Product Listings.\n- Cleaner event schema and improved revenue attribution, with a clear path to resolving inherited attribution issues from Pavers in the coming months.\n- Performance enhancements, with faster LCP and reduced errors.\n- Operational efficiencies for E-commerce, creative and marketing teams, thanks to simplified file sizes and dimensions.",
        ],
      },
      {
        type: "carousel",
        images: [
          { src: "/images/ecommerce-white-label/1.webp", alt: "Jones Bootmaker white label – image 1" },
          { src: "/images/ecommerce-white-label/2.webp", alt: "Jones Bootmaker white label – image 2" },
          { src: "/images/ecommerce-white-label/3.avif", alt: "Jones Bootmaker white label – image 3" },
          { src: "/images/ecommerce-white-label/4.avif", alt: "Jones Bootmaker white label – image 4" },
          { src: "/images/ecommerce-white-label/5.avif", alt: "Jones Bootmaker white label – image 5" },
        ],
      },
      {
        type: "metrics",
        title: "Impacts & Results",
        items: [
          { label: "Revenue", value: "+43% uplift" },
          { label: "Conversion Rate", value: "+9.2% uplift" },
          { label: "Attribution", value: "Reduced unassigned revenue by 14%" },
          { label: "Operational Efficiency", value: "30% time saving for ecom & creative teams" },
          { label: "Engineering Effort", value: "25% drop in work duplication" },
        ],
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
        paragraphs: ["Coming soon."],
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
        paragraphs: ["Coming soon."],
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
        paragraphs: ["Coming soon."],
      },
    ],
  },
];
