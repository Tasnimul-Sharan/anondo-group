import Image from "next/image";
import PageHeader from "./PageHeader";
// import PageHeader from "../components/PageHeader";

export default function Presence() {
  return (
    <div>
      <PageHeader
        title="Our Presence"
        subtitle="Operational footprint & export markets"
      />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-gray-700 leading-relaxed">
          Redith Group operates across Bangladesh with a strong network of
          production units, distribution centers, and retail outlets. Our
          international exports reach multiple countries, expanding our global
          footprint.
        </p>

        <h2 className="text-2xl font-bold mt-10">Operational Presence</h2>
        <ul className="mt-6 space-y-2 text-gray-700">
          <li>• Headquarters: Dhaka, Bangladesh</li>
          <li>• Production Facilities: Multiple locations across Bangladesh</li>
          <li>
            • Retail & Distribution: Nationwide network of stores & logistics
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-10">Export Markets</h2>
        <ul className="mt-6 space-y-2 text-gray-700">
          <li>• India</li>
          <li>• Nepal</li>
          <li>• UAE</li>
          <li>• Singapore</li>
          <li>• Europe & North America (selected partners)</li>
        </ul>

        <Image
          src="/images/placeholder.jpg"
          alt="Presence"
          width={1000}
          height={600}
          className="rounded mt-10 shadow"
        />
      </section>
    </div>
  );
}
