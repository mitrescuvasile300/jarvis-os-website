'use client';

import { useState } from 'react';

export function CheckoutButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          priceId: 'price_pro_29',
          email: 'customer@example.com'
        })
      });
      
      const data = await response.json();
      
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Checkout failed. Please try again.');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={isLoading}
      className="w-full py-3 rounded-lg font-bold bg-emerald-500 text-slate-900 hover:bg-emerald-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isLoading ? 'Processing...' : 'Get Pro — $29'}
    </button>
  );
}
