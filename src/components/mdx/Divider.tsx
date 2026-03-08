export default function Divider() {
  return (
    <div className="my-10 flex items-center gap-4">
      <div className="flex-1 h-px bg-slate-200" />
      <div className="flex gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
        <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
        <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
      </div>
      <div className="flex-1 h-px bg-slate-200" />
    </div>
  )
}
