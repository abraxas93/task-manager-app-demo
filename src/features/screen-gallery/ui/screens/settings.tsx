import { Alert, Button, FieldLabel, IconFrame, PreviewModalFrame, Surface, TextInput } from "@/shared/ui";

export function ProfileScreen() {
  return (
    <>
      <Surface className="mx-auto max-w-3xl">
        <h3 className="text-2xl font-semibold text-white">Profile</h3><p className="mt-1 text-sm text-slate-400">Update your personal information and avatar.</p>
        <div className="mt-6 grid gap-6 md:grid-cols-[220px_1fr]"><Surface className="text-center" variant="muted"><IconFrame className="mx-auto font-semibold" size="xl" variant="gradient">AM</IconFrame><Button variant="secondary" size="sm" className="mt-4">Upload avatar</Button><p className="mt-3 text-xs leading-5 text-slate-500">JPEG or PNG only, up to 2 MB.</p></Surface><form className="grid gap-4"><div className="grid gap-4 sm:grid-cols-2"><FieldLabel>First name<TextInput defaultValue="Alex" /></FieldLabel><FieldLabel>Last name<TextInput defaultValue="Morgan" /></FieldLabel></div><Alert variant="success">Profile updated.</Alert><Button variant="primary" size="lg" className="justify-self-start">Save profile</Button></form></div>
      </Surface>
    </>
  );
}

export function SettingsScreen() {
  return (
    <>
      <Surface className="mx-auto max-w-3xl">
        <h3 className="text-2xl font-semibold text-white">Settings</h3><p className="mt-1 text-sm text-slate-400">Manage your account security and app preferences.</p>
        <div className="mt-6 grid gap-4"><Surface as="section" padding="sm" variant="muted"><div className="flex items-center justify-between"><div><p className="font-semibold text-white">Theme</p><p className="mt-1 text-sm text-slate-500">Personalize how TaskBoard looks for you.</p></div><Button variant="primary" size="sm">Apply theme</Button></div></Surface><Surface as="section" padding="sm" variant="muted"><div className="flex items-center justify-between"><div><p className="font-semibold text-white">Password</p><p className="mt-1 text-sm text-slate-500">Use your current password to set a new one.</p></div><Button variant="secondary" size="sm">Change password</Button></div></Surface><Surface as="section" padding="sm" variant="muted"><p className="font-semibold text-white">Account</p><p className="mt-1 text-sm text-slate-500">alex@example.com</p><Button variant="danger" size="sm" className="mt-4">Sign out</Button></Surface></div>
      </Surface>
    </>
  );
}

export function ThemePreferenceScreen() {
  return (
    <>
      <Surface className="mx-auto max-w-3xl">
        <h3 className="text-2xl font-semibold text-white">Choose theme</h3><p className="mt-1 text-sm text-slate-400">Personalize how TaskBoard looks for you.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3"><Button variant="choiceSelected" size="card"><div className="h-24 rounded-xl bg-slate-950 ring-1 ring-white/10"></div><p className="mt-3 font-semibold text-cyan-50">Dark blueprint</p><p className="mt-1 text-xs text-cyan-200/70">Selected</p></Button><Button variant="choice" size="card"><div className="h-24 rounded-xl bg-slate-200"></div><p className="mt-3 font-semibold text-white">Light clean</p><p className="mt-1 text-xs text-slate-500">Available</p></Button><Button variant="choice" size="card"><div className="h-24 rounded-xl bg-gradient-to-br from-violet-700 to-slate-950"></div><p className="mt-3 font-semibold text-white">Violet night</p><p className="mt-1 text-xs text-slate-500">Available</p></Button></div>
        <Alert className="mt-5 flex items-center justify-between" variant="success"><p>Theme updated.</p><Button variant="primary" size="sm">Apply theme</Button></Alert>
      </Surface>
    </>
  );
}

export function ChangePasswordScreen() {
  return (
    <>
      <div className="mx-auto flex min-h-[380px] max-w-lg items-center justify-center">
        <Surface as="form" className="w-full" variant="form"><h3 className="text-2xl font-semibold text-white">Change password</h3><p className="mt-1 text-sm text-slate-400">Use your current password to set a new one.</p><div className="mt-5 grid gap-4"><FieldLabel>Current password<TextInput type="password" /></FieldLabel><FieldLabel>New password<TextInput type="password" defaultValue="NewPass123" /></FieldLabel><FieldLabel>Confirm new password<TextInput className="border-red-300/30 bg-red-400/5" type="password" defaultValue="NewPass124" /></FieldLabel><p className="text-xs text-red-100">Passwords do not match.</p><p className="text-xs leading-5 text-slate-500">Use 8–128 characters with uppercase, lowercase, and a number.</p></div><div className="mt-5 flex justify-end gap-3"><Button variant="secondary" size="sm">Cancel</Button><Button variant="primary" size="sm">Update password</Button></div></Surface>
      </div>
    </>
  );
}

export function SignOutConfirmation() {
  return (
    <>
      <PreviewModalFrame><Surface variant="dialog"><h3 className="text-xl font-semibold text-white">Sign out?</h3><p className="mt-2 text-sm leading-6 text-slate-400">You&apos;ll need to sign in again to access your boards.</p><div className="mt-5 flex justify-end gap-3"><Button variant="secondary" size="sm">Cancel</Button><Button variant="primary" size="sm">Sign out</Button></div></Surface></PreviewModalFrame>
    </>
  );
}
