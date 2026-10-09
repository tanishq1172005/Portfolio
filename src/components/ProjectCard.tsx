import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/projects";

type Props = { project: Project; index: number };

export function ProjectCard({ project, index }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const sx = useSpring(mx, { stiffness: 140, damping: 18 });
  const sy = useSpring(my, { stiffness: 140, damping: 18 });

  const rotateY = useTransform(sx, [0, 1], [-6, 6]);
  const rotateX = useTransform(sy, [0, 1], [5, -5]);
  const glowX = useTransform(sx, (v) => `${v * 100}%`);
  const glowY = useTransform(sy, (v) => `${v * 100}%`);

  function handleMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  }

  return (
    <motion.a
      ref={ref}
      href={project.href}
      target="_blank"
      rel="noreferrer noopener"
      onMouseMove={handleMove}
      onMouseLeave={() => {
        mx.set(0.5);
        my.set(0.5);
      }}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      className="group relative block overflow-hidden rounded-xl border border-border bg-card [box-shadow:var(--shadow-card)] transition-colors duration-300 hover:border-primary/50"
    >
      <motion.span
        aria-hidden
        style={{ left: glowX, top: glowY }}
        className="pointer-events-none absolute -z-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} interface preview`}
          loading="lazy"
          width={1200}
          height={900}
          className="h-56 w-full object-cover opacity-80 saturate-[0.85] transition-all duration-700 ease-out group-hover:scale-[1.06] group-hover:opacity-100 group-hover:saturate-100 sm:h-64"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/25 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-border bg-background/70 px-3 py-1 font-mono text-[11px] tracking-widest text-muted-foreground backdrop-blur">
          {String(index + 1).padStart(2, "0")} / {project.year}
        </span>
      </div>

      <div className="relative z-10 space-y-4 p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl font-medium tracking-tight text-foreground">
            {project.title}
          </h3>
          <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
          </span>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        <ul className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border bg-secondary px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground transition-colors duration-300 group-hover:border-primary/30 group-hover:text-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </motion.a>
  );
}
