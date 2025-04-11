"use client"

import { useState } from "react"
import Link from "next/link"
import { Search } from "lucide-react"

export function ProductFilters() {
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false)
  const [activeCategory, setActiveCategory] = useState("Structural components")

  const categories = [
    "All products", 
    "Structural components",
    "Fasteners & hardware",
    "Electrical components",
    "Tools & equipment",
    "Underground infrastructure",
  ]

  return (
    <div className="mb-6 w-full">
      {/* Main category filters - always visible */}
      <div className="mb-4 border-b border-gray-200 pb-4">
        <div className="flex flex-wrap gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              href="#"
              className={`text-sm hover:underline ${activeCategory === category ? "underline" : ""}`}
              onClick={(e) => {
                e.preventDefault()
                setActiveCategory(category)
              }}
            >
              {category}
            </Link>
          ))}
        </div>
      </div>

      {/* Basic filters row - restructured */}
      <div className="flex flex-wrap items-center gap-4">
        {/* Search bar takes all available space */}
        <div className="flex flex-1 items-center border border-gray-200">
          <input
            type="text"
            placeholder="Search products"
            className="w-full bg-white p-1 text-xs focus:outline-none md:p-2 md:text-sm"
          />
          <button className="border-l border-gray-200 bg-white p-1 md:p-2">
            <Search className="h-4 w-4" />
          </button>
        </div>

        {/* Right-aligned controls */}
        <div className="flex items-center gap-4">
          <select className="border border-gray-200 bg-white p-1 text-xs md:p-2 md:text-sm">
            <option>Sort: Relevance</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Name: A-Z</option>
          </select>

          <button
            onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
            className="border border-gray-200 bg-white p-1 text-xs uppercase hover:bg-gray-100 md:p-2 md:text-sm"
          >
            {showAdvancedFilters ? "- HIDE FILTERS" : "+ MORE FILTERS"}
          </button>
        </div>
      </div>

      {/* Advanced filters - only shown when toggled */}
      {showAdvancedFilters && (
        <div className="mt-4 grid grid-cols-2 gap-4 border-t border-gray-200 pt-4 md:grid-cols-4">
          <div>
            <h4 className="mb-2 text-xs font-bold uppercase md:text-sm">Material</h4>
            <div className="space-y-1">
              {["Galvanized Steel", "Stainless Steel", "Aluminum", "Copper", "Concrete"].map((material, i) => (
                <label key={i} className="flex items-center">
                  <input type="checkbox" className="mr-1 h-3 w-3" />
                  <span className="text-xs">{material}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-2 text-xs font-bold uppercase md:text-sm">Price Range</h4>
            <div className="space-y-1">
              {["Under $100", "$100-$500", "$500-$1000", "Over $1000"].map((price, i) => (
                <label key={i} className="flex items-center">
                  <input type="checkbox" className="mr-1 h-3 w-3" />
                  <span className="text-xs">{price}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-2 text-xs font-bold uppercase md:text-sm">Availability</h4>
            <div className="space-y-1">
              {["In Stock", "Ships in 1-3 days", "Ships in 3-7 days", "Special Order"].map((availability, i) => (
                <label key={i} className="flex items-center">
                  <input type="checkbox" className="mr-1 h-3 w-3" />
                  <span className="text-xs">{availability}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-2 text-xs font-bold uppercase md:text-sm">Standards</h4>
            <div className="space-y-1">
              {["ASTM", "ANSI", "ISO", "IEEE", "UL Listed"].map((standard, i) => (
                <label key={i} className="flex items-center">
                  <input type="checkbox" className="mr-1 h-3 w-3" />
                  <span className="text-xs">{standard}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
