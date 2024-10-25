import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import aboutImage from "@/images/about-image.png";
import productCycleImage from "@/images/product-cycle.png";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 max-w-3xl">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center">
            <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mb-8">
              <Image
                src={aboutImage}
                alt="Diagram outlining our theory of change"
                layout="responsive"
                priority
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              About Us
            </h1>
            <div className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3"> </div>
          </div>
        </div>
        <div className="container pb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold py-4">
            Who We Are
          </h2>
          <p className="text-lg">
            Nick Bostrom thought about AGI and lock-in in 2014, but there has
            been almost no empirical work on it since. We&apos;re starting
            Formation Research to minimise lock-in risk, the outcome being
            reduced likelihood that humanity ends up in a lock-in in the future.
            <br />
            <br /> A lock-in is where features of the world, typically negative
            elements of human culture that are harmful or oppressive, are held
            stable for long periods of time, akin to a totalitarian regime. A
            future where lock-ins are prevented has continued technological and
            cultural evolution, economic growth, sustainable competition, and
            improved individual freedom. Lock-in may prevent any or all of these
            properties from being true in the future. The nature of lock-in
            prevents people from doing anything about it once it happens.
            <br />
            <br />
            <strong>Example 1:</strong> an AGI may gain strategic control of
            humanity, enforcing a dystopian scenario where the AGI competently
            pursues some goal, preventing human intervention.
            <br />
            <strong>Example 2:</strong> a human dictator may leverage AI systems
            to improve their own lifespan and implement mass worldwide
            surveillance, leading to a long-term totalitarian regime.
          </p>
        </div>
        <div className="container pb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold py-4">
            Our Vision
          </h2>
          <div>
            <p className="text-lg mb-4">Our vision is twofold:</p>
            <ol className="list-decimal list-inside space-y-4">
              <li>
                <span className="text-lg font-semibold">
                  Minimising lock-in risks:
                </span>{" "}
                To minimise the likelihood that negative elements of culture
                become stable to the extent that they are harmful, oppressive,
                ultimate, parochial, or large, either accidentally or
                deliberately, as a result of humans and AI systems. Or, more
                concisely, minimising lock-in risks.
              </li>
              <li>
                <span className="text-lg font-semibold">
                  Promoting a dynamic future:
                </span>{" "}
                We envision a future where lock-ins are prevented as having:
                <ul className="list-disc list-inside mt-2 ml-6 space-y-2 text-lg">
                  <li>Continued technological and cultural evolution</li>
                  <li>Economic growth</li>
                  <li>Sustainable competition</li>
                  <li>Improved individual freedom</li>
                </ul>
              </li>
            </ol>
            <p className="mt-4">
              Lock-in may prevent any or all of these properties from being true
              in the future. The nature of lock-in prevents people from doing
              anything about it once it happens.
            </p>
          </div>
        </div>
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold py-4">
          Our Approach
        </h2>
        <div>
          <p className="text-lg">
            As we outline in the theory of change, the type of research our
            organisation will initially conduct is defined by the following
            values: first-principles, bottom-up, collaborative, scientific and
            technical research into the behaviours of AI systems and the
            potential usage of such systems.
          </p>

          <h4 className="text-md font-semibold mt-4 mb-1">First Principles</h4>
          <p className="text-lg">
            This is a nascent area of study, and in the spirit of rationality,
            we believe that thinking about lock-in risks from first principles
            is the best way to keep unhelpful biases from clouding our research.
            This is not the same as only using the knowledge we create, that is
            not realistic. It means forming our own conceptual and theoretical
            models of the world based on our understanding of the laws of
            physics and computation, and testing the assumptions borrowed from
            other fields before employing them.
          </p>

          <h4 className="text-md font-semibold mt-4 mb-1">
            Bottom-up Research
          </h4>
          <p className="text-lg">
            Building theoretical and conceptual models of lock-in based on
            simple facts about AI systems and game theory, rather than resting
            on the conceptual models of other fields or organisations. For
            example, we would not just implement existing risk management
            protocols, alignment strategies, or follow the s-risk template in
            our research.
          </p>

          <h4 className="text-md font-semibold mt-4 mb-1">
            Collaborative Research
          </h4>
          <p className="text-lg">
            We aim to be a collaborative organisation that works with AI safety
            research organisations with overlapping goals. We also expect to
            conduct interdisciplinary work with organisations that conduct other
            kinds of research, e.g., think tanks which conduct economic research
            who may approach lock-in from a different point of view.
          </p>

          <h4 className="text-md font-semibold mt-4 mb-1">
            Scientific Research
          </h4>
          <p className="text-lg">
            We plan to use the scientific method in our research with the goal
            of creating fundamental knowledge about lock-in risks. We plan to
            use:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li className="ml-4">
              Conjecture with first principles, forecasting, and estimation,
            </li>
            <li className="ml-4">
              Criticism through feedback, peer review, and publication,
            </li>
            <li className="ml-4">
              Error-correction by updating our world models in light of feedback
              and review,
            </li>
          </ul>
          <p className="mt-2">
            to make scientific progress on lock-in with good explanations.
          </p>

          <h4 className="text-md font-semibold mt-4 mb-1">
            Technical Research
          </h4>
          <p className="text-lg">
            We will also use the scientific method with real-world applications
            in mind. We want to create applicable knowledge that can solve
            problems. We want to use the existing and created knowledge to
            develop interventions and innovate solutions to lock-in risks.
          </p>

          <h4 className="text-md font-semibold mt-4 mb-1">
            Validated Learning
          </h4>
          <p className="text-lg">
            We believe in the build, measure, learn approach to creating and
            scaling solutions to problems. In the context of lock-in
            minimisation, this entails continuously updating our theory of
            change, research agneda, and interventions upon updates to our world
            models. We aim to always use evidence and reason to update those
            world models.
            <br />
            <br />
            We plan to update our products and interventions in an iterative
            cycle, using conjecture, criticism, and error correction, as
            follows:
          </p>

          <div className="w-full flex justify-center mb-8">
            <div className="w-full sm:w-10/12 md:w-10/12 lg:w-10/12">
              <Image
                src={productCycleImage}
                alt="Diagram outlining our iterative approach to effective research and intervention"
                layout="responsive"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
