"use client";

import { FaBrain, FaCloud, FaRobot, FaChartPie } from "react-icons/fa";
import SectionBadge from "./SectionBadge";

export default function InnovationTechnology() {
  const features = [
    {
      icon: FaBrain,
      title: "AI & Machine Intelligence",
      desc: "Advanced machine learning models powering automation, insights, and personalization across platforms.",
    },
    {
      icon: FaRobot,
      title: "Smart Retail & Agri-Tech",
      desc: "IoT, data intelligence, and automation transforming supply chains and agricultural ecosystems.",
    },
    {
      icon: FaCloud,
      title: "Cloud & Enterprise Platforms",
      desc: "Secure, scalable, and resilient cloud-native systems built for enterprise growth.",
    },
    {
      icon: FaChartPie,
      title: "Data-Driven Intelligence",
      desc: "Predictive analytics and real-time dashboards enabling smarter business decisions.",
    },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-0">
        <div className="max-w-2xl mb-20">
          <SectionBadge text="Innovation Engine" />

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Innovation <span className="text-primary">& Technology</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Redith embeds artificial intelligence, automation, and advanced
            analytics at the core of every business—driving efficiency,
            resilience, and sustainable competitive advantage.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className="group relative bg-white/70 backdrop-blur-xl border border-red-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-3xl bg-primary/5 opacity-0 group-hover:opacity-100 transition" />

                <div className="relative">
                  <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="text-2xl" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
