import type React from "react"
import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import "./globals.css"

export const metadata: Metadata = {
  title: "Telecom Hardware Supply - Industrial Grade Components",
  description: "High-quality galvanized steel and electrical hardware for telecommunications infrastructure",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="mx-auto max-w-3xl px-4">{children}</div>
        <Footer />
      </body>
    </html>
  )
}


import './globals.css'