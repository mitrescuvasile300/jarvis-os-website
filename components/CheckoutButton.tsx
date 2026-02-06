'use client';

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface CheckoutButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function CheckoutButton({ children, className }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const { sessionId, error } = await response.json();

      if (error) {
        console.error('Checkout error:', error);
        alert('Something went wrong. Please try again.');
        return;
      }

      const stripe = await stripePromise;
      if (!stripe) {
        console.error('Stripe not loaded');
        return;
      }

      const { error: redirectError } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (redirectError) {
        console.error('Stripe redirect error:', redirectError);
        alert(redirectError.message);
      }
    } catch (err) {
      console.error('Checkout error:', err);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className={className}
    >
      {loading ? 'Processing...' : children}
    </button>
  );
}
