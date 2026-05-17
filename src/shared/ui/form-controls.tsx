import type {
  InputHTMLAttributes,
  LabelHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { cx } from "./class-names";

const fieldClassName =
  "w-full rounded-[.85rem] border border-white/10 bg-slate-950/70 px-3 py-2.5 text-white outline-none shadow-[0_0_0_0_rgba(34,211,238,0)] transition placeholder:text-slate-600 focus:border-cyan-200/60 focus:shadow-[0_0_0_4px_rgba(34,211,238,.12)]";

type FieldLabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  children: ReactNode;
};

export function FieldLabel({ children, className, ...props }: FieldLabelProps) {
  return (
    <label className={cx("grid gap-1.5 text-sm text-slate-300", className)} {...props}>
      {children}
    </label>
  );
}

export function TextInput({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cx(fieldClassName, className)} {...props} />;
}

export function SelectInput({
  children,
  className,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select className={cx(fieldClassName, className)} {...props}>
      {children}
    </select>
  );
}

export function TextArea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cx(fieldClassName, className)} {...props} />;
}
