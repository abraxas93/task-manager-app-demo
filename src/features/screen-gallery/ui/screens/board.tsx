import {
  Alert,
  Badge,
  BrandMark,
  Button,
  FieldLabel,
  IconFrame,
  PreviewModalFrame,
  Surface,
  Tag,
  TextInput,
} from "@/shared/ui";
import {
  getTaskCount,
  mockBoards,
  type MockTask,
} from "../../infrastructure/mock-taskboard-data";

const primaryBoard = mockBoards[0];

export function BoardsDashboardScreen() {
  return (
    <Surface>
      <div className="flex flex-col gap-4 border-b border-white/10 pb-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <BrandMark />
          <h3 className="mt-6 text-3xl font-semibold tracking-tight text-white">
            Your private boards
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            Manage separate Kanban workflows without collaboration, due dates, assignments, or
            enterprise overhead in the MVP.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="secondary" size="sm">Import later</Button>
          <Button variant="primary" size="sm">Create board</Button>
        </div>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_280px]">
        <div className="grid gap-4 md:grid-cols-2">
          {mockBoards.map((board, index) => (
            <Surface
              className="card-glow"
              key={board.id}
              padding="sm"
              variant={index === 0 ? "accent" : "muted"}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-white">{board.name}</p>
                  <p className="mt-1 text-xs text-slate-500">Updated {board.updatedAt}</p>
                </div>
                <Badge variant={board.columns.length > 0 ? "cyan" : "neutral"}>
                  {board.columns.length} columns
                </Badge>
              </div>
              <div className="mt-4 grid grid-cols-4 gap-1">
                {board.columns.length > 0 ? (
                  board.columns.map((column) => (
                    <div className="rounded-lg bg-slate-950/70 p-2" key={column.id}>
                      <p className="truncate text-[11px] font-semibold text-slate-300">
                        {column.name}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">{column.tasks.length}</p>
                    </div>
                  ))
                ) : (
                  <div className="col-span-4 rounded-lg border border-dashed border-cyan-300/30 bg-cyan-300/5 p-3 text-xs text-cyan-100">
                    Empty by design. Add columns when you open it.
                  </div>
                )}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-xs text-slate-500">{getTaskCount(board)} tasks total</p>
                <Button variant="textAccent" size="none" className="text-xs font-semibold">
                  Open board
                </Button>
              </div>
            </Surface>
          ))}
        </div>

        <Surface as="aside" padding="sm" variant="muted">
          <p className="text-xs font-semibold uppercase tracking-[.22em] text-cyan-200">
            MVP boundary
          </p>
          <div className="mt-4 grid gap-3 text-sm text-slate-400">
            <p>Boards are owner-scoped and private.</p>
            <p>Board deletion is intentionally absent from the MVP contract.</p>
            <p>Names are trimmed and unique without case sensitivity.</p>
          </div>
        </Surface>
      </div>
    </Surface>
  );
}

export function CreateBoardDialog() {
  return (
    <PreviewModalFrame>
      <Surface as="form" variant="dialog">
        <h3 className="text-xl font-semibold text-white">Create board</h3>
        <p className="mt-1 text-sm leading-6 text-slate-400">
          New boards start empty. You will add workflow columns after creation.
        </p>
        <FieldLabel className="mt-5">
          Board name
          <TextInput placeholder="Example: Portfolio Website" />
        </FieldLabel>
        <Alert className="mt-4" variant="warning">
          Whitespace-only names and duplicate names such as &quot;portfolio website&quot; are rejected.
        </Alert>
        <div className="mt-5 flex justify-end gap-3">
          <Button variant="secondary" size="sm">Cancel</Button>
          <Button variant="primary" size="sm">Create board</Button>
        </div>
      </Surface>
    </PreviewModalFrame>
  );
}

export function RenameBoardDialog() {
  return (
    <PreviewModalFrame>
      <Surface as="form" variant="dialog">
        <h3 className="text-xl font-semibold text-white">Rename board</h3>
        <p className="mt-1 text-sm leading-6 text-slate-400">
          Rename follows the same validation as board creation.
        </p>
        <FieldLabel className="mt-5">
          Board name
          <TextInput
            className="border-amber-300/30 bg-amber-300/5"
            defaultValue="portfolio website"
          />
        </FieldLabel>
        <p className="mt-2 text-xs text-amber-100">
          A board named &quot;Portfolio Website&quot; already exists.
        </p>
        <div className="mt-5 flex justify-end gap-3">
          <Button variant="secondary" size="sm">Cancel</Button>
          <Button variant="primary" size="sm">Save name</Button>
        </div>
      </Surface>
    </PreviewModalFrame>
  );
}

export function EmptyBoardScreen() {
  return (
    <Surface>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <BrandMark />
          <p className="mt-5 text-xs uppercase tracking-[.24em] text-slate-500">Board</p>
          <h3 className="mt-2 text-3xl font-semibold text-white">Product Launch</h3>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
            This board was just created and correctly has no default columns.
          </p>
        </div>
        <Button variant="secondary" size="sm">Rename board</Button>
      </div>

      <Surface className="mt-8 text-center" padding="empty" variant="dashedAccent">
        <IconFrame className="mx-auto" size="lg" variant="cyan">+</IconFrame>
        <h4 className="mt-5 text-xl font-semibold text-white">Build your first workflow.</h4>
        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-400">
          Add columns such as Queue, In Progress, Review, or Done. Column names are yours,
          not hard-coded statuses.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button variant="primary" size="lg">Add first column</Button>
          <Button variant="secondary" size="lg">Back to boards</Button>
        </div>
      </Surface>
    </Surface>
  );
}

export function KanbanBoardScreen() {
  return (
    <Surface padding="sm">
      <div className="flex flex-col gap-4 border-b border-white/10 pb-4 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <BrandMark />
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <h3 className="text-3xl font-semibold tracking-tight text-white">
              {primaryBoard.name}
            </h3>
            <Badge variant="emerald">{getTaskCount(primaryBoard)} tasks</Badge>
          </div>
          <p className="mt-2 text-sm text-slate-400">
            Ordered columns and cards. A failed move rolls the card back to its saved position.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="secondary" size="xsTall">Rename board</Button>
          <Button variant="secondary" size="xsTall">Reorder columns</Button>
          <Button variant="primary" size="xsTall">Add column</Button>
        </div>
      </div>

      <Alert className="mt-4" variant="warning">
        Could not save &quot;Build drag-and-drop persistence&quot;. It was restored to In Progress.
      </Alert>

      <div className="mt-5 grid gap-4 xl:grid-cols-4">
        {primaryBoard.columns.map((column, index) => (
          <Surface
            as="section"
            key={column.id}
            padding="xs"
            variant={index === 1 ? "accentSoft" : "muted"}
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <h4 className="font-semibold text-white">{column.name}</h4>
                <p className="mt-1 text-xs text-slate-500">Position {index + 1}</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={index === 1 ? "cyan" : "neutral"}>{column.tasks.length}</Badge>
                <Button variant="subtle" size="none" className="rounded-xl px-2 py-1 text-xs">
                  ...
                </Button>
              </div>
            </div>
            <Button
              variant="subtle"
              size="none"
              className="mt-3 w-full rounded-xl border border-dashed border-white/15 py-2 text-xs"
            >
              + Add task
            </Button>
            <div className="mt-3 grid gap-3">
              {column.tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
              {column.tasks.length === 0 ? (
                <div className="rounded-xl border border-dashed border-white/10 p-5 text-center text-xs text-slate-500">
                  No tasks in this column.
                </div>
              ) : null}
            </div>
          </Surface>
        ))}
      </div>
    </Surface>
  );
}

export function CreateColumnDialog() {
  return (
    <PreviewModalFrame>
      <Surface as="form" variant="dialog">
        <h3 className="text-xl font-semibold text-white">Add column</h3>
        <p className="mt-1 text-sm text-slate-400">
          The new column appears at the end of the board.
        </p>
        <FieldLabel className="mt-5">
          Column name
          <TextInput placeholder="Example: Review" />
        </FieldLabel>
        <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500">
          <span>Existing:</span>
          {primaryBoard.columns.map((column) => (
            <span className="rounded-full bg-white/[.04] px-2 py-1" key={column.id}>
              {column.name}
            </span>
          ))}
        </div>
        <div className="mt-5 flex justify-end gap-3">
          <Button variant="secondary" size="sm">Cancel</Button>
          <Button variant="primary" size="sm">Add column</Button>
        </div>
      </Surface>
    </PreviewModalFrame>
  );
}

export function RenameColumnDialog() {
  return (
    <PreviewModalFrame>
      <Surface as="form" variant="dialog">
        <h3 className="text-xl font-semibold text-white">Rename column</h3>
        <p className="mt-1 text-sm text-slate-400">
          Column names are unique within a board after trim and case normalization.
        </p>
        <FieldLabel className="mt-5">
          Column name
          <TextInput className="border-red-300/30 bg-red-400/5" defaultValue="todo" />
        </FieldLabel>
        <p className="mt-2 text-xs text-red-100">This board already has a column named &quot;Todo&quot;.</p>
        <div className="mt-5 flex justify-end gap-3">
          <Button variant="secondary" size="sm">Cancel</Button>
          <Button variant="primary" size="sm">Save name</Button>
        </div>
      </Surface>
    </PreviewModalFrame>
  );
}

export function DeleteColumnConfirmation() {
  return (
    <PreviewModalFrame>
      <Surface variant="dialogDanger">
        <IconFrame variant="red">!</IconFrame>
        <h3 className="mt-4 text-xl font-semibold text-white">Column is not empty</h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          In Progress contains 2 tasks. Move them elsewhere before deleting this column.
        </p>
        <Surface className="mt-4" padding="sm" variant="muted">
          <p className="text-sm font-semibold text-white">Blocked by</p>
          <p className="mt-2 text-sm text-slate-400">Build drag-and-drop persistence</p>
          <p className="mt-1 text-sm text-slate-400">Move selector fallback</p>
        </Surface>
        <div className="mt-5 flex justify-end gap-3">
          <Button variant="secondary" size="sm">Move tasks first</Button>
          <Button variant="primary" size="sm">Got it</Button>
        </div>
      </Surface>
    </PreviewModalFrame>
  );
}

function TaskCard({ task }: { task: MockTask }) {
  return (
    <Surface padding="xs" variant="task">
      <div className="flex items-start justify-between gap-3">
        <p className="font-medium leading-5 text-white">{task.title}</p>
        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
      </div>
      <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500">{task.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {task.labels.map((label) => (
          <Tag key={label.id} variant={label.tone}>{label.name}</Tag>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-3 text-xs text-slate-500">
        <span>Created May 17</span>
        <span>{task.comments} comments</span>
        <span>{task.attachments} files</span>
      </div>
    </Surface>
  );
}
