import Link from "next/link"
import { SearchBar } from "@/components/search-bar"
import { AllCategories } from "@/components/all-categories"

export default function CategoriesPage() {
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
          <span className="text-sm">Categories</span>
        </div>

        <section>
          <h2 className="mb-8 text-3xl font-semibold">All Product Categories</h2>
          <AllCategories />
        </section>
      </div>
    </main>
  )
}
