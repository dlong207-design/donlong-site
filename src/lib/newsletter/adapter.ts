import type { NewsletterAdapter, NewsletterProvider } from './types'

export async function getNewsletterAdapter(): Promise<NewsletterAdapter> {
  const provider = (process.env.NEWSLETTER_PROVIDER ?? 'placeholder') as NewsletterProvider

  switch (provider) {
    case 'beehiiv': {
      const { BeehiivNewsletterAdapter } = await import('./providers/beehiiv')
      return new BeehiivNewsletterAdapter()
    }
    case 'placeholder':
    default: {
      const { PlaceholderNewsletterAdapter } = await import('./providers/placeholder')
      return new PlaceholderNewsletterAdapter()
    }
  }
}
