import Image from "next/image";
import PageHeader from "./PageHeader";
// import PageHeader from "../../components/PageHeader";

export default function DigitalIT() {
  return (
    <div>
      <PageHeader
        title="Digital Marketing & IT Division"
        subtitle="Smart solutions for the future"
      />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold mb-4">Redith IT</h2>
        <p className="text-gray-700 leading-relaxed">
          Redith IT specializes in delivering cutting-edge software solutions,
          enterprise systems, mobile apps, websites, and cybersecurity services.
          It enables businesses to streamline operations and ensure data
          integrity through modern digital transformation tools.
        </p>

        <ul className="mt-6 space-y-2 text-gray-700">
          <li>• Custom Software Development</li>
          <li>• AI & Machine Learning Integration</li>
          <li>• Cloud Infrastructure Services</li>
          <li>• Cybersecurity Solutions</li>
          <li>• Enterprise ERP Systems</li>
          <li>• IT Consulting</li>
        </ul>

        <hr className="my-12" />

        <h2 className="text-2xl font-bold mb-4">
          Redith Digital Marketing Agency
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Redith’s digital marketing agency is transforming online branding in
          Bangladesh with AI-powered tools and data-driven strategies designed
          to meet evolving consumer behavior.
        </p>

        <ul className="mt-6 space-y-2 text-gray-700">
          <li>• Digital Strategy & Planning</li>
          <li>• Social Media Management</li>
          <li>• SEO & SEM</li>
          <li>• Content & Influencer Marketing</li>
          <li>• Branding & Graphic Design</li>
          <li>• Marketing Analytics</li>
        </ul>

        <hr className="my-12" />

        <h2 className="text-2xl font-bold mb-4">AI Innovations</h2>
        <p className="text-gray-700 leading-relaxed">
          Redith’s AI innovations include campaign optimization, predictive
          analytics, chatbot systems, and personalized customer journeys to help
          brands scale faster with automation and intelligence.
        </p>

        <Image
          src="/images/placeholder.jpg"
          alt="Digital IT"
          width={1000}
          height={600}
          className="rounded mt-8 shadow"
        />
      </section>
    </div>
  );
}
