import Image from "next/image";
import Link from "next/link";
import SectionBadge from "./SectionBadge";

export default function ServicesSection() {
  const services = [
    {
      title: "Digital Marketing & IT",
      slug: "digital-it",
      shortDesc: "Technology-driven digital transformation",
      image: "/services/digital-it.jpg",
      // image: "/logo2.jpg",
    },
    {
      title: "Consumer Brands",
      slug: "consumer-brands",
      shortDesc: "High-quality products for everyday life",
      image: "/services/consumer-brands.jpg",
      // image: "/logo2.jpg",
    },
    {
      title: "Agribusiness",
      slug: "agribusiness",
      shortDesc: "Modernizing agriculture at scale",
      image: "/services/agribusiness.jpg",
      // image: "/logo2.jpg",
    },
    {
      title: "Retail Chain",
      slug: "retail",
      shortDesc: "Bangladesh’s largest retail ecosystem",
      image: "/services/retail.jpg",
      // image: "/logo2.jpg",
    },
  ];

  return (
    <section className="custom-container mx-auto py-20">
      <div className="mb-14">
        <SectionBadge text="What We Do" />

        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Our <span className="text-primary">Services</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group"
          >
            <div className="relative h-full rounded-2xl overflow-hidden border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary/40">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={260}
                  className="object-cover w-full h-full min-h-[420px] transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 text-lg font-semibold text-white leading-snug">
                  {service.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.shortDesc}
                </p>
                <span className="relative inline-block mt-4 text-sm font-semibold text-primary">
                  <span className="relative z-10">Explore Service →</span>
                  <span className="absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
