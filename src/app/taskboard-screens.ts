export type ScreenId = "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27";

export type TaskboardScreen = {
  id: ScreenId;
  title: string;
  group: string;
  sourceRoute: string;
  route: string;
  template: string;
};

export const taskboardScreens = [
  {
    "id": "01",
    "title": "Public Welcome Screen",
    "group": "public",
    "sourceRoute": "/",
    "route": "/",
    "template": "<div class=\"mx-auto max-w-3xl rounded-[1.6rem] border border-white/10 bg-slate-950/80 p-5 sm:p-7\">\n  <nav class=\"flex items-center justify-between gap-4\"><div class=\"inline-flex items-center gap-2\"><span class=\"relative flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 ring-1 ring-cyan-300/25\"><span class=\"absolute h-5 w-5 rounded-full bg-cyan-300 blur-md\"></span><svg class=\"relative h-5 w-5 text-cyan-200\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M4 7h16M4 12H8m-4 5h11\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/></svg></span><span class=\"font-semibold tracking-tight text-white\">Task<span class=\"text-cyan-300\">Board</span></span></div><div class=\"hidden gap-5 text-sm text-slate-400 sm:flex\"><span>Features</span><span>Security</span><span>Sign in</span></div></nav>\n  <div class=\"mt-12 grid gap-8 lg:grid-cols-[1fr_260px] lg:items-center\">\n    <div>\n      <span class=\"rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[.22em] text-cyan-100\">Private Kanban workspace</span>\n      <h3 class=\"mt-5 text-4xl font-semibold tracking-tight text-white\">Organize work visually with TaskBoard.</h3>\n      <p class=\"mt-4 text-sm leading-7 text-slate-400\">Create private Kanban boards, define your own workflow, and move tasks from idea to done.</p>\n      <div class=\"mt-6 flex flex-wrap gap-3\"><button class=\"rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-950\">Create account</button><button class=\"rounded-full border border-white/10 bg-white/[.03] px-5 py-2.5 text-sm font-semibold text-white\">Sign in</button></div>\n    </div>\n    <div class=\"rounded-2xl border border-white/10 bg-white/[.035] p-4\">\n      <div class=\"mb-4 flex items-center justify-between\"><span class=\"text-xs font-medium text-slate-400\">Portfolio board</span><span class=\"rounded-full bg-emerald-400/10 px-2 py-1 text-[10px] text-emerald-200\">Live</span></div>\n      <div class=\"grid gap-3\"><div class=\"rounded-xl border border-white/10 bg-slate-950/80 p-3\"><p class=\"text-sm font-medium text-white\">Todo</p><p class=\"mt-2 text-xs text-slate-500\">3 tasks</p></div><div class=\"rounded-xl border border-cyan-300/20 bg-cyan-300/10 p-3\"><p class=\"text-sm font-medium text-cyan-100\">In Progress</p><p class=\"mt-2 text-xs text-cyan-200/70\">2 tasks</p></div><div class=\"rounded-xl border border-white/10 bg-slate-950/80 p-3\"><p class=\"text-sm font-medium text-white\">Done</p><p class=\"mt-2 text-xs text-slate-500\">8 tasks</p></div></div>\n    </div>\n  </div>\n  <div class=\"mt-8 grid gap-3 sm:grid-cols-3\"><div class=\"rounded-2xl border border-white/10 bg-white/[.025] p-4\"><p class=\"font-medium text-white\">Multiple boards</p><p class=\"mt-1 text-xs text-slate-500\">Separate workflows by project.</p></div><div class=\"rounded-2xl border border-white/10 bg-white/[.025] p-4\"><p class=\"font-medium text-white\">Custom columns</p><p class=\"mt-1 text-xs text-slate-500\">Build your own process.</p></div><div class=\"rounded-2xl border border-white/10 bg-white/[.025] p-4\"><p class=\"font-medium text-white\">Comments & files</p><p class=\"mt-1 text-xs text-slate-500\">Keep task context nearby.</p></div></div>\n</div>"
  },
  {
    "id": "02",
    "title": "Sign Up Screen",
    "group": "auth",
    "sourceRoute": "/signup",
    "route": "/signup",
    "template": "<div class=\"mx-auto flex min-h-[380px] max-w-3xl items-center justify-center\">\n  <div class=\"grid w-full gap-5 md:grid-cols-[1fr_380px] md:items-center\">\n    <div class=\"hidden md:block\"><div class=\"inline-flex items-center gap-2\"><span class=\"relative flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 ring-1 ring-cyan-300/25\"><span class=\"absolute h-5 w-5 rounded-full bg-cyan-300 blur-md\"></span><svg class=\"relative h-5 w-5 text-cyan-200\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M4 7h16M4 12H8m-4 5h11\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/></svg></span><span class=\"font-semibold tracking-tight text-white\">Task<span class=\"text-cyan-300\">Board</span></span></div><h3 class=\"mt-8 text-3xl font-semibold tracking-tight text-white\">Start your private workspace.</h3><p class=\"mt-3 text-sm leading-7 text-slate-400\">New boards start empty so the user can define the workflow intentionally.</p></div>\n    <form class=\"rounded-[1.5rem] border border-white/10 bg-slate-950/90 p-5 shadow-2xl shadow-black/40\">\n      <h3 class=\"text-xl font-semibold text-white\">Create your TaskBoard account.</h3><p class=\"mt-1 text-sm text-slate-400\">Start with a private workspace for your boards and tasks.</p>\n      <div class=\"mt-5 grid gap-3\"><label class=\"grid gap-1.5 text-sm text-slate-300\">Email<input class=\"field\" placeholder=\"alex@example.com\" value=\"alex@example.com\" /></label><div class=\"grid grid-cols-2 gap-3\"><label class=\"grid gap-1.5 text-sm text-slate-300\">First name<input class=\"field\" placeholder=\"Alex\" /></label><label class=\"grid gap-1.5 text-sm text-slate-300\">Last name<input class=\"field\" placeholder=\"Morgan\" /></label></div><label class=\"grid gap-1.5 text-sm text-slate-300\">Password<input class=\"field\" type=\"password\" value=\"Password123\" /></label><p class=\"text-xs leading-5 text-slate-500\">Use 8–128 characters with uppercase, lowercase, and a number.</p></div>\n      <button class=\"mt-5 w-full rounded-full bg-cyan-300 px-4 py-2.5 text-sm font-semibold text-slate-950\">Create account</button><p class=\"mt-4 text-center text-sm text-slate-500\">Already have an account? <span class=\"text-cyan-200\">Sign in.</span></p>\n    </form>\n  </div>\n</div>"
  },
  {
    "id": "03",
    "title": "Sign In Screen",
    "group": "auth",
    "sourceRoute": "/signin",
    "route": "/signin",
    "template": "<div class=\"mx-auto flex min-h-[380px] max-w-md items-center justify-center\">\n  <form class=\"w-full rounded-[1.6rem] border border-white/10 bg-slate-950/90 p-6 shadow-2xl shadow-black/40\">\n    <div class=\"mb-6\"><div class=\"inline-flex items-center gap-2\"><span class=\"relative flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 ring-1 ring-cyan-300/25\"><span class=\"absolute h-5 w-5 rounded-full bg-cyan-300 blur-md\"></span><svg class=\"relative h-5 w-5 text-cyan-200\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M4 7h16M4 12H8m-4 5h11\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/></svg></span><span class=\"font-semibold tracking-tight text-white\">Task<span class=\"text-cyan-300\">Board</span></span></div></div><h3 class=\"text-2xl font-semibold text-white\">Sign in to TaskBoard.</h3><p class=\"mt-2 text-sm text-slate-400\">Continue managing your boards and tasks.</p>\n    <div class=\"mt-6 grid gap-4\"><label class=\"grid gap-1.5 text-sm text-slate-300\">Email<input class=\"field\" placeholder=\"alex@example.com\" /></label><label class=\"grid gap-1.5 text-sm text-slate-300\">Password<input class=\"field border-red-300/30 bg-red-400/5\" type=\"password\" value=\"wrongpass\" /></label></div>\n    <div class=\"mt-4 rounded-xl border border-red-300/20 bg-red-400/10 p-3 text-sm text-red-100\">Email or password is incorrect.</div>\n    <button class=\"mt-5 w-full rounded-full bg-cyan-300 px-4 py-2.5 text-sm font-semibold text-slate-950\">Sign in</button><p class=\"mt-4 text-center text-sm text-slate-500\">New to TaskBoard? <span class=\"text-cyan-200\">Create an account.</span></p>\n  </form>\n</div>"
  },
  {
    "id": "04",
    "title": "Session Loading / Protected Route Gate",
    "group": "auth",
    "sourceRoute": "Protected routes",
    "route": "/session-loading",
    "template": "<div class=\"mx-auto flex min-h-[380px] max-w-lg items-center justify-center\">\n  <div class=\"rounded-[1.7rem] border border-white/10 bg-slate-950/85 p-8 text-center shadow-2xl shadow-black/40\">\n    <div class=\"mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10\"><span class=\"loader h-8 w-8 rounded-full border-2 border-cyan-300/20 border-t-cyan-200\"></span></div>\n    <h3 class=\"mt-6 text-xl font-semibold text-white\">Checking your session…</h3><p class=\"mt-2 text-sm leading-6 text-slate-400\">Opening your workspace and protecting private board data.</p>\n  </div>\n</div>"
  },
  {
    "id": "05",
    "title": "Boards Dashboard Screen",
    "group": "board",
    "sourceRoute": "/boards",
    "route": "/boards",
    "template": "<div class=\"rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-5\">\n  <div class=\"flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between\"><div><div class=\"inline-flex items-center gap-2\"><span class=\"relative flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 ring-1 ring-cyan-300/25\"><span class=\"absolute h-5 w-5 rounded-full bg-cyan-300 blur-md\"></span><svg class=\"relative h-5 w-5 text-cyan-200\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M4 7h16M4 12H8m-4 5h11\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/></svg></span><span class=\"font-semibold tracking-tight text-white\">Task<span class=\"text-cyan-300\">Board</span></span></div><h3 class=\"mt-6 text-2xl font-semibold text-white\">Your boards</h3><p class=\"mt-1 text-sm text-slate-400\">Choose a board or create a new one to start organizing tasks.</p></div><button class=\"self-start rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950\">Create board</button></div>\n  <div class=\"mt-6 grid gap-4 md:grid-cols-3\"><div class=\"card-glow rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4\"><p class=\"font-semibold text-cyan-50\">Portfolio Website</p><p class=\"mt-2 text-xs text-cyan-200/70\">4 columns · 18 tasks</p><div class=\"mt-4 h-2 rounded-full bg-cyan-300/30\"><div class=\"h-2 w-2/3 rounded-full bg-cyan-300\"></div></div><button class=\"mt-4 text-xs font-medium text-cyan-100\">Open board →</button></div><div class=\"rounded-2xl border border-white/10 bg-white/[.03] p-4\"><p class=\"font-semibold text-white\">Learning Plan</p><p class=\"mt-2 text-xs text-slate-500\">3 columns · 9 tasks</p><div class=\"mt-4 flex -space-x-1\"><span class=\"h-6 w-6 rounded-full bg-violet-500\"></span><span class=\"h-6 w-6 rounded-full bg-cyan-400\"></span></div><button class=\"mt-4 text-xs font-medium text-slate-300\">Rename</button></div><div class=\"rounded-2xl border border-dashed border-white/15 bg-white/[.02] p-4 text-center\"><div class=\"mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[.04] text-xl text-slate-400\">+</div><p class=\"mt-4 font-semibold text-white\">No boards yet</p><p class=\"mt-1 text-xs leading-5 text-slate-500\">Create your first board to define a workflow and add tasks.</p></div></div>\n</div>"
  },
  {
    "id": "06",
    "title": "Create Board Dialog",
    "group": "board",
    "sourceRoute": "Modal from /boards",
    "route": "/boards/create",
    "template": "<div class=\"relative mx-auto min-h-[380px] max-w-3xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5\"><div class=\"grid gap-4 opacity-35 md:grid-cols-3\"><div class=\"h-72 rounded-2xl bg-white/[.04]\"></div><div class=\"h-72 rounded-2xl bg-white/[.04]\"></div><div class=\"h-72 rounded-2xl bg-white/[.04]\"></div></div><div class=\"absolute inset-0 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm\"><form class=\"w-full max-w-md rounded-[1.5rem] border border-white/10 bg-slate-950 p-5 shadow-2xl shadow-black/60\"><h3 class=\"text-xl font-semibold text-white\">Create board</h3><p class=\"mt-1 text-sm text-slate-400\">Boards start empty. You’ll add workflow columns next.</p><label class=\"mt-5 grid gap-1.5 text-sm text-slate-300\">Board name<input class=\"field\" placeholder=\"Example: Portfolio Website\" /></label><div class=\"mt-5 flex justify-end gap-3\"><button class=\"rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-300\">Cancel</button><button class=\"rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950\">Create board</button></div></form></div></div>"
  },
  {
    "id": "07",
    "title": "Rename Board Dialog",
    "group": "board",
    "sourceRoute": "Modal from board/dashboard",
    "route": "/boards/rename",
    "template": "<div class=\"relative mx-auto min-h-[380px] max-w-3xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5\"><div class=\"grid gap-4 opacity-35 md:grid-cols-3\"><div class=\"h-72 rounded-2xl bg-white/[.04]\"></div><div class=\"h-72 rounded-2xl bg-white/[.04]\"></div><div class=\"h-72 rounded-2xl bg-white/[.04]\"></div></div><div class=\"absolute inset-0 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm\"><form class=\"w-full max-w-md rounded-[1.5rem] border border-white/10 bg-slate-950 p-5 shadow-2xl shadow-black/60\"><h3 class=\"text-xl font-semibold text-white\">Rename board</h3><label class=\"mt-5 grid gap-1.5 text-sm text-slate-300\">Board name<input class=\"field border-amber-300/30 bg-amber-300/5\" value=\"Learning Plan\" /></label><p class=\"mt-2 text-xs text-amber-100\">You already have a board with this name.</p><div class=\"mt-5 flex justify-end gap-3\"><button class=\"rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-300\">Cancel</button><button class=\"rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950\">Save name</button></div></form></div></div>"
  },
  {
    "id": "08",
    "title": "Empty Board Screen",
    "group": "board",
    "sourceRoute": "/boards/:boardId",
    "route": "/boards/empty",
    "template": "<div class=\"rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-5\">\n  <div class=\"flex items-center justify-between\"><div><div class=\"inline-flex items-center gap-2\"><span class=\"relative flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 ring-1 ring-cyan-300/25\"><span class=\"absolute h-5 w-5 rounded-full bg-cyan-300 blur-md\"></span><svg class=\"relative h-5 w-5 text-cyan-200\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M4 7h16M4 12H8m-4 5h11\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/></svg></span><span class=\"font-semibold tracking-tight text-white\">Task<span class=\"text-cyan-300\">Board</span></span></div><p class=\"mt-4 text-xs uppercase tracking-[.24em] text-slate-500\">Board</p><h3 class=\"mt-2 text-2xl font-semibold text-white\">Product Launch</h3></div><button class=\"rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-300\">Rename</button></div>\n  <div class=\"mt-8 rounded-[1.5rem] border border-dashed border-cyan-300/30 bg-cyan-300/5 p-10 text-center\"><div class=\"mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/10 text-2xl text-cyan-100\">+</div><h4 class=\"mt-5 text-xl font-semibold text-white\">This board has no columns yet.</h4><p class=\"mx-auto mt-2 max-w-md text-sm leading-6 text-slate-400\">Create your first workflow column, such as Todo, In Progress, or Done.</p><button class=\"mt-6 rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-950\">Add first column</button></div>\n</div>"
  },
  {
    "id": "09",
    "title": "Kanban Board Screen",
    "group": "board",
    "sourceRoute": "/boards/:boardId",
    "route": "/boards/[boardId]",
    "template": "<div class=\"rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-4\">\n  <div class=\"flex flex-col gap-3 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between\"><div><div class=\"inline-flex items-center gap-2\"><span class=\"relative flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 ring-1 ring-cyan-300/25\"><span class=\"absolute h-5 w-5 rounded-full bg-cyan-300 blur-md\"></span><svg class=\"relative h-5 w-5 text-cyan-200\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M4 7h16M4 12H8m-4 5h11\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/></svg></span><span class=\"font-semibold tracking-tight text-white\">Task<span class=\"text-cyan-300\">Board</span></span></div><h3 class=\"mt-4 text-2xl font-semibold text-white\">Portfolio Website</h3></div><div class=\"flex flex-wrap gap-2\"><button class=\"rounded-full border border-white/10 px-3 py-2 text-xs font-semibold text-slate-300\">Rename board</button><button class=\"rounded-full bg-cyan-300 px-3 py-2 text-xs font-semibold text-slate-950\">Add column</button></div></div>\n  <div class=\"mt-5 grid min-w-0 gap-4 lg:grid-cols-3\"><div class=\"rounded-2xl border border-white/10 bg-white/[.03] p-3\"><div class=\"flex items-center justify-between\"><h4 class=\"font-semibold text-white\">Todo</h4><span class=\"rounded-full bg-white/[.06] px-2 py-1 text-xs text-slate-400\">3</span></div><button class=\"mt-3 w-full rounded-xl border border-dashed border-white/15 py-2 text-xs text-slate-400\">+ Add task</button><div class=\"mt-3 grid gap-3\"><div class=\"task-card\"><p class=\"font-medium text-white\">Create sign-up screen</p><div class=\"mt-3 flex gap-2\"><span class=\"tag-cyan\">UI</span><span class=\"tag-violet\">Auth</span></div><p class=\"mt-3 text-xs text-slate-500\">Created May 17 · 2 comments</p></div><div class=\"task-card\"><p class=\"font-medium text-white\">Prepare empty board state</p><p class=\"mt-3 text-xs text-slate-500\">Created May 17</p></div></div></div><div class=\"rounded-2xl border border-cyan-300/20 bg-cyan-300/5 p-3\"><div class=\"flex items-center justify-between\"><h4 class=\"font-semibold text-cyan-50\">In Progress</h4><span class=\"rounded-full bg-cyan-300/10 px-2 py-1 text-xs text-cyan-200\">2</span></div><div class=\"mt-3 grid gap-3\"><div class=\"task-card ring-1 ring-cyan-300/20\"><p class=\"font-medium text-white\">Build drag-and-drop persistence</p><div class=\"mt-3 flex gap-2\"><span class=\"tag-amber\">API</span></div><p class=\"mt-3 text-xs text-slate-500\">1 attachment · 4 comments</p></div></div></div><div class=\"rounded-2xl border border-white/10 bg-white/[.03] p-3\"><div class=\"flex items-center justify-between\"><h4 class=\"font-semibold text-white\">Done</h4><span class=\"rounded-full bg-white/[.06] px-2 py-1 text-xs text-slate-400\">8</span></div><div class=\"mt-3 rounded-xl border border-dashed border-white/10 p-5 text-center text-xs text-slate-500\">No tasks in this column.</div></div></div>\n</div>"
  },
  {
    "id": "10",
    "title": "Create Column Dialog",
    "group": "board",
    "sourceRoute": "Modal from board screen",
    "route": "/boards/[boardId]/columns/create",
    "template": "<div class=\"relative mx-auto min-h-[380px] max-w-3xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5\"><div class=\"grid gap-4 opacity-35 md:grid-cols-3\"><div class=\"h-72 rounded-2xl bg-white/[.04]\"></div><div class=\"h-72 rounded-2xl bg-white/[.04]\"></div><div class=\"h-72 rounded-2xl bg-white/[.04]\"></div></div><div class=\"absolute inset-0 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm\"><form class=\"w-full max-w-md rounded-[1.5rem] border border-white/10 bg-slate-950 p-5 shadow-2xl shadow-black/60\"><h3 class=\"text-xl font-semibold text-white\">Add column</h3><p class=\"mt-1 text-sm text-slate-400\">Create a workflow stage for this board.</p><label class=\"mt-5 grid gap-1.5 text-sm text-slate-300\">Column name<input class=\"field\" placeholder=\"Example: Todo\" /></label><div class=\"mt-5 flex justify-end gap-3\"><button class=\"rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-300\">Cancel</button><button class=\"rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950\">Add column</button></div></form></div></div>"
  },
  {
    "id": "11",
    "title": "Rename Column Dialog",
    "group": "board",
    "sourceRoute": "Modal from column menu",
    "route": "/boards/[boardId]/columns/rename",
    "template": "<div class=\"relative mx-auto min-h-[380px] max-w-3xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5\"><div class=\"grid gap-4 opacity-35 md:grid-cols-3\"><div class=\"h-72 rounded-2xl bg-white/[.04]\"></div><div class=\"h-72 rounded-2xl bg-white/[.04]\"></div><div class=\"h-72 rounded-2xl bg-white/[.04]\"></div></div><div class=\"absolute inset-0 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm\"><form class=\"w-full max-w-md rounded-[1.5rem] border border-white/10 bg-slate-950 p-5 shadow-2xl shadow-black/60\"><h3 class=\"text-xl font-semibold text-white\">Rename column</h3><label class=\"mt-5 grid gap-1.5 text-sm text-slate-300\">Column name<input class=\"field border-red-300/30 bg-red-400/5\" value=\"In Progress\" /></label><p class=\"mt-2 text-xs text-red-100\">This board already has a column with this name.</p><div class=\"mt-5 flex justify-end gap-3\"><button class=\"rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-300\">Cancel</button><button class=\"rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950\">Save name</button></div></form></div></div>"
  },
  {
    "id": "12",
    "title": "Delete Column Confirmation",
    "group": "board",
    "sourceRoute": "Column menu confirmation",
    "route": "/boards/[boardId]/columns/delete",
    "template": "<div class=\"relative mx-auto min-h-[380px] max-w-3xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5\"><div class=\"grid gap-4 opacity-35 md:grid-cols-3\"><div class=\"h-72 rounded-2xl bg-white/[.04]\"></div><div class=\"h-72 rounded-2xl bg-white/[.04]\"></div><div class=\"h-72 rounded-2xl bg-white/[.04]\"></div></div><div class=\"absolute inset-0 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm\"><div class=\"w-full max-w-md rounded-[1.5rem] border border-red-300/20 bg-slate-950 p-5 shadow-2xl shadow-black/60\"><div class=\"flex h-12 w-12 items-center justify-center rounded-2xl bg-red-400/10 text-red-200\">!</div><h3 class=\"mt-4 text-xl font-semibold text-white\">Column is not empty</h3><p class=\"mt-2 text-sm leading-6 text-slate-400\">Move all tasks to another column before deleting this column.</p><div class=\"mt-5 flex justify-end\"><button class=\"rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950\">Got it</button></div></div></div></div>"
  },
  {
    "id": "13",
    "title": "Create Task Dialog / Drawer",
    "group": "task",
    "sourceRoute": "Drawer from column",
    "route": "/boards/[boardId]/tasks/create",
    "template": "<div class=\"relative mx-auto min-h-[410px] max-w-4xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-4\">\n  <div class=\"grid gap-4 opacity-40 lg:grid-cols-3\"><div class=\"h-80 rounded-2xl bg-white/[.04]\"></div><div class=\"h-80 rounded-2xl bg-cyan-300/5\"></div><div class=\"h-80 rounded-2xl bg-white/[.04]\"></div></div>\n  <aside class=\"absolute bottom-0 right-0 top-0 w-full max-w-md border-l border-white/10 bg-slate-950 p-5 shadow-2xl shadow-black/70\"><div class=\"flex items-center justify-between\"><h3 class=\"text-xl font-semibold text-white\">Create task</h3><button class=\"rounded-full border border-white/10 px-3 py-1 text-slate-400\">×</button></div><p class=\"mt-1 text-sm text-slate-400\">Add the details needed to track this work item.</p><div class=\"mt-5 grid gap-4\"><label class=\"grid gap-1.5 text-sm text-slate-300\">Task title<input class=\"field\" placeholder=\"Example: Implement sign-in form\" /></label><label class=\"grid gap-1.5 text-sm text-slate-300\">Description<textarea class=\"field min-h-24\" placeholder=\"Describe what needs to be done.\"></textarea></label><div><p class=\"text-sm text-slate-300\">Labels</p><div class=\"mt-2 flex flex-wrap gap-2\"><span class=\"tag-cyan\">UI</span><span class=\"tag-violet\">Auth</span><button class=\"rounded-full border border-dashed border-white/20 px-2.5 py-1 text-xs text-slate-400\">+ Add</button></div><p class=\"mt-2 text-xs text-slate-500\">Labels are optional.</p></div><div class=\"rounded-xl border border-white/10 bg-white/[.03] p-3 text-sm text-slate-400\">Target column: <span class=\"text-cyan-100\">Todo</span></div></div><div class=\"mt-6 flex justify-end gap-3\"><button class=\"rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-300\">Cancel</button><button class=\"rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950\">Create task</button></div></aside>\n</div>"
  },
  {
    "id": "14",
    "title": "Task Detail / Edit Screen",
    "group": "task",
    "sourceRoute": "/boards/:boardId/tasks/:taskId",
    "route": "/boards/[boardId]/tasks/[taskId]",
    "template": "<div class=\"rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-5\">\n  <div class=\"grid gap-5 lg:grid-cols-[1fr_280px]\"><main><div class=\"flex items-center justify-between\"><p class=\"text-xs uppercase tracking-[.24em] text-cyan-200\">Task details</p><button class=\"rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-400\">Close</button></div><label class=\"mt-5 grid gap-1.5 text-sm text-slate-300\">Title<input class=\"field text-lg font-semibold\" value=\"Build drag-and-drop persistence\" /></label><label class=\"mt-4 grid gap-1.5 text-sm text-slate-300\">Description<textarea class=\"field min-h-28\">Persist task order after moving cards between columns. Roll back when the API request fails.</textarea></label><div class=\"mt-4 flex flex-wrap gap-2\"><span class=\"tag-amber\">API</span><span class=\"tag-cyan\">Board UX</span><button class=\"rounded-full border border-dashed border-white/20 px-2.5 py-1 text-xs text-slate-400\">+ Label</button></div><div class=\"mt-5 rounded-xl border border-amber-300/20 bg-amber-300/10 p-3 text-sm text-amber-100\">We couldn’t save your changes. Your edits are still here so you can try again.</div></main><aside class=\"rounded-2xl border border-white/10 bg-white/[.03] p-4\"><p class=\"text-sm font-semibold text-white\">Properties</p><div class=\"mt-4 grid gap-3 text-sm\"><label class=\"grid gap-1.5 text-slate-300\">Move to column<select class=\"field\"><option>In Progress</option><option>Todo</option><option>Done</option></select></label><p class=\"text-slate-500\">Created: May 17, 2026</p><button class=\"rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950\">Save changes</button><button class=\"rounded-full border border-red-300/20 bg-red-400/10 px-4 py-2 text-sm font-semibold text-red-100\">Delete task</button></div></aside></div>\n</div>"
  },
  {
    "id": "15",
    "title": "Delete Task Confirmation",
    "group": "task",
    "sourceRoute": "Dialog from task detail",
    "route": "/boards/[boardId]/tasks/[taskId]/delete",
    "template": "<div class=\"relative mx-auto min-h-[380px] max-w-3xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5\"><div class=\"grid gap-4 opacity-35 md:grid-cols-3\"><div class=\"h-72 rounded-2xl bg-white/[.04]\"></div><div class=\"h-72 rounded-2xl bg-white/[.04]\"></div><div class=\"h-72 rounded-2xl bg-white/[.04]\"></div></div><div class=\"absolute inset-0 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm\"><div class=\"w-full max-w-md rounded-[1.5rem] border border-red-300/20 bg-slate-950 p-5 shadow-2xl shadow-black/60\"><div class=\"flex h-12 w-12 items-center justify-center rounded-2xl bg-red-400/10 text-red-200\">⌫</div><h3 class=\"mt-4 text-xl font-semibold text-white\">Delete task?</h3><p class=\"mt-2 text-sm leading-6 text-slate-400\">This task, its comments, and its attachments will be permanently removed.</p><div class=\"mt-5 flex justify-end gap-3\"><button class=\"rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-300\">Cancel</button><button class=\"rounded-full bg-red-400 px-4 py-2 text-sm font-semibold text-white\">Delete task</button></div></div></div></div>"
  },
  {
    "id": "16",
    "title": "Comments Area",
    "group": "task",
    "sourceRoute": "Section inside task detail",
    "route": "/boards/[boardId]/tasks/[taskId]/comments",
    "template": "<div class=\"mx-auto max-w-2xl rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-5\">\n  <div class=\"flex items-center justify-between\"><h3 class=\"text-xl font-semibold text-white\">Comments</h3><span class=\"rounded-full bg-white/[.06] px-2.5 py-1 text-xs text-slate-400\">3</span></div>\n  <div class=\"mt-5 grid gap-3\"><div class=\"rounded-2xl border border-white/10 bg-white/[.03] p-4\"><div class=\"flex justify-between gap-4\"><p class=\"font-medium text-white\">Alex Morgan</p><p class=\"text-xs text-slate-500\">Today 14:20</p></div><p class=\"mt-2 text-sm leading-6 text-slate-400\">Rollback works locally, but we still need the API error message.</p><div class=\"mt-3 flex gap-3 text-xs text-cyan-200\"><button>Edit</button><button class=\"text-red-200\">Delete</button></div></div><div class=\"rounded-2xl border border-white/10 bg-white/[.03] p-4\"><div class=\"flex justify-between gap-4\"><p class=\"font-medium text-white\">Alex Morgan</p><p class=\"text-xs text-slate-500\">Yesterday</p></div><p class=\"mt-2 text-sm leading-6 text-slate-400\">Added mobile move selector as a non-drag fallback.</p></div></div>\n  <div class=\"mt-5 rounded-2xl border border-cyan-300/20 bg-cyan-300/5 p-4\"><label class=\"grid gap-2 text-sm text-slate-300\">Add a comment<textarea class=\"field min-h-20\" placeholder=\"Add a note about this task…\"></textarea></label><div class=\"mt-3 flex justify-between\"><p class=\"text-xs text-slate-500\">Comment cannot be empty.</p><button class=\"rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950\">Add comment</button></div></div>\n</div>"
  },
  {
    "id": "17",
    "title": "Task Attachments Area / Preview",
    "group": "task",
    "sourceRoute": "Section inside task detail",
    "route": "/boards/[boardId]/tasks/[taskId]/attachments",
    "template": "<div class=\"mx-auto max-w-3xl rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-5\">\n  <div class=\"flex items-center justify-between\"><div><h3 class=\"text-xl font-semibold text-white\">Attachments</h3><p class=\"mt-1 text-sm text-slate-400\">JPEG or PNG only, up to 2 MB.</p></div><button class=\"rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950\">Upload image</button></div>\n  <div class=\"mt-5 grid gap-4 md:grid-cols-2\"><div class=\"rounded-2xl border border-dashed border-cyan-300/30 bg-cyan-300/5 p-6 text-center\"><div class=\"mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-100\">⇧</div><p class=\"mt-4 font-medium text-white\">Drop image here</p><p class=\"mt-1 text-xs text-slate-500\">Choose a JPEG or PNG image up to 2 MB.</p></div><div class=\"rounded-2xl border border-white/10 bg-white/[.03] p-3\"><div class=\"h-28 rounded-xl border border-white/10 bg-gradient-to-br from-cyan-300/20 to-violet-500/20\"></div><div class=\"mt-3 flex items-center justify-between\"><div><p class=\"text-sm font-medium text-white\">wireframe.png</p><p class=\"mt-1 text-xs text-slate-500\">612 KB · Uploaded today</p></div><button class=\"rounded-full border border-red-300/20 bg-red-400/10 px-3 py-1.5 text-xs text-red-100\">Delete</button></div></div></div>\n  <div class=\"mt-4 rounded-xl border border-red-300/20 bg-red-400/10 p-3 text-sm text-red-100\">Only JPEG and PNG images are allowed.</div>\n</div>"
  },
  {
    "id": "18",
    "title": "Profile Screen",
    "group": "settings",
    "sourceRoute": "/profile",
    "route": "/profile",
    "template": "<div class=\"mx-auto max-w-3xl rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-5\">\n  <h3 class=\"text-2xl font-semibold text-white\">Profile</h3><p class=\"mt-1 text-sm text-slate-400\">Update your personal information and avatar.</p>\n  <div class=\"mt-6 grid gap-6 md:grid-cols-[220px_1fr]\"><div class=\"rounded-2xl border border-white/10 bg-white/[.03] p-5 text-center\"><div class=\"mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300 to-violet-500 text-2xl font-semibold text-slate-950\">AM</div><button class=\"mt-4 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-300\">Upload avatar</button><p class=\"mt-3 text-xs leading-5 text-slate-500\">JPEG or PNG only, up to 2 MB.</p></div><form class=\"grid gap-4\"><div class=\"grid gap-4 sm:grid-cols-2\"><label class=\"grid gap-1.5 text-sm text-slate-300\">First name<input class=\"field\" value=\"Alex\" /></label><label class=\"grid gap-1.5 text-sm text-slate-300\">Last name<input class=\"field\" value=\"Morgan\" /></label></div><div class=\"rounded-xl border border-emerald-300/20 bg-emerald-400/10 p-3 text-sm text-emerald-100\">Profile updated.</div><button class=\"justify-self-start rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-950\">Save profile</button></form></div>\n</div>"
  },
  {
    "id": "19",
    "title": "Settings Screen",
    "group": "settings",
    "sourceRoute": "/settings",
    "route": "/settings",
    "template": "<div class=\"mx-auto max-w-3xl rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-5\">\n  <h3 class=\"text-2xl font-semibold text-white\">Settings</h3><p class=\"mt-1 text-sm text-slate-400\">Manage your account security and app preferences.</p>\n  <div class=\"mt-6 grid gap-4\"><section class=\"rounded-2xl border border-white/10 bg-white/[.03] p-4\"><div class=\"flex items-center justify-between\"><div><p class=\"font-semibold text-white\">Theme</p><p class=\"mt-1 text-sm text-slate-500\">Personalize how TaskBoard looks for you.</p></div><button class=\"rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950\">Apply theme</button></div></section><section class=\"rounded-2xl border border-white/10 bg-white/[.03] p-4\"><div class=\"flex items-center justify-between\"><div><p class=\"font-semibold text-white\">Password</p><p class=\"mt-1 text-sm text-slate-500\">Use your current password to set a new one.</p></div><button class=\"rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-300\">Change password</button></div></section><section class=\"rounded-2xl border border-white/10 bg-white/[.03] p-4\"><p class=\"font-semibold text-white\">Account</p><p class=\"mt-1 text-sm text-slate-500\">alex@example.com</p><button class=\"mt-4 rounded-full border border-red-300/20 bg-red-400/10 px-4 py-2 text-sm font-semibold text-red-100\">Sign out</button></section></div>\n</div>"
  },
  {
    "id": "20",
    "title": "Theme Preference Section",
    "group": "settings",
    "sourceRoute": "/settings#theme",
    "route": "/settings/theme",
    "template": "<div class=\"mx-auto max-w-3xl rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-5\">\n  <h3 class=\"text-2xl font-semibold text-white\">Choose theme</h3><p class=\"mt-1 text-sm text-slate-400\">Personalize how TaskBoard looks for you.</p>\n  <div class=\"mt-6 grid gap-4 md:grid-cols-3\"><button class=\"rounded-2xl border border-cyan-300/30 bg-cyan-300/10 p-4 text-left ring-2 ring-cyan-300/20\"><div class=\"h-24 rounded-xl bg-slate-950 ring-1 ring-white/10\"></div><p class=\"mt-3 font-semibold text-cyan-50\">Dark blueprint</p><p class=\"mt-1 text-xs text-cyan-200/70\">Selected</p></button><button class=\"rounded-2xl border border-white/10 bg-white/[.03] p-4 text-left\"><div class=\"h-24 rounded-xl bg-slate-200\"></div><p class=\"mt-3 font-semibold text-white\">Light clean</p><p class=\"mt-1 text-xs text-slate-500\">Available</p></button><button class=\"rounded-2xl border border-white/10 bg-white/[.03] p-4 text-left\"><div class=\"h-24 rounded-xl bg-gradient-to-br from-violet-700 to-slate-950\"></div><p class=\"mt-3 font-semibold text-white\">Violet night</p><p class=\"mt-1 text-xs text-slate-500\">Available</p></button></div>\n  <div class=\"mt-5 flex items-center justify-between rounded-xl border border-emerald-300/20 bg-emerald-400/10 p-3\"><p class=\"text-sm text-emerald-100\">Theme updated.</p><button class=\"rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950\">Apply theme</button></div>\n</div>"
  },
  {
    "id": "21",
    "title": "Change Password Screen / Dialog",
    "group": "settings",
    "sourceRoute": "/settings/password",
    "route": "/settings/password",
    "template": "<div class=\"mx-auto flex min-h-[380px] max-w-lg items-center justify-center\">\n  <form class=\"w-full rounded-[1.5rem] border border-white/10 bg-slate-950/90 p-5\"><h3 class=\"text-2xl font-semibold text-white\">Change password</h3><p class=\"mt-1 text-sm text-slate-400\">Use your current password to set a new one.</p><div class=\"mt-5 grid gap-4\"><label class=\"grid gap-1.5 text-sm text-slate-300\">Current password<input class=\"field\" type=\"password\" /></label><label class=\"grid gap-1.5 text-sm text-slate-300\">New password<input class=\"field\" type=\"password\" value=\"NewPass123\" /></label><label class=\"grid gap-1.5 text-sm text-slate-300\">Confirm new password<input class=\"field border-red-300/30 bg-red-400/5\" type=\"password\" value=\"NewPass124\" /></label><p class=\"text-xs text-red-100\">Passwords do not match.</p><p class=\"text-xs leading-5 text-slate-500\">Use 8–128 characters with uppercase, lowercase, and a number.</p></div><div class=\"mt-5 flex justify-end gap-3\"><button class=\"rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-300\">Cancel</button><button class=\"rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950\">Update password</button></div></form>\n</div>"
  },
  {
    "id": "22",
    "title": "Sign Out Confirmation",
    "group": "settings",
    "sourceRoute": "User menu modal",
    "route": "/signout",
    "template": "<div class=\"relative mx-auto min-h-[380px] max-w-3xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5\"><div class=\"grid gap-4 opacity-35 md:grid-cols-3\"><div class=\"h-72 rounded-2xl bg-white/[.04]\"></div><div class=\"h-72 rounded-2xl bg-white/[.04]\"></div><div class=\"h-72 rounded-2xl bg-white/[.04]\"></div></div><div class=\"absolute inset-0 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm\"><div class=\"w-full max-w-md rounded-[1.5rem] border border-white/10 bg-slate-950 p-5 shadow-2xl shadow-black/60\"><h3 class=\"text-xl font-semibold text-white\">Sign out?</h3><p class=\"mt-2 text-sm leading-6 text-slate-400\">You’ll need to sign in again to access your boards.</p><div class=\"mt-5 flex justify-end gap-3\"><button class=\"rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-300\">Cancel</button><button class=\"rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950\">Sign out</button></div></div></div></div>"
  },
  {
    "id": "23",
    "title": "Access Denied Screen",
    "group": "state",
    "sourceRoute": "Protected resource failure",
    "route": "/access-denied",
    "template": "<div class=\"mx-auto flex min-h-[380px] max-w-lg items-center justify-center\">\n  <div class=\"rounded-[1.7rem] border border-red-300/20 bg-slate-950/90 p-8 text-center\"><div class=\"mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-400/10 text-2xl text-red-200\">⛔</div><h3 class=\"mt-6 text-2xl font-semibold text-white\">Access denied</h3><p class=\"mt-2 text-sm leading-6 text-slate-400\">You don’t have permission to view this resource.</p><button class=\"mt-6 rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-950\">Go to your boards</button></div>\n</div>"
  },
  {
    "id": "24",
    "title": "Not Found Screen",
    "group": "state",
    "sourceRoute": "Unknown route or missing resource",
    "route": "/not-found",
    "template": "<div class=\"mx-auto flex min-h-[380px] max-w-lg items-center justify-center\">\n  <div class=\"rounded-[1.7rem] border border-white/10 bg-slate-950/90 p-8 text-center\"><p class=\"font-mono text-7xl font-semibold text-cyan-300/80\">404</p><h3 class=\"mt-4 text-2xl font-semibold text-white\">Page not found</h3><p class=\"mt-2 text-sm leading-6 text-slate-400\">This page may have been moved, deleted, or is no longer available.</p><div class=\"mt-6 flex justify-center gap-3\"><button class=\"rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-950\">Go to boards</button><button class=\"rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold text-slate-300\">Go back</button></div></div>\n</div>"
  },
  {
    "id": "25",
    "title": "General Error / Retry Screen",
    "group": "state",
    "sourceRoute": "Error boundary",
    "route": "/error",
    "template": "<div class=\"mx-auto flex min-h-[380px] max-w-xl items-center justify-center\">\n  <div class=\"rounded-[1.7rem] border border-amber-300/20 bg-slate-950/90 p-8\"><div class=\"flex gap-5\"><div class=\"flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-300/10 text-amber-100\">!</div><div><h3 class=\"text-2xl font-semibold text-white\">Something went wrong</h3><p class=\"mt-2 text-sm leading-6 text-slate-400\">We couldn’t complete this action. Please try again.</p><p class=\"mt-4 font-mono text-xs text-slate-500\">Reference ID: TB-9F42</p><div class=\"mt-6 flex gap-3\"><button class=\"rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-950\">Try again</button><button class=\"rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold text-slate-300\">Go to boards</button></div></div></div></div>\n</div>"
  },
  {
    "id": "26",
    "title": "Upload Failure State",
    "group": "state",
    "sourceRoute": "Inline upload state",
    "route": "/upload-failure",
    "template": "<div class=\"mx-auto flex min-h-[380px] max-w-2xl items-center justify-center\">\n  <div class=\"w-full rounded-[1.6rem] border border-red-300/20 bg-slate-950/90 p-6\"><div class=\"flex flex-col gap-5 sm:flex-row sm:items-start\"><div class=\"flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-400/10 text-red-200\">⇧</div><div class=\"flex-1\"><h3 class=\"text-2xl font-semibold text-white\">Upload failed</h3><p class=\"mt-2 text-sm leading-6 text-slate-400\">Choose a JPEG or PNG image up to 2 MB and try again.</p><div class=\"mt-5 rounded-2xl border border-white/10 bg-white/[.03] p-4\"><div class=\"flex items-center justify-between\"><div><p class=\"font-medium text-white\">design-system.sketch</p><p class=\"mt-1 text-xs text-red-100\">Unsupported file type</p></div><span class=\"rounded-full bg-red-400/10 px-2.5 py-1 text-xs text-red-100\">Rejected</span></div></div><div class=\"mt-5 flex flex-wrap gap-3\"><button class=\"rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-950\">Try again</button><button class=\"rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold text-slate-300\">Choose another image</button></div></div></div></div>\n</div>"
  },
  {
    "id": "27",
    "title": "Responsive Mobile Board Variant",
    "group": "responsive",
    "sourceRoute": "Same board route on small screens",
    "route": "/boards/mobile",
    "template": "<div class=\"mx-auto flex min-h-[430px] max-w-5xl justify-center gap-6\">\n  <div class=\"w-[310px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-2xl shadow-black/40\">\n    <div class=\"border-b border-white/10 p-4\"><div class=\"flex items-center justify-between\"><div class=\"inline-flex items-center gap-2\"><span class=\"relative flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 ring-1 ring-cyan-300/25\"><span class=\"absolute h-5 w-5 rounded-full bg-cyan-300 blur-md\"></span><svg class=\"relative h-5 w-5 text-cyan-200\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M4 7h16M4 12H8m-4 5h11\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/></svg></span><span class=\"font-semibold tracking-tight text-white\">Task<span class=\"text-cyan-300\">Board</span></span></div><button class=\"rounded-xl border border-white/10 px-2 py-1 text-xs text-slate-400\">☰</button></div><h3 class=\"mt-5 text-xl font-semibold text-white\">Portfolio Website</h3><div class=\"mt-4 flex gap-2 overflow-x-auto pb-1\"><button class=\"rounded-full bg-cyan-300 px-3 py-1.5 text-xs font-semibold text-slate-950\">In Progress</button><button class=\"rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-400\">Todo</button><button class=\"rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-400\">Done</button></div></div>\n    <div class=\"p-4\"><div class=\"flex items-center justify-between\"><h4 class=\"font-semibold text-cyan-50\">In Progress</h4><button class=\"rounded-full bg-cyan-300 px-3 py-1.5 text-xs font-semibold text-slate-950\">+ Task</button></div><div class=\"mt-4 grid gap-3\"><div class=\"task-card\"><p class=\"font-medium text-white\">Build mobile board view</p><p class=\"mt-2 text-xs text-slate-500\">2 comments · UI</p></div><div class=\"task-card\"><p class=\"font-medium text-white\">Move selector fallback</p><label class=\"mt-3 grid gap-1 text-xs text-slate-400\">Move to column<select class=\"field py-1.5 text-xs\"><option>Done</option><option>Todo</option></select></label></div></div></div>\n  </div>\n  <div class=\"hidden max-w-sm self-center rounded-[1.5rem] border border-white/10 bg-white/[.03] p-5 md:block\"><p class=\"text-xs uppercase tracking-[.24em] text-cyan-200\">Responsive rule</p><h4 class=\"mt-3 text-xl font-semibold text-white\">Drag is not the only path.</h4><p class=\"mt-2 text-sm leading-6 text-slate-400\">Mobile users get column tabs and a task move selector, so task movement remains usable without desktop-style drag-and-drop.</p></div>\n</div>"
  }
] as const satisfies readonly TaskboardScreen[];

export const screenById = Object.fromEntries(
  taskboardScreens.map((screen) => [screen.id, screen]),
) as Record<ScreenId, TaskboardScreen>;
