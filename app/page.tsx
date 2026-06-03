import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import { Separator } from "@/components/ui/separator";
import { caseStudies } from "@/lib/case-studies";

export default function Home() {
  const featured = caseStudies.slice(0, 4);

  return (
    <PageWrapper>
      <section className="space-y-4">
        <h1 className="text-2xl font-medium text-foreground">James Molyneux-Birch</h1>
        <p className="text-muted-foreground leading-relaxed">
          I&apos;m a UX/UI designer with over 5 years experience delivering
          digital products. Currently at{" "}
          <Link href="https://www.foundationhealth.com/" className="text-foreground underline underline-offset-2" target="_blank" rel="noopener noreferrer">Foundation Health</Link>.
        </p>
      </section>

      <Separator className="my-10" />

      <section className="space-y-6">
        <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Selected Work
        </h2>
        <ul className="space-y-4">
          {featured.map((study) => (
            <li key={study.slug}>
              <Link
                href={`/work/${study.slug}`}
                className="group flex items-baseline justify-between"
              >
                <span className="text-foreground">{study.title}</span>
                <span className="text-sm text-muted-foreground">
                  {study.year}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/work"
          className="inline-block text-sm text-muted-foreground"
        >
          View all work →
        </Link>
      </section>
    </PageWrapper>
  );
}
