import Image from "next/image";
import alfieImage from "@/images/alfie.jpg";
import adamImage from "@/images/adam.webp";
import teamBanner from "@/images/team-banner.jpg";
import Head from "next/head";

const teamMembers = [
  {
    name: "Alfie Lamerton",
    role: "Founder and Researcher",
    bio: "Alfie Lamerton is the organisation's founder and research lead. He holds a computer science BSc and artificial intelligence MSc, has completed numerous software engineering, machine learning, and research projects across the fintech industry, academia, and in nonprofits, and been awarded several grants for his research.",
    image: alfieImage,
    email: "alfie.lamerton@formationresearch.com",
    linkedin: "https://www.linkedin.com/in/alfie-lamerton/",
  },
  {
    name: "Adam Jones",
    role: "Adviser",
    bio: "Adam Jones is an adviser to the organisation, helping steer the organisation's decision making and strategy. He's currently a member of technical staff at Anthropic, helping develop the Model Context Protocol.",
    image: adamImage,
    email: "domdomegg+adamjones.me@gmail.com",
    linkedin: "https://www.linkedin.com/in/domdomegg/",
  },
];

export const metadata = {
  title:
    "Team | Formation Research – Lock-In Risk Research and High-Impact Interventions",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Our Team | Formation Research",
  url: "https://www.formationresearch.com/team",
  description:
    "Meet the team at Formation Research, dedicated to minimising lock-in risks and promoting AI safety. Learn about our founder, researchers, and advisors.",
  publisher: {
    "@type": "Organization",
    name: "Formation Research",
    logo: {
      "@type": "ImageObject",
      url: "https://www.formationresearch.com/logo.png",
    },
  },
  member: teamMembers.map((member) => ({
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
    description: member.bio,
    image: `https://www.formationresearch.com${member.image.src}`,
    sameAs: [member.linkedin, `mailto:${member.email}`],
  })),
};

const TeamPage = () => {
  return (
    <>
      <Head>
        <title>
          Our Team | Formation Research - AI Safety Experts Working on Lock-In
          Risks
        </title>
        <meta
          name="description"
          content="Meet the team at Formation Research, dedicated to minimising lock-in risks and promoting AI safety. Learn about our founder, researchers, and advisors."
        />
        <meta property="og:title" content="Our Team | Formation Research" />
        <meta
          property="og:description"
          content="Meet the team at Formation Research, dedicated to minimising lock-in risks and promoting AI safety."
        />
        <meta
          property="og:image"
          content="https://www.formationresearch.com/images/team-banner.jpg"
        />
        <meta
          property="og:url"
          content="https://www.formationresearch.com/team"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.formationresearch.com/team" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
        <div className="relative w-full h-64 md:h-96">
          <Image
            src={teamBanner}
            alt="Team Banner"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center font-serif">
            <h1 className="text-3xl md:text-5xl font-times text-white">
              Our Team
            </h1>
          </div>
        </div>
        <div className="container mx-auto px-4 py-12 max-w-3xl">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center mb-20"
            >
              <div className="md:w-1/3 mb-6 md:mb-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={250}
                  height={250}
                  className="rounded-full"
                />
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h2 className="text-2xl font-semibold mb-2">{member.name}</h2>
                <p className="text-lg text-gray-600 mb-4">{member.role}</p>
                <p className="text-md mb-4">{member.bio}</p>
                <div className="flex space-x-4 mt-4">
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="transition-transform transform hover:scale-110"
                      aria-label="Email"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-customPurple hover:text-blue-600 transition duration-200"
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
                      className="transition-transform transform hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-customPurple hover:text-blue-600 transition duration-200"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TeamPage;
