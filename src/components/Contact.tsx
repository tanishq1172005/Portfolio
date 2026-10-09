import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  { label: "Email", href: "mailto:tanishq1172005@gmail.com", Icon: Mail },
  { label: "GitHub", href: "https://github.com/tanishq1172005", Icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tanishq-bisht-724528306/",
    Icon: Linkedin,
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border">
      <div aria-hidden className="halo pointer-events-none absolute inset-x-0 bottom-0 h-96 rotate-180" />
      <div className="relative mx-auto max-w-6xl px-6 py-28 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">
            (04) Contact
          </p>
          <h2 className="mt-8 font-display text-[clamp(2.25rem,7vw,5rem)] font-medium leading-[0.95] tracking-[-0.04em]">
            Need a site that
            <br />
            ranks and performs?
          </h2>

          <ul className="mt-12 divide-y divide-border border-y border-border">
            {links.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer noopener"
                  className="group flex items-center justify-between gap-4 py-5 transition-colors duration-300 hover:text-primary"
                >
                  <span className="flex items-center gap-4">
                    <Icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                    <span className="font-display text-xl tracking-tight">{label}</span>
                  </span>
                  <span className="font-mono text-xs text-muted-foreground transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-14 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} Tanishq Singh Bisht
          </p>
        </motion.div>
      </div>
    </section>
  );
}
