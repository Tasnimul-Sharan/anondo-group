import Image from "next/image";
import {
  FaLeaf,
  FaLightbulb,
  FaHandsHelping,
  FaSeedling,
  FaHospital,
} from "react-icons/fa";
import SectionBadge from "./SectionBadge";

const initiatives = [
  {
    icon: FaLeaf,
    title: "Renewable Energy Adoption & Green Operations",
  },
  {
    icon: FaLightbulb,
    title: "Education & Skill Development Programs",
  },
  {
    icon: FaHospital,
    title: "Healthcare & Community Outreach",
  },
  {
    icon: FaHandsHelping,
    title: "Employee Volunteering & Engagement",
  },
  {
    icon: FaSeedling,
    title: "Sustainable Supply Chain Practices",
  },
];

export default function Sustainability() {
  return (
    <section className="relative w-full bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionBadge text="Building a better tomorrow" />
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Sustainability <span className="text-red-600">& CSR</span>
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            At Redith Group, sustainability and corporate social responsibility
            are integral to our business philosophy. We focus on environmental
            stewardship, community development, ethical practices, and employee
            welfare to ensure long-term value for society.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Key Initiatives
          </h3>

          <ul className="space-y-5">
            {initiatives.map((item, idx) => {
              const Icon = item.icon;
              return (
                <li key={idx} className="flex items-start gap-4">
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-red-100 text-primary">
                    <Icon className="text-lg" />
                  </span>
                  <span className="text-gray-700 leading-snug">
                    {item.title}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="relative h-[500px]">
          <Image
            src="/csr.jpg"
            alt="Sustainability"
            width={1200}
            height={1200}
            className="rounded-xl border object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
