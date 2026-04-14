"use client";
import { useState } from "react";

export default function SearchBar({ onSearch }: any) {
  const [query, setQuery] = useState("");

  return (
  <input
  type="text"
  placeholder="Search by city..."
  className="
    w-full max-w-xl
    px-5 py-3
    rounded-full
    border border-gray-300
    bg-white/80
    backdrop-blur-md
    shadow-sm
    focus:outline-none
    focus:ring-0 focus:ring-black-500
    focus:border-blue-950
    
    transition-all duration-200
    mb-5
  "
      value={query}
      onChange={(e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
      }}
    />
  );
}