"use client";

import { useEffect, useRef, useState } from "react";
import { getGsap } from "@/lib/gsap";
import { SITE } from "@/constants/site";

type LoaderProps = {
  onComplete?: () => void;
};

export function Loader({ onComplete }: LoaderProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const { gsap } = getGsap();
    const progress = root.querySelector("[data-loader-progress]");
    const text = root.querySelector("[data-loader-text]");

    const tl = gsap.timeline({
      onComplete: () => {
        setDone(true);
        onComplete?.();
      },
    });

    tl.fromTo(text, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" })
      .fromTo(progress, { scaleX: 0 }, { scaleX: 1, duration: 1, ease: "power2.inOut" }, "-=0.2")
      .to(root, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        pointerEvents: "none",
      });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyTouchAction = document.body.style.touchAction;
    const previousBodyOverscroll = document.body.style.overscrollBehavior;
    const previousHtmlHeight = document.documentElement.style.height;

    if (!done) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
      document.body.style.overscrollBehavior = "none";
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.height = "100%";
      window.scrollTo({ top: 0, behavior: "auto" });
    } else {
      document.body.style.overflow = previousBodyOverflow;
      document.body.style.touchAction = previousBodyTouchAction;
      document.body.style.overscrollBehavior = previousBodyOverscroll;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.documentElement.style.height = previousHtmlHeight;
    }

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.body.style.touchAction = previousBodyTouchAction;
      document.body.style.overscrollBehavior = previousBodyOverscroll;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.documentElement.style.height = previousHtmlHeight;
    };
  }, [done]);

  if (done) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-90 flex items-center justify-center bg-background"
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="w-full max-w-xs px-6 text-center">
        <p data-loader-text className="font-display text-2xl font-semibold tracking-tight text-white">
          {SITE.name}
        </p>
        <div className="mt-8 h-1 w-full overflow-hidden rounded-full bg-border">
          <div data-loader-progress className="h-full origin-left scale-x-0 rounded-full bg-accent" />
        </div>
      </div>
    </div>
  );
}
