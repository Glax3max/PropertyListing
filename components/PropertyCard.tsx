import Link from "next/link";

export default function PropertyCard({ property }: any) {
  return (
    <Link href={`/property/${property.id}`}>
      <div className="border rounded-xl overflow-hidden shadow hover:scale-105 transition">
        <img src={property.image} className="h-48 w-full object-cover" />

        <div className="p-4">
          <h2 className="font-semibold text-lg">{property.title}</h2>
          <p>{property.location}</p>
          <p>{property.rooms} rooms</p>
          <p className="font-bold">{property.price}</p>
        </div>
      </div>
    </Link>
  );
}