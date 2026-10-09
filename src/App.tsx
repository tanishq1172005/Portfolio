import { motion, useScroll, useSpring } from "motion/react";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { ProjectCard } from "./components/ProjectCard";
import { projects } from "./data/projects";

export default function App() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });

  return (
    <main className="min-h-screen bg-background">
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-primary"
      />

      <Hero />
      <Marquee />
      <About />

      <section id="work" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6 border-b border-border pb-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">
              (02) Selected work
            </p>
            <h2 className="mt-5 font-display text-4xl font-medium tracking-tight sm:text-5xl">
              Things I&apos;ve built
            </h2>
          </div>
          <p className="max-w-xs text-sm text-muted-foreground">
            Every card links out to the live project. Hover to look closer.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </section>

      <Experience />
      <Contact />
    </main>
  );
}
