export function ProductSpecs() {
  const specs = [
    { name: "Material", value: "Galvanized Steel" },
    { name: "Height", value: "30 ft (9.14 m)" },
    { name: "Diameter", value: "8 inches (20.32 cm)" },
    { name: "Wall Thickness", value: "0.25 inches (6.35 mm)" },
    { name: "Weight", value: "450 lbs (204.12 kg)" },
    { name: "Wind Rating", value: "120 mph (193 km/h)" },
    { name: "Finish", value: "Hot-dip Galvanized" },
    { name: "Mounting", value: "Direct Burial or Base Plate" },
    { name: "Standards", value: "ASTM A123, AASHTO LTS-6" },
    { name: "Warranty", value: "10 Years" },
  ]

  return (
    <div>
      <h2 className="mb-3 text-lg font-semibold md:mb-4 md:text-xl">Specifications</h2>
      <table className="w-full border border-gray-200">
        <tbody>
          {specs.map((spec, index) => (
            <tr key={index} className={index !== specs.length - 1 ? "border-b border-gray-200" : ""}>
              <td className="border-r border-gray-200 py-1 pl-2 text-xs font-semibold md:py-2 md:text-sm">
                {spec.name}
              </td>
              <td className="py-1 pl-2 text-xs md:py-2 md:text-sm">{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
