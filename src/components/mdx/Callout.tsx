interface CalloutProps {
  type?: 'insight' | 'warning' | 'note'
  children: React.ReactNode
}

export default function Callout({ type = 'insight', children }: CalloutProps) {
  const styles = {
    insight: {
      bg: 'bg-navy-50',
      border: 'border-l-4 border-navy-700',
      icon: '💡',
      label: 'Key Insight',
      textColor: 'text-navy-900',
    },
    warning: {
      bg: 'bg-amber-50',
      border: 'border-l-4 border-amber-500',
      icon: '⚠️',
      label: 'Watch Out',
      textColor: 'text-amber-900',
    },
    note: {
      bg: 'bg-slate-100',
      border: 'border-l-4 border-slate-400',
      icon: '📌',
      label: 'Note',
      textColor: 'text-slate-800',
    },
  }

  const s = styles[type]

  return (
    <div className={`my-8 rounded-r-lg p-5 ${s.bg} ${s.border}`}>
      <div className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mb-2 ${s.textColor} opacity-70`}>
        <span>{s.icon}</span>
        <span>{s.label}</span>
      </div>
      <div className={`text-sm leading-relaxed ${s.textColor}`}>{children}</div>
    </div>
  )
}
