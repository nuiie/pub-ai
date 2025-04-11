import { AllCategories } from "@/components/all-categories"

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-white py-8">
      <section>
        <h2 className="mb-8 text-3xl font-semibold">All Product Categories</h2>
        <AllCategories />
      </section>
    </main>
  )
}
