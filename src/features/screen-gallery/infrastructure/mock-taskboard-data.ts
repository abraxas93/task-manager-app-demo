export type MockLabel = {
  id: string;
  name: string;
  tone: "cyan" | "violet" | "amber";
};

export type MockTask = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  labels: MockLabel[];
  comments: number;
  attachments: number;
};

export type MockColumn = {
  id: string;
  name: string;
  tasks: MockTask[];
};

export type MockBoard = {
  id: string;
  name: string;
  updatedAt: string;
  columns: MockColumn[];
};

export const mockLabels: Record<string, MockLabel> = {
  ui: { id: "label-ui", name: "UI", tone: "cyan" },
  api: { id: "label-api", name: "API", tone: "amber" },
  auth: { id: "label-auth", name: "Auth", tone: "violet" },
  boardUx: { id: "label-board-ux", name: "Board UX", tone: "cyan" },
  polish: { id: "label-polish", name: "Polish", tone: "violet" },
};

export const mockBoards: MockBoard[] = [
  {
    id: "portfolio",
    name: "Portfolio Website",
    updatedAt: "Today, 15:42",
    columns: [
      {
        id: "todo",
        name: "Todo",
        tasks: [
          {
            id: "signup-flow",
            title: "Create sign-up screen",
            description: "Collect email, names, and a valid password before entering the workspace.",
            createdAt: "2026-05-17T09:20:00.000Z",
            labels: [mockLabels.ui, mockLabels.auth],
            comments: 2,
            attachments: 0,
          },
          {
            id: "empty-board",
            title: "Prepare empty board state",
            description: "Show that new boards start without default workflow columns.",
            createdAt: "2026-05-17T10:05:00.000Z",
            labels: [mockLabels.boardUx],
            comments: 0,
            attachments: 0,
          },
          {
            id: "upload-copy",
            title: "Clarify upload constraints",
            description: "Make JPEG/PNG and 2 MB limits visible near avatar and attachment actions.",
            createdAt: "2026-05-17T11:15:00.000Z",
            labels: [mockLabels.polish],
            comments: 1,
            attachments: 1,
          },
        ],
      },
      {
        id: "in-progress",
        name: "In Progress",
        tasks: [
          {
            id: "drag-persistence",
            title: "Build drag-and-drop persistence",
            description:
              "Persist task order after moving cards between columns and roll back when saving fails.",
            createdAt: "2026-05-17T12:30:00.000Z",
            labels: [mockLabels.api, mockLabels.boardUx],
            comments: 4,
            attachments: 1,
          },
          {
            id: "mobile-selector",
            title: "Move selector fallback",
            description: "Let mobile users move a task without relying on desktop dragging.",
            createdAt: "2026-05-17T13:10:00.000Z",
            labels: [mockLabels.ui],
            comments: 2,
            attachments: 0,
          },
        ],
      },
      {
        id: "review",
        name: "Review",
        tasks: [
          {
            id: "settings-pass",
            title: "Password settings validation",
            description: "Require current password and enforce the MVP password policy.",
            createdAt: "2026-05-17T14:05:00.000Z",
            labels: [mockLabels.auth],
            comments: 1,
            attachments: 0,
          },
        ],
      },
      {
        id: "done",
        name: "Done",
        tasks: [
          {
            id: "label-catalog",
            title: "App-default label catalog",
            description: "Use fixed label choices rather than custom board labels for MVP.",
            createdAt: "2026-05-17T08:00:00.000Z",
            labels: [mockLabels.api],
            comments: 0,
            attachments: 0,
          },
          {
            id: "private-board-copy",
            title: "Private board messaging",
            description: "Keep the app framed as single-user/private while leaving room for future teams.",
            createdAt: "2026-05-16T16:25:00.000Z",
            labels: [mockLabels.polish],
            comments: 3,
            attachments: 0,
          },
        ],
      },
    ],
  },
  {
    id: "learning",
    name: "Learning Plan",
    updatedAt: "Yesterday, 18:10",
    columns: [
      { id: "queue", name: "Queue", tasks: [] },
      { id: "reading", name: "Reading", tasks: [] },
      { id: "notes", name: "Notes", tasks: [] },
    ],
  },
  {
    id: "launch",
    name: "Product Launch",
    updatedAt: "May 15, 2026",
    columns: [],
  },
];

export const mockCurrentUser = {
  firstName: "Alex",
  lastName: "Morgan",
  email: "alex@example.com",
  initials: "AM",
  theme: "Dark blueprint",
};

export const mockComments = [
  {
    id: "comment-1",
    author: "Alex Morgan",
    time: "Today 14:20",
    content: "Rollback works locally, but we still need the API error message and correlation ID.",
  },
  {
    id: "comment-2",
    author: "Alex Morgan",
    time: "Today 13:05",
    content: "Added the mobile move selector so task movement is not drag-only.",
  },
  {
    id: "comment-3",
    author: "Alex Morgan",
    time: "Yesterday",
    content: "Keep the task description required in create and edit forms.",
  },
];

export const mockAttachments = [
  {
    id: "attachment-1",
    name: "wireframe.png",
    size: "612 KB",
    type: "image/png",
    uploadedAt: "Today 12:44",
  },
  {
    id: "attachment-2",
    name: "board-empty-state.jpg",
    size: "1.4 MB",
    type: "image/jpeg",
    uploadedAt: "Yesterday",
  },
];

export function getTaskCount(board: MockBoard) {
  return board.columns.reduce((sum, column) => sum + column.tasks.length, 0);
}
