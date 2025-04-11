"use client"

import { QuoteTable } from "@/components/quote-table"
import { QuoteForm } from "@/components/quote-form"

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-white py-8">
      <section className="mb-12">
        <h2 className="mb-8 text-3xl font-semibold">Your Quote Request</h2>

        <QuoteTable />
      </section>

      <section>
        <h2 className="mb-8 text-3xl font-semibold">Submit Quote Request</h2>
        <QuoteForm />
      </section>
    </main>
  )
}
