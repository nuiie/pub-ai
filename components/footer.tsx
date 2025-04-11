import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-5xl px-4">
        <div className="compact-footer flex flex-col items-center justify-center space-y-2 py-6 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/terms" className="text-sm hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm hover:underline">
              Privacy
            </Link>
            <Link href="/sitemap" className="text-sm hover:underline">
              Site Map
            </Link>
            <Link href="https://facebook.com" target="_blank" className="text-sm hover:underline">
              Facebook
            </Link>
            <Link href="https://line.me" target="_blank" className="text-sm hover:underline">
              Line
            </Link>
          </div>
          <div className="text-xs text-gray-500">
            <span>Company Registration No. 12345678</span> | <span>ISO 9001:2015 Certified</span>
          </div>
          <div className="text-xs text-gray-500">© {new Date().getFullYear()} Telecom Hardware Supply</div>
        </div>
      </div>
    </footer>
  )
}
