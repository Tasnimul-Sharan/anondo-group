// import PageHeader from "../components/PageHeader";

// export default function About() {
//   return (
//     <div>
//       {/* <PageHeader
//         title="About Redith Group"
//         subtitle="Innovation • Progress • Sustainability"
//       /> */}

//       <section className="max-w-7xl mx-auto px-6 py-20">
//         <p className="leading-relaxed text-gray-700 text-lg">
//           Founded in 2018, Redith has emerged as one of the most prominent
//           conglomerates in Bangladesh. With a multinational heritage and a bold
//           vision for innovation and sustainability, Redith continues to deliver
//           outstanding value through four dynamic Strategic Business Units
//           (SBUs): Digital Marketing & IT, Consumer Brands, Agribusiness, and
//           Retail Chain.
//         </p>

//         <p className="leading-relaxed text-gray-700 text-lg mt-6">
//           Over the years, Redith has earned the trust of millions by combining
//           technological excellence, product quality, and customer-centric
//           approaches across all sectors it operates in.
//         </p>
//       </section>
//     </div>
//   );
// }

// import PageHeader from "../components/PageHeader";

// export default function About() {
//   return (
//     <div className="bg-white">
//       {/* Header */}
//       <PageHeader
//         title="About Redith Group"
//         subtitle="Innovation • Progress • Sustainability"
//       />

//       {/* Intro */}
//       <section className="max-w-7xl mx-auto px-6 py-20">
//         <div className="max-w-3xl">
//           <p className="text-lg leading-relaxed text-gray-700">
//             Founded in <span className="font-semibold text-gray-900">2018</span>
//             , Redith has emerged as one of the most prominent conglomerates in
//             Bangladesh. With a multinational heritage and a bold vision for
//             innovation and sustainability, Redith delivers outstanding value
//             across diverse industries.
//           </p>

//           <p className="text-lg leading-relaxed text-gray-700 mt-6">
//             Through technological excellence, product quality, and a strong
//             customer-centric approach, Redith has earned the trust of millions
//             and continues to expand its impact locally and globally.
//           </p>
//         </div>
//       </section>

//       {/* Business Units */}
//       <section className="bg-gray-50 py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-3xl font-bold text-gray-900 mb-12">
//             Strategic Business Units
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {[
//               {
//                 title: "Digital Marketing & IT",
//                 desc: "Advanced software solutions, AI-powered systems, cybersecurity, cloud services, and data-driven digital marketing strategies.",
//               },
//               {
//                 title: "Consumer Brands",
//                 desc: "Everyday essentials including toiletries, home care, hygiene products, electronics, mobile devices, food items, and coatings.",
//               },
//               {
//                 title: "Agribusiness",
//                 desc: "Modern agriculture solutions covering farming, livestock, fisheries, agri-tech, farm mechanization, and smart irrigation.",
//               },
//               {
//                 title: "Retail Chain",
//                 desc: "Bangladesh’s largest retail ecosystem with hypermarkets, neighborhood stores, and a fully integrated e-commerce platform.",
//               },
//             ].map((unit, i) => (
//               <div
//                 key={i}
//                 className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition"
//               >
//                 <h3 className="text-xl font-semibold text-gray-900 mb-3">
//                   {unit.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">{unit.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Vision & Mission */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
//           <div>
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">
//               Our Vision
//             </h2>
//             <p className="text-gray-700 leading-relaxed text-lg">
//               To be a force of progress by combining innovation, ethics, and
//               excellence—impacting lives, empowering communities, and inspiring
//               industries.
//             </p>
//           </div>

//           <div>
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">
//               Our Mission
//             </h2>
//             <ul className="space-y-3 text-gray-700 text-lg list-disc list-inside">
//               <li>Deliver reliable and innovative market-leading solutions</li>
//               <li>Empower people and partners through collaboration</li>
//               <li>Promote sustainable development across all operations</li>
//               <li>Continuously exceed customer expectations</li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* Sustainability */}
//       <section className="bg-gray-900 text-white py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-3xl font-bold mb-6">
//             Sustainability & Corporate Responsibility
//           </h2>
//           <p className="max-w-3xl text-gray-300 text-lg leading-relaxed">
//             Redith operates with a deep commitment to ethical sourcing,
//             environmental stewardship, and community development—ensuring
//             long-term sustainable growth.
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
//             {[
//               "Renewable energy integration",
//               "Plastic waste reduction & recycling",
//               "Women empowerment in rural agribusiness",
//               "Free digital training programs",
//               "Health & nutrition awareness initiatives",
//             ].map((item, i) => (
//               <div key={i} className="bg-gray-800 rounded-xl p-6 text-gray-200">
//                 {item}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Presence */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-3xl font-bold text-gray-900 mb-8">
//             Our Presence
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700 text-lg">
//             <div>
//               <h4 className="font-semibold text-gray-900">Head Office</h4>
//               <p>Dhaka, Bangladesh</p>
//             </div>
//             <div>
//               <h4 className="font-semibold text-gray-900">Operations</h4>
//               <p>Major districts across Bangladesh</p>
//             </div>
//             <div>
//               <h4 className="font-semibold text-gray-900">Export Markets</h4>
//               <p>South Asia, Middle East & Africa</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default function About() {
//   return (
//     <section className="relative bg-white py-24">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Section Label */}
//         <span className="inline-block mb-4 text-sm font-semibold tracking-widest text-blue-600 uppercase">
//           Who We Are
//         </span>

//         {/* Heading */}
//         <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight max-w-4xl">
//           A Diversified Conglomerate Powering Progress Across Bangladesh
//         </h2>

//         {/* Description */}
//         <div className="mt-8 max-w-3xl space-y-6">
//           <p className="text-lg text-gray-700 leading-relaxed">
//             Founded in <span className="font-semibold text-gray-900">2018</span>
//             , Redith Group has grown into one of Bangladesh’s most dynamic and
//             trusted conglomerates. Built on a foundation of innovation,
//             integrity, and long-term vision, Redith operates across multiple
//             high-impact industries.
//           </p>

//           <p className="text-lg text-gray-700 leading-relaxed">
//             Through four strategic business units —{" "}
//             <span className="font-medium text-gray-900">
//               Digital Marketing & IT, Consumer Brands, Agribusiness, and Retail
//               Chain
//             </span>{" "}
//             — Redith delivers technology-driven solutions, quality products, and
//             essential services that improve everyday life.
//           </p>

//           <p className="text-lg text-gray-700 leading-relaxed">
//             By combining technological excellence, customer-centric thinking,
//             and sustainable practices, Redith continues to earn the trust of
//             millions while shaping a smarter and more inclusive future.
//           </p>
//         </div>

//         {/* Highlight Stats */}
//         <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8">
//           {[
//             { value: "2018", label: "Founded" },
//             { value: "4+", label: "Strategic Business Units" },
//             { value: "Millions", label: "Lives Impacted" },
//             { value: "Global", label: "Market Presence" },
//           ].map((item, index) => (
//             <div key={index} className="text-left">
//               <h3 className="text-3xl font-bold text-gray-900">{item.value}</h3>
//               <p className="text-gray-600 mt-1">{item.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default function About() {
//   return (
//     <section className="bg-white py-20">
//       <div className="max-w-5xl mx-auto px-6">
//         {/* <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6">
//           About Redith Group
//         </h2> */}

//         <div className="space-y-5 text-gray-700 text-base md:text-lg leading-relaxed">
//           <p>
//             Founded in <strong>2018</strong>, Redith Group is a diversified
//             conglomerate based in Bangladesh, operating across multiple
//             high-impact industries. The group was established with a clear focus
//             on innovation, operational excellence, and long-term sustainability.
//           </p>

//           <p>
//             Redith conducts its operations through four Strategic Business
//             Units:
//             <strong>
//               {" "}
//               Digital Marketing & IT, Consumer Brands, Agribusiness, and Retail
//               Chain
//             </strong>
//             . Each unit is independently managed while aligned with the group’s
//             overall vision and governance framework.
//           </p>

//           <p>
//             By integrating technology, quality-driven products, and
//             customer-focused services, Redith Group continues to build trusted
//             brands and deliver consistent value to consumers, partners, and
//             communities across Bangladesh and beyond.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default function About() {
//   return (
//     <section className="bg-white py-28">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
//           {/* Left Accent */}
//           <div className="lg:col-span-2">
//             <p className="text-sm uppercase tracking-widest text-primary mb-4">
//               About Redith Group
//             </p>
//             <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
//               A diversified group built on innovation, discipline, and long-term
//               value creation.
//             </h2>
//           </div>

//           {/* Right Content */}
//           <div className="lg:col-span-3 space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
//             <p>
//               Founded in <strong>2018</strong>, Redith Group is a diversified
//               conglomerate based in Bangladesh, operating across multiple
//               high-impact industries. The group was established with a clear
//               focus on innovation, operational excellence, and long-term
//               sustainability.
//             </p>

//             <p>
//               Redith conducts its operations through four Strategic Business
//               Units:
//               <strong>
//                 {" "}
//                 Digital Marketing & IT, Consumer Brands, Agribusiness, and
//                 Retail Chain
//               </strong>
//               . Each unit is independently managed while aligned with the
//               group’s overall vision and governance framework.
//             </p>

//             <p>
//               By integrating technology, quality-driven products, and
//               customer-focused services, Redith Group continues to build trusted
//               brands and deliver consistent value to consumers, partners, and
//               communities across Bangladesh and beyond.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function About() {
  return (
    <section className="bg-red-50 md:py-20 py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Small label */}
        <p className="text-xs uppercase tracking-[0.25em] text-primary mb-6">
          About Redith Group
        </p>

        {/* Statement headline */}
        <h2 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight mb-10">
          Building enduring businesses through innovation, discipline, and
          responsible growth.
        </h2>

        {/* Divider */}
        <div className="w-16 h-[2px] bg-primary/50 mb-10" />

        {/* Body */}
        <div className="space-y-7 text-gray-700 text-base md:text-lg leading-relaxed">
          <p>
            Founded in <strong>2018</strong>, Redith Group is a diversified
            conglomerate headquartered in Bangladesh, operating across multiple
            high-impact industries. The group was formed with a long-term
            perspective on innovation, operational excellence, and sustainable
            value creation.
          </p>

          <p>
            Redith operates through four Strategic Business Units —{" "}
            <strong>
              Digital Marketing & IT, Consumer Brands, Agribusiness, and Retail
              Chain
            </strong>{" "}
            — each structured with independent leadership while remaining
            aligned with the group’s governance standards and strategic
            direction.
          </p>

          <p>
            Through a disciplined approach to technology, quality, and customer
            experience, Redith Group continues to build trusted brands and
            deliver consistent value to consumers, partners, and communities
            across Bangladesh and selected international markets.
          </p>
        </div>
      </div>
    </section>
  );
}
