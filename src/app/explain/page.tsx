import React from "react";
import explainerBanner from "@/images/explainer-banner.png";
import Image from "next/image";
import categorisation from "@/images/lock-in-categorisation.png";
import lobster from "@/images/lobster-pot-image.png";
// import lockedRoom from "@/images/locked-room.png";
import timeline from "@/images/timeline.png";
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
          </div>
        </div>

        {/* What is lock-in section */}
        <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 max-w-3xl">
          <div className="pb-8">
            <h1 className="text-2xl sm:text-3xl font-bold pt-4 text-center">
              What is Lock-In?
            </h1>
            <p className="text-md sm:text-lg py-4 text-center">
              Lock-in is where some feature of the world – technological,
              political, or institutional – is held stable for a long time.
              Possibly for centuries. Possibly forever.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white rounded-lg shadow p-4 flex flex-col text-center">
              <h2 className="font-semibold  mb-2">A Physical Phenomenon</h2>
              <p className="text-sm text-gray-700">
                Emerges from the dynamics of irreversibility in complex systems.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex flex-col text-center">
              <h2 className="font-semibold mb-2">Self-Perpetuating</h2>
              <p className="text-sm text-gray-700">
                Once embedded, elements self-reinforce and resist change.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex flex-col text-center">
              <h2 className="font-semibold mb-2">Multi-Scalar</h2>
              <p className="text-sm text-gray-700">
                Can operate at multiple levels from organisation-level tech
                stacks to global ideologies.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex flex-col text-center">
              <h2 className="font-semibold mb-2">Long-Term</h2>
              <p className="text-sm text-gray-700">
                Can operate across long time horizons, from years, to decades,
                and millennia.
              </p>
            </div>
          </div>

          {/* What are lock-in risks section */}
          <div className="pb-8">
            <h1 className="text-2xl sm:text-3xl font-bold py-4 text-center">
              What are Lock-In Risks?
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white rounded-lg shadow p-4 flex flex-col text-center">
              <h2 className="font-semibold mb-2">Potentially Catastrophic</h2>
              <p className="text-sm text-gray-700">
                Could affect a substantial number of individuals.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex flex-col text-center">
              <h2 className="font-semibold mb-2">Neglected</h2>
              <p className="text-sm text-gray-700">
                Few organisations or individuals track or model lock-in risk.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex flex-col text-center">
              <h2 className="font-semibold mb-2">A Moral Problem</h2>
              <p className="text-sm text-gray-700">
                Could perpetuate or create suffering and prevent progress.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex flex-col text-center">
              <h2 className="font-semibold mb-2">A Global Problem</h2>
              <p className="text-sm text-gray-700">
                Could affect institutions, states, nations, or the world.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 mt-4 mb-8">
            <h3 className="font-semibold mb-2 text-center">Definition</h3>
            <p className="text-sm text-gray-700 text-center">
              Defined as a subjective probability in [0, 1] that a negative
              lock-in occurs. Fundamentally unknowable in absolute terms and
              must be approximated through modelling and reduced via
              interventions based on conjecture and empirical investigation.
            </p>
          </div>

          {/* Categorising lock-in section */}
          {/* <div className="pb-8">
            <h1 className="text-2xl sm:text-3xl font-bold py-4 text-center">
              Categorising Lock-In
            </h1>
          </div> */}
          <div className="flex justify-center mb-6">
            <Image
              src={categorisation}
              alt="Diagram showing how we taxonomise lock-in into different categories."
              layout="responsive"
              priority
              className="rounded-lg"
            />
          </div>
          {/* Examples section */}
          <div className="pb-8">
            <h1 className="text-2xl sm:text-3xl font-bold py-4 text-center">
              What is Lock-In?
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white rounded-lg shadow p-4 flex flex-col text-center">
              <h2 className="font-semibold  mb-2">QWERTY Keyboard</h2>
              <p className="text-sm text-gray-700">
                Classic example of an efficiency lock-in. QWERTY is the industry
                standard keyboard layout not because it is optimal for typing,
                but because the typewriter with that layout became most popular.
                The QWERTY keyboard layout is not locked in because the cost of
                switching to a layout like Colemak is high.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex flex-col text-center">
              <h2 className="font-semibold mb-2">Stable Totalitarianism</h2>
              <p className="text-sm text-gray-700">
                Potentially high-impact negative lock-in that could last a long
                time due to the competent digital error correction of digital
                entities such as AI systems. An AI-enabled leader may
                successfully reign over a state for centuries or millennia.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex flex-col text-center">
              <h2 className="font-semibold mb-2">
                AI-Driven Power Concentration
              </h2>
              <p className="text-sm text-gray-700">
                Individuals at the forefront of the AI revolution may end up
                with high leverage over the technological and political
                trajectory of humanity due to their control over AI systems,
                potentially creating persistent monopolies over resources and
                labour
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex flex-col text-center">
              <h2 className="font-semibold mb-2">Ideological Stasis</h2>
              <p className="text-sm text-gray-700">
                Dogmatic or anti-rational belief systems could prevail over the
                cultural zeitgeist and lock-in norms and practices that are
                self-reinforcing.
              </p>
            </div>
          </div>
          {/* Lobster Pot Analogy Section */}
          <h1 className="text-2xl sm:text-3xl font-bold pt-4 text-center">
            Lobster Pot Analogy
          </h1>
          <p className="text-md sm:text-lg py-4 text-center">
            Easy to get in, hard to get out.
          </p>
          <div className="flex justify-center mb-6">
            <Image
              src={lobster}
              alt="Picture of a lobster crawling into a lobster pot and being unable to get out"
              layout="responsive"
              priority
              className="rounded-lg"
            />
          </div>
          {/* Locked Room Analogy Section */}
          {/* <h1 className="text-2xl sm:text-3xl font-bold pt-4 text-center">
            Locked-Room Analogy
          </h1>
          <p className="text-md sm:text-lg py-4 text-center">
            Humans or digital agents could create lock-in scenarios{" "}
          </p>
          <div className="flex justify-center mb-6">
            <Image
              src={lockedRoom}
              alt="3 panel image of a person being locked in a room by a human and a robot, with descriptions of the effects of this"
              layout="responsive"
              priority
            />
          </div>
        </div>
        <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 max-w-6xl"> */}
          {/* Timeline explainer section */}
          <h1 className="text-2xl sm:text-3xl font-bold pt-4 text-center">
            Timeline Explainer
          </h1>
          <p className="text-md sm:text-lg py-4 text-center">
            An abstract timeline demonstrating how a lock-in could manifest
          </p>
          <div className="flex justify-center mb-6">
            <Image
              src={timeline}
              alt="3 panel image of a person being locked in a room by a human and a robot, with descriptions of the effects of this"
              layout="responsive"
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExplainerPage;
