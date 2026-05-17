import type { ReactNode } from "react";
import {
  Alert,
  Badge,
  BrandMark,
  Button,
  FieldLabel,
  IconFrame,
  PreviewModalFrame,
  SelectInput,
  Surface,
  Tag,
  TextArea,
  TextInput,
} from "@/shared/ui";
import type { ScreenId } from "../domain/screen";

type ScreenRenderer = () => ReactNode;

function Screen01PublicWelcomeScreen() {
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

function Screen02SignUpScreen() {
  return (
    <>
      <div className="mx-auto flex min-h-[380px] max-w-3xl items-center justify-center">
        <div className="grid w-full gap-5 md:grid-cols-[1fr_380px] md:items-center">
          <div className="hidden md:block"><BrandMark /><h3 className="mt-8 text-3xl font-semibold tracking-tight text-white">Start your private workspace.</h3><p className="mt-3 text-sm leading-7 text-slate-400">New boards start empty so the user can define the workflow intentionally.</p></div>
          <Surface as="form" variant="form">
            <h3 className="text-xl font-semibold text-white">Create your TaskBoard account.</h3><p className="mt-1 text-sm text-slate-400">Start with a private workspace for your boards and tasks.</p>
            <div className="mt-5 grid gap-3"><FieldLabel>Email<TextInput placeholder="alex@example.com" defaultValue="alex@example.com" /></FieldLabel><div className="grid grid-cols-2 gap-3"><FieldLabel>First name<TextInput placeholder="Alex" /></FieldLabel><FieldLabel>Last name<TextInput placeholder="Morgan" /></FieldLabel></div><FieldLabel>Password<TextInput type="password" defaultValue="Password123" /></FieldLabel><p className="text-xs leading-5 text-slate-500">Use 8–128 characters with uppercase, lowercase, and a number.</p></div>
            <Button variant="primary" size="md" className="mt-5 w-full">Create account</Button><p className="mt-4 text-center text-sm text-slate-500">Already have an account? <span className="text-cyan-200">Sign in.</span></p>
          </Surface>
        </div>
      </div>
    </>
  );
}

function Screen03SignInScreen() {
  return (
    <>
      <div className="mx-auto flex min-h-[380px] max-w-md items-center justify-center">
        <Surface as="form" className="w-full rounded-[1.6rem]" padding="lg" variant="form">
          <div className="mb-6"><BrandMark /></div><h3 className="text-2xl font-semibold text-white">Sign in to TaskBoard.</h3><p className="mt-2 text-sm text-slate-400">Continue managing your boards and tasks.</p>
          <div className="mt-6 grid gap-4"><FieldLabel>Email<TextInput placeholder="alex@example.com" /></FieldLabel><FieldLabel>Password<TextInput className="border-red-300/30 bg-red-400/5" type="password" defaultValue="wrongpass" /></FieldLabel></div>
          <Alert className="mt-4" variant="danger">Email or password is incorrect.</Alert>
          <Button variant="primary" size="md" className="mt-5 w-full">Sign in</Button><p className="mt-4 text-center text-sm text-slate-500">New to TaskBoard? <span className="text-cyan-200">Create an account.</span></p>
        </Surface>
      </div>
    </>
  );
}

function Screen04SessionLoadingProtectedRouteGate() {
  return (
    <>
      <div className="mx-auto flex min-h-[380px] max-w-lg items-center justify-center">
        <Surface className="rounded-[1.7rem] bg-slate-950/85 text-center shadow-2xl shadow-black/40" padding="xl">
          <IconFrame className="mx-auto border border-cyan-300/20" size="lg" variant="cyan"><span className="loader h-8 w-8 rounded-full border-2 border-cyan-300/20 border-t-cyan-200"></span></IconFrame>
          <h3 className="mt-6 text-xl font-semibold text-white">Checking your session…</h3><p className="mt-2 text-sm leading-6 text-slate-400">Opening your workspace and protecting private board data.</p>
        </Surface>
      </div>
    </>
  );
}

function Screen05BoardsDashboardScreen() {
  return (
    <>
      <Surface>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div><BrandMark /><h3 className="mt-6 text-2xl font-semibold text-white">Your boards</h3><p className="mt-1 text-sm text-slate-400">Choose a board or create a new one to start organizing tasks.</p></div><Button variant="primary" size="sm" className="self-start">Create board</Button></div>
        <div className="mt-6 grid gap-4 md:grid-cols-3"><Surface className="card-glow" padding="sm" variant="accent"><p className="font-semibold text-cyan-50">Portfolio Website</p><p className="mt-2 text-xs text-cyan-200/70">4 columns · 18 tasks</p><div className="mt-4 h-2 rounded-full bg-cyan-300/30"><div className="h-2 w-2/3 rounded-full bg-cyan-300"></div></div><Button variant="textAccent" size="none" className="mt-4 text-xs font-medium">Open board →</Button></Surface><Surface padding="sm" variant="muted"><p className="font-semibold text-white">Learning Plan</p><p className="mt-2 text-xs text-slate-500">3 columns · 9 tasks</p><div className="mt-4 flex -space-x-1"><span className="h-6 w-6 rounded-full bg-violet-500"></span><span className="h-6 w-6 rounded-full bg-cyan-400"></span></div><Button variant="text" size="none" className="mt-4 text-xs font-medium">Rename</Button></Surface><Surface className="text-center" padding="sm" variant="dashed"><IconFrame className="mx-auto" size="sm" variant="muted">+</IconFrame><p className="mt-4 font-semibold text-white">No boards yet</p><p className="mt-1 text-xs leading-5 text-slate-500">Create your first board to define a workflow and add tasks.</p></Surface></div>
      </Surface>
    </>
  );
}

function Screen06CreateBoardDialog() {
  return (
    <>
      <PreviewModalFrame><Surface as="form" variant="dialog"><h3 className="text-xl font-semibold text-white">Create board</h3><p className="mt-1 text-sm text-slate-400">Boards start empty. You’ll add workflow columns next.</p><FieldLabel className="mt-5">Board name<TextInput placeholder="Example: Portfolio Website" /></FieldLabel><div className="mt-5 flex justify-end gap-3"><Button variant="secondary" size="sm">Cancel</Button><Button variant="primary" size="sm">Create board</Button></div></Surface></PreviewModalFrame>
    </>
  );
}

function Screen07RenameBoardDialog() {
  return (
    <>
      <PreviewModalFrame><Surface as="form" variant="dialog"><h3 className="text-xl font-semibold text-white">Rename board</h3><FieldLabel className="mt-5">Board name<TextInput className="border-amber-300/30 bg-amber-300/5" defaultValue="Learning Plan" /></FieldLabel><p className="mt-2 text-xs text-amber-100">You already have a board with this name.</p><div className="mt-5 flex justify-end gap-3"><Button variant="secondary" size="sm">Cancel</Button><Button variant="primary" size="sm">Save name</Button></div></Surface></PreviewModalFrame>
    </>
  );
}

function Screen08EmptyBoardScreen() {
  return (
    <>
      <Surface>
        <div className="flex items-center justify-between"><div><BrandMark /><p className="mt-4 text-xs uppercase tracking-[.24em] text-slate-500">Board</p><h3 className="mt-2 text-2xl font-semibold text-white">Product Launch</h3></div><Button variant="secondary" size="sm">Rename</Button></div>
        <Surface className="mt-8 text-center" padding="empty" variant="dashedAccent"><IconFrame className="mx-auto" size="lg" variant="cyan">+</IconFrame><h4 className="mt-5 text-xl font-semibold text-white">This board has no columns yet.</h4><p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-400">Create your first workflow column, such as Todo, In Progress, or Done.</p><Button variant="primary" size="lg" className="mt-6">Add first column</Button></Surface>
      </Surface>
    </>
  );
}

function Screen09KanbanBoardScreen() {
  return (
    <>
      <Surface padding="sm">
        <div className="flex flex-col gap-3 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between"><div><BrandMark /><h3 className="mt-4 text-2xl font-semibold text-white">Portfolio Website</h3></div><div className="flex flex-wrap gap-2"><Button variant="secondary" size="xsTall">Rename board</Button><Button variant="primary" size="xsTall">Add column</Button></div></div>
        <div className="mt-5 grid min-w-0 gap-4 lg:grid-cols-3"><Surface padding="xs" variant="muted"><div className="flex items-center justify-between"><h4 className="font-semibold text-white">Todo</h4><Badge>3</Badge></div><Button variant="subtle" size="none" className="mt-3 w-full rounded-xl border border-dashed border-white/15 py-2 text-xs text-slate-400">+ Add task</Button><div className="mt-3 grid gap-3"><Surface padding="xs" variant="task"><p className="font-medium text-white">Create sign-up screen</p><div className="mt-3 flex gap-2"><Tag>UI</Tag><Tag variant="violet">Auth</Tag></div><p className="mt-3 text-xs text-slate-500">Created May 17 · 2 comments</p></Surface><Surface padding="xs" variant="task"><p className="font-medium text-white">Prepare empty board state</p><p className="mt-3 text-xs text-slate-500">Created May 17</p></Surface></div></Surface><Surface padding="xs" variant="accentSoft"><div className="flex items-center justify-between"><h4 className="font-semibold text-cyan-50">In Progress</h4><Badge variant="cyan">2</Badge></div><div className="mt-3 grid gap-3"><Surface className="ring-1 ring-cyan-300/20" padding="xs" variant="task"><p className="font-medium text-white">Build drag-and-drop persistence</p><div className="mt-3 flex gap-2"><Tag variant="amber">API</Tag></div><p className="mt-3 text-xs text-slate-500">1 attachment · 4 comments</p></Surface></div></Surface><Surface padding="xs" variant="muted"><div className="flex items-center justify-between"><h4 className="font-semibold text-white">Done</h4><Badge>8</Badge></div><div className="mt-3 rounded-xl border border-dashed border-white/10 p-5 text-center text-xs text-slate-500">No tasks in this column.</div></Surface></div>
      </Surface>
    </>
  );
}

function Screen10CreateColumnDialog() {
  return (
    <>
      <PreviewModalFrame><Surface as="form" variant="dialog"><h3 className="text-xl font-semibold text-white">Add column</h3><p className="mt-1 text-sm text-slate-400">Create a workflow stage for this board.</p><FieldLabel className="mt-5">Column name<TextInput placeholder="Example: Todo" /></FieldLabel><div className="mt-5 flex justify-end gap-3"><Button variant="secondary" size="sm">Cancel</Button><Button variant="primary" size="sm">Add column</Button></div></Surface></PreviewModalFrame>
    </>
  );
}

function Screen11RenameColumnDialog() {
  return (
    <>
      <PreviewModalFrame><Surface as="form" variant="dialog"><h3 className="text-xl font-semibold text-white">Rename column</h3><FieldLabel className="mt-5">Column name<TextInput className="border-red-300/30 bg-red-400/5" defaultValue="In Progress" /></FieldLabel><p className="mt-2 text-xs text-red-100">This board already has a column with this name.</p><div className="mt-5 flex justify-end gap-3"><Button variant="secondary" size="sm">Cancel</Button><Button variant="primary" size="sm">Save name</Button></div></Surface></PreviewModalFrame>
    </>
  );
}

function Screen12DeleteColumnConfirmation() {
  return (
    <>
      <PreviewModalFrame><Surface variant="dialogDanger"><IconFrame variant="red">!</IconFrame><h3 className="mt-4 text-xl font-semibold text-white">Column is not empty</h3><p className="mt-2 text-sm leading-6 text-slate-400">Move all tasks to another column before deleting this column.</p><div className="mt-5 flex justify-end"><Button variant="primary" size="sm">Got it</Button></div></Surface></PreviewModalFrame>
    </>
  );
}

function Screen13CreateTaskDialogDrawer() {
  return (
    <>
      <Surface className="relative mx-auto min-h-[410px] max-w-4xl overflow-hidden" padding="sm" variant="panelSoft">
        <div className="grid gap-4 opacity-40 lg:grid-cols-3"><div className="h-80 rounded-2xl bg-white/[.04]"></div><div className="h-80 rounded-2xl bg-cyan-300/5"></div><div className="h-80 rounded-2xl bg-white/[.04]"></div></div>
        <aside className="absolute bottom-0 right-0 top-0 w-full max-w-md border-l border-white/10 bg-slate-950 p-5 shadow-2xl shadow-black/70"><div className="flex items-center justify-between"><h3 className="text-xl font-semibold text-white">Create task</h3><Button variant="subtle" size="none" className="px-3 py-1">×</Button></div><p className="mt-1 text-sm text-slate-400">Add the details needed to track this work item.</p><div className="mt-5 grid gap-4"><FieldLabel>Task title<TextInput placeholder="Example: Implement sign-in form" /></FieldLabel><FieldLabel>Description<TextArea className="min-h-24" placeholder="Describe what needs to be done." /></FieldLabel><div><p className="text-sm text-slate-300">Labels</p><div className="mt-2 flex flex-wrap gap-2"><Tag>UI</Tag><Tag variant="violet">Auth</Tag><Button variant="dashed" size="none" className="px-2.5 py-1 text-xs">+ Add</Button></div><p className="mt-2 text-xs text-slate-500">Labels are optional.</p></div><Alert>Target column: <span className="text-cyan-100">Todo</span></Alert></div><div className="mt-6 flex justify-end gap-3"><Button variant="secondary" size="sm">Cancel</Button><Button variant="primary" size="sm">Create task</Button></div></aside>
      </Surface>
    </>
  );
}

function Screen14TaskDetailEditScreen() {
  return (
    <>
      <Surface>
        <div className="grid gap-5 lg:grid-cols-[1fr_280px]"><main><div className="flex items-center justify-between"><p className="text-xs uppercase tracking-[.24em] text-cyan-200">Task details</p><Button variant="subtle" size="xs">Close</Button></div><FieldLabel className="mt-5">Title<TextInput className="text-lg font-semibold" defaultValue="Build drag-and-drop persistence" /></FieldLabel><FieldLabel className="mt-4">Description<TextArea className="min-h-28" defaultValue={"Persist task order after moving cards between columns. Roll back when the API request fails."} /></FieldLabel><div className="mt-4 flex flex-wrap gap-2"><Tag variant="amber">API</Tag><Tag>Board UX</Tag><Button variant="dashed" size="none" className="px-2.5 py-1 text-xs">+ Label</Button></div><Alert className="mt-5" variant="warning">We couldn’t save your changes. Your edits are still here so you can try again.</Alert></main><Surface as="aside" padding="sm" variant="muted"><p className="text-sm font-semibold text-white">Properties</p><div className="mt-4 grid gap-3 text-sm"><FieldLabel>Move to column<SelectInput><option>In Progress</option><option>Todo</option><option>Done</option></SelectInput></FieldLabel><p className="text-slate-500">Created: May 17, 2026</p><Button variant="primary" size="sm">Save changes</Button><Button variant="danger" size="sm">Delete task</Button></div></Surface></div>
      </Surface>
    </>
  );
}

function Screen15DeleteTaskConfirmation() {
  return (
    <>
      <PreviewModalFrame><Surface variant="dialogDanger"><IconFrame variant="red">⌫</IconFrame><h3 className="mt-4 text-xl font-semibold text-white">Delete task?</h3><p className="mt-2 text-sm leading-6 text-slate-400">This task, its comments, and its attachments will be permanently removed.</p><div className="mt-5 flex justify-end gap-3"><Button variant="secondary" size="sm">Cancel</Button><Button variant="dangerSolid" size="sm">Delete task</Button></div></Surface></PreviewModalFrame>
    </>
  );
}

function Screen16CommentsArea() {
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

function Screen17TaskAttachmentsAreaPreview() {
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

function Screen18ProfileScreen() {
  return (
    <>
      <Surface className="mx-auto max-w-3xl">
        <h3 className="text-2xl font-semibold text-white">Profile</h3><p className="mt-1 text-sm text-slate-400">Update your personal information and avatar.</p>
        <div className="mt-6 grid gap-6 md:grid-cols-[220px_1fr]"><Surface className="text-center" variant="muted"><IconFrame className="mx-auto font-semibold" size="xl" variant="gradient">AM</IconFrame><Button variant="secondary" size="sm" className="mt-4">Upload avatar</Button><p className="mt-3 text-xs leading-5 text-slate-500">JPEG or PNG only, up to 2 MB.</p></Surface><form className="grid gap-4"><div className="grid gap-4 sm:grid-cols-2"><FieldLabel>First name<TextInput defaultValue="Alex" /></FieldLabel><FieldLabel>Last name<TextInput defaultValue="Morgan" /></FieldLabel></div><Alert variant="success">Profile updated.</Alert><Button variant="primary" size="lg" className="justify-self-start">Save profile</Button></form></div>
      </Surface>
    </>
  );
}

function Screen19SettingsScreen() {
  return (
    <>
      <Surface className="mx-auto max-w-3xl">
        <h3 className="text-2xl font-semibold text-white">Settings</h3><p className="mt-1 text-sm text-slate-400">Manage your account security and app preferences.</p>
        <div className="mt-6 grid gap-4"><Surface as="section" padding="sm" variant="muted"><div className="flex items-center justify-between"><div><p className="font-semibold text-white">Theme</p><p className="mt-1 text-sm text-slate-500">Personalize how TaskBoard looks for you.</p></div><Button variant="primary" size="sm">Apply theme</Button></div></Surface><Surface as="section" padding="sm" variant="muted"><div className="flex items-center justify-between"><div><p className="font-semibold text-white">Password</p><p className="mt-1 text-sm text-slate-500">Use your current password to set a new one.</p></div><Button variant="secondary" size="sm">Change password</Button></div></Surface><Surface as="section" padding="sm" variant="muted"><p className="font-semibold text-white">Account</p><p className="mt-1 text-sm text-slate-500">alex@example.com</p><Button variant="danger" size="sm" className="mt-4">Sign out</Button></Surface></div>
      </Surface>
    </>
  );
}

function Screen20ThemePreferenceSection() {
  return (
    <>
      <Surface className="mx-auto max-w-3xl">
        <h3 className="text-2xl font-semibold text-white">Choose theme</h3><p className="mt-1 text-sm text-slate-400">Personalize how TaskBoard looks for you.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3"><Button variant="choiceSelected" size="card"><div className="h-24 rounded-xl bg-slate-950 ring-1 ring-white/10"></div><p className="mt-3 font-semibold text-cyan-50">Dark blueprint</p><p className="mt-1 text-xs text-cyan-200/70">Selected</p></Button><Button variant="choice" size="card"><div className="h-24 rounded-xl bg-slate-200"></div><p className="mt-3 font-semibold text-white">Light clean</p><p className="mt-1 text-xs text-slate-500">Available</p></Button><Button variant="choice" size="card"><div className="h-24 rounded-xl bg-gradient-to-br from-violet-700 to-slate-950"></div><p className="mt-3 font-semibold text-white">Violet night</p><p className="mt-1 text-xs text-slate-500">Available</p></Button></div>
        <Alert className="mt-5 flex items-center justify-between" variant="success"><p>Theme updated.</p><Button variant="primary" size="sm">Apply theme</Button></Alert>
      </Surface>
    </>
  );
}

function Screen21ChangePasswordScreenDialog() {
  return (
    <>
      <div className="mx-auto flex min-h-[380px] max-w-lg items-center justify-center">
        <Surface as="form" className="w-full" variant="form"><h3 className="text-2xl font-semibold text-white">Change password</h3><p className="mt-1 text-sm text-slate-400">Use your current password to set a new one.</p><div className="mt-5 grid gap-4"><FieldLabel>Current password<TextInput type="password" /></FieldLabel><FieldLabel>New password<TextInput type="password" defaultValue="NewPass123" /></FieldLabel><FieldLabel>Confirm new password<TextInput className="border-red-300/30 bg-red-400/5" type="password" defaultValue="NewPass124" /></FieldLabel><p className="text-xs text-red-100">Passwords do not match.</p><p className="text-xs leading-5 text-slate-500">Use 8–128 characters with uppercase, lowercase, and a number.</p></div><div className="mt-5 flex justify-end gap-3"><Button variant="secondary" size="sm">Cancel</Button><Button variant="primary" size="sm">Update password</Button></div></Surface>
      </div>
    </>
  );
}

function Screen22SignOutConfirmation() {
  return (
    <>
      <PreviewModalFrame><Surface variant="dialog"><h3 className="text-xl font-semibold text-white">Sign out?</h3><p className="mt-2 text-sm leading-6 text-slate-400">You’ll need to sign in again to access your boards.</p><div className="mt-5 flex justify-end gap-3"><Button variant="secondary" size="sm">Cancel</Button><Button variant="primary" size="sm">Sign out</Button></div></Surface></PreviewModalFrame>
    </>
  );
}

function Screen23AccessDeniedScreen() {
  return (
    <>
      <div className="mx-auto flex min-h-[380px] max-w-lg items-center justify-center">
        <Surface className="rounded-[1.7rem] border-red-300/20 bg-slate-950/90 text-center" padding="xl"><IconFrame className="mx-auto" size="lg" variant="red">⛔</IconFrame><h3 className="mt-6 text-2xl font-semibold text-white">Access denied</h3><p className="mt-2 text-sm leading-6 text-slate-400">You don’t have permission to view this resource.</p><Button variant="primary" size="lg" className="mt-6">Go to your boards</Button></Surface>
      </div>
    </>
  );
}

function Screen24NotFoundScreen() {
  return (
    <>
      <div className="mx-auto flex min-h-[380px] max-w-lg items-center justify-center">
        <Surface className="rounded-[1.7rem] bg-slate-950/90 text-center" padding="xl"><p className="font-mono text-7xl font-semibold text-cyan-300/80">404</p><h3 className="mt-4 text-2xl font-semibold text-white">Page not found</h3><p className="mt-2 text-sm leading-6 text-slate-400">This page may have been moved, deleted, or is no longer available.</p><div className="mt-6 flex justify-center gap-3"><Button variant="primary" size="lg">Go to boards</Button><Button variant="secondary" size="lg">Go back</Button></div></Surface>
      </div>
    </>
  );
}

function Screen25GeneralErrorRetryScreen() {
  return (
    <>
      <div className="mx-auto flex min-h-[380px] max-w-xl items-center justify-center">
        <Surface className="rounded-[1.7rem] border-amber-300/20 bg-slate-950/90" padding="xl"><div className="flex gap-5"><IconFrame className="shrink-0" size="lg" variant="amber">!</IconFrame><div><h3 className="text-2xl font-semibold text-white">Something went wrong</h3><p className="mt-2 text-sm leading-6 text-slate-400">We couldn’t complete this action. Please try again.</p><p className="mt-4 font-mono text-xs text-slate-500">Reference ID: TB-9F42</p><div className="mt-6 flex gap-3"><Button variant="primary" size="lg">Try again</Button><Button variant="secondary" size="lg">Go to boards</Button></div></div></div></Surface>
      </div>
    </>
  );
}

function Screen26UploadFailureState() {
  return (
    <>
      <div className="mx-auto flex min-h-[380px] max-w-2xl items-center justify-center">
        <Surface className="w-full rounded-[1.6rem] border-red-300/20 bg-slate-950/90" padding="lg"><div className="flex flex-col gap-5 sm:flex-row sm:items-start"><IconFrame className="shrink-0" size="lg" variant="red">⇧</IconFrame><div className="flex-1"><h3 className="text-2xl font-semibold text-white">Upload failed</h3><p className="mt-2 text-sm leading-6 text-slate-400">Choose a JPEG or PNG image up to 2 MB and try again.</p><Surface className="mt-5" padding="sm" variant="muted"><div className="flex items-center justify-between"><div><p className="font-medium text-white">design-system.sketch</p><p className="mt-1 text-xs text-red-100">Unsupported file type</p></div><Badge variant="red">Rejected</Badge></div></Surface><div className="mt-5 flex flex-wrap gap-3"><Button variant="primary" size="lg">Try again</Button><Button variant="secondary" size="lg">Choose another image</Button></div></div></div></Surface>
      </div>
    </>
  );
}

function Screen27ResponsiveMobileBoardVariant() {
  return (
    <>
      <div className="mx-auto flex min-h-[430px] max-w-5xl justify-center gap-6">
        <div className="w-[310px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-2xl shadow-black/40">
          <div className="border-b border-white/10 p-4"><div className="flex items-center justify-between"><BrandMark /><Button variant="subtle" size="none" className="rounded-xl px-2 py-1 text-xs">☰</Button></div><h3 className="mt-5 text-xl font-semibold text-white">Portfolio Website</h3><div className="mt-4 flex gap-2 overflow-x-auto pb-1"><Button variant="primary" size="xs">In Progress</Button><Button variant="subtle" size="xs">Todo</Button><Button variant="subtle" size="xs">Done</Button></div></div>
          <div className="p-4"><div className="flex items-center justify-between"><h4 className="font-semibold text-cyan-50">In Progress</h4><Button variant="primary" size="xs">+ Task</Button></div><div className="mt-4 grid gap-3"><Surface padding="xs" variant="task"><p className="font-medium text-white">Build mobile board view</p><p className="mt-2 text-xs text-slate-500">2 comments · UI</p></Surface><Surface padding="xs" variant="task"><p className="font-medium text-white">Move selector fallback</p><FieldLabel className="mt-3 gap-1 text-xs text-slate-400">Move to column<SelectInput className="py-1.5 text-xs"><option>Done</option><option>Todo</option></SelectInput></FieldLabel></Surface></div></div>
        </div>
        <Surface className="hidden max-w-sm self-center md:block" variant="muted"><p className="text-xs uppercase tracking-[.24em] text-cyan-200">Responsive rule</p><h4 className="mt-3 text-xl font-semibold text-white">Drag is not the only path.</h4><p className="mt-2 text-sm leading-6 text-slate-400">Mobile users get column tabs and a task move selector, so task movement remains usable without desktop-style drag-and-drop.</p></Surface>
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
