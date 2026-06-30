import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Chunjie Wang for architectural design opportunities and collaborations."
};

export default function ContactPage() {
  return (
    <section className="page-x min-h-screen pb-24 pt-32">
      <div className="site-grid border-b hairline pb-12">
        <div className="col-span-12 md:col-span-8">
          <p className="meta-label">Contact</p>
          <h1 className="mt-4 text-5xl leading-none md:text-8xl">Open to architectural design roles, collaborations, and conversations.</h1>
        </div>
      </div>
      <div className="site-grid py-14">
        <div className="col-span-12 md:col-span-4">
          <p className="meta-label">Email</p>
          <Link href="mailto:wangchunjiecj@gmail.com" className="mt-3 block text-3xl">wangchunjiecj@gmail.com</Link>
        </div>
        <div className="col-span-12 grid gap-6 md:col-span-3">
          <p className="meta-label">Links</p>
          {[
            { label: "LinkedIn", href: "https://www.linkedin.com/in/chunjie-wang-06b95b261" },
            { label: "Instagram", href: "#" },
            { label: "Resume PDF", href: "/Chunjie-Wang-Resume.pdf" }
          ].map((item) => (
            <Link key={item.label} href={item.href} className="border-b hairline pb-2 text-xl" target={item.href.startsWith("http") || item.href.endsWith(".pdf") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="col-span-12 md:col-span-3 md:col-start-10">
          <p className="meta-label">Location</p>
          <p className="mt-3 text-xl">Los Angeles, CA</p>
        </div>
      </div>
      <form className="site-grid border-t hairline pt-10">
        <p className="meta-label col-span-12 md:col-span-3">Message</p>
        <div className="col-span-12 grid gap-4 md:col-span-7">
          <input className="border-b hairline bg-transparent py-3 outline-none focus:border-ink" placeholder="Name" aria-label="Name" />
          <input className="border-b hairline bg-transparent py-3 outline-none focus:border-ink" placeholder="Email" aria-label="Email" />
          <textarea className="min-h-36 border-b hairline bg-transparent py-3 outline-none focus:border-ink" placeholder="Message" aria-label="Message" />
          <button type="submit" className="focus-ring mt-4 w-fit border border-ink px-5 py-3 meta-label text-ink">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}
