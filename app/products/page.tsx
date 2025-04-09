import Link from "next/link"
import { SearchBar } from "@/components/search-bar"
import { ProductFilters } from "@/components/product-filters"
import { ProductList } from "@/components/product-list"
import { Pagination } from "@/components/pagination"

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
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

        <div className="mb-6">
          <Link href="/" className="text-sm hover:underline">
            Home
          </Link>
          {" > "}
          <span className="text-sm">All Products</span>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <ProductFilters />

          <div className="flex-1">
            <div className="mb-6 flex flex-col justify-between gap-4 border-b border-gray-200 pb-4 md:flex-row md:items-center">
              <h2 className="text-2xl font-semibold">All Products</h2>
              <div className="flex items-center gap-4">
                <span className="text-sm">Sort by:</span>
                <select className="border border-gray-200 bg-white px-2 py-1 text-sm">
                  <option>Relevance</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Name: A-Z</option>
                </select>
              </div>
            </div>

            <ProductList />
            <Pagination />
          </div>
        </div>
      </div>
    </main>
  )
}
