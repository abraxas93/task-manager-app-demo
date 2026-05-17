import type { ReactNode } from "react";
import type { ScreenId } from "../domain/screen";
import { PublicWelcomeScreen } from "./screens/public";
import { SessionLoadingScreen, SignInScreen, SignUpScreen } from "./screens/auth";
import {
  BoardsDashboardScreen,
  CreateBoardDialog,
  CreateColumnDialog,
  DeleteColumnConfirmation,
  EmptyBoardScreen,
  KanbanBoardScreen,
  RenameBoardDialog,
  RenameColumnDialog,
} from "./screens/board";
import {
  AttachmentsArea,
  CommentsArea,
  CreateTaskDrawer,
  DeleteTaskConfirmation,
  TaskDetailScreen,
} from "./screens/task";
import {
  ChangePasswordScreen,
  ProfileScreen,
  SettingsScreen,
  SignOutConfirmation,
  ThemePreferenceScreen,
} from "./screens/settings";
import {
  AccessDeniedScreen,
  GeneralErrorScreen,
  NotFoundScreen,
  UploadFailureScreen,
} from "./screens/state";
import { MobileBoardScreen } from "./screens/responsive";

type ScreenRenderer = () => ReactNode;

export const screenRenderers = {
  "01": PublicWelcomeScreen,
  "02": SignUpScreen,
  "03": SignInScreen,
  "04": SessionLoadingScreen,
  "05": BoardsDashboardScreen,
  "06": CreateBoardDialog,
  "07": RenameBoardDialog,
  "08": EmptyBoardScreen,
  "09": KanbanBoardScreen,
  "10": CreateColumnDialog,
  "11": RenameColumnDialog,
  "12": DeleteColumnConfirmation,
  "13": CreateTaskDrawer,
  "14": TaskDetailScreen,
  "15": DeleteTaskConfirmation,
  "16": CommentsArea,
  "17": AttachmentsArea,
  "18": ProfileScreen,
  "19": SettingsScreen,
  "20": ThemePreferenceScreen,
  "21": ChangePasswordScreen,
  "22": SignOutConfirmation,
  "23": AccessDeniedScreen,
  "24": NotFoundScreen,
  "25": GeneralErrorScreen,
  "26": UploadFailureScreen,
  "27": MobileBoardScreen,
} satisfies Partial<Record<ScreenId, ScreenRenderer>>;
