import Link from "next/link"
import { SearchBar } from "@/components/search-bar"
import { CategoryGrid } from "@/components/category-grid"
import { FeaturedProducts } from "@/components/featured-products"
import { TrustIndicators } from "@/components/trust-indicators"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Update header section */}
        <header className="mb-8 border-b border-gray-200 pb-4">
          <div className="flex flex-col justify-between md:flex-row md:items-center">
            <h1 className="text-4xl font-semibold tracking-tight">Telecom Hardware Supply</h1>
            <p className="text-sm">ISO 9001:2015 Certified | Govt. Approved</p>
          </div>
          <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center">
            <SearchBar />
            <Link href="/quote" className="whitespace-nowrap bg-black px-4 py-2 text-sm text-white hover:bg-gray-800">
              View Quote (0)
            </Link>
          </div>
        </header>

        {/* Update hero section */}
        <section className="mb-12">
          <div className="aspect-[21/9] w-full bg-gray-100">
            <div className="flex h-full flex-col items-start justify-center p-8 md:p-16">
              <h2 className="mb-4 text-4xl font-semibold md:text-5xl">Industrial Grade Hardware</h2>
              <p className="mb-8 max-w-2xl text-lg">
                Galvanized steel and electrical components for telecommunications infrastructure. Built to withstand
                extreme conditions.
              </p>
              <Link href="/categories" className="bg-black px-6 py-3 text-sm text-white hover:bg-gray-800">
                Browse Catalog
              </Link>
            </div>
          </div>
        </section>

        {/* Update section headings and links */}
        <section className="mb-16">
          <div className="mb-4 flex items-baseline justify-between">
            <h2 className="text-2xl font-semibold">Product Categories</h2>
            <Link href="/categories" className="text-sm hover:underline">
              View all
            </Link>
          </div>
          <CategoryGrid />
        </section>

        <section className="mb-16">
          <div className="mb-4 flex items-baseline justify-between">
            <h2 className="text-2xl font-semibold">Featured Products</h2>
            <Link href="/products" className="text-sm hover:underline">
              View all
            </Link>
          </div>
          <FeaturedProducts />
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold">Why Choose Us</h2>
          <TrustIndicators />
        </section>
      </div>
    </main>
  )
}
