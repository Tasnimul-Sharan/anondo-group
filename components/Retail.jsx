import Image from "next/image";
import PageHeader from "./PageHeader";
// import PageHeader from "../../components/PageHeader";

export default function Retail() {
  return (
    <div>
      <PageHeader
        title="Retail Chain Division"
        subtitle="Bangladesh’s largest retail chain"
      />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-gray-700 leading-relaxed">
          Redith Retail Chain Division has redefined convenience, variety, and
          affordability through hypermarkets, neighborhood stores, and a
          full-featured e-commerce platform.
        </p>

        <h2 className="text-2xl font-bold mt-10">Retail Formats</h2>

        <ul className="mt-6 space-y-2 text-gray-700">
          <li>• Hypermarkets</li>
          <li>• Neighborhood Convenience Stores</li>
          <li>• Integrated E-commerce Platform</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10">
          Customer Experience Innovations
        </h2>

        <ul className="mt-6 space-y-2 text-gray-700">
          <li>• Smart billing systems</li>
          <li>• Personalized loyalty programs</li>
          <li>• Mobile app shopping</li>
          <li>• Same-day delivery services</li>
        </ul>

        <Image
          src="/images/placeholder.jpg"
          alt="Retail"
          width={1000}
          height={600}
          className="rounded mt-10 shadow"
        />
      </section>
    </div>
  );
}
