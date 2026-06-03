import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import { caseStudies } from "@/lib/case-studies";
import WorkListItem from "@/components/WorkListItem";

export default function Work() {
  return (
    <PageWrapper>
      <section className="space-y-4">
        <h1 className="text-2xl font-medium text-foreground">Work</h1>
        <p className="text-muted-foreground leading-relaxed">
          A limited selection of the work i've created over the past few years.
        </p>
      </section>

      <div className="my-10" />

      <ul className="space-y-2">
        {caseStudies.map((study) => (
          <li key={study.slug}>
            <WorkListItem href={`/work/${study.slug}`} title={study.title} year={study.year} />
          </li>
        ))}
      </ul>
    </PageWrapper>
  );
}
