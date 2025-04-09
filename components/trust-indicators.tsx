export function TrustIndicators() {
  const indicators = [
    {
      title: "ISO 9001:2015 Certified",
      description: "All manufacturing processes meet international quality standards",
    },
    {
      title: "Government Approved",
      description: "Approved supplier for federal, state, and local government projects",
    },
    {
      title: "50,000+ Units Monthly",
      description: "Manufacturing capacity to handle projects of any scale",
    },
    {
      title: "Technical Support",
      description: "Expert engineering consultation and product specification assistance",
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {indicators.map((indicator, index) => (
        <div key={index} className="border border-gray-200 p-6">
          <h3 className="mb-2 text-lg font-semibold">{indicator.title}</h3>
          <p className="text-sm">{indicator.description}</p>
        </div>
      ))}
    </div>
  )
}
