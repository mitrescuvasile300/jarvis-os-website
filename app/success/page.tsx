'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate verification delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-slate-900 rounded-2xl p-8 text-center border border-slate-800"
      >
        {loading ? (
          <div className="py-12">
            <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-slate-400">Verifying your payment...</p>
          </div>
        ) : (
          <>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-10 h-10 text-emerald-500" />
            </motion.div>
            
            <h1 className="text-3xl font-bold text-white mb-4">
              Welcome to Pro!
            </h1>
            
            <p className="text-slate-400 mb-8">
              Your payment was successful. You now have access to unlimited agents, 
              unlimited tasks, priority support, and API access.
            </p>

            {sessionId && (
              <p className="text-xs text-slate-500 mb-6">
                Session ID: {sessionId}
              </p>
            )}

            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-emerald-500 text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-emerald-400 transition-colors"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </>
        )}
      </motion.div>
    </main>
  );
}
