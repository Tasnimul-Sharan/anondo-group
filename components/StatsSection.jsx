// "use client";

// import { useEffect, useRef, useState } from "react";
// import { FaBuilding, FaLeaf, FaShieldAlt, FaIndustry } from "react-icons/fa";

// const stats = [
//   {
//     icon: FaBuilding,
//     value: 6,
//     suffix: "+",
//     label: "Business Verticals",
//   },
//   {
//     icon: FaLeaf,
//     value: 15,
//     suffix: "+",
//     label: "Years of Excellence",
//   },
//   {
//     icon: FaShieldAlt,
//     value: 5000,
//     suffix: "+",
//     label: "Clients & Members",
//   },
//   {
//     icon: FaIndustry,
//     value: 100,
//     suffix: "+",
//     label: "Projects Delivered",
//   },
// ];

// function CountUp({ value, suffix, start }) {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (!start) return;

//     let current = 0;
//     const duration = 1400;
//     const stepTime = 16;
//     const increment = value / (duration / stepTime);

//     const timer = setInterval(() => {
//       current += increment;
//       if (current >= value) {
//         setCount(value);
//         clearInterval(timer);
//       } else {
//         setCount(Math.floor(current));
//       }
//     }, stepTime);

//     return () => clearInterval(timer);
//   }, [start, value]);

//   return (
//     <span>
//       {count}
//       {suffix}
//     </span>
//   );
// }

// export default function StatsImpact() {
//   const sectionRef = useRef(null);
//   const [startCount, setStartCount] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setStartCount(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.3 },
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative py-28 bg-gradient-to-r from-slate-900 via-primary to-slate-900 text-white overflow-hidden"
//     >
//       {/* Soft Overlay Pattern */}
//       <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] [background-size:24px_24px]" />

//       <div className="relative max-w-7xl mx-auto px-6">
//         {/* Section Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-5xl font-serif font-semibold">
//             Our Impact in Numbers
//           </h2>
//           <p className="mt-4 text-white/80 max-w-2xl mx-auto">
//             A diversified business group committed to sustainable growth,
//             innovation, and long-term value creation across industries.
//           </p>
//         </div>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
//           {stats.map((stat, idx) => {
//             const Icon = stat.icon;

//             return (
//               <div key={idx} className="space-y-5">
//                 <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full border border-white/30">
//                   <Icon className="text-2xl" />
//                 </div>

//                 <div className="text-4xl md:text-5xl font-bold">
//                   <CountUp
//                     value={stat.value}
//                     suffix={stat.suffix}
//                     start={startCount}
//                   />
//                 </div>

//                 <p className="text-sm uppercase tracking-wider text-white/70">
//                   {stat.label}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import { FaBuilding, FaLeaf, FaShieldAlt, FaIndustry } from "react-icons/fa";
import SectionBadge from "./SectionBadge";

const stats = [
  { icon: FaBuilding, value: 6, suffix: "+", label: "Business Verticals" },
  { icon: FaLeaf, value: 15, suffix: "+", label: "Years of Excellence" },
  { icon: FaShieldAlt, value: 5000, suffix: "+", label: "Clients & Members" },
  { icon: FaIndustry, value: 100, suffix: "+", label: "Projects Delivered" },
];

function CountUp({ value, suffix, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 1400;
    const stepTime = 16;
    const increment = value / (duration / stepTime);

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [start, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsImpact() {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 bg-off_white overflow-hidden"
    >
      {/* subtle texture pattern */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_#e5e7eb_1px,_transparent_1px)] [background-size:26px_26px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
        <SectionBadge text="Business Overview" className="mb-6" />
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-soft_black">
            Our Impact in Numbers
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full" />

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A diversified business group committed to sustainable growth,
            innovation, and long-term value creation across industries.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;

            return (
              <div key={idx} className="group space-y-5">
                {/* Icon Circle */}
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-white border border-gray-200 group-hover:shadow-lg transition-all duration-500">
                  <Icon className="text-2xl text-primary" />
                </div>

                {/* Counter */}
                <div className="text-4xl md:text-5xl font-bold text-soft_black">
                  <CountUp
                    value={stat.value}
                    suffix={stat.suffix}
                    start={startCount}
                  />
                </div>

                {/* Label */}
                <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
