import { properties } from "@/data/properties";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: any) {
  const { id } = await params; 

  const property = properties.find((p) => p.id === id);

  return {
    title: property?.title,
    description: property?.description,
  };
}

export default async function PropertyPage({ params }: any) {
  const { id } = await params; 

  const property = properties.find((p) => p.id === id);

  if (!property) return notFound();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <img
        src={property.image}
        className="w-full h-[400px] object-cover rounded-2xl"
      />

      <h1 className="text-3xl font-bold mt-4">{property.title}</h1>
      <p className="text-gray-500">{property.location}</p>

      <div className="flex gap-4 mt-2">
        <span>{property.rooms} rooms</span>
        <span className="font-bold text-blue-600">{property.price}</span>
      </div>

      <p className="mt-4">{property.description}</p>
    </div>
  );
}