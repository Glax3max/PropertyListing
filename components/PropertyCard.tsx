import Link from "next/link";
import Image from "next/image";
import { Property } from "@/types/property";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <Link href={`/property/${property.id}`}>
      <article
        className="

          bg-white/70 backdrop-blur-md
          rounded-xl overflow-hidden
          border border-gray-400
          shadow-sm
          hover:shadow-lg
          transition-all duration-300
        "
      >
        <div className="relative h-35 w-full ">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-4">
          <h2 className="text-lg font-semibold line-clamp-1">
            {property.title}
          </h2>

          <p className="text-sm text-gray-500">
            📍 {property.location}
          </p>

          <div className="flex justify-between mt-2 text-sm">
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