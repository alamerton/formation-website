import Image from "next/image";
import researchBanner from "@/images/research-banner.jpg";
import recommender from "@/images/recommender.jpg";
import narrowLoyalty from "@/images/narrow-loyalty.jpg";
import Head from "next/head";

const researchItems = [
  {
    id: 1,
    image: recommender,
    title: "Lock-In",
    date: "March 6, 2025",
    description:
      "This sequence contains key information regarding lock-in: the positioning and purpose of Formation Research, the definition of lock-in and its threat models, an evaluation for lock-in risk, and intervention proposals for reducing lock-in risks.",
    link: "https://www.lesswrong.com/s/yP8Zs4Tuog6tDES5b",
  },
  {
    id: 2,
    image: narrowLoyalty,
    title: "Narrow Secret Loyalty Dodges Black-Box Audits",
    date: "April 22, 2026",
    description:
      "We trained Qwen2.5-instruct models (1.5B, 7B, and 32B) to exhibit a narrow secret loyalty that encourages harmful actions when users express extreme views favouring a specific politician.",
    link: "https://www.lesswrong.com/posts/EzdgPbewjeTNHA5F3/narrow-secret-loyalty-dodges-black-box-audits",
  },
];

export const metadata = {
  title:
    "Research | Formation Research – Lock-In Risk Research and High-Impact Interventions",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Research | Formation Research",
  url: "https://www.formationresearch.com/research",
  description:
    "Explore Formation Research's publications and insights on lock-in risks and AI safety.",
  publisher: {
    "@type": "Organization",
    name: "Formation Research",
    logo: {
      "@type": "ImageObject",
      url: "https://www.formationresearch.com/logo.png",
    },
  },
};

const ResearchPage = () => {
  return (
    <>
      <Head>
        <title>
          Research | Formation Research - Lock-In Risk Research and Intervention
          Proposals
        </title>
        <meta
          name="description"
          content="Explore our research on lock-in risks, AI safety, and interventions to promote a dynamic future. Read our publications and learn about our findings."
        />
        <meta property="og:title" content="Research | Formation Research" />
        <meta
          property="og:description"
          content="Explore Formation Research's publications and insights on lock-in risks and AI safety."
        />
        <meta
          property="og:image"
          content="https://www.formationresearch.com/images/research-banner.jpg"
        />
        <meta
          property="og:url"
          content="https://www.formationresearch.com/research"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="canonical"
          href="https://www.formationresearch.com/research"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
        <div className="relative w-full h-64 md:h-96">
          <Image
            src={researchBanner}
            alt="Research Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center font-serif">
            <h1 className="text-3xl md:text-5xl text-white">Research</h1>
          </div>
        </div>
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                  {item.date && <p className="text-sm text-gray-600 mb-4">{item.date}</p>}
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  <a
                    href={item.link}
                    className="inline-block bg-gradient-to-r from-violet-800 to-indigo-900 text-white font-semibold py-2 px-4 rounded hover:opacity-90 transition-opacity duration-200"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ResearchPage;
