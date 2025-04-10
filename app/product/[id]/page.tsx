import Link from "next/link"
import { ProductSpecs } from "@/components/product-specs"
import { RelatedProducts } from "@/components/related-products"
import { AddToCartForm } from "@/components/add-to-cart-form"

export default function ProductPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch product data based on the ID
  const productId = params.id

  return (
    <main className="min-h-screen bg-white py-8">
      <header className="mb-8 border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-light tracking-tight md:text-4xl">INDUSTRIAL SUPPLY CO.</h1>
        <p className="text-xs font-light text-gray-500 md:text-sm">EST. 2023 | RAW MATERIALS & COMPONENTS</p>
      </header>

      <div className="mb-6 text-xs text-gray-500 md:text-sm">
        <Link href="/" className="hover:text-black">
          HOME
        </Link>{" "}
        &gt;
        <Link href="/category/fasteners" className="hover:text-black">
          {" "}
          FASTENERS
        </Link>{" "}
        &gt;
        <span className="text-black"> PRODUCT #{productId}</span>
      </div>

      <div className="grid grid-cols-1 gap-8 md:gap-12">
        <div>
          <div className="aspect-square bg-white p-4 md:p-8">
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="High-Strength Steel Bolt"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-2 md:mt-6 md:gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-white p-1 md:p-2">
                <img
                  src="/placeholder.svg?height=80&width=80"
                  alt={`Product view ${i}`}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-6 md:mb-8">
            <h1 className="text-xl font-light uppercase md:text-2xl">High-Strength Steel Bolt #{productId}</h1>
            <p className="mt-1 text-xs text-gray-500 md:mt-2 md:text-sm">SKU: HSB-{productId}-X | STOCK: IN STOCK</p>

            <div className="mt-4 border-t border-gray-200 pt-4 md:mt-6 md:pt-6">
              <p className="text-2xl font-light md:text-3xl">$24.99</p>
              <p className="text-xs text-gray-500 md:text-sm">PRICE PER UNIT | BULK DISCOUNTS AVAILABLE</p>
            </div>

            <AddToCartForm />
          </div>

          <div className="mb-6 md:mb-8">
            <h2 className="text-lg font-light uppercase md:text-xl">Product Description</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 md:mt-4">
              High-strength steel bolt designed for industrial applications requiring maximum tensile strength and
              durability. Manufactured to precise specifications with heat-treated alloy steel. Resistant to corrosion
              and suitable for high-stress environments.
            </p>
          </div>

          <ProductSpecs />
        </div>
      </div>

      <RelatedProducts />
    </main>
  )
}
