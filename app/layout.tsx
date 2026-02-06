import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jarvis OS — Your AI Operating System',
  description: 'Transform scattered thoughts into autonomous execution. The complete AI-powered productivity system. One-time payment, lifetime access.',
  keywords: ['AI', 'productivity', 'automation', 'operating system', 'developer tools'],
  openGraph: {
    title: 'Jarvis OS — Your AI Operating System',
    description: 'Transform scattered thoughts into autonomous execution.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
