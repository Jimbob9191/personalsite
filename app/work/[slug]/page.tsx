import { notFound } from "next/navigation";
import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CaseStudyBlocks } from "@/components/CaseStudyBlock";
import { caseStudies } from "@/lib/case-studies";

export function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) notFound();

  return (
    <PageWrapper>
      <Link
        href="/work"
        className="mb-8 inline-block text-sm text-muted-foreground"
      >
        ← Back to work
      </Link>

      <section className="space-y-4">
        <div className="flex items-baseline justify-between">
          <h1 className="text-2xl font-medium text-foreground">{study.title}</h1>
          <span className="text-sm text-muted-foreground font-mono">{study.year}</span>
        </div>
        <p className="text-muted-foreground leading-relaxed">{study.summary}</p>
        <div className="flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </section>

      <Separator className="my-10" />

      <CaseStudyBlocks blocks={study.blocks} />
    </PageWrapper>
  );
}
