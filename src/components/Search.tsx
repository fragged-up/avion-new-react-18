import { useState, useEffect } from "react";
import Select from "react-select";
import { useLazySearchQuery } from "@/store/apiSlice";

export default function Search() {
  const [query, setQuery] = useState("");
  const [search, { data = [] }] = useLazySearchQuery();

  useEffect(() => {
    if (query.length > 2) search(query);
  }, [query, search]);

  return (
    <Select
      options={data.map((item) => ({ value: item, label: item }))}
      onInputChange={setQuery}
      placeholder="Search..."
      isLoading={!data}
      className="w-full max-w-md"
    />
  );
}
