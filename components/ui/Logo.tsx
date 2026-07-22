import Image from "next/image";
import { SITE } from "@/constants/site";

type LogoProps = {
  showWordmark?: boolean;
  className?: string;
  size?: number;
};

export function Logo({
  showWordmark = true,
  className = "",
  size = 32,
}: LogoProps) {
  const firstName = SITE.name.split(" ")[0];

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/logo.svg"
        alt={`${SITE.name} logo`}
        width={size}
        height={size}
        className="rounded-[7px]"
        priority
      />
      {showWordmark ? (
        <span className="font-display text-lg font-semibold tracking-tight text-white">
          {firstName}
          <span className="text-accent">.</span>
        </span>
      ) : null}
    </span>
  );
}
