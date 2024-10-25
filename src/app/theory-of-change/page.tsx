import React from "react";
import Image from "next/image";
import theoryOfChangeImage from "@/images/theory-of-change.png";
import sphereOfControlImage from "@/images/sphere-of-control.png";
import sphereOfInfluenceImage from "@/images/sphere-of-influence.png";
import sphereOfInterestImage from "@/images/sphere-of-interest.png";

const TheoryOfChangePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Hero section with main diagram */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900">
          Our Theory of Change
        </h1>
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
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
            This page documents the initial theory of change for the
            organisation. The purpose of the theory of change is to specify the
            activities conducted by the organisation, the intended effects of
            those activities, and the justification for the belief that those
            activities will bring about those effects.
          </p>
          <br />
          <p className="text-lg text-gray-700 leading-relaxed">
            The structure of a theory of change typically consists of a team or
            set of teams, a sphere of control, a sphere of influence, a sphere
            of interest, and a set of assumptions and evidence. This theory of
            change is subject to change on receiving updated information about
            the impact of the organisation.
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
            Team
          </h2>
          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              The organisation consists only of one individual at present, Alfie
              Lamerton. Alfie will have other roles at the organisation, but
              those roles are not relevant for the theory of change at this
              time.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Alfie will act as the research team in the proposed organisation
              for the time being. It is expected that as the organisation
              evolves, more teams will be created that contribute to the sphere
              of interest. Those teams will be added as new rows to the theory
              of change, starting with the organisation&apos;s goal and mapping
              the causal pathway backwards to team design.
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
              The sphere of control contains the inputs of the organisation –
              the activities conducted by the research team. The research team
              will calculate a forecast for lock-in risk using primary and
              secondary data, brainstorm lock-in threat models, build an
              evaluation framework and benchmark for lock-in risk in frontier
              models, and conduct technical cooperative AI and AI control
              research.
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
              activities conducted by the research team – these are the products
              of the organisation. The research activities will be channelled
              into publishing a lock-in risk forecast, creating threat models
              for lock-in and maintaining a public list of threat models,
              publishing a lock-in evaluation framework and benchmark, producing
              technical research papers, and producing reports making
              recommendations about lock-in risk reduction.
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
              The sphere of interest specifies the events the organisation is
              trying to elicit in the world; it contains two columns in the
              causal chain of events: the outcomes – the intended effects of the
              outputs, and the goal – the main objective of the theory of
              change.
            </p>
          </div>
        </div>

        {/* Summary Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
            Summary
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            This page aims to purpose and operation of the organisation by
            decomposing its initial theory of change and explaining each element
            in detail. It also identifies the assumptions on which the theory of
            change rests, outlines the bases for these assumptions and expresses
            a confidence level in each of them. Lastly, the report illuminates
            potential next steps for the improvement of the theory of change.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TheoryOfChangePage;
