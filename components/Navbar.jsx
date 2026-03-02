"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import NavLink from "./NavLink";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", path: "#home" },
    { label: "About", path: "#about" },
    { label: "Business", path: "#business" },
    { label: "Companies", path: "#companies" },
    { label: "Why Us", path: "#why" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 transform-gpu
        ${scrolled ? "bg-white border" : "bg-transparent border-transparent"}`}
    >
      <div className="custom-container mx-auto flex items-center justify-between h-24">
        {/* -------- Logo -------- */}
        <Link href="/" className="flex items-center">
          <Image
            src="/anondo-group-logo-1.png"
            alt="Anondo Group Logo"
            width={1536}
            height={1024}
            className="md:h-32 h-16 w-auto"
            priority
          />
        </Link>
        {/* -------- Mobile Button -------- */}
        <button
          className={`md:hidden text-3xl z-50 transition-colors ${
            scrolled ? "text-secondary" : "text-white"
          }`}
          onClick={() => setOpen(!open)}
        >
          {open ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
        {/* -------- Desktop Menu -------- */}
        <nav
          className={`hidden md:flex items-center gap-10 text-sm font-semibold tracking-wide
    ${scrolled ? "text-secondary" : "text-white"}`}
        >
          {menuItems.map((item) => (
            <NavLink key={item.path} href={item.path}>
              {item.label}
            </NavLink>
          ))}

          <Link
            href="#contact"
            className="bg-primary text-white px-6 py-2.5 rounded hover:bg-secondary transition-all transform-gpu duration-500"
          >
            Contact
          </Link>
        </nav>
      </div>

      <div
        className={`md:hidden fixed top-0 right-0 h-full w-72 bg-white shadow-xl p-6 transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col gap-5 text-base font-semibold mt-16 text-secondary">
          <Link href="/about" onClick={() => setOpen(false)}>
            About
          </Link>
        </div>
      </div>
    </header>
  );
}
