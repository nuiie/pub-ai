import Link from "next/link"
import { SearchBar } from "@/components/search-bar"
import { ProductGallery } from "@/components/product-gallery"
import { ProductSpecs } from "@/components/product-specs"
import { AddToQuote } from "@/components/add-to-quote"
import { RelatedProducts } from "@/components/related-products"

export default function ProductPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch product data based on the ID
  const productId = params.id

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
          <Link href="/categories/steel-poles" className="text-sm hover:underline">
            Steel Poles
          </Link>
          {" > "}
          <span className="text-sm">Product #{productId}</span>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <ProductGallery />

          <div>
            <div className="mb-8">
              <h1 className="text-3xl font-semibold">Galvanized Steel Pole #{productId}</h1>
              <p className="mt-2 text-sm">SKU: GSP-{productId} | Stock: In Stock</p>

              <div className="mt-6 border-t border-gray-200 pt-6">
                <p className="text-3xl font-semibold">$1,249.99</p>
                <p className="text-sm">Price per unit | Bulk discounts available</p>
              </div>

              <AddToQuote />
            </div>

            <div className="mb-8">
              <h2 className="mb-4 text-xl font-semibold">Product Description</h2>
              <p className="leading-relaxed">
                Heavy-duty galvanized steel pole designed for telecommunications infrastructure. Engineered to withstand
                extreme weather conditions and provide long-term structural support for mounted equipment. Features
                pre-drilled mounting holes and reinforced base plate for secure installation. Hot-dip galvanized finish
                provides superior corrosion resistance for extended service life in outdoor environments.
              </p>
            </div>

            <ProductSpecs />
          </div>
        </div>

        <RelatedProducts />
      </div>
    </main>
  )
}
