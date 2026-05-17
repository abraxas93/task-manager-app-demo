import { Alert, Badge, Button, IconFrame, Surface } from "@/shared/ui";

export function AccessDeniedScreen() {
  return (
    <div className="mx-auto flex min-h-[420px] max-w-xl items-center justify-center">
      <Surface className="rounded-[1.7rem] border-red-300/20 bg-slate-950/90 text-center" padding="xl">
        <IconFrame className="mx-auto" size="lg" variant="red">!</IconFrame>
        <h3 className="mt-6 text-2xl font-semibold text-white">Access denied</h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          This board belongs to another user. Private data fails closed and no board details are shown.
        </p>
        <Alert className="mt-5 text-left" variant="danger">
          ACCESS_DENIED . Correlation ID: TB-7A19
        </Alert>
        <Button variant="primary" size="lg" className="mt-6">Go to your boards</Button>
      </Surface>
    </div>
  );
}

export function NotFoundScreen() {
  return (
    <div className="mx-auto flex min-h-[420px] max-w-lg items-center justify-center">
      <Surface className="rounded-[1.7rem] bg-slate-950/90 text-center" padding="xl">
        <p className="font-mono text-7xl font-semibold text-cyan-300/80">404</p>
        <h3 className="mt-4 text-2xl font-semibold text-white">Page not found</h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          The route, board, task, comment, or attachment may not exist or may no longer be visible.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Button variant="primary" size="lg">Go to boards</Button>
          <Button variant="secondary" size="lg">Go back</Button>
        </div>
      </Surface>
    </div>
  );
}

export function GeneralErrorScreen() {
  return (
    <div className="mx-auto flex min-h-[420px] max-w-2xl items-center justify-center">
      <Surface className="rounded-[1.7rem] border-amber-300/20 bg-slate-950/90" padding="xl">
        <div className="flex flex-col gap-5 sm:flex-row">
          <IconFrame className="shrink-0" size="lg" variant="amber">!</IconFrame>
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-2xl font-semibold text-white">Something went wrong</h3>
              <Badge>Safe state preserved</Badge>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              We could not complete this action. Existing saved board state is still authoritative,
              and unsaved form input should remain available where possible.
            </p>
            <p className="mt-4 font-mono text-xs text-slate-500">Reference ID: TB-9F42</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="primary" size="lg">Try again</Button>
              <Button variant="secondary" size="lg">Go to boards</Button>
            </div>
          </div>
        </div>
      </Surface>
    </div>
  );
}

export function UploadFailureScreen() {
  return (
    <div className="mx-auto flex min-h-[420px] max-w-2xl items-center justify-center">
      <Surface className="w-full rounded-[1.6rem] border-red-300/20 bg-slate-950/90" padding="lg">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
          <IconFrame className="shrink-0" size="lg" variant="red">!</IconFrame>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-2xl font-semibold text-white">Upload failed</h3>
              <Badge variant="red">Rejected</Badge>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Choose a JPEG or PNG image up to 2 MB. Rejected uploads do not create usable
              avatar or task attachment metadata.
            </p>
            <Surface className="mt-5" padding="sm" variant="muted">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-medium text-white">design-system.sketch</p>
                  <p className="mt-1 text-xs text-red-100">UPLOAD_NOT_IMAGE</p>
                </div>
                <Badge variant="red">No file saved</Badge>
              </div>
            </Surface>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button variant="primary" size="lg">Try again</Button>
              <Button variant="secondary" size="lg">Choose another image</Button>
            </div>
          </div>
        </div>
      </Surface>
    </div>
  );
}
