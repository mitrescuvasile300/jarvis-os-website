import { NextResponse } from 'next/server';

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
