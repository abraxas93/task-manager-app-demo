import { GetScreenPage } from "@/features/screen-gallery/application/get-screen-page";
import { MockScreenCatalog } from "@/features/screen-gallery/infrastructure/mock-taskboard-screens";

export function makeGetScreenPage() {
  return new GetScreenPage(new MockScreenCatalog());
}
