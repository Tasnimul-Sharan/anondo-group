import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Custom404() {
  const underlineRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    const underline = underlineRef.current;
    const link = linkRef.current;

    const handleEnter = () => {
      gsap.to(underline, {
        width: "100%",
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleLeave = () => {
      gsap.to(underline, {
        width: "0%",
        duration: 0.4,
        ease: "power2.out",
      });
    };

    link.addEventListener("mouseenter", handleEnter);
    link.addEventListener("mouseleave", handleLeave);

    return () => {
      link.removeEventListener("mouseenter", handleEnter);
      link.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Head>
        <title>404 | Page Not Found – Anondo Group</title>

        <meta
          name="description"
          content="The page you are looking for could not be found. Explore Anondo Group’s diversified businesses across real estate, agriculture, security services, and pharmaceuticals."
        />

        <meta name="robots" content="noindex, nofollow" />

        <meta property="og:title" content="404 | Anondo Group" />

        <meta
          property="og:description"
          content="The requested page does not exist. Discover Anondo Group’s corporate vision, businesses, and innovations."
        />

        <meta property="og:type" content="website" />

        <meta property="og:url" content="https://www.anondogroup.com/404" />

        <meta
          property="og:image"
          content="https://www.anondogroup.com/og/404-og.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:title" content="404 | Anondo Group" />

        <meta
          name="twitter:description"
          content="The requested page could not be found. Return to Anondo Group homepage."
        />

        <meta
          name="twitter:image"
          content="https://www.anondogroup.com/og/404-og.jpg"
        />
      </Head>

      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
        {/* 404 */}
        <h1 className="text-7xl md:text-8xl font-black text-gray-900 tracking-tight mb-4">
          404
        </h1>

        {/* Message */}
        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mb-6">
          The page you are looking for cannot be found or may have been moved.
        </p>

        <p className="text-gray-600 max-w-xl mb-10">
          Anondo Group is a diversified conglomerate dedicated to sustainable
          development across real estate, agriculture, security services, and
          pharmaceuticals. Let’s help you return to the homepage.
        </p>

        <div className="relative inline-block group">
          <Link href="/" legacyBehavior>
            <a
              ref={linkRef}
              className="text-secondary text-lg md:text-xl font-semibold relative z-10 group-hover:text-primary transition-colors duration-500"
            >
              ← Return to Home
            </a>
          </Link>

          <span
            ref={underlineRef}
            className="absolute left-0 bottom-0 h-0.5 w-0 bg-primary rounded"
          />
        </div>
      </div>
    </section>
  );
}
