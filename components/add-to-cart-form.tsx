"use client"

import { useState } from "react"

export function AddToCartForm() {
  const [quantity, setQuantity] = useState(1)

  const increment = () => setQuantity((prev) => prev + 1)
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  return (
    <div className="mt-6 border-t border-gray-200 pt-6">
      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-500">QUANTITY:</div>
        <div className="flex">
          <button
            onClick={decrement}
            className="border border-gray-200 border-r-0 bg-white px-3 py-1 text-xl text-gray-400 hover:text-black"
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
            className="w-16 border-y border-gray-200 bg-white px-2 py-1 text-center focus:outline-none"
          />
          <button
            onClick={increment}
            className="border border-gray-200 border-l-0 bg-white px-3 py-1 text-xl text-gray-400 hover:text-black"
          >
            +
          </button>
        </div>
      </div>

      <button className="mt-6 w-full bg-black p-3 text-sm font-light text-white hover:bg-gray-900">ADD TO CART</button>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <button className="border border-gray-200 bg-white p-2 text-xs text-gray-500 hover:text-black">
          ADD TO LIST
        </button>
        <button className="border border-gray-200 bg-white p-2 text-xs text-gray-500 hover:text-black">
          PRINT SPECS
        </button>
      </div>
    </div>
  )
}
