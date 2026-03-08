import Image from "next/image";
import SectionBadge from "./SectionBadge";

export default function ChairmanMessage() {
  return (
    <section className="relative py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT – IMAGE */}
          <div className="relative">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-2xl"></div>

              <Image
                src="/gazi-md-mozammel-haque.jpeg"
                alt="Gazi Md. Mozammel Haque"
                width={1024}
                height={1536}
                className="relative rounded-3xl w-full h-[40rem] object-cover"
              />
            </div>
          </div>

          {/* RIGHT – MESSAGE */}
          <div>
            <SectionBadge text="Chairman's Message" />

            <h2 className="mt-6 text-4xl md:text-5xl font-serif font-semibold text-gray-900 leading-tight">
              A Vision for Sustainable Growth
              <span className="text-primary block">& Market Leadership</span>
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-relaxed">
              At Anondo Group, our journey has always been driven by a strong
              commitment to innovation, integrity, and sustainable growth. We
              believe that true success lies not only in business expansion but
              also in creating meaningful value for society.
            </p>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Through our diversified ventures across real estate, healthcare,
              agriculture, and professional services, we aim to contribute to
              the development of Bangladesh while maintaining the highest
              standards of quality, trust, and customer satisfaction.
            </p>

            {/* Signature */}
            <div className="mt-10 border-l-4 border-primary pl-6">
              <p className="text-xl font-semibold text-gray-900">
                Gazi Md. Mozammel Haque
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Chairman <br />
                Anondo Group
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
