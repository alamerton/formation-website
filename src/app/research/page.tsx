import Image from "next/image";
import { linkPreviewImages } from "@/lib/linkPreview";
import researchBanner from "@/images/banners/research-banner.jpg";
import recommender from "@/images/banners/recommender.jpg";
import narrowLoyalty from "@/images/narrow-loyalty.jpg";
import powerConcentrationSurvey from "@/images/power-concentration-survey.jpg";
import secretLoyalties from "@/images/secret-loyalties.jpg";
import eggrollIpo from "@/images/eggroll-ipo.jpg";
import ResearchGrid, { type ResearchItem } from "@/components/ResearchGrid";
import { SITE_URL } from "@/lib/site";

const researchItems: ResearchItem[] = [
  {
    id: 1,
    image: recommender,
    title: "Lock-In",
    date: "March 6, 2025",
    description:
      "This sequence contains key information regarding lock-in: the positioning and purpose of Formation Research, the definition of lock-in and its threat models, and intervention proposals for reducing lock-in risks.",
    link: "https://www.lesswrong.com/s/yP8Zs4Tuog6tDES5b",
    linkLabel: "LessWrong",
    fillImage: true,
    tags: [],
  },
  {
    id: 2,
    image: powerConcentrationSurvey,
    title: "A Survey of AI-Driven Power Concentration",
    date: "April 24, 2026",
    description:
      "A survey of AI-driven power concentration covering three threat models and four intervention families, finding that no single intervention addresses all three threats.",
    link: "/power-concentration-survey.pdf",
    newTab: true,
    linkLabel: "Paper",
    tags: [],
  },
  {
    id: 3,
    image: narrowLoyalty,
    title: "Narrow Secret Loyalty Dodges Black-Box Audits",
    date: "May 6, 2026",
    description:
      "We trained Qwen2.5-instruct models (1.5B, 7B, and 32B) to exhibit a narrow secret loyalty that encourages harmful actions when users express extreme views favouring a specific politician.",
    link: "https://www.lesswrong.com/posts/EzdgPbewjeTNHA5F3/narrow-secret-loyalty-dodges-black-box-audits",
    linkLabel: "LessWrong",
    paperLink: "https://arxiv.org/abs/2605.06846v2",
    paperLabel: "arXiv",
    openreviewLink: "https://openreview.net/forum?id=hUZUqWrytg",
    tags: ["Secret Loyalties"],
  },
  {
    id: 4,
    image: secretLoyalties,
    title: "AIs with Secret Loyalties are a Serious but Addressable Threat",
    date: "May 6, 2026",
    description:
      "This paper argues that the technical AI research community should prioritize studying and defending against a distinct, neglected threat: secret loyalties.",
    link: "https://www.lesswrong.com/posts/ugBoeexGYvNLxZKA7/a-research-agenda-for-secret-loyalties",
    linkLabel: "LessWrong",
    paperLink: "/secret-loyalties-position-paper.pdf",
    tags: ["Secret Loyalties"],
  },
  {
    id: 5,
    image: eggrollIpo,
    title:
      "EGGROLL-IPO: Pluralistic Alignment via Decentralised Post-Training with Population Preferences",
    date: "June 2, 2026",
    description:
      "We introduce EGGROLL-IPO: Online IPO loss as scalar fitness in EGGROLL, enabling decentralised population-contributed pluralistic alignment.",
    link: "https://openreview.net/forum?id=5P7ihyDNi8",
    linkLabel: "OpenReview",
    newTab: true,
    tags: ["Democratic AI Training"],
  },
];

export const metadata = {
  title:
    "Research | Formation Research – Lock-In Risk Research and High-Impact Interventions",
  description:
    "Explore our research on lock-in risks, AI safety, and interventions to promote a dynamic future. Read our publications and learn about our findings.",
  openGraph: {
    title: "Research | Formation Research",
    description:
      "Explore Formation Research's publications and insights on lock-in risks and AI safety.",
    url: `${SITE_URL}/research`,
    type: "website",
    images: linkPreviewImages,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Research | Formation Research",
  url: `${SITE_URL}/research`,
  description:
    "Explore Formation Research's publications and insights on lock-in risks and AI safety.",
  publisher: {
    "@type": "Organization",
    name: "Formation Research",
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
  },
};

const ResearchPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
        <div className="relative w-full h-64 md:h-96">
          <Image
            src={researchBanner}
            alt="Research Banner"
            fill
            className="object-cover"
            priority
            placeholder="blur"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center font-serif">
            <h1 className="text-3xl md:text-5xl text-white">Research</h1>
          </div>
        </div>
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <ResearchGrid items={researchItems} />
        </div>
      </div>
    </>
  );
};

export default ResearchPage;
