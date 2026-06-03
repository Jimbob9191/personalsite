"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
];

export default function Nav() {
  const pathname = usePathname();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    ref.current?.classList.add("is-shown");
  }, []);

  return (
    <nav ref={ref} className="fixed top-4 left-1/2 z-50 -translate-x-1/2 t-stagger">
      <div className="t-stagger-line flex items-center gap-1 rounded-full border border-border/40 bg-background/60 px-3 py-2 backdrop-blur-md shadow-sm">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "rounded-full px-3 py-1 text-sm text-foreground/70",
              pathname === href && "text-foreground"
            )}
          >
            {label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="rounded-full bg-foreground px-3 py-1 text-sm text-background"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
