import Link from "next/link"

export function CategorySection() {
  const categories = [
    {
      name: "Structural Components",
      subcategories: [
        {
          id: "steel-poles",
          name: "Steel Poles",
          count: 42,
          image: "/placeholder.svg?height=80&width=80&text=Poles",
          description: "Heavy-duty galvanized poles for telecommunications infrastructure and utility applications",
        },
        {
          id: "cross-arms",
          name: "Cross Arms",
          count: 28,
          image: "/placeholder.svg?height=80&width=80&text=Cross Arms",
          description: "Support arms for mounting equipment and running lines on utility poles",
        },
        {
          id: "mounting-brackets",
          name: "Mounting Brackets",
          count: 53,
          image: "/placeholder.svg?height=80&width=80&text=Brackets",
          description: "Secure attachment points for equipment on poles, towers, and other structures",
        },
        {
          id: "guy-wire-assemblies",
          name: "Guy Wire Assemblies",
          count: 31,
          image: "/placeholder.svg?height=80&width=80&text=Guy Wire",
          description: "Complete tensioning systems to stabilize poles and towers against wind and load",
        },
      ],
    },
    {
      name: "Fasteners & Hardware",
      subcategories: [
        {
          id: "bolts-fasteners",
          name: "Bolts & Fasteners",
          count: 156,
          image: "/placeholder.svg?height=80&width=80&text=Bolts",
          description: "High-strength fasteners designed for structural connections in telecommunications equipment",
        },
        {
          id: "guy-grips",
          name: "Preformed Guy Grips",
          count: 38,
          image: "/placeholder.svg?height=80&width=80&text=Guy Grips",
          description: "Helical wire grips that secure guy wires without damaging the cable or reducing strength",
        },
        {
          id: "clamps-connectors",
          name: "Clamps & Connectors",
          count: 87,
          image: "/placeholder.svg?height=80&width=80&text=Clamps",
          description: "Secure connection hardware for joining cables, conduits, and structural components",
        },
        {
          id: "anchors",
          name: "Anchors",
          count: 24,
          image: "/placeholder.svg?height=80&width=80&text=Anchors",
          description: "Ground anchoring systems for securing guy wires and stabilizing structures",
        },
      ],
    },
    {
      name: "Electrical Components",
      subcategories: [
        {
          id: "electrical",
          name: "Electrical Accessories",
          count: 94,
          image: "/placeholder.svg?height=80&width=80&text=Electrical",
          description: "Connectors, terminals, and accessories for power and signal connections",
        },
        {
          id: "grounding",
          name: "Grounding Equipment",
          count: 46,
          image: "/placeholder.svg?height=80&width=80&text=Grounding",
          description: "Rods, clamps, and wires for creating safe and effective electrical grounds",
        },
        {
          id: "insulators",
          name: "Insulators",
          count: 35,
          image: "/placeholder.svg?height=80&width=80&text=Insulators",
          description: "Ceramic, polymer, and composite insulators for overhead and equipment applications",
        },
        {
          id: "transformers",
          name: "Transformers",
          count: 18,
          image: "/placeholder.svg?height=80&width=80&text=Transformers",
          description: "Power and distribution transformers for telecommunications infrastructure",
        },
      ],
    },
    {
      name: "Tools & Equipment",
      subcategories: [
        {
          id: "testing-tools",
          name: "Testing Tools",
          count: 27,
          image: "/placeholder.svg?height=80&width=80&text=Testing",
          description: "Specialized tools for testing signal strength, continuity, and electrical parameters",
        },
        {
          id: "installation-tools",
          name: "Installation Tools",
          count: 42,
          image: "/placeholder.svg?height=80&width=80&text=Installation",
          description: "Professional-grade tools designed for telecom hardware installation and maintenance",
        },
        {
          id: "safety-equipment",
          name: "Safety Equipment",
          count: 33,
          image: "/placeholder.svg?height=80&width=80&text=Safety",
          description: "Personal protective equipment and safety devices for field technicians",
        },
        {
          id: "measurement-tools",
          name: "Measurement Tools",
          count: 19,
          image: "/placeholder.svg?height=80&width=80&text=Measurement",
          description: "Precision tools for accurate measurements during installation and fabrication",
        },
      ],
    },
    {
      name: "Underground Infrastructure",
      subcategories: [
        {
          id: "underground",
          name: "Underground Manholes",
          count: 19,
          image: "/placeholder.svg?height=80&width=80&text=Manholes",
          description: "Access points for underground cable and equipment maintenance",
        },
        {
          id: "conduit-systems",
          name: "Conduit Systems",
          count: 37,
          image: "/placeholder.svg?height=80&width=80&text=Conduit",
          description: "Complete systems for routing and protecting underground cables and wires",
        },
        {
          id: "cable-management",
          name: "Cable Management",
          count: 28,
          image: "/placeholder.svg?height=80&width=80&text=Cable",
          description: "Trays, guides, and organizers for efficient cable routing and organization",
        },
        {
          id: "junction-boxes",
          name: "Junction Boxes",
          count: 22,
          image: "/placeholder.svg?height=80&width=80&text=Junction",
          description: "Weatherproof enclosures for cable connections and equipment protection",
        },
      ],
    },
  ]

  return (
    <div className="space-y-6 md:space-y-8">
      {categories.map((category, index) => (
        <div key={index} className="mb-6 md:mb-8">
          <h3 className="mb-3 border-b border-gray-300 pb-2 text-lg font-semibold md:mb-4 md:text-xl">
            {category.name}
          </h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {category.subcategories.map((subcategory) => (
              <Link
                key={subcategory.id}
                href={`/categories/${subcategory.id}`}
                className="flex border border-gray-200 bg-white p-2 hover:bg-gray-50 md:p-3"
              >
                <div className="mr-2 flex-shrink-0 md:mr-3">
                  <img
                    src={subcategory.image || "/placeholder.svg"}
                    alt={subcategory.name}
                    className="h-12 w-12 object-contain md:h-16 md:w-16"
                  />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-xs font-semibold md:text-sm">{subcategory.name}</h4>
                  <p className="mb-1 hidden text-xs text-gray-600 line-clamp-2 md:block">{subcategory.description}</p>
                  <span className="mt-auto text-xs text-gray-500">{subcategory.count} products</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
