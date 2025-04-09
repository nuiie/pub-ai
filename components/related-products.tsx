import Link from "next/link"

export function RelatedProducts() {
  const relatedProducts = [
    { id: "1007", name: "Steel Cross Arm", price: 189.99 },
    { id: "1013", name: "Mounting Hardware Kit", price: 45.5 },
    { id: "1014", name: "Pole Cap", price: 29.99 },
    { id: "1015", name: "Base Plate", price: 124.75 },
  ]

  return (
    <div className="mt-16 border-t border-gray-200 pt-8">
      <h2 className="mb-6 text-2xl font-semibold">Related Products</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {relatedProducts.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="group bg-white transition-colors hover:bg-gray-100"
          >
            <div className="aspect-square border-b border-gray-200 bg-white p-4">
              <img
                src={`/placeholder.svg?height=150&width=150&text=${product.name}`}
                alt={product.name}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="p-4">
              <h3 className="mb-2 text-base font-semibold">{product.name}</h3>
              <p className="font-semibold">${product.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
