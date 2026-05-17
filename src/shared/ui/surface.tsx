import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cx } from "./class-names";

type SurfaceVariant =
  | "panel"
  | "panelSoft"
  | "form"
  | "dialog"
  | "dialogDanger"
  | "muted"
  | "mutedSoft"
  | "inset"
  | "task"
  | "accent"
  | "accentSoft"
  | "dashed"
  | "dashedAccent"
  | "preview";

type SurfacePadding = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "empty";

type SurfaceProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  padding?: SurfacePadding;
  variant?: SurfaceVariant;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children">;

const variantClasses: Record<SurfaceVariant, string> = {
  panel: "rounded-[1.5rem] border border-white/10 bg-slate-950/80",
  panelSoft: "rounded-[1.5rem] border border-white/10 bg-slate-950/70",
  form: "rounded-[1.5rem] border border-white/10 bg-slate-950/90 shadow-2xl shadow-black/40",
  dialog: "w-full max-w-md rounded-[1.5rem] border border-white/10 bg-slate-950 shadow-2xl shadow-black/60",
  dialogDanger:
    "w-full max-w-md rounded-[1.5rem] border border-red-300/20 bg-slate-950 shadow-2xl shadow-black/60",
  muted: "rounded-2xl border border-white/10 bg-white/[.03]",
  mutedSoft: "rounded-2xl border border-white/10 bg-white/[.025]",
  inset: "rounded-xl border border-white/10 bg-slate-950/80",
  task: "rounded-2xl border border-white/10 bg-slate-950/75 shadow-[inset_0_1px_0_rgba(255,255,255,.03)]",
  accent: "rounded-2xl border border-cyan-300/20 bg-cyan-300/10",
  accentSoft: "rounded-2xl border border-cyan-300/20 bg-cyan-300/5",
  dashed: "rounded-2xl border border-dashed border-white/15 bg-white/[.02]",
  dashedAccent: "rounded-[1.5rem] border border-dashed border-cyan-300/30 bg-cyan-300/5",
  preview: "preview-window rounded-[1.5rem] border border-white/10",
};

const paddingClasses: Record<SurfacePadding, string> = {
  none: "",
  xs: "p-3",
  sm: "p-4",
  md: "p-5",
  lg: "p-6",
  xl: "p-8",
  empty: "p-10",
};

export function Surface<T extends ElementType = "div">({
  as,
  children,
  className,
  padding = "md",
  variant = "panel",
  ...props
}: SurfaceProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cx(variantClasses[variant], paddingClasses[padding], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
