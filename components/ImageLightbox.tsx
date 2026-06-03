"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface Props {
  src: string
  alt: string
  className?: string
  children: React.ReactNode
}

export function ImageLightbox({ src, alt, className, children }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={className}
        aria-label={`View full size: ${alt}`}
      >
        {children}
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[90vw] sm:max-w-[90vw] w-[90vw] p-2 bg-background border-border">
          <Image
            src={src}
            alt={alt}
            width={0}
            height={0}
            sizes="90vw"
            className="w-full h-auto max-h-[85vh] object-contain rounded-md"
          />
        </DialogContent>
      </Dialog>
    </>
  )
}
