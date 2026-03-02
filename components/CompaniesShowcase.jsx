import Image from "next/image";
import { FiMail, FiPhone, FiExternalLink, FiMapPin } from "react-icons/fi";
import SectionBadge from "./SectionBadge";
import Link from "next/link";

const companies = [
  {
    name: "Anondo Housing Society",
    link: "https://www.anondohousing.com/",
    email: "info@anondohousing.com",
    phone: ["+8801313775333", "+8801313775334", "+8801313775335"],
    projectAddress:
      "Anondo Housing Society, Purbachal New Town, Rupganj, Narayanganj, Bangladesh",
    corporateAddress:
      "Printers Building, 11–14th Floor, 5 Rajuk Avenue, Motijheel, 1000 Dhaka, Bangladesh",
    image: "/companies/housing.png",
  },
  {
    name: "Anondo Bhubon.",
    link: "https://anondocityscapers.com/anondo-bhubon/",
    email: "info@anondocityscapers.com",
    phone: ["+8801313775333", "+8801313775334", "+8801313775335"],
    projectAddress: "VH2R+7Q, Anondo Bhuban Site Office, Bholabo Union",
    corporateAddress:
      "Printers Building, 11–14th Floor, 5 Rajuk Avenue, Motijheel, 1000 Dhaka, Bangladesh",
    image: "/companies/bhubon-logo.jpeg",
  },
  {
    name: "Anondo Baari",
    link: "https://www.anondobari.com/",
    email: "info@anondobari.com",
    phone: ["+8801313775333", "+8801313775334", "+8801313775335"],
    projectAddress:
      "Anondo Baari, Ulukhola, Nagari Union, Kaliganj Upazila, Gazipur District (near Powran Bridge).",
    corporateAddress:
      "Printers Building, 11–14th Floor, 5 Rajuk Avenue, Motijheel, 1000 Dhaka, Bangladesh",
    image: "/companies/baari.png",
  },
  {
    name: "Pranto ARDI",
    link: "https://www.prantoardi.com/",
    email: "info@prantoardi.com",
    phone: ["+8801324711849"],
    projectAddress:
      "Horipur Village, Meghna Upazila, Comilla District, Bangladesh",
    corporateAddress:
      "Printers Building, 11–14th Floor, 5 Rajuk Avenue, Motijheel, 1000 Dhaka, Bangladesh",
    image: "/companies/pranto.png",
  },
  {
    name: "Anondo Universal Services Ltd.",
    link: "https://www.anondouniversalserviceslimited.com/",
    email: "anondo.ausl@gmail.com",
    phone: ["+8801313775333", "+8801313775334", "+8801313775335"],
    projectAddress:
      "Anondo Housing Society, Purbachal New Town, Rupganj, Narayanganj, Bangladesh",
    corporateAddress:
      "Printers Building, 14th Floor, 5 Rajuk Avenue, Motijheel, 1000 Dhaka, Bangladesh",
    image: "/companies/security.jpg",
  },
  {
    name: "Bridge Pharmaceuticals Ltd.",
    link: "https://bridgepharmabd.com/",
    email: "info@bridgepharmabd.com",
    phone: ["+8801762627611"],
    projectAddress: "West Tengra, Sarulia, Demra, Dhaka, Bangladesh",
    corporateAddress:
      "Printers Building, 13th Floor, 5 Rajuk Avenue, Motijheel, 1000 Dhaka, Bangladesh",
    image: "/companies/bridge.jpg",
  },
];

export default function CompaniesShowcase() {
  return (
    <section id="companies" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <SectionBadge text="Our Business Portfolio" className="mb-6" />
          <h2 className="text-4xl font-bold text-gray-900">Our Companies</h2>
        </div>

        <div className="space-y-10">
          {companies.map((company, i) => (
            <Link
              key={i}
              href={company.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8 bg-white border border-gray-200 rounded-xl p-8 transition hover:border-primary/40">
                {/* Logo */}
                <div className="relative w-60 h-36 flex-shrink-0 flex items-center">
                  <Image
                    src={company.image}
                    alt={company.name}
                    fill
                    className="object-contain transition duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Info Section */}
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 group-hover:text-primary transition">
                    {company.name}
                  </h3>

                  <div className="space-y-2 text-base text-gray-600">
                    {/* Email */}
                    <p>
                      <span className="font-medium text-gray-800">Email:</span>{" "}
                      <a
                        href={`mailto:${company.email}`}
                        className="hover:text-primary transition"
                      >
                        {company.email}
                      </a>
                    </p>

                    {/* Phone */}
                    <p>
                      <span className="font-medium text-gray-800">Phone:</span>{" "}
                      {company.phone.map((num, idx) => (
                        <a
                          key={idx}
                          href={`tel:${num}`}
                          className="hover:text-primary transition mr-2"
                        >
                          {num}
                          {idx !== company.phone.length - 1 && ","}
                        </a>
                      ))}
                    </p>

                    {/* Divider */}
                    <div className="w-12 h-[1px] bg-gray-300 my-3" />

                    {/* Addresses */}
                    <p>
                      <span className="font-medium text-gray-800">
                        Project Address:
                      </span>{" "}
                      {company.projectAddress}
                    </p>

                    <p>
                      <span className="font-medium text-gray-800">
                        Corporate Office:
                      </span>{" "}
                      {company.corporateAddress}
                    </p>
                  </div>
                </div>

                {/* Visit Button */}
                <div className="md:self-start">
                  <a
                    href={company.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-5 py-2.5 
               bg-primary/10 text-primary 
               rounded-full text-sm font-semibold 
               transition-all duration-300
               hover:bg-primary hover:text-white"
                  >
                    View Website
                    <FiExternalLink
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      size={16}
                    />
                  </a>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
