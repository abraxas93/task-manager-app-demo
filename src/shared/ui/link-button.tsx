import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cx } from "./class-names";

type LinkButtonVariant = "primary" | "secondary" | "accent";

type LinkButtonProps = LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode;
    variant?: LinkButtonVariant;
  };

const variantClasses: Record<LinkButtonVariant, string> = {
  primary: "rounded-full bg-cyan-300 px-4 py-2 text-slate-950 transition hover:bg-cyan-200",
  secondary:
    "rounded-full border border-white/10 bg-white/[.03] px-4 py-2 text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-100",
  accent:
    "rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-cyan-100 transition hover:border-cyan-300/40",
};

export function LinkButton({
  children,
  className,
  variant = "secondary",
  ...props
}: LinkButtonProps) {
  return (
    <Link className={cx(variantClasses[variant], className)} {...props}>
      {children}
    </Link>
  );
}
