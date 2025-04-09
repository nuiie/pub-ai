export function SearchBar() {
  return (
    <div className="flex w-full border border-gray-200">
      <input
        type="text"
        placeholder="Search by part number or keyword"
        className="flex-1 bg-white p-3 text-sm placeholder:text-gray-500 focus:outline-none"
      />
      <button className="border-l border-gray-200 bg-white px-4 py-3 text-sm hover:bg-gray-100">Search</button>
    </div>
  )
}
