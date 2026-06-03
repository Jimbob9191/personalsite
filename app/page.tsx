import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import { caseStudies } from "@/lib/case-studies";
import WorkListItem from "@/components/WorkListItem";

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

      <div className="my-10" />

      <section>
        <ul className="space-y-2">
          {featured.map((study) => (
            <li key={study.slug}>
              <WorkListItem href={`/work/${study.slug}`} title={study.title} year={study.year} />
            </li>
          ))}
        </ul>
      </section>
    </PageWrapper>
  );
}
