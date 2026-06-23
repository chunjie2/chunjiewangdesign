export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="site-grid items-end border-t hairline pt-5">
      <p className="meta-label col-span-12 md:col-span-3">{eyebrow}</p>
      <h2 className="col-span-12 text-3xl leading-tight md:col-span-8 md:text-5xl">{title}</h2>
    </div>
  );
}
