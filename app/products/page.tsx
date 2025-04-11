import { ProductFilters } from "@/components/product-filters"
import { ProductList } from "@/components/product-list"
import { Pagination } from "@/components/pagination"

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white py-8">
      <div className="mb-6 border-b border-gray-200 pb-4">
        <h2 className="text-2xl font-semibold">All Products</h2>
      </div>

      {/* Filters section - now above products */}
      <ProductFilters />

      {/* Full-width product grid */}
      <ProductList />

      <Pagination />
    </main>
  )
}
