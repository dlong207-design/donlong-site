import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 text-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 flex flex-col gap-6">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500 mb-2">
            Don Long
          </p>
          <p className="text-2xl font-semibold text-white tracking-tight">Don Long</p>
          <p className="text-sm text-slate-400 mt-1">Execution • Leadership • Systems</p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-1">Links</p>
          <div className="flex flex-wrap gap-4 text-sm font-medium">
            <a
              href="https://www.linkedin.com/in/summitmark/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-200 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <Link href="/subscribe" className="text-slate-200 hover:text-white transition-colors">
              Subscribe
            </Link>
            <a href="mailto:don@thesummitmark.com" className="text-slate-200 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
        <div className="pt-4 border-t border-white/10 text-xs text-slate-500">
          © {currentYear} Don Long. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
