import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "./class-names";

type AlertVariant = "danger" | "warning" | "success" | "muted";

type AlertProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  variant?: AlertVariant;
};

const variantClasses: Record<AlertVariant, string> = {
  danger: "border-red-300/20 bg-red-400/10 text-red-100",
  warning: "border-amber-300/20 bg-amber-300/10 text-amber-100",
  success: "border-emerald-300/20 bg-emerald-400/10 text-emerald-100",
  muted: "border-white/10 bg-white/[.03] text-slate-400",
};

export function Alert({
  children,
  className,
  variant = "muted",
  ...props
}: AlertProps) {
  return (
    <div
      className={cx("rounded-xl border p-3 text-sm", variantClasses[variant], className)}
      {...props}
    >
      {children}
    </div>
  );
}
