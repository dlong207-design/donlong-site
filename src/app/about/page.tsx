import type { Metadata } from 'next'
import Link from 'next/link'
import NewsletterSignup from '@/components/newsletter/NewsletterSignup'

export const metadata: Metadata = {
  title: 'About',
  description: 'Don Long is an operator focused on organizational execution, leadership systems, and operational clarity. This site is a portfolio of his thinking on strategy execution, program leadership, and organizational transformation.',
}

const credibilityMarkers = [
  {
    label: 'Focus Area',
    value: 'Strategy Execution · Operational Leadership · Organizational Systems',
  },
  {
    label: 'Role Interests',
    value: 'Program Leadership, Operations, Transformation, Organizational Excellence',
  },
  {
    label: 'Writing Approach',
    value: 'Structured analysis of real organizational dynamics',
  },
  {
    label: 'Audience',
    value: 'Leaders, operators, and teams responsible for execution',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main content */}
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-widest uppercase text-navy-600 mb-4">About</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-8">
              Don Long
            </h1>

            <div className="space-y-5 text-slate-600 leading-relaxed">
              <p className="text-xl text-slate-700 leading-relaxed font-medium">
                Leadership thinking on strategy execution, organizational systems, and operational clarity.
              </p>

              <p>
                Writes about organizational execution, leadership systems, and the structures that determine
                whether strategic priorities actually get delivered.
              </p>

              <p>
                His writing examines practical leadership challenges through the lens of organizational
                pattern recognition. These are the patterns that appear in real working environments, not
                in case studies. Accountability gaps. Cross-functional friction. Execution that stalls between
                intent and outcome. The routines and structures that make consistent performance possible.
              </p>

              <p>
                Each piece analyzes real organizational dynamics and focuses on the practical mechanics of how
                work actually gets done. The goal is to identify patterns leaders can use to build stronger,
                more reliable execution systems.
              </p>

              <p>
                The 5-Minute Manager is a portfolio of leadership thinking. The site exists to make the
                analytical approach visible. It shows how organizational problems are diagnosed, what patterns
                appear across teams and systems, and what practical frameworks can improve execution across
                organizations.
              </p>

              <div className="my-8 p-6 bg-slate-50 border border-slate-200 rounded-xl">
                <p className="text-sm text-slate-500 mb-3 font-semibold uppercase tracking-wider">
                  For Hiring Leaders &amp; Recruiters
                </p>
                <p className="text-slate-700 leading-relaxed">
                  This site is a portfolio of professional thinking. Each article reflects how leadership,
                  organizational systems, and operational challenges are approached. If you are evaluating
                  candidates for roles involving strategy execution, program leadership, operational
                  excellence, or organizational transformation, these essays are designed to give you a
                  clear view of how the problems are analyzed before a conversation even begins.
                </p>
                <p className="text-slate-500 text-sm mt-3">
                  Reach out at{' '}
                  <a href="mailto:don@thesummitmark.com" className="text-navy-700 hover:text-navy-900 font-medium transition-colors">
                    don@thesummitmark.com
                  </a>{' '}
                  or connect on LinkedIn below.
                </p>
              </div>

              <p>
                Based in the United States. Professional interests include organizational design, leadership
                communication, execution risk, and the practical mechanics of helping teams perform
                consistently at scale.
              </p>
            </div>

            <div className="mt-10 flex gap-4 flex-wrap">
              <a
                href="https://www.linkedin.com/in/summitmark/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-navy-700 text-white text-sm font-semibold rounded-lg hover:bg-navy-800 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Connect on LinkedIn
              </a>
              <a
                href="mailto:don@thesummitmark.com"
                className="inline-flex items-center gap-2 px-5 py-3 border border-slate-200 text-slate-700 text-sm font-semibold rounded-lg hover:border-navy-300 hover:text-navy-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                don@thesummitmark.com
              </a>
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 px-5 py-3 border border-slate-200 text-slate-700 text-sm font-semibold rounded-lg hover:border-navy-300 hover:text-navy-700 transition-colors"
              >
                Read the Writing
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-7 mb-6">
              <h3 className="font-bold text-slate-900 mb-5 text-sm uppercase tracking-wider">Profile</h3>
              <div className="space-y-4">
                {credibilityMarkers.map((item) => (
                  <div key={item.label}>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    <p className="text-slate-700 font-medium text-sm">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-navy-700 text-white rounded-2xl p-7">
              <h3 className="font-bold text-white mb-2">Subscribe to the Newsletter</h3>
              <p className="text-navy-200 text-sm mb-5 leading-relaxed">
                Receive new analysis from The 5-Minute Manager on leadership, execution, and organizational systems.
              </p>
              <NewsletterSignup variant="footer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
