"use client";

import { FiArrowUpRight } from "react-icons/fi";
import { SERVICES } from "@/constants/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { useStaggerReveal } from "@/hooks/useStaggerReveal";

export function Services() {
  const listRef = useStaggerReveal<HTMLDivElement>({
    childSelector: "[data-reveal]",
    stagger: 0.12,
  });

  return (
    <section
      id="services"
      className="scroll-mt-24 py-24 md:py-32"
      aria-labelledby="services-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="How I can help your product move forward"
          description="Focused services for teams that want clean design, solid engineering, and dependable delivery."
        />

        <div
          ref={listRef}
          className="mt-14 grid gap-5 md:grid-cols-2"
        >
          <h2 id="services-heading" className="sr-only">
            Services
          </h2>
          {SERVICES.map((service) => (
            <article
              key={service.id}
              data-reveal
              className="group rounded-3xl border border-border bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_0_0_1px_rgba(124,58,237,0.2),0_20px_50px_rgba(0,0,0,0.35)] md:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border text-accent">
                  <ServiceIcon name={service.icon} />
                </div>
                <FiArrowUpRight
                  className="text-secondary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-white md:text-2xl">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-secondary md:text-base">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
