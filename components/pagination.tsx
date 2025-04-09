export function Pagination() {
  return (
    <div className="mt-12 flex justify-center gap-2">
      <a href="#" className="border border-gray-200 px-4 py-2 text-sm text-gray-500 hover:bg-gray-100">
        Prev
      </a>
      <a href="#" className="bg-black px-4 py-2 text-sm text-white">
        1
      </a>
      <a href="#" className="border border-gray-200 px-4 py-2 text-sm hover:bg-gray-100">
        2
      </a>
      <a href="#" className="border border-gray-200 px-4 py-2 text-sm hover:bg-gray-100">
        3
      </a>
      <a href="#" className="border border-gray-200 px-4 py-2 text-sm hover:bg-gray-100">
        4
      </a>
      <a href="#" className="border border-gray-200 px-4 py-2 text-sm hover:bg-gray-100">
        Next
      </a>
    </div>
  )
}
