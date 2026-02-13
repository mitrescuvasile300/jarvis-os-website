import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Jarvis OS — Your AI Operating System',
    template: '%s | Jarvis OS',
  },
  description: 'Transform scattered thoughts into autonomous execution. Install your personal AI operating system — $29 one-time, lifetime access. No subscription.',
  keywords: ['AI', 'AI agent', 'AI operating system', 'productivity', 'automation', 'developer tools', 'AI assistant', 'autonomous AI'],
  metadataBase: new URL('https://jarvis-os-website.vercel.app'),
  openGraph: {
    title: 'Jarvis OS — Your AI Operating System',
    description: 'Install your personal AI operating system. $29 one-time, lifetime access. AI agents with persistent memory and autonomous execution.',
    type: 'website',
    siteName: 'Jarvis OS',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jarvis OS — Your AI Operating System',
    description: 'Install your personal AI operating system. $29 one-time, lifetime access.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Jarvis OS',
              applicationCategory: 'DeveloperApplication',
              operatingSystem: 'macOS, Linux, Windows',
              description: 'Your personal AI operating system with persistent memory, autonomous execution, and AI agent orchestration.',
              offers: {
                '@type': 'Offer',
                price: '29',
                priceCurrency: 'USD',
                availability: 'https://schema.org/PreOrder',
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-slate-950 text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
