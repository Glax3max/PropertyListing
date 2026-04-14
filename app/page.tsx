"use client";

import { useState } from "react";
import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import SearchBar from "@/components/SearchBar";
import Navbar from "@/components/Navbar";
import Pagination from "@/components/Pagination";

const ITEMS_PER_PAGE = 6;

export default function Home() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);

  const filtered = properties.filter((p) =>
    p.location.toLowerCase().includes(search.toLowerCase())
  );

  const start = page * ITEMS_PER_PAGE;
  const paginated = filtered.slice(start, start + ITEMS_PER_PAGE);

  return (
    <>
      <Navbar />

      <div className="relative top-20 p-6">
        <SearchBar onSearch={setSearch} />

        <div className="grid md:grid-cols-3 gap-6">
          {paginated.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>

        <Pagination
          page={page}
          setPage={setPage}
          total={Math.ceil(filtered.length / ITEMS_PER_PAGE)}
        />
      </div>
    </>
  );
}