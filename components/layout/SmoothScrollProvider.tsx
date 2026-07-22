"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { getGsap } from "@/lib/gsap";
import { setLenis } from "@/lib/lenis";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const NAV_OFFSET = -96;

type SmoothScrollProviderProps = {
  children: React.ReactNode;
};

function getHashFromClick(event: MouseEvent) {
  const link = (event.target as HTMLElement | null)?.closest(
    "a[href^='#']",
  ) as HTMLAnchorElement | null;

  if (!link) return null;

  const hash = link.getAttribute("href");
  if (!hash || hash === "#") return null;
  if (!document.querySelector(hash)) return null;

  return hash;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const hash = getHashFromClick(event);
      if (!hash) return;

      event.preventDefault();

      const lenis = (window as Window & { __lenis?: Lenis }).__lenis;

      if (lenis && !reducedMotion) {
        lenis.scrollTo(hash, {
          offset: NAV_OFFSET,
          duration: 1.2,
        });
      } else {
        const el = document.querySelector(hash);
        if (!el) return;
        const top =
          el.getBoundingClientRect().top + window.scrollY + NAV_OFFSET;
        window.scrollTo({
          top,
          behavior: reducedMotion ? "auto" : "smooth",
        });
      }

      history.pushState(null, "", hash);
    };

    // Capture phase so it always runs (even if something stops bubbling)
    document.addEventListener("click", onClick, true);

    if (reducedMotion) {
      return () => document.removeEventListener("click", onClick, true);
    }

    const { gsap, ScrollTrigger } = getGsap();

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      autoRaf: true,
    });

    setLenis(lenis);
    (window as Window & { __lenis?: Lenis }).__lenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      document.removeEventListener("click", onClick, true);
      setLenis(null);
      delete (window as Window & { __lenis?: Lenis }).__lenis;
      lenis.destroy();
    };
  }, [reducedMotion]);

  return <>{children}</>;
}
