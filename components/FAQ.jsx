"use client";

import { useRef, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function FAQ({ faqData }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const answerRefs = useRef([]);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      collapse(index);
      setActiveIndex(null);
    } else {
      if (activeIndex !== null) {
        collapse(activeIndex, () => {
          expand(index);
          setActiveIndex(index);
        });
      } else {
        expand(index);
        setActiveIndex(index);
      }
    }
  };

  const expand = (index) => {
    const el = answerRefs.current[index];
    if (!el) return;
    gsap.killTweensOf(el);
    el.style.display = "block";
    gsap.fromTo(
      el,
      { height: 0, opacity: 0 },
      {
        height: el.scrollHeight,
        opacity: 1,
        duration: 0.45,
        ease: "power3.out",
        onComplete: () => (el.style.height = "auto"),
      },
    );
  };

  const collapse = (index, cb) => {
    const el = answerRefs.current[index];
    if (!el) return;
    gsap.killTweensOf(el);
    gsap.to(el, {
      height: 0,
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
      onComplete: () => {
        el.style.display = "none";
        cb?.();
      },
    });
  };

  return (
    <section className="bg-red-50 py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-0">
        <motion.h2
          className="text-center text-3xl md:text-4xl font-bold mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {faqData.title}
        </motion.h2>

        <div className="relative border-l border-gray-300 pl-12 space-y-14">
          {faqData.faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <span
                  className={`absolute -left-[36px] top-0 flex items-center justify-center
                w-7 h-7 rounded-full text-sm font-semibold
                transition-all duration-300
                ${
                  isActive
                    ? "bg-primary text-white scale-110"
                    : "bg-gray-300 text-gray-700"
                }
              `}
                >
                  {index + 1}
                </span>

                {/* Question */}
                <motion.div
                  onClick={() => toggleFAQ(index)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="cursor-pointer group"
                >
                  <div className="flex items-start justify-between gap-6">
                    <h3
                      className={`text-lg font-semibold transition-colors duration-300
                    ${isActive ? "text-primary" : "text-gray-900"}
                  `}
                    >
                      {faq.question}
                    </h3>

                    <span
                      className={`text-xl transition-transform duration-500 p-2 rounded-full border
                    ${
                      isActive
                        ? "rotate-180 text-primary border-primary"
                        : "text-gray-500 border-gray-500"
                    }
                  `}
                    >
                      {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    </span>
                  </div>

                  {/* Animated underline */}
                  <span
                    className={`block mt-3 h-[2px] w-full origin-left transition-transform duration-500
                  ${isActive ? "scale-x-100 bg-primary" : "scale-x-0 bg-gray-200"}
                `}
                  />
                </motion.div>

                {/* Answer */}
                <div
                  ref={(el) => (answerRefs.current[index] = el)}
                  className="mt-6 ml-2 border-l-2 border-primary/80 pl-6 text-gray-600 text-sm leading-relaxed overflow-hidden"
                  style={{ height: 0, opacity: 0, display: "none" }}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
