"use client";

export default function Pagination({ page, setPage, total }: any) {
  return (
    <div className="flex gap-2 mt-4">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => setPage(i)}
          className="px-3 py-1 border"
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}