import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkVariant = "primary" | "secondary" | "ghost";
type ButtonLinkSize = "sm" | "md" | "lg";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: ButtonLinkVariant;
  size?: ButtonLinkSize;
  className?: string;
};

const variantClasses: Record<ButtonLinkVariant, string> = {
  primary:
    "bg-white text-black hover:bg-zinc-200 focus-visible:ring-accent",
  secondary:
    "border border-border bg-transparent text-white hover:border-accent hover:text-accent focus-visible:ring-accent",
  ghost:
    "bg-transparent text-secondary hover:text-white focus-visible:ring-accent",
};

const sizeClasses: Record<ButtonLinkSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

export function ButtonLink({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
