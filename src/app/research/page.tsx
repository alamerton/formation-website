import Image from "next/image";
import researchBanner from "@/images/research-banner-4.jpg";
import giza from "@/images/giza.jpg";

const researchItems = [
  // Where item data goes. Most properties are plain text. The URL should
  // be a Google doc with appropriate sharing settings, or a PDF
  {
    id: 1,
    image: giza,
    title: "Definition of Lock-In",
    date: "October 25, 2024",
    description:
      "Qualitative definition and quantitative operationalisation of lock-in for our future research.",
    link: "https://docs.google.com/document/d/1ekTUeG8Bwf75dt86wtfWZvT316P0KT9sVgnQ9BSsLrU/edit?usp=sharing",
  },
  // {
  //   id: 2,
  //   image: pattern3,
  //   title: "Research Project 2",
  //   date: "October 20, 2024",
  //   description: "Brief description of research project 2...",
  //   link: "/research/project-2",
  // },
];

const ResearchPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="relative w-full h-64 md:h-96">
        <Image
          src={researchBanner}
          alt="Research Banner"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center font-serif">
          <h1 className="text-3xl md:text-5xl  font-kameron text-white">
            Research
          </h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-sm text-gray-600 mb-4">{item.date}</p>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <a
                  href={item.link}
                  className="inline-block bg-customPurple text-white font-open-sans font-medium py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;