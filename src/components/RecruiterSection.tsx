export default function RecruiterSection() {
  return (
    <section className="bg-slate-50 py-16 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-slate-500 mb-4">
          For Recruiters and Hiring Leaders
        </p>
        <p className="text-base text-slate-700 leading-relaxed">
          This site reflects how I think about leadership, execution, and operational systems. If you&apos;re hiring for roles
          involving strategy execution, operational excellence, or program leadership, these essays represent the way I approach
          organizational problems.
        </p>
        <div className="mt-6 flex flex-wrap gap-6 text-sm font-medium text-navy-800">
          <a
            href="https://www.linkedin.com/in/summitmark/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-navy-300 underline-offset-4"
          >
            LinkedIn
          </a>
          <a href="mailto:don@thesummitmark.com" className="underline decoration-navy-300 underline-offset-4">
            Email
          </a>
        </div>
      </div>
    </section>
  )
}
