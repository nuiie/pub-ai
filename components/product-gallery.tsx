export function ProductGallery() {
  return (
    <div>
      <div className="aspect-square bg-white p-8">
        <img
          src="/placeholder.svg?height=400&width=400&text=Galvanized Steel Pole"
          alt="Galvanized Steel Pole"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="mt-4 grid grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="aspect-square border border-gray-200 bg-white p-2">
            <img
              src={`/placeholder.svg?height=80&width=80&text=View ${i}`}
              alt={`Product view ${i}`}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
