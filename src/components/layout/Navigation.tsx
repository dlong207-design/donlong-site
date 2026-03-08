'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/articles', label: 'Articles' },
  { href: '/about', label: 'About' },
  { href: '/subscribe', label: 'Subscribe' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-slate-200/80 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo / Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 bg-navy-700 rounded-sm flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105">
              <span className="text-white text-xs font-bold tracking-tight">5M</span>
            </div>
            <div>
              <span className="block text-sm font-semibold text-slate-900 leading-none tracking-tight">
                The 5-Minute Manager
              </span>
              <span className="block text-[10px] text-slate-500 leading-none mt-0.5 tracking-wide uppercase">
                Leadership Insights
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-150 ${
                  pathname === link.href
                    ? 'text-navy-700 bg-navy-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                } ${
                  link.href === '/subscribe'
                    ? 'ml-2 bg-navy-700 !text-white hover:bg-navy-800 hover:!text-white px-5'
                    : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  mobileOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  mobileOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  mobileOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            mobileOpen ? 'max-h-64 pb-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-1 pt-2 border-t border-slate-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                  pathname === link.href
                    ? 'text-navy-700 bg-navy-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
