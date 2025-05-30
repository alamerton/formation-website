import React from "react";
import explainerBanner from "@/images/explainer-banner.png";
import Image from "next/image";
import Head from "next/head";

export const metadata = {
  title:
    "Lock-In Explainers | Formation Research – Lock-In Risk Research and High-Impact Interventions",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ExplainerPage",
  name: "Lock-In Explainers",
  url: "https://www.formationresearch.com/explain",
  description:
    "Learn more about the concept of lock-in and lock-in risk using verbal and visual explainers.",
};

const ExplainerPage = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>
          Explainers | Formation Research - Minimising Lock-In Risks
        </title>
        <meta
          name="description"
          content="Learn about Formation Research's focus area: lock-in and lock-in risks, using visual and verbal explainers."
        />
        <meta property="og:title" content="Explainers | Formation Research" />
        <meta
          property="og:description"
          content="Learn about Formation Research's focus area: lock-in and lock-in risks, using visual and verbal explainers."
        />
        <meta
          property="og:image"
          content="https://www.formationresearch.com/images/explainer-banner.jpg"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="canonical"
          href="https://www.formationresearch.com/explain"
        />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white font-sans">
        {/* Banner Section */}
        <div className="relative w-full h-screen">
          {" "}
          <Image
            src={explainerBanner}
            alt="A purple banner illustrating Formation Research's mission to reduce lock-in risks"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">
              Lock-In Risk
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-2 mt-4 mr-8 ml-8">
              The likelihood that negative elements of the world become stable
              for a long time.
            </p>
            <p className="text-md md:text-md text-gray-200 mb-8 mx-auto max-w-3xl">
              Lock-in is where some feature of the world – technological,
              political, or institutional – is held stable for a long time.
              Possibly for centuries. Possibly forever.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExplainerPage;
