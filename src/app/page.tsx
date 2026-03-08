import Link from 'next/link'
import { getFeaturedArticles, getAllArticles } from '@/lib/articles'
import ArticleCard from '@/components/articles/ArticleCard'
import NewsletterSignup from '@/components/newsletter/NewsletterSignup'

const themes = [
  {
    title: 'Organizational Execution',
    description: 'How strategy becomes real output—and what breaks down in between.',
    href: '/articles?tag=organizational-execution',
    icon: '⚙️',
  },
  {
    title: 'Accountability Systems',
    description: 'Building the structures that make follow-through predictable rather than exceptional.',
    href: '/articles?tag=accountability',
    icon: '🎯',
  },
  {
    title: 'Cross-Functional Alignment',
    description: 'How leaders create clarity across teams with different languages and incentives.',
    href: '/articles?tag=alignment',
    icon: '🔗',
  },
  {
    title: 'Leadership Communication',
    description: 'Communicating with precision and confidence at every level of an organization.',
    href: '/articles?tag=communication',
    icon: '📣',
  },
  {
    title: 'Operational Discipline',
    description: 'The routines, rituals, and review mechanisms that sustain execution over time.',
    href: '/articles?tag=operations',
    icon: '📐',
  },
  {
    title: 'Team Performance',
    description: 'How managers build teams that perform consistently—not just in sprints.',
    href: '/articles?tag=performance',
    icon: '📈',
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
      <section className="relative bg-gradient-to-b from-slate-900 via-navy-900 to-navy-800 text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 bg-white/10 rounded-full text-xs font-medium text-slate-300 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-sage-400 animate-pulse" />
              Leadership Insights for Working Managers
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
              Practical leadership frameworks for managers responsible for real execution.
            </h1>
            <p className="text-slate-300 text-lg lg:text-xl leading-relaxed mb-4 max-w-2xl">
              The 5-Minute Manager explores the systems behind effective leadership. Each article
              breaks down practical ideas that help managers translate strategy into consistent
              execution. This site is a collection of short frameworks and insights drawn from
              real organizational experience.
            </p>
            <p className="text-slate-500 text-sm mb-10 max-w-xl border-l-2 border-slate-600 pl-3">
              For recruiters and hiring leaders: this site is a portfolio of how I think about
              leadership, execution, and organizational effectiveness.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/articles"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-navy-900 font-semibold text-sm rounded-lg hover:bg-slate-100 transition-all duration-150"
              >
                Explore Recent Insights
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/subscribe"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 text-white font-semibold text-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-150"
              >
                Subscribe to Newsletter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Themes */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-navy-600 mb-3">Areas of Focus</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight max-w-xl">
              Six themes at the core of leadership execution
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {themes.map((theme) => (
              <Link
                key={theme.title}
                href={theme.href}
                className="group block bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-navy-200 hover:bg-navy-50 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
              >
                <div className="text-2xl mb-3">{theme.icon}</div>
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
            <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-3">Why It Matters</p>
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

      {/* Featured Articles */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-navy-600 mb-3">Selected Insights</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                On Leadership Execution
              </h2>
            </div>
            <Link
              href="/articles"
              className="text-sm font-semibold text-navy-700 hover:text-navy-900 flex items-center gap-1.5 group transition-colors whitespace-nowrap"
            >
              View All Articles
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
            <p className="text-xs font-semibold tracking-widest uppercase text-navy-600 mb-3">About</p>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">
              Don Long
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Don Long writes The 5-Minute Manager, a leadership newsletter focused on the systems
              that help organizations translate strategy into consistent execution. His writing
              draws on direct experience with the organizational challenges managers encounter
              when moving from clear intention to reliable output.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Each article is a short, practical framework designed for managers who are
              responsible for real decisions and real outcomes.
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

      {/* Newsletter */}
      <section className="py-20 lg:py-28 bg-navy-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-navy-200 mb-3">Newsletter</p>
            <h2 className="text-3xl font-bold text-white tracking-tight mb-3">
              Read in five minutes. Think longer.
            </h2>
            <p className="text-navy-200 leading-relaxed mb-8">
              Subscribe to receive new leadership insights from The 5-Minute Manager. Each issue
              delivers a short, practical idea about leadership and organizational execution that
              can be read in about five minutes.
            </p>
            <NewsletterSignup variant="footer" />
          </div>
        </div>
      </section>
    </>
  )
}
