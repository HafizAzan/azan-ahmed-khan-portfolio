"use client";

import { useEffect, useRef } from "react";
import { EXPERIENCE } from "@/constants/content";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getGsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function Experience() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || reducedMotion) return;

    const { gsap } = getGsap();
    const line = section.querySelector("[data-timeline-line]");
    const cards = section.querySelectorAll("[data-experience-card]");

    gsap.fromTo(
      line,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: section.querySelector("[data-timeline]"),
          start: "top 70%",
          end: "bottom 30%",
          scrub: true,
        },
      },
    );

    cards.forEach((card, index) => {
      const fromX = index % 2 === 0 ? -40 : 40;

      gsap.fromTo(
        card,
        { opacity: 0, x: fromX },
        {
          opacity: 1,
          x: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true,
          },
        },
      );
    });
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="scroll-mt-24 py-24 md:py-32"
      aria-labelledby="experience-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Where I have built and grown"
          description="Roles that shaped how I ship products, lead frontend work, and collaborate with teams."
        />

        <div data-timeline className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-4 w-px bg-border md:left-1/2 md:-translate-x-1/2"
          />
          <div
            data-timeline-line
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-4 origin-top w-px scale-y-0 bg-accent md:left-1/2 md:-translate-x-1/2"
          />

          <ol className="space-y-10">
            {EXPERIENCE.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <li
                  key={item.id}
                  data-experience-card
                  className={`relative pl-12 md:grid md:grid-cols-2 md:gap-10 md:pl-0 ${
                    isLeft ? "" : "md:text-left"
                  }`}
                >
                  <div
                    aria-hidden="true"
                    className="absolute top-3 left-[11px] h-3 w-3 rounded-full border border-accent bg-background md:left-1/2 md:-translate-x-1/2"
                  />

                  <div
                    className={`${
                      isLeft
                        ? "md:pr-12 md:text-right"
                        : "md:col-start-2 md:pl-12"
                    }`}
                  >
                    <p className="text-sm text-accent">{item.period}</p>
                    <h3
                      id={index === 0 ? "experience-heading" : undefined}
                      className="mt-2 font-display text-2xl font-semibold text-white"
                    >
                      {item.role}
                    </h3>
                    <p className="mt-1 text-secondary">{item.company}</p>
                    <p className="mt-4 text-sm leading-relaxed text-secondary md:text-base">
                      {item.description}
                    </p>
                    <div
                      className={`mt-4 flex flex-wrap gap-2 ${
                        isLeft ? "md:justify-end" : ""
                      }`}
                    >
                      {item.technologies.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
