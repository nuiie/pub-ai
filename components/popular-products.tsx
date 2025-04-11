import Link from "next/link"

export function PopularProducts() {
  const products = [
    {
      id: "1001",
      name: "Galvanized Steel Pole",
      category: "Steel Poles",
      price: 1249.99,
      image: "/placeholder.svg?height=150&width=150&text=Steel Pole",
    },
    {
      id: "1002",
      name: "High-Tensile Bolt Set",
      category: "Bolts & Fasteners",
      price: 89.5,
      image: "/placeholder.svg?height=150&width=150&text=Bolt Set",
    },
    {
      id: "1003",
      name: "Preformed Guy Grip",
      category: "Guy Grips",
      price: 124.75,
      image: "/placeholder.svg?height=150&width=150&text=Guy Grip",
    },
    {
      id: "1004",
      name: "Copper Ground Rod",
      category: "Electrical",
      price: 67.99,
      image: "/placeholder.svg?height=150&width=150&text=Ground Rod",
    },
    {
      id: "1005",
      name: "Cable Fault Locator",
      category: "Testing Tools",
      price: 899.0,
      image: "/placeholder.svg?height=150&width=150&text=Fault Locator",
    },
    {
      id: "1006",
      name: "Concrete Manhole Cover",
      category: "Underground",
      price: 349.5,
      image: "/placeholder.svg?height=150&width=150&text=Manhole Cover",
    },
    {
      id: "1007",
      name: "Steel Cross Arm",
      category: "Steel Poles",
      price: 189.99,
      image: "/placeholder.svg?height=150&width=150&text=Cross Arm",
    },
    {
      id: "1008",
      name: "Fiber Optic Splice Kit",
      category: "Electrical",
      price: 245.0,
      image: "/placeholder.svg?height=150&width=150&text=Splice Kit",
    },
    {
      id: "1009",
      name: "Heavy Duty Anchor",
      category: "Anchors",
      price: 178.25,
      image: "/placeholder.svg?height=150&width=150&text=Anchor",
    },
    {
      id: "1010",
      name: "Insulator Assembly",
      category: "Insulators",
      price: 56.75,
      image: "/placeholder.svg?height=150&width=150&text=Insulator",
    },
    {
      id: "1011",
      name: "Grounding Kit",
      category: "Grounding",
      price: 112.99,
      image: "/placeholder.svg?height=150&width=150&text=Grounding",
    },
    {
      id: "1012",
      name: "Junction Box",
      category: "Junction Boxes",
      price: 89.99,
      image: "/placeholder.svg?height=150&width=150&text=Junction",
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {products.slice(0, 12).map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.id}`}
          className="group flex flex-col border border-gray-200 bg-white transition-colors hover:bg-gray-50"
        >
          <div className="aspect-[4/3] p-1">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="p-2">
            <div className="text-xs text-gray-500">{product.category}</div>
            <h3 className="text-xs font-medium line-clamp-2">{product.name}</h3>
            <p className="text-xs font-semibold">${product.price.toFixed(2)}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
