import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "./class-names";

type TagVariant = "cyan" | "violet" | "amber";

type TagProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  variant?: TagVariant;
};

const variantClasses: Record<TagVariant, string> = {
  cyan: "border-cyan-300/20 bg-cyan-300/10 text-cyan-100",
  violet: "border-violet-300/20 bg-violet-500/10 text-violet-200",
  amber: "border-amber-300/20 bg-amber-300/10 text-amber-100",
};

export function Tag({
  children,
  className,
  variant = "cyan",
  ...props
}: TagProps) {
  return (
    <span
      className={cx(
        "rounded-full border px-2 py-1 text-[10px] font-bold uppercase tracking-[.05em]",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
