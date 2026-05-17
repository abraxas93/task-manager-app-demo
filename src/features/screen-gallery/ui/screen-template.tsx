import { LinkButton, Surface } from "@/shared/ui";
import type { ScreenPage } from "../domain/screen";
import { screenRenderers } from "./screen-renders";

type ScreenTemplateProps = {
  screenPage: ScreenPage;
};

export function ScreenTemplate({ screenPage }: ScreenTemplateProps) {
  const { screen, previousHref, nextHref } = screenPage;
  const ScreenRender = screenRenderers[screen.id] ?? MissingScreenRender;

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-6 sm:px-6 lg:px-8">
      <div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-0 h-64 bg-[radial-gradient(circle_at_50%_-10%,rgba(34,211,238,.22),transparent_42rem)]"
      />

      <section className="relative z-10 mx-auto max-w-7xl">
        <Surface
          as="header"
          className="mb-5 flex flex-col gap-4 rounded-2xl backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between"
          padding="sm"
          variant="panel"
        >
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
            {previousHref ? (
              <LinkButton href={previousHref}>
                Previous
              </LinkButton>
            ) : null}
            <LinkButton href="/boards" variant="accent">
              Boards
            </LinkButton>
            {nextHref ? (
              <LinkButton href={nextHref} variant="primary">
                Next
              </LinkButton>
            ) : null}
          </nav>
        </Surface>

        <Surface className="sm:p-4" padding="xs" variant="preview">
          <div className="min-h-[calc(100vh-11rem)] rounded-[1.15rem] border border-white/10 bg-grid p-4 sm:p-6">
            <ScreenRender />
          </div>
        </Surface>
      </section>
    </main>
  );
}

function MissingScreenRender() {
  return (
    <Surface className="mx-auto max-w-lg border-amber-300/20 bg-slate-950/90 text-center" padding="lg">
      <h3 className="text-xl font-semibold text-white">Screen mock unavailable</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">
        This placeholder keeps the route renderable until the feature mock is added.
      </p>
    </Surface>
  );
}
