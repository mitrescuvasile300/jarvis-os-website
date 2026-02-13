'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-white">
            Jarvis <span className="text-emerald-400">OS</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/features" className="text-slate-300 hover:text-white transition">Features</Link>
            <Link href="/pricing" className="text-slate-300 hover:text-white transition">Pricing</Link>
            <Link href="/about" className="text-slate-300 hover:text-white transition">About</Link>
            <Link href="/blog" className="text-slate-300 hover:text-white transition">Blog</Link>
            <Link href="/pricing">
              <button className="bg-emerald-500 text-slate-900 font-semibold px-4 py-2 rounded-lg hover:bg-emerald-400 transition">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-800">
            <div className="flex flex-col gap-4">
              <Link href="/features" className="text-slate-300 hover:text-white transition" onClick={() => setIsOpen(false)}>Features</Link>
              <Link href="/pricing" className="text-slate-300 hover:text-white transition" onClick={() => setIsOpen(false)}>Pricing</Link>
              <Link href="/about" className="text-slate-300 hover:text-white transition" onClick={() => setIsOpen(false)}>About</Link>
              <Link href="/blog" className="text-slate-300 hover:text-white transition" onClick={() => setIsOpen(false)}>Blog</Link>
              <Link href="/pricing">
                <button className="bg-emerald-500 text-slate-900 font-semibold px-4 py-2 rounded-lg hover:bg-emerald-400 transition w-full">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
