export const metadata = {
  title: 'Jarvis OS',
  description: 'AI Operating System',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
