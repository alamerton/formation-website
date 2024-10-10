import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import theoryOfChangeImage from "@/images/theory-of-change.png";
import sphereOfControlImage from "@/images/sphere-of-control.png";
import sphereOfInfluenceImage from "@/images/sphere-of-influence.png";
import sphereOfInterestImage from "@/images/sphere-of-interest.png";

const TheoryOfChangePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 max-w-6xl">
        <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
            Our Theory of Change
          </h1>
          <div className="flex justify-center">
            <div className="w-full sm:w-full md:w-full lg:w-full xl:w-full">
              <Image
                src={theoryOfChangeImage}
                alt="Diagram outlining our theory of change"
                layout="responsive"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 max-w-3xl">
        <Card className="mb-4 sm:mb-8">
          <CardHeader>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
              TL;DR
            </h2>
          </CardHeader>
          <CardContent>
            <p className="text-xs sm:text-sm md:text-base">
              This page outlines, justifies, and evidences the creation of the
              initial theory of change for the organisation. It breaks down the
              columns in a typical theory of change diagram and talks about the
              events involved in the organisation&apos;s initial intended route
              to impact.
            </p>
          </CardContent>
        </Card>
        <Card className="mb-4 sm:mb-8">
          <CardHeader>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
              TL;DR
            </h2>
          </CardHeader>
          <CardContent>
            <p>
              This page documents the initial theory of change for the
              organisation. The purpose of the theory of change is to specify
              the activities conducted by the organisation, the intended effects
              of those activities, and the justification for the belief that
              those activities will bring about those effects.
            </p>
            <p className="mt-4">
              The structure of a theory of change typically consists of a team
              or set of teams, a sphere of control, a sphere of influence, a
              sphere of interest, and a set of assumptions and evidence. This
              theory of change is subject to change on receiving updated
              information about the impact of the organisation.
            </p>
          </CardContent>
        </Card>
        <Card className="mb-4 sm:mb-8">
          <CardHeader>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
              Team
            </h2>
          </CardHeader>
          <CardContent>
            <p>
              The organisation consists only of one individual at present, Alfie
              Lamerton. Alfie will have other roles at the organisation, but
              those roles are not relevant for the theory of change at this
              time.
            </p>
            <p className="mt-4">
              Alfie will act as the research team in the proposed organisation
              for the time being. It is expected that as the organisation
              evolves, more teams will be created that contribute to the sphere
              of interest. Those teams will be added as new rows to the theory
              of change, starting with the organisation&apos;s goal and mapping
              the causal pathway backwards to team design.
            </p>
          </CardContent>
        </Card>
        <Card className="mb-4 sm:mb-8">
          <CardHeader>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
              Sphere of Control
            </h2>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              <div className="w-2/3 md:w-2/3 lg:w-1/2 xl:w-2/5 pb-4">
                <Image
                  src={sphereOfControlImage}
                  alt="Diagram outlining our theory of change"
                  layout="responsive"
                  priority
                />
              </div>
            </div>
            <p>
              The sphere of control contains the inputs of the organisation –
              the activities conducted by the research team. The research team
              will calculate a forecast for lock-in risk using primary and
              secondary data, brainstorm lock-in threat models, build an
              evaluation framework and benchmark for lock-in risk in frontier
              models, and conduct technical cooperative AI and AI control
              research.
            </p>
          </CardContent>
        </Card>
        <Card className="mb-4 sm:mb-8">
          <CardHeader>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
              Sphere of Influence
            </h2>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              <div className="w-2/3 md:w-2/3 lg:w-1/2 xl:w-2/5 pb-4">
                <Image
                  src={sphereOfInfluenceImage}
                  alt="Diagram outlining our theory of change"
                  layout="responsive"
                  priority
                />
              </div>
            </div>
            <p>
              The sphere of influence contains the measurable effects of the
              activities conducted by the research team – these are the products
              of the organisation. The research activities will be channelled
              into publishing a lock-in risk forecast, creating threat models
              for lock-in and maintaining a public list of threat models,
              publishing a lock-in evaluation framework and benchmark, producing
              technical research papers, and producing reports making
              recommendations about lock-in risk reduction.
            </p>
          </CardContent>
        </Card>
        <Card className="mb-4 sm:mb-8">
          <CardHeader>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
              Sphere of Interest
            </h2>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              <div className="w-2/3 pb-4">
                <Image
                  src={sphereOfInterestImage}
                  alt="Diagram outlining our theory of change"
                  layout="responsive"
                  priority
                />
              </div>
            </div>
            <p>
              The sphere of interest specifies the events the organisation is
              trying to elicit in the world; it contains two columns in the
              causal chain of events: the outcomes – the intended effects of the
              outputs, and the goal – the main objective of the theory of
              change.
            </p>
          </CardContent>
        </Card>
        {/* <Card className="mb-4 sm:mb-8">
          <CardHeader>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
              Assumptions and Evidence
            </h2>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              This section outlines the assumptions on which the theory of
              change rests, the evidence for each assumption, and associated
              confidence levels and their explanations.
            </p>
            {[
              {
                assumption:
                  "Lock-in risk research is tractable enough to create knowledge using the scientific method.",
                confidence: 90,
                explanation:
                  "The kinds of research that this research would be an example/intersection of, can be tractable with the scientific method. Therefore I am relatively confident that it is possible, as there seems to be no obvious reason why not; however, there might be unforeseen consequences of the nature of lock-in which makes the research less tractable.",
              },
              {
                assumption:
                  "Creating knowledge about lock-in risks from AI systems will let us create effective recommendations to key decision-makers.",
                confidence: 85,
                explanation:
                  "It is clear that this is one method employed by existing research organisations. However, examples are not definitive indications that the method is effective.",
              },
              {
                assumption:
                  "The key decision-makers outlined are the correct targets for knowledge about lock-in risks to affect change.",
                confidence: 70,
                explanation:
                  "Argued, but not directly evidenced. From the perspective of decision theory, AI lock-in risks are not going to form regardless of human action. They are going to be the result of a chain of decisions made by individuals about the development and governance of the AI systems in question.",
              },
              {
                assumption:
                  "Scientific research is necessary because no existing research is testing the hypotheses that are important for creating knowledge about lock-in.",
                confidence: 60,
                explanation:
                  "A little more than a guess, based on assumptions about the existing knowledge. This will be more conclusive as a result of the first science of deep learning literature review.",
              },
            ].map((item, index) => (
              <div key={index} className="mt-4">
                <h3 className="text-base font-semibold">
                  Assumption {index + 1}: {item.assumption}
                </h3>
                <p className="text-sm">
                  <strong>Confidence level:</strong> {item.confidence}%
                </p>
                <p className="text-sm">
                  <strong>Explanation:</strong> {item.explanation}
                </p>
              </div>
            ))}
          </CardContent>
        </Card> */}

        <Card className="mt-8">
          <CardHeader>
            <h2 className="text-xl md:text-2xl font-semibold">Summary</h2>
          </CardHeader>
          <CardContent>
            <p className="text-sm md:text-base">
              This page aims to purpose and operation of the organisation by
              decomposing its initial theory of change and explaining each
              element in detail. It also identifies the assumptions on which the
              theory of change rests, outlines the bases for these assumptions
              and expresses a confidence level in each of them. Lastly, the
              report illuminates potential next steps for the improvement of the
              theory of change.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TheoryOfChangePage;
