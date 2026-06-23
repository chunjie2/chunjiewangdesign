import Image from "next/image";
import { cn } from "@/lib/utils";

export function ImageFrame({ src, alt, className, priority = false }: { src: string; alt: string; className?: string; priority?: boolean }) {
  return (
    <div className={cn("relative overflow-hidden bg-line", className)}>
      <Image src={src} alt={alt} fill priority={priority} sizes="(max-width: 768px) 100vw, 70vw" className="object-cover transition-transform duration-700 ease-editorial hover:scale-[1.025]" />
    </div>
  );
}
