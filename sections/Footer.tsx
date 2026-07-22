import { NAV_LINKS, SOCIAL_LINKS } from "@/constants/content";
import { SITE } from "@/constants/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border pt-20 pb-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-8 text-center font-display text-[16vw] leading-none font-semibold tracking-tight text-white/[0.03] select-none"
      >
        {SITE.name.split(" ")[0].toUpperCase()}
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <Logo size={40} className="mb-4" />
            <p className="mt-1 max-w-sm text-secondary">
              Full stack developer crafting clean products with calm confidence.
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-secondary transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-secondary">
            © {year} {SITE.name}. All rights reserved.
          </p>

          <div className="flex gap-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-secondary transition-colors hover:border-accent hover:text-white"
                aria-label={link.label}
              >
                <SocialIcon name={link.icon} />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
