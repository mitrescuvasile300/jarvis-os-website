export const metadata = {
  title: 'Jarvis OS — AI Operating System',
  description: 'The complete AI-powered operating system. One-time payment, lifetime access.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Jarvis OS — AI Operating System</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
