import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TaxTrack — Freelancer Tax Writeoff Tracker',
  description: 'Track business expenses for tax writeoffs automatically. Connect your bank, categorize expenses, generate tax-ready reports.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3f351438-874c-48e8-b111-d6cc141b19d0"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
