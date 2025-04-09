import Link from "next/link"

export function CategoryGrid() {
  const categories = [
    { id: "steel-poles", name: "Steel Poles", count: 42 },
    { id: "bolts-fasteners", name: "Bolts & Fasteners", count: 156 },
    { id: "guy-grips", name: "Preformed Guy Grips", count: 38 },
    { id: "electrical", name: "Electrical Accessories", count: 94 },
    { id: "testing-tools", name: "Testing Tools", count: 27 },
    { id: "underground", name: "Underground Manholes", count: 19 },
  ]

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/categories/${category.id}`}
          className="group bg-white transition-colors hover:bg-gray-100"
        >
          <div className="aspect-[4/3] border-b border-gray-200 bg-white p-4">
            <img
              src={`/placeholder.svg?height=200&width=300&text=${category.name}`}
              alt={category.name}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">{category.name}</h3>
            <p className="text-sm">{category.count} products</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
