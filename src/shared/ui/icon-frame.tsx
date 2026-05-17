import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "./class-names";

type IconFrameVariant = "cyan" | "red" | "amber" | "muted" | "gradient";
type IconFrameSize = "sm" | "md" | "lg" | "xl";

type IconFrameProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  size?: IconFrameSize;
  variant?: IconFrameVariant;
};

const variantClasses: Record<IconFrameVariant, string> = {
  cyan: "bg-cyan-300/10 text-cyan-100",
  red: "bg-red-400/10 text-red-200",
  amber: "bg-amber-300/10 text-amber-100",
  muted: "bg-white/[.04] text-slate-400",
  gradient: "bg-gradient-to-br from-cyan-300 to-violet-500 text-slate-950",
};

const sizeClasses: Record<IconFrameSize, string> = {
  sm: "h-11 w-11 rounded-2xl text-xl",
  md: "h-12 w-12 rounded-2xl",
  lg: "h-14 w-14 rounded-2xl text-2xl",
  xl: "h-24 w-24 rounded-full text-2xl",
};

export function IconFrame({
  children,
  className,
  size = "md",
  variant = "cyan",
  ...props
}: IconFrameProps) {
  return (
    <div
      className={cx("flex items-center justify-center", variantClasses[variant], sizeClasses[size], className)}
      {...props}
    >
      {children}
    </div>
  );
}
