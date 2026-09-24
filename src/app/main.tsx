import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import landingPageBanner from "@/images/banners/theory-of-change-banner.jpg";
import bluedotLogo from "@/images/BlueDot_Impact_Logo.svg";
import eaFundsLogo from "@/images/ea_funds_logo.png";
import fliLogo from "@/images/Future_of_Life_Institute_logo.svg.png";
import coefficientLogo from "@/images/Coefficient_Logo_Gray.png";
import aistofLogo from "@/images/aistof.png";
import Head from "next/head";
import SupportersMarquee from "@/components/SupportersMarquee";
import { getAllPosts } from "@/lib/post";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Formation Research",
  url: "https://www.formationresearch.com",
  logo: "https://www.formationresearch.com/logo.png",
  description:
    "Formation Research aims to reduce lock-in risks by researching fundamental lock-in dynamics and implementing high-impact interventions.",
};

const SupporterLogos = () => {
  return (
    <>
      <a
        href="https://bluedot.org"
        target="_blank"
        rel="noopener noreferrer"
        className="opacity-70 hover:opacity-100 transition-opacity duration-200"
      >
        <Image
          src={bluedotLogo}
          alt="BlueDot Impact"
          width={150}
          height={50}
          className="h-12 w-auto"
        />
      </a>
      <a
        href="https://funds.effectivealtruism.org"
        target="_blank"
        rel="noopener noreferrer"
        className="opacity-70 hover:opacity-100 transition-opacity duration-200"
      >
        <Image
          src={eaFundsLogo}
          alt="Effective Altruism Funds"
          width={160}
          height={60}
          className="h-14 w-auto"
        />
      </a>
      <a
        href="https://futureoflife.org"
        target="_blank"
        rel="noopener noreferrer"
        className="opacity-70 hover:opacity-100 transition-opacity duration-200"
      >
        <Image
          src={fliLogo}
          alt="Future of Life Institute"
          width={180}
          height={70}
          className="h-20 w-auto"
        />
      </a>
      <a
        href="https://manifund.org/JueYan?utm_source=aisafety.com&utm_medium=referral&utm_campaign=funding"
        target="_blank"
        rel="noopener noreferrer"
        className="opacity-70 hover:opacity-100 transition-opacity duration-200"
      >
        <Image
          src={aistofLogo}
          alt="AI Safety Tactical Opportunities Fund"
          width={180}
          height={40}
          unoptimized
          className="h-10 w-[180px] invert"
        />
      </a>
      <a
        href="https://coefficientgiving.org"
        target="_blank"
        rel="noopener noreferrer"
        className="opacity-70 hover:opacity-100 transition-opacity duration-200"
      >
        <Image
          src={coefficientLogo}
          alt="Coefficient Giving"
          width={207}
          height={80}
          className="h-16 w-auto"
        />
      </a>
    </>
  );
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

const Main: React.FC = () => {
  const allPosts = getAllPosts();
  const latestPosts = allPosts.slice(0, 3);
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
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 opacity-0 animate-fade-in">
              Welcome to Formation
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 mt-4 mr-8 ml-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Formation Research aims to reduce lock-in risks by researching
              fundamental lock-in dynamics and implementing high-impact
              interventions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Link href="http://eepurl.com/jdNh_I">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-800 to-indigo-900 px-12 py-6 hover:opacity-90 text-white text-xl font-semibold w-full sm:w-auto transition-opacity duration-200"
                >
                  Newsletter Sign Up
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  className="bg-white px-12 py-6 hover:bg-indigo-50 text-customPurple text-xl font-bold border border-customPurple w-full sm:w-auto transition-colors duration-200"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Social Proof / Funders Section */}
        <div className="bg-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <p className="text-center text-gray-500 text-sm uppercase tracking-wider mb-8">
              Supported by
            </p>
            {/* Static row when everything fits on one line */}
            <div className="hidden xl:flex justify-center items-center gap-12 xl:gap-20">
              <SupporterLogos />
            </div>
          </div>
          {/* Full-bleed auto-cycling, draggable marquee below xl */}
          <SupportersMarquee className="xl:hidden">
            <SupporterLogos />
          </SupportersMarquee>
        </div>

        {/* News Section */}
        <div className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-center text-gray-500 text-sm uppercase tracking-wider mb-8">
              News
            </p>
            <ul className="divide-y divide-gray-200">
              {latestPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/posts/${post.slug}`}
                    className="group block py-8"
                  >
                    {post.meta.date && (
                      <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                        <time dateTime={post.meta.date}>
                          {formatDate(post.meta.date)}
                        </time>
                      </p>
                    )}
                    <h2 className="font-serif text-2xl text-gray-900 leading-snug group-hover:text-customPurple transition-colors duration-200">
                      {post.meta.title}
                    </h2>
                    {post.meta.summary && (
                      <p className="text-gray-600 mt-2">{post.meta.summary}</p>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            {allPosts.length > 1 && (
              <div className="mt-4 text-center">
                <Link
                  href="/posts"
                  className="group inline-flex items-center text-customPurple font-semibold"
                >
                  All posts
                  <svg
                    className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
