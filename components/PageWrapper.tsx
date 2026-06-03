"use client";

import { useEffect, useRef, Children, isValidElement, cloneElement } from "react";
import { cn } from "@/lib/utils";

export default function PageWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    ref.current?.classList.add("is-shown");
  }, []);

  const staggered = Children.map(children, (child, i) => {
    if (!isValidElement(child)) return child;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const el = child as React.ReactElement<any>;
    return cloneElement(el, {
      className: cn(el.props.className, "t-stagger-line"),
      style: {
        ...el.props.style,
        transitionDelay: `calc(var(--stagger-stagger) * ${i})`,
      },
    });
  });

  return (
    <main
      ref={ref}
      className={cn("mx-auto max-w-[600px] px-4 pt-24 pb-16 t-stagger", className)}
    >
      {staggered}
    </main>
  );
}
