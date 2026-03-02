// import Image from "next/image";
// import PageHeader from "../components/PageHeader";

// const leaders = [
//   {
//     name: "Mr. John Doe",
//     position: "Chairman",
//     img: "/images/placeholder.jpg",
//   },
//   { name: "Ms. Jane Smith", position: "CEO", img: "/images/placeholder.jpg" },
//   { name: "Mr. Ali Khan", position: "CFO", img: "/images/placeholder.jpg" },
//   { name: "Ms. Sara Rahman", position: "COO", img: "/images/placeholder.jpg" },
// ];

// export default function Leadership() {
//   return (
//     <div>
//       <section className="relative w-full py-24 bg-gradient-to-b from-gray-50 to-transparent">
//         {/* Content Container */}
//         <div className="max-w-7xl mx-auto px-6">
//           {/* Intro */}
//           <div className="max-w-3xl mb-16">
//             <p className="text-lg text-gray-700 leading-relaxed">
//               Redith Group operates under experienced leadership and robust
//               corporate governance frameworks that ensure strategic direction,
//               ethical conduct, and long-term value creation for all
//               stakeholders.
//             </p>
//           </div>

//           {/* Section Title */}
//           <div className="flex items-center justify-between mb-12">
//             <h2 className="text-3xl font-extrabold text-gray-900">
//               Our <span className="text-primary">Leadership Team</span>
//             </h2>
//             <div className="hidden md:block h-[1px] w-40 bg-gradient-to-r from-primary to-transparent" />
//           </div>

//           {/* Leadership Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
//             {leaders.map((leader, idx) => (
//               <div
//                 key={idx}
//                 className="group bg-white border rounded-2xl overflow-hidden
//                      shadow-sm hover:shadow-xl transition-all duration-300"
//               >
//                 {/* Image */}
//                 <div className="relative overflow-hidden">
//                   <Image
//                     src={leader.img}
//                     alt={leader.name}
//                     width={400}
//                     height={400}
//                     className="w-full h-72 object-cover
//                          group-hover:scale-105 transition duration-500"
//                   />
//                 </div>

//                 {/* Content */}
//                 <div className="p-6 text-center">
//                   <h3 className="text-lg font-semibold text-gray-900">
//                     {leader.name}
//                   </h3>
//                   <p className="mt-1 text-sm font-medium text-primary">
//                     {leader.position}
//                   </p>

//                   <div className="mt-4 mx-auto h-[2px] w-12 bg-primary rounded-full" />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import Image from "next/image";
import PageHeader from "../components/PageHeader";
import SectionBadge from "../components/SectionBadge";

const leaders = [
  {
    name: "Mr. John Doe",
    position: "Chairman",
    img: "/images/placeholder.jpg",
  },
  {
    name: "Ms. Jane Smith",
    position: "CEO",
    img: "/images/placeholder.jpg",
  },
  {
    name: "Mr. Ali Khan",
    position: "CFO",
    img: "/images/placeholder.jpg",
  },
  {
    name: "Ms. Sara Rahman",
    position: "COO",
    img: "/images/placeholder.jpg",
  },
];

export default function Leadership() {
  return (
    <section className="relative w-full py-28 bg-gradient-to-b from-gray-50 via-white to-transparent">
      <div className="custom-container mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <SectionBadge text="Leadership" />

          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Our <span className="text-primary">Leadership Team</span>
          </h2>

          <p className="mt-5 text-lg text-gray-700 leading-relaxed">
            Redith Group is guided by experienced leaders who bring strategic
            vision, ethical governance, and operational excellence—ensuring
            sustainable growth and long-term value for all stakeholders.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden
                         shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={leader.img}
                  alt={leader.name}
                  width={400}
                  height={400}
                  className="w-full h-72 object-cover
                             group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {leader.name}
                </h3>

                <p className="mt-1 text-sm font-medium tracking-wide text-primary uppercase">
                  {leader.position}
                </p>

                <div className="mt-4 mx-auto h-[3px] w-10 bg-primary rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
