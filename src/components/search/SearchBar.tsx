import { useEffect, useState } from "react"
import { useDebouncedSearch } from "@/hooks/useDebouncedSearch"

type Props = {
  onSearch: (query: string) => void
}

export default function SearchBar({ onSearch }: Props) {
  const [input, setInput] = useState("")
  const debounced = useDebouncedSearch(input)

  useEffect(() => {
    if (debounced.trim()) onSearch(debounced)
  }, [debounced])

  return (
    <input
      type="text"
      placeholder="Search products..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      className="w-full px-4 py-2 rounded-md border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  )
}
