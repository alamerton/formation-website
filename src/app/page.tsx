import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import landingPageBanner from "@/images/theory-of-change-banner.jpg";

const Main: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white font-sans">
      {/* Banner Section */}
      <div className="relative w-full h-screen">
        {" "}
        <Image
          src={landingPageBanner}
          alt="Landing Page Banner"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">
            Welcome to Formation
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Formation Research aims to reduce lock-in risks by researching
            fundamental lock-in dynamics and implementing high-impact
            interventions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/about">
              <Button
                size="lg"
                className="bg-customPurple px-8 py-4 hover:bg-gray-100 text-white text-lg font-medium w-full sm:w-auto"
              >
                Learn More
              </Button>
            </Link>
            <Link href="/theory-of-change">
              <Button
                size="lg"
                className="bg-white px-8 py-4 hover:bg-gray-100 text-customPurple text-lg font-medium hover:bg-gray-100 border border-customPurple w-full sm:w-auto"
              >
                Theory of Change
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      {/* <div className=" py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Help Us Minimise Lock-In Risks
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto">
            W&apos;re currently seeking funding for our research. You can help
            by donating to our Manifund proposal and joining our mission.
          </p>
          <Link href="https://manifund.org/projects/formation-research">
            <Button
              size="lg"
              className="bg-customPurple text-white hover:bg-blue-500 hover:font-black text-lg font-medium px-8 py-4"
            >
              Get Involved
            </Button>
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default Main;
