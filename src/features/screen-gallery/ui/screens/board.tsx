import { Badge, BrandMark, Button, FieldLabel, IconFrame, PreviewModalFrame, Surface, Tag, TextInput } from "@/shared/ui";

export function BoardsDashboardScreen() {
  return (
    <>
      <Surface>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div><BrandMark /><h3 className="mt-6 text-2xl font-semibold text-white">Your boards</h3><p className="mt-1 text-sm text-slate-400">Choose a board or create a new one to start organizing tasks.</p></div><Button variant="primary" size="sm" className="self-start">Create board</Button></div>
        <div className="mt-6 grid gap-4 md:grid-cols-3"><Surface className="card-glow" padding="sm" variant="accent"><p className="font-semibold text-cyan-50">Portfolio Website</p><p className="mt-2 text-xs text-cyan-200/70">4 columns · 18 tasks</p><div className="mt-4 h-2 rounded-full bg-cyan-300/30"><div className="h-2 w-2/3 rounded-full bg-cyan-300"></div></div><Button variant="textAccent" size="none" className="mt-4 text-xs font-medium">Open board →</Button></Surface><Surface padding="sm" variant="muted"><p className="font-semibold text-white">Learning Plan</p><p className="mt-2 text-xs text-slate-500">3 columns · 9 tasks</p><div className="mt-4 flex -space-x-1"><span className="h-6 w-6 rounded-full bg-violet-500"></span><span className="h-6 w-6 rounded-full bg-cyan-400"></span></div><Button variant="text" size="none" className="mt-4 text-xs font-medium">Rename</Button></Surface><Surface className="text-center" padding="sm" variant="dashed"><IconFrame className="mx-auto" size="sm" variant="muted">+</IconFrame><p className="mt-4 font-semibold text-white">No boards yet</p><p className="mt-1 text-xs leading-5 text-slate-500">Create your first board to define a workflow and add tasks.</p></Surface></div>
      </Surface>
    </>
  );
}

export function CreateBoardDialog() {
  return (
    <>
      <PreviewModalFrame><Surface as="form" variant="dialog"><h3 className="text-xl font-semibold text-white">Create board</h3><p className="mt-1 text-sm text-slate-400">Boards start empty. You&apos;ll add workflow columns next.</p><FieldLabel className="mt-5">Board name<TextInput placeholder="Example: Portfolio Website" /></FieldLabel><div className="mt-5 flex justify-end gap-3"><Button variant="secondary" size="sm">Cancel</Button><Button variant="primary" size="sm">Create board</Button></div></Surface></PreviewModalFrame>
    </>
  );
}

export function RenameBoardDialog() {
  return (
    <>
      <PreviewModalFrame><Surface as="form" variant="dialog"><h3 className="text-xl font-semibold text-white">Rename board</h3><FieldLabel className="mt-5">Board name<TextInput className="border-amber-300/30 bg-amber-300/5" defaultValue="Learning Plan" /></FieldLabel><p className="mt-2 text-xs text-amber-100">You already have a board with this name.</p><div className="mt-5 flex justify-end gap-3"><Button variant="secondary" size="sm">Cancel</Button><Button variant="primary" size="sm">Save name</Button></div></Surface></PreviewModalFrame>
    </>
  );
}

export function EmptyBoardScreen() {
  return (
    <>
      <Surface>
        <div className="flex items-center justify-between"><div><BrandMark /><p className="mt-4 text-xs uppercase tracking-[.24em] text-slate-500">Board</p><h3 className="mt-2 text-2xl font-semibold text-white">Product Launch</h3></div><Button variant="secondary" size="sm">Rename</Button></div>
        <Surface className="mt-8 text-center" padding="empty" variant="dashedAccent"><IconFrame className="mx-auto" size="lg" variant="cyan">+</IconFrame><h4 className="mt-5 text-xl font-semibold text-white">This board has no columns yet.</h4><p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-400">Create your first workflow column, such as Todo, In Progress, or Done.</p><Button variant="primary" size="lg" className="mt-6">Add first column</Button></Surface>
      </Surface>
    </>
  );
}

export function KanbanBoardScreen() {
  return (
    <>
      <Surface padding="sm">
        <div className="flex flex-col gap-3 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between"><div><BrandMark /><h3 className="mt-4 text-2xl font-semibold text-white">Portfolio Website</h3></div><div className="flex flex-wrap gap-2"><Button variant="secondary" size="xsTall">Rename board</Button><Button variant="primary" size="xsTall">Add column</Button></div></div>
        <div className="mt-5 grid min-w-0 gap-4 lg:grid-cols-3"><Surface padding="xs" variant="muted"><div className="flex items-center justify-between"><h4 className="font-semibold text-white">Todo</h4><Badge>3</Badge></div><Button variant="subtle" size="none" className="mt-3 w-full rounded-xl border border-dashed border-white/15 py-2 text-xs text-slate-400">+ Add task</Button><div className="mt-3 grid gap-3"><Surface padding="xs" variant="task"><p className="font-medium text-white">Create sign-up screen</p><div className="mt-3 flex gap-2"><Tag>UI</Tag><Tag variant="violet">Auth</Tag></div><p className="mt-3 text-xs text-slate-500">Created May 17 · 2 comments</p></Surface><Surface padding="xs" variant="task"><p className="font-medium text-white">Prepare empty board state</p><p className="mt-3 text-xs text-slate-500">Created May 17</p></Surface></div></Surface><Surface padding="xs" variant="accentSoft"><div className="flex items-center justify-between"><h4 className="font-semibold text-cyan-50">In Progress</h4><Badge variant="cyan">2</Badge></div><div className="mt-3 grid gap-3"><Surface className="ring-1 ring-cyan-300/20" padding="xs" variant="task"><p className="font-medium text-white">Build drag-and-drop persistence</p><div className="mt-3 flex gap-2"><Tag variant="amber">API</Tag></div><p className="mt-3 text-xs text-slate-500">1 attachment · 4 comments</p></Surface></div></Surface><Surface padding="xs" variant="muted"><div className="flex items-center justify-between"><h4 className="font-semibold text-white">Done</h4><Badge>8</Badge></div><div className="mt-3 rounded-xl border border-dashed border-white/10 p-5 text-center text-xs text-slate-500">No tasks in this column.</div></Surface></div>
      </Surface>
    </>
  );
}

export function CreateColumnDialog() {
  return (
    <>
      <PreviewModalFrame><Surface as="form" variant="dialog"><h3 className="text-xl font-semibold text-white">Add column</h3><p className="mt-1 text-sm text-slate-400">Create a workflow stage for this board.</p><FieldLabel className="mt-5">Column name<TextInput placeholder="Example: Todo" /></FieldLabel><div className="mt-5 flex justify-end gap-3"><Button variant="secondary" size="sm">Cancel</Button><Button variant="primary" size="sm">Add column</Button></div></Surface></PreviewModalFrame>
    </>
  );
}

export function RenameColumnDialog() {
  return (
    <>
      <PreviewModalFrame><Surface as="form" variant="dialog"><h3 className="text-xl font-semibold text-white">Rename column</h3><FieldLabel className="mt-5">Column name<TextInput className="border-red-300/30 bg-red-400/5" defaultValue="In Progress" /></FieldLabel><p className="mt-2 text-xs text-red-100">This board already has a column with this name.</p><div className="mt-5 flex justify-end gap-3"><Button variant="secondary" size="sm">Cancel</Button><Button variant="primary" size="sm">Save name</Button></div></Surface></PreviewModalFrame>
    </>
  );
}

export function DeleteColumnConfirmation() {
  return (
    <>
      <PreviewModalFrame><Surface variant="dialogDanger"><IconFrame variant="red">!</IconFrame><h3 className="mt-4 text-xl font-semibold text-white">Column is not empty</h3><p className="mt-2 text-sm leading-6 text-slate-400">Move all tasks to another column before deleting this column.</p><div className="mt-5 flex justify-end"><Button variant="primary" size="sm">Got it</Button></div></Surface></PreviewModalFrame>
    </>
  );
}
