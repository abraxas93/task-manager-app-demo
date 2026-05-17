import { Alert, Badge, Button, FieldLabel, IconFrame, PreviewModalFrame, SelectInput, Surface, Tag, TextArea, TextInput } from "@/shared/ui";

export function CreateTaskDrawer() {
  return (
    <>
      <Surface className="relative mx-auto min-h-[410px] max-w-4xl overflow-hidden" padding="sm" variant="panelSoft">
        <div className="grid gap-4 opacity-40 lg:grid-cols-3"><div className="h-80 rounded-2xl bg-white/[.04]"></div><div className="h-80 rounded-2xl bg-cyan-300/5"></div><div className="h-80 rounded-2xl bg-white/[.04]"></div></div>
        <aside className="absolute bottom-0 right-0 top-0 w-full max-w-md border-l border-white/10 bg-slate-950 p-5 shadow-2xl shadow-black/70"><div className="flex items-center justify-between"><h3 className="text-xl font-semibold text-white">Create task</h3><Button variant="subtle" size="none" className="px-3 py-1">×</Button></div><p className="mt-1 text-sm text-slate-400">Add the details needed to track this work item.</p><div className="mt-5 grid gap-4"><FieldLabel>Task title<TextInput placeholder="Example: Implement sign-in form" /></FieldLabel><FieldLabel>Description<TextArea className="min-h-24" placeholder="Describe what needs to be done." /></FieldLabel><div><p className="text-sm text-slate-300">Labels</p><div className="mt-2 flex flex-wrap gap-2"><Tag>UI</Tag><Tag variant="violet">Auth</Tag><Button variant="dashed" size="none" className="px-2.5 py-1 text-xs">+ Add</Button></div><p className="mt-2 text-xs text-slate-500">Labels are optional.</p></div><Alert>Target column: <span className="text-cyan-100">Todo</span></Alert></div><div className="mt-6 flex justify-end gap-3"><Button variant="secondary" size="sm">Cancel</Button><Button variant="primary" size="sm">Create task</Button></div></aside>
      </Surface>
    </>
  );
}

export function TaskDetailScreen() {
  return (
    <>
      <Surface>
        <div className="grid gap-5 lg:grid-cols-[1fr_280px]"><main><div className="flex items-center justify-between"><p className="text-xs uppercase tracking-[.24em] text-cyan-200">Task details</p><Button variant="subtle" size="xs">Close</Button></div><FieldLabel className="mt-5">Title<TextInput className="text-lg font-semibold" defaultValue="Build drag-and-drop persistence" /></FieldLabel><FieldLabel className="mt-4">Description<TextArea className="min-h-28" defaultValue={"Persist task order after moving cards between columns. Roll back when the API request fails."} /></FieldLabel><div className="mt-4 flex flex-wrap gap-2"><Tag variant="amber">API</Tag><Tag>Board UX</Tag><Button variant="dashed" size="none" className="px-2.5 py-1 text-xs">+ Label</Button></div><Alert className="mt-5" variant="warning">We couldn&apos;t save your changes. Your edits are still here so you can try again.</Alert></main><Surface as="aside" padding="sm" variant="muted"><p className="text-sm font-semibold text-white">Properties</p><div className="mt-4 grid gap-3 text-sm"><FieldLabel>Move to column<SelectInput><option>In Progress</option><option>Todo</option><option>Done</option></SelectInput></FieldLabel><p className="text-slate-500">Created: May 17, 2026</p><Button variant="primary" size="sm">Save changes</Button><Button variant="danger" size="sm">Delete task</Button></div></Surface></div>
      </Surface>
    </>
  );
}

export function DeleteTaskConfirmation() {
  return (
    <>
      <PreviewModalFrame><Surface variant="dialogDanger"><IconFrame variant="red">⌫</IconFrame><h3 className="mt-4 text-xl font-semibold text-white">Delete task?</h3><p className="mt-2 text-sm leading-6 text-slate-400">This task, its comments, and its attachments will be permanently removed.</p><div className="mt-5 flex justify-end gap-3"><Button variant="secondary" size="sm">Cancel</Button><Button variant="dangerSolid" size="sm">Delete task</Button></div></Surface></PreviewModalFrame>
    </>
  );
}

export function CommentsArea() {
  return (
    <>
      <Surface className="mx-auto max-w-2xl">
        <div className="flex items-center justify-between"><h3 className="text-xl font-semibold text-white">Comments</h3><Badge>3</Badge></div>
        <div className="mt-5 grid gap-3"><Surface padding="sm" variant="muted"><div className="flex justify-between gap-4"><p className="font-medium text-white">Alex Morgan</p><p className="text-xs text-slate-500">Today 14:20</p></div><p className="mt-2 text-sm leading-6 text-slate-400">Rollback works locally, but we still need the API error message.</p><div className="mt-3 flex gap-3 text-xs text-cyan-200"><Button variant="textAccent" size="none">Edit</Button><Button variant="textDanger" size="none">Delete</Button></div></Surface><Surface padding="sm" variant="muted"><div className="flex justify-between gap-4"><p className="font-medium text-white">Alex Morgan</p><p className="text-xs text-slate-500">Yesterday</p></div><p className="mt-2 text-sm leading-6 text-slate-400">Added mobile move selector as a non-drag fallback.</p></Surface></div>
        <Surface className="mt-5" padding="sm" variant="accentSoft"><FieldLabel className="gap-2">Add a comment<TextArea className="min-h-20" placeholder="Add a note about this task…" /></FieldLabel><div className="mt-3 flex justify-between"><p className="text-xs text-slate-500">Comment cannot be empty.</p><Button variant="primary" size="sm">Add comment</Button></div></Surface>
      </Surface>
    </>
  );
}

export function AttachmentsArea() {
  return (
    <>
      <Surface className="mx-auto max-w-3xl">
        <div className="flex items-center justify-between"><div><h3 className="text-xl font-semibold text-white">Attachments</h3><p className="mt-1 text-sm text-slate-400">JPEG or PNG only, up to 2 MB.</p></div><Button variant="primary" size="sm">Upload image</Button></div>
        <div className="mt-5 grid gap-4 md:grid-cols-2"><Surface className="text-center" padding="lg" variant="dashedAccent"><IconFrame className="mx-auto" variant="cyan">⇧</IconFrame><p className="mt-4 font-medium text-white">Drop image here</p><p className="mt-1 text-xs text-slate-500">Choose a JPEG or PNG image up to 2 MB.</p></Surface><Surface padding="xs" variant="muted"><div className="h-28 rounded-xl border border-white/10 bg-gradient-to-br from-cyan-300/20 to-violet-500/20"></div><div className="mt-3 flex items-center justify-between"><div><p className="text-sm font-medium text-white">wireframe.png</p><p className="mt-1 text-xs text-slate-500">612 KB · Uploaded today</p></div><Button variant="danger" size="xs">Delete</Button></div></Surface></div>
        <Alert className="mt-4" variant="danger">Only JPEG and PNG images are allowed.</Alert>
      </Surface>
    </>
  );
}
