"use client";

import { useEffect, useRef } from "react";
import { getGsap } from "@/lib/gsap";
import { useIsDesktop } from "@/hooks/useIsDesktop";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const labelRef = useRef<HTMLDivElement | null>(null);
  const spotlightRef = useRef<HTMLDivElement | null>(null);
  const trailRefs = useRef<HTMLDivElement[]>([]);
  const isDesktop = useIsDesktop();
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!isDesktop || reducedMotion) {
      document.body.classList.remove("has-custom-cursor");
      return;
    }

    document.body.classList.add("has-custom-cursor");

    const cursor = cursorRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    const spotlight = spotlightRef.current;
    const trail = trailRefs.current;
    if (!cursor || !ring || !label || !spotlight) return;

    const { gsap } = getGsap();
    let magneticTarget: HTMLElement | null = null;

    const moveCursor = gsap.quickTo(cursor, "x", {
      duration: 0.28,
      ease: "power3.out",
    });
    const moveCursorY = gsap.quickTo(cursor, "y", {
      duration: 0.28,
      ease: "power3.out",
    });
    const moveRingX = gsap.quickTo(ring, "x", {
      duration: 0.5,
      ease: "power3.out",
    });
    const moveRingY = gsap.quickTo(ring, "y", {
      duration: 0.5,
      ease: "power3.out",
    });

    const onMove = (event: MouseEvent) => {
      let x = event.clientX;
      let y = event.clientY;

      if (magneticTarget) {
        const rect = magneticTarget.getBoundingClientRect();
        x += rect.left + rect.width / 2 - event.clientX;
        y += rect.top + rect.height / 2 - event.clientY;
        x = event.clientX + (x - event.clientX) * 0.2;
        y = event.clientY + (y - event.clientY) * 0.2;
      }

      moveCursor(x);
      moveCursorY(y);
      moveRingX(x);
      moveRingY(y);
      gsap.set(label, { x, y });
      spotlight.style.background = `radial-gradient(circle 180px at ${event.clientX}px ${event.clientY}px, rgba(124, 58, 237, 0.14), transparent 72%)`;
      gsap.to(spotlight, { opacity: 1, duration: 0.35, overwrite: "auto" });

      trail.forEach((particle, index) => {
        gsap.to(particle, {
          x: event.clientX,
          y: event.clientY,
          duration: 0.18 + index * 0.045,
          ease: "power3.out",
          overwrite: "auto",
        });
      });
    };

    const onPointerOver = (event: PointerEvent) => {
      const element = event.target instanceof Element ? event.target.closest("a, button, [data-magnetic], [data-cursor-label]") : null;
      if (!(element instanceof HTMLElement) || element === magneticTarget) return;

      magneticTarget = element;
      const text = element.dataset.cursorLabel || (element.matches("a") ? "Open" : "Explore");
      label.textContent = text;
      gsap.to(cursor, { scale: 0.55, duration: 0.3, ease: "power3.out" });
      gsap.to(ring, { scale: 1.8, borderColor: "rgba(167, 139, 250, 0.9)", duration: 0.35, ease: "power3.out" });
      gsap.to(label, { autoAlpha: 1, scale: 1, duration: 0.3, ease: "back.out(1.5)" });
    };

    const onPointerOut = (event: PointerEvent) => {
      if (!(event.target instanceof Element) || !magneticTarget || magneticTarget.contains(event.relatedTarget as Node)) return;
      if (event.target.closest("a, button, [data-magnetic], [data-cursor-label]") !== magneticTarget) return;

      magneticTarget = null;
      gsap.to(cursor, { scale: 1, duration: 0.3, ease: "power3.out" });
      gsap.to(ring, { scale: 1, borderColor: "rgba(255, 255, 255, 0.55)", duration: 0.35, ease: "power3.out" });
      gsap.to(label, { autoAlpha: 0, scale: 0.7, duration: 0.2, ease: "power2.in" });
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("pointerover", onPointerOver);
    document.addEventListener("pointerout", onPointerOut);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerout", onPointerOut);
      gsap.killTweensOf([cursor, ring, label, spotlight, ...trail]);
    };
  }, [isDesktop, reducedMotion]);

  if (!isDesktop || reducedMotion) return null;

  return (
    <>
      <div ref={spotlightRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-89 opacity-0" />
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          ref={(element) => {
            if (element) trailRefs.current[index] = element;
          }}
          aria-hidden="true"
          className="pointer-events-none fixed top-0 left-0 z-99 size-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-300/70"
          style={{ opacity: 0.5 - index * 0.06, scale: 1 - index * 0.08 }}
        />
      ))}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-100 size-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/55 mix-blend-difference"
      />
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-101 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference"
      />
      <div
        ref={labelRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-102 -translate-x-1/2 -translate-y-1/2 scale-70 rounded-full border border-violet-300/50 bg-violet-500/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white opacity-0 mix-blend-normal"
      />
    </>
  );
}
