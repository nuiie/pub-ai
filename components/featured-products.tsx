import Link from "next/link"

export function FeaturedProducts() {
  const products = [
    { id: "1001", name: "Galvanized Steel Pole", category: "Steel Poles", price: 1249.99 },
    { id: "1002", name: "High-Tensile Bolt Set", category: "Bolts & Fasteners", price: 89.5 },
    { id: "1003", name: "Preformed Guy Grip", category: "Guy Grips", price: 124.75 },
    { id: "1004", name: "Copper Ground Rod", category: "Electrical", price: 67.99 },
    { id: "1005", name: "Cable Fault Locator", category: "Testing Tools", price: 899.0 },
    { id: "1006", name: "Concrete Manhole Cover", category: "Underground", price: 349.5 },
    { id: "1007", name: "Steel Cross Arm", category: "Steel Poles", price: 189.99 },
    { id: "1008", name: "Fiber Optic Splice Kit", category: "Electrical", price: 245.0 },
  ]

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
            <p className="mb-3 text-lg font-semibold">${product.price.toFixed(2)}</p>
            <div className="text-xs">
              <span className="border-b border-gray-400 pb-1 group-hover:text-gray-700">View details</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
