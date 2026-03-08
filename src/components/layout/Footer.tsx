import Link from 'next/link'
import NewsletterSignup from '@/components/newsletter/NewsletterSignup'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter CTA */}
      <div className="border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-3">
              Newsletter
            </p>
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
              Get new analysis in your inbox
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Subscribe to The 5-Minute Manager. Each issue examines a specific leadership,
              execution, or organizational challenge—written for readers who work on complex
              organizational problems.
            </p>
            <NewsletterSignup variant="footer" />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white/10 rounded-sm flex items-center justify-center">
              <span className="text-white text-[9px] font-bold">5M</span>
            </div>
            <span className="text-slate-400 text-sm">
              © {currentYear} The 5-Minute Manager · Don Long
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="mailto:don@thesummitmark.com"
              className="text-slate-400 hover:text-white transition-colors text-sm"
            >
              Contact
            </a>
            <a
              href="https://www.linkedin.com/in/summitmark/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <Link href="/articles" className="text-slate-400 hover:text-white transition-colors text-sm">
              Writing
            </Link>
            <Link href="/about" className="text-slate-400 hover:text-white transition-colors text-sm">
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
