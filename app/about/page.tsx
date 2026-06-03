import PageWrapper from "@/components/PageWrapper";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const skills = [
  "Figma",
  "Prototyping",
  "User Research",
  "Usability Testing",
  "Design Systems",
  "Interaction Design",
  "Information Architecture",
  "Accessibility",
  "HTML / CSS",
  "Framer",
];

const tools = [
  "Figma",
  "Notion",
  "Linear",
  "Maze",
  "Hotjar",
  "Loom",
  "VS Code",
];

export default function About() {
  return (
    <PageWrapper>
      <section className="space-y-4">
        <h1 className="text-2xl font-medium text-foreground">About</h1>
        <p className="text-foreground leading-relaxed">
          I&apos;m a product designer with eight years of experience working
          across SaaS, e-commerce, and consumer apps. I care about clear
          thinking, direct communication, and design that earns its place.
        </p>
        <p className="text-foreground leading-relaxed">
          Before going independent I was Head of Design at a fintech startup
          in Amsterdam. Before that I studied Graphic Design at Central Saint
          Martins, which is where I learned that constraints are usually a gift.
        </p>
        <p className="text-foreground leading-relaxed">
          I work with teams who want someone who can operate across the full
          design stack — strategy, systems, and pixel-level execution — without
          needing a lot of hand-holding.
        </p>
      </section>

      <Separator className="my-10" />

      <section className="space-y-4">
        <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Capabilities
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      <Separator className="my-10" />

      <section className="space-y-4">
        <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Tools
        </h2>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <Badge key={tool} variant="outline">
              {tool}
            </Badge>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
