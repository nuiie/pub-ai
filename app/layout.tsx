import type React from "react"
import type { Metadata } from "next"
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
        {children}
        <footer className="border-t border-gray-200 bg-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              <div>
                <h3 className="mb-4 font-semibold">Telecom Hardware Supply</h3>
                <p className="text-sm">
                  ISO 9001:2015 Certified
                  <br />
                  Established 1995
                  <br />
                  Made in USA
                </p>
              </div>

              <div>
                <h3 className="mb-4 font-semibold">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="/about" className="hover:underline">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/categories" className="hover:underline">
                      Product Categories
                    </a>
                  </li>
                  <li>
                    <a href="/quote" className="hover:underline">
                      Request a Quote
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="hover:underline">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 font-semibold">Contact</h3>
                <ul className="space-y-2 text-sm">
                  <li>1-800-555-HARDWARE</li>
                  <li>sales@telecomhardware.com</li>
                  <li>123 Industrial Parkway</li>
                  <li>Anytown, USA 12345</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 font-semibold">Certifications</h3>
                <ul className="space-y-2 text-sm">
                  <li>ISO 9001:2015</li>
                  <li>ASTM International</li>
                  <li>AASHTO Certified</li>
                  <li>UL Listed Components</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8 text-center text-xs">
              © {new Date().getFullYear()} Telecom Hardware Supply. All rights reserved.
              <div className="mt-2">
                <a href="/terms" className="mx-2 hover:underline">
                  Terms & Conditions
                </a>
                <a href="/privacy" className="mx-2 hover:underline">
                  Privacy Policy
                </a>
                <a href="/sitemap" className="mx-2 hover:underline">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}


import './globals.css'