import Link from "next/link"

export function SearchBar() {
  return (
    <div className="flex w-full flex-col gap-3 md:flex-row md:items-center md:gap-4">
      <div className="flex flex-1 border border-gray-200">
        <input
          type="text"
          placeholder="Search by part number or keyword"
          className="flex-1 bg-white p-2 text-sm placeholder:text-gray-500 focus:outline-none md:p-3"
        />
        <button className="border-l border-gray-200 bg-white px-3 py-2 text-sm hover:bg-gray-100 md:px-4 md:py-3">
          Search
        </button>
      </div>
      <Link
        href="/quote"
        className="whitespace-nowrap bg-black px-3 py-2 text-center text-sm text-white hover:bg-gray-800 md:px-4"
      >
        View Quote (0)
      </Link>
    </div>
  )
}
