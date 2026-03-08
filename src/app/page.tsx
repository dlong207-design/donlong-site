import Link from 'next/link'
import { getFeaturedArticles, getAllArticles } from '@/lib/articles'
import ArticleCard from '@/components/articles/ArticleCard'
import NewsletterSignup from '@/components/newsletter/NewsletterSignup'

const themes = [
  {
    title: 'Organizational Execution',
    description: 'How strategy becomes real output—and what breaks down in between.',
    href: '/articles?tag=organizational-execution',
  },
  {
    title: 'Accountability Systems',
    description: 'Building the structures that make follow-through predictable rather than exceptional.',
    href: '/articles?tag=accountability',
  },
  {
    title: 'Cross-Functional Alignment',
    description: 'How leaders create clarity across teams with different languages and incentives.',
    href: '/articles?tag=alignment',
  },
  {
    title: 'Leadership Communication',
    description: 'Communicating with precision and confidence at every level of an organization.',
    href: '/articles?tag=communication',
  },
  {
    title: 'Operational Discipline',
    description: 'The routines, rituals, and review mechanisms that sustain execution over time.',
    href: '/articles?tag=operations',
  },
  {
    title: 'Team Performance',
    description: 'How managers build teams that perform consistently—not just in sprints.',
    href: '/articles?tag=performance',
  },
]

const whyItMatters = [
  {
    title: 'Translating Strategy into Execution',
    description:
      'Most strategies are sound. Most execution is not. The gap between them is where management happens—and where the clearest thinking matters most.',
  },
  {
    title: 'Building Systems of Accountability',
    description:
      'Accountability is not a personality trait. It is a system. When it fails, the answer is rarely about who—it is about how work is structured, reviewed, and followed up.',
  },
  {
    title: 'Aligning Teams Around Shared Priorities',
    description:
      'Teams that drift apart rarely do so because they disagree. They drift because no one created the structures to keep them aligned. Alignment is designed, not assumed.',
  },
]

export default async function HomePage() {
  const featured = getFeaturedArticles()
  const allArticles = getAllArticles()
  const displayArticles = featured.length >= 3 ? featured : allArticles.slice(0, 4)

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-slate-900 via-navy-900 to-navy-800 text-white pt-36 pb-28 lg:pt-52 lg:pb-40 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 bg-white/10 rounded-full text-xs font-medium text-slate-300 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-sage-400 animate-pulse" />
              Strategy Execution · Operational Leadership · Organizational Systems
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight mb-8">
              Systems for turning strategy into execution.
            </h1>
            <p className="text-slate-300 text-lg lg:text-xl leading-relaxed mb-6">
              I write about the operational systems, leadership behaviors, and organizational
              dynamics that determine whether strategic priorities actually get delivered.
            </p>
            <p className="text-slate-400 text-sm font-medium mb-12">
              Operator focused on organizational execution, leadership systems, and operational clarity.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/articles"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-navy-900 font-semibold text-sm rounded-lg hover:bg-slate-100 transition-all duration-150"
              >
                Read the Writing
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/subscribe"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 text-white font-semibold text-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-150"
              >
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Thinking Themes */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-navy-600 mb-3">Thinking Themes</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight max-w-xl">
              Six dimensions of organizational execution
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {themes.map((theme, i) => (
              <Link
                key={theme.title}
                href={theme.href}
                className="group block bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-navy-200 hover:bg-navy-50 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
              >
                <div className="text-xs font-bold text-slate-300 mb-3 font-mono tracking-widest">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-navy-700 transition-colors">
                  {theme.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{theme.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Work Matters */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-3">Perspective</p>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight max-w-xl">
              Grounded in real organizational practice
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyItMatters.map((item, i) => (
              <div key={item.title} className="relative">
                <div className="text-5xl font-bold text-white/5 mb-4 font-serif">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Analysis */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-navy-600 mb-3">Featured Analysis</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                On Strategy, Execution, and Leadership
              </h2>
            </div>
            <Link
              href="/articles"
              className="text-sm font-semibold text-navy-700 hover:text-navy-900 flex items-center gap-1.5 group transition-colors whitespace-nowrap"
            >
              View All Writing
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            {displayArticles.slice(0, 4).map((article, i) => (
              <ArticleCard
                key={article.slug}
                article={article}
                variant={i === 0 ? 'featured' : 'default'}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-navy-600 mb-3">About the Author</p>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">
              Don Long
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Don Long writes about the organizational systems, leadership behaviors, and operational
              structures that determine whether strategic priorities actually get delivered. His writing
              draws on direct experience with the challenges organizations face when moving from intent
              to consistent, accountable execution.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              This site is a portfolio of structured thinking on leadership, strategy execution, and
              operational clarity—written for readers working on complex organizational problems.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy-700 hover:text-navy-900 transition-colors group"
            >
              More about Don
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* For Recruiters and Hiring Leaders */}
      <section className="py-16 lg:py-20 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-5">For Recruiters &amp; Hiring Leaders</p>
            <p className="text-slate-700 leading-relaxed mb-3">
              This site is a collection of how I think about leadership, execution, and operational systems.
            </p>
            <p className="text-slate-500 leading-relaxed mb-7 text-sm">
              If you&apos;re hiring for roles involving strategy execution, program leadership, operational
              excellence, or organizational transformation, this site reflects the way I approach
              organizational problems.
            </p>
            <div className="flex flex-wrap gap-5">
              <a
                href="mailto:don@thesummitmark.com"
                className="inline-flex items-center gap-2 text-sm font-medium text-navy-700 hover:text-navy-900 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                don@thesummitmark.com
              </a>
              <a
                href="https://www.linkedin.com/in/summitmark/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-navy-700 hover:text-navy-900 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 lg:py-28 bg-navy-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-navy-200 mb-3">Newsletter</p>
            <h2 className="text-3xl font-bold text-white tracking-tight mb-3">
              Read in five minutes. Think longer.
            </h2>
            <p className="text-navy-200 leading-relaxed mb-8">
              Subscribe to receive new analysis from The 5-Minute Manager. Each issue examines a
              specific leadership, execution, or organizational challenge—written for readers who
              work on complex organizational problems.
            </p>
            <NewsletterSignup variant="footer" />
          </div>
        </div>
      </section>
    </>
  )
}
