import { CategorySection } from "@/components/category-section"
import { PopularProducts } from "@/components/popular-products"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white py-8">
      <section className="mb-12">
        <CategorySection />
      </section>

      <section className="mb-12">
        <h2 className="mb-6 border-b border-gray-300 pb-2 text-xl font-semibold">Popular Products</h2>
        <PopularProducts />
      </section>
    </main>
  )
}
