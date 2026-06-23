"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="page-x fixed left-0 top-0 z-50 flex h-[var(--nav-height)] w-full items-center justify-between border-b hairline bg-paper/92 backdrop-blur-md">
      <Link href="/" className="focus-ring font-mono text-xs uppercase tracking-normal">
        Portfolio / 2026
      </Link>
      <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
        {links.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn("focus-ring meta-label transition-colors hover:text-ink", pathname === link.href && "text-ink")}
          >
            {String(index + 1).padStart(2, "0")} {link.label}
          </Link>
        ))}
      </nav>
      <button className="focus-ring md:hidden" type="button" aria-label="Toggle navigation" onClick={() => setOpen((value) => !value)}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      {open ? (
        <div className="page-x absolute left-0 top-[var(--nav-height)] grid w-full gap-6 border-b hairline bg-paper py-8 md:hidden">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-3xl" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}
