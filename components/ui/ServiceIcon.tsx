import {
  FiCode,
  FiCpu,
  FiLayout,
  FiMessageCircle,
} from "react-icons/fi";
import type { Service } from "@/types";

const iconMap = {
  code: FiCode,
  design: FiLayout,
  performance: FiCpu,
  consult: FiMessageCircle,
} as const;

type ServiceIconProps = {
  name: Service["icon"];
  className?: string;
};

export function ServiceIcon({ name, className = "h-5 w-5" }: ServiceIconProps) {
  const Icon = iconMap[name];
  return <Icon className={className} aria-hidden="true" />;
}
