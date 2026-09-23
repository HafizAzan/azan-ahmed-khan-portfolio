"use client";

import { useEffect, useRef } from "react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { PROJECTS } from "@/constants/content";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getGsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { Project } from "@/types";

const PROJECT_PLACEHOLDER = "/images/project-placeholder.svg";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const imageSources = (Array.isArray(project.image) ? project.image : [project.image]).filter(Boolean);
  const images = imageSources.length > 0 ? imageSources : [PROJECT_PLACEHOLDER];

  return (
    <article data-project-card className="grid gap-8 border-t border-border py-12 lg:grid-cols-2 lg:gap-12 lg:py-16">
      <div data-project-image className="relative overflow-hidden rounded-3xl border border-border bg-linear-to-br from-zinc-900 to-black">
        <div
          className={`absolute inset-0 ${
            index % 3 === 0
              ? "bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.35),transparent_50%)]"
              : index % 3 === 1
                ? "bg-[radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.12),transparent_45%)]"
                : "bg-[radial-gradient(circle_at_40%_80%,rgba(124,58,237,0.25),transparent_50%)]"
          }`}
        />

        <div className="relative z-1 flex flex-col gap-4 p-4 md:p-6">
          {images.map((imgSrc, idx) => (
            <img
              key={`${imgSrc}-${idx}`}
              src={imgSrc}
              alt={`${project.title} screenshot ${idx + 1}`}
              className="aspect-16/10 w-full rounded-2xl object-cover"
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src = PROJECT_PLACEHOLDER;
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 flex items-end p-6 md:p-8">
          <p className="font-display text-2xl font-semibold text-white md:text-3xl">{project.title}</p>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <h3 className="font-display text-2xl font-semibold text-white md:text-3xl">{project.title}</h3>
        <p className="mt-4 text-base leading-relaxed text-secondary md:text-lg">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <dl className="mt-8 space-y-4 text-sm md:text-base">
          <div>
            <dt className="font-medium text-white">Challenge</dt>
            <dd className="mt-1 text-secondary">{project.challenges}</dd>
          </div>
          <div>
            <dt className="font-medium text-white">Solution</dt>
            <dd className="mt-1 text-secondary">{project.solution}</dd>
          </div>
          <div>
            <dt className="font-medium text-white">Result</dt>
            <dd className="mt-1 text-secondary">{project.result}</dd>
          </div>
        </dl>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white transition-colors hover:text-accent"
          >
            Live Demo
            <FiArrowUpRight aria-hidden="true" />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-secondary transition-colors hover:text-white"
          >
            <FiGithub aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || reducedMotion) return;

    const { gsap } = getGsap();
    const cards = section.querySelectorAll("[data-project-card]");

    cards.forEach((card) => {
      const image = card.querySelector("[data-project-image]");

      gsap.fromTo(
        card,
        { opacity: 0, y: 48 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        image,
        { clipPath: "inset(12% 12% 12% 12%)", scale: 1.08 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 75%",
            once: true,
          },
        },
      );
    });
  }, [reducedMotion]);

  return (
    <section ref={sectionRef} id="projects" className="scroll-mt-24 py-24 md:py-32" aria-labelledby="projects-heading">
      <Container>
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected work that shows how I think and build"
          description="A few projects that highlight product sense, clean engineering, and polished UI."
        />

        <div className="mt-8">
          <h2 id="projects-heading" className="sr-only">
            Featured Projects
          </h2>
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
