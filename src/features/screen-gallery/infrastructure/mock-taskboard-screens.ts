import type { TaskboardScreen } from "../domain/screen";
import type { ScreenCatalog } from "../domain/screen-catalog";

export const taskboardScreens = [
  {
    id: "01",
    title: "Public Welcome Screen",
    group: "public",
    sourceRoute: "/",
    route: "/",
  },
  {
    id: "02",
    title: "Sign Up Screen",
    group: "auth",
    sourceRoute: "/signup",
    route: "/signup",
  },
  {
    id: "03",
    title: "Sign In Screen",
    group: "auth",
    sourceRoute: "/signin",
    route: "/signin",
  },
  {
    id: "04",
    title: "Session Loading / Protected Route Gate",
    group: "auth",
    sourceRoute: "Protected routes",
    route: "/session-loading",
  },
  {
    id: "05",
    title: "Boards Dashboard Screen",
    group: "board",
    sourceRoute: "/boards",
    route: "/boards",
  },
  {
    id: "06",
    title: "Create Board Dialog",
    group: "board",
    sourceRoute: "Modal from /boards",
    route: "/boards/create",
  },
  {
    id: "07",
    title: "Rename Board Dialog",
    group: "board",
    sourceRoute: "Modal from board/dashboard",
    route: "/boards/rename",
  },
  {
    id: "08",
    title: "Empty Board Screen",
    group: "board",
    sourceRoute: "/boards/:boardId",
    route: "/boards/empty",
  },
  {
    id: "09",
    title: "Kanban Board Screen",
    group: "board",
    sourceRoute: "/boards/:boardId",
    route: "/boards/[boardId]",
  },
  {
    id: "10",
    title: "Create Column Dialog",
    group: "board",
    sourceRoute: "Modal from board screen",
    route: "/boards/[boardId]/columns/create",
  },
  {
    id: "11",
    title: "Rename Column Dialog",
    group: "board",
    sourceRoute: "Modal from column menu",
    route: "/boards/[boardId]/columns/rename",
  },
  {
    id: "12",
    title: "Delete Column Confirmation",
    group: "board",
    sourceRoute: "Column menu confirmation",
    route: "/boards/[boardId]/columns/delete",
  },
  {
    id: "13",
    title: "Create Task Dialog / Drawer",
    group: "task",
    sourceRoute: "Drawer from column",
    route: "/boards/[boardId]/tasks/create",
  },
  {
    id: "14",
    title: "Task Detail / Edit Screen",
    group: "task",
    sourceRoute: "/boards/:boardId/tasks/:taskId",
    route: "/boards/[boardId]/tasks/[taskId]",
  },
  {
    id: "15",
    title: "Delete Task Confirmation",
    group: "task",
    sourceRoute: "Dialog from task detail",
    route: "/boards/[boardId]/tasks/[taskId]/delete",
  },
  {
    id: "16",
    title: "Comments Area",
    group: "task",
    sourceRoute: "Section inside task detail",
    route: "/boards/[boardId]/tasks/[taskId]/comments",
  },
  {
    id: "17",
    title: "Task Attachments Area / Preview",
    group: "task",
    sourceRoute: "Section inside task detail",
    route: "/boards/[boardId]/tasks/[taskId]/attachments",
  },
  {
    id: "18",
    title: "Profile Screen",
    group: "settings",
    sourceRoute: "/profile",
    route: "/profile",
  },
  {
    id: "19",
    title: "Settings Screen",
    group: "settings",
    sourceRoute: "/settings",
    route: "/settings",
  },
  {
    id: "20",
    title: "Theme Preference Section",
    group: "settings",
    sourceRoute: "/settings#theme",
    route: "/settings/theme",
  },
  {
    id: "21",
    title: "Change Password Screen / Dialog",
    group: "settings",
    sourceRoute: "/settings/password",
    route: "/settings/password",
  },
  {
    id: "22",
    title: "Sign Out Confirmation",
    group: "settings",
    sourceRoute: "User menu modal",
    route: "/signout",
  },
  {
    id: "23",
    title: "Access Denied Screen",
    group: "state",
    sourceRoute: "Protected resource failure",
    route: "/access-denied",
  },
  {
    id: "24",
    title: "Not Found Screen",
    group: "state",
    sourceRoute: "Unknown route or missing resource",
    route: "/not-found",
  },
  {
    id: "25",
    title: "General Error / Retry Screen",
    group: "state",
    sourceRoute: "Error boundary",
    route: "/error",
  },
  {
    id: "26",
    title: "Upload Failure State",
    group: "state",
    sourceRoute: "Inline upload state",
    route: "/upload-failure",
  },
  {
    id: "27",
    title: "Responsive Mobile Board Variant",
    group: "responsive",
    sourceRoute: "Same board route on small screens",
    route: "/boards/mobile",
  },
] as const satisfies readonly TaskboardScreen[];

const screenById = Object.fromEntries(
  taskboardScreens.map((screen) => [screen.id, screen]),
) as Record<TaskboardScreen["id"], TaskboardScreen>;

export class MockScreenCatalog implements ScreenCatalog {
  getById(id: TaskboardScreen["id"]) {
    return screenById[id];
  }

  list() {
    return taskboardScreens;
  }
}
