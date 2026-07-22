import type {
  ExperienceItem,
  NavLink,
  Project,
  Service,
  SocialLink,
  TechItem,
  Testimonial,
} from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
  { label: "Email", href: "mailto:azanahmedkhan.dev@gmail.com", icon: "email" },
];

export const TECH_STACK: TechItem[] = [
  { name: "Next.js", icon: "nextjs" },
  { name: "React", icon: "react" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "PostgreSQL", icon: "postgres" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Prisma", icon: "prisma" },
  { name: "GSAP", icon: "gsap" },
  { name: "Docker", icon: "docker" },
  { name: "AWS", icon: "aws" },
  { name: "Git", icon: "git" },
];

export const PROJECTS: Project[] = [
  {
    id: "project-1",
    title: "Nova Commerce",
    description:
      "A high-performance e-commerce platform with real-time inventory, smart search, and a checkout flow built for conversion.",
    image: "/projects/project-1.svg",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    challenges:
      "Needed fast product browsing and a reliable checkout under heavy traffic.",
    solution:
      "Built a server-rendered catalog with optimized caching and a clean payment flow using Stripe.",
    result:
      "Faster page loads, smoother checkout, and a clearer path from browse to purchase.",
  },
  {
    id: "project-2",
    title: "Pulse Analytics",
    description:
      "A dashboard for product teams to track KPIs, user journeys, and funnel health in one place.",
    image: "/projects/project-2.svg",
    technologies: ["React", "Node.js", "MongoDB", "Recharts"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    challenges:
      "Teams were switching between tools and missing trends until it was too late.",
    solution:
      "Designed a focused analytics UI with clear charts, filters, and role-based access.",
    result:
      "Product and growth teams could spot issues earlier and act with more confidence.",
  },
  {
    id: "project-3",
    title: "Studio Booking",
    description:
      "A booking system for creative studios with calendar sync, payments, and client portals.",
    image: "/projects/project-3.svg",
    technologies: ["Next.js", "Prisma", "Tailwind", "GSAP"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    challenges:
      "Manual scheduling caused double bookings and slow client responses.",
    solution:
      "Shipped a calendar-first booking flow with availability rules and automated confirmations.",
    result:
      "Fewer booking conflicts and a smoother experience for both staff and clients.",
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Senior Full Stack Developer",
    company: "PixelForge Studio",
    period: "2023 — Present",
    description:
      "Lead frontend architecture and ship client products with strong UX, performance, and maintainable code.",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    id: "exp-2",
    role: "Full Stack Developer",
    company: "BrightLabs",
    period: "2021 — 2023",
    description:
      "Built and improved SaaS features end to end, from API design to polished UI and deployment.",
    technologies: ["React", "Express", "MongoDB", "AWS"],
  },
  {
    id: "exp-3",
    role: "Frontend Developer",
    company: "Craft Digital",
    period: "2019 — 2021",
    description:
      "Created responsive marketing sites and web apps with clean UI systems and smooth interactions.",
    technologies: ["React", "JavaScript", "SCSS", "WordPress"],
  },
];

export const SERVICES: Service[] = [
  {
    id: "svc-1",
    title: "Full Stack Development",
    description:
      "End-to-end web apps with clean architecture, solid APIs, and interfaces that feel fast.",
    icon: "code",
  },
  {
    id: "svc-2",
    title: "UI Engineering",
    description:
      "Pixel-aware interfaces with thoughtful motion, accessibility, and reusable component systems.",
    icon: "design",
  },
  {
    id: "svc-3",
    title: "Performance Optimization",
    description:
      "Faster loads, smoother interactions, and better Core Web Vitals without sacrificing design.",
    icon: "performance",
  },
  {
    id: "svc-4",
    title: "Technical Consulting",
    description:
      "Clear guidance on stack choices, architecture, and delivery plans for growing products.",
    icon: "consult",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Sara Malik",
    role: "Product Manager",
    company: "Northwind",
    quote:
      "Azan turns complex ideas into clean products. Communication was clear and delivery was reliable.",
  },
  {
    id: "t-2",
    name: "Daniel Reed",
    role: "Founder",
    company: "Orbit Labs",
    quote:
      "The attention to detail and polish stood out. Our site finally feels as premium as our brand.",
  },
  {
    id: "t-3",
    name: "Ayesha Khan",
    role: "CTO",
    company: "Stackline",
    quote:
      "Strong engineering judgment and a calm process. We shipped faster with fewer surprises.",
  },
];
