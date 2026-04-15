"use client";

import Image from "next/image";

export default function Hero({ onSearch }: any) {
  return (
    <section
      className="relative h-[60vh] flex items-center justify-center"
      aria-label="Hero section - search properties"
    >
      <Image
        src="https://source.unsplash.com/1600x900/?luxury-house"
        alt="Luxury house background"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

      <div className="relative text-center text-white px-4">
        
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Find Your Dream Home
        </h1>

        <p className="mt-2 text-sm md:text-base text-white/80">
          Explore apartments, villas, and homes across top cities
        </p>

        <div className="flex justify-center mt-6">
          <div
            className="
              flex items-center
              bg-white/80 backdrop-blur-md
              border border-white/30
              rounded-full
              px-4 py-2
              shadow-md
              w-full max-w-lg
            "
          >
            <span className="text-gray-500 mr-2">🔍</span>

            <input
              type="text"
              placeholder="Search by city..."
              className="
                w-full
                bg-transparent
                outline-none
                text-sm text-black
                placeholder-gray-500
              "
              onChange={(e) => onSearch(e.target.value)}
              aria-label="Search properties by city"
            />
          </div>
        </div>

      </div>
    </section>
  );
}