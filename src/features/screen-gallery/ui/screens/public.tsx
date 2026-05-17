import { Badge, BrandMark, Button, Surface, Tag } from "@/shared/ui";
import { mockBoards } from "../../infrastructure/mock-taskboard-data";

const board = mockBoards[0];

export function PublicWelcomeScreen() {
  return (
    <Surface className="mx-auto max-w-5xl rounded-[1.6rem] sm:p-7" variant="panel">
      <nav className="flex items-center justify-between gap-4">
        <BrandMark />
        <div className="hidden gap-5 text-sm text-slate-400 sm:flex">
          <span>Boards</span>
          <span>Tasks</span>
          <span>Settings</span>
          <span>Sign in</span>
        </div>
      </nav>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_390px] lg:items-center">
        <div>
          <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[.22em] text-cyan-100">
            Private Kanban workspace
          </span>
          <h3 className="mt-5 max-w-2xl text-5xl font-semibold tracking-tight text-white">
            TaskBoard
          </h3>
          <p className="mt-4 max-w-xl text-base leading-8 text-slate-400">
            A focused personal Kanban app for multiple boards, custom workflow columns, task
            details, labels, comments, image attachments, and polished failure states.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="primary" size="lg">Create account</Button>
            <Button variant="secondaryStrong" size="lg">Sign in</Button>
          </div>
        </div>

        <Surface className="bg-white/[.035]" padding="sm" variant="muted">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <span className="text-xs font-medium text-slate-400">Preview board</span>
              <p className="mt-1 font-semibold text-white">{board.name}</p>
            </div>
            <Badge size="tiny" variant="emerald">POC</Badge>
          </div>
          <div className="grid gap-3">
            {board.columns.slice(0, 3).map((column, index) => (
              <Surface key={column.id} padding="xs" variant={index === 1 ? "accent" : "inset"}>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-white">{column.name}</p>
                  <Badge size="tiny">{column.tasks.length}</Badge>
                </div>
                {column.tasks[0] ? (
                  <div className="mt-3 rounded-lg bg-slate-950/70 p-3">
                    <p className="text-xs font-medium text-white">{column.tasks[0].title}</p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {column.tasks[0].labels.map((label) => (
                        <Tag key={label.id} variant={label.tone}>{label.name}</Tag>
                      ))}
                    </div>
                  </div>
                ) : null}
              </Surface>
            ))}
          </div>
        </Surface>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-4">
        <Surface padding="sm" variant="mutedSoft">
          <p className="font-medium text-white">Multiple boards</p>
          <p className="mt-1 text-xs leading-5 text-slate-500">Private workflows per project.</p>
        </Surface>
        <Surface padding="sm" variant="mutedSoft">
          <p className="font-medium text-white">Custom columns</p>
          <p className="mt-1 text-xs leading-5 text-slate-500">No hard-coded status model.</p>
        </Surface>
        <Surface padding="sm" variant="mutedSoft">
          <p className="font-medium text-white">Task context</p>
          <p className="mt-1 text-xs leading-5 text-slate-500">Descriptions, comments, and files.</p>
        </Surface>
        <Surface padding="sm" variant="mutedSoft">
          <p className="font-medium text-white">Failure handling</p>
          <p className="mt-1 text-xs leading-5 text-slate-500">Validation, rollback, and retry states.</p>
        </Surface>
      </div>
    </Surface>
  );
}
