import alfie from "@/images/alfie.png";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Alfie Lamerton",
    role: "Research Lead",
    bio: "Alfie Lamerton is organisations research lead. Alfie holds a computer science BSc and has completed an artificial intelligence MSc, covering topics relevant to the project’s target problem. Alfie has published AI alignment blog posts, participated in AI safety projects such as AI safety fundamentals, SPAR, and MARS, and has been awarded a grant by the Long-Term Future Fund for his research.",
    image: alfie,
    email: "alfie@example.com",
    linkedin: "https://www.linkedin.com/in/alfiebrown/",
  },
  //   {
  //     name: "Adam Jones",
  //     role: "Advisor",
  //     bio: "",
  //     image: "",
  //     email: "adam@bluedot.org",
  //     linkedin: "",
  //   },
];

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 max-w-3xl">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center">
            {/* <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mb-8">
              <Image
                src={logo}
                alt="Formation Logo"
                layout="responsive"
                priority
              />
            </div> */}

            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Contact Us
            </h1>

            <div className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3">
              <p className="text-center text-xl mb-8">
                We&apos;d love to hear from you! Get in touch with our team for
                any inquiries or collaborations.
              </p>
            </div>
          </div>

          <Card className="mb-4 sm:mb-8">
            <CardHeader>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
                Our Team
              </h2>
            </CardHeader>
            <CardContent>
              <div
                className={`flex ${
                  teamMembers.length === 1
                    ? "justify-center h-full"
                    : "justify-around"
                } items-center`}
              >
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-center ${
                      teamMembers.length === 1 ? "w-full" : "w-1/2"
                    }`}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={150}
                      height={150}
                      className="rounded-full mb-4"
                    />
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-md text-gray-600 mb-2">{member.role}</p>
                    <p className="text-md text-center">{member.bio}</p>
                    <div className="flex mt-4">
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="mr-4"
                          aria-label="Email"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
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
                          aria-label="LinkedIn"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div></div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
