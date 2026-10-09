import { motion } from "motion/react";

const facts = [
  {
    k: "SEO",
    v: "Technical & On-Page SEO · Keyword Research · Search Intent · Website Architecture · Internal Linking · Schema Markup · AEO / AI Search Optimization",
  },
  {
    k: "Crawling & Performance",
    v: "Crawling & Indexing · XML Sitemap · Robots.txt · Core Web Vitals · SEO Audits",
  },
  { k: "Analytics", v: "Google Search Console · Google Analytics · SEO Performance Analysis" },
  {
    k: "Development",
    v: "HTML · JavaScript · React · Next.js · Node.js · Express · MongoDB · PostgreSQL · Prisma · Redis · Git/GitHub",
  },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="grid gap-14 md:grid-cols-[0.8fr_1.2fr]"
      >
        <h2 className="font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">
          (01) About
        </h2>

        <div className="space-y-8">
          <p className="font-display text-2xl leading-snug tracking-tight sm:text-3xl">
            I&apos;m an SEO-focused developer who builds websites and makes them easy to find —
            from site structure to search-ready code.
          </p>
          <p className="max-w-2xl leading-relaxed text-muted-foreground">
            I have hands-on experience in technical SEO, on-page optimization, website
            structure and performance. My full-stack background in React, Node.js, MongoDB and
            PostgreSQL lets me bridge SEO and development teams, shipping changes that actually
            improve crawling, indexing and rankings.
          </p>

          <dl className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
            {facts.map((f) => (
              <div key={f.k} className="bg-background p-5">
                <dt className="font-mono text-[11px] uppercase tracking-widest text-primary">
                  {f.k}
                </dt>
                <dd className="mt-2 text-sm text-foreground">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </motion.div>
    </section>
  );
}
