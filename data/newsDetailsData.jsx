import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const newsDetailsData = {
  socialIcons: [
    {
      icon: FaFacebookF,
      link: (url) =>
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      icon: FaXTwitter,
      link: (url, title) =>
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url,
        )}&text=${encodeURIComponent(title)}`,
    },
    {
      icon: FaLinkedinIn,
      link: (url, title) =>
        `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
          url,
        )}&title=${encodeURIComponent(title)}`,
    },
  ],
  newsDetails: [
    {
      slug: "ai-powered-digital-transformation",
      blogPost: {
        title: "AI-Powered Digital Transformation",
        author: "Redith IT",
        date: "Jan 5, 2026",
        image: "/images/news/redith-it.jpg",
        description:
          "Redith IT is leading AI-powered digital transformation by delivering secure, scalable, and intelligent software solutions across industries. From enterprise software to cloud platforms, AI integration is driving measurable growth.",
        checklist: [
          "AI-driven enterprise software solutions",
          "Cloud infrastructure & cybersecurity services",
          "Scalable systems for long-term growth",
          "Automation & AI integration for business processes",
          "Data analytics for informed decision-making",
          "Custom digital strategies tailored to clients",
        ],

        subImages: [
          "/images/news/redith-it-1.jpg",
          "/images/news/redith-it-2.jpg",
          //   "/images/news/redith-it-3.jpg",
        ],
        subContent: [
          "Redith IT empowers organizations to adopt AI-driven workflows, enhancing efficiency, reducing operational costs, and improving customer engagement.",
          "By integrating cloud services with intelligent automation, businesses can securely manage data, scale operations, and adapt to market demands swiftly.",
          "Advanced analytics tools allow companies to derive actionable insights, optimize processes, and make informed strategic decisions.",
          "AI-enhanced cybersecurity solutions safeguard digital assets, mitigate risks, and maintain business continuity in a dynamic threat landscape.",
          "Customized software solutions ensure seamless integration with existing systems, supporting long-term innovation and sustainability.",
          "With continuous support and monitoring, Redith IT guarantees organizations stay ahead in the fast-evolving digital ecosystem.",
        ],

        quote:
          "Digital transformation is not about technology alone—it’s about empowering people and businesses through innovation.",

        postTags: [
          "AI",
          "Digital Transformation",
          "IT Solutions",
          "Innovation",
          "Business Growth",
        ],
      },
    },
    {
      slug: "consumer-brands-expansion",
      blogPost: {
        title: "Consumer Brands Expansion",
        author: "Redith Brands",
        date: "Dec 20, 2025",
        image: "/images/news/consumer-brands.jpg",
        description:
          "Redith Consumer Brands continues its nationwide expansion, delivering quality and affordable products to millions of households, reinforcing trust and market leadership.",

        checklist: [
          "Wide range of daily consumer products",
          "Nationwide distribution network",
          "Quality-focused manufacturing processes",
          "Sustainable packaging & production",
          "Consumer engagement & loyalty programs",
          "Market research driven product innovation",
        ],

        subImages: [
          "/images/news/consumer-1.jpg",
          "/images/news/consumer-2.jpg",
          //   "/images/news/consumer-3.jpg",
        ],

        subContent: [
          "Redith Consumer Brands ensures that its products are available to both urban and rural households, maintaining consistency in quality and affordability.",
          "The company leverages robust supply chain management to optimize distribution, reduce delays, and maintain product freshness.",
          "By listening to consumer feedback, Redith introduces innovative products that cater to evolving lifestyle needs and preferences.",
          "Sustainability initiatives, including eco-friendly packaging, reinforce the brand’s commitment to environmental responsibility.",
          "Through promotional campaigns, loyalty programs, and digital marketing, the brand maintains strong engagement and consumer trust.",
          "These strategies ensure Redith continues to grow as a household name while delivering value and satisfaction to its customers.",
        ],

        quote:
          "Quality products should be accessible to every family, everywhere.",

        postTags: [
          "Consumer Goods",
          "Retail",
          "Expansion",
          "Sustainability",
          "Brand Growth",
        ],
      },
    },

    {
      slug: "smart-farming-initiative",
      blogPost: {
        title: "Smart Farming Initiative",
        author: "Redith Agro",
        date: "Dec 2, 2025",
        image: "/images/news/agribusiness.jpg",
        description:
          "Redith Agribusiness is transforming agriculture with AI-powered solutions, modern farm technologies, and sustainable practices to enhance productivity and farmer livelihoods.",

        checklist: [
          "AI-based crop monitoring & forecasting",
          "Smart irrigation & water management systems",
          "Modern farm mechanization and equipment",
          "Sustainable agricultural practices",
          "Farmer training & technology adoption",
          "Data-driven soil and crop management",
        ],

        subImages: [
          "/images/news/agro-1.jpg",
          "/images/news/agro-2.jpg",
          //   "/images/news/agro-3.jpg",
        ],

        subContent: [
          "Redith Agro integrates AI and IoT devices to monitor crop health, forecast yields, and optimize irrigation schedules.",
          "Smart irrigation systems reduce water wastage while ensuring crops receive optimal hydration for growth.",
          "Modern farm mechanization accelerates planting and harvesting, increasing efficiency and reducing labor dependency.",
          "Data-driven insights empower farmers to make informed decisions about crop rotation, soil management, and fertilizer application.",
          "Training programs ensure farmers adopt new technologies effectively, improving productivity and sustainability.",
          "These initiatives contribute to higher yield, better income for farmers, and a more sustainable agricultural ecosystem.",
        ],

        quote: "Smart farming is the foundation of a sustainable food future.",

        postTags: [
          "Agribusiness",
          "Smart Farming",
          "Sustainability",
          "AI",
          "Innovation",
        ],
      },
    },
    {
      slug: "web-development-solutions",
      blogPost: {
        title: "Web Development Solutions",
        author: "Redith IT",
        date: "Nov 5, 2025",
        image: "/images/news/web-development.jpg",
        description:
          "Redith IT builds high-performance, secure, and scalable websites and web applications for modern businesses, ensuring optimal user experience and robust back-end systems.",

        checklist: [
          "Custom website & web application development",
          "Mobile-responsive & SEO-friendly designs",
          "Performance & security focused builds",
          "Scalable architecture for future growth",
          "Integration with APIs & third-party platforms",
          "UI/UX design aligned with business goals",
        ],

        subImages: [
          "/images/news/web-1.jpg",
          "/images/news/web-2.jpg",
          "/images/news/web-3.jpg",
        ],

        subContent: [
          "From corporate websites to complex platforms, Redith IT ensures intuitive design, clean code, and future-ready solutions.",
          "Our development process includes thorough requirement analysis, prototyping, and agile implementation to ensure client satisfaction at every stage.",
          "We focus on modern technologies like React, Next.js, Node.js, and cloud services to deliver fast, reliable, and scalable websites.",
          "Security is a core priority: we implement SSL, data encryption, secure authentication, and regular vulnerability assessments.",
          "User experience is optimized through responsive designs, interactive UI elements, fast loading times, and accessibility standards.",
          "With analytics integration, businesses can track user behavior, measure performance, and continuously improve digital presence.",
        ],

        quote:
          "A strong digital presence begins with a powerful website and a seamless user experience.",

        postTags: [
          "Web Development",
          "UI UX",
          "Technology",
          "Digital Transformation",
          "Business Growth",
        ],
      },
    },
    {
      slug: "retail-chain-innovation",
      blogPost: {
        title: "Retail Chain Innovation",
        author: "Redith Retail",
        date: "Nov 18, 2025",
        image: "/images/news/retail-chain.jpg",
        description:
          "Redith Retail Chain is redefining shopping experiences through smart stores, e-commerce, and same-day delivery, enhancing convenience and customer satisfaction.",

        checklist: [
          "Hypermarkets & neighborhood stores",
          "E-commerce & mobile shopping apps",
          "Same-day delivery & quick logistics",
          "Loyalty programs & customer engagement",
          "Smart billing & inventory management",
          "Data analytics for personalized offers",
        ],

        subImages: [
          "/images/news/retail-1.jpg",
          "/images/news/retail-2.jpg",
          //   "/images/news/retail-3.jpg",
        ],
        subContent: [
          "Redith Retail integrates technology into its retail formats to provide a seamless shopping experience.",
          "E-commerce platforms are designed for easy navigation, personalized recommendations, and fast checkout.",
          "Neighborhood stores leverage smart inventory management to maintain product availability at all times.",
          "Same-day delivery services ensure customers receive their products quickly, enhancing satisfaction and loyalty.",
          "Data-driven marketing enables personalized offers based on customer preferences and purchasing history.",
          "Through these innovations, Redith Retail strengthens its position as a modern, customer-centric retail leader.",
        ],
        quote:
          "Convenience, choice, and affordability define the future of retail.",

        postTags: [
          "Retail",
          "E-commerce",
          "Innovation",
          "Customer Experience",
          "Logistics",
        ],
      },
    },
    {
      slug: "ai-in-digital-marketing",
      blogPost: {
        title: "AI in Digital Marketing",
        author: "Redith Digital",
        date: "Oct 15, 2025",
        image: "/images/news/digital-marketing.jpg",
        description:
          "Redith Digital leverages AI-driven analytics to deliver data-focused marketing strategies, optimizing campaigns and ensuring measurable results.",
        checklist: [
          "AI-powered campaign optimization",
          "SEO & social media analytics",
          "Data-driven decision making",
          "Predictive customer behavior modeling",
          "Personalized content & messaging",
          "Marketing automation for efficiency",
        ],
        subImages: [
          "/images/news/marketing-1.jpg",
          "/images/news/marketing-2.jpg",
          //   "/images/news/marketing-3.jpg",
        ],
        subContent: [
          "By analyzing vast amounts of consumer data, Redith Digital tailors marketing strategies for maximum impact.",
          "AI tools help brands understand customer behavior, preferences, and engagement patterns for precise targeting.",
          "Predictive analytics enable proactive decision-making, improving ROI and minimizing wasteful spending.",
          "Marketing automation streamlines repetitive tasks, freeing teams to focus on creative strategy.",
          "Personalized content ensures that each audience segment receives relevant messaging, improving conversion rates.",
          "Continuous monitoring and analytics ensure campaigns evolve with changing market trends, maintaining competitive advantage.",
        ],
        quote: "Marketing works best when data leads creativity.",
        postTags: [
          "Digital Marketing",
          "AI",
          "Brand Growth",
          "Analytics",
          "Marketing Automation",
        ],
      },
    },
  ],
};

export default newsDetailsData;
