"use client"

import { useState } from "react"

export function AddToCartForm() {
  const [quantity, setQuantity] = useState(1)

  const increment = () => setQuantity((prev) => prev + 1)
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  return (
    <div className="mt-4 border-t border-gray-200 pt-4 md:mt-6 md:pt-6">
      <div className="flex items-center gap-2 md:gap-4">
        <div className="text-xs text-gray-500 md:text-sm">QUANTITY:</div>
        <div className="flex">
          <button
            onClick={decrement}
            className="border border-gray-200 border-r-0 bg-white px-2 py-1 text-lg text-gray-400 hover:text-black md:px-3"
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
            className="w-12 border-y border-gray-200 bg-white px-1 py-1 text-center text-sm focus:outline-none md:w-16 md:px-2"
          />
          <button
            onClick={increment}
            className="border border-gray-200 border-l-0 bg-white px-2 py-1 text-lg text-gray-400 hover:text-black md:px-3"
          >
            +
          </button>
        </div>
      </div>

      <button className="mt-4 w-full bg-black p-2 text-xs font-light text-white hover:bg-gray-900 md:mt-6 md:p-3 md:text-sm">
        ADD TO CART
      </button>

      <div className="mt-3 grid grid-cols-2 gap-2 md:mt-4 md:gap-4">
        <button className="border border-gray-200 bg-white p-1 text-xs text-gray-500 hover:text-black md:p-2">
          ADD TO LIST
        </button>
        <button className="border border-gray-200 bg-white p-1 text-xs text-gray-500 hover:text-black md:p-2">
          PRINT SPECS
        </button>
      </div>
    </div>
  )
}
