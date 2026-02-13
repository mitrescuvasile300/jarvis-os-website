'use client';

import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Jarvis OS</h3>
            <p className="text-slate-400 mb-4">
              The complete AI-powered operating system that transforms scattered thoughts into autonomous execution.
            </p>
            <div className="flex gap-4">
              <a href="https://x.com/jarvis_os_ai" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com/mitrescuvasile300/jarvis-os-website" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/features" className="hover:text-emerald-400 transition">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-emerald-400 transition">Pricing</Link></li>
              <li><Link href="/blog" className="hover:text-emerald-400 transition">Blog</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/about" className="hover:text-emerald-400 transition">About</Link></li>
              <li><a href="mailto:contact@jarvis-os.com" className="hover:text-emerald-400 transition">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            © 2026 Jarvis OS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
