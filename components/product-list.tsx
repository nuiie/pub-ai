import Link from "next/link"

export function ProductList() {
  const products = [
    { id: "1001", name: "Galvanized Steel Pole", category: "Steel Poles", price: 1249.99, stock: "In Stock" },
    { id: "1002", name: "High-Tensile Bolt Set", category: "Bolts & Fasteners", price: 89.5, stock: "In Stock" },
    { id: "1003", name: "Preformed Guy Grip", category: "Guy Grips", price: 124.75, stock: "In Stock" },
    { id: "1004", name: "Copper Ground Rod", category: "Electrical", price: 67.99, stock: "In Stock" },
    { id: "1005", name: "Cable Fault Locator", category: "Testing Tools", price: 899.0, stock: "Ships in 3-7 days" },
    { id: "1006", name: "Concrete Manhole Cover", category: "Underground", price: 349.5, stock: "In Stock" },
    { id: "1007", name: "Steel Cross Arm", category: "Steel Poles", price: 189.99, stock: "In Stock" },
    { id: "1008", name: "Fiber Optic Splice Kit", category: "Electrical", price: 245.0, stock: "Ships in 1-3 days" },
    { id: "1009", name: "Heavy Duty Anchor", category: "Anchors", price: 178.25, stock: "In Stock" },
    { id: "1010", name: "Insulator Assembly", category: "Insulators", price: 56.75, stock: "In Stock" },
    { id: "1011", name: "Grounding Kit", category: "Grounding", price: 112.99, stock: "In Stock" },
    { id: "1012", name: "Junction Box", category: "Junction Boxes", price: 89.99, stock: "In Stock" },
  ]

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.id}`}
          className="group bg-white transition-colors hover:bg-gray-100"
        >
          <div className="aspect-square border-b border-gray-200 bg-white p-4">
            <img
              src={`/placeholder.svg?height=200&width=200&text=${product.name}`}
              alt={product.name}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="p-4">
            <div className="mb-1 text-xs">{product.category}</div>
            <h3 className="mb-2 text-base font-semibold">{product.name}</h3>
            <p className="mb-2 text-lg font-semibold">${product.price.toFixed(2)}</p>
            <p className="mb-3 text-xs">{product.stock}</p>
            <div className="text-xs">
              <span className="border-b border-gray-400 pb-1 group-hover:text-gray-700">View details</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
