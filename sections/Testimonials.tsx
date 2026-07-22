"use client";

import { TESTIMONIALS } from "@/constants/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  const items = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section
      id="testimonials"
      className="scroll-mt-24 py-24 md:py-32"
      aria-labelledby="testimonials-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What collaborators say"
          description="Placeholder quotes for now — real client feedback can replace these anytime."
        />
      </Container>

      <div className="mt-12 overflow-hidden" aria-hidden="true">
        <div className="flex w-max gap-5 animate-marquee-slow">
          {items.map((item, index) => (
            <figure
              key={`${item.id}-${index}`}
              className="w-[320px] shrink-0 rounded-3xl border border-border bg-white/[0.02] p-6 md:w-[380px]"
            >
              <blockquote className="text-sm leading-relaxed text-secondary md:text-base">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-medium text-white">{item.name}</p>
                <p className="text-sm text-secondary">
                  {item.role}, {item.company}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <Container className="sr-only">
        <h2 id="testimonials-heading">Testimonials</h2>
        <ul>
          {TESTIMONIALS.map((item) => (
            <li key={item.id}>
              {item.quote} — {item.name}, {item.role} at {item.company}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
