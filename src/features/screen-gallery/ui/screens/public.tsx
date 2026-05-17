import { Badge, BrandMark, Button, Surface } from "@/shared/ui";

export function PublicWelcomeScreen() {
  return (
    <>
      <Surface className="mx-auto max-w-3xl rounded-[1.6rem] sm:p-7" variant="panel">
        <nav className="flex items-center justify-between gap-4"><BrandMark /><div className="hidden gap-5 text-sm text-slate-400 sm:flex"><span>Features</span><span>Security</span><span>Sign in</span></div></nav>
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_260px] lg:items-center">
          <div>
            <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[.22em] text-cyan-100">Private Kanban workspace</span>
            <h3 className="mt-5 text-4xl font-semibold tracking-tight text-white">Organize work visually with TaskBoard.</h3>
            <p className="mt-4 text-sm leading-7 text-slate-400">Create private Kanban boards, define your own workflow, and move tasks from idea to done.</p>
            <div className="mt-6 flex flex-wrap gap-3"><Button variant="primary" size="lg">Create account</Button><Button variant="secondaryStrong" size="lg">Sign in</Button></div>
          </div>
          <Surface className="bg-white/[.035]" padding="sm" variant="muted">
            <div className="mb-4 flex items-center justify-between"><span className="text-xs font-medium text-slate-400">Portfolio board</span><Badge size="tiny" variant="emerald">Live</Badge></div>
            <div className="grid gap-3"><Surface padding="xs" variant="inset"><p className="text-sm font-medium text-white">Todo</p><p className="mt-2 text-xs text-slate-500">3 tasks</p></Surface><Surface padding="xs" variant="accent"><p className="text-sm font-medium text-cyan-100">In Progress</p><p className="mt-2 text-xs text-cyan-200/70">2 tasks</p></Surface><Surface padding="xs" variant="inset"><p className="text-sm font-medium text-white">Done</p><p className="mt-2 text-xs text-slate-500">8 tasks</p></Surface></div>
          </Surface>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-3"><Surface padding="sm" variant="mutedSoft"><p className="font-medium text-white">Multiple boards</p><p className="mt-1 text-xs text-slate-500">Separate workflows by project.</p></Surface><Surface padding="sm" variant="mutedSoft"><p className="font-medium text-white">Custom columns</p><p className="mt-1 text-xs text-slate-500">Build your own process.</p></Surface><Surface padding="sm" variant="mutedSoft"><p className="font-medium text-white">Comments & files</p><p className="mt-1 text-xs text-slate-500">Keep task context nearby.</p></Surface></div>
      </Surface>
    </>
  );
}
