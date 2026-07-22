"use client";

import { useState, type FormEvent } from "react";
import { SOCIAL_LINKS } from "@/constants/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Input } from "@/components/ui/Input";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { Textarea } from "@/components/ui/Textarea";
import { useFadeUp } from "@/hooks/useFadeUp";

export function Contact() {
  const formRef = useFadeUp<HTMLFormElement>();
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sent");
    event.currentTarget.reset();
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-24 md:py-32"
      aria-labelledby="contact-heading"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let's Build Something Great Together"
              description="Tell me about your project, timeline, and goals. I usually reply within 1–2 business days."
            />

            <div className="mt-10 flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-secondary transition-colors hover:border-accent hover:text-white"
                  aria-label={link.label}
                >
                  <SocialIcon name={link.icon} />
                </a>
              ))}
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={onSubmit}
            className="rounded-3xl border border-border bg-white/[0.02] p-6 md:p-8"
          >
            <h2 id="contact-heading" className="sr-only">
              Contact form
            </h2>

            <div className="space-y-5">
              <Input
                id="name"
                name="name"
                label="Name"
                placeholder="Your name"
                required
              />
              <Input
                id="email"
                name="email"
                type="email"
                label="Email"
                placeholder="you@company.com"
                required
              />
              <Textarea
                id="message"
                name="message"
                label="Message"
                placeholder="What are you building?"
                required
              />
            </div>

            <Button type="submit" className="mt-6 w-full" size="lg">
              Send Message
            </Button>

            {status === "sent" ? (
              <p className="mt-4 text-sm text-accent" role="status">
                Thanks — your message is ready. Connect this form to your email
                or API next.
              </p>
            ) : null}
          </form>
        </div>
      </Container>
    </section>
  );
}
