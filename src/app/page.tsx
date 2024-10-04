import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import lockInImage from "@/images/lock-in.png";
import Link from "next/link";

const Main: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to <span className="text-customPurple">Formation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              We&apos;re on a mission to minimise lock-in risks from AI systems
              to shape a safer future for humanity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about">
                <Button
                  size="lg"
                  className="bg-customPurple hover:bg-blue-700 text-white"
                >
                  Learn More
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Theory of Change
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <Image
              src={lockInImage}
              alt="AI Illustration"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      <div className=" py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Research",
                description:
                  "Conducting conceptual and empirical lock-in risk research, developing quantitative models of lock-in and methods for measuring and reducing lock-in risk.",
              },
              {
                title: "Threat Modelling",
                description:
                  "We plan to develop and continuously update our most important threat models for lock-in, examining worlds in which lock-in happens, and developing interventions to mitigate the manifestation of these worlds",
              },
              {
                title: "Innovation",
                description:
                  "We plan to build interventions and products targeting the problem of lock-in, using the results from our research and threat modelling",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-orange-400 py-16 text-white text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          Join Us in Shaping the Future
        </h2>
        <p className="mb-6">
          Be part of our mission to create safer AI systems.
        </p>
        <Link href="https://manifund.org/projects/formation-research">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-200"
          >
            Get Involved
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Main;
