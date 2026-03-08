import { NextRequest, NextResponse } from 'next/server'
import { getNewsletterAdapter } from '@/lib/newsletter/adapter'
import type { SubscribeRequest } from '@/lib/newsletter/types'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as SubscribeRequest

    if (!body.email || typeof body.email !== 'string') {
      return NextResponse.json(
        { success: false, message: 'Email is required.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    const adapter = await getNewsletterAdapter()
    const result = await adapter.subscribe({
      email: body.email.toLowerCase().trim(),
      firstName: body.firstName,
    })

    return NextResponse.json(result, { status: result.success ? 200 : 422 })
  } catch (error) {
    console.error('[Subscribe API] Error:', error)
    return NextResponse.json(
      { success: false, message: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
}
