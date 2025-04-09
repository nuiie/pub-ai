import Link from "next/link"

export function AllCategories() {
  const mainCategories = [
    {
      name: "Structural Components",
      subcategories: [
        { id: "steel-poles", name: "Steel Poles", count: 42 },
        { id: "cross-arms", name: "Cross Arms", count: 28 },
        { id: "mounting-brackets", name: "Mounting Brackets", count: 53 },
        { id: "guy-wire-assemblies", name: "Guy Wire Assemblies", count: 31 },
      ],
    },
    {
      name: "Fasteners & Hardware",
      subcategories: [
        { id: "bolts-fasteners", name: "Bolts & Fasteners", count: 156 },
        { id: "guy-grips", name: "Preformed Guy Grips", count: 38 },
        { id: "clamps-connectors", name: "Clamps & Connectors", count: 87 },
        { id: "anchors", name: "Anchors", count: 24 },
      ],
    },
    {
      name: "Electrical Components",
      subcategories: [
        { id: "electrical", name: "Electrical Accessories", count: 94 },
        { id: "grounding", name: "Grounding Equipment", count: 46 },
        { id: "insulators", name: "Insulators", count: 35 },
        { id: "transformers", name: "Transformers", count: 18 },
      ],
    },
    {
      name: "Tools & Equipment",
      subcategories: [
        { id: "testing-tools", name: "Testing Tools", count: 27 },
        { id: "installation-tools", name: "Installation Tools", count: 42 },
        { id: "safety-equipment", name: "Safety Equipment", count: 33 },
        { id: "measurement-tools", name: "Measurement Tools", count: 19 },
      ],
    },
    {
      name: "Underground Infrastructure",
      subcategories: [
        { id: "underground", name: "Underground Manholes", count: 19 },
        { id: "conduit-systems", name: "Conduit Systems", count: 37 },
        { id: "cable-management", name: "Cable Management", count: 28 },
        { id: "junction-boxes", name: "Junction Boxes", count: 22 },
      ],
    },
  ]

  return (
    <div className="space-y-12">
      {mainCategories.map((category, index) => (
        <div key={index}>
          <h3 className="mb-6 text-xl font-semibold">{category.name}</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {category.subcategories.map((subcategory) => (
              <Link
                key={subcategory.id}
                href={`/categories/${subcategory.id}`}
                className="bg-white p-6 transition-colors hover:bg-gray-100"
              >
                <h4 className="mb-2 text-base font-semibold">{subcategory.name}</h4>
                <p className="text-sm">{subcategory.count} products</p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
