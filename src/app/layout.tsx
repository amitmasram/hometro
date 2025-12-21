import type { ReactNode } from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hometro - Find or Sell Property Direct | No Brokers, Verified Owners",
  description:
    "Connect directly with property owners in Mumbai. No brokerage fees. Verified listings for flats, land, plots & commercial properties.",
  keywords: "property, real estate, Mumbai, no broker, direct owner, flats, land, plots, commercial",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Hometro - Direct Property Deals",
    description: "Find or sell property directly with verified owners. No brokers, no hassle.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
