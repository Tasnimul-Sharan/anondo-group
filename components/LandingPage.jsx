"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "./Button";

const heroContent = {
  subheading: "Integrated Business. Sustainable Growth.",
  heading: "Welcome to Anondo Group",
  description: `Building Communities, Care & Growth. Anondo Group is a forward-thinking corporate group bringing together diverse enterprises under one trusted brand. Through strategic development, responsible operations, and long-term vision, we create meaningful impact across communities and industries.`,
  image: "/hero-bg.jpg",
};

const LandingPage = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 4, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroContent.image})` }}
      />

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <motion.div
        className="relative z-10 px-6 flex flex-col items-center justify-center max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <p className="uppercase tracking-widest text-sm text-gray-200 mb-3">
          {heroContent.subheading}
        </p>

        <h1 className="text-4xl md:text-6xl font-serif italic font-semibold mb-4">
          <span className="text-primary">
            {heroContent.heading.split(" Through")[0]}
          </span>{" "}
          <span className="text-white">
            Through{heroContent.heading.split(" Through")[1]}
          </span>
        </h1>

        <p className="text-base md:text-lg text-gray-200 leading-relaxed whitespace-pre-line">
          {heroContent.description}
        </p>

        <div className="mt-8 flex gap-4">
          <Link href="#companies">
            <Button variant="primary" size="md">
              Explore Companies
            </Button>
          </Link>

          <Link href="/contact">
            <Button variant="outline" size="md">
              Contact Us
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingPage;
