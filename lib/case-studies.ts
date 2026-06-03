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
        title: "Background",
        paragraphs: [
          "MetaMask is a software cryptocurrency wallet used to interact with the Ethereum blockchain. It allows users to access their Ethereum wallet through a browser extension or mobile app, which can then be used to interact with decentralised applications.",
          "In this instance, I will be focussing on the mobile application available on the App Store.",
        ],
      },
      {
        type: "image",
        src: "/images/metamask-onboarding/background.avif",
        alt: "MetaMask background overview",
      },
      {
        type: "text",
        title: "The Problem",
        paragraphs: [
          "MetaMask has millions of users worldwide and a wide range of features that they can interact with. Upon opening the app for the first time, the user is walked through a short onboarding process in order to set up their wallet. For seasoned crypto enthusiasts this shouldn't be an issue, but for first timers this can be a little overwhelming or confusing.",
          "There are four main steps in the onboarding before the user is directed to the dashboard:\n\n- Accept the terms of use.\n- Create a password for your account.\n- Review your recovery phrase.\n- Enter the recovery phrase given to you.",
          "These steps, although brief, will give the user the basic knowledge they need in order to access their account. However the information is presented in an inconsistent and at times confusing format, reducing any trust the user may already have in the platform.",
          "As you can see from the images below, there is a lot of variation in the styling of buttons, inputs and typography. Even when the onboarding process is complete and the user is directed to the dashboard, the style of messaging changes once again.",
          "Overall, the process feels half hearted and unprofessional. Which isn't something you want from an application meant for holding your investments.",
        ],
      },
      {
        type: "carousel",
        images: [
          { src: "/images/metamask-onboarding/metamask-2.png", alt: "MetaMask onboarding – current screens" },
          { src: "/images/metamask-onboarding/metamask-3.png", alt: "MetaMask onboarding – inconsistent styling" },
        ],
      },
      {
        type: "text",
        title: "Outcomes",
        paragraphs: [
          "In order to help alleviate some of the issues mentioned above, I did the following:\n\n- Set a clear type hierarchy.\n- Consolidate the styling of inputs and buttons.\n- Adjust the colour scheme to inspire trust.",
        ],
      },
      {
        type: "carousel",
        images: [
          { src: "/images/metamask-onboarding/3.webp", alt: "MetaMask onboarding redesign – 3" },
          { src: "/images/metamask-onboarding/2.webp", alt: "MetaMask onboarding redesign – 2" },
          { src: "/images/metamask-onboarding/4.avif", alt: "MetaMask onboarding redesign – 4" },
          { src: "/images/metamask-onboarding/metamask-5.png", alt: "MetaMask onboarding redesign – 5" },
          { src: "/images/metamask-onboarding/metamask-4.png", alt: "MetaMask onboarding redesign – 6" },
          { src: "/images/metamask-onboarding/metamask-1.png", alt: "MetaMask onboarding redesign – 7" },
          { src: "/images/metamask-onboarding/1.png", alt: "MetaMask onboarding redesign – 1" },
        ],
      },
    ],
  },
  {
    slug: "payment-portal",
    title: "Redesigning A Payment Portal",
    tags: ["UX Research", "Fintech", "Payments"],
    summary: "Rethinking a payment portal to reduce friction and increase successful transaction rates.",
    year: "2020",
    blocks: [
      {
        type: "text",
        title: "Background",
        paragraphs: [
          "MYCRS is a payment portal allowing debtors to make payments on debts from other businesses. In 2013 the site was originally designed as a desktop first portal, with only secondary consideration for mobile. By late 2019, consumer behaviour had shifted dramatically, with 95% of traffic now coming from mobile devices.",
          "To address this, I partnered with the development team to redesign the experience for mobile users and re establish MYCRS as a market leading platform. Our goals were to improve conversion rates, prioritise accessibility, improve customer satisfaction and ensure the system was scalable for future enhancements.",
          "While CRS offers a range of services, the core business model follows a simple flow:\n\n- A customer purchases a product or service but cannot or does not pay.\n- The company attempts to collect the debt but is unsuccessful.\n- The debt is referred to CRS.\n- CRS engages with the customer, primarily through digital channels, to recover the balance, earning a commission on successful collections.",
        ],
      },
      {
        type: "carousel",
        images: [
          { src: "/images/payment-portal/challenge-1.png", alt: "MYCRS challenge 1" },
          { src: "/images/payment-portal/challenge-2.png", alt: "MYCRS challenge 2" },
          { src: "/images/payment-portal/challenge-3.png", alt: "MYCRS challenge 3" },
        ],
      },
      {
        type: "text",
        title: "The Problem",
        paragraphs: [
          "By 2019, the customer portal had become outdated and ineffective. The last redesign in 2017 had overlooked accessibility standards and failed to prioritise user experience. The platform's heavy reliance on JavaScript caused frequent errors across devices, resulting in an inconsistent and frustrating user journey. Customers were often unable to complete essential tasks smoothly, leading to decreased trust, reduced satisfaction, and ultimately, a measurable decline in revenue.",
          "I aimed to redesign the customer portal to deliver a consistent, accessible, and user friendly experience across devices, restoring customer trust, increasing satisfaction and driving revenue higher.",
        ],
      },
      {
        type: "text",
        title: "Research & Discovery",
        paragraphs: [
          "Research Methods: Heat Mapping, User Personas, Analytics Review, Customer Feedback Analysis",
          "Key Insights:\n\n- Customers did not immediately recognise the CRS brand and often dismissed it as unrelated to their debts. This led to confusion, mistrust and lower engagement with the service.\n- Most customer interactions took place via SMS and email, typically accessed on a customer's mobile device during the workday or shortly after. To support this behaviour, a quick and seamless login process is essential to ensure an efficient and frictionless user journey.\n- Frustrating experiences were leading to negative online reviews. Poor ratings then eroded trust, discourage new customers, and reinforce a cycle of low expectations and reduced engagement.\n- Technical issues were reducing customer trust, stopping users from completing payments even after login had been completed.\n- The homepage demanded too much personal information upfront, discouraging customers before they could explore.\n- Before login, customers were given just enough information to contact CRS, but not enough to build the trust needed to make payments directly, leading most to reach out by email or phone first.",
        ],
      },
      {
        type: "image",
        src: "/images/payment-portal/process.png",
        alt: "MYCRS research process",
      },
      {
        type: "text",
        title: "Process",
        paragraphs: [
          "As the lead designer, I was responsible for a complete overhaul of the portal's design, ensuring it was secure, intuitive and aligned with business goals. Given the portal's role as a primary revenue channel, timelines were extremely tight. My process consisted of:\n\n- Implementing heat mapping to analyse behaviour and identify pain points.\n- Conducted interviews with stakeholders and customer support agents to get a better understanding of the business goals and customer behaviour.\n- Creating user personas to guide design decisions.\n- Conducted quick user testing sessions internally using prototypes and wireframes to get early feedback.\n- Restructuring user flows to be more intuitive.\n- Establishing a consistent design system, consolidating the existing style for clarity and coherence.",
        ],
      },
      {
        type: "text",
        title: "Outcomes",
        paragraphs: [
          "Throughout the project we had learned a lot about the user base and the niche use cases that users were running into whilst trying to use our platform. Whilst we couldn't implement all the functionality we wanted to at launch, we did manage to ship with a set of new features and some great performance improvements:\n\n- As we had to verify users identities with sensitive information, we changed some of the login questions to be hidden until a user had submitted a single piece of information, this played into the hands of commitment bias.\n- We developed some self-service tools inside the portal, including an interactive FAQ and account management features to reduce reliance on the call centre.\n- We design and developed an early example of CRS' white label capabilities to expand the platform's potential for future growth. The added white labelling of customers brands would later boost trust significantly.\n- We added much clearer interaction feedback to assist customers from the beginning to the end of the payment process, reassuring customers whenever possible.\n- We implemented a much more in-depth account dashboard that allowed customers to fully understand the length of their payment arrangement, how much they were paying and when.",
        ],
      },
      {
        type: "carousel",
        images: [
          { src: "/images/payment-portal/homepage-image.png", alt: "MYCRS homepage" },
          { src: "/images/payment-portal/outcomemain2.png", alt: "MYCRS outcome 1" },
          { src: "/images/payment-portal/outcomemain.png", alt: "MYCRS outcome 2" },
          { src: "/images/payment-portal/theprocess1.png", alt: "MYCRS process 1" },
          { src: "/images/payment-portal/theprocess2.png", alt: "MYCRS process 2" },
          { src: "/images/payment-portal/theprocess3.png", alt: "MYCRS process 3" },
        ],
      },
      {
        type: "metrics",
        title: "Impacts & Results",
        items: [
          { label: "Bounce Rate", value: "-32% reduction" },
          { label: "Single Payment Conversion Rate", value: "+20% uplift" },
          { label: "Token Payment Rate", value: "+50% uplift in users making a token payment" },
        ],
      },
    ],
  },
  {
    slug: "client-management-portal",
    title: "Redesigning A Client Management Portal",
    tags: ["Product Design", "B2B", "SaaS"],
    summary: "A ground-up redesign of a client management portal to improve usability and workflow efficiency.",
    year: "2019",
    blocks: [
      {
        type: "text",
        title: "Background",
        paragraphs: [
          "CRSMI is an internally built data management and reporting platform used by account managers and clients. The platform allows users to manipulate and interrogate data as they please, offering a standard set of reports which can then be expanded further down the line.",
          "While coeo offers a range of services, the core business model follows a simple flow:\n\n- A client engages COEO for debt recovery services.\n- Account managers use CRSMI to track and manage client portfolios.\n- coeo then delivers results and insights back to clients through the same portal.",
        ],
      },
      {
        type: "carousel",
        images: [
          { src: "/images/client-management-portal/homepage.png", alt: "CRSMI homepage" },
          { src: "/images/client-management-portal/login.png", alt: "CRSMI login" },
          { src: "/images/client-management-portal/report.png", alt: "CRSMI report" },
        ],
      },
      {
        type: "text",
        title: "The Problem",
        paragraphs: [
          "Over time, the CRSMI site had grown through incremental feature additions. While these expanded its capabilities, they also introduced significant inconsistency across design and functionality. Features were added without a clear structure or information hierarchy, resulting in a cluttered menu of mismatched reports and tools. Inconsistent page layouts and non-standardised forms created a fragmented user experience, which became even more frustrating on devices and screens outside of a 16:9 ratio.",
          "To address these challenges, the project set out to rebuild the client reporting functionality from the ground up. The aim was to establish a unified design language, streamline navigation and make features more intuitive to access.",
        ],
      },
      {
        type: "text",
        title: "Research & Discovery",
        paragraphs: [
          "Research Methods: User Interviews, Usability Testing, Analytics Review, Heat Mapping, Card Sorting",
          "Key Insights:\n\n- Clients found the portal's dark theme dated and difficult to use, particularly when trying to read tables and graphs. This reduced overall readability and trust in the platform.\n- Locating specific reports within the menu was time consuming and confusing. Many clients abandoned their search altogether, opting to contact their account manager instead, undermining the purpose of the self service portal.\n- The absence of sort and filter options meant clients couldn't easily customise views or focus on the data most relevant to them, leading to frustration and inefficiency.\n- Users were often unaware when new features were released. As a result, development efforts were underutilised, with valuable resources spent on features that went unnoticed.\n- Tables and data were presented with poor spacing and layout, making them difficult to scan and interpret quickly.\n- Adding or removing users from client accounts required manual intervention from the support team, rather than giving clients direct control - slowing down workflows.\n- Most account management happened on laptops during office hours, where the portal's layout felt cramped and failed to adapt well to smaller screens.",
        ],
      },
      {
        type: "text",
        title: "Process",
        paragraphs: [
          "As the lead designer on the project, I was responsible for shaping the user experience by gathering insights and restructuring content to better serve both internal teams and clients. My approach combined research, testing and iterative design. Focusing on reducing complexity and improving usability, I went about this by doing the following:\n\n- Partnered with account managers to understand the information clients most frequently request, then surfaced these priorities through the homepage and navigation.\n- Conducted card-sorting exercises with internal teams to reorganise reports, reducing cognitive load and making it easier for users to locate key content.\n- Leveraged Hotjar heat mapping to identify which tools were most used and where users encountered friction, informing design refinements.\n- Analysed competitor platforms that handle complex data to establish best practices and opportunities for differentiation.\n- Designed and validated end-to-end user journeys, ensuring clear pathways to critical reports and insights.\n- Facilitated prototype testing sessions with account managers to validate design decisions and gather actionable feedback.",
        ],
      },
      {
        type: "text",
        title: "Outcomes",
        paragraphs: [
          "I worked with the development team and key stakeholders to improve the user experience and take our platform back to a market leading position as it had been in the past. Taking into account accessibility, user satisfaction and future expandability. After shipping the first iteration of the new portal we saw an immediate improvement in user satisfaction and task completion times. We also continued to track user behaviour and users on the new portal were significantly more efficient at completing their daily tasks.\n\n- We simplified the platform's navigation by reducing menu items by 30% and grouping features into intuitive categories that better align with user mental models.\n- We built a comprehensive design system that standardised all UI components, ensuring consistency across the platform and accelerating development of new features. This system was later extended to other internal tools used by customer service and others, creating a seamless experience across the organisation.\n- We introduced clearer, more intuitive data visualisations and reporting tools, enabling users to quickly interpret client performance and make more informed decisions.\n- We implemented responsive design principles so the platform delivers a smooth, consistent experience across all devices—supporting the growing number of users accessing it via mobile.\n- We added powerful search and filtering capabilities, allowing users to quickly locate client information and reports, cutting down on administrative time.\n- We gave users the ability to manage their own teams—adding and removing members, and adjusting access levels instantly, without relying on admin support.\n- We introduced a centralised notifications area, keeping users informed about new report types, portfolio performance updates, and the latest published content from Coeo.",
        ],
      },
      {
        type: "carousel",
        images: [
          { src: "/images/client-management-portal/1.png", alt: "CRSMI redesign – 1" },
          { src: "/images/client-management-portal/2.png", alt: "CRSMI redesign – 2" },
          { src: "/images/client-management-portal/3.png", alt: "CRSMI redesign – 3" },
          { src: "/images/client-management-portal/4.png", alt: "CRSMI redesign – 4" },
          { src: "/images/client-management-portal/5.png", alt: "CRSMI redesign – 5" },
          { src: "/images/client-management-portal/6.png", alt: "CRSMI redesign – 6" },
        ],
      },
      {
        type: "metrics",
        title: "Impacts & Results",
        items: [
          { label: "Task Completion Time", value: "Reduced from 15min to 8min" },
          { label: "User Satisfaction", value: "Increased from 65% to 92%" },
          { label: "Support Tickets", value: "-30% reduction in monthly support tickets" },
        ],
      },
    ],
  },
];
