import Link from "next/link"

export function RelatedProducts() {
  const relatedProducts = [
    { id: "1007", name: "Steel Cross Arm", price: 189.99 },
    { id: "1013", name: "Mounting Hardware Kit", price: 45.5 },
    { id: "1014", name: "Pole Cap", price: 29.99 },
    { id: "1015", name: "Base Plate", price: 124.75 },
  ]

  return (
    <div className="mt-10 border-t border-gray-200 pt-6 md:mt-16 md:pt-8">
      <h2 className="mb-4 text-xl font-semibold md:mb-6 md:text-2xl">Related Products</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
        {relatedProducts.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="group bg-white transition-colors hover:bg-gray-100"
          >
            <div className="aspect-square border-b border-gray-200 bg-white p-2 md:p-4">
              <img
                src={`/placeholder.svg?height=150&width=150&text=${product.name}`}
                alt={product.name}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="p-2 md:p-4">
              <h3 className="mb-1 text-xs font-semibold md:mb-2 md:text-base">{product.name}</h3>
              <p className="text-xs font-semibold md:text-base">${product.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
