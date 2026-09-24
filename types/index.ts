export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "instagram" | "facebook" | "whatsapp" | "email";
};

export type TechItem = {
  name: string;
  icon: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string[] | string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  challenges: string;
  solution: string;
  result: string;
};

export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: "code" | "design" | "performance" | "consult";
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
};
