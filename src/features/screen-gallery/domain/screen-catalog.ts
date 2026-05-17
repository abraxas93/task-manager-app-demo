import type { ScreenId, TaskboardScreen } from "./screen";

export interface ScreenCatalog {
  getById(id: ScreenId): TaskboardScreen | undefined;
  list(): readonly TaskboardScreen[];
}
