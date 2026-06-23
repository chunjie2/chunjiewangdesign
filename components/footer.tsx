import Link from "next/link";

export function Footer() {
  return (
    <footer className="page-x border-t hairline py-10">
      <div className="site-grid items-end">
        <div className="col-span-12 md:col-span-6">
          <p className="meta-label">Contact</p>
          <Link className="mt-3 block text-2xl md:text-4xl" href="mailto:hello@example.com">
            hello@example.com
          </Link>
        </div>
        <div className="col-span-12 flex gap-5 md:col-span-6 md:justify-end">
          {["LinkedIn", "Instagram", "Resume"].map((item) => (
            <Link key={item} href="/contact" className="meta-label hover:text-ink">
              {item}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
