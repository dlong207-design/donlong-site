export type NewsletterProvider = 'placeholder' | 'beehiiv' | 'kit' | 'mailchimp'

export interface SubscribeRequest {
  email: string
  firstName?: string
}

export interface SubscribeResponse {
  success: boolean
  message: string
  error?: string
}

export interface NewsletterAdapter {
  subscribe(request: SubscribeRequest): Promise<SubscribeResponse>
}
