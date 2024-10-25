import Image from "next/image";
import alfieImage from "@/images/alfie.png";
import teamBanner from "@/images/team-banner.jpg";

const teamMembers = [
  {
    name: "Alfie Lamerton",
    role: "Research Lead",
    bio: "Alfie Lamerton is the organisation's research lead. Alfie holds a computer science BSc and has completed an artificial intelligence MSc, covering topics relevant to lock-in such as deep learning, game theory, and philosophy. Alfie has published AI alignment blog posts, participated in AI safety projects such as AI safety fundamentals, SPAR, and MARS, and has been awarded a grant by the Long-Term Future Fund for his research.",
    image: alfieImage,
    email: "alfie.david.lamerton@gmail.com",
    linkedin: "https://www.linkedin.com/in/alfie-lamerton/",
  },
];

const TeamPage = () => {
  return (
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
          <h1 className="text-3xl md:text-5xl font-kameron text-white">
            Our Team
          </h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center mb-12"
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
  );
};

export default TeamPage;
