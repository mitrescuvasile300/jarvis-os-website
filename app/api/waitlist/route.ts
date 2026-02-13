import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // TODO: Replace with Resend/ConvertKit integration
    // For now, log the email (visible in Vercel logs)
    console.log(`[WAITLIST] New signup: ${email} at ${new Date().toISOString()}`);
    
    return NextResponse.json({ 
      success: true,
      message: 'You\'re on the list!'
    });
  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}
