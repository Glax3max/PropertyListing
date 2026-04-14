"use client";

type Props = {
  page: number;
  setPage: (p: number) => void;
  total: number;
};

export default function Pagination({ page, setPage, total }: Props) {
  return (
    <nav
      className="flex justify-center mt-10"
      aria-label="Pagination Navigation"
    >
      <ul className="flex items-center gap-2 bg-white/70 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-gray-200">
        
        {/* Previous */}
        <li>
          <button
            onClick={() => setPage(Math.max(page - 1, 0))}
            disabled={page === 0}
            className="
              px-3 py-1.5 rounded-full text-sm
              text-gray-600
              hover:bg-gray-100
              disabled:opacity-40
              transition
            "
          >
            ←
          </button>
        </li>

        {/* Page Numbers */}
        {Array.from({ length: total }).map((_, i) => (
          <li key={i}>
            <button
              onClick={() => setPage(i)}
              className={`
                px-3 py-1.5 rounded-full text-sm
                transition
                ${
                  page === i
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-gray-700 hover:bg-gray-100"
                }
              `}
            >
              {i + 1}
            </button>
          </li>
        ))}

        {/* Next */}
        <li>
          <button
            onClick={() => setPage(Math.min(page + 1, total - 1))}
            disabled={page === total - 1}
            className="
              px-3 py-1.5 rounded-full text-sm
              text-gray-600
              hover:bg-gray-100
              disabled:opacity-40
              transition
            "
          >
            →
          </button>
        </li>
      </ul>
    </nav>
  );
}