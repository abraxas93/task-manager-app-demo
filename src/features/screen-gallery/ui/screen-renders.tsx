import type { ReactNode } from "react";
import { Button, FieldLabel, SelectInput, TextArea, TextInput } from "@/shared/ui";
import type { ScreenId } from "../domain/screen";

type ScreenRenderer = () => ReactNode;

function Screen01PublicWelcomeScreen() {
  return (
    <>
      <div className="mx-auto max-w-3xl rounded-[1.6rem] border border-white/10 bg-slate-950/80 p-5 sm:p-7">
        <nav className="flex items-center justify-between gap-4"><div className="inline-flex items-center gap-2"><span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 ring-1 ring-cyan-300/25"><span className="absolute h-5 w-5 rounded-full bg-cyan-300 blur-md"></span><svg className="relative h-5 w-5 text-cyan-200" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12H8m-4 5h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></span><span className="font-semibold tracking-tight text-white">Task<span className="text-cyan-300">Board</span></span></div><div className="hidden gap-5 text-sm text-slate-400 sm:flex"><span>Features</span><span>Security</span><span>Sign in</span></div></nav>
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_260px] lg:items-center">
          <div>
            <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[.22em] text-cyan-100">Private Kanban workspace</span>
            <h3 className="mt-5 text-4xl font-semibold tracking-tight text-white">Organize work visually with TaskBoard.</h3>
            <p className="mt-4 text-sm leading-7 text-slate-400">Create private Kanban boards, define your own workflow, and move tasks from idea to done.</p>
            <div className="mt-6 flex flex-wrap gap-3"><Button variant="primary" size="lg">Create account</Button><Button variant="secondaryStrong" size="lg">Sign in</Button></div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[.035] p-4">
            <div className="mb-4 flex items-center justify-between"><span className="text-xs font-medium text-slate-400">Portfolio board</span><span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[10px] text-emerald-200">Live</span></div>
            <div className="grid gap-3"><div className="rounded-xl border border-white/10 bg-slate-950/80 p-3"><p className="text-sm font-medium text-white">Todo</p><p className="mt-2 text-xs text-slate-500">3 tasks</p></div><div className="rounded-xl border border-cyan-300/20 bg-cyan-300/10 p-3"><p className="text-sm font-medium text-cyan-100">In Progress</p><p className="mt-2 text-xs text-cyan-200/70">2 tasks</p></div><div className="rounded-xl border border-white/10 bg-slate-950/80 p-3"><p className="text-sm font-medium text-white">Done</p><p className="mt-2 text-xs text-slate-500">8 tasks</p></div></div>
          </div>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-3"><div className="rounded-2xl border border-white/10 bg-white/[.025] p-4"><p className="font-medium text-white">Multiple boards</p><p className="mt-1 text-xs text-slate-500">Separate workflows by project.</p></div><div className="rounded-2xl border border-white/10 bg-white/[.025] p-4"><p className="font-medium text-white">Custom columns</p><p className="mt-1 text-xs text-slate-500">Build your own process.</p></div><div className="rounded-2xl border border-white/10 bg-white/[.025] p-4"><p className="font-medium text-white">Comments & files</p><p className="mt-1 text-xs text-slate-500">Keep task context nearby.</p></div></div>
      </div>
    </>
  );
}

function Screen02SignUpScreen() {
  return (
    <>
      <div className="mx-auto flex min-h-[380px] max-w-3xl items-center justify-center">
        <div className="grid w-full gap-5 md:grid-cols-[1fr_380px] md:items-center">
          <div className="hidden md:block"><div className="inline-flex items-center gap-2"><span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 ring-1 ring-cyan-300/25"><span className="absolute h-5 w-5 rounded-full bg-cyan-300 blur-md"></span><svg className="relative h-5 w-5 text-cyan-200" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12H8m-4 5h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></span><span className="font-semibold tracking-tight text-white">Task<span className="text-cyan-300">Board</span></span></div><h3 className="mt-8 text-3xl font-semibold tracking-tight text-white">Start your private workspace.</h3><p className="mt-3 text-sm leading-7 text-slate-400">New boards start empty so the user can define the workflow intentionally.</p></div>
          <form className="rounded-[1.5rem] border border-white/10 bg-slate-950/90 p-5 shadow-2xl shadow-black/40">
            <h3 className="text-xl font-semibold text-white">Create your TaskBoard account.</h3><p className="mt-1 text-sm text-slate-400">Start with a private workspace for your boards and tasks.</p>
            <div className="mt-5 grid gap-3"><FieldLabel>Email<TextInput placeholder="alex@example.com" defaultValue="alex@example.com" /></FieldLabel><div className="grid grid-cols-2 gap-3"><FieldLabel>First name<TextInput placeholder="Alex" /></FieldLabel><FieldLabel>Last name<TextInput placeholder="Morgan" /></FieldLabel></div><FieldLabel>Password<TextInput type="password" defaultValue="Password123" /></FieldLabel><p className="text-xs leading-5 text-slate-500">Use 8–128 characters with uppercase, lowercase, and a number.</p></div>
            <Button variant="primary" size="md" className="mt-5 w-full">Create account</Button><p className="mt-4 text-center text-sm text-slate-500">Already have an account? <span className="text-cyan-200">Sign in.</span></p>
          </form>
        </div>
      </div>
    </>
  );
}

function Screen03SignInScreen() {
  return (
    <>
      <div className="mx-auto flex min-h-[380px] max-w-md items-center justify-center">
        <form className="w-full rounded-[1.6rem] border border-white/10 bg-slate-950/90 p-6 shadow-2xl shadow-black/40">
          <div className="mb-6"><div className="inline-flex items-center gap-2"><span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 ring-1 ring-cyan-300/25"><span className="absolute h-5 w-5 rounded-full bg-cyan-300 blur-md"></span><svg className="relative h-5 w-5 text-cyan-200" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12H8m-4 5h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></span><span className="font-semibold tracking-tight text-white">Task<span className="text-cyan-300">Board</span></span></div></div><h3 className="text-2xl font-semibold text-white">Sign in to TaskBoard.</h3><p className="mt-2 text-sm text-slate-400">Continue managing your boards and tasks.</p>
          <div className="mt-6 grid gap-4"><FieldLabel>Email<TextInput placeholder="alex@example.com" /></FieldLabel><FieldLabel>Password<TextInput className="border-red-300/30 bg-red-400/5" type="password" defaultValue="wrongpass" /></FieldLabel></div>
          <div className="mt-4 rounded-xl border border-red-300/20 bg-red-400/10 p-3 text-sm text-red-100">Email or password is incorrect.</div>
          <Button variant="primary" size="md" className="mt-5 w-full">Sign in</Button><p className="mt-4 text-center text-sm text-slate-500">New to TaskBoard? <span className="text-cyan-200">Create an account.</span></p>
        </form>
      </div>
    </>
  );
}

function Screen04SessionLoadingProtectedRouteGate() {
  return (
    <>
      <div className="mx-auto flex min-h-[380px] max-w-lg items-center justify-center">
        <div className="rounded-[1.7rem] border border-white/10 bg-slate-950/85 p-8 text-center shadow-2xl shadow-black/40">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10"><span className="loader h-8 w-8 rounded-full border-2 border-cyan-300/20 border-t-cyan-200"></span></div>
          <h3 className="mt-6 text-xl font-semibold text-white">Checking your session…</h3><p className="mt-2 text-sm leading-6 text-slate-400">Opening your workspace and protecting private board data.</p>
        </div>
      </div>
    </>
  );
}

function Screen05BoardsDashboardScreen() {
  return (
    <>
      <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div><div className="inline-flex items-center gap-2"><span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 ring-1 ring-cyan-300/25"><span className="absolute h-5 w-5 rounded-full bg-cyan-300 blur-md"></span><svg className="relative h-5 w-5 text-cyan-200" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12H8m-4 5h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></span><span className="font-semibold tracking-tight text-white">Task<span className="text-cyan-300">Board</span></span></div><h3 className="mt-6 text-2xl font-semibold text-white">Your boards</h3><p className="mt-1 text-sm text-slate-400">Choose a board or create a new one to start organizing tasks.</p></div><Button variant="primary" size="sm" className="self-start">Create board</Button></div>
        <div className="mt-6 grid gap-4 md:grid-cols-3"><div className="card-glow rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4"><p className="font-semibold text-cyan-50">Portfolio Website</p><p className="mt-2 text-xs text-cyan-200/70">4 columns · 18 tasks</p><div className="mt-4 h-2 rounded-full bg-cyan-300/30"><div className="h-2 w-2/3 rounded-full bg-cyan-300"></div></div><Button variant="textAccent" size="none" className="mt-4 text-xs font-medium">Open board →</Button></div><div className="rounded-2xl border border-white/10 bg-white/[.03] p-4"><p className="font-semibold text-white">Learning Plan</p><p className="mt-2 text-xs text-slate-500">3 columns · 9 tasks</p><div className="mt-4 flex -space-x-1"><span className="h-6 w-6 rounded-full bg-violet-500"></span><span className="h-6 w-6 rounded-full bg-cyan-400"></span></div><Button variant="text" size="none" className="mt-4 text-xs font-medium">Rename</Button></div><div className="rounded-2xl border border-dashed border-white/15 bg-white/[.02] p-4 text-center"><div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[.04] text-xl text-slate-400">+</div><p className="mt-4 font-semibold text-white">No boards yet</p><p className="mt-1 text-xs leading-5 text-slate-500">Create your first board to define a workflow and add tasks.</p></div></div>
      </div>
    </>
  );
}

function Screen06CreateBoardDialog() {
  return (
    <>
      <div className="relative mx-auto min-h-[380px] max-w-3xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5"><div className="grid gap-4 opacity-35 md:grid-cols-3"><div className="h-72 rounded-2xl bg-white/[.04]"></div><div className="h-72 rounded-2xl bg-white/[.04]"></div><div className="h-72 rounded-2xl bg-white/[.04]"></div></div><div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"><form className="w-full max-w-md rounded-[1.5rem] border border-white/10 bg-slate-950 p-5 shadow-2xl shadow-black/60"><h3 className="text-xl font-semibold text-white">Create board</h3><p className="mt-1 text-sm text-slate-400">Boards start empty. You’ll add workflow columns next.</p><FieldLabel className="mt-5">Board name<TextInput placeholder="Example: Portfolio Website" /></FieldLabel><div className="mt-5 flex justify-end gap-3"><Button variant="secondary" size="sm">Cancel</Button><Button variant="primary" size="sm">Create board</Button></div></form></div></div>
    </>
  );
}

function Screen07RenameBoardDialog() {
  return (
    <>
      <div className="relative mx-auto min-h-[380px] max-w-3xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5"><div className="grid gap-4 opacity-35 md:grid-cols-3"><div className="h-72 rounded-2xl bg-white/[.04]"></div><div className="h-72 rounded-2xl bg-white/[.04]"></div><div className="h-72 rounded-2xl bg-white/[.04]"></div></div><div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"><form className="w-full max-w-md rounded-[1.5rem] border border-white/10 bg-slate-950 p-5 shadow-2xl shadow-black/60"><h3 className="text-xl font-semibold text-white">Rename board</h3><FieldLabel className="mt-5">Board name<TextInput className="border-amber-300/30 bg-amber-300/5" defaultValue="Learning Plan" /></FieldLabel><p className="mt-2 text-xs text-amber-100">You already have a board with this name.</p><div className="mt-5 flex justify-end gap-3"><Button variant="secondary" size="sm">Cancel</Button><Button variant="primary" size="sm">Save name</Button></div></form></div></div>
    </>
  );
}

function Screen08EmptyBoardScreen() {
  return (
    <>
      <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-5">
        <div className="flex items-center justify-between"><div><div className="inline-flex items-center gap-2"><span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 ring-1 ring-cyan-300/25"><span className="absolute h-5 w-5 rounded-full bg-cyan-300 blur-md"></span><svg className="relative h-5 w-5 text-cyan-200" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12H8m-4 5h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></span><span className="font-semibold tracking-tight text-white">Task<span className="text-cyan-300">Board</span></span></div><p className="mt-4 text-xs uppercase tracking-[.24em] text-slate-500">Board</p><h3 className="mt-2 text-2xl font-semibold text-white">Product Launch</h3></div><Button variant="secondary" size="sm">Rename</Button></div>
        <div className="mt-8 rounded-[1.5rem] border border-dashed border-cyan-300/30 bg-cyan-300/5 p-10 text-center"><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/10 text-2xl text-cyan-100">+</div><h4 className="mt-5 text-xl font-semibold text-white">This board has no columns yet.</h4><p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-400">Create your first workflow column, such as Todo, In Progress, or Done.</p><Button variant="primary" size="lg" className="mt-6">Add first column</Button></div>
      </div>
    </>
  );
}

function Screen09KanbanBoardScreen() {
  return (
    <>
      <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-4">
        <div className="flex flex-col gap-3 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between"><div><div className="inline-flex items-center gap-2"><span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 ring-1 ring-cyan-300/25"><span className="absolute h-5 w-5 rounded-full bg-cyan-300 blur-md"></span><svg className="relative h-5 w-5 text-cyan-200" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12H8m-4 5h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></span><span className="font-semibold tracking-tight text-white">Task<span className="text-cyan-300">Board</span></span></div><h3 className="mt-4 text-2xl font-semibold text-white">Portfolio Website</h3></div><div className="flex flex-wrap gap-2"><Button variant="secondary" size="xsTall">Rename board</Button><Button variant="primary" size="xsTall">Add column</Button></div></div>
        <div className="mt-5 grid min-w-0 gap-4 lg:grid-cols-3"><div className="rounded-2xl border border-white/10 bg-white/[.03] p-3"><div className="flex items-center justify-between"><h4 className="font-semibold text-white">Todo</h4><span className="rounded-full bg-white/[.06] px-2 py-1 text-xs text-slate-400">3</span></div><Button variant="subtle" size="none" className="mt-3 w-full rounded-xl border border-dashed border-white/15 py-2 text-xs text-slate-400">+ Add task</Button><div className="mt-3 grid gap-3"><div className="task-card"><p className="font-medium text-white">Create sign-up screen</p><div className="mt-3 flex gap-2"><span className="tag-cyan">UI</span><span className="tag-violet">Auth</span></div><p className="mt-3 text-xs text-slate-500">Created May 17 · 2 comments</p></div><div className="task-card"><p className="font-medium text-white">Prepare empty board state</p><p className="mt-3 text-xs text-slate-500">Created May 17</p></div></div></div><div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/5 p-3"><div className="flex items-center justify-between"><h4 className="font-semibold text-cyan-50">In Progress</h4><span className="rounded-full bg-cyan-300/10 px-2 py-1 text-xs text-cyan-200">2</span></div><div className="mt-3 grid gap-3"><div className="task-card ring-1 ring-cyan-300/20"><p className="font-medium text-white">Build drag-and-drop persistence</p><div className="mt-3 flex gap-2"><span className="tag-amber">API</span></div><p className="mt-3 text-xs text-slate-500">1 attachment · 4 comments</p></div></div></div><div className="rounded-2xl border border-white/10 bg-white/[.03] p-3"><div className="flex items-center justify-between"><h4 className="font-semibold text-white">Done</h4><span className="rounded-full bg-white/[.06] px-2 py-1 text-xs text-slate-400">8</span></div><div className="mt-3 rounded-xl border border-dashed border-white/10 p-5 text-center text-xs text-slate-500">No tasks in this column.</div></div></div>
      </div>
    </>
  );
}

function Screen10CreateColumnDialog() {
  return (
    <>
      <div className="relative mx-auto min-h-[380px] max-w-3xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5"><div className="grid gap-4 opacity-35 md:grid-cols-3"><div className="h-72 rounded-2xl bg-white/[.04]"></div><div className="h-72 rounded-2xl bg-white/[.04]"></div><div className="h-72 rounded-2xl bg-white/[.04]"></div></div><div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"><form className="w-full max-w-md rounded-[1.5rem] border border-white/10 bg-slate-950 p-5 shadow-2xl shadow-black/60"><h3 className="text-xl font-semibold text-white">Add column</h3><p className="mt-1 text-sm text-slate-400">Create a workflow stage for this board.</p><FieldLabel className="mt-5">Column name<TextInput placeholder="Example: Todo" /></FieldLabel><div className="mt-5 flex justify-end gap-3"><Button variant="secondary" size="sm">Cancel</Button><Button variant="primary" size="sm">Add column</Button></div></form></div></div>
    </>
  );
}

function Screen11RenameColumnDialog() {
  return (
    <>
      <div className="relative mx-auto min-h-[380px] max-w-3xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5"><div className="grid gap-4 opacity-35 md:grid-cols-3"><div className="h-72 rounded-2xl bg-white/[.04]"></div><div className="h-72 rounded-2xl bg-white/[.04]"></div><div className="h-72 rounded-2xl bg-white/[.04]"></div></div><div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"><form className="w-full max-w-md rounded-[1.5rem] border border-white/10 bg-slate-950 p-5 shadow-2xl shadow-black/60"><h3 className="text-xl font-semibold text-white">Rename column</h3><FieldLabel className="mt-5">Column name<TextInput className="border-red-300/30 bg-red-400/5" defaultValue="In Progress" /></FieldLabel><p className="mt-2 text-xs text-red-100">This board already has a column with this name.</p><div className="mt-5 flex justify-end gap-3"><Button variant="secondary" size="sm">Cancel</Button><Button variant="primary" size="sm">Save name</Button></div></form></div></div>
    </>
  );
}

function Screen12DeleteColumnConfirmation() {
  return (
    <>
      <div className="relative mx-auto min-h-[380px] max-w-3xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5"><div className="grid gap-4 opacity-35 md:grid-cols-3"><div className="h-72 rounded-2xl bg-white/[.04]"></div><div className="h-72 rounded-2xl bg-white/[.04]"></div><div className="h-72 rounded-2xl bg-white/[.04]"></div></div><div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"><div className="w-full max-w-md rounded-[1.5rem] border border-red-300/20 bg-slate-950 p-5 shadow-2xl shadow-black/60"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-400/10 text-red-200">!</div><h3 className="mt-4 text-xl font-semibold text-white">Column is not empty</h3><p className="mt-2 text-sm leading-6 text-slate-400">Move all tasks to another column before deleting this column.</p><div className="mt-5 flex justify-end"><Button variant="primary" size="sm">Got it</Button></div></div></div></div>
    </>
  );
}

function Screen13CreateTaskDialogDrawer() {
  return (
    <>
      <div className="relative mx-auto min-h-[410px] max-w-4xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-4">
        <div className="grid gap-4 opacity-40 lg:grid-cols-3"><div className="h-80 rounded-2xl bg-white/[.04]"></div><div className="h-80 rounded-2xl bg-cyan-300/5"></div><div className="h-80 rounded-2xl bg-white/[.04]"></div></div>
        <aside className="absolute bottom-0 right-0 top-0 w-full max-w-md border-l border-white/10 bg-slate-950 p-5 shadow-2xl shadow-black/70"><div className="flex items-center justify-between"><h3 className="text-xl font-semibold text-white">Create task</h3><Button variant="subtle" size="none" className="px-3 py-1">×</Button></div><p className="mt-1 text-sm text-slate-400">Add the details needed to track this work item.</p><div className="mt-5 grid gap-4"><FieldLabel>Task title<TextInput placeholder="Example: Implement sign-in form" /></FieldLabel><FieldLabel>Description<TextArea className="min-h-24" placeholder="Describe what needs to be done." /></FieldLabel><div><p className="text-sm text-slate-300">Labels</p><div className="mt-2 flex flex-wrap gap-2"><span className="tag-cyan">UI</span><span className="tag-violet">Auth</span><Button variant="dashed" size="none" className="px-2.5 py-1 text-xs">+ Add</Button></div><p className="mt-2 text-xs text-slate-500">Labels are optional.</p></div><div className="rounded-xl border border-white/10 bg-white/[.03] p-3 text-sm text-slate-400">Target column: <span className="text-cyan-100">Todo</span></div></div><div className="mt-6 flex justify-end gap-3"><Button variant="secondary" size="sm">Cancel</Button><Button variant="primary" size="sm">Create task</Button></div></aside>
      </div>
    </>
  );
}

function Screen14TaskDetailEditScreen() {
  return (
    <>
      <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-5">
        <div className="grid gap-5 lg:grid-cols-[1fr_280px]"><main><div className="flex items-center justify-between"><p className="text-xs uppercase tracking-[.24em] text-cyan-200">Task details</p><Button variant="subtle" size="xs">Close</Button></div><FieldLabel className="mt-5">Title<TextInput className="text-lg font-semibold" defaultValue="Build drag-and-drop persistence" /></FieldLabel><FieldLabel className="mt-4">Description<TextArea className="min-h-28" defaultValue={"Persist task order after moving cards between columns. Roll back when the API request fails."} /></FieldLabel><div className="mt-4 flex flex-wrap gap-2"><span className="tag-amber">API</span><span className="tag-cyan">Board UX</span><Button variant="dashed" size="none" className="px-2.5 py-1 text-xs">+ Label</Button></div><div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/10 p-3 text-sm text-amber-100">We couldn’t save your changes. Your edits are still here so you can try again.</div></main><aside className="rounded-2xl border border-white/10 bg-white/[.03] p-4"><p className="text-sm font-semibold text-white">Properties</p><div className="mt-4 grid gap-3 text-sm"><FieldLabel>Move to column<SelectInput><option>In Progress</option><option>Todo</option><option>Done</option></SelectInput></FieldLabel><p className="text-slate-500">Created: May 17, 2026</p><Button variant="primary" size="sm">Save changes</Button><Button variant="danger" size="sm">Delete task</Button></div></aside></div>
      </div>
    </>
  );
}

function Screen15DeleteTaskConfirmation() {
  return (
    <>
      <div className="relative mx-auto min-h-[380px] max-w-3xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5"><div className="grid gap-4 opacity-35 md:grid-cols-3"><div className="h-72 rounded-2xl bg-white/[.04]"></div><div className="h-72 rounded-2xl bg-white/[.04]"></div><div className="h-72 rounded-2xl bg-white/[.04]"></div></div><div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"><div className="w-full max-w-md rounded-[1.5rem] border border-red-300/20 bg-slate-950 p-5 shadow-2xl shadow-black/60"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-400/10 text-red-200">⌫</div><h3 className="mt-4 text-xl font-semibold text-white">Delete task?</h3><p className="mt-2 text-sm leading-6 text-slate-400">This task, its comments, and its attachments will be permanently removed.</p><div className="mt-5 flex justify-end gap-3"><Button variant="secondary" size="sm">Cancel</Button><Button variant="dangerSolid" size="sm">Delete task</Button></div></div></div></div>
    </>
  );
}

function Screen16CommentsArea() {
  return (
    <>
      <div className="mx-auto max-w-2xl rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-5">
        <div className="flex items-center justify-between"><h3 className="text-xl font-semibold text-white">Comments</h3><span className="rounded-full bg-white/[.06] px-2.5 py-1 text-xs text-slate-400">3</span></div>
        <div className="mt-5 grid gap-3"><div className="rounded-2xl border border-white/10 bg-white/[.03] p-4"><div className="flex justify-between gap-4"><p className="font-medium text-white">Alex Morgan</p><p className="text-xs text-slate-500">Today 14:20</p></div><p className="mt-2 text-sm leading-6 text-slate-400">Rollback works locally, but we still need the API error message.</p><div className="mt-3 flex gap-3 text-xs text-cyan-200"><Button variant="textAccent" size="none">Edit</Button><Button variant="textDanger" size="none">Delete</Button></div></div><div className="rounded-2xl border border-white/10 bg-white/[.03] p-4"><div className="flex justify-between gap-4"><p className="font-medium text-white">Alex Morgan</p><p className="text-xs text-slate-500">Yesterday</p></div><p className="mt-2 text-sm leading-6 text-slate-400">Added mobile move selector as a non-drag fallback.</p></div></div>
        <div className="mt-5 rounded-2xl border border-cyan-300/20 bg-cyan-300/5 p-4"><FieldLabel className="gap-2">Add a comment<TextArea className="min-h-20" placeholder="Add a note about this task…" /></FieldLabel><div className="mt-3 flex justify-between"><p className="text-xs text-slate-500">Comment cannot be empty.</p><Button variant="primary" size="sm">Add comment</Button></div></div>
      </div>
    </>
  );
}

function Screen17TaskAttachmentsAreaPreview() {
  return (
    <>
      <div className="mx-auto max-w-3xl rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-5">
        <div className="flex items-center justify-between"><div><h3 className="text-xl font-semibold text-white">Attachments</h3><p className="mt-1 text-sm text-slate-400">JPEG or PNG only, up to 2 MB.</p></div><Button variant="primary" size="sm">Upload image</Button></div>
        <div className="mt-5 grid gap-4 md:grid-cols-2"><div className="rounded-2xl border border-dashed border-cyan-300/30 bg-cyan-300/5 p-6 text-center"><div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-100">⇧</div><p className="mt-4 font-medium text-white">Drop image here</p><p className="mt-1 text-xs text-slate-500">Choose a JPEG or PNG image up to 2 MB.</p></div><div className="rounded-2xl border border-white/10 bg-white/[.03] p-3"><div className="h-28 rounded-xl border border-white/10 bg-gradient-to-br from-cyan-300/20 to-violet-500/20"></div><div className="mt-3 flex items-center justify-between"><div><p className="text-sm font-medium text-white">wireframe.png</p><p className="mt-1 text-xs text-slate-500">612 KB · Uploaded today</p></div><Button variant="danger" size="xs">Delete</Button></div></div></div>
        <div className="mt-4 rounded-xl border border-red-300/20 bg-red-400/10 p-3 text-sm text-red-100">Only JPEG and PNG images are allowed.</div>
      </div>
    </>
  );
}

function Screen18ProfileScreen() {
  return (
    <>
      <div className="mx-auto max-w-3xl rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-5">
        <h3 className="text-2xl font-semibold text-white">Profile</h3><p className="mt-1 text-sm text-slate-400">Update your personal information and avatar.</p>
        <div className="mt-6 grid gap-6 md:grid-cols-[220px_1fr]"><div className="rounded-2xl border border-white/10 bg-white/[.03] p-5 text-center"><div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300 to-violet-500 text-2xl font-semibold text-slate-950">AM</div><Button variant="secondary" size="sm" className="mt-4">Upload avatar</Button><p className="mt-3 text-xs leading-5 text-slate-500">JPEG or PNG only, up to 2 MB.</p></div><form className="grid gap-4"><div className="grid gap-4 sm:grid-cols-2"><FieldLabel>First name<TextInput defaultValue="Alex" /></FieldLabel><FieldLabel>Last name<TextInput defaultValue="Morgan" /></FieldLabel></div><div className="rounded-xl border border-emerald-300/20 bg-emerald-400/10 p-3 text-sm text-emerald-100">Profile updated.</div><Button variant="primary" size="lg" className="justify-self-start">Save profile</Button></form></div>
      </div>
    </>
  );
}

function Screen19SettingsScreen() {
  return (
    <>
      <div className="mx-auto max-w-3xl rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-5">
        <h3 className="text-2xl font-semibold text-white">Settings</h3><p className="mt-1 text-sm text-slate-400">Manage your account security and app preferences.</p>
        <div className="mt-6 grid gap-4"><section className="rounded-2xl border border-white/10 bg-white/[.03] p-4"><div className="flex items-center justify-between"><div><p className="font-semibold text-white">Theme</p><p className="mt-1 text-sm text-slate-500">Personalize how TaskBoard looks for you.</p></div><Button variant="primary" size="sm">Apply theme</Button></div></section><section className="rounded-2xl border border-white/10 bg-white/[.03] p-4"><div className="flex items-center justify-between"><div><p className="font-semibold text-white">Password</p><p className="mt-1 text-sm text-slate-500">Use your current password to set a new one.</p></div><Button variant="secondary" size="sm">Change password</Button></div></section><section className="rounded-2xl border border-white/10 bg-white/[.03] p-4"><p className="font-semibold text-white">Account</p><p className="mt-1 text-sm text-slate-500">alex@example.com</p><Button variant="danger" size="sm" className="mt-4">Sign out</Button></section></div>
      </div>
    </>
  );
}

function Screen20ThemePreferenceSection() {
  return (
    <>
      <div className="mx-auto max-w-3xl rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-5">
        <h3 className="text-2xl font-semibold text-white">Choose theme</h3><p className="mt-1 text-sm text-slate-400">Personalize how TaskBoard looks for you.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3"><Button variant="choiceSelected" size="card"><div className="h-24 rounded-xl bg-slate-950 ring-1 ring-white/10"></div><p className="mt-3 font-semibold text-cyan-50">Dark blueprint</p><p className="mt-1 text-xs text-cyan-200/70">Selected</p></Button><Button variant="choice" size="card"><div className="h-24 rounded-xl bg-slate-200"></div><p className="mt-3 font-semibold text-white">Light clean</p><p className="mt-1 text-xs text-slate-500">Available</p></Button><Button variant="choice" size="card"><div className="h-24 rounded-xl bg-gradient-to-br from-violet-700 to-slate-950"></div><p className="mt-3 font-semibold text-white">Violet night</p><p className="mt-1 text-xs text-slate-500">Available</p></Button></div>
        <div className="mt-5 flex items-center justify-between rounded-xl border border-emerald-300/20 bg-emerald-400/10 p-3"><p className="text-sm text-emerald-100">Theme updated.</p><Button variant="primary" size="sm">Apply theme</Button></div>
      </div>
    </>
  );
}

function Screen21ChangePasswordScreenDialog() {
  return (
    <>
      <div className="mx-auto flex min-h-[380px] max-w-lg items-center justify-center">
        <form className="w-full rounded-[1.5rem] border border-white/10 bg-slate-950/90 p-5"><h3 className="text-2xl font-semibold text-white">Change password</h3><p className="mt-1 text-sm text-slate-400">Use your current password to set a new one.</p><div className="mt-5 grid gap-4"><FieldLabel>Current password<TextInput type="password" /></FieldLabel><FieldLabel>New password<TextInput type="password" defaultValue="NewPass123" /></FieldLabel><FieldLabel>Confirm new password<TextInput className="border-red-300/30 bg-red-400/5" type="password" defaultValue="NewPass124" /></FieldLabel><p className="text-xs text-red-100">Passwords do not match.</p><p className="text-xs leading-5 text-slate-500">Use 8–128 characters with uppercase, lowercase, and a number.</p></div><div className="mt-5 flex justify-end gap-3"><Button variant="secondary" size="sm">Cancel</Button><Button variant="primary" size="sm">Update password</Button></div></form>
      </div>
    </>
  );
}

function Screen22SignOutConfirmation() {
  return (
    <>
      <div className="relative mx-auto min-h-[380px] max-w-3xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5"><div className="grid gap-4 opacity-35 md:grid-cols-3"><div className="h-72 rounded-2xl bg-white/[.04]"></div><div className="h-72 rounded-2xl bg-white/[.04]"></div><div className="h-72 rounded-2xl bg-white/[.04]"></div></div><div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"><div className="w-full max-w-md rounded-[1.5rem] border border-white/10 bg-slate-950 p-5 shadow-2xl shadow-black/60"><h3 className="text-xl font-semibold text-white">Sign out?</h3><p className="mt-2 text-sm leading-6 text-slate-400">You’ll need to sign in again to access your boards.</p><div className="mt-5 flex justify-end gap-3"><Button variant="secondary" size="sm">Cancel</Button><Button variant="primary" size="sm">Sign out</Button></div></div></div></div>
    </>
  );
}

function Screen23AccessDeniedScreen() {
  return (
    <>
      <div className="mx-auto flex min-h-[380px] max-w-lg items-center justify-center">
        <div className="rounded-[1.7rem] border border-red-300/20 bg-slate-950/90 p-8 text-center"><div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-400/10 text-2xl text-red-200">⛔</div><h3 className="mt-6 text-2xl font-semibold text-white">Access denied</h3><p className="mt-2 text-sm leading-6 text-slate-400">You don’t have permission to view this resource.</p><Button variant="primary" size="lg" className="mt-6">Go to your boards</Button></div>
      </div>
    </>
  );
}

function Screen24NotFoundScreen() {
  return (
    <>
      <div className="mx-auto flex min-h-[380px] max-w-lg items-center justify-center">
        <div className="rounded-[1.7rem] border border-white/10 bg-slate-950/90 p-8 text-center"><p className="font-mono text-7xl font-semibold text-cyan-300/80">404</p><h3 className="mt-4 text-2xl font-semibold text-white">Page not found</h3><p className="mt-2 text-sm leading-6 text-slate-400">This page may have been moved, deleted, or is no longer available.</p><div className="mt-6 flex justify-center gap-3"><Button variant="primary" size="lg">Go to boards</Button><Button variant="secondary" size="lg">Go back</Button></div></div>
      </div>
    </>
  );
}

function Screen25GeneralErrorRetryScreen() {
  return (
    <>
      <div className="mx-auto flex min-h-[380px] max-w-xl items-center justify-center">
        <div className="rounded-[1.7rem] border border-amber-300/20 bg-slate-950/90 p-8"><div className="flex gap-5"><div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-300/10 text-amber-100">!</div><div><h3 className="text-2xl font-semibold text-white">Something went wrong</h3><p className="mt-2 text-sm leading-6 text-slate-400">We couldn’t complete this action. Please try again.</p><p className="mt-4 font-mono text-xs text-slate-500">Reference ID: TB-9F42</p><div className="mt-6 flex gap-3"><Button variant="primary" size="lg">Try again</Button><Button variant="secondary" size="lg">Go to boards</Button></div></div></div></div>
      </div>
    </>
  );
}

function Screen26UploadFailureState() {
  return (
    <>
      <div className="mx-auto flex min-h-[380px] max-w-2xl items-center justify-center">
        <div className="w-full rounded-[1.6rem] border border-red-300/20 bg-slate-950/90 p-6"><div className="flex flex-col gap-5 sm:flex-row sm:items-start"><div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-400/10 text-red-200">⇧</div><div className="flex-1"><h3 className="text-2xl font-semibold text-white">Upload failed</h3><p className="mt-2 text-sm leading-6 text-slate-400">Choose a JPEG or PNG image up to 2 MB and try again.</p><div className="mt-5 rounded-2xl border border-white/10 bg-white/[.03] p-4"><div className="flex items-center justify-between"><div><p className="font-medium text-white">design-system.sketch</p><p className="mt-1 text-xs text-red-100">Unsupported file type</p></div><span className="rounded-full bg-red-400/10 px-2.5 py-1 text-xs text-red-100">Rejected</span></div></div><div className="mt-5 flex flex-wrap gap-3"><Button variant="primary" size="lg">Try again</Button><Button variant="secondary" size="lg">Choose another image</Button></div></div></div></div>
      </div>
    </>
  );
}

function Screen27ResponsiveMobileBoardVariant() {
  return (
    <>
      <div className="mx-auto flex min-h-[430px] max-w-5xl justify-center gap-6">
        <div className="w-[310px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-2xl shadow-black/40">
          <div className="border-b border-white/10 p-4"><div className="flex items-center justify-between"><div className="inline-flex items-center gap-2"><span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 ring-1 ring-cyan-300/25"><span className="absolute h-5 w-5 rounded-full bg-cyan-300 blur-md"></span><svg className="relative h-5 w-5 text-cyan-200" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12H8m-4 5h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></span><span className="font-semibold tracking-tight text-white">Task<span className="text-cyan-300">Board</span></span></div><Button variant="subtle" size="none" className="rounded-xl px-2 py-1 text-xs">☰</Button></div><h3 className="mt-5 text-xl font-semibold text-white">Portfolio Website</h3><div className="mt-4 flex gap-2 overflow-x-auto pb-1"><Button variant="primary" size="xs">In Progress</Button><Button variant="subtle" size="xs">Todo</Button><Button variant="subtle" size="xs">Done</Button></div></div>
          <div className="p-4"><div className="flex items-center justify-between"><h4 className="font-semibold text-cyan-50">In Progress</h4><Button variant="primary" size="xs">+ Task</Button></div><div className="mt-4 grid gap-3"><div className="task-card"><p className="font-medium text-white">Build mobile board view</p><p className="mt-2 text-xs text-slate-500">2 comments · UI</p></div><div className="task-card"><p className="font-medium text-white">Move selector fallback</p><FieldLabel className="mt-3 gap-1 text-xs text-slate-400">Move to column<SelectInput className="py-1.5 text-xs"><option>Done</option><option>Todo</option></SelectInput></FieldLabel></div></div></div>
        </div>
        <div className="hidden max-w-sm self-center rounded-[1.5rem] border border-white/10 bg-white/[.03] p-5 md:block"><p className="text-xs uppercase tracking-[.24em] text-cyan-200">Responsive rule</p><h4 className="mt-3 text-xl font-semibold text-white">Drag is not the only path.</h4><p className="mt-2 text-sm leading-6 text-slate-400">Mobile users get column tabs and a task move selector, so task movement remains usable without desktop-style drag-and-drop.</p></div>
      </div>
    </>
  );
}

export const screenRenderers = {
  "01": Screen01PublicWelcomeScreen,
  "02": Screen02SignUpScreen,
  "03": Screen03SignInScreen,
  "04": Screen04SessionLoadingProtectedRouteGate,
  "05": Screen05BoardsDashboardScreen,
  "06": Screen06CreateBoardDialog,
  "07": Screen07RenameBoardDialog,
  "08": Screen08EmptyBoardScreen,
  "09": Screen09KanbanBoardScreen,
  "10": Screen10CreateColumnDialog,
  "11": Screen11RenameColumnDialog,
  "12": Screen12DeleteColumnConfirmation,
  "13": Screen13CreateTaskDialogDrawer,
  "14": Screen14TaskDetailEditScreen,
  "15": Screen15DeleteTaskConfirmation,
  "16": Screen16CommentsArea,
  "17": Screen17TaskAttachmentsAreaPreview,
  "18": Screen18ProfileScreen,
  "19": Screen19SettingsScreen,
  "20": Screen20ThemePreferenceSection,
  "21": Screen21ChangePasswordScreenDialog,
  "22": Screen22SignOutConfirmation,
  "23": Screen23AccessDeniedScreen,
  "24": Screen24NotFoundScreen,
  "25": Screen25GeneralErrorRetryScreen,
  "26": Screen26UploadFailureState,
  "27": Screen27ResponsiveMobileBoardVariant,
} satisfies Partial<Record<ScreenId, ScreenRenderer>>;
