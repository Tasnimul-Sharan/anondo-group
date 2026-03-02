import Head from "next/head";
import LandingPage from "@/components/LandingPage";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import CompaniesShowcase from "@/components/CompaniesShowcase";
import ChairmanMessage from "@/components/ChairmanMessage";
import BusinessOverview from "@/components/BusinessOverview";
import WhyAnondoGroup from "@/components/WhyAnondoGroup";
import Contact from "@/components/Contact";
import GoogleMapSection from "@/components/GoogleMapSection";

export default function Home() {
  const meta = {
    title:
      "Anondo Group | Diversified Conglomerate in Bangladesh – Real Estate, Healthcare & Agriculture",

    description:
      "Anondo Group is a diversified business conglomerate in Bangladesh operating across Real Estate Development, Senior Living, Agriculture & Research, Security Services, and Pharmaceuticals. Driven by integrity, innovation, and sustainable growth.",

    keywords:
      "Anondo Group, Bangladesh Conglomerate, Real Estate Bangladesh, Senior Living Bangladesh, Agriculture Research Bangladesh, Security Services Bangladesh, Pharmaceuticals Bangladesh, Anondo Housing Society, Anondo Cityscapers, Bridge Pharmaceuticals",

    author: "Anondo Group",
    siteName: "Anondo Group",

    url: "https://www.anondogroup.com",
    image: "https://www.anondogroup.com/og/anondo-home-og.jpg",

    locale: "en_US",
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content={meta.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={meta.url} />
        <meta property="og:site_name" content={meta.siteName} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:locale" content={meta.locale} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Anondo Group",
              url: "https://www.anondogroup.com",
              logo: "https://www.anondogroup.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+8801313775333",
                contactType: "corporate office",
                areaServed: "BD",
                availableLanguage: "English",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Printers Building, 11–14th Floor, 5, Rajuk Avenue, Motijheel",
                addressLocality: "Dhaka",
                postalCode: "1000",
                addressCountry: "BD",
              },
            }),
          }}
        />
      </Head>

      <section id="home" className="scroll-mt-28">
        <LandingPage />
      </section>

      <section id="about" className="scroll-mt-28">
        <AboutSection />
      </section>

      <section id="business" className="scroll-mt-28">
        <BusinessOverview />
      </section>

      <section id="companies" className="scroll-mt-28">
        <CompaniesShowcase />
      </section>

      {/* <section id="chairman" className="scroll-mt-28">
        <ChairmanMessage />
      </section> */}

      <section id="stats" className="scroll-mt-28">
        <StatsSection />
      </section>

      <section id="why" className="scroll-mt-28">
        <WhyAnondoGroup />
      </section>

      <section id="contact" className="scroll-mt-28">
        <Contact />
      </section>

      <section id="map">
        <GoogleMapSection />
      </section>
    </>
  );
}
