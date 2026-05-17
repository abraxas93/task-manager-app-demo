import Link from "next/link";
import { screenById, taskboardScreens, type ScreenId } from "./taskboard-screens";

type ScreenTemplateProps = {
  screenId: ScreenId;
};

export function ScreenTemplate({ screenId }: ScreenTemplateProps) {
  const screen = screenById[screenId];
  const currentIndex = taskboardScreens.findIndex((item) => item.id === screenId);
  const previous = taskboardScreens[currentIndex - 1];
  const next = taskboardScreens[currentIndex + 1];

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-6 sm:px-6 lg:px-8">
      <div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-0 h-64 bg-[radial-gradient(circle_at_50%_-10%,rgba(34,211,238,.22),transparent_42rem)]"
      />

      <section className="relative z-10 mx-auto max-w-7xl">
        <header className="mb-5 flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-950/80 p-4 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.26em] text-cyan-200">
              Screen {screen.id} · {screen.group}
            </p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-white">
              {screen.title}
            </h1>
            <p className="mt-1 font-mono text-xs text-slate-500">
              Source route: {screen.sourceRoute}
            </p>
          </div>
          <nav className="flex flex-wrap gap-2 text-sm font-semibold" aria-label="Screen navigation">
            {previous ? (
              <Link className="rounded-full border border-white/10 bg-white/[.03] px-4 py-2 text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-100" href={previous.route.replace('[boardId]', 'portfolio').replace('[taskId]', 'launch-checklist')}>
                Previous
              </Link>
            ) : null}
            <Link className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-cyan-100 transition hover:border-cyan-300/40" href="/boards">
              Boards
            </Link>
            {next ? (
              <Link className="rounded-full bg-cyan-300 px-4 py-2 text-slate-950 transition hover:bg-cyan-200" href={next.route.replace('[boardId]', 'portfolio').replace('[taskId]', 'launch-checklist')}>
                Next
              </Link>
            ) : null}
          </nav>
        </header>

        <div className="preview-window rounded-[1.5rem] border border-white/10 p-3 sm:p-4">
          <div className="min-h-[calc(100vh-11rem)] rounded-[1.15rem] border border-white/10 bg-grid p-4 sm:p-6">
            <div dangerouslySetInnerHTML={{ __html: screen.template }} />
          </div>
        </div>
      </section>
    </main>
  );
}
