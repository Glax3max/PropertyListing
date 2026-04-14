import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";

export const metadata = {
  title: "Property Listings",
  description: "Browse amazing properties",
};

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Properties</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {properties.map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </div>
    </div>
  );
}