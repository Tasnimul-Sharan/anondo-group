import { FaBuilding, FaLeaf, FaShieldAlt, FaCapsules } from "react-icons/fa";
import SectionBadge from "./SectionBadge";

const sectors = [
  { icon: FaBuilding, title: "Real Estate Development" },
  { icon: FaLeaf, title: "Agriculture & Research" },
  { icon: FaShieldAlt, title: "Security Services" },
  { icon: FaCapsules, title: "Pharmaceuticals" },
];

export default function BusinessOverview() {
  return (
    <section className="py-24 bg-off_white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-16 flex flex-col items-center">
          <SectionBadge text="Corporate Structure" className="mb-6" />

          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-soft_black text-center">
            Our Business Sectors
          </h2>

          <div className="w-24 h-[3px] bg-primary mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-4 gap-12">
          {sectors.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="space-y-5">
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-secondary/10 text-secondary">
                  <Icon className="text-2xl" />
                </div>
                <h3 className="font-semibold text-soft_black">{item.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
