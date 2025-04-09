import Link from "next/link"

// Mock product data
const products = [
  { id: "1001", name: "Steel Bolt", category: "Fasteners", price: 24.99 },
  { id: "1002", name: "Hex Nut", category: "Fasteners", price: 12.5 },
  { id: "1003", name: "Aluminum Sheet", category: "Raw Materials", price: 89.99 },
  { id: "1004", name: "Copper Wire", category: "Electrical", price: 34.75 },
  { id: "1005", name: "Hydraulic Valve", category: "Fluid Control", price: 129.99 },
  { id: "1006", name: "Bearing Assembly", category: "Mechanical", price: 45.0 },
  { id: "1007", name: "Carbon Steel Pipe", category: "Piping", price: 67.25 },
  { id: "1008", name: "Circuit Breaker", category: "Electrical", price: 78.5 },
]

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <Link key={product.id} href={`/product/${product.id}`} className="group block bg-white transition-colors">
          <div className="aspect-square bg-white p-4">
            <img
              src="/placeholder.svg?height=200&width=200"
              alt={product.name}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="p-2">
            <div className="mb-1 inline-block text-xs text-gray-500">{product.category}</div>
            <h3 className="text-lg font-light uppercase">{product.name}</h3>
            <p className="text-xl font-light">${product.price.toFixed(2)}</p>
            <div className="mt-4 py-2 text-sm text-gray-500 group-hover:text-black">VIEW DETAILS →</div>
          </div>
        </Link>
      ))}
    </div>
  )
}
