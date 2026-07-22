"use client";

import { useEffect, useRef } from "react";
import { getGsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type Options = {
  strength?: number;
};

export function useMagnetic<T extends HTMLElement>(options: Options = {}) {
  const ref = useRef<T | null>(null);
  const reducedMotion = usePrefersReducedMotion();
  const strength = options.strength ?? 0.35;

  useEffect(() => {
    const element = ref.current;
    if (!element || reducedMotion) return;

    const { gsap } = getGsap();

    const onMove = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;

      gsap.to(element, {
        x: x * strength,
        y: y * strength,
        duration: 0.35,
        ease: "power2.out",
      });
    };

    const onLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    element.addEventListener("mousemove", onMove);
    element.addEventListener("mouseleave", onLeave);

    return () => {
      element.removeEventListener("mousemove", onMove);
      element.removeEventListener("mouseleave", onLeave);
    };
  }, [reducedMotion, strength]);

  return ref;
}
