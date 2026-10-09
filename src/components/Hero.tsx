import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

const line = {
  hidden: { opacity: 0, y: "100%" },
  show: { opacity: 1, y: "0%" },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-28 sm:px-10 sm:pt-36">
      <div aria-hidden className="halo pointer-events-none absolute inset-x-0 top-0 h-[520px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="font-mono text-xs uppercase tracking-[0.35em] text-primary"
        >
          Hey there — I&apos;m Tanishq
          <span className="caret ml-1 inline-block text-primary">_</span>
        </motion.p>

        <h1 className="mt-8 font-display text-[clamp(2.75rem,10vw,7.5rem)] font-medium leading-[0.92] tracking-[-0.04em]">
          {["Technical SEO &", "web developer"].map((text, i) => (
            <span key={text} className="block overflow-hidden pb-[0.14em]">

              <motion.span
                variants={line}
                initial="hidden"
                animate="show"
                transition={{ duration: 0.9, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                {i === 1 ? (
                  <>
                    <span className="text-muted-foreground">web</span> developer
                  </>
                ) : (
                  text
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 grid gap-10 md:grid-cols-[1.1fr_0.9fr]"
        >
          <p className="max-w-xl text-balance-pretty text-lg leading-relaxed text-muted-foreground">
            SEO-focused developer who builds and optimizes websites for organic search
            visibility — technical SEO, site architecture and Core Web Vitals, backed by a
            full-stack toolkit in React, Node.js, MongoDB and PostgreSQL.
          </p>

          <div className="flex flex-wrap items-start gap-3 md:justify-end">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              See my work
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
            >
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
