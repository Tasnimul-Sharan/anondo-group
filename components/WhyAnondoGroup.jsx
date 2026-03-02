import { FaLightbulb, FaHandshake, FaRocket, FaLeaf } from "react-icons/fa";
import SectionBadge from "./SectionBadge";

export default function WhyAnondoGroup() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT SIDE CONTENT */}
          <div>
            <SectionBadge text="Why Choose Us" />

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Building Trust Through
              <span className="text-primary block">Diversified Excellence</span>
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
              Anondo Group is a diversified conglomerate driving sustainable
              growth across real estate, senior living, agriculture, security
              services, and pharmaceuticals. Our commitment to innovation,
              integrity, and long-term value defines every project we undertake.
            </p>

            <div className="mt-10">
              <div className="h-[2px] w-24 bg-primary rounded-full" />
            </div>
          </div>

          {/* RIGHT SIDE CARDS */}
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                icon: <FaRocket />,
                title: "Diversified Excellence",
                desc: "Strong presence across multiple strategic industries.",
              },
              {
                icon: <FaLightbulb />,
                title: "Innovation Driven",
                desc: "Future-ready systems with modern technologies.",
              },
              {
                icon: <FaHandshake />,
                title: "Integrity & Trust",
                desc: "Ethical business practices and long-term partnerships.",
              },
              {
                icon: <FaLeaf />,
                title: "Sustainable Growth",
                desc: "Environmentally responsible and community-focused.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-white to-gray-50
                           border border-gray-100 rounded-3xl p-8 hover:shadow-2xl
                           hover:-translate-y-2 transition-all duration-500"
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 flex items-center justify-center
                                rounded-2xl bg-primary/10 text-primary text-xl
                                group-hover:bg-primary group-hover:text-white
                                transition-all duration-300"
                >
                  {item.icon}
                </div>

                <h3 className="mt-6 text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

                {/* Accent Line */}
                {/* <div
                  className="absolute bottom-0 left-0 w-0 h-1 bg-primary
                                group-hover:w-full transition-all duration-500 rounded-b-3xl"
                /> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
