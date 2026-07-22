"use client";

import { useEffect, useRef } from "react";
import { FiArrowDown } from "react-icons/fi";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/constants/site";
import { getGsap } from "@/lib/gsap";
import { useMagnetic } from "@/hooks/useMagnetic";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const primaryCtaRef = useMagnetic<HTMLDivElement>({ strength: 0.25 });
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (reducedMotion) {
      section.querySelectorAll("[data-hero]").forEach((el) => {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "none";
      });
      return;
    }

    const { gsap } = getGsap();
    const items = section.querySelectorAll("[data-hero]");

    gsap.fromTo(
      items,
      { opacity: 0, y: 36 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.2,
      },
    );

    gsap.to("[data-float]", {
      y: -12,
      duration: 2.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    const onMove = (event: MouseEvent) => {
      if (!glowRef.current) return;
      gsap.to(glowRef.current, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.8,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl"
      />

      <div
        data-float
        aria-hidden="true"
        className="pointer-events-none absolute top-28 right-[12%] hidden h-24 w-24 rounded-full border border-border/70 md:block"
      />
      <div
        data-float
        aria-hidden="true"
        className="pointer-events-none absolute bottom-28 left-[8%] hidden h-16 w-16 rounded-full bg-accent/10 md:block"
      />

      <Container className="relative z-10">
        <p
          data-hero
          className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-accent opacity-0"
        >
          {SITE.title}
        </p>

        <h1
          data-hero
          className="max-w-4xl font-display text-5xl leading-[1.05] font-semibold tracking-tight text-white opacity-0 sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {SITE.name}
        </h1>

        <p
          data-hero
          className="mt-6 max-w-xl text-lg leading-relaxed text-secondary opacity-0 md:text-xl"
        >
          I design and build clean, fast web products that feel premium and stay
          easy to use.
        </p>

        <div data-hero className="mt-10 flex flex-wrap items-center gap-4 opacity-0">
          <div ref={primaryCtaRef} data-magnetic>
            <ButtonLink href="#projects" size="lg">
              View Work
            </ButtonLink>
          </div>
          <ButtonLink href="#contact" variant="secondary" size="lg">
            Contact Me
          </ButtonLink>
        </div>

        <a
          data-hero
          href="#about"
          className="mt-20 inline-flex items-center gap-2 text-sm text-secondary opacity-0 transition-colors hover:text-white"
        >
          Scroll
          <FiArrowDown className="animate-bounce" aria-hidden="true" />
        </a>
      </Container>
    </section>
  );
}
