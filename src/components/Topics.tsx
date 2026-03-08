import Link from 'next/link'

const topics = [
  { label: 'Strategy Execution', href: '/articles?tag=strategy-execution' },
  { label: 'Operational Leadership', href: '/articles?tag=operational-leadership' },
  { label: 'Organizational Systems', href: '/articles?tag=organizational-systems' },
  { label: 'Leadership Communication', href: '/articles?tag=leadership-communication' },
  { label: 'Execution Risk', href: '/articles?tag=execution-risk' },
  { label: 'Decision Clarity', href: '/articles?tag=decision-clarity' },
]

export default function Topics() {
  return (
    <section className="bg-white py-16 border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-slate-500">Topics</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {topics.map((topic) => (
            <Link
              key={topic.label}
              href={topic.href}
              className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-medium text-slate-700 hover:border-navy-200 hover:bg-navy-50 hover:text-navy-700 transition-colors"
            >
              {topic.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
