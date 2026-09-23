import type { ExperienceItem, NavLink, Project, Service, SocialLink, TechItem, Testimonial } from "@/types";

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

export const TECH_STACK: { line1: TechItem[]; line2: TechItem[] } = {
  line1: [
    { name: "JavaScript (ES6+)", icon: "javascript" },
    { name: "HTML5", icon: "html5" },
    { name: "CSS3", icon: "css3" },
    { name: "Next.js", icon: "nextjs" },
    { name: "React", icon: "react" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Vue.js", icon: "vuejs" },
    { name: "React Native", icon: "react-native" },
    { name: "Redux Toolkit", icon: "redux" },
    { name: "React Query", icon: "react-query" },
    { name: "RTK Query", icon: "rtk-query" },
    { name: "Zustand", icon: "zustand" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Express.js", icon: "express" },
    { name: "NestJS", icon: "nestjs" },
    { name: "REST APIs", icon: "rest-api" },
    { name: "Tailwind CSS", icon: "tailwind" },
    { name: "Material UI", icon: "material-ui" },
    { name: "Ant Design", icon: "ant-design" },
    { name: "Bootstrap", icon: "bootstrap" },
    { name: "shadcn/ui", icon: "shadcn" },
  ],
  line2: [
    { name: "PostgreSQL", icon: "postgres" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "Prisma", icon: "prisma" },
    { name: "TypeORM", icon: "typeorm" },
    { name: "Firebase", icon: "firebase" },
    { name: "Supabase", icon: "supabase" },
    { name: "GSAP", icon: "gsap" },
    { name: "Docker", icon: "docker" },
    { name: "CI/CD", icon: "cicd" },
    { name: "Postman", icon: "postman" },
    { name: "WebSocket", icon: "websocket" },
    { name: "Socket.IO", icon: "socket-io" },
    { name: "AWS", icon: "aws" },
    { name: "AWS EC2", icon: "aws-ec2" },
    { name: "AWS Amplify", icon: "aws-amplify" },
    { name: "AWS SNS", icon: "aws-sns" },
    { name: "AWS SQS", icon: "aws-sqs" },
    { name: "AWS Lambda", icon: "aws-lambda" },
    { name: "Vercel", icon: "vercel" },
    { name: "Netlify", icon: "netlify" },
    { name: "DigitalOcean", icon: "digitalocean" },
    { name: "Railway", icon: "railway" },
    { name: "Render", icon: "render" },
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "project-1",
    title: "Meridian",
    description:
      "A production-grade travel booking platform for discovering and booking flights, hotels, and holiday packages with secure checkout and trip management.",
    image: ["/images/tbs.png", "/images/tbs-2.png"],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "NestJS",
      "REST APIs",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "BullMQ",
      "Docker",
    ],
    liveUrl: "https://travelling-omega-jade.vercel.app/",
    githubUrl: "https://github.com/HafizAzan/TBS",
    challenges:
      "The platform needed to handle reliable pricing, availability checks, booking state transitions, and payment confirmation without trusting client-side data.",
    solution:
      "Built a separated Next.js frontend and NestJS API with server-side price recalculation, Prisma persistence, Redis background jobs, provider adapters, role-based access control, and webhook-based payment confirmation.",
    result:
      "Delivered a scalable travel booking workflow with flight, hotel, and package discovery, secure checkout, booking history, cancellations, admin management, notifications, and audit-ready payment handling.",
  },
  {
    id: "project-2",
    title: "EstateX",
    description: "A premium real-estate marketplace for discovering properties, connecting with agents, and scheduling property visits.",
    image: ["/images/REB-1.png", "/images/REB-2.png"],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "NestJS",
      "REST APIs",
      "PostgreSQL",
      "Prisma",
      "Cloudinary",
      "Leaflet",
      "Docker",
    ],
    liveUrl: "https://real-estate-template-xi-five.vercel.app/",
    githubUrl: "https://github.com/HafizAzan/REB",
    challenges:
      "The marketplace needed to support property discovery, secure role-based workflows, media uploads, agent communication, and visit scheduling in one reliable experience.",
    solution:
      "Built a separated Next.js frontend and NestJS API with Prisma persistence, JWT authentication, role-based access control, Cloudinary media uploads, map-based property discovery, validated forms, and dedicated user, agent, and admin workflows.",
    result:
      "Delivered a complete property marketplace with searchable listings, agent profiles, favorites, inquiries, scheduled visits, account management, and admin property and user controls.",
  },
  {
    id: "project-3",
    title: "Orbit",
    description:
      "A multi-tenant project management SaaS for organizations to manage teams, projects, tasks, boards, calendars, billing, and collaboration in one workspace.",
    image: ["/images/orbit-1.png", "/images/orbit-2.png"],
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Ant Design",
      "TanStack Query",
      "React Router",
      "Recharts",
      "NestJS",
      "REST APIs",
      "TypeORM",
      "PostgreSQL",
      "Stripe",
      "Socket.IO",
      "BullMQ",
      "Redis",
      "Docker",
    ],
    liveUrl: "https://orbit-eight-pink.vercel.app/",
    githubUrl: "https://github.com/HafizAzan/Orbit",
    challenges:
      "The platform needed to support multiple organizations with different roles and permissions while keeping projects, tasks, billing, notifications, and realtime collaboration consistent and secure.",
    solution:
      "Built a React and Vite workspace backed by a NestJS REST API with TypeORM and PostgreSQL, JWT authentication, organization-level guards, Stripe billing, Socket.IO presence, BullMQ background jobs, GitHub integrations, and AI workspace helpers.",
    result:
      "Delivered a scalable team workspace with project and task management, kanban boards, calendars, dashboards, activity logs, realtime notifications, subscriptions, admin controls, and secure multi-tenant access.",
  },
  {
    id: "project-4",
    title: "CineVault",
    description:
      "A dark-themed mobile movie and TV discovery app for browsing catalogs, searching titles, exploring cast and videos, and managing watch collections.",
    image: ["/images/cine-1.jpeg", "/images/cine-2.jpeg"],
    technologies: [
      "React Native",
      "Expo",
      "Expo Router",
      "TypeScript",
      "TMDB API",
      "AsyncStorage",
      "React Native Reanimated",
      "Expo Image",
      "React Native Web",
    ],
    liveUrl: "https://github.com/HafizAzan/CineVault",
    githubUrl: "https://github.com/HafizAzan/CineVault",
    challenges:
      "The app needed to present a large movie and TV catalog smoothly on mobile while handling API states, image-heavy screens, nested media details, and consistent navigation across platforms.",
    solution:
      "Built a cross-platform Expo and React Native app with typed Expo Router navigation, TMDB API services, reusable media rows and poster cards, optimized Expo image rendering, session persistence, and animated mobile interactions.",
    result:
      "Delivered a polished CineVault experience with home, browse, catalog, search, movie and TV details, cast, trailers, collections, lists, reviews, and responsive web support from the same codebase.",
  },
  {
    id: "project-5",
    title: "LearnHub",
    description:
      "A full-stack learning management platform where students discover courses, track lessons, complete quizzes, and earn certificates while instructors publish and analyze course content.",
    image: ["/images/lms-1.png", "/images/lms-2.png"],
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "React Router",
      "Axios",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Stripe",
      "Cloudinary",
      "Nodemailer",
      "PDFKit",
    ],
    liveUrl: "https://github.com/HafizAzan/LMS",
    githubUrl: "https://github.com/HafizAzan/LMS",
    challenges:
      "The platform needed to support different student and instructor workflows while keeping course progress, quizzes, paid enrollments, certificates, media uploads, and authentication reliable across the learning journey.",
    solution:
      "Built a React and Vite client with an Express and MongoDB API, JWT cookie authentication, Stripe payments, Cloudinary media storage, lesson progress tracking, quiz evaluation, AI-assisted question generation, SMTP reminders, and PDF certificate creation.",
    result:
      "Delivered a complete learning platform with searchable course catalogs, free and paid enrollment, video lessons, progress tracking, quizzes, certificates, leaderboards, instructor analytics, reviews, and student management.",
  },
  {
    id: "project-6",
    title: "HireHub",
    description:
      "A full-stack recruitment marketplace connecting job seekers with employers through job discovery, applications, company profiles, and role-based hiring workflows.",
    image: ["/images/jpw-1.png", "/images/jpw-2.png"],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Motion",
      "React Hook Form",
      "Zod",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Cloudinary",
      "Nodemailer",
      "Ollama",
      "OpenAI API",
    ],
    liveUrl: "https://github.com/HafizAzan/JPW",
    githubUrl: "https://github.com/HafizAzan/JPW",
    challenges:
      "The platform needed to serve job seekers, employers, and admins with separate permissions while keeping job listings, applications, resumes, OTP authentication, and recruitment workflows secure and easy to manage.",
    solution:
      "Built a Next.js frontend with an Express and MongoDB API, JWT httpOnly cookie authentication, Zod validation, role-based dashboards, Cloudinary resume uploads, OTP email flows, rate limiting, and optional AI assistance through Ollama or OpenAI.",
    result:
      "Delivered a complete hiring marketplace with searchable jobs, company profiles, saved jobs, resume management, employer applicant pipelines, admin moderation, notifications, AI-assisted job and cover-letter drafts, and dark/light themes.",
  },
  {
    id: "project-7",
    title: "WhatsApp Webhook Dashboard",
    description:
      "A WhatsApp automation dashboard for connecting accounts, receiving webhook events, managing conversations, sending messages, and building smart messaging workflows.",
    image: "/images/project-placeholder.svg",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "whatsapp-web.js",
      "Puppeteer",
      "Socket.IO",
      "Neon PostgreSQL",
      "Vercel Blob",
      "QR Code",
      "i18next",
      "Node.js",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    challenges:
      "The dashboard needed to keep WhatsApp sessions and message state reliable while handling QR authentication, webhook delivery, media, scheduled jobs, and real-time chat events in a serverless deployment environment.",
    solution:
      "Built a Next.js dashboard with WhatsApp Web client integration, QR-based account connection, webhook receive and management APIs, persistent account and session storage, saved media handling, smart replies, scheduled messages, broadcasts, and bilingual English/Urdu support.",
    result:
      "Delivered a centralized WhatsApp operations dashboard with multi-account switching, chats, click-to-chat links, auto-replies, broadcasts, scheduled messaging, analytics, webhook automation, media tools, and localized UI support.",
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Senior Full Stack Developer",
    company: "PixelForge Studio",
    period: "2023 — Present",
    description: "Lead frontend architecture and ship client products with strong UX, performance, and maintainable code.",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    id: "exp-2",
    role: "Full Stack Developer",
    company: "BrightLabs",
    period: "2021 — 2023",
    description: "Built and improved SaaS features end to end, from API design to polished UI and deployment.",
    technologies: ["React", "Express", "MongoDB", "AWS"],
  },
  {
    id: "exp-3",
    role: "Frontend Developer",
    company: "Craft Digital",
    period: "2019 — 2021",
    description: "Created responsive marketing sites and web apps with clean UI systems and smooth interactions.",
    technologies: ["React", "JavaScript", "SCSS", "WordPress"],
  },
];

export const SERVICES: Service[] = [
  {
    id: "svc-1",
    title: "Full Stack Development",
    description: "End-to-end web apps with clean architecture, solid APIs, and interfaces that feel fast.",
    icon: "code",
  },
  {
    id: "svc-2",
    title: "UI Engineering",
    description: "Pixel-aware interfaces with thoughtful motion, accessibility, and reusable component systems.",
    icon: "design",
  },
  {
    id: "svc-3",
    title: "Performance Optimization",
    description: "Faster loads, smoother interactions, and better Core Web Vitals without sacrificing design.",
    icon: "performance",
  },
  {
    id: "svc-4",
    title: "Technical Consulting",
    description: "Clear guidance on stack choices, architecture, and delivery plans for growing products.",
    icon: "consult",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Sara Malik",
    role: "Product Manager",
    company: "Northwind",
    quote: "Azan turns complex ideas into clean products. Communication was clear and delivery was reliable.",
  },
  {
    id: "t-2",
    name: "Daniel Reed",
    role: "Founder",
    company: "Orbit Labs",
    quote: "The attention to detail and polish stood out. Our site finally feels as premium as our brand.",
  },
  {
    id: "t-3",
    name: "Ayesha Khan",
    role: "CTO",
    company: "Stackline",
    quote: "Strong engineering judgment and a calm process. We shipped faster with fewer surprises.",
  },
];
