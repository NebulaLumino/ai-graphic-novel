import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Graphic Novel',
  description: 'Design graphic novel concepts with genre, audience, tone, and visual style.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
