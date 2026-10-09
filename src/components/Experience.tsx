import { motion } from "motion/react";

const experience = {
  role: "Engineering Intern",
  company: "Mindtrot",
  points: [
    "Worked on frontend development and web application features using modern JavaScript frameworks.",
    "Built responsive interfaces and worked with backend APIs, databases and application logic.",
    "Applied development knowledge to improve website structure, usability and performance.",
  ],
};

const certifications = [
  {
    title: "Composio × IIT Delhi — Certificate of Participation",
    note: "Built a YouTube video-summary automation using Composio and AI/MCP technologies.",
  },
  {
    title: "Full Stack Generative & Agentic AI — Udemy",
    note: "Hands-on learning covering Agents, RAG, Vector Databases and AI application deployment.",
  },
  {
    title: "100xDevs Bootcamp",
    note: "Full-Stack Web Development & DevOps.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="grid gap-14 md:grid-cols-[0.8fr_1.2fr]"
      >
        <h2 className="font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">
          (03) Experience
        </h2>

        <div className="space-y-14">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
              Experience
            </p>
            <h3 className="mt-3 font-display text-2xl tracking-tight sm:text-3xl">
              {experience.role} · {experience.company}
            </h3>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-muted-foreground">
              {experience.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
              Certifications &amp; Courses
            </p>
            <ul className="mt-4 divide-y divide-border border-y border-border">
              {certifications.map((c) => (
                <li key={c.title} className="py-5">
                  <p className="font-display text-lg tracking-tight">{c.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{c.note}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
              Languages
            </p>
            <p className="mt-3 font-display text-lg tracking-tight">English · Hindi</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
