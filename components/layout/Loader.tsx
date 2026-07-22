"use client";

import { useEffect, useRef, useState } from "react";
import { getGsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { SITE } from "@/constants/site";

type LoaderProps = {
  onComplete?: () => void;
};

export function Loader({ onComplete }: LoaderProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [done, setDone] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    if (reducedMotion) {
      setDone(true);
      onComplete?.();
      return;
    }

    const { gsap } = getGsap();
    const progress = root.querySelector("[data-loader-progress]");
    const text = root.querySelector("[data-loader-text]");

    const tl = gsap.timeline({
      onComplete: () => {
        setDone(true);
        onComplete?.();
      },
    });

    tl.fromTo(
      text,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
    )
      .fromTo(
        progress,
        { scaleX: 0 },
        { scaleX: 1, duration: 1, ease: "power2.inOut" },
        "-=0.2",
      )
      .to(root, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        pointerEvents: "none",
      });

    return () => {
      tl.kill();
    };
  }, [onComplete, reducedMotion]);

  if (done) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[90] flex items-center justify-center bg-background"
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="w-full max-w-xs px-6 text-center">
        <p
          data-loader-text
          className="font-display text-2xl font-semibold tracking-tight text-white"
        >
          {SITE.name}
        </p>
        <div className="mt-8 h-px w-full overflow-hidden bg-border">
          <div
            data-loader-progress
            className="h-full origin-left scale-x-0 bg-accent"
          />
        </div>
      </div>
    </div>
  );
}
