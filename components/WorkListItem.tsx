"use client";

import Link from "next/link";
import { useState } from "react";

interface WorkListItemProps {
  href: string;
  title: string;
  year: string;
}

export default function WorkListItem({ href, title, year }: WorkListItemProps) {
  const [hovered, setHovered] = useState(false);
  const text = hovered ? "read me" : year;

  return (
    <Link
      href={href}
      className="group flex items-baseline justify-between -mx-2 px-2 py-1.5 rounded-lg hover:bg-muted hover:px-3 transition-all duration-150"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="text-foreground">{title}</span>
      <span
        key={text}
        className="t-digit-group is-animating text-sm text-muted-foreground font-mono"
      >
        {text.split("").map((char, i) => (
          <span
            key={i}
            className="t-digit"
            style={i > 0 ? { animationDelay: `calc(var(--digit-stagger) * ${i})` } : undefined}
          >
            {char === " " ? " " : char}
          </span>
        ))}
      </span>
    </Link>
  );
}
