import { properties } from "@/data/properties";
import { notFound } from "next/navigation";
import Image from "next/image";

const amenityIcons: Record<string, string> = {
  wifi: "📶",
  parking: "🚗",
  pool: "🏊",
  ac: "❄️",
};

export async function generateMetadata({ params }: any) {
  const { id } =await params;

  const property = properties.find((p) => p.id === id);

  return {
    title: `${property?.title} | ${property?.location}`,
    description: property?.description,
    openGraph: {
      title: property?.title,
      description: property?.description,
      images: [property?.image],
    },
  };
}

export default async function PropertyPage({ params }: any) {
  const { id } = await params;

  const property = properties.find((p) => p.id === id);
  if (!property) return notFound();

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-28 pb-10">
      <div className="max-w-4xl mx-auto px-4">

        {/* Image */}
        <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-sm">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Info */}
        <section className="mt-6 space-y-3">
          <h1 className="text-2xl font-semibold tracking-tight">
            {property.title}
          </h1>

          <p className="text-gray-500">📍 {property.location}</p>

          <div className="flex gap-4 text-sm">
            <span>{property.rooms} rooms</span>
            <span className="text-blue-600 font-semibold">
              {property.price}
            </span>
          </div>

          <p className="text-gray-600 mt-2 leading-relaxed">
            {property.description}
          </p>
        </section>

        {/* Amenities */}
        <section className="mt-8">
          <h2 className="text-lg font-semibold mb-3">
            Amenities
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {property.amenities.map((item: string) => (
              <div
                key={item}
                className="
                  flex items-center gap-2
                  bg-white/70 backdrop-blur-md
                  border border-gray-200
                  rounded-lg px-3 py-2
                  text-sm

                  shadow-sm
                "
              >
                <span>{amenityIcons[item] || "✨"}</span>
                <span className="capitalize">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Structured Data (SEO BOOST) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Residence",
              name: property.title,
              address: property.location,
              image: property.image,
              description: property.description,
              offers: {
                "@type": "Offer",
                price: property.price,
                priceCurrency: "INR",
              },
            }),
          }}
        />

      </div>
    </main>
  );
}