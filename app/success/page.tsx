import { Metadata } from 'next';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'Welcome to Jarvis OS Pro!',
  description: 'Your purchase was successful. Here\'s how to get started.',
};

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <div className="pt-16">
        <section className="py-20 md:py-32 px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="w-20 h-20 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center mx-auto mb-8">
              <span className="text-4xl">🎉</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Welcome to Jarvis OS Pro!
            </h1>
            <p className="text-xl text-slate-400 mb-12">
              Your payment was successful. You now have lifetime access.
            </p>

            {/* Next Steps */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 text-left mb-8">
              <h2 className="text-xl font-bold text-white mb-6">Get started in 3 steps:</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-emerald-400 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Check your email</h3>
                    <p className="text-slate-400 text-sm">We sent your license key and download link to your email address.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-emerald-400 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Install Jarvis OS</h3>
                    <p className="text-slate-400 text-sm font-mono bg-slate-900/50 rounded-lg px-3 py-2 mt-2 inline-block">
                      npx jarvis-os init --key YOUR_LICENSE_KEY
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-emerald-400 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Start building</h3>
                    <p className="text-slate-400 text-sm">Create your first AI agent and let Jarvis handle the rest.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/" className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold px-6 py-3 rounded-lg transition">
                Back to Home
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
