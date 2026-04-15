import { Property } from "@/types/property";

export const properties: Property[] = Array.from({ length: 24 }).map((_, i) => ({
  id: String(i + 1),
  title: `Property ${i + 1}`,
  location: ["Delhi", "Mumbai", "Bangalore"][i % 3],
  rooms: (i % 5) + 1,
  price: `₹${(i + 1) * 10}L`,
  image:`/propert${Math.floor((i%7))}.jpg`,
  amenities: ["wifi", "parking", "pool", "ac"],
  description: "Beautiful property with modern amenities and great location.",
}));