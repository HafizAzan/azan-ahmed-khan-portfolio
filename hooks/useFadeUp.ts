"use client";

import { useEffect, useRef } from "react";
import { getGsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type FadeUpOptions = {
  delay?: number;
  y?: number;
  start?: string;
};

export function useFadeUp<T extends HTMLElement>(options: FadeUpOptions = {}) {
  const ref = useRef<T | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (reducedMotion) {
      element.style.opacity = "1";
      element.style.transform = "none";
      return;
    }

    const { gsap } = getGsap();

    gsap.fromTo(
      element,
      { opacity: 0, y: options.y ?? 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        delay: options.delay ?? 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: options.start ?? "top 85%",
          once: true,
        },
      },
    );
  }, [options.delay, options.start, options.y, reducedMotion]);

  return ref;
}
