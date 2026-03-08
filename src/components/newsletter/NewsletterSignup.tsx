'use client'

import { useState } from 'react'
import type { SubscribeResponse } from '@/lib/newsletter/types'

interface NewsletterSignupProps {
  variant?: 'default' | 'footer' | 'inline' | 'hero'
  title?: string
  description?: string
}

export default function NewsletterSignup({
  variant = 'default',
  title,
  description,
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email.trim()) return

    setStatus('loading')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      })

      const data = await response.json() as SubscribeResponse

      if (data.success) {
        setStatus('success')
        setMessage(data.message)
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.message)
      }
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className={`${variant === 'footer' ? 'text-left' : 'text-center'}`}>
        <div className={`inline-flex items-center gap-2 ${
          variant === 'footer' ? 'text-green-400' : 'text-green-600'
        }`}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="font-medium text-sm">{message}</p>
        </div>
      </div>
    )
  }

  const isFooter = variant === 'footer'

  return (
    <div>
      {title && (
        <h3 className={`font-bold mb-2 ${isFooter ? 'text-white text-xl' : 'text-slate-900 text-xl'}`}>
          {title}
        </h3>
      )}
      {description && (
        <p className={`mb-4 text-sm leading-relaxed ${isFooter ? 'text-slate-400' : 'text-slate-500'}`}>
          {description}
        </p>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
        <div className="flex-1 relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            disabled={status === 'loading'}
            className={`w-full px-4 py-3 text-sm rounded-lg border transition-all outline-none focus:ring-2 disabled:opacity-60 ${
              isFooter
                ? 'bg-white/10 border-white/20 text-white placeholder-slate-400 focus:ring-white/30 focus:border-white/40'
                : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:ring-navy-200 focus:border-navy-300'
            } ${status === 'error' ? 'border-red-400' : ''}`}
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading' || !email.trim()}
          className={`px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-150 whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed ${
            isFooter
              ? 'bg-white text-navy-900 hover:bg-slate-100'
              : 'bg-navy-700 text-white hover:bg-navy-800'
          }`}
        >
          {status === 'loading' ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Subscribing...
            </span>
          ) : (
            'Subscribe'
          )}
        </button>
      </form>
      {status === 'error' && (
        <p className={`mt-2 text-xs ${isFooter ? 'text-red-400' : 'text-red-500'}`}>{message}</p>
      )}
    </div>
  )
}
