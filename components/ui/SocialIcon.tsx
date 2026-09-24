import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import type { SocialLink } from "@/types";

const iconMap = {
  github: FiGithub,
  linkedin: FiLinkedin,
  instagram: FaInstagram,
  facebook: FaFacebookF,
  whatsapp: FaWhatsapp,
  email: FiMail,
} as const;

type SocialIconProps = {
  name: SocialLink["icon"];
  className?: string;
};

export function SocialIcon({ name, className = "h-5 w-5" }: SocialIconProps) {
  const Icon = iconMap[name];
  return <Icon className={className} aria-hidden="true" />;
}
