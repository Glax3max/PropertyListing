import Link from "next/link";
import Image from "next/image";
import { Property } from "@/types/property";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <Link href={`/property/${property.id}`} className="block">
      <article
        className="
          bg-white/70 backdrop-blur-md
          border border-gray-200
          rounded-xl overflow-hidden

          shadow-sm hover:shadow-md
          transition-all duration-300
          hover:-translate-y-0.5
        "
      >
        {/* Image */}
        <div className="relative h-36 w-full">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-3 space-y-1">
          <h2 className="text-sm font-semibold line-clamp-1">
            {property.title}
          </h2>

          <p className="text-xs text-gray-500">
            📍 {property.location}
          </p>

          <div className="flex justify-between text-xs mt-1">
            <span>{property.rooms} rooms</span>
            <span className="font-semibold text-blue-600">
              {property.price}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}