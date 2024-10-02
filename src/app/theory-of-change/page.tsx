import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import theoryOfChangeImage from "@/images/theory-of-change.png";

const TheoryOfChangePage = () => {
  const tabs = [
    { value: "introduction", label: "Intro" },
    { value: "team", label: "Team" },
    { value: "control", label: "Control" },
    { value: "influence", label: "Influence" },
    { value: "interest", label: "Interest" },
    { value: "assumptions", label: "Assumptions" },
  ];

  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
          Theory of Change
        </h1>
        <div className="flex justify-center">
          <div className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2">
            <Image
              src={theoryOfChangeImage}
              alt="Diagram outlining our theory of change"
              layout="responsive"
              width={850}
              priority
            />
          </div>
        </div>
      </div>

      <Card className="mb-4 sm:mb-8">
        <CardHeader>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
            TL;DR
          </h2>
        </CardHeader>
        <CardContent>
          <p className="text-xs sm:text-sm md:text-base">
            This document outlines, justifies, and evidences the creation of an
            initial theory of change for the proposed organisation. It breaks
            down the columns in a typical theory of change diagram and talks
            about the events involved in the organisation's initial intended
            route to impact.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="introduction" className="space-y-4">
        <TabsList className="grid grid-cols-3 gap-1 sm:flex sm:flex-wrap sm:justify-start sm:gap-2">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="px-1 py-1 text-xs sm:text-sm sm:px-2 whitespace-nowrap"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {[
          {
            value: "introduction",
            title: "Introduction",
            content: (
              <>
                <p>
                  This report documents the initial theory of change for the
                  proposed organisation. The purpose of the theory of change is
                  to specify the activities conducted by the organisation, the
                  intended effects of those activities, and the justification
                  for the belief that those activities will bring about those
                  effects.
                </p>
                <p className="mt-4">
                  The structure of a theory of change typically consists of a
                  team or set of teams, a sphere of control, a sphere of
                  influence, a sphere of interest, and a set of assumptions and
                  evidence. This theory of change is subject to change on
                  receiving updated information about the impact of the
                  organisation.
                </p>
              </>
            ),
          },
          {
            value: "team",
            title: "Team",
            content: (
              <>
                <p>
                  The proposed org consists only of one individual at present,
                  Alfie Lamerton. Alfie will have other roles at the
                  organisation, but those roles are not relevant for the theory
                  of change at this time.
                </p>
                <p className="mt-4">
                  Alfie will act as the research team in the proposed
                  organisation for the time being. It is expected that as the
                  organisation evolves, more teams will be created that
                  contribute to the sphere of interest. Those teams will be
                  added as new rows to the theory of change, starting with the
                  organisation's goal and mapping the causal pathway backwards
                  to team design.
                </p>
              </>
            ),
          },
          {
            value: "control",
            title: "Sphere of Control",
            content: (
              <>
                <p>
                  The sphere of control contains the inputs of the organisation
                  – the activities conducted by the research team. The research
                  team will conduct scientific and technical research in
                  accordance with the research agenda.
                </p>
                <h3 className="text-lg font-semibold mt-4 mb-2">
                  Specific research activities:
                </h3>
                <ol className="list-decimal list-inside text-sm space-y-2">
                  <li>
                    Analysing multi-disciplinary literature for insights about
                    lock-in risks from AI systems
                  </li>
                  <li>
                    Forming original opinions on AI safety, challenging
                    assumptions, and creating models of lock-in risk from
                    first-principles
                  </li>
                  <li>
                    Creating and testing hypotheses via conjecture, criticism,
                    and error-correction
                  </li>
                  <li>
                    Practising methods of rationality and the decomposition of
                    research objectives
                  </li>
                  <li>
                    Collaborating with other scientific research teams to
                    improve epistemic foundations
                  </li>
                </ol>
              </>
            ),
          },
          {
            value: "influence",
            title: "Sphere of Influence",
            content: (
              <>
                <p>
                  The sphere of influence contains the measurable effects of the
                  activities conducted by the research team – these will be
                  called the products of the organisation. The research
                  activities will be channelled into two types of product:
                </p>
                <h3 className="text-lg font-semibold mt-4 mb-2">
                  1. Scientific Research Papers
                </h3>
                <p className="text-sm">
                  The purpose of these products will be to create knowledge
                  about lock-in risks from AI systems. Scientific research is
                  believed to be necessary because the scientific method
                  provides a framework for creating reliable knowledge with high
                  epistemic validity.
                </p>
                <h3 className="text-lg font-semibold mt-4 mb-2">
                  2. Technical reports creating recommendations for key
                  decision-makers
                </h3>
                <p className="text-sm">
                  The purpose of these products is to communicate knowledge
                  about lock-in risks using a different structure. The reports
                  will discuss lock-in at a different level of analysis to the
                  scientific research papers – they will take existing knowledge
                  and the knowledge created by the research to create
                  recommendations to key decision-makers in the field.
                </p>
              </>
            ),
          },
          {
            value: "interest",
            title: "Sphere of Interest",
            content: (
              <>
                <p>
                  The sphere of interest specifies the events the organisation
                  is trying to elicit in the world; it contains two columns in
                  the causal chain of events: the outcomes – the intended
                  effects of the outputs, and the goal – the main objective of
                  the theory of change.
                </p>
                <h3 className="text-lg font-semibold mt-4 mb-2">Outcomes</h3>
                <p className="text-sm">
                  The first intended effect of the outputs is that
                  decision-makers have access to lock-in risk knowledge. The
                  target demographics for the outputs are:
                </p>
                <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                  <li>Tech company executives</li>
                  <li>Investors and venture capitalists</li>
                  <li>Policymakers</li>
                  <li>Public intellectuals and academics</li>
                </ul>
                <h3 className="text-lg font-semibold mt-4 mb-2">Goal</h3>
                <p className="text-sm">
                  The goal of the organisation is to minimise lock-in risks from
                  AI systems. The organisation is operating on the assumption
                  that lock-in risks would develop as a consequence of the
                  behaviour and usage of AI systems.
                </p>
              </>
            ),
          },
          {
            value: "assumptions",
            title: "Assumptions and Evidence",
            content: (
              <>
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
              </>
            ),
          },
        ].map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <Card>
              <CardHeader>
                <h2 className="text-xl md:text-2xl font-semibold">
                  {tab.title}
                </h2>
              </CardHeader>
              <CardContent className="text-sm md:text-base">
                {tab.content}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <Card className="mt-8">
        <CardHeader>
          <h2 className="text-xl md:text-2xl font-semibold">Conclusion</h2>
        </CardHeader>
        <CardContent>
          <p className="text-sm md:text-base">
            This report aims to make the case for the existence of the potential
            organisation by decomposing its initial theory of change and
            explaining each element in detail. It also identifies the
            assumptions on which the theory of change rests, outlines the bases
            for these assumptions and expresses a confidence level in each of
            them. Lastly, the report illuminates potential next steps for the
            improvement of the theory of change.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TheoryOfChangePage;
