import { Badge, Button, IconFrame, Surface } from "@/shared/ui";

export function AccessDeniedScreen() {
  return (
    <>
      <div className="mx-auto flex min-h-[380px] max-w-lg items-center justify-center">
        <Surface className="rounded-[1.7rem] border-red-300/20 bg-slate-950/90 text-center" padding="xl"><IconFrame className="mx-auto" size="lg" variant="red">⛔</IconFrame><h3 className="mt-6 text-2xl font-semibold text-white">Access denied</h3><p className="mt-2 text-sm leading-6 text-slate-400">You don&apos;t have permission to view this resource.</p><Button variant="primary" size="lg" className="mt-6">Go to your boards</Button></Surface>
      </div>
    </>
  );
}

export function NotFoundScreen() {
  return (
    <>
      <div className="mx-auto flex min-h-[380px] max-w-lg items-center justify-center">
        <Surface className="rounded-[1.7rem] bg-slate-950/90 text-center" padding="xl"><p className="font-mono text-7xl font-semibold text-cyan-300/80">404</p><h3 className="mt-4 text-2xl font-semibold text-white">Page not found</h3><p className="mt-2 text-sm leading-6 text-slate-400">This page may have been moved, deleted, or is no longer available.</p><div className="mt-6 flex justify-center gap-3"><Button variant="primary" size="lg">Go to boards</Button><Button variant="secondary" size="lg">Go back</Button></div></Surface>
      </div>
    </>
  );
}

export function GeneralErrorScreen() {
  return (
    <>
      <div className="mx-auto flex min-h-[380px] max-w-xl items-center justify-center">
        <Surface className="rounded-[1.7rem] border-amber-300/20 bg-slate-950/90" padding="xl"><div className="flex gap-5"><IconFrame className="shrink-0" size="lg" variant="amber">!</IconFrame><div><h3 className="text-2xl font-semibold text-white">Something went wrong</h3><p className="mt-2 text-sm leading-6 text-slate-400">We couldn&apos;t complete this action. Please try again.</p><p className="mt-4 font-mono text-xs text-slate-500">Reference ID: TB-9F42</p><div className="mt-6 flex gap-3"><Button variant="primary" size="lg">Try again</Button><Button variant="secondary" size="lg">Go to boards</Button></div></div></div></Surface>
      </div>
    </>
  );
}

export function UploadFailureScreen() {
  return (
    <>
      <div className="mx-auto flex min-h-[380px] max-w-2xl items-center justify-center">
        <Surface className="w-full rounded-[1.6rem] border-red-300/20 bg-slate-950/90" padding="lg"><div className="flex flex-col gap-5 sm:flex-row sm:items-start"><IconFrame className="shrink-0" size="lg" variant="red">⇧</IconFrame><div className="flex-1"><h3 className="text-2xl font-semibold text-white">Upload failed</h3><p className="mt-2 text-sm leading-6 text-slate-400">Choose a JPEG or PNG image up to 2 MB and try again.</p><Surface className="mt-5" padding="sm" variant="muted"><div className="flex items-center justify-between"><div><p className="font-medium text-white">design-system.sketch</p><p className="mt-1 text-xs text-red-100">Unsupported file type</p></div><Badge variant="red">Rejected</Badge></div></Surface><div className="mt-5 flex flex-wrap gap-3"><Button variant="primary" size="lg">Try again</Button><Button variant="secondary" size="lg">Choose another image</Button></div></div></div></Surface>
      </div>
    </>
  );
}
