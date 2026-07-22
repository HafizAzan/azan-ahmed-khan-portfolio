"use client";

import { useEffect, useRef } from "react";
import { getGsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type StaggerOptions = {
  childSelector?: string;
  y?: number;
  stagger?: number;
  start?: string;
};

export function useStaggerReveal<T extends HTMLElement>(
  options: StaggerOptions = {},
) {
  const ref = useRef<T | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const children = element.querySelectorAll(
      options.childSelector ?? "[data-reveal]",
    );

    if (reducedMotion) {
      children.forEach((child) => {
        (child as HTMLElement).style.opacity = "1";
        (child as HTMLElement).style.transform = "none";
      });
      return;
    }

    const { gsap } = getGsap();

    gsap.fromTo(
      children,
      { opacity: 0, y: options.y ?? 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: options.stagger ?? 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: options.start ?? "top 80%",
          once: true,
        },
      },
    );
  }, [
    options.childSelector,
    options.stagger,
    options.start,
    options.y,
    reducedMotion,
  ]);

  return ref;
}
