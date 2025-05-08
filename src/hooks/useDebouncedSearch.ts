import { useEffect, useState } from "react"

export function useDebouncedSearch(query: string, delay: number = 500): string {
  const [debounced, setDebounced] = useState(query)

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(query), delay)
    return () => clearTimeout(handler)
  }, [query, delay])

  return debounced
}
