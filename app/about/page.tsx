import PageWrapper from "@/components/PageWrapper";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const experience = [
  {
    period: "December 2025 – Present",
    company: "Foundation Health",
    role: "UX/UI Designer",
    description: "Text goes here",
  },
  {
    period: "April 2024 – December 2025",
    company: "Pavers Shoes",
    role: "UX/UI Developer",
    description:
      "Built React-based design system and component library in Storybook, championed WCAG accessibility compliance, and delivered digital rebrand in two weeks. Redesigned unified design systems for multiple brands and partnered with developers to implement user-friendly Sanity CMS.",
  },
  {
    period: "September 2020 – April 2024",
    company: "Pavers Shoes",
    role: "UX/UI Designer",
    description:
      "Created wireframes, prototypes and user flows incorporating user personas and journey mapping. Designed page section library for Jones Bootmaker site enabling faster content creation, and designed and executed A/B and multivariate tests for CRO initiatives.",
  },
  {
    period: "July 2020 – September 2022",
    company: "COEO",
    role: "UX Designer",
    description:
      "Managed brand identity through full rebrand of websites and materials, designed UX/UI for payment portal relaunch achieving 19% bounce rate reduction and 22% faster conversion. Oversaw design of 12 internal tools and organized \"Shaping the Future of Collections\" industry event.",
  },
  {
    period: "September 2017 – June 2020",
    company: "Leeds Beckett University",
    role: "BA in Graphic Art & Design",
    description:
      "Explored UX/UI design, photography, videography, and graphic design. Developed skills in creative process, research methodology, giving and receiving feedback, defending design decisions with evidence, and rapid iteration techniques.",
  },
];

export default function About() {
  return (
    <PageWrapper>
      <section className="space-y-4">
        <h1 className="text-2xl font-medium text-foreground">About</h1>
        <p className="text-foreground leading-relaxed">
          Hey, I&apos;m James - a UX/UI designer with over five years of
          experience across fintech, healthcare, and ecommerce, working with
          both early-stage startups and established brands.
        </p>
        <p className="text-foreground leading-relaxed">
          I care about design that earns trust: the kind that gets out of the
          way and lets people do what they actually came to do. Currently
          designing at Foundation Health, previously at Pavers Shoes and coeo.
          Open to well-considered problems at companies that care about craft.
        </p>
        <p className="text-foreground leading-relaxed">
          Outside of work I&apos;m usually shooting photos, playing games, or
          playing with whatever AI tool just dropped.
        </p>
      </section>

      <section className="mt-10">
        <Accordion type="single" collapsible className="w-full">
          {experience.map((item) => (
            <AccordionItem key={`${item.company}-${item.role}`} value={`${item.company}-${item.role}`}>
              <AccordionTrigger className="hover:no-underline">
                <div className="flex flex-col items-start gap-0.5 text-left">
                  <span className="text-foreground font-medium">{item.company}</span>
                  <span className="text-sm text-muted-foreground">{item.role} · {item.period}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </PageWrapper>
  );
}
