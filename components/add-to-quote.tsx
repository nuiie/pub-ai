"use client"

import { useState } from "react"

export function AddToQuote() {
  const [quantity, setQuantity] = useState(1)

  const increment = () => setQuantity((prev) => prev + 1)
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  return (
    <div className="mt-6 border-t border-gray-200 pt-6">
      <div className="flex items-center gap-4">
        <div className="text-sm">Quantity:</div>
        <div className="flex">
          <button
            onClick={decrement}
            className="border border-gray-200 border-r-0 bg-white px-3 py-1 text-xl hover:bg-gray-100"
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
            className="border border-gray-200 border-l-0 bg-white px-3 py-1 text-xl hover:bg-gray-100"
          >
            +
          </button>
        </div>
      </div>

      <button className="mt-6 w-full bg-black p-3 text-sm text-white hover:bg-gray-800">Add to Quote</button>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <a href="#" className="border border-gray-200 bg-white p-2 text-center text-xs hover:bg-gray-100">
          Download Specs
        </a>
        <a href="#" className="border border-gray-200 bg-white p-2 text-center text-xs hover:bg-gray-100">
          Request Custom Quote
        </a>
      </div>
    </div>
  )
}
