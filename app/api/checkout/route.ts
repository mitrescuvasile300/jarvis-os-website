import { NextResponse } from 'next/server';

// Stripe Payment Link — will be updated once created in Stripe
const PAYMENT_LINK = process.env.STRIPE_PAYMENT_LINK || '';

export async function POST(req: Request) {
  try {
    if (!PAYMENT_LINK) {
      // Fallback: redirect to pricing page if payment link not configured
      return NextResponse.json({ 
        url: '/pricing',
        status: 'payment_link_not_configured'
      });
    }

    const { email } = await req.json();
    
    // Build payment link URL with prefilled email if provided
    let url = PAYMENT_LINK;
    if (email) {
      url += `?prefilled_email=${encodeURIComponent(email)}`;
    }

    return NextResponse.json({ url });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}

export async function GET() {
  if (!PAYMENT_LINK) {
    return NextResponse.redirect(new URL('/pricing', 'https://jarvis-os-website.vercel.app'));
  }
  return NextResponse.redirect(PAYMENT_LINK);
}
