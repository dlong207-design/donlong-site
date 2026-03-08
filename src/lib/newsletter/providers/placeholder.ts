import type { NewsletterAdapter, SubscribeRequest, SubscribeResponse } from '../types'

export class PlaceholderNewsletterAdapter implements NewsletterAdapter {
  async subscribe(request: SubscribeRequest): Promise<SubscribeResponse> {
    // Simulate network delay for realistic UX
    await new Promise((resolve) => setTimeout(resolve, 800))

    // Basic validation
    if (!request.email || !request.email.includes('@')) {
      return {
        success: false,
        message: 'Please enter a valid email address.',
        error: 'INVALID_EMAIL',
      }
    }

    // In production, replace this with real provider integration
    console.log(`[Newsletter] Subscription request for: ${request.email}`)

    return {
      success: true,
      message: "You're subscribed! Watch for your first issue soon.",
    }
  }
}
