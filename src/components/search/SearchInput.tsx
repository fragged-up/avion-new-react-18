import { useState } from "react"

type Props = {
  onChange: (query: string) => void
  placeholder?: string
}

export default function SearchInput({ onChange, placeholder = "Search products..." }: Props) {
  const [query, setQuery] = useState("")

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    onChange(value)
  }

  return (
    <input
      type="text"
      value={query}
      onChange={handleInput}
      placeholder={placeholder}
      className="w-full max-w-md px-4 py-2 border rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  )
}
