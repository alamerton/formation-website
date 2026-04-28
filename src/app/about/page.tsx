import React from "react";
import Image from "next/image";
import aboutBanner from "@/images/about-banner.jpg";
import alfieImage from "@/images/alfie.jpg";
import adamImage from "@/images/adam.webp";
import lukeImage from "@/images/luke.jpeg";
import finImage from "@/images/fin.jpg";
import anthropicLogo from "@/images/anthropic-v2.svg";
import oxfordLogo from "@/images/University-of-Oxford-scaled.jpg";
import forethoughtLogo from "@/images/forethought_logo-v2.png";
import Head from "next/head";

const teamMembers = [
  {
    name: "Alfie Lamerton",
    role: "Founder",
    bio: "Alfie Lamerton founded Formation Research in 2025. He holds a computer science BSc and artificial intelligence MSc, and has worked as a software engineer, research assistant, and independent researcher. He has participated in several AI safety projects and been awarded several grants for his research.",
    image: alfieImage,
    email: "alfie.lamerton@formationresearch.com",
    linkedin: "https://www.linkedin.com/in/alfie-lamerton/",
  },
  {
    name: "Adam Jones",
    role: "Trustee",
    bio: "Adam Jones is a member of technical staff at Anthropic and former AI safety lead at BlueDot Impact.",
    image: adamImage,
    email: "",
    linkedin: "https://www.linkedin.com/in/domdomegg/",
  },
  {
    name: "Luke Drago",
    role: "Trustee",
    bio: "Luke Drago is CEO of Workshop Labs and former AI governance specialist at BlueDot Impact. He is a University of Oxford graduate and co-author of 'The Intelligence Curse', featured in TIME.",
    image: lukeImage,
    email: "",
    linkedin: "https://www.linkedin.com/in/lukedrago/",
  },
  {
    name: "Fin Moorhouse",
    role: "Adviser",
    bio: "Currently, Fin is a Research Fellow at Forethought. Before that, he worked at Longview Philanthropy and Oxford's Future of Humanity Institute, and studied philosophy at Cambridge.",
    image: finImage,
    email: "",
    linkedin: "",
    website: "https://finmoorhouse.com/",
  },
];

export const metadata = {
  title:
    "About Us | Formation Research – Lock-In Risk Research and High-Impact Interventions",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Formation Research",
  url: "https://www.formationresearch.com/about",
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
          content="https://www.formationresearch.com/images/about-banner.jpg"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.formationresearch.com/about" />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
        {/* Banner */}
        <div className="relative w-full h-64 md:h-96">
          <Image
            src={aboutBanner}
            alt="About Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center font-serif">
            <h1 className="text-3xl md:text-5xl font-serif text-white mb-6">
              About Us
            </h1>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 pt-12 pb-4 max-w-4xl">
          {/* Mission Statement */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-customPurple">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
                Who We Are
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Formation Research Ltd is a UK-based not-for-profit company
                limited by guarantee with 501(c)(3) equivalency determination
                through NGO Source. We are on a mission to research fundamental{" "}
                <strong>lock-in</strong> dynamics and implement high-impact
                interventions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                A lock-in is a situation where some feature of the world,
                typically a negative element of human culture, becomes stable
                for a long time. Formation Research focuses on interventions for
                particularly undesirable lock-in scenarios such as AI-enabled
                totalitarianism and extreme power concentration.
              </p>
            </div>
          </section>

          {/* Current Research Focus */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900">
              Current Research Focus
            </h2>
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Secret Loyalties
              </h3>
              <p className="text-gray-700 mb-4">
                A promising technical intervention direction for lock-in risk is
                secret loyalties research. A <strong>secret loyalty</strong> is
                an objective encoded in a language model that favours a specific
                actor or the goals of that actor, activated by a private
                activation condition.
              </p>
              <p className="text-gray-700">
                Secret loyalties are a mechanism for AI-enabled
                authoritarianism, power concentration, and similar lock-in risks
                from AI systems. There is concrete technical research that can
                be done on understanding and mitigating secret loyalties with
                current systems.
              </p>
            </div>
          </section>
        </div>

        {/* Collaborations Banner - Full Width */}
        <div className="bg-white pt-4 pb-12 md:pt-6 md:pb-16">
          <div className="container mx-auto px-4">
            <p className="text-center text-gray-500 text-sm uppercase tracking-wider mb-8">
              In collaboration with researchers at
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 -ml-4 md:-ml-8">
              <a
                href="https://www.anthropic.com"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity duration-200"
              >
                <Image
                  src={anthropicLogo}
                  alt="Anthropic"
                  width={110}
                  height={35}
                  className="h-7 w-auto"
                />
              </a>
              <a
                href="https://www.ox.ac.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity duration-200"
              >
                <Image
                  src={oxfordLogo}
                  alt="University of Oxford"
                  width={200}
                  height={70}
                  className="h-16 w-auto"
                />
              </a>
              <a
                href="https://www.forethought.org"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity duration-200"
              >
                <Image
                  src={forethoughtLogo}
                  alt="Forethought"
                  width={180}
                  height={60}
                  className="h-14 w-auto"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-12 max-w-4xl">
          {/* Lock-in Scenarios */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
              Lock-In Scenarios We Study
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              We focus on a range of undesirable lock-in scenarios, including:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-800 to-indigo-900 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  AI-Enabled Totalitarianism
                </h3>
                <p className="text-gray-600">
                  A human dictator may leverage AI systems to improve their own
                  lifespan and implement mass worldwide surveillance, leading to
                  a long-term stable totalitarian regime.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-800 to-indigo-900 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  Extreme Power Concentration
                </h3>
                <p className="text-gray-600">
                  Individuals at the forefront of the AI revolution may end up
                  with high leverage over the technological and political
                  trajectory of humanity, creating persistent monopolies over
                  resources and labour.
                </p>
              </div>
            </div>
          </section>

          {/* Vision */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900">
              Our Vision
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-violet-800 to-indigo-900 rounded-xl p-6 text-white">
                <h3 className="text-xl font-semibold mb-3">
                  Minimising Lock-In Risks
                </h3>
                <p className="text-violet-100">
                  Reducing the likelihood that harmful, oppressive, persistent
                  elements of culture become stable, whether through human
                  action or AI systems.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Promoting a Dynamic Future
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Continued technological and cultural evolution
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Economic growth
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Sustainable competition
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Improved individual freedom
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Approach */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900">
              Our Approach
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Our research is defined by first-principles, bottom-up,
              collaborative, scientific and technical investigation into AI
              systems and their potential uses.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg shadow p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <h3 className="font-semibold mb-2 text-gray-900">
                  First Principles
                </h3>
                <p className="text-sm text-gray-600">
                  Building conceptual models from fundamental understanding of
                  physics and computation, testing assumptions before employing
                  them.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <h3 className="font-semibold mb-2 text-gray-900">
                  Bottom-Up Research
                </h3>
                <p className="text-sm text-gray-600">
                  Creating inside-view theoretical models based on simple facts
                  about AI systems and game theory.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <h3 className="font-semibold mb-2 text-gray-900">
                  Collaborative
                </h3>
                <p className="text-sm text-gray-600">
                  Working with AI safety organisations and conducting
                  interdisciplinary research with think tanks and economists.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <h3 className="font-semibold mb-2 text-gray-900">
                  Scientific Method
                </h3>
                <p className="text-sm text-gray-600">
                  Using conjecture, criticism through peer review, and
                  error-correction to create fundamental knowledge about lock-in
                  risks.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <h3 className="font-semibold mb-2 text-gray-900">
                  Technical Research
                </h3>
                <p className="text-sm text-gray-600">
                  Creating applicable knowledge for real-world interventions and
                  developing practical mitigations for lock-in risks.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <h3 className="font-semibold mb-2 text-gray-900">
                  Validated Learning
                </h3>
                <p className="text-sm text-gray-600">
                  Continuously updating our research agenda and interventions
                  based on evidence and reason.
                </p>
              </div>
            </div>
          </section>

          {/* Team */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-900">
              Our Team
            </h2>
            <div className="space-y-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 md:p-8 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={160}
                        height={160}
                        className="rounded-full shadow-md"
                      />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-customPurple font-medium mb-3">
                        {member.role}
                      </p>
                      <p className="text-gray-600 mb-4">{member.bio}</p>
                      <div className="flex justify-center md:justify-start space-x-3">
                        {member.email && (
                          <a
                            href={`mailto:${member.email}`}
                            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-customPurple hover:bg-customPurple hover:text-white transition-all duration-200"
                            aria-label="Email"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                          </a>
                        )}
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-customPurple hover:bg-customPurple hover:text-white transition-all duration-200"
                            aria-label="LinkedIn"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                          </a>
                        )}
                        {"website" in member && member.website && (
                          <a
                            href={member.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-customPurple hover:bg-customPurple hover:text-white transition-all duration-200"
                            aria-label="Website"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                              />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
