import { Folder } from "lucide-react";

export function EmptyState({ text }: { text: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-10 m-4 rounded border-slate-50">
      <Folder size={40} className="text-slate-300" />
      <p className="pt-4 text-sm font-normal text-slate-300">{text}</p>
    </div>
  );
}
