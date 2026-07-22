"use client";

import { useEffect, useRef } from "react";
import { getGsap } from "@/lib/gsap";
import { useIsDesktop } from "@/hooks/useIsDesktop";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const isDesktop = useIsDesktop();
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!isDesktop || reducedMotion) {
      document.body.classList.remove("has-custom-cursor");
      return;
    }

    document.body.classList.add("has-custom-cursor");

    const cursor = cursorRef.current;
    if (!cursor) return;

    const { gsap } = getGsap();

    const onMove = (event: MouseEvent) => {
      gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.35,
        ease: "power3.out",
      });
    };

    const onEnterMagnetic = () => {
      gsap.to(cursor, { scale: 2.2, duration: 0.3, ease: "power2.out" });
    };

    const onLeaveMagnetic = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3, ease: "power2.out" });
    };

    window.addEventListener("mousemove", onMove);

    const magneticTargets = document.querySelectorAll(
      "a, button, [data-magnetic]",
    );

    magneticTargets.forEach((target) => {
      target.addEventListener("mouseenter", onEnterMagnetic);
      target.addEventListener("mouseleave", onLeaveMagnetic);
    });

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      magneticTargets.forEach((target) => {
        target.removeEventListener("mouseenter", onEnterMagnetic);
        target.removeEventListener("mouseleave", onLeaveMagnetic);
      });
    };
  }, [isDesktop, reducedMotion]);

  if (!isDesktop || reducedMotion) return null;

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[100] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference"
    />
  );
}
