"use client"

import { useState } from "react"

export function QuoteTable() {
  const [quoteItems, setQuoteItems] = useState([
    { id: "1001", name: "Galvanized Steel Pole", price: 1249.99, quantity: 2 },
    { id: "1002", name: "High-Tensile Bolt Set", price: 89.5, quantity: 10 },
    { id: "1007", name: "Steel Cross Arm", price: 189.99, quantity: 4 },
  ])

  const updateQuantity = (id: string, quantity: number) => {
    setQuoteItems(quoteItems.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item)))
  }

  const removeItem = (id: string) => {
    setQuoteItems(quoteItems.filter((item) => item.id !== id))
  }

  const total = quoteItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="border border-gray-200">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-100">
            <th className="p-3 text-left text-sm font-semibold">Product</th>
            <th className="p-3 text-left text-sm font-semibold">Unit Price</th>
            <th className="p-3 text-left text-sm font-semibold">Quantity</th>
            <th className="p-3 text-left text-sm font-semibold">Total</th>
            <th className="p-3 text-left text-sm font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {quoteItems.length > 0 ? (
            quoteItems.map((item, index) => (
              <tr key={item.id} className={index !== quoteItems.length - 1 ? "border-b border-gray-200" : ""}>
                <td className="p-3 text-sm">{item.name}</td>
                <td className="p-3 text-sm">${item.price.toFixed(2)}</td>
                <td className="p-3">
                  <div className="flex w-24">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="border border-gray-200 border-r-0 bg-white px-2 py-1 text-sm hover:bg-gray-100"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value) || 1)}
                      className="w-10 border-y border-gray-200 bg-white px-1 py-1 text-center text-sm focus:outline-none"
                    />
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="border border-gray-200 border-l-0 bg-white px-2 py-1 text-sm hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="p-3 text-sm">${(item.price * item.quantity).toFixed(2)}</td>
                <td className="p-3">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="border border-gray-200 px-2 py-1 text-xs hover:bg-gray-100"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="p-8 text-center">
                Your quote is empty. Browse products to add items.
              </td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr className="border-t border-gray-200 bg-gray-100">
            <td colSpan={3} className="p-3 text-right text-sm font-semibold">
              Total:
            </td>
            <td className="p-3 text-sm font-semibold">${total.toFixed(2)}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
