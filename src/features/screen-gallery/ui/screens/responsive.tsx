import { BrandMark, Button, FieldLabel, SelectInput, Surface } from "@/shared/ui";

export function MobileBoardScreen() {
  return (
    <>
      <div className="mx-auto flex min-h-[430px] max-w-5xl justify-center gap-6">
        <div className="w-[310px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-2xl shadow-black/40">
          <div className="border-b border-white/10 p-4"><div className="flex items-center justify-between"><BrandMark /><Button variant="subtle" size="none" className="rounded-xl px-2 py-1 text-xs">☰</Button></div><h3 className="mt-5 text-xl font-semibold text-white">Portfolio Website</h3><div className="mt-4 flex gap-2 overflow-x-auto pb-1"><Button variant="primary" size="xs">In Progress</Button><Button variant="subtle" size="xs">Todo</Button><Button variant="subtle" size="xs">Done</Button></div></div>
          <div className="p-4"><div className="flex items-center justify-between"><h4 className="font-semibold text-cyan-50">In Progress</h4><Button variant="primary" size="xs">+ Task</Button></div><div className="mt-4 grid gap-3"><Surface padding="xs" variant="task"><p className="font-medium text-white">Build mobile board view</p><p className="mt-2 text-xs text-slate-500">2 comments · UI</p></Surface><Surface padding="xs" variant="task"><p className="font-medium text-white">Move selector fallback</p><FieldLabel className="mt-3 gap-1 text-xs text-slate-400">Move to column<SelectInput className="py-1.5 text-xs"><option>Done</option><option>Todo</option></SelectInput></FieldLabel></Surface></div></div>
        </div>
        <Surface className="hidden max-w-sm self-center md:block" variant="muted"><p className="text-xs uppercase tracking-[.24em] text-cyan-200">Responsive rule</p><h4 className="mt-3 text-xl font-semibold text-white">Drag is not the only path.</h4><p className="mt-2 text-sm leading-6 text-slate-400">Mobile users get column tabs and a task move selector, so task movement remains usable without desktop-style drag-and-drop.</p></Surface>
      </div>
    </>
  );
}
