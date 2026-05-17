import { makeGetScreenPage } from "@/core/di/screen-gallery";
import { ScreenTemplate, type ScreenId } from "@/features/screen-gallery";

const getScreenPage = makeGetScreenPage();

export function renderScreenPage(screenId: ScreenId) {
  return <ScreenTemplate screenPage={getScreenPage.execute(screenId)} />;
}
