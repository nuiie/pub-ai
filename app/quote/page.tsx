"use client"

import Link from "next/link"
import { SearchBar } from "@/components/search-bar"
import { QuoteTable } from "@/components/quote-table"
import { QuoteForm } from "@/components/quote-form"

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <SearchBar />
        </div>

        <div className="mb-6">
          <Link href="/" className="text-sm hover:underline">
            Home
          </Link>
          {" > "}
          <span className="text-sm">Request for Quote</span>
        </div>

        <section className="mb-12">
          <h2 className="mb-8 text-3xl font-semibold">Your Quote Request</h2>

          <QuoteTable />

          <div className="mt-8 flex justify-between">
            <Link href="/products" className="border border-gray-200 px-4 py-2 text-sm hover:bg-gray-100">
              Continue Shopping
            </Link>
            <button
              className="bg-black px-4 py-2 text-sm text-white hover:bg-gray-800"
              onClick={() => alert("Quote cleared")}
            >
              Clear Quote
            </button>
          </div>
        </section>

        <section>
          <h2 className="mb-8 text-3xl font-semibold">Submit Quote Request</h2>
          <QuoteForm />
        </section>
      </div>
    </main>
  )
}
