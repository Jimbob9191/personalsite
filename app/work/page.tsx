import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { caseStudies } from "@/lib/case-studies";

export default function Work() {
  return (
    <PageWrapper>
      <section className="space-y-4">
        <h1 className="text-2xl font-medium text-foreground">Work</h1>
        <p className="text-muted-foreground leading-relaxed">
          A selection of projects from the past few years.
        </p>
      </section>

      <Separator className="my-10" />

      <ul className="space-y-10">
        {caseStudies.map((study) => (
          <li key={study.slug}>
            <Link href={`/work/${study.slug}`} className="group block space-y-3">
              <div className="flex items-baseline justify-between">
                <h2 className="text-base font-medium text-foreground">
                  {study.title}
                </h2>
                <span className="text-sm text-muted-foreground">
                  {study.year}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {study.summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </PageWrapper>
  );
}
