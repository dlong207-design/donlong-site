import type { Metadata } from 'next'
import NewsletterSignup from '@/components/newsletter/NewsletterSignup'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Subscribe',
  description: 'Subscribe to The 5-Minute Manager newsletter for practical leadership insights.',
}

const benefits = [
  'One practical idea per issue—no filler, no noise',
  'Short enough to read in five minutes',
  'Grounded in real organizational experience',
  'New issues published regularly',
  'Unsubscribe anytime',
]

export default function SubscribePage() {
  return (
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-navy-600 mb-4">Newsletter</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-6">
              The 5-Minute Manager
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-6">
              Subscribe to receive new leadership insights from The 5-Minute Manager. Each issue
              delivers a short, practical idea about leadership and organizational execution that
              can be read in about five minutes.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              This is not a content marketing newsletter. It is a series of short frameworks
              written for managers who are responsible for real decisions and real outcomes.
            </p>

            <ul className="space-y-3 mb-8">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-slate-600 text-sm">
                  <svg className="w-5 h-5 text-navy-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>

            <p className="text-xs text-slate-400">
              Already subscribed?{' '}
              <Link href="/articles" className="text-navy-600 hover:underline">
                Read recent issues →
              </Link>
            </p>
          </div>

          {/* Right - Signup form */}
          <div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Subscribe now</h2>
              <p className="text-slate-500 text-sm mb-6">
                Free. Practical. Five minutes per issue.
              </p>
              <NewsletterSignup />
              <p className="text-xs text-slate-400 mt-4 text-center">
                No spam. Unsubscribe anytime.
              </p>
            </div>

            {/* Recent articles teaser */}
            <div className="mt-6 p-6 bg-slate-50 rounded-xl border border-slate-200">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Sample Topics
              </p>
              <ul className="space-y-2">
                {[
                  'Why Organizational Priorities Stall in the Middle Layer',
                  'The Accountability Gap Most Leaders Miss',
                  'Why Execution Fails Even With Clear Strategy',
                ].map((title) => (
                  <li key={title} className="text-sm text-slate-600 flex items-start gap-2">
                    <span className="text-navy-400 mt-0.5 flex-shrink-0">→</span>
                    {title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
