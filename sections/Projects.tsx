"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight, FiGithub, FiMaximize2, FiX } from "react-icons/fi";
import { PROJECTS } from "@/constants/content";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getGsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { Project } from "@/types";
import { Button } from "@/components/ui";

const PROJECT_PLACEHOLDER = "/images/project-placeholder.svg";
type LightboxState = {
  projectTitle: string;
  images: string[];
  index: number;
};

function ProjectCard({ project, index, onOpenImage }: { project: Project; index: number; onOpenImage: (state: LightboxState) => void }) {
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
            <button
              key={`${imgSrc}-${idx}`}
              type="button"
              data-cursor-label="View"
              className="group relative block aspect-16/10 w-full overflow-hidden rounded-2xl text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              aria-label={`Open ${project.title} screenshot ${idx + 1} in fullscreen`}
              onClick={() => onOpenImage({ projectTitle: project.title, images, index: idx })}
            >
              <img
                src={imgSrc}
                alt={`${project.title} screenshot ${idx + 1}`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = PROJECT_PLACEHOLDER;
                }}
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/0 text-white opacity-0 transition-all duration-300 group-hover:bg-black/35 group-hover:opacity-100 group-focus-visible:bg-black/35 group-focus-visible:opacity-100">
                <span className="flex items-center gap-2 rounded-full border border-white/30 bg-black/45 px-4 py-2 text-xs font-medium backdrop-blur-sm">
                  <FiMaximize2 aria-hidden="true" />
                  View image
                </span>
              </span>
            </button>
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
  const lightboxRef = useRef<HTMLDivElement | null>(null);
  const lightboxImageRef = useRef<HTMLImageElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const reducedMotion = usePrefersReducedMotion();
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const [visibleProjects, setVisibleProjects] = useState<number>(2);

  const closeLightbox = useCallback(() => {
    if (!lightbox) return;

    if (reducedMotion || !lightboxRef.current) {
      setLightbox(null);
      return;
    }

    const { gsap } = getGsap();
    gsap.to(lightboxRef.current, {
      opacity: 0,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => setLightbox(null),
    });
  }, [lightbox, reducedMotion]);

  const showPreviousImage = useCallback(() => {
    setLightbox((current) => {
      if (!current) return current;
      return {
        ...current,
        index: (current.index - 1 + current.images.length) % current.images.length,
      };
    });
  }, []);

  const showNextImage = useCallback(() => {
    setLightbox((current) => {
      if (!current) return current;
      return { ...current, index: (current.index + 1) % current.images.length };
    });
  }, []);

  const projects = useMemo(() => {
    return PROJECTS.slice(0, visibleProjects);
  }, [visibleProjects]);

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

  useEffect(() => {
    if (!lightbox) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const { gsap } = getGsap();
    if (!reducedMotion && lightboxRef.current) {
      gsap.fromTo(lightboxRef.current, { opacity: 0 }, { opacity: 1, duration: 0.25, ease: "power2.out" });
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft" && lightbox.images.length > 1) showPreviousImage();
      if (event.key === "ArrowRight" && lightbox.images.length > 1) showNextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [closeLightbox, lightbox, reducedMotion, showNextImage, showPreviousImage]);

  useEffect(() => {
    if (!lightbox || reducedMotion || !lightboxImageRef.current) return;

    const { gsap } = getGsap();
    gsap.fromTo(lightboxImageRef.current, { opacity: 0, scale: 0.97 }, { opacity: 1, scale: 1, duration: 0.3, ease: "power3.out" });
  }, [lightbox, lightbox?.index, reducedMotion]);

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

          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} onOpenImage={setLightbox} />
          ))}

          <div className="mt-12 gap-x-4 flex justify-center">
            {visibleProjects > 2 && (
              <Button variant="ghost" onClick={() => setVisibleProjects(2)}>
                Show Less
              </Button>
            )}

            {visibleProjects < PROJECTS.length && (
              <Button variant="primary" onClick={() => setVisibleProjects((prev) => prev + 2)}>
                Show More
              </Button>
            )}
          </div>
        </div>
      </Container>

      {lightbox && (
        <div
          ref={lightboxRef}
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${lightbox.projectTitle} image viewer`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeLightbox();
          }}
        >
          <div className="relative flex h-full w-full max-w-7xl flex-col items-center justify-center gap-4">
            <div className="flex w-full items-center justify-between gap-4 text-white">
              <div className="min-w-0">
                <p className="truncate font-display text-lg font-semibold sm:text-2xl">{lightbox.projectTitle}</p>
                <p className="text-xs text-white/60 sm:text-sm">
                  {lightbox.index + 1} / {lightbox.images.length}
                </p>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                aria-label="Close image viewer"
                onClick={closeLightbox}
                className="grid size-11 shrink-0 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <FiX aria-hidden="true" size={20} />
              </button>
            </div>

            <div className="relative flex min-h-0 w-full flex-1 items-center justify-center">
              <img
                ref={lightboxImageRef}
                key={lightbox.images[lightbox.index]}
                src={lightbox.images[lightbox.index]}
                alt={`${lightbox.projectTitle} screenshot ${lightbox.index + 1}`}
                className="max-h-full max-w-full rounded-xl object-contain shadow-2xl"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = PROJECT_PLACEHOLDER;
                }}
              />

              {lightbox.images.length > 1 && (
                <>
                  <button
                    type="button"
                    aria-label="Previous image"
                    onClick={showPreviousImage}
                    className="absolute left-0 grid size-11 place-items-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:left-4"
                  >
                    <FiArrowLeft aria-hidden="true" size={20} />
                  </button>
                  <button
                    type="button"
                    aria-label="Next image"
                    onClick={showNextImage}
                    className="absolute right-0 grid size-11 place-items-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:right-4"
                  >
                    <FiArrowRight aria-hidden="true" size={20} />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
