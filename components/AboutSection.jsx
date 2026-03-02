"use client";

import { motion } from "framer-motion";
import SectionBadge from "./SectionBadge";

export default function AboutSection() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Soft Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/5 pointer-events-none" />

      <div className="custom-container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* LEFT CONTENT */}
          <div>
            <SectionBadge text="About Anondo Group" />

            <h2 className="text-3xl md:text-5xl font-serif font-semibold text-gray-900 leading-tight mt-6 mb-8">
              Empowering Communities Through{" "}
              <span className="text-primary">Diverse & Sustainable</span>{" "}
              Businesses
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Anondo Group is a diversified business conglomerate operating
              across Real Estate Development, Senior Living, Agriculture &
              Research, Security Services, and Pharmaceuticals.
            </p>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              With a strong commitment to integrity, innovation, and long-term
              value creation, we build impactful ventures that contribute to
              economic growth while enhancing quality of life across Bangladesh.
            </p>

            <a
              href="/about"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition"
            >
              Discover Our Journey →
            </a>
          </div>

          {/* RIGHT SIDE HIGHLIGHT CARD */}
          <div className="bg-gray-50 border border-gray-100 p-10 rounded-3xl shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Our Core Strength
            </h3>

            <ul className="space-y-5 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 bg-primary rounded-full" />
                Integrated multi-industry business ecosystem
              </li>

              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 bg-primary rounded-full" />
                Sustainable and future-focused investments
              </li>

              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 bg-primary rounded-full" />
                Strong ethical governance & leadership
              </li>

              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 bg-primary rounded-full" />
                Community-driven development model
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Building trusted brands under one unified vision.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
