"use client"
import Link from "next/link"
import { Menu } from "lucide-react"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-xl font-semibold md:text-2xl">
            Telecom Hardware Supply
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
                  <Link href="/products" className="w-full">
                    Products
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about" className="w-full">
                    About Us
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/capabilities" className="w-full">
                    Capabilities
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/contact" className="w-full">
                    Contact
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="tel:084-766-2922" className="w-full">
                    084-766-2922
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link href="/products" className="text-sm hover:underline">
              Products
            </Link>
            <Link href="/about" className="text-sm hover:underline">
              About Us
            </Link>
            <Link href="/capabilities" className="text-sm hover:underline">
              Capabilities
            </Link>
            <Link href="/contact" className="text-sm hover:underline">
              Contact
            </Link>
            <Link href="tel:084-766-2922" className="text-sm hover:underline">
              084-766-2922
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
