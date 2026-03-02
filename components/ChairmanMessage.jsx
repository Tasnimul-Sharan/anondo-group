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
                src="/bushra-tabassum.png"
                alt="Ms. Bushra Tabassum"
                width={1024}
                height={1536}
                className="relative rounded-3xl w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT – MESSAGE */}
          <div>
            <SectionBadge text="Leadership Message" />

            <h2 className="mt-6 text-4xl md:text-5xl font-serif font-semibold text-gray-900 leading-tight">
              A Vision for Sustainable Growth
              <span className="text-primary block">& Market Leadership</span>
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-relaxed">
              At Anondo Group, our vision is rooted in responsible expansion,
              innovation, and long-term value creation. Through diversified
              operations across real estate, healthcare, agriculture, and
              professional services, we strive to deliver excellence while
              contributing positively to the nation’s development.
            </p>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Our focus remains on integrity, customer trust, and strategic
              growth. We are committed to building sustainable enterprises that
              create lasting impact for our stakeholders and communities.
            </p>

            {/* Signature */}
            <div className="mt-10 border-l-4 border-primary pl-6">
              <p className="text-xl font-semibold text-gray-900">
                Ms. Bushra Tabassum
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Director, Sales & Marketing <br />
                Anondo Group
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
