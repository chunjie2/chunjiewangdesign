import Image from "next/image";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

export function ImageFrame({
  src,
  alt,
  className,
  priority = false,
  fit = "cover",
  style
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fit?: "cover" | "contain";
  style?: CSSProperties;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-line", className)} style={style}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 70vw"
        className={cn(
          "transition-transform duration-700 ease-editorial",
          fit === "contain" ? "object-contain" : "object-cover hover:scale-[1.025]"
        )}
      />
    </div>
  );
}
