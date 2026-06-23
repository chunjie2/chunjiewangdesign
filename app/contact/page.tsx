import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact page structure with email, social links, location, and optional form."
};

export default function ContactPage() {
  return (
    <section className="page-x min-h-screen pb-24 pt-32">
      <div className="site-grid border-b hairline pb-12">
        <div className="col-span-12 md:col-span-8">
          <p className="meta-label">Contact</p>
          <h1 className="mt-4 text-5xl leading-none md:text-8xl">Open to roles, collaborations, and conversations.</h1>
        </div>
      </div>
      <div className="site-grid py-14">
        <div className="col-span-12 md:col-span-4">
          <p className="meta-label">Email</p>
          <Link href="mailto:hello@example.com" className="mt-3 block text-3xl">hello@example.com</Link>
        </div>
        <div className="col-span-12 grid gap-6 md:col-span-3">
          <p className="meta-label">Social</p>
          {["LinkedIn", "Instagram", "Portfolio PDF"].map((item) => (
            <Link key={item} href="#" className="border-b hairline pb-2 text-xl">
              {item}
            </Link>
          ))}
        </div>
        <div className="col-span-12 md:col-span-3 md:col-start-10">
          <p className="meta-label">Location</p>
          <p className="mt-3 text-xl">City Placeholder, USA</p>
        </div>
      </div>
      <form className="site-grid border-t hairline pt-10">
        <p className="meta-label col-span-12 md:col-span-3">Optional Form</p>
        <div className="col-span-12 grid gap-4 md:col-span-7">
          <input className="border-b hairline bg-transparent py-3 outline-none focus:border-ink" placeholder="Name" aria-label="Name" />
          <input className="border-b hairline bg-transparent py-3 outline-none focus:border-ink" placeholder="Email" aria-label="Email" />
          <textarea className="min-h-36 border-b hairline bg-transparent py-3 outline-none focus:border-ink" placeholder="Message" aria-label="Message" />
          <button type="submit" className="focus-ring mt-4 w-fit border border-ink px-5 py-3 meta-label text-ink">
            Send Placeholder
          </button>
        </div>
      </form>
    </section>
  );
}
