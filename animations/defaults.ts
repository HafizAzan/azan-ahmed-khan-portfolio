export const DURATIONS = {
  fast: 0.5,
  normal: 0.8,
  slow: 1.1,
} as const;

export const EASE = {
  out: "power3.out",
  inOut: "power2.inOut",
  soft: "sine.inOut",
} as const;

export const SCROLL_START = {
  early: "top 85%",
  mid: "top 80%",
  late: "top 70%",
} as const;
