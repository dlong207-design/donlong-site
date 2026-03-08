import type { NewsletterAdapter, SubscribeRequest, SubscribeResponse } from '../types'

export class BeehiivNewsletterAdapter implements NewsletterAdapter {
  private apiKey: string
  private publicationId: string

  constructor() {
    this.apiKey = process.env.BEEHIIV_API_KEY ?? ''
    this.publicationId = process.env.BEEHIIV_PUBLICATION_ID ?? ''

    if (!this.apiKey || !this.publicationId) {
      throw new Error('Beehiiv API key and publication ID are required.')
    }
  }

  async subscribe(request: SubscribeRequest): Promise<SubscribeResponse> {
    try {
      const response = await fetch(
        `https://api.beehiiv.com/v2/publications/${this.publicationId}/subscriptions`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.apiKey}`,
          },
          body: JSON.stringify({
            email: request.email,
            reactivate_existing: false,
            send_welcome_email: true,
          }),
        }
      )

      if (!response.ok) {
        const error = await response.json()
        return {
          success: false,
          message: 'Something went wrong. Please try again.',
          error: error?.message ?? 'Unknown error',
        }
      }

      return {
        success: true,
        message: "You're subscribed! Watch for your first issue soon.",
      }
    } catch (error) {
      return {
        success: false,
        message: 'Something went wrong. Please try again.',
        error: error instanceof Error ? error.message : 'Network error',
      }
    }
  }
}
