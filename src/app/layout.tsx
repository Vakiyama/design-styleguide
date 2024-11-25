import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const NotoSans = localFont({
  src: './fonts/NotoSans.ttf',
  variable: '--font-noto-sans',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Pathfinder Styleguide',
  description: 'Styleguide for Pathfinder by Allison, Christine, Vitor',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${NotoSans.variable} antialiased flex flex-col items-center justify-center bg-card text-black font-[family-name:var(--font-noto-sans)]`}
      >
        <main className="bg-card w-full">{children}</main>
      </body>
    </html>
  );
}
