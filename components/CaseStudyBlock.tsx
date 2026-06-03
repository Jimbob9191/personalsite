import { Separator } from "@/components/ui/separator";
import type { Block } from "@/lib/case-studies";

export default function CaseStudyBlock({ block }: { block: Block }) {
  if (block.type === "text") {
    return (
      <p className="text-foreground leading-relaxed">
        {block.content}
      </p>
    );
  }

  return (
    <figure className="m-0">
      <div className="relative w-full overflow-hidden rounded-lg bg-muted">
        <img
          src={block.src}
          alt={block.alt}
          className="w-full object-cover"
          style={{ aspectRatio: "16/9" }}
        />
      </div>
      {block.caption && (
        <figcaption className="mt-2 text-sm text-muted-foreground">
          {block.caption}
        </figcaption>
      )}
    </figure>
  );
}

export function CaseStudyBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-0">
      {blocks.map((block, i) => (
        <div key={i}>
          <CaseStudyBlock block={block} />
          {i < blocks.length - 1 && <Separator className="my-8" />}
        </div>
      ))}
    </div>
  );
}
