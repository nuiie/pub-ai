export default function CapabilitiesPage() {
  const capabilities = [
    {
      title: "Manufacturing",
      items: [
        "50,000+ units monthly production capacity",
        "100,000 sq ft production facility",
        "CNC machining and fabrication",
        "Hot-dip galvanizing process",
        "Automated assembly lines",
        "Custom fabrication services",
      ],
    },
    {
      title: "Quality Control",
      items: [
        "ISO 9001:2015 certified processes",
        "In-house testing laboratory",
        "Material strength testing",
        "Corrosion resistance testing",
        "Dimensional inspection",
        "Batch sampling and verification",
      ],
    },
    {
      title: "Engineering",
      items: [
        "Product design and development",
        "CAD/CAM engineering",
        "Structural analysis",
        "Custom solution development",
        "Technical documentation",
        "Compliance certification",
      ],
    },
    {
      title: "Logistics",
      items: [
        "Nationwide shipping network",
        "International export capabilities",
        "Just-in-time delivery options",
        "Bulk order fulfillment",
        "Project-based shipping schedules",
        "Inventory management services",
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-white py-8">
      <section>
        <h2 className="mb-8 text-3xl font-semibold">Our Capabilities</h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {capabilities.map((capability, index) => (
            <div key={index} className="border border-gray-200 p-6">
              <h3 className="mb-4 text-xl font-semibold">{capability.title}</h3>
              <ul className="space-y-2">
                {capability.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
