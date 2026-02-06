export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">🎉 Welcome to Jarvis OS Pro!</h1>
        <p className="text-slate-300 mb-8">Your payment was successful.</p>
        <a href="/" className="bg-emerald-500 text-slate-900 font-bold px-6 py-3 rounded-lg">
          Go to Dashboard
        </a>
      </div>
    </div>
  );
}
