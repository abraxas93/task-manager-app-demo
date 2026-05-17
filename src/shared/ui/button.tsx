import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "./class-names";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "secondaryStrong"
  | "subtle"
  | "danger"
  | "dangerSolid"
  | "dashed"
  | "choice"
  | "choiceSelected"
  | "text"
  | "textAccent"
  | "textDanger";

type ButtonSize = "none" | "xs" | "xsTall" | "sm" | "md" | "lg" | "card";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "rounded-full bg-cyan-300 font-semibold text-slate-950 transition hover:bg-cyan-200",
  secondary:
    "rounded-full border border-white/10 font-semibold text-slate-300 transition hover:border-cyan-300/30 hover:text-cyan-100",
  secondaryStrong:
    "rounded-full border border-white/10 bg-white/[.03] font-semibold text-white transition hover:border-cyan-300/30",
  subtle:
    "rounded-full border border-white/10 text-slate-400 transition hover:border-cyan-300/30 hover:text-cyan-100",
  danger:
    "rounded-full border border-red-300/20 bg-red-400/10 font-semibold text-red-100 transition hover:border-red-200/40",
  dangerSolid:
    "rounded-full bg-red-400 font-semibold text-white transition hover:bg-red-300",
  dashed:
    "rounded-full border border-dashed border-white/20 text-slate-400 transition hover:border-cyan-300/30 hover:text-cyan-100",
  choice:
    "rounded-2xl border border-white/10 bg-white/[.03] text-left transition hover:border-cyan-300/30",
  choiceSelected:
    "rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-left ring-2 ring-cyan-300/20",
  text: "text-slate-300 transition hover:text-cyan-100",
  textAccent: "text-cyan-100 transition hover:text-cyan-50",
  textDanger: "text-red-200 transition hover:text-red-100",
};

const sizeClasses: Record<ButtonSize, string> = {
  none: "",
  xs: "px-3 py-1.5 text-xs",
  xsTall: "px-3 py-2 text-xs",
  sm: "px-4 py-2 text-sm",
  md: "px-4 py-2.5 text-sm",
  lg: "px-5 py-2.5 text-sm",
  card: "p-4",
};

export function Button({
  children,
  className,
  size = "sm",
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cx(variantClasses[variant], sizeClasses[size], className)}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
