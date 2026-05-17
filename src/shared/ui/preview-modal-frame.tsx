import type { ReactNode } from "react";
import { cx } from "./class-names";
import { Surface } from "./surface";

type PreviewModalFrameProps = {
  children: ReactNode;
  className?: string;
  columnClassName?: string;
  columns?: number;
  minHeight?: string;
};

export function PreviewModalFrame({
  children,
  className,
  columnClassName = "h-72 rounded-2xl bg-white/[.04]",
  columns = 3,
  minHeight = "min-h-[380px]",
}: PreviewModalFrameProps) {
  return (
    <Surface
      className={cx("relative mx-auto max-w-3xl overflow-hidden", minHeight, className)}
      padding="md"
      variant="panelSoft"
    >
      <div className="grid gap-4 opacity-35 md:grid-cols-3">
        {Array.from({ length: columns }).map((_, index) => (
          <div className={columnClassName} key={index} />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
        {children}
      </div>
    </Surface>
  );
}
