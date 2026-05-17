import {
  Alert,
  Badge,
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
import {
  mockAttachments,
  mockBoards,
  mockComments,
  mockLabels,
} from "../../infrastructure/mock-taskboard-data";

const board = mockBoards[0];
const activeTask = board.columns[1].tasks[0];

export function CreateTaskDrawer() {
  return (
    <Surface className="relative mx-auto min-h-[520px] max-w-5xl overflow-hidden" padding="sm" variant="panelSoft">
      <div className="grid gap-4 opacity-40 lg:grid-cols-4">
        {board.columns.map((column) => (
          <div className="rounded-2xl bg-white/[.04] p-3" key={column.id}>
            <div className="mb-3 h-4 w-24 rounded-full bg-white/10" />
            <div className="grid gap-2">
              {column.tasks.slice(0, 3).map((task) => (
                <div className="h-16 rounded-xl bg-slate-950/80" key={task.id} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <aside className="absolute bottom-0 right-0 top-0 w-full max-w-md overflow-y-auto border-l border-white/10 bg-slate-950 p-5 shadow-2xl shadow-black/70">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[.22em] text-cyan-200">Todo column</p>
            <h3 className="mt-2 text-xl font-semibold text-white">Create task</h3>
          </div>
          <Button variant="subtle" size="none" className="rounded-xl px-3 py-1">x</Button>
        </div>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Title and description are both required before a card can be added.
        </p>

        <div className="mt-5 grid gap-4">
          <FieldLabel>
            Task title
            <TextInput placeholder="Example: Implement sign-in form" />
          </FieldLabel>
          <FieldLabel>
            Description
            <TextArea className="min-h-24" placeholder="Describe what needs to be done." />
          </FieldLabel>
          <div>
            <p className="text-sm text-slate-300">App-default labels</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {Object.values(mockLabels).map((label) => (
                <Tag key={label.id} variant={label.tone}>{label.name}</Tag>
              ))}
            </div>
            <p className="mt-2 text-xs text-slate-500">Labels are optional and not custom per board.</p>
          </div>
          <Alert variant="warning">Duplicate task title in this board would return DUPLICATE_TASK_TITLE.</Alert>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <Button variant="secondary" size="sm">Cancel</Button>
          <Button variant="primary" size="sm">Create task</Button>
        </div>
      </aside>
    </Surface>
  );
}

export function TaskDetailScreen() {
  return (
    <Surface>
      <div className="grid gap-5 lg:grid-cols-[1fr_310px]">
        <main>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[.24em] text-cyan-200">Task details</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">{activeTask.title}</h3>
              <p className="mt-1 text-sm text-slate-500">Created May 17, 2026. Created date stays stable on edit.</p>
            </div>
            <Button variant="subtle" size="xs">Close</Button>
          </div>

          <div className="mt-5 grid gap-4">
            <FieldLabel>
              Title
              <TextInput className="text-lg font-semibold" defaultValue={activeTask.title} />
            </FieldLabel>
            <FieldLabel>
              Description
              <TextArea className="min-h-32" defaultValue={activeTask.description} />
            </FieldLabel>
            <div>
              <p className="text-sm text-slate-300">Labels</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {activeTask.labels.map((label) => (
                  <Tag key={label.id} variant={label.tone}>{label.name}</Tag>
                ))}
                <Button variant="dashed" size="none" className="px-2.5 py-1 text-xs">+ Label</Button>
              </div>
            </div>
          </div>

          <Alert className="mt-5" variant="warning">
            Save failed. Your unsaved title, description, and labels remain here so you can retry.
          </Alert>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <Surface padding="sm" variant="muted">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-white">Comments</p>
                <Badge>{mockComments.length}</Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">{mockComments[0].content}</p>
            </Surface>
            <Surface padding="sm" variant="muted">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-white">Attachments</p>
                <Badge>{mockAttachments.length}</Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                PNG and JPEG only. Max size is 2 MB per image.
              </p>
            </Surface>
          </div>
        </main>

        <Surface as="aside" padding="sm" variant="muted">
          <p className="text-sm font-semibold text-white">Properties</p>
          <div className="mt-4 grid gap-3 text-sm">
            <FieldLabel>
              Current column
              <SelectInput defaultValue="in-progress">
                {board.columns.map((column) => (
                  <option key={column.id} value={column.id}>{column.name}</option>
                ))}
              </SelectInput>
            </FieldLabel>
            <FieldLabel>
              Move to position
              <SelectInput defaultValue="0">
                <option value="0">Top of column</option>
                <option value="1">After Move selector fallback</option>
              </SelectInput>
            </FieldLabel>
            <Alert variant="muted">Movement is one operation: source column, destination column, and index.</Alert>
            <Button variant="primary" size="sm">Save changes</Button>
            <Button variant="danger" size="sm">Delete task</Button>
          </div>
        </Surface>
      </div>
    </Surface>
  );
}

export function DeleteTaskConfirmation() {
  return (
    <PreviewModalFrame>
      <Surface variant="dialogDanger">
        <IconFrame variant="red">!</IconFrame>
        <h3 className="mt-4 text-xl font-semibold text-white">Delete task?</h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          This permanently removes the task plus its comments and attachments from user access.
        </p>
        <Surface className="mt-4" padding="sm" variant="muted">
          <p className="font-medium text-white">{activeTask.title}</p>
          <p className="mt-1 text-xs text-slate-500">
            {activeTask.comments} comments, {activeTask.attachments} attachment
          </p>
        </Surface>
        <div className="mt-5 flex justify-end gap-3">
          <Button variant="secondary" size="sm">Cancel</Button>
          <Button variant="dangerSolid" size="sm">Delete task</Button>
        </div>
      </Surface>
    </PreviewModalFrame>
  );
}

export function CommentsArea() {
  return (
    <Surface className="mx-auto max-w-3xl">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-white">Comments</h3>
          <p className="mt-1 text-sm text-slate-400">Personal task notes ordered newest first.</p>
        </div>
        <Badge>{mockComments.length}</Badge>
      </div>

      <div className="mt-5 grid gap-3">
        {mockComments.map((comment, index) => (
          <Surface padding="sm" variant={index === 0 ? "accentSoft" : "muted"} key={comment.id}>
            <div className="flex justify-between gap-4">
              <p className="font-medium text-white">{comment.author}</p>
              <p className="text-xs text-slate-500">{comment.time}</p>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-400">{comment.content}</p>
            <div className="mt-3 flex gap-3 text-xs">
              <Button variant="textAccent" size="none">Edit</Button>
              <Button variant="textDanger" size="none">Delete</Button>
            </div>
          </Surface>
        ))}
      </div>

      <Surface className="mt-5" padding="sm" variant="accentSoft">
        <FieldLabel className="gap-2">
          Add a comment
          <TextArea className="min-h-20 border-red-300/30 bg-red-400/5" placeholder="Add a note about this task." />
        </FieldLabel>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-red-100">Comment cannot be empty.</p>
          <Button variant="primary" size="sm">Add comment</Button>
        </div>
      </Surface>
    </Surface>
  );
}

export function AttachmentsArea() {
  return (
    <Surface className="mx-auto max-w-4xl">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-white">Attachments</h3>
          <p className="mt-1 text-sm text-slate-400">Task images only: JPEG or PNG, up to 2 MB.</p>
        </div>
        <Button variant="primary" size="sm">Upload image</Button>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-[260px_1fr]">
        <Surface className="text-center" padding="lg" variant="dashedAccent">
          <IconFrame className="mx-auto" variant="cyan">+</IconFrame>
          <p className="mt-4 font-medium text-white">Drop image here</p>
          <p className="mt-1 text-xs leading-5 text-slate-500">
            PDF, SVG, GIF, WebP, and files over 2 MB are rejected.
          </p>
        </Surface>

        <div className="grid gap-3">
          {mockAttachments.map((attachment, index) => (
            <Surface padding="xs" variant="muted" key={attachment.id}>
              <div className="grid gap-3 sm:grid-cols-[120px_1fr_auto] sm:items-center">
                <div className="h-24 rounded-xl border border-white/10 bg-gradient-to-br from-cyan-300/20 via-slate-900 to-violet-500/20" />
                <div>
                  <p className="text-sm font-medium text-white">{attachment.name}</p>
                  <p className="mt-1 text-xs text-slate-500">
                    {attachment.size} . {attachment.type} . {attachment.uploadedAt}
                  </p>
                  {index === 0 ? (
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/[.06]">
                      <div className="h-full w-3/4 rounded-full bg-cyan-300" />
                    </div>
                  ) : null}
                </div>
                <Button variant="danger" size="xs">Delete</Button>
              </div>
            </Surface>
          ))}
        </div>
      </div>

      <Alert className="mt-4" variant="danger">
        design-system.sketch was rejected. Only JPEG and PNG images are allowed.
      </Alert>
    </Surface>
  );
}
