import PageWrapper from "@/components/PageWrapper";

const links = [
  { label: "Email", href: "mailto:jamesmolyneuxbirch@gmail.com", display: "jamesmolyneuxbirch@gmail.com" },
  { label: "Linkedin", href: "https://www.linkedin.com/in/jamesmolyneuxbirch/", display: "linkedin.com/in/jamesmolyneuxbirch" },
  { label: "Dribbble", href: "https://dribbble.com/jamesmolyneuxbirch", display: "dribbble.com/jamesmolyneuxbirch" },
];

export default function Contact() {
  return (
    <PageWrapper>
      <section className="space-y-4">
        <h1 className="text-2xl font-medium text-foreground">Contact</h1>
        <p className="text-muted-foreground leading-relaxed">
          I'm always open to new projects, contract work and interesting conversations. The best way to reach me is via email.
        </p>
      </section>

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
