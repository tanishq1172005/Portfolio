import git from "../assets/git.png"
import codearena from "../assets/codearena.jpeg"
import pinterest from "../assets/pinterest.jpeg"

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  href: string;
  year: string;
};

/**
 * Add new projects here — the grid renders whatever is in this array.
 * Drop the image in src/assets and import it above.
 */
export const projects: Project[] = [
  {
    title: "Gitignore Generator",
    description: "SEO-focused developer tool with 100+ users since launch. Built with a search-driven site structure and web optimization, ranking well on Google for gitignore-generator searches.",
    tags: ["Astrojs", "SEO", "JavaScript"],
    image: git,
    href: "https://gitignore.online/",
    year: "2026",
  },
  {
    title: "Pinterest Clone",
    description: "Responsive Pinterest-style app with authentication, database-backed user data and image/pin functionality, built with Next.js, MongoDB, Mongoose and NextAuth.",
    tags: ["Next-auth", "Nextjs", "Mongoose"],
    image: pinterest,
    href: "https://pinterest-clone-v1km-kappa.vercel.app",
    year: "2026",
  },
  {
    title: "Code Arena",
    description:
      "Modern coding platform in a question-answer format. Performance-focused architecture using React, PostgreSQL, Prisma and Redis for backend data management.",
    tags: ["React", "Node", "Express", "Postgres", "Redis"],
    image: codearena,
    href: "https://code-arena-sigma-red.vercel.app/",
    year: "2026",
  },
  // {
  //   title: "Nocturne Store",
  //   description:
  //     "A headless commerce storefront with cart persistence, Stripe checkout and an admin panel for inventory, orders and refunds.",
  //   tags: ["React", "Mongoose", "MongoDB", "Stripe"],
  //   image: commerce,
  //   href: "https://example.com",
  //   year: "2025",
  // },
  // {
  //   title: "Forge API",
  //   description:
  //     "A batteries-included REST toolkit: schema-validated routes, JWT auth, rate limiting and generated docs from a single definition file.",
  //   tags: ["Node", "Express", "Zod", "JWT", "OpenAPI"],
  //   image: api,
  //   href: "https://example.com",
  //   year: "2025",
  // },
  // {
  //   title: "Signal Chat",
  //   description:
  //     "Group messaging with typing indicators, read receipts and offline queueing, built on a socket layer that survives flaky networks.",
  //   tags: ["React", "Socket.IO", "Node", "Redis"],
  //   image: chat,
  //   href: "https://example.com",
  //   year: "2024",
  // },
];
