import Image from "next/image"
import type { Block } from "@/lib/case-studies"
import { CaseStudyCarousel } from "@/components/CaseStudyCarousel"
import { ImageLightbox } from "@/components/ImageLightbox"

function ParagraphContent({ text }: { text: string }) {
  const lines = text.split("\n");
  const segments: { type: "text"; content: string } | { type: "bullets"; items: string[] } extends infer T ? T[] : never = [];

  let currentBullets: string[] = [];
  let currentText: string[] = [];

  const flush = () => {
    if (currentText.length) {
      const joined = currentText.join("\n").trim();
      if (joined) segments.push({ type: "text", content: joined });
      currentText = [];
    }
    if (currentBullets.length) {
      segments.push({ type: "bullets", items: [...currentBullets] });
      currentBullets = [];
    }
  };

  for (const line of lines) {
    if (line.startsWith("- ")) {
      if (currentText.length) {
        const joined = currentText.join("\n").trim();
        if (joined) segments.push({ type: "text", content: joined });
        currentText = [];
      }
      currentBullets.push(line.slice(2));
    } else {
      if (currentBullets.length) {
        segments.push({ type: "bullets", items: [...currentBullets] });
        currentBullets = [];
      }
      currentText.push(line);
    }
  }
  flush();

  return (
    <>
      {segments.map((seg, i) =>
        seg.type === "bullets" ? (
          <ul key={i} className="space-y-2 mt-2">
            {seg.items.map((item, j) => (
              <li key={j} className="flex gap-3 text-muted-foreground leading-relaxed">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p key={i} className="text-muted-foreground leading-relaxed whitespace-pre-line">
            {seg.content}
          </p>
        )
      )}
    </>
  );
}

export default function CaseStudyBlock({ block }: { block: Block }) {
  if (block.type === "metrics") {
    return (
      <div className="space-y-4">
        {block.title && (
          <h2 className="text-base font-medium text-foreground">{block.title}</h2>
        )}
        <ul className="space-y-4">
          {block.items.map(({ label, value }) => (
            <li key={label} className="flex items-baseline justify-between">
              <span className="text-sm text-muted-foreground">{label}</span>
              <span className="text-sm text-foreground">{value}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (block.type === "text") {
    return (
      <div className="space-y-4">
        {block.title && (
          <h2 className="text-base font-medium text-foreground">{block.title}</h2>
        )}
        {block.paragraphs.map((p, i) => (
          <ParagraphContent key={i} text={p} />
        ))}
      </div>
    );
  }

  if (block.type === "carousel") {
    return <CaseStudyCarousel images={block.images} caption={block.caption} />;
  }

  return (
    <figure className="m-0 space-y-2">
      <ImageLightbox src={block.src} alt={block.alt} className="block w-full cursor-zoom-in">
        <Image
          src={block.src}
          alt={block.alt}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto rounded-lg"
        />
      </ImageLightbox>
      {block.caption && (
        <figcaption className="text-sm text-muted-foreground">
          {block.caption}
        </figcaption>
      )}
    </figure>
  );
}

export function CaseStudyBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-14">
      {blocks.map((block, i) => (
        <div key={i}>
          <CaseStudyBlock block={block} />
        </div>
      ))}
    </div>
  );
}
