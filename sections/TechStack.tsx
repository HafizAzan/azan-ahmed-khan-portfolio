"use client";

import { TECH_STACK } from "@/constants/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const items = [...TECH_STACK, ...TECH_STACK];

  return (
    <div className="relative overflow-hidden py-2">
      <div
        className={`flex w-max gap-4 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {items.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="group flex min-w-[160px] items-center justify-center rounded-full border border-border bg-white/[0.03] px-6 py-3 text-sm text-secondary transition-all duration-300 hover:scale-105 hover:border-accent/60 hover:text-white hover:shadow-[0_0_24px_rgba(124,58,237,0.25)] hover:rotate-1"
          >
            {tech.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export function TechStack() {
  return (
    <section
      id="tech"
      className="scroll-mt-24 py-24 md:py-32"
      aria-labelledby="tech-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools I use to ship reliable products"
          description="A practical stack focused on speed, clarity, and maintainable code."
        />
      </Container>

      <div className="mt-12 space-y-4" aria-hidden="true">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>

      <Container className="sr-only">
        <h2 id="tech-heading">Tech Stack</h2>
        <ul>
          {TECH_STACK.map((tech) => (
            <li key={tech.name}>{tech.name}</li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
