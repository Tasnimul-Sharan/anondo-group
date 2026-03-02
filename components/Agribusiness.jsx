import Image from "next/image";
import PageHeader from "./PageHeader";
// import PageHeader from "../../components/PageHeader";

export default function Agribusiness() {
  return (
    <div>
      <PageHeader
        title="Agribusiness Division"
        subtitle="The largest agricultural integrator in Bangladesh"
      />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-gray-700 leading-relaxed">
          Redith's Agribusiness Division modernizes Bangladesh’s agricultural
          ecosystem by empowering farmers with technology, financing, and
          infrastructure support that ensures food security and sustainable
          farming practices.
        </p>

        <h2 className="text-2xl font-bold mt-10">Core Segments</h2>

        <ul className="mt-6 space-y-2 text-gray-700">
          <li>• Agriculture: Seeds, irrigation, crop nutrition</li>
          <li>• Livestock: Breeding, feed, disease control</li>
          <li>• Fisheries: Sustainable aquaculture & fish health</li>
          <li>• Farm Mechanization: Tractors, drones, harvesters</li>
          <li>• Infrastructure Development Services</li>
          <li>• Technology & Avionics: AI, drones & satellite monitoring</li>
        </ul>

        <Image
          src="/images/placeholder.jpg"
          alt="Agribusiness"
          width={1000}
          height={600}
          className="rounded mt-10 shadow"
        />
      </section>
    </div>
  );
}
