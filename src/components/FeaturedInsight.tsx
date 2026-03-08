import Link from 'next/link'

export default function FeaturedInsight() {
  return (
    <section className="bg-slate-950 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-slate-400 mb-4">
            Featured Insight
          </p>
          <div className="rounded-3xl border border-white/15 bg-white/5 p-8 sm:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.4em] text-slate-300">Recommended starting point</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight leading-snug">
              Why Organizational Initiatives Stall in the Middle Layer
            </h2>
            <p className="mt-4 text-base text-slate-200 leading-relaxed">
              Strategic initiatives rarely fail because leaders disagree. They fail because execution authority sits in the middle layer.
            </p>
            <Link
              href="/articles/why-organizational-priorities-stall"
              className="mt-6 inline-flex items-center text-sm font-semibold text-white hover:text-slate-200"
            >
              Read the insight →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
