import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-navy-950 to-navy-900 text-white py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_60%)] opacity-70" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,_transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,_transparent_1px)] bg-[length:80px_80px] opacity-20" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-slate-300 mb-8">
            Operator&apos;s Thinking Portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold leading-[1.2] tracking-[-0.02em] text-white">
            Systems for turning strategy into execution.
          </h1>
          <p className="text-lg sm:text-xl text-slate-200 leading-relaxed mt-8">
            I write about the operational systems, leadership behaviors, and organizational dynamics that determine whether
            strategic priorities actually get delivered.
          </p>
          <p className="text-sm text-slate-300 mt-6">
            Operator focused on organizational execution, leadership systems, and operational clarity.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              href="/articles"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-900"
            >
              Explore the insights
            </Link>
            <Link
              href="/subscribe"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white/90"
            >
              Get updates
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
