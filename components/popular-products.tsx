import Link from "next/link"

export function PopularProducts() {
  const products = [
    {
      id: "1001",
      name: "Galvanized Steel Pole",
      category: "Steel Poles",
      price: 1249.99,
      image: "/placeholder.svg?height=80&width=80&text=Steel Pole",
    },
    {
      id: "1002",
      name: "High-Tensile Bolt Set",
      category: "Bolts & Fasteners",
      price: 89.5,
      image: "/placeholder.svg?height=80&width=80&text=Bolt Set",
    },
    {
      id: "1003",
      name: "Preformed Guy Grip",
      category: "Guy Grips",
      price: 124.75,
      image: "/placeholder.svg?height=80&width=80&text=Guy Grip",
    },
    {
      id: "1004",
      name: "Copper Ground Rod",
      category: "Electrical",
      price: 67.99,
      image: "/placeholder.svg?height=80&width=80&text=Ground Rod",
    },
    {
      id: "1005",
      name: "Cable Fault Locator",
      category: "Testing Tools",
      price: 899.0,
      image: "/placeholder.svg?height=80&width=80&text=Fault Locator",
    },
    {
      id: "1006",
      name: "Concrete Manhole Cover",
      category: "Underground",
      price: 349.5,
      image: "/placeholder.svg?height=80&width=80&text=Manhole Cover",
    },
    {
      id: "1007",
      name: "Steel Cross Arm",
      category: "Steel Poles",
      price: 189.99,
      image: "/placeholder.svg?height=80&width=80&text=Cross Arm",
    },
    {
      id: "1008",
      name: "Fiber Optic Splice Kit",
      category: "Electrical",
      price: 245.0,
      image: "/placeholder.svg?height=80&width=80&text=Splice Kit",
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 md:gap-3">
      {products.slice(0, 8).map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.id}`}
          className="group flex flex-col border border-gray-200 bg-white p-2 transition-colors hover:bg-gray-50"
        >
          <div className="mb-1 flex justify-center">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="h-12 w-12 object-contain md:h-16 md:w-16"
            />
          </div>
          <div className="text-xs text-gray-500">{product.category}</div>
          <h3 className="text-xs font-medium line-clamp-2 md:text-sm">{product.name}</h3>
          <p className="text-xs font-semibold md:text-sm">${product.price.toFixed(2)}</p>
        </Link>
      ))}
    </div>
  )
}
