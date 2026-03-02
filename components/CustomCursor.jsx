// "use client";
// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";

// const CustomCursor = () => {
//   const cursorRef = useRef(null);
//   const dotRef = useRef(null);
//   const [hover, setHover] = useState(false);

//   useEffect(() => {
//     const cursor = cursorRef.current;
//     const dot = dotRef.current;

//     let mouseX = 0;
//     let mouseY = 0;

//     // heavy smooth follow (luxury inertia)
//     gsap.to(
//       {},
//       {
//         duration: 0.01,
//         repeat: -1,
//         onRepeat: () => {
//           gsap.to(cursor, {
//             x: mouseX - 24,
//             y: mouseY - 24,
//             duration: 0.35, // ⬅️ slower = premium
//             ease: "power3.out",
//           });

//           gsap.to(dot, {
//             x: mouseX - 4,
//             y: mouseY - 4,
//             duration: 0.15,
//             ease: "power3.out",
//           });
//         },
//       }
//     );

//     const move = (e) => {
//       mouseX = e.clientX;
//       mouseY = e.clientY;
//     };

//     window.addEventListener("mousemove", move);

//     // hover detection
//     const targets = document.querySelectorAll("a, button");
//     targets.forEach((el) => {
//       el.addEventListener("mouseenter", () => setHover(true));
//       el.addEventListener("mouseleave", () => setHover(false));
//     });

//     return () => window.removeEventListener("mousemove", move);
//   }, []);

//   return (
//     <>
//       {/* OUTER RING */}
//       <div
//         ref={cursorRef}
//         className="fixed top-0 left-0 z-[9999] pointer-events-none"
//         style={{
//           width: hover ? 64 : 48,
//           height: hover ? 64 : 48,
//           border: "1.5px solid rgba(255,255,255,0.9)",
//           borderRadius: "999px",
//           mixBlendMode: "difference", // 🔥 auto color invert
//         }}
//       />

//       {/* CENTER DOT */}
//       <div
//         ref={dotRef}
//         className="fixed top-0 left-0 z-[9999] pointer-events-none"
//         style={{
//           width: 8,
//           height: 8,
//           borderRadius: "999px",
//           background: "#fff",
//           mixBlendMode: "difference", // 🔥 auto contrast
//         }}
//       />
//     </>
//   );
// };

// export default CustomCursor;

"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursor = useRef(null);
  const dot = useRef(null);

  useEffect(() => {
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };

    gsap.set(cursor.current, { xPercent: -50, yPercent: -50 });
    gsap.set(dot.current, { xPercent: -50, yPercent: -50 });

    // SMOOTH FOLLOW (true inertia)
    gsap.ticker.add(() => {
      pos.x += (mouse.x - pos.x) * 0.12;
      pos.y += (mouse.y - pos.y) * 0.12;

      gsap.set(cursor.current, { x: pos.x, y: pos.y });
      gsap.set(dot.current, { x: mouse.x, y: mouse.y });
    });

    const move = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", move);

    // HOVER EFFECT (GSAP scale – no re-render)
    document.addEventListener("mouseover", (e) => {
      if (e.target.closest("a, button")) {
        gsap.to(cursor.current, {
          scale: 1.6,
          duration: 0.3,
          ease: "power3.out",
        });
      }
    });

    document.addEventListener("mouseout", (e) => {
      if (e.target.closest("a, button")) {
        gsap.to(cursor.current, {
          scale: 1,
          duration: 0.3,
          ease: "power3.out",
        });
      }
    });

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* OUTER RING */}
      <div
        ref={cursor}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          width: 48,
          height: 48,
          border: "1.5px solid rgba(255,255,255,0.9)",
          borderRadius: "50%",
          mixBlendMode: "difference",
        }}
      />

      {/* CENTER DOT */}
      <div
        ref={dot}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          width: 8,
          height: 8,
          background: "#fff",
          borderRadius: "50%",
          mixBlendMode: "difference",
        }}
      />
    </>
  );
}
