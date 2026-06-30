import Link from "next/link";

export function Footer() {
  return (
    <footer className="page-x border-t hairline py-10">
      <div className="site-grid items-end">
        <div className="col-span-12 md:col-span-6">
          <p className="meta-label">Contact</p>
          <Link className="mt-3 block text-2xl md:text-4xl" href="mailto:wangchunjiecj@gmail.com">
            wangchunjiecj@gmail.com
          </Link>
        </div>
        <div className="col-span-12 flex gap-5 md:col-span-6 md:justify-end">
          {[
            { label: "LinkedIn", href: "https://www.linkedin.com/in/chunjie-wang-06b95b261" },
            { label: "Instagram", href: "/contact" },
            { label: "Resume", href: "/Chunjie-Wang-Resume.pdf" }
          ].map((item) => (
            <Link key={item.label} href={item.href} className="meta-label hover:text-ink" target={item.href.startsWith("http") || item.href.endsWith(".pdf") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
