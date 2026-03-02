// import Image from "next/image";
// import PageHeader from "./PageHeader";

// export default function ServiceDetails({ service }) {
//   return (
//     <div>
//       <PageHeader
//         title={service.header.title}
//         subtitle={service.header.subtitle}
//       />

//       <section className="max-w-7xl mx-auto px-6 py-20">
//         {service.sections.map((section, index) => (
//           <div key={index} className="mb-12">
//             {section.title && (
//               <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
//             )}

//             {section.description && (
//               <p className="text-gray-700 leading-relaxed mb-6">
//                 {section.description}
//               </p>
//             )}

//             {section.list && (
//               <ul className="space-y-2 text-gray-700">
//                 {section.list.map((item, i) => (
//                   <li key={i}>• {item}</li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         ))}

//         {service.image && (
//           <Image
//             src={service.image}
//             alt={service.header.title}
//             width={1000}
//             height={600}
//             className="rounded shadow"
//           />
//         )}
//       </section>
//     </div>
//   );
// }

// import Image from "next/image";
// import PageHeader from "./PageHeader";

// export default function ServiceDetails({ service }) {
//   return (
//     <div className="bg-neutral-50">
//       <PageHeader
//         title={service.header.title}
//         subtitle={service.header.subtitle}
//       />

//       <section className="max-w-7xl mx-auto px-6 py-24">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
//           {/* Main Content */}
//           <div className="lg:col-span-7 space-y-14">
//             {service.sections.map((section, index) => (
//               <div key={index}>
//                 {section.title && (
//                   <h2 className="text-3xl font-semibold text-neutral-900 mb-5 leading-tight">
//                     {section.title}
//                   </h2>
//                 )}

//                 {section.description && (
//                   <p className="text-lg text-neutral-600 leading-relaxed mb-6">
//                     {section.description}
//                   </p>
//                 )}

//                 {section.list && (
//                   <ul className="space-y-4">
//                     {section.list.map((item, i) => (
//                       <li key={i} className="flex gap-4 text-neutral-700">
//                         <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-900 shrink-0" />
//                         <span className="leading-relaxed">{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Premium Image / Visual Column */}
//           {service.image && (
//             <div className="lg:col-span-5">
//               <div className="lg:sticky lg:top-32 space-y-6">
//                 <div className="overflow-hidden rounded-3xl bg-white shadow-xl border border-neutral-200">
//                   <Image
//                     src={service.image}
//                     alt={service.header.title}
//                     width={800}
//                     height={600}
//                     priority
//                     className="w-full h-auto object-cover"
//                   />
//                 </div>

//                 {/* Optional Highlight Box */}
//                 <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
//                   <p className="text-sm uppercase tracking-wider text-neutral-500 mb-2">
//                     Why this service
//                   </p>
//                   <p className="text-neutral-700 leading-relaxed">
//                     Built with industry best practices, modern technology, and a
//                     focus on long-term scalability and performance.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// }

import Image from "next/image";
import PageHeader from "./PageHeader";

export default function ServiceDetails({ service }) {
  return (
    <div className="bg-gray-50">
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-10">
            {service.sections.map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition"
              >
                {section.title && (
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
                    {section.title}
                  </h2>
                )}

                {section.description && (
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {section.description}
                  </p>
                )}

                {section.list && (
                  <ul className="space-y-3">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Image */}
          {service.image && (
            <div className="lg:col-span-5 sticky top-24">
              <div className="relative overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src={service.image}
                  alt={service.header.title}
                  width={1000}
                  height={700}
                  className="object-cover"
                />

                {/* Gradient Overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" /> */}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

// import Image from "next/image";
// import PageHeader from "./PageHeader";

// export default function ServiceDetails({ service }) {
//   return (
//     <div className="bg-red-50">
//       {/* <PageHeader
//         title={service.header.title}
//         subtitle={service.header.subtitle}
//       /> */}

//       <section className="max-w-7xl mx-auto px-6 md:px-0 py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           {/* Content */}
//           <div className="lg:col-span-2 space-y-10">
//             {service.sections.map((section, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl border border-gray-200 p-8"
//               >
//                 {section.title && (
//                   <h2 className="text-2xl font-semibold text-gray-900 mb-4">
//                     {section.title}
//                   </h2>
//                 )}

//                 {section.description && (
//                   <p className="text-gray-600 leading-relaxed mb-6">
//                     {section.description}
//                   </p>
//                 )}

//                 {section.list && (
//                   <ul className="space-y-3">
//                     {section.list.map((item, i) => (
//                       <li
//                         key={i}
//                         className="flex items-start gap-3 text-gray-700"
//                       >
//                         <span className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
//                         <span>{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Sidebar Image */}
//           {service.image && (
//             <div className="lg:sticky lg:top-28 h-fit">
//               <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
//                 <Image
//                   src={service.image}
//                   alt={service.header.title}
//                   width={600}
//                   height={400}
//                   className="w-full h-auto object-cover"
//                   priority
//                 />
//               </div>
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// }
