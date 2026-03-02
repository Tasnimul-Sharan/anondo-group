import Link from "next/link";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-secondary text-off_white">
      {/* Content Wrapper */}
      <div className="h-[4px] bg-primary w-full" />
      <div className="custom-container mx-auto">
        {/* Top Accent Line (Inside Container) */}

        <div className="py-20 grid gap-14 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo + Description */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/anondo-group-logo.png"
                alt="Anondo Group Logo"
                width={1536}
                height={1024}
                className="object-contain"
              />
            </Link>

            <p className="text-sm leading-relaxed text-off_white">
              Anondo Group is a diversified conglomerate operating across real
              estate, senior living, agriculture, security services, and
              pharmaceuticals—driven by integrity, innovation, and sustainable
              development.
            </p>
          </div>

          {/* About */}
          <div>
            <h3 className="text-base font-semibold uppercase tracking-widest">
              About
            </h3>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                { label: "About Us", path: "#about" },
                { label: "Business", path: "#business" },
                { label: "Our Companies", path: "#companies" },
                { label: "Why Choose Us", path: "#why" },
                { label: "Contact", path: "#contact" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.path}
                    className="hover:text-primary transition duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Companies */}
          <div>
            <h3 className="text-base font-semibold uppercase tracking-widest">
              Our Companies
            </h3>

            <ul className="mt-6 space-y-3 text-sm">
              {[
                {
                  name: "Anondo Housing Society",
                  link: "https://www.anondohousing.com/",
                },
                {
                  name: "Anondo Cityscapers Ltd.",
                  link: "https://anondocityscapers.com/",
                },
                {
                  name: "Anondo Baari",
                  link: "https://www.anondobari.com/",
                },
                {
                  name: "Pranto ARDI",
                  link: "https://www.prantoardi.com/",
                },
                {
                  name: "Anondo Universal Services Ltd.",
                  link: "https://www.anondouniversalserviceslimited.com/",
                },
                {
                  name: "Bridge Pharmaceuticals Ltd.",
                  link: "https://bridgepharmabd.com/",
                },
              ].map((company, idx) => (
                <li key={idx}>
                  <a
                    href={company.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition"
                  >
                    {company.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold uppercase tracking-widest">
              Corporate Office
            </h3>

            <div className="mt-6 space-y-5 text-sm">
              <div className="flex gap-3">
                <FaMapMarkerAlt className="text-primary mt-1 shrink-0" />
                <p>
                  Printers Building, 11–14th Floor
                  <br />
                  5, Rajuk Avenue, Motijheel
                  <br />
                  Dhaka 1000, Bangladesh
                </p>
              </div>

              <div className="flex gap-3">
                <FaPhoneAlt className="text-primary mt-1 shrink-0" />
                <p>+880 1313-775333</p>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="text-primary mt-1 shrink-0" />
                <p>info@anondogroup.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} Anondo Group. All Rights Reserved.</p>

          <p className="mt-3 md:mt-0">Designed & Developed with Excellence</p>
        </div>
      </div>
    </footer>
  );
}
