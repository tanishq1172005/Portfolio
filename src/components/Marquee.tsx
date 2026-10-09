const items = [
  "Technical SEO",
  "On-Page SEO",
  "Core Web Vitals",
  "Schema Markup",
  "Search Console",
  "AEO / AI Search",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
];

export function Marquee() {
  const row = [...items, ...items];

  return (
    <div className="relative flex overflow-hidden border-y border-border bg-secondary/40 py-5">
      <div className="marquee-track flex w-max shrink-0 items-center gap-10 pr-10">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-lg tracking-tight text-muted-foreground">
              {item}
            </span>
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
