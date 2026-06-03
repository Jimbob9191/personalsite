import { cn } from "@/lib/utils";

export default function PageWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main className={cn("mx-auto max-w-[600px] px-4 pt-24 pb-16", className)}>
      {children}
    </main>
  );
}
