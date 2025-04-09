export function ProductFilters() {
  const filters = [
    {
      name: "Category",
      options: ["Steel Poles", "Bolts & Fasteners", "Guy Grips", "Electrical", "Testing Tools", "Underground"],
    },
    {
      name: "Material",
      options: ["Galvanized Steel", "Stainless Steel", "Aluminum", "Copper", "Concrete", "Composite"],
    },
    {
      name: "Price Range",
      options: ["Under $100", "$100-$500", "$500-$1000", "Over $1000"],
    },
    {
      name: "Availability",
      options: ["In Stock", "Ships in 1-3 days", "Ships in 3-7 days", "Special Order"],
    },
  ]

  return (
    <div className="w-full lg:w-64">
      <div className="mb-6 border-b border-gray-200 pb-4">
        <h3 className="text-xl font-semibold">Filters</h3>
      </div>

      <div className="space-y-6">
        {filters.map((filter, index) => (
          <div key={index} className="border-b border-gray-200 pb-6">
            <h4 className="mb-3 font-semibold">{filter.name}</h4>
            <ul className="space-y-2">
              {filter.options.map((option, optIndex) => (
                <li key={optIndex} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`${filter.name}-${optIndex}`}
                    className="mr-2 h-4 w-4 border border-gray-300"
                  />
                  <label htmlFor={`${filter.name}-${optIndex}`} className="text-sm">
                    {option}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <button className="mt-6 w-full bg-black px-4 py-2 text-sm text-white hover:bg-gray-800">Apply Filters</button>
      <button className="mt-3 w-full border border-gray-200 px-4 py-2 text-sm hover:bg-gray-100">Clear All</button>
    </div>
  )
}
