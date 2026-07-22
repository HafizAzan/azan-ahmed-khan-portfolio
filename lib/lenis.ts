import type Lenis from 'lenis';

let lenisInstance: Lenis | null = null;

export function setLenis(instance: Lenis | null) {
  lenisInstance = instance;
}

export function getLenis() {
  return lenisInstance;
}

const NAV_OFFSET = -80;

export function scrollToHash(hash: string) {
  if (!hash || hash === '#') return;

  const target = document.querySelector(hash);
  if (!target) return;

  const lenis = getLenis();

  if (lenis) {
    lenis.scrollTo(hash, {
      offset: NAV_OFFSET,
      duration: 1.2,
    });
    history.pushState(null, '', hash);
    return;
  }

  const top = target.getBoundingClientRect().top + window.scrollY + NAV_OFFSET;

  window.scrollTo({ top, behavior: 'smooth' });
  history.pushState(null, '', hash);
}
