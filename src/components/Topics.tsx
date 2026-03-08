const topics = [
  'Strategy Execution',
  'Operational Leadership',
  'Organizational Systems',
  'Leadership Communication',
  'Execution Risk',
  'Decision Clarity',
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
            <span
              key={topic}
              className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-medium text-slate-700"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
