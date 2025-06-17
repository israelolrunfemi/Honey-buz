import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Golden Hive - Premium Honey Products",
  description:
    "Discover the finest collection of organic, raw, and medicinal honey products. Ethically sourced from sustainable beekeepers worldwide.",
  keywords: "honey, organic honey, raw honey, medicinal honey, natural sweetener, bee products",
  authors: [{ name: "Golden Hive" }],
  openGraph: {
    title: "Golden Hive - Premium Honey Products",
    description: "Discover the finest collection of organic, raw, and medicinal honey products.",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
          {children}
       
      </body>
    </html>
  )
}
