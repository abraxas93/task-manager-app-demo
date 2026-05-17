import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "./class-names";

type BadgeVariant = "neutral" | "cyan" | "emerald" | "red";
type BadgeSize = "tiny" | "sm";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  size?: BadgeSize;
  variant?: BadgeVariant;
};

const variantClasses: Record<BadgeVariant, string> = {
  neutral: "bg-white/[.06] text-slate-400",
  cyan: "bg-cyan-300/10 text-cyan-200",
  emerald: "bg-emerald-400/10 text-emerald-200",
  red: "bg-red-400/10 text-red-100",
};

const sizeClasses: Record<BadgeSize, string> = {
  tiny: "px-2 py-1 text-[10px]",
  sm: "px-2.5 py-1 text-xs",
};

export function Badge({
  children,
  className,
  size = "sm",
  variant = "neutral",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cx("rounded-full", variantClasses[variant], sizeClasses[size], className)}
      {...props}
    >
      {children}
    </span>
  );
}
