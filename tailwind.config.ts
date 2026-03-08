import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        serif: ['var(--font-playfair)', ...fontFamily.serif],
      },
      colors: {
        navy: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d6fe',
          300: '#a5b8fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#1e3a5f',
          700: '#1a2f4e',
          800: '#162540',
          900: '#0f1a2e',
          950: '#0a1120',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        sage: {
          50: '#f0f4f0',
          100: '#dce8dc',
          200: '#bdd4bd',
          300: '#96ba96',
          400: '#6a9e6a',
          500: '#4a8050',
          600: '#3a6640',
          700: '#2e5033',
          800: '#243d28',
          900: '#1a2e1e',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#334155',
            lineHeight: '1.75',
            'h1, h2, h3, h4': {
              color: '#0f172a',
              fontWeight: '700',
              letterSpacing: '-0.02em',
            },
            h1: { fontSize: '2.25rem', lineHeight: '1.2' },
            h2: { fontSize: '1.625rem', lineHeight: '1.3', marginTop: '2.5rem' },
            h3: { fontSize: '1.25rem', lineHeight: '1.4', marginTop: '2rem' },
            p: { marginBottom: '1.5rem' },
            blockquote: {
              borderLeftColor: '#1e3a5f',
              borderLeftWidth: '4px',
              paddingLeft: '1.5rem',
              color: '#475569',
              fontStyle: 'italic',
              fontWeight: '500',
            },
            'ul, ol': { paddingLeft: '1.5rem' },
            li: { marginBottom: '0.5rem' },
            a: { color: '#1e3a5f', textDecoration: 'underline', textUnderlineOffset: '3px' },
            strong: { color: '#0f172a', fontWeight: '700' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
