import { cx } from "./class-names";

type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <div className={cx("inline-flex items-center gap-2", className)}>
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 ring-1 ring-cyan-300/25">
        <span className="absolute h-5 w-5 rounded-full bg-cyan-300 blur-md" />
        <svg className="relative h-5 w-5 text-cyan-200" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 7h16M4 12H8m-4 5h11"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
          />
        </svg>
      </span>
      <span className="font-semibold tracking-tight text-white">
        Task<span className="text-cyan-300">Board</span>
      </span>
    </div>
  );
}
