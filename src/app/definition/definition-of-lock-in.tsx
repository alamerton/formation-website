import { Card, CardContent, CardHeader } from "@/components/ui/card";

const DefinitionPage = () => {
  return (
    <div>
      <Card className="mb-4 sm:mb-8">
        <CardHeader>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
            Definition of Lock-In
          </h2>
        </CardHeader>
        <CardContent>
          <p>
            Lock-in is a central theme to this organisation. Therefore, before
            conducting any research on lock-in, it is important to create a
            strong working definition of lock-in for use in all subsequent
            products. The stronger the definition of lock-in, the stronger the
            foundation on which the subsequent work will rest, and the more
            specific and explicit we can be when talking about variations of
            lock-in.
          </p>
          <h2 className="text-xl font-semibold mt-4 mb-2">Key Thinkers</h2>
          <h4 className="text-md font-semibold mt-2 mb-1">William MacAskill</h4>
          <p>
            MacAskill talks about lock-in in a chapter of What We Owe the
            Future. He uses the Hundred Schools of Thought period in ancient
            China, the concept of writing, and the potential for artificial
            general intelligence to define and make an argument for the
            potential for value lock-in. He defines lock-in as a situation where
            a single ideology or set of ideologies, or value system takes
            control of an area of the world, or the whole world, and persists
            for an extremely long time.
          </p>
          <h4 className="text-md font-semibold mt-2 mb-1">Toby Ord</h4>
          <p>
            In his chapter on future risks, Ord categorises potential
            existential catastrophes for humanity into extinction, and failed
            continuation. He then categorises failed continuation into the
            unrecoverable collapse of civilisation, and unrecoverable dystopia.
          </p>
          <p>
            He then divides the unrecoverable dystopias into three categories:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li className="ml-4">
              <strong>Undesired dystopia:</strong> Refers to a situation where
              &ldquo;people don&apos;t want that world, yet the structure of
              society makes it almost impossible for them to coordinate to
              change it&ldquo;.
            </li>
            <li className="ml-4">
              <strong>Enforced dystopia:</strong> Occurs when &ldquo;only a
              small group wants that world but enforces it against the wishes of
              the rest&ldquo;.
            </li>
            <li className="ml-4">
              <strong>Desired dystopia:</strong> Refers to a situation where
              people &ldquo;do want that world, yet they are misguided and the
              world falls far short of what they could have achieved.&ldquo;
            </li>
          </ul>
          <h4 className="text-md font-semibold mt-2 mb-1">Lukas Finnveden</h4>
          <p>
            In an interview with Future Matters, Lukas Finnveden, main author on
            AGI and Lock-In, and research analyst at Open Philanthropy, defines
            lock-in in terms of predictable stability. He states, &ldquo;Some
            property of the world is locked in if it&apos;s very probable that
            the property of the world will hold true for a very large amount of
            time&ldquo;.
          </p>
          <h4 className="text-md font-semibold mt-2 mb-1">Jess Riedel</h4>
          <p>
            Jess Riedel, co-author of AGI and lock-in, physicist at NTT
            Research, uses the term singleton introduced by Nick Bostrom in
            &ldquo;What is a Singleton?&ldquo; to create a definition of
            lock-in. If there is an AGI singleton (world order in which there is
            a single decision-making agency at the highest level) with stable
            values (its values do not change over time), then those values are
            locked-in. This can be further defined as global lock-in if it
            applies to all earth-originating life.
          </p>
          <h4 className="text-md font-semibold mt-2 mb-1">Carl Shulman</h4>
          <p>
            Carl Shulman, co-author on AGI and lock-in, has also done extensive
            thinking on lock-in, but does not provide a concise definition in
            his public discussions.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">
            Analogies and Related Concepts
          </h2>

          <h4 className="text-md font-semibold mt-4 mb-1">
            Technology lock-in
          </h4>
          <p>
            An example of technology lock-in is the QWERTY keyboard. This
            concept illustrates how technologies can become locked in by markets
            and evolutionary forces, leading to stability that is not
            necessarily optimal.
          </p>

          <h4 className="text-md font-semibold mt-4 mb-1">Moloch</h4>
          <p>
            Moloch is a symbol of systems that demand constant sacrifice,
            causing the depletion of human potential. It serves as an analogy
            for value lock-in, where society can be locked into values which
            require continuous sacrifice, e.g., resource exploitation requiring
            constant environmental degradation. Scott Alexander lists 10
            real-world examples of multipolar traps in &ldquo;Meditations on
            Moloch&ldquo; to illustrate this analogy.
          </p>

          <h4 className="text-md font-semibold mt-4 mb-1">Static Society</h4>
          <p>
            A static society is characterised by minimal change or evolution
            over long periods. In &ldquo;The Beginning of Infinity&ldquo;, David
            Deutsche describes societies as static (values held in place with
            little variation for long periods) and dynamic (inversely, values
            updating in the direction of what we call progress over short
            periods with no defined endpoint).
          </p>

          <h4 className="text-md font-semibold mt-4 mb-1">
            The Malthusian Trap
          </h4>
          <p>
            The Malthusian Trap refers to self-reinforcing dynamics that can be
            likened to lock-in dynamics. Resource depletion limits growth, and
            constrains progress and improvement without paradigm-shifting
            innovation.
          </p>

          <h4 className="text-md font-semibold mt-4 mb-1">
            Other Related Concepts
          </h4>
          <p>
            Concepts from economics and game theory such as vendor lock-in,
            tragedy of the commons, path dependence, equilibrium lock-in,
            repeated games, and deadlocks also provide models for thinking about
            how situations can get locked in.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">
            Definition in light of these things
          </h2>
          <p>
            For our purposes, we define lock-in as a situation where a feature
            of the world is stable for a long time. Our definition of lock-in
            follows from, and is most aligned with, Lukas Finnveden&apos;s
            definition because that definition targets the long-term and neutral
            nature of what we consider to be a lock-in, and we believe this is
            the best explanation for what a lock-in is.
          </p>

          <h4 className="text-md font-semibold mt-4 mb-1">Scope of Interest</h4>
          <p>
            Following on from this definition, we can observe that many things
            can be considered lock-ins. For example, Earth&apos;s temperature is
            a feature of the world that has been stable for a long time. But we
            don&apos;t mind that feature being locked-in. Therefore, along with
            our definition, we need to define our scope of interest.
          </p>
          <p>
            The things we care most about when wanting to minimise lock-in risks
            (from our point of view as humans) are not all the features of the
            world, but the features of human culture, namely values and ethics,
            power and decision-making structures, cultural norms and ideologies,
            and scientific and technological progress. From the perspective of
            minimising risk, we are therefore most interested in potential
            lock-in scenarios that would be harmful, oppressive, ultimate
            (long-term or final), parochial, or large.
          </p>

          <h4 className="text-md font-semibold mt-4 mb-1">
            Positive, Negative, and Neutral Lock-In
          </h4>
          <p>
            So now the definition looks something like bad situations for our
            culture that last a long time. But what about Ord&apos;s focus on
            desirability, and Jess Riedel&apos;s focus on AGI? Our definition
            now attempts to unify these attributes by categorising lock-ins.
            Let&apos;s start by distinguishing between positive, negative, and
            neutral lock-ins.
          </p>

          <h5 className="text-sm font-semibold mt-3 mb-1">
            The Road to Hell is Paved With Positive Lock-Ins
          </h5>
          <p>
            Positive lock-ins are tricky, because as MacAskill points out,
            today&apos;s positive lock-in might be considered parochial and
            suboptimal by future generations. Just as locking in the values of
            slavery would be seen as a terrible idea today, so locking in some
            values of today might be seen as a terrible idea in the future. This
            is ultimately a paradox, because in a society that makes constant
            progress towards an improved version of itself, there may never be a
            point at which we can be comfortable locking in anything.
          </p>
          <p>
            However, there is a small space of potential solutions where we
            might be able to converge on something close to positive lock-ins.
            This is the region where we lock-in features of human culture that
            we believe contribute to the minimisation of lock-in risks.
          </p>

          <h5 className="text-sm font-semibold mt-3 mb-1">Neutral Lock-In</h5>
          <p>
            We define these as lock-ins that we are not particularly interested
            in. As mentioned, the openness of our definition allows for many
            features of the world to be considered lock-ins. For example, the
            temperature of Earth, or more specific to human culture, the concept
            of work. These are features of the work which tend to remain stable,
            but that we are not trying to make more or less stable.
          </p>

          <h5 className="text-sm font-semibold mt-3 mb-1">Negative Lock-In</h5>
          <p>
            These are the lock-ins we are most interested in. The formation of
            these kinds of lock-ins would have negative implications for
            humanity. As mentioned, we care most about lock-ins that are:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li className="ml-4">
              Harmful: resulting in physical or psychological harm to
              individuals
            </li>
            <li className="ml-4">
              Oppressive: suppressing individuals&apos; freedom, autonomy,
              speech, or opportunities, or the continued evolution of culture
            </li>
            <li className="ml-4">Ultimate: long-term or final</li>
            <li className="ml-4">
              Parochial: relatively limited in scope or perspective
            </li>
            <li className="ml-4">
              Large: concerning a significant portion of individuals relative to
              the total population
            </li>
          </ul>

          <h4 className="text-md font-semibold mt-4 mb-1">
            Human-Only, AI-Enabled, and AI-Led Lock-In
          </h4>
          <p>
            So we have established a categorisation of lock-in in terms of the
            desirability of outcomes for individuals. Now let&apos;s factor in
            AI. As most key thinkers identify, AI, and especially AGI, plays an
            important role in hypothetical future lock-ins. There are many
            reasons for this, such as improved surveillance, error correction,
            human longevity and immortality, and power-seeking behaviour and
            instrumental convergence. It is important to address this fact by
            further categorising lock-ins by their relationship to AI systems.
            We created three such categorisations:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li className="ml-4">
              Human-only: led by a human or group of humans and not enhanced
              significantly by an AI system
            </li>
            <li className="ml-4">
              AI-enabled: led by a human or a group of humans leveraging an AI
              system
            </li>
            <li className="ml-4">
              AI-led: led by an AI system or group of AI systems
            </li>
          </ul>

          <h4 className="text-md font-semibold mt-4 mb-1">Conclusion</h4>
          <p>
            This section outlines the existing literature and thinking on
            lock-in, highlighting the contributions made by key thinkers in the
            area, and adjacent concepts. A definition of lock-in is then
            synthesised in light of the existing definitions and goal of the
            proposed organisation, and categories are defined to make different
            forms of lock-in explicit in terms of scope, desirability, and AI.
            This section aims to be the starting point for further work on
            lock-in risks by creating a foundational definition of lock-in that
            such work can use.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
export default DefinitionPage;
