const ideas = [
  {
    title: 'Execution Systems',
    body:
      'How strategic priorities become operational behavior through structure, cadence, and clarity.',
  },
  {
    title: 'Leadership Behavior',
    body:
      'The leadership signals and habits that determine whether teams actually move.',
  },
  {
    title: 'Organizational Dynamics',
    body:
      'How authority, incentives, and friction shape what organizations actually deliver.',
  },
]

export default function CoreIdeas() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-slate-500">Core Ideas</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {ideas.map((idea) => (
            <div key={idea.title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900 tracking-tight">{idea.title}</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">{idea.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
