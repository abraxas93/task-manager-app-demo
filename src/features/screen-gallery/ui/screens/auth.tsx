import { Alert, BrandMark, Button, FieldLabel, IconFrame, Surface, TextInput } from "@/shared/ui";

export function SignUpScreen() {
  return (
    <>
      <div className="mx-auto flex min-h-[380px] max-w-3xl items-center justify-center">
        <div className="grid w-full gap-5 md:grid-cols-[1fr_380px] md:items-center">
          <div className="hidden md:block"><BrandMark /><h3 className="mt-8 text-3xl font-semibold tracking-tight text-white">Start your private workspace.</h3><p className="mt-3 text-sm leading-7 text-slate-400">New boards start empty so the user can define the workflow intentionally.</p></div>
          <Surface as="form" variant="form">
            <h3 className="text-xl font-semibold text-white">Create your TaskBoard account.</h3><p className="mt-1 text-sm text-slate-400">Start with a private workspace for your boards and tasks.</p>
            <div className="mt-5 grid gap-3"><FieldLabel>Email<TextInput placeholder="alex@example.com" defaultValue="alex@example.com" /></FieldLabel><div className="grid grid-cols-2 gap-3"><FieldLabel>First name<TextInput placeholder="Alex" /></FieldLabel><FieldLabel>Last name<TextInput placeholder="Morgan" /></FieldLabel></div><FieldLabel>Password<TextInput type="password" defaultValue="Password123" /></FieldLabel><p className="text-xs leading-5 text-slate-500">Use 8–128 characters with uppercase, lowercase, and a number.</p></div>
            <Button variant="primary" size="md" className="mt-5 w-full">Create account</Button><p className="mt-4 text-center text-sm text-slate-500">Already have an account? <span className="text-cyan-200">Sign in.</span></p>
          </Surface>
        </div>
      </div>
    </>
  );
}

export function SignInScreen() {
  return (
    <>
      <div className="mx-auto flex min-h-[380px] max-w-md items-center justify-center">
        <Surface as="form" className="w-full rounded-[1.6rem]" padding="lg" variant="form">
          <div className="mb-6"><BrandMark /></div><h3 className="text-2xl font-semibold text-white">Sign in to TaskBoard.</h3><p className="mt-2 text-sm text-slate-400">Continue managing your boards and tasks.</p>
          <div className="mt-6 grid gap-4"><FieldLabel>Email<TextInput placeholder="alex@example.com" /></FieldLabel><FieldLabel>Password<TextInput className="border-red-300/30 bg-red-400/5" type="password" defaultValue="wrongpass" /></FieldLabel></div>
          <Alert className="mt-4" variant="danger">Email or password is incorrect.</Alert>
          <Button variant="primary" size="md" className="mt-5 w-full">Sign in</Button><p className="mt-4 text-center text-sm text-slate-500">New to TaskBoard? <span className="text-cyan-200">Create an account.</span></p>
        </Surface>
      </div>
    </>
  );
}

export function SessionLoadingScreen() {
  return (
    <>
      <div className="mx-auto flex min-h-[380px] max-w-lg items-center justify-center">
        <Surface className="rounded-[1.7rem] bg-slate-950/85 text-center shadow-2xl shadow-black/40" padding="xl">
          <IconFrame className="mx-auto border border-cyan-300/20" size="lg" variant="cyan"><span className="loader h-8 w-8 rounded-full border-2 border-cyan-300/20 border-t-cyan-200"></span></IconFrame>
          <h3 className="mt-6 text-xl font-semibold text-white">Checking your session…</h3><p className="mt-2 text-sm leading-6 text-slate-400">Opening your workspace and protecting private board data.</p>
        </Surface>
      </div>
    </>
  );
}
