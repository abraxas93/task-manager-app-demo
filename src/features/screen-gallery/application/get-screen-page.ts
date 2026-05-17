import type { ScreenCatalog } from "../domain/screen-catalog";
import type { ScreenId, ScreenPage, TaskboardScreen } from "../domain/screen";

const demoRouteParams = {
  boardId: "portfolio",
  taskId: "launch-checklist",
};

export class GetScreenPage {
  constructor(private readonly screenCatalog: ScreenCatalog) {}

  execute(screenId: ScreenId): ScreenPage {
    const screens = this.screenCatalog.list();
    const screen =
      this.screenCatalog.getById(screenId) ?? createMissingScreenStub(screenId);
    const currentIndex = screens.findIndex((item) => item.id === screenId);
    const previous = currentIndex > 0 ? screens[currentIndex - 1] : null;
    const next =
      currentIndex >= 0 && currentIndex < screens.length - 1
        ? screens[currentIndex + 1]
        : null;

    return {
      screen,
      previousHref: previous ? toDemoHref(previous.route) : null,
      nextHref: next ? toDemoHref(next.route) : null,
    };
  }
}

function toDemoHref(route: string) {
  return route
    .replace("[boardId]", demoRouteParams.boardId)
    .replace("[taskId]", demoRouteParams.taskId);
}

function createMissingScreenStub(screenId: ScreenId): TaskboardScreen {
  return {
    id: screenId,
    title: "Missing Screen Stub",
    group: "state",
    sourceRoute: "Mock fallback",
    route: "/",
  };
}
