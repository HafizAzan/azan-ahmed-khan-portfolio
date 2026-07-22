"use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getGsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || reducedMotion) return;

    const { gsap } = getGsap();
    const image = section.querySelector("[data-about-image]");
    const lines = section.querySelectorAll("[data-about-line]");

    gsap.fromTo(
      image,
      { clipPath: "inset(100% 0 0 0)", opacity: 0.4 },
      {
        clipPath: "inset(0% 0 0 0)",
        opacity: 1,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          once: true,
        },
      },
    );

    gsap.fromTo(
      lines,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          once: true,
        },
      },
    );

    gsap.to(image, {
      yPercent: -8,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="scroll-mt-24 py-24 md:py-32"
      aria-labelledby="about-heading"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div
            data-about-image
            className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-zinc-900 via-zinc-950 to-black"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(124,58,237,0.35),transparent_55%)]" />
            <div className="absolute inset-0 flex items-end p-8">
              <p className="font-display text-3xl font-semibold text-white/90">
                Azan
                <br />
                Ahmed Khan
              </p>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="About"
              title="A developer who cares about craft and clarity"
            />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-secondary md:text-lg">
              <p data-about-line id="about-heading">
                I build full stack products with a strong focus on clean UI,
                solid architecture, and smooth user experience.
              </p>
              <p data-about-line>
                My work sits between design and engineering — so interfaces feel
                intentional, and the code behind them stays maintainable.
              </p>
              <p data-about-line>
                Whether it is a marketing site or a complex app, I aim for work
                that looks premium and performs well in the real world.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
