import React from "react"
import type { Metadata } from 'next'
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const instrumentSans = Instrument_Sans({ 
  subsets: ["latin"],
  variable: '--font-instrument'
});

const instrumentSerif = Instrument_Serif({ 
  subsets: ["latin"],
  weight: "400",
  variable: '--font-instrument-serif'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

export const metadata: Metadata = {
  title: 'CharlseEmpire Tech - African Tech Innovation',
  description: 'Building the future of African technology with groundbreaking fintech, lending, and AI solutions. CharlseEmpire Pay, Njangi Platform, and AI-powered innovation.',
}

const themeInitScript = `
(() => {
  try {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
    const root = document.documentElement;
    root.classList.toggle('dark', shouldUseDark);
    root.style.colorScheme = shouldUseDark ? 'dark' : 'light';
  } catch {
    // Ignore errors and keep default theme.
  }
})();
`;

/**
 * The root layout component for the app.
 * It sets up the font, background, and analytics.
 *
 * @param {React.ReactNode} children - The children of the component.
 * @returns {JSX.Element} - The root layout component.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
