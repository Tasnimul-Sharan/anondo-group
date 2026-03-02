import Image from "next/image";
import PageHeader from "./PageHeader";
// import PageHeader from "../../components/PageHeader";

export default function ConsumerBrands() {
  return (
    <div>
      <PageHeader
        title="Consumer Brands Division"
        subtitle="Enhancing everyday life"
      />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-gray-700 leading-relaxed">
          The Consumer Brands Division enhances the lives of millions with a
          diverse range of high-quality, safe, and affordable products meeting
          both domestic and global market demand.
        </p>

        <h2 className="text-2xl font-bold mt-10">Product Categories</h2>

        <ul className="mt-6 space-y-2 text-gray-700">
          <li>
            • Toiletries: Soaps, shampoos, lotions with natural ingredients
          </li>
          <li>• Home Care: Cleaners, detergents, disinfectants</li>
          <li>
            • Hygiene Products: Sanitary napkins, diapers, hand sanitizers
          </li>
          <li>• Electrical & Electronics: Home appliances and lighting</li>
          <li>• Mobile Devices: Smart and affordable devices</li>
          <li>• Food Products: Salt, flour, snacks, ready-to-cook items</li>
          <li>• Paints & Coatings: Interior, exterior & industrial paints</li>
        </ul>

        <Image
          src="/images/placeholder.jpg"
          alt="Consumer Brands"
          width={1000}
          height={600}
          className="rounded mt-10 shadow"
        />
      </section>
    </div>
  );
}
