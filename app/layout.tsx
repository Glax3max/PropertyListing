import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { properties } from "@/data/properties";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EstatePro | Find Properties in India",
  description:
    "Explore modern apartments, villas, and homes across India with EstatePro.",
  keywords: ["real estate", "property", "buy house India"],
};

export async function generateMetadata({ params }: any) {
  const { id } = await params;
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-100">
            {children}
        </div>
      </body>
    </html>
  );
}
