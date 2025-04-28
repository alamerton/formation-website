import React from "react";
import Image from "next/image";
import theoryOfChangeImage from "@/images/theory-of-change.png";
import sphereOfControlImage from "@/images/sphere-of-control.png";
import sphereOfInfluenceImage from "@/images/sphere-of-influence.png";
import sphereOfInterestImage from "@/images/sphere-of-interest.png";
import theoryOfChangeBanner from "@/images/theory-of-change-banner.jpg";
import Head from "next/head";

export const metadata = {
  title: "Theory of Change",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://formationresearch.com/theory-of-change",
  },
  headline: "Our Theory of Change | Formation Research",
  description:
    "Learn about Formation Research's theory of change, outlining our activities, intended effects, and justification for reducing lock-in risk.",
  image: "https://formationresearch.com/images/theory-of-change-banner.jpg",
  author: {
    "@type": "Organization",
    name: "Formation Research",
  },
  publisher: {
    "@type": "Organization",
    name: "Formation Research",
    logo: {
      "@type": "ImageObject",
      url: "https://formationresearch.com/logo.png",
    },
  },
  datePublished: "2025-04-16",
  dateModified: "2025-04-16",
};

const TheoryOfChangePage = () => {
  return (
    <>
      <Head>
        <title>
          Our Theory of Change | Formation Research - Theory of Change for
          Reducing Lock-In Risk
        </title>
        <meta
          name="description"
          content="Learn about Formation Research's theory of change, outlining our activities, intended effects, and justification for reducing lock-in risk."
        />
        <meta
          property="og:title"
          content="Our Theory of Change | Formation Research"
        />
        <meta
          property="og:description"
          content="Learn about Formation Research's theory of change, outlining our activities, intended effects, and justification for reducing lock-in risk."
        />
        <meta
          property="og:image"
          content="https://formationresearch.com/images/theory-of-change-banner.jpg"
        />
        <meta
          property="og:url"
          content="https://formationresearch.com/theory-of-change"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="canonical"
          href="https://formationresearch.com/theory-of-change"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
        <div className="relative w-full h-64 md:h-96">
          <Image
            src={theoryOfChangeBanner}
            alt="Theory of Change Banner"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center font-serif">
            <h1 className="text-3xl md:text-5xl font-kameron text-white">
              Theory of Change
            </h1>
          </div>
        </div>
        {/* Hero section with main diagram */}
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="hidden md:block bg-white rounded-xl shadow-lg p-6 mb-12">
            <Image
              src={theoryOfChangeImage}
              alt="Diagram outlining our theory of change"
              layout="responsive"
              priority
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Main content */}
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Overview Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              Overview
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              This page outlines Formation&apos;s theory of change. The purpose
              of the theory of change is to specify the activities conducted by
              the organisation, the intended effects of those activities, and
              the justification for the belief that those activities will bring
              about those effects.
            </p>
            <br />
            <p className="text-lg text-gray-700 leading-relaxed">
              The structure of a theory of change typically consists of a team
              or set of teams, a sphere of control, a sphere of influence, a
              sphere of interest, and a set of assumptions and evidence. This
              theory of change is subject to change as we learn more about what
              inputs best bring about the outcomes we are aiming for &mdash;
              reduced lock-in risk.
            </p>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              Team
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Currently Formation is composed of two members, Alfie Lamerton
                and Adam Jones. Alfie is Formation&apos;s founder and research
                lead and Adam is an adviser to the organisation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Alfie is the sole researcher and therefore the only member of
                Formation&apos;s research team. It is expected that as the
                organisation evolves, more teams will be created that contribute
                to the sphere of interest. Those teams will be added as new rows
                to the theory of change by mapping the causal pathway backwards
                from the intended impact to team design.
              </p>
            </div>
          </div>

          {/* Sphere of Control Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              Sphere of Control
            </h2>
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex justify-center mb-6">
                <div className="w-3/5 md:w-1/2">
                  <Image
                    src={sphereOfControlImage}
                    alt="Diagram showing our sphere of control"
                    layout="responsive"
                    priority
                    className="rounded-lg"
                  />
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                The sphere of control contains the inputs of the organisation
                &mdash; the activities conducted by the research team.
              </p>
            </div>
          </div>

          {/* Sphere of Influence Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              Sphere of Influence
            </h2>
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex justify-center mb-6">
                <div className="w-3/5 md:w-1/2">
                  <Image
                    src={sphereOfInfluenceImage}
                    alt="Diagram showing our sphere of influence"
                    layout="responsive"
                    priority
                    className="rounded-lg"
                  />
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                The sphere of influence contains the measurable effects of the
                activities conducted by the research team – these are
                Formation&apos;s outputs.
              </p>
            </div>
          </div>

          {/* Sphere of Interest Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              Sphere of Interest
            </h2>
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex justify-center mb-6">
                <div className="w-11/12">
                  <Image
                    src={sphereOfInterestImage}
                    alt="Diagram showing our sphere of interest"
                    layout="responsive"
                    priority
                    className="rounded-lg"
                  />
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                The sphere of interest specifies the change the organisation is
                aiming to a effect in the world. It contains the outcomes (the
                intended effects of the outputs), and the goal (the main
                objective of the theory of change).
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TheoryOfChangePage;
