export function CategoryNav() {
  const categories = [
    "FASTENERS",
    "RAW MATERIALS",
    "ELECTRICAL",
    "FLUID CONTROL",
    "MECHANICAL",
    "PIPING",
    "TOOLS",
    "SAFETY EQUIPMENT",
  ]

  return (
    <div className="w-full md:w-56">
      <h2 className="mb-4 text-lg font-light uppercase">Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="mb-3">
            <a href="#" className="text-gray-500 hover:text-black">
              {category}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
