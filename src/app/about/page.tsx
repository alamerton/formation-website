import React from "react";
import Image from "next/image";
import aboutBanner from "@/images/about-banner.jpg";
import Head from "next/head";

const metadata = {
  title: "About",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Formation Research",
  url: "https://formationresearch.com/about",
  description:
    "Learn about Formation Research's mission to minimise lock-in risks and promote a dynamic future through AI safety research.",
};

const AboutPage = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>About Us | Formation Research - Minimising Lock-In Risks</title>
        <meta
          name="description"
          content="Learn about Formation Research's mission to minimise lock-in risks and promote a dynamic future through first-principles AI safety research."
        />
        <meta property="og:title" content="About Us | Formation Research" />
        <meta
          property="og:description"
          content="Learn about Formation Research's mission to minimise lock-in risks and promote a dynamic future."
        />
        <meta
          property="og:image"
          content="https://formationresearch.com/images/about-banner.jpg"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://formationresearch.com/about" />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
        <div className="relative w-full h-64 md:h-96">
          <Image
            src={aboutBanner}
            alt="About Banner"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center font-serif">
            <h1 className="text-3xl md:text-5xl font-kameron text-white">
              About Us
            </h1>
          </div>
        </div>
        <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 max-w-3xl">
          {/* Who we are section */}
          <div className="container pb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold py-4">
              Who We Are
            </h2>
            <p className="text-lg">
              We are Formation Research, a nonprofit startup research
              organisation focusing on reducing lock-in risks from AI systems.
              Nick Bostrom first thought about AI and lock-in in 2005, but there
              has been almost no work on it since. Our mission is to reduce
              lock-in risks by researching fundamental lock-in dynamics and
              implementing high-impact interventions, with a view to reducing
              the likelihood that humanity ends up in a lock-in in the future.
              <br />
              <br />A lock-in is where some feature of the world, typically a
              negative element of human culture, is held stable for a long time.
              <ul className="list-disc list-inside ml-6 my-4">
                <li>
                  <strong>Example 1:</strong> A powerful AI system may gain
                  strategic control of humanity, enforcing a dystopian scenario
                  where the AI system competently pursues some goal, preventing
                  human intervention.
                </li>
                <li>
                  <strong>Example 2:</strong> A human dictator may leverage AI
                  systems to improve their own lifespan and implement mass
                  worldwide surveillance, leading to a long-term stable
                  totalitarian regime.
                </li>
              </ul>
              A future where lock-ins are prevented has the potential for
              continued technological and cultural evolution, economic growth,
              sustainable competition, and improved individual freedom. Lock-in
              may prevent any or all of these properties from being possible in
              the future. The nature of lock-in prevents people from doing
              anything about it once it happens.
              <br />
            </p>
          </div>
          {/* Vision section */}
          <div className="container pb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold py-4">
              Our Vision
            </h2>
            <div>
              <p className="text-lg mb-4">Our vision is twofold:</p>
              <ol className="text-lg list-decimal list-inside space-y-4">
                <li>
                  <span className="text-lg font-semibold">
                    Minimising lock-in risks:
                  </span>{" "}
                  To minimise the likelihood that negative elements of culture
                  become stable to the extent that they are harmful, oppressive,
                  persistent, or widespread, either accidentally or
                  deliberately, as a result of humans and AI systems. Or, more
                  concisely, minimising lock-in risks.
                </li>
                <li>
                  <span className="text-lg font-semibold">
                    Promoting a dynamic future:
                  </span>{" "}
                  We envision a future where lock-ins are prevented as having:
                  <ul className="list-disc list-inside mt-2 ml-6 space-y-2 text-lg">
                    <li>Continued technological and cultural evolution</li>
                    <li>Economic growth</li>
                    <li>Sustainable competition</li>
                    <li>Improved individual freedom</li>
                  </ul>
                </li>
              </ol>
              <p className="text-lg mt-4">
                Lock-in may prevent any or all of these properties from being
                true in the future. The nature of lock-in prevents people from
                doing anything about it once it happens.
              </p>
            </div>
          </div>
          {/* Approach section */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold py-4">
            Our Approach
          </h2>
          <div>
            <p className="text-lg">
              As we outline in the theory of change, the type of research our
              organisation will initially conduct is defined by the following
              values: first-principles, bottom-up, collaborative, scientific and
              technical research into the behaviours of AI systems and the
              potential usage of such systems.
            </p>

            <h3 className="text-lg text-lg font-semibold mt-4 mb-1">
              First Principles
            </h3>
            <p className="text-lg">
              This is a nascent area of study, and in the spirit of rationality,
              we believe that thinking about lock-in risks from first principles
              is the best way to keep unhelpful biases from clouding our
              research. This is not the same as only using the knowledge we
              create, that is not realistic. It means forming our own conceptual
              and theoretical models of the world based on our understanding of
              the laws of physics and computation, and testing the assumptions
              borrowed from other fields before employing them.
            </p>

            <h3 className="text-lg text-md font-semibold mt-4 mb-1">
              Bottom-up Research
            </h3>
            <p className="text-lg">
              Building inside-view theoretical and conceptual models of lock-in
              based on simple facts about AI systems and game theory, rather
              than resting on the conceptual models of other fields or
              organisations. For example, we would not just implement existing
              risk management protocols, alignment strategies, or follow the
              s-risk template in our research.
            </p>

            <h3 className="text-lg text-md font-semibold mt-4 mb-1">
              Collaborative Research
            </h3>
            <p className="text-lg">
              We aim to be a collaborative organisation that works with AI
              safety research organisations with overlapping goals. We also
              expect to conduct interdisciplinary work with organisations that
              conduct other kinds of research, e.g., think tanks which conduct
              economic research who may approach lock-in from a different point
              of view.
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-1">
              Scientific Research
            </h3>
            <p className="text-lg">
              We plan to use the scientific method in our research with the goal
              of creating fundamental knowledge about lock-in risks. We plan to
              use:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li className="text-lg ml-4">
                Conjecture with first principles, forecasting, and estimation,
              </li>
              <li className="text-lg ml-4">
                Criticism through feedback, peer review, and publication,
              </li>
              <li className="text-lg ml-4">
                Error-correction by updating our world models in light of
                feedback and review,
              </li>
            </ul>
            <p className="text-lg mt-2">
              to make scientific progress on lock-in with good explanations.
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-1">
              Technical Research
            </h3>
            <p className="text-lg">
              We will also use the scientific method with real-world
              applications and interventions in mind. We want to create
              applicable knowledge that can be applied to solving problems. We
              want to use the existing and created knowledge to develop
              interventions and innovate mitigations for lock-in risks.
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-1">
              Validated Learning
            </h3>
            <p className="text-lg">
              We believe in the build, measure, learn approach to creating and
              scaling solutions to problems. In the context of lock-in
              minimisation, this means continuously updating our theory of
              change, research agenda, and interventions upon updates to our
              world models. We aim to always use evidence and reason to update
              those world models.
            </p>
          </div>
        </div>
        <div className="h-64"></div>
      </div>
    </>
  );
};

export default AboutPage;
