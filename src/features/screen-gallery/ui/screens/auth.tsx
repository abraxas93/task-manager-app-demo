import {
  Alert,
  Badge,
  BrandMark,
  Button,
  FieldLabel,
  IconFrame,
  Surface,
  TextInput,
} from "@/shared/ui";

export function SignUpScreen() {
  return (
    <div className="mx-auto flex min-h-[460px] max-w-5xl items-center justify-center">
      <div className="grid w-full gap-5 lg:grid-cols-[1fr_420px] lg:items-center">
        <div className="hidden lg:block">
          <BrandMark />
          <h3 className="mt-8 max-w-xl text-4xl font-semibold tracking-tight text-white">
            Create a private workspace and start with an empty board.
          </h3>
          <p className="mt-4 max-w-lg text-sm leading-7 text-slate-400">
            Sign-up creates an account, profile, settings, and authenticated access to owner-scoped
            boards. No collaboration concepts are exposed in the MVP.
          </p>
          <div className="mt-6 grid max-w-lg gap-3 sm:grid-cols-3">
            <Surface padding="sm" variant="muted"><p className="text-sm text-white">Profile</p></Surface>
            <Surface padding="sm" variant="muted"><p className="text-sm text-white">Settings</p></Surface>
            <Surface padding="sm" variant="muted"><p className="text-sm text-white">Boards</p></Surface>
          </div>
        </div>

        <Surface as="form" variant="form">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-semibold text-white">Create your TaskBoard account.</h3>
              <p className="mt-1 text-sm text-slate-400">Start with private boards and saved preferences.</p>
            </div>
            <Badge variant="cyan">New</Badge>
          </div>

          <div className="mt-5 grid gap-3">
            <FieldLabel>
              Email
              <TextInput className="border-amber-300/30 bg-amber-300/5" defaultValue="alex@example.com" />
            </FieldLabel>
            <p className="text-xs text-amber-100">This email is already registered.</p>
            <div className="grid grid-cols-2 gap-3">
              <FieldLabel>
                First name
                <TextInput placeholder="Alex" />
              </FieldLabel>
              <FieldLabel>
                Last name
                <TextInput placeholder="Morgan" />
              </FieldLabel>
            </div>
            <FieldLabel>
              Password
              <TextInput type="password" defaultValue="Password123" />
            </FieldLabel>
            <p className="text-xs leading-5 text-slate-500">
              Use 8 to 128 characters with uppercase, lowercase, and a number.
            </p>
          </div>

          <Button variant="primary" size="md" className="mt-5 w-full">Create account</Button>
          <p className="mt-4 text-center text-sm text-slate-500">
            Already have an account? <span className="text-cyan-200">Sign in.</span>
          </p>
        </Surface>
      </div>
    </div>
  );
}

export function SignInScreen() {
  return (
    <div className="mx-auto flex min-h-[440px] max-w-md items-center justify-center">
      <Surface as="form" className="w-full rounded-[1.6rem]" padding="lg" variant="form">
        <div className="mb-6 flex items-center justify-between gap-3">
          <BrandMark />
          <Badge>Protected</Badge>
        </div>
        <h3 className="text-2xl font-semibold text-white">Sign in to TaskBoard.</h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Continue managing private boards, profile, settings, comments, and attachments.
        </p>

        <div className="mt-6 grid gap-4">
          <FieldLabel>
            Email
            <TextInput placeholder="alex@example.com" />
          </FieldLabel>
          <FieldLabel>
            Password
            <TextInput className="border-red-300/30 bg-red-400/5" type="password" defaultValue="wrongpass" />
          </FieldLabel>
        </div>

        <Alert className="mt-4" variant="danger">
          AUTH_INVALID_CREDENTIALS. No session was created.
        </Alert>
        <Button variant="primary" size="md" className="mt-5 w-full">Sign in</Button>
        <p className="mt-4 text-center text-sm text-slate-500">
          New to TaskBoard? <span className="text-cyan-200">Create an account.</span>
        </p>
      </Surface>
    </div>
  );
}

export function SessionLoadingScreen() {
  return (
    <div className="mx-auto flex min-h-[420px] max-w-lg items-center justify-center">
      <Surface className="rounded-[1.7rem] bg-slate-950/85 text-center shadow-2xl shadow-black/40" padding="xl">
        <IconFrame className="mx-auto border border-cyan-300/20" size="lg" variant="cyan">
          <span className="loader h-8 w-8 rounded-full border-2 border-cyan-300/20 border-t-cyan-200" />
        </IconFrame>
        <h3 className="mt-6 text-xl font-semibold text-white">Checking your session</h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Protected routes fail closed until the current user and safe profile/settings data are loaded.
        </p>
        <div className="mt-5 grid gap-2 text-left text-xs text-slate-500">
          <div className="rounded-lg bg-white/[.04] px-3 py-2">AUTH_REQUIRED redirects to sign in.</div>
          <div className="rounded-lg bg-white/[.04] px-3 py-2">Owner-scoped boards load after session verification.</div>
        </div>
      </Surface>
    </div>
  );
}
