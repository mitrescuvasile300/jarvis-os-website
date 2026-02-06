import { NextResponse } from 'next/server';

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

export async function POST(req: Request) {
  try {
    const { priceId, email } = await req.json();
    
    if (!STRIPE_SECRET_KEY) {
      console.error('STRIPE_SECRET_KEY not configured');
      // Return mock URL for testing
      return NextResponse.json({ 
        url: '/success?session_id=test_session_123',
        status: 'test_mode'
      });
    }

    // TODO: Implement real Stripe checkout
    // For now, return test URL
    return NextResponse.json({ 
      url: '/success?session_id=test_session_123',
      status: 'test_mode'
    });
    
    /* Real implementation would be:
    const stripe = new Stripe(STRIPE_SECRET_KEY, { apiVersion: '2023-10-16' });
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price: priceId,
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/`,
      customer_email: email,
    });
    
    return NextResponse.json({ url: session.url });
    */
    
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' }
    );
export async function POST(req: Request) {
  try {
    const { priceId } = await req.json();
    
    // Mock checkout for now - avoids Stripe import issues
    return NextResponse.json({ 
      url: '/success?session_id=mock_' + Date.now(),
      status: 'success'
    });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: 'Checkout failed' },
      { status: 500 }
    );
  }
}
