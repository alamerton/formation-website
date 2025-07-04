import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import landingPageBanner from "@/images/theory-of-change-banner.jpg";
import Head from "next/head";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Formation Research",
  url: "https://www.formationresearch.com",
  logo: "https://www.formationresearch.com/logo.png",
  description:
    "Formation Research aims to reduce lock-in risks by researching fundamental lock-in dynamics and implementing high-impact interventions.",
};

const Main: React.FC = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Formation Research – Reducing Lock-In Risks</title>
        <meta
          name="description"
          content="Formation Research reduces lock-in risks by researching fundamental lock-in dynamics and implementing high-impact interventions."
        />
        <meta
          property="og:title"
          content="Formation Research – Reducing Lock-In Risks"
        />
        <meta
          property="og:description"
          content="Formation Research reduces lock-in risks by researching fundamental lock-in dynamics and implementing high-impact interventions."
        />
        <meta
          property="og:image"
          content="https://www.formationresearch.com/images/theory-of-change-banner.jpg"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.formationresearch.com/" />
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
            src={landingPageBanner}
            alt="A purple banner illustrating Formation Research's mission to reduce lock-in risks"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">
              Welcome to Formation
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 mt-4 mr-8 ml-8">
              Formation Research aims to reduce lock-in risks by researching
              fundamental lock-in dynamics and implementing high-impact
              interventions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="http://eepurl.com/jdNh_I">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-800 to-indigo-900 px-12 py-6 hover:bg-indigo-800 text-white text-xl font-semibold w-full sm:w-auto"
                >
                  Newsletter Sign Up
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  className="bg-white px-12 py-6 hover:bg-indigo-100 text-customPurple text-xl font-bold border border-customPurple w-full sm:w-auto"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        {/* <div className=" py-16 text-center">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Stay in Touch
              </h2>
              <p className="text-lg mb-8 max-w-xl mx-auto">
                Sign up to our newsletter to stay updated on our progress.
              </p>
              <Link href="http://eepurl.com/jdNh_I">
                <Button
                  size="lg"
                  className="bg-customPurple text-white hover:bg-blue-500 hover:font-black text-lg font-medium px-8 py-4"
                >
                  Sign Up
                </Button>
              </Link> */}
      </div>
    </>
  );
};

export default Main;
