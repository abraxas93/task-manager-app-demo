import { Alert, Badge, BrandMark, Button, FieldLabel, SelectInput, Surface, Tag } from "@/shared/ui";
import { mockBoards } from "../../infrastructure/mock-taskboard-data";

const board = mockBoards[0];
const activeColumn = board.columns[1];

export function MobileBoardScreen() {
  return (
    <div className="mx-auto grid min-h-[520px] max-w-5xl gap-6 lg:grid-cols-[340px_1fr] lg:items-center">
      <div className="mx-auto w-[320px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-2xl shadow-black/40">
        <div className="border-b border-white/10 p-4">
          <div className="flex items-center justify-between">
            <BrandMark />
            <Button variant="subtle" size="none" className="rounded-xl px-2 py-1 text-xs">Menu</Button>
          </div>
          <h3 className="mt-5 text-xl font-semibold text-white">{board.name}</h3>
          <p className="mt-1 text-xs text-slate-500">Mobile board variant</p>
          <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
            {board.columns.map((column) => (
              <Button
                key={column.id}
                variant={column.id === activeColumn.id ? "primary" : "subtle"}
                size="xs"
              >
                {column.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h4 className="font-semibold text-cyan-50">{activeColumn.name}</h4>
              <p className="mt-1 text-xs text-slate-500">{activeColumn.tasks.length} tasks</p>
            </div>
            <Button variant="primary" size="xs">+ Task</Button>
          </div>

          <Alert className="mt-4" variant="warning">
            Move failed. Card restored.
          </Alert>

          <div className="mt-4 grid gap-3">
            {activeColumn.tasks.map((task, index) => (
              <Surface padding="xs" variant="task" key={task.id}>
                <div className="flex items-start justify-between gap-2">
                  <p className="font-medium leading-5 text-white">{task.title}</p>
                  <Badge size="tiny">{index + 1}</Badge>
                </div>
                <p className="mt-2 text-xs leading-5 text-slate-500">{task.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {task.labels.map((label) => (
                    <Tag key={label.id} variant={label.tone}>{label.name}</Tag>
                  ))}
                </div>
                <FieldLabel className="mt-3 gap-1 text-xs text-slate-400">
                  Move to column
                  <SelectInput className="py-1.5 text-xs" defaultValue={activeColumn.id}>
                    {board.columns.map((column) => (
                      <option key={column.id} value={column.id}>{column.name}</option>
                    ))}
                  </SelectInput>
                </FieldLabel>
              </Surface>
            ))}
          </div>
        </div>
      </div>

      <Surface className="hidden lg:block" variant="muted">
        <p className="text-xs uppercase tracking-[.24em] text-cyan-200">Responsive rule</p>
        <h4 className="mt-3 text-2xl font-semibold text-white">Drag is not the only path.</h4>
        <p className="mt-3 text-sm leading-7 text-slate-400">
          Mobile users get horizontal column tabs, compact cards, and an explicit move selector.
          This keeps task movement usable on touch devices and still supports rollback feedback.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <Surface padding="sm" variant="inset">
            <p className="text-sm font-semibold text-white">Tabs</p>
            <p className="mt-1 text-xs text-slate-500">Columns remain reachable.</p>
          </Surface>
          <Surface padding="sm" variant="inset">
            <p className="text-sm font-semibold text-white">Selector</p>
            <p className="mt-1 text-xs text-slate-500">Movement works without drag.</p>
          </Surface>
          <Surface padding="sm" variant="inset">
            <p className="text-sm font-semibold text-white">Rollback</p>
            <p className="mt-1 text-xs text-slate-500">Failed moves are visible.</p>
          </Surface>
        </div>
      </Surface>
    </div>
  );
}
