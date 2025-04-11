"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="flex items-baseline justify-between py-4">
          <Link href="/" className="flex items-baseline gap-3">
            <span className="text-xl font-bold tracking-tight md:text-2xl">P.U.B.</span>
            <span className="hidden text-lg font-medium text-gray-700 md:block">
              Telecom & Electrical Hardware Supply
            </span>
          </Link>

          {/* Mobile menu with shadcn dropdown */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/products" className={`w-full ${isActive("/products") ? "underline" : ""}`}>
                    Products
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about" className={`w-full ${isActive("/about") ? "underline" : ""}`}>
                    About Us
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/capabilities" className={`w-full ${isActive("/capabilities") ? "underline" : ""}`}>
                    Capabilities
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/contact" className={`w-full ${isActive("/contact") ? "underline" : ""}`}>
                    Contact
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/quote" className={`w-full ${isActive("/quote") ? "underline" : ""}`}>
                    View Quote (0)
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-baseline md:space-x-6">
            <Link href="/products" className={`text-sm hover:underline ${isActive("/products") ? "underline" : ""}`}>
              Products
            </Link>
            <Link href="/about" className={`text-sm hover:underline ${isActive("/about") ? "underline" : ""}`}>
              About Us
            </Link>
            <Link
              href="/capabilities"
              className={`text-sm hover:underline ${isActive("/capabilities") ? "underline" : ""}`}
            >
              Capabilities
            </Link>
            <Link href="/contact" className={`text-sm hover:underline ${isActive("/contact") ? "underline" : ""}`}>
              Contact
            </Link>
            <Link href="/quote" className={`text-sm hover:underline ${isActive("/quote") ? "underline" : ""}`}>
              View Quote (0)
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
