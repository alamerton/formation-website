import Image from "next/image";
import researchBanner from "@/images/research-banner.jpg";
import giza from "@/images/giza.jpg";
import about from "@/images/about-banner.jpg";
import china from "@/images/wall-of-china.jpg";
import stacity from "@/images/stacity.png";
import recommender from "@/images/recommender.jpg";
import organisation from "@/images/position-preserving-intervention-1.png";
import error from "@/images/digital-error-correction.jpg";
import Head from "next/head";
import Link from "next/link";

const researchIndex = [
  // Where item data goes. Most properties are plain text. The URL should
  // be a Google doc with appropriate sharing settings, or a PDF
  {
    id: 7,
    slug: "digital-error-correction",
    image: error,
    title: "Digital Error Correction and Lock-In",
    date: "April 8, 2025",
    description:
      "We believe the digital error correction properties of digital entities will make future lock-in scenarios more stable.",
    lesswrong:
      "https://www.lesswrong.com/posts/QqFLsvsjLjEzq3BTr/digital-error-correction-and-lock-in",
    substack:
      "https://open.substack.com/pub/alfielamerton/p/digital-error-correction-and-lock?r=gkos6&utm_campaign=post&utm_medium=web",
  },
  {
    id: 6,
    slug: "organisation-level-lock-in-risk-interventions",
    image: organisation,
    title: "Organisation-Level Lock-In Risk Interventions",
    date: "April 1, 2025",
    description:
      "This post outlines how lock-in could result from organisation structures and dynamics, and what interventions might be implemented to reduce the risk.",
    lesswrong:
      "https://www.lesswrong.com/posts/uSRmzaynuCWaRJth6/organisation-level-lock-in-risk-interventions",
    substack:
      "https://open.substack.com/pub/alfielamerton/p/organisation-level-lock-in-risk-interventions?r=gkos6&utm_campaign=post&utm_medium=web",
  },
  {
    id: 5,
    slug: "recommender-alignment",
    image: recommender,
    title: "Recommender Alignment for Lock-In Risk",
    date: "March 24, 2025",
    description:
      "Here we connect one of our lock-in threat models to the function of recommender systems, and outline intervention approaches.",
    lesswrong:
      "https://www.lesswrong.com/s/yP8Zs4Tuog6tDES5b/p/F5QQuQDk79ouL9DbQ",
    substack:
      "https://open.substack.com/pub/alfielamerton/p/recommender-alignment-for-lock-ion?r=gkos6&utm_campaign=post&utm_medium=web",
  },
  {
    id: 4,
    slug: "stacity",
    image: stacity,
    title: "Stacity: a Lock-In Risk Benchmark for Large Language Models",
    date: "March 13, 2025",
    description: "Lock-in risk proxy benchmark for large language models.",
    lesswrong:
      "https://www.lesswrong.com/s/yP8Zs4Tuog6tDES5b/p/vbH3o4LWtswWhWnGx",
    hugging_face: "https://huggingface.co/datasets/Alamerton/Stacity",
  },
  {
    id: 3,
    slug: "threat-models",
    image: china,
    title: "Lock-In Threat Models",
    date: "March 10, 2025",
    description:
      "The possible routes to lock-in prioritised on a set of criteria for importance.",
    lesswrong:
      "https://www.lesswrong.com/s/yP8Zs4Tuog6tDES5b/p/gmFadztDHePBz7SRm",
  },
  {
    id: 2,
    slug: "lock-in-definition",
    image: giza,
    title: "Definition of Lock-In",
    date: "March 6, 2024",
    description:
      "Qualitative definition and quantitative operationalisation of lock-in for our future research.",
    lesswrong:
      "https://www.lesswrong.com/posts/F4ji5dvvCk8tBAsXw/what-is-lock-in",
  },
  {
    id: 1,
    slug: "org-overview",
    image: about,
    title: "Organisation Overview",
    date: "March 4, 2025",
    description:
      "Introduction to Formation – concise definition, existing work, threat models, and intervention approaches. ",
    lesswrong:
      "https://www.lesswrong.com/posts/TPTA9rELyhxiBK6cu/formation-research-organisation-overview",
    substack:
      "https://open.substack.com/pub/alfielamerton/p/formation-research-organisation-overview?r=gkos6&utm_campaign=post&utm_medium=web",
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
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center font-serif">
            <h1 className="text-3xl md:text-5xl  font-kameron text-white">
              Research
            </h1>
          </div>
        </div>
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchIndex.map((item) => (
              <div
                key={item.slug}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                  <p className="text-sm text-gray-600 mb-4">{item.date}</p>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Link
                      href={`/research/${item.slug}`}
                      className="inline-block bg-customPurple text-white  font-bold py-1 px-4 rounded hover:bg-violet-900 transition duration-200"
                    >
                      Learn More
                    </Link>
                    {item.lesswrong && (
                      <a
                        href={item.lesswrong}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-800 text-white font-serif font-bold py-1 px-4 opacity-80 rounded hover:bg-green-700 transition duration-200"
                      >
                        LW
                      </a>
                    )}
                    {item.substack && (
                      <a
                        href={item.substack}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-orange-700 text-white  font-bold py-1 px-4 opacity-85 rounded hover:bg-orange-600 transition duration-200"
                      >
                        Substack
                      </a>
                    )}
                    {item.hugging_face && (
                      <a
                        href={item.hugging_face}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-yellow-400 text-black  font-bold py-1 px-4 opacity-80 rounded hover:bg-yellow-300 transition duration-200"
                      >
                        🤗
                      </a>
                    )}
                  </div>
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
