import {
  Alert,
  Badge,
  Button,
  FieldLabel,
  IconFrame,
  PreviewModalFrame,
  Surface,
  TextInput,
} from "@/shared/ui";
import { mockCurrentUser } from "../../infrastructure/mock-taskboard-data";

export function ProfileScreen() {
  return (
    <Surface className="mx-auto max-w-4xl">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-3xl font-semibold tracking-tight text-white">Profile</h3>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            Update display information and avatar metadata for the signed-in user.
          </p>
        </div>
        <Badge variant="emerald">Saved</Badge>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-[240px_1fr]">
        <Surface className="text-center" variant="muted">
          <IconFrame className="mx-auto font-semibold" size="xl" variant="gradient">
            {mockCurrentUser.initials}
          </IconFrame>
          <Button variant="secondary" size="sm" className="mt-4">Upload avatar</Button>
          <p className="mt-3 text-xs leading-5 text-slate-500">
            JPEG or PNG only, up to 2 MB. Failed uploads keep the existing avatar.
          </p>
        </Surface>

        <form className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <FieldLabel>
              First name
              <TextInput defaultValue={mockCurrentUser.firstName} />
            </FieldLabel>
            <FieldLabel>
              Last name
              <TextInput defaultValue={mockCurrentUser.lastName} />
            </FieldLabel>
          </div>
          <FieldLabel>
            Email
            <TextInput defaultValue={mockCurrentUser.email} readOnly />
          </FieldLabel>
          <Alert variant="success">Profile updated. Safe profile data is returned without password data.</Alert>
          <Alert variant="danger">avatar.svg was rejected because SVG uploads are outside the MVP file policy.</Alert>
          <Button variant="primary" size="lg" className="justify-self-start">Save profile</Button>
        </form>
      </div>
    </Surface>
  );
}

export function SettingsScreen() {
  return (
    <Surface className="mx-auto max-w-4xl">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-3xl font-semibold tracking-tight text-white">Settings</h3>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            Account security and app preferences for {mockCurrentUser.email}.
          </p>
        </div>
        <Button variant="danger" size="sm">Sign out</Button>
      </div>

      <div className="mt-6 grid gap-4">
        <Surface as="section" padding="sm" variant="accentSoft">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold text-white">Theme</p>
              <p className="mt-1 text-sm text-slate-500">
                Current preference: {mockCurrentUser.theme}
              </p>
            </div>
            <Button variant="primary" size="sm">Choose theme</Button>
          </div>
        </Surface>

        <Surface as="section" padding="sm" variant="muted">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold text-white">Password</p>
              <p className="mt-1 text-sm text-slate-500">
                Change requires current password and a valid new password.
              </p>
            </div>
            <Button variant="secondary" size="sm">Change password</Button>
          </div>
        </Surface>

        <Surface as="section" padding="sm" variant="muted">
          <p className="font-semibold text-white">Scope controls</p>
          <div className="mt-3 grid gap-3 text-sm text-slate-400 sm:grid-cols-3">
            <p>No teams or invites in MVP.</p>
            <p>No assignments, due dates, analytics, or notifications.</p>
            <p>All protected data is owner-scoped.</p>
          </div>
        </Surface>
      </div>
    </Surface>
  );
}

export function ThemePreferenceScreen() {
  const themes = [
    {
      id: "dark-blueprint",
      name: "Dark blueprint",
      status: "Selected",
      preview: "bg-slate-950 ring-1 ring-white/10",
      selected: true,
    },
    {
      id: "light-clean",
      name: "Light clean",
      status: "Available",
      preview: "bg-slate-200",
      selected: false,
    },
    {
      id: "high-contrast",
      name: "High contrast",
      status: "Available",
      preview: "bg-gradient-to-br from-zinc-950 via-cyan-950 to-amber-300",
      selected: false,
    },
  ];

  return (
    <Surface className="mx-auto max-w-4xl">
      <h3 className="text-3xl font-semibold tracking-tight text-white">Choose theme</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">
        Theme preference belongs to user settings, not to individual boards or labels.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {themes.map((theme) => (
          <Button
            className="min-h-[190px]"
            key={theme.id}
            size="card"
            variant={theme.selected ? "choiceSelected" : "choice"}
          >
            <div className={`h-24 rounded-xl ${theme.preview}`} />
            <p className="mt-3 font-semibold text-white">{theme.name}</p>
            <p className="mt-1 text-xs text-slate-500">{theme.status}</p>
          </Button>
        ))}
      </div>

      <Alert className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" variant="success">
        <p>Theme updated and will be restored on future sessions.</p>
        <Button variant="primary" size="sm">Apply theme</Button>
      </Alert>
    </Surface>
  );
}

export function ChangePasswordScreen() {
  return (
    <div className="mx-auto flex min-h-[440px] max-w-xl items-center justify-center">
      <Surface as="form" className="w-full" variant="form">
        <h3 className="text-2xl font-semibold text-white">Change password</h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Use your current password. New passwords need 8 to 128 characters with uppercase,
          lowercase, and a number.
        </p>

        <div className="mt-5 grid gap-4">
          <FieldLabel>
            Current password
            <TextInput type="password" defaultValue="wrong-current" />
          </FieldLabel>
          <FieldLabel>
            New password
            <TextInput type="password" defaultValue="NewPass123" />
          </FieldLabel>
          <FieldLabel>
            Confirm new password
            <TextInput className="border-red-300/30 bg-red-400/5" type="password" defaultValue="NewPass124" />
          </FieldLabel>
          <Alert variant="danger">Passwords do not match. Current password also failed validation.</Alert>
          <Alert variant="muted">On success, other active sessions are invalidated while this one stays active.</Alert>
        </div>

        <div className="mt-5 flex justify-end gap-3">
          <Button variant="secondary" size="sm">Cancel</Button>
          <Button variant="primary" size="sm">Update password</Button>
        </div>
      </Surface>
    </div>
  );
}

export function SignOutConfirmation() {
  return (
    <PreviewModalFrame>
      <Surface variant="dialog">
        <IconFrame variant="muted">i</IconFrame>
        <h3 className="mt-4 text-xl font-semibold text-white">Sign out?</h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Your private boards will require authentication before they can be opened again.
        </p>
        <div className="mt-5 flex justify-end gap-3">
          <Button variant="secondary" size="sm">Cancel</Button>
          <Button variant="primary" size="sm">Sign out</Button>
        </div>
      </Surface>
    </PreviewModalFrame>
  );
}
