import PageWrapper from "@/components/PageWrapper";
import { Separator } from "@/components/ui/separator";

const links = [
  { label: "Email", href: "mailto:hello@yourname.com", display: "hello@yourname.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourname", display: "linkedin.com/in/yourname" },
  { label: "Read.cv", href: "https://read.cv/yourname", display: "read.cv/yourname" },
];

export default function Contact() {
  return (
    <PageWrapper>
      <section className="space-y-4">
        <h1 className="text-2xl font-medium text-foreground">Contact</h1>
        <p className="text-muted-foreground leading-relaxed">
          Open to new projects, contract work, and interesting conversations.
          The best way to reach me is by email.
        </p>
      </section>

      <Separator className="my-10" />

      <ul className="space-y-4">
        {links.map(({ label, href, display }) => (
          <li key={label} className="flex items-baseline justify-between">
            <span className="text-sm text-muted-foreground">{label}</span>
            <a
              href={href}
              className="text-sm text-foreground"
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            >
              {display}
            </a>
          </li>
        ))}
      </ul>
    </PageWrapper>
  );
}
