"use client";
import { useState } from "react";

export default function SearchBar({ onSearch }: any) {
  const [query, setQuery] = useState("");

  return (
    <input
      type="text"
      placeholder="Search location..."
      className="border p-2 w-full mb-4"
      value={query}
      onChange={(e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
      }}
    />
  );
}