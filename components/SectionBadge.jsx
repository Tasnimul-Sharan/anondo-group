// "use client";

// import { motion } from "framer-motion";

// export default function SectionBadge({ text, className = "" }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: true }}
//       className={`inline-flex items-center gap-3 px-5 py-2 rounded-full
//       bg-gradient-to-r from-primary/10 to-primary/5
//       border border-primary/20 backdrop-blur-sm
//       ${className}`}
//     >
//       <span className="relative flex h-2 w-2">
//         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
//         <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
//       </span>

//       <span className="text-xs md:text-sm font-semibold tracking-widest uppercase text-primary">
//         {text}
//       </span>
//     </motion.div>
//   );
// }

"use client";

import { motion } from "framer-motion";

export default function SectionBadge({ text, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`inline-flex items-center px-6 py-2.5 rounded-full
      bg-white border border-primary/20
      shadow-sm backdrop-blur-md
      ${className}`}
    >
      {/* Subtle Accent Line */}
      <span className="w-6 h-[2px] bg-primary mr-3 rounded-full"></span>

      {/* Text */}
      <span className="text-[11px] md:text-xs font-semibold tracking-[0.2em] uppercase text-primary">
        {text}
      </span>
    </motion.div>
  );
}