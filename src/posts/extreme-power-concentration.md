---
title: "More People Should Be Working on Extreme AI-Driven Power Concentration Right Now"
date: "2026-09-30"
summary: "Concerns for AI-enabled (human) power concentration (AEPC) are becoming more prominent within AI safety, but is this justified? This post presents a deep-dive cause prioritisation between AEPC and the field's longtime priority: misaligned (AI) takeover."
author: "hugo-bos"
banner: "indigo-waves"
lesswrong: "https://www.lesswrong.com/" # placeholder: replace with the LessWrong post URL
unlisted: true # remove this line to list the post on the blog and home page
---

# Executive Summary

**Key takeaway**: more marginal resources should be invested into preventing AI-enabled power concentration (AEPC), compared to misaligned AI takeover (MTO). This conclusion is mostly driven by neglectedness: MTO currently has between 10x and 30x as many people working on it, so when assuming diminishing marginal returns an additional person would be more impactful working on AEPC.

**Other findings** (strong takes, weakly held):

- **No other criterion is as clear as neglectedness**. The scale or importance (broken down into significance, persistence, and likelihood) and tractability (of solving) of both problem areas are pretty close, or at least sufficiently uncertain to make it difficult to draw a stronger conclusion. These criteria are multiplicative, and the strong conclusion for neglectedness outweighs all other criteria.
- **The spread of outcomes is different**. Unaligned AI systems are completely indifferent towards humans, meaning MTO would probably lead to human extinction; a human totalitarian ruler won’t be indifferent towards other humans, and would probably wish either a very good (benevolent dictator) or a very bad (stable tyranny) outcome for their fellow humans. How to prioritise between these depends on your values and on how concerned you are by extinction (you might think an AI successor civilisation could be valuable)
- **MTO governance is more incentive-compatible**. Current rulers do not want to lose their power to a rogue AI, and are thus incentivised to work on MTO (though this does require coordination). Current rulers may benefit from power concentration, reducing their incentive to prevent AEPC.
- **Without neglectedness, MTO seems more urgent**. MTO is more likely to lead to human extinction, which can’t be reversed; MTO work may also be more tractable because of better incentive-compatibility. But these conclusions aren’t strong enough to outweigh the neglectedness difference, as of September 2026.
- **Strong views on a number of cruxes can flip the conclusion**. The sub-conclusions driving the final verdict are very uncertain; there are several reasonable views (involving strong opinions on one of the key cruxes outlined below) that could lead you to a different conclusion, even considering neglectedness.
- **Governance focused on one threat can harm the other**. AI governance *can* mitigate both threat models at once, but if a governance intervention is too optimised for mitigating one threat it can make the other worse. Example: (MTO-focused) AI kill switch legislation that gives governments arbitrary power over AI companies, thus worsening power concentration.
- **Moderate AEPC is not as important**. Extreme AEPC was defined as including both near-total world domination and persistent regime lock-in; without these elements moderate AEPC loses much of its longtermist concern

A few cruxes were identified: these are issues on which there is currently not enough evidence or (moral) consensus, but which could completely flip the final conclusion.

**Key cruxes:**

- **Difficulty of alignment**: if aligning AI models is easy, AEPC risks are more likely. This issue seems key for proponents of strong “AI doom” views.
- **Type of alignment**: corrigible systems are more concerning for AEPC than value alignment.
- **Persistence of extinction**: if you think AI systems may be capable of setting up a valuable successor civilisation you might be less concerned about MTO.
- **Feasibility of lock-in**: it is not clear whether humans or AI systems could entrench a certain regime for an indefinite period without errors or value drift.
- **Downside-focus**: if you are particularly worried about downside (suffering) risks, AEPC becomes more concerning.
- **Non-AI power concentration efforts**: AEPC becomes a lot less neglected if you consider how many people are working on general power concentration mitigation, but it isn’t clear how much this should count.

**Implications**: if these findings are correct, the recent increase in attention and resources towards mitigating AEPC is great. This research also intended to improve the quality of the conversation on this issue, as many prioritisation decisions between these two problem areas are not taken transparently or rigorously.

<hr class="post-section-break">

<h1 class="post-heading-minor">Acknowledgements</h1>

My mentor: Alfie Lamerton, and research manager: James Bryant. A big thank you to everyone who provided comments, either in conversation or on a draft: Aaron Scher, Adam Jones, Addie Foote, Alex Lintz, Ashwin Acharya, Carlo Leonardo Attubato, Dave Banerjee, Firat Akova, Haimi Tefera, Joel Christoph, Kacie Yearout, Luke Kemp, Patrick Levermore, Pepijn Cobben, Severin Field, Soniya Agrawal, and Stefan Torges. Finally, this would not have been possible without the amazing Pivotal staff and fellows.

# Introduction

Advanced AI could enable a small group of people to concentrate and entrench power over others. This concern has been around for a while, but it seems that it has recently attracted new attention among people thinking about AI and its safety. For example, 80,000 hours created an extreme power concentration problem profile in 2025[^1], and Longview Philanthropy published a request for proposals[^2] in summer 2026, followed by another RFP by the Effective Institutions and Collective Intelligence projects[^3]. The AI labs also seem on board with this trend: OpenAI’s new “AI Futures” blog opens with a piece[^4] discussing concentration of power. There is also evidence from the 2026 Summit on Existential Security[^5], where 43/59 of respondents indicated that more resources should be invested into preventing AI-enabled human takeover. Respondents leaned slightly against investing more resources into preventing misaligned take-over; this shows that the field’s longtime priority order (something like misalignment first, misuse second, and anything else can come later) is starting to change.

This broadening of the field’s focus may be part of a general trend. Toby Ord has argued that we should have broad AGI timelines[^6], acknowledging the difficulty of predicting the future and being careful to not spend all our resources on a single possible AI risk scenario. However, there is a concern (voiced by e.g. Michelle Hutchinson[^7]) that renewed recognition of AI-enabled power concentration (AEPC) is happening for the wrong reasons. For example, power concentration-related concerns might be more legible to a general audience than the more science fiction-tinted concerns around misaligned take-over (MTO). It is also possible that people’s prior experience[^8] influences which cause seems most pressing: for example, computer scientists may be more easily convinced by MTO than social scientists.

With some exceptions[^9] [^10], no work systematically compares and prioritises between these two broad AI risk areas; this research project aims to fill this gap. The following sections provide some background and definitions, and will then compare AEPC and MTO on importance, tractability, and neglectedness. For each section I have tried to indicate my final opinion on which risk seems most pressing, but these opinions are highly uncertain and are not the main aim of the piece. Instead, the main goal is to improve the conversation around this topic: surface just how uncertain many of the prioritisation cruxes are, indicate how the conclusions should change based on new evidence, and create a framework for narrowing down disagreements.

# Background

## History

Before diving into the ideas as we know them today, I think it’s useful to understand their intellectual history and how they have related to each other in the past; this helps understand current prioritisation between them.

Thinking about AEPC has its roots in mid-twentieth-century thinking about the political aspects of new technologies[^11]. Nick Bostrom[^12] appears to have been first in describing extreme AEPC: he mentions a “repressive totalitarian global regime” which may be brought about when a small group of people are in control of the first superintelligence as an existential risk, especially if this regime is based on poor values. In this same paper Bostrom also mentions existential risks from MTO: a “badly programmed superintelligence” that has been accidentally given goals “that lead it to annihilate humankind”.

Regarding MTO, the idea that a sufficiently intelligent AI system might eventually take control over humanity goes back as far as Samuel Butler’s (1872) novel *Erewhon*[^13], which is later referenced by Alan Turing during a lecture in 1951[^14], who claimed that “at some stage … we should expect the machines to take control”. Wiener[^15] then introduces the alignment problem, though it isn’t until 2014 that this term first gets used by Stuart Russel and Eliezer Yudkowsky[^16].

This brief history shows that MTO is the older of the two concerns, predating the whole field of AI by 80 years. However, concerns around technologically enabled power concentration already existed during the field’s inception in the 1960s, and when Bostrom started discussing existential risks in 2002 both MTO and AEPC were mentioned as specific risks. Yet, it seems that MTO has gained far more attention than AEPC over the last twenty years or so, at least within AI safety[^17].

A possible reason for this mismatch is that concerns for misalignment are closely associated with development of the technology itself. (Early) AI researchers like Turing and Wiener have always been acutely aware of these risks, warning against them alongside promoting technological breakthroughs. Power concentration is a much more general, societal-scale concern, so even though the connection with AI had already been drawn by Bostrom and others, it might not have seemed as distinctly important as misalignment. Finally, recent political developments such as the US government’s decision to limit access to Anthropic’s Mythos model series may have served as a warning shot, bringing AEPC risks into the public imagination.

## Definitions

Both “power concentration” and “misalignment” are vague terms that can be used in different ways; the following section outlines how I intend to use them.

### AI-enabled power concentration

I think CLTR’s definition of extreme AI-enabled power concentration is good: *“A scenario where AI enables a single actor or small group of actors to acquire sufficient power (whether economic, political, military, and/or epistemic/ideological) to severely disempower a majority of people in a way that becomes structurally entrenched, creating a self-reinforcing order that cannot be meaningfully contested or reversed.”*[^18]. “Power” here refers to “*the ability of an actor to secure outcomes it favours (including over the resistance of others)*”. “Disempowerment” thus refers to losing this power: entering a state in which an actor is no longer able to secure the outcomes it favours, as someone else now has this ability.

I would distinguish ‘extreme’ from ‘moderate’ AEPC. The extreme elements in the CLTR definition are:

1. Disempowering the “majority” of people, maybe around 99.99%? With today’s population, this would leave a group the size of the population of Cyprus in charge
1. “Entrenchment” (being able to last for several thousand years without disruption, assuming no aliens).

Without either of these criteria a situation would not count as “extreme” AEPC, though it could still be quite bad. Throughout this piece I will discuss mostly extreme AEPC (as this is most comparable to MTO), however I will occasionally discuss moderate AEPC as a separate scenario.

There have been several attempts at describing different ways in which AI might help concentrate power[^19], but there is no authoritative taxonomy of mechanisms yet. Some examples of mechanisms through which AEPC might play out include:

- Disempowerment of all labourers in an automated economy (the intelligence curse[^20])
- Entire countries being disempowered due to having no AI capacity
- An actor inserting secret loyalties into critical AI systems and taking over control gradually or suddenly, e.g. through an AI-enabled coup[^21]
- An economic decisive strategic advantage by one country or company[^22]
- A military decisive strategic advantage
- An actor controlling and manipulating the information (epistemic) environment[^23], including automated propaganda, persuasion, and surveillance

These mechanisms are relatively diverse, spanning political, economic, and technical domains. For some of these mechanisms it seems hard to imagine how this could lead to *extreme* AEPC. For example, a large country like the US or China might successfully disempower the rest of the world while maintaining an internal democracy or a diverse power ecosystem, counting as moderate power concentration.

As with mechanisms, there is no agreed upon taxonomy of mitigation strategies. Some examples include:

- Training AI systems to follow the law[^24]
- Improving the epistemic environment
- Technical work on ensuring AI systems are not secretly loyal to a single actor[^25]
- Sharing AI capabilities among people or countries
- Building up compute or capabilities in middle power
- Profit redistribution[^26]
- Institutional safeguards (AI-proof checks & balances)

These interventions are laid out in more detail in the RFPs mentioned in the introduction and elsewhere[^27]

### Misaligned take-over

The case for being concerned about misaligned take-over (MTO) risks has been discussed extensively, for example by Nick Bostrom[^28], Joe Carlsmith[^29], and Yudkowsky and Soares[^30]. The end state of concern is essentially the same as for AEPC, except that now it is one or more AI system(s) that might end up gaining and retaining power over all humans. The MTO threat model is more unitary than AEPC; rather than a few different ways in which future AI technology could assist humans in concentrating power, there is really only one high-level mechanism of concern in MTO. This argument can be summarised through Carlsmith’s six premises[^31]:

1. It will become possible to build very capable and agentic (self-directed) AI systems
1. There will be strong incentives to build these systems
1. The easiest way of building these systems will result in systems that are misaligned, i.e. whose goals or values do not align with those of their developers or with humanity as a whole
1. Some such misaligned systems will seek power over humans
1. This problem will scale to the full disempowerment of humanity
1. This disempowerment will constitute an existential catastrophe

In AEPC, the unifying factor of (most of) the mechanisms is that one or more human actors will leverage AI systems to expand and entrench their power. In MTO, the claim is that AI systems themselves might do the same; it is assumed that they are sufficiently capable and that their misaligned values and goals would give them the motivation to disempower humanity. How exactly this would play out is less important than for AEPC, where the focus is more on specific threat models.

Some broad interventions to prevent catastrophic harm from MTO include:

- Technical research on how to align models
- Testing models for safety (evaluations)
- Thinking about preventing misaligned systems from causing harm (control)
- Governance interventions to improve AI lab safety practices

## Comparison

These two threat models are similar in that they both involve the disempowerment of the vast majority (or all) of humans; this similarity makes the comparison a bit easier. Another threat model that concerns the disempowerment of (nearly) all humans is gradual disempowerment[^32], where societal systems face competitive pressures to automate, leading to a gradual degradation of human systems eventually disempowering the humans themselves. However, this particular scenario seems to fall somewhere in between AI and human take-over: the main point is that humans may become irrelevant in societal systems like the economy, culture, and states, ending in a world with either AI systems or some humans in control[^33].

There are also some important differences between the two threat models. One difference is the end state (whether an AI system or a human remains in charge); whether this makes a difference for the disempowered majority will be explored in the Significance section below. The mechanisms and the interventions to prevent the risks discussed in the previous section are also different; this is why cause prioritisation is important, as there may be trade-offs. These trade-offs may be ‘passive’, i.e. spending resources on one intervention means not spending them on the other; they can also be ‘active’, i.e. working on one intervention actively makes the other risk worse. A classic example here is centralising power over AI development, to reduce race dynamics and cutting corners on safety: this mitigation for MTO risks might make AEPC risks worse.

There is also a set of cross-cutting interventions that help mitigate both threat models. These include:

- A pause in AI development
- Communications: making more people aware of the speed of AI development and its risks
- Societal preparedness for an intelligence explosion
- Transparency (e.g. whistleblower protection)
- Compute governance
- Understanding how AI models work (interpretability)

For deciding whether or not to work on one of these cross-cutting interventions, cause prioritisation may not be particularly useful. Similarly, the more important question for many people may be whether or not to work on AI safety in general, and for others the decision of whether to work on human- or AI-driven power concentration will be driven almost entirely by their personal fit. However, the active and passive trade-offs illustrated above show that a cause prioritisation is still important.

Cause prioritisation can be done by considering importance, tractability, and neglectedness[^34]. For longtermist cause prioritisation, importance (the scale of a problem) can be broken down into significance (how good or bad is this event?), persistence (how long will this event last?), and likelihood (probability of the event happening)[^35].

The question of interest for this piece is: “*which problem should have more marginal resources allocated to solving it: risks from misaligned power-seeking AI systems, or risks from AI-enabled power concentration?*”[^36]

# Significance

The badness of a world where a small number of AI systems or humans are in charge[^37] depends on what happens after the new ruler(s) take over; in particular, a lot depends on the ruler’s attitude towards the remaining humans. This is because, by definition, a situation with extreme power concentration will lack the kinds of incentives (checks and balances, taxes, the possibility of a revolt) that ensure caring about their population is also in ruler’s own interests. We can break down ruler attitudes into roughly three scenarios:

1. The new ruler(s) care about humans
1. The new ruler(s) are completely indifferent to humans
1. The new ruler(s) actively desire human suffering

In scenario 1, the future looks pretty good - especially if the new ruler(s) are competent, which seems likely, since the human or AI will have already managed to take power over all of humanity. Scenario 2 is most likely to lead to human extinction: just as humans are indifferent to an anthill that we destroy while building a highway, so might an indifferent future ruler destroy humanity to achieve some other goal[^38]. Finally, scenario 3 could lead to an S-risk, where the new ruler actively strives to create maximum human suffering.

## AI Takeover

Conditional on having already executed a takeover, what values (towards humans) should we expect an all-powerful AI system to have? It is of course not possible to observe this empirically; most arguments here rely on theoretical agent properties.

One argument for why AI systems might be indifferent towards humans[^39] relies on the premise that AI systems will essentially be an alien form of intelligence. Since the spaces of possible values and kinds of intelligence are both presumably vast, there is no reason to assume that an artificial superintelligence (ASI) would be anywhere near us on either of these[^40]. Instead, we can assume that an ASI system would converge to a set of instrumentally useful goals (such as accumulating power or preventing itself from being shut off), regardless of what its final goal is: an idea known as *instrumental convergence*. This idea is at the source of most existential concerns from misaligned AI systems.

Instrumental convergence arguments rely on agent properties; they generally do not take into account what AI recent AI developments have looked like (in particular properties of LLMs; much of this thinking was done before this paradigm shift). Taking into account LLM properties may make you more or less optimistic about an AI’s values.

On the pessimistic side, Ngo et al. (2022)[^41] consider these classic arguments in light of deep learning techniques, surveying emerging evidence up to 2025; they find that, while evidence is scarce, where it exists it supports the presence of some misaligned power-seeking behaviour (including through instrumental convergence) in LLM systems.

On the optimistic side, Ryan Greenblatt[^42] and Tom Davidson[^43] both point out that there is a good chance that current pretraining methods really do cause AI systems to have values that are at least somewhat aligned with human values (including because so much of their training material revolves around humans). Greenblatt then points out that, for an all-powerful ASI, keeping some humans around would cost relatively little; for that reason, only a small amount of care for humans would suffice to prevent extinction. Davidson additionally points out that an AI system that has taken over power will clearly have had the “corrigibility” component (letting us alter its power-seeking instrumental goal) of its alignment training fail, but this may be independent from the “caring about humans” component of its alignment training - even a successful power-seeking system may not be completely indifferent to humans.

It thus seems likely that AI systems would have either an indifferent or positive attitude towards humans. As mentioned earlier, an indifferent attitude still implies catastrophe if the systems are powerful enough and if we’re competing over resources or if they’re concerned we’re a threat. However, only the third outcome - rulers actively disvaluing humans - seems likely to lead to a worst-case (S-risk) outcome.

I think AI systems actively wishing to inflict harm to humans is quite unlikely; there is no rational reason for superintelligence to dislike us, and alignment pressure points in the opposite direction. The only credible argument for this outcome concerns an alignment near-miss scenario[^44]. If we imagine the total space of possible values to be nearly infinite, “wishing the best for humans” and “wishing the worst for humans” seem much closer to each other than a random set of values that we might expect an unaligned AI system to have. Therefore, a partially successful alignment effort could accidentally land an AI’s values in this catastrophic near-miss region. This argument shows that we might accidentally land on very bad values but it does not give any information about how likely this is; the arguments for indifference or positive values suggest that AI values will be actively pulled in those directions, rather than ending up there by accident. Therefore, I still think those scenarios are more likely.

## Human Takeover

On the human side, it is a bit easier to consider what a human totalitarian ruler or small group of rulers would be like, since there are historical precedents for human power concentration.

By definition, a human ruler that has gained control over the rest of the world will have dismantled all checks and balances, meaning they can take any action that affects the vast majority of the population (one way this could happen is when one person aligns an ASI system only to themself, and uses its cognitive abilities to outsmart everyone else).

Unlike digital agentic systems, the human ruler would not be an alien form of intelligence. A human ruler’s values will, in a way, already be ‘aligned’ with human values: I therefore find the indifference scenario highly implausible. However, the near-miss alignment argument also applies: a human ruler will have some opinion on what to do with other humans, good or bad.

It is possible that the human ruler would have very bad values, causing them to inflict massive suffering on the rest of the population and possibly leading to an S-risk[^45]. This might be because the process of gaining power over the rest of the world requires or selects for bad personality traits[^46]: individuals who are e.g. narcissistic may be more likely to take power if given the opportunity to do so. Another possibility is that power corrupts: once in power even a well-intentioned ruler may drift towards indifference or negative values. Today’s rulers have at least some incentives to treat their populations well, as they will otherwise miss out on votes and tax income or risk rebellion; this incentive might fall away post-power concentration, a dynamic that is already happening in some resource-rich countries today (“rentier states”[^47]). On the other hand, incentives for a ruler to mistreat their population (e.g. forced labour) might similarly fall away.

Historically, many human dictators have cared for one group of people, while being indifferent towards (or actively wishing harm on) a different group. This situation can be quite dangerous, where one group of people commits mass violence towards another group; it therefore sits somewhere in between the “good values” and “bad values” scenarios, with the significance depending on the proportion of the population that the ruler actively cares about.

It is also possible for a human ruler to have good values (actively care about other humans). While psychological selection mechanisms seem to favour bad values, it is still possible that an individual with the desire to save humanity gains power on purpose or accidentally, and that their values aren’t corrupted over time.

Having a well-intentioned human ruler could be really great, if this ruler is competent enough (or has a competent enough AI assistant) to enact these values. However, having just one ruler or ruling class (even with good intentions) by definition reduces pluralism and the competition of opposing ideas[^48]; this means the world may no longer benefit from an intellectual back-and-forth that eventually leads to moral progress, and the ruler may lock-in their suboptimal perception of what is good. This may be particularly bad if you believe that it is very hard to converge on the right values, and therefore want to prevent a value lock-in until we are absolutely sure. Similarly, this situation means there is only a single point of failure; if the ruler makes a wrong decision no one can oppose them, resulting in catastrophic harm (consider Mao’s Great Leap Forward as a historical example) or an existential risk (e.g. a virology experiment gone wrong). The possibility of a catastrophic mistake seems somewhat less likely in the presence of a superintelligent AI advisor, though.

## Comparison

<div class="post-table-wrapper">
<table>
<thead>
<tr><th scope="col" rowspan="2" class="valign-bottom">Ruler Attitude to Humans</th><th scope="col" rowspan="2" class="valign-bottom">Significance</th><th scope="colgroup" colspan="2" class="align-center">Plausibility</th></tr>
<tr><th scope="col">AI takeover</th><th scope="col">Human Takeover</th></tr>
</thead>
<tbody>
<tr><th scope="row" class="cell-green">1. Positive</th><td class="cell-green">Most likely good, though it depends on ruler competence and difficulty of finding the right values</td><td class="cell-blue">Possible, especially if keeping humans around is cheap</td><td class="cell-blue">Possible, though downsides like lack of pluralism might reduce value</td></tr>
<tr><th scope="row" class="cell-orange">2. Indifferent</th><td class="cell-orange">Probably leads to extinction</td><td class="cell-blue">Likely under instrumental convergence</td><td>Unlikely, human would have some opinion on others</td></tr>
<tr><th scope="row" class="cell-red">3. Negative</th><td class="cell-red">Very bad (S-risk)</td><td>Unlikely though possible through alignment near-misses</td><td class="cell-blue">Likely due to selection or corruption</td></tr>
</tbody>
</table>
</div>

The table above summarises the conclusions from the previous sections. Within AI takeover I think the jury is still out on which of the two plausible scenarios are most likely; this depends mostly on whether alignment efforts will succeed. On the human side, I think a mixed scenario (such as a ruler that actively cares about some humans but despises others, or a ruler whose values are moderately aligned with human interests) is most likely, though these aren’t shown in the table for simplicity. Between the black and white scenarios I think the bad-values outcome is slightly more likely because of active selection and corruption effects; the good-values outcome would require more of a happy coincidence.

Comparing between AI takeover and human takeover is difficult because the distribution in outcomes is different: AI outcomes could be either extinction-bad (though the actual badness of this depends on successor civilisations, which will be discussed in the next section) or good, while human outcomes could be worse-than-extinction-bad or good, with a wider spread. When considering this same question Tom Davidson[^49] tentatively concludes that a human takeover may be worse, mostly because humans are more likely to have worse values than an AI system. Another way to weigh these up is to consider downside-focus: if you are much more concerned about suffering, you might prioritise working on AEPC, while if you’re more concerned about a loss of future value through extinction MTO seems like the more urgent threat model.

My (weakly held) conclusion here is that human takeover seems slightly more concerning due to the S-risk possibility and the scenario where even a well-intentioned ruler destroys a lot of value due to incompetence or settling on the wrong values.

# Persistence

Persistence refers to how long a state of affairs lasts. It has to be considered alongside significance when considering the importance of a future event: an event that is very bad but only lasts a short time may be tragic, but not nearly as concerning as a similar event that is also expected to last for a thousand years.

An event that is highly persistent may be described as irreversible, entrenched, or as involving some sort of lock-in[^50]. It is persistence that makes existential risks so worrying, and it is reflected in Bostrom’s canonical definition: “[a risk] where an adverse outcome would either annihilate Earth-originating intelligent life or permanently and drastically curtail its potential”[^51]. Lock-in may not be bad in itself, especially when the state of the world that is locked-in is beneficial; however, if you believe that it is very hard to converge on the right values[^52], it may be really important to delay locking-in the state of the world for as long as possible.

There exists a fair amount of discussion on lock-in of human and AI takeover scenarios elsewhere[^53]; this section will summarise some of the key arguments and compare the potential for lock-in across both scenarios.

## Misaligned Take-Over

The previous section concluded that, conditional on takeover by a misaligned AI system, likely scenarios include human extinction due to AI indifference or AI systems choosing to keep humans around in some form.

Human extinction initially seems as irreversible as it gets: once we’re gone, there’s no coming back. However, there is the possibility of an (AI) successor civilisation that we should consider. Opinions differ on whether a non-human AI society could be morally valuable such that we wouldn’t have to mourn the loss of human civilisation: some claim that only humans are capable of creating value, while others claim that it is a different property that generates value, such as consciousness. Even if AI systems are capable of generating value through something like consciousness, this isn’t guaranteed: humans might be replaced by a powerful but unconscious (or otherwise unvaluable) system, something like a classic paper-clip maximiser, and thus human extinction would entail a catastrophic loss of value.

The scenario where AI systems post-take-over decide to keep some humans around has not been discussed a lot; persistence here depends wholly on what the goals of the AI systems are, but unless their goals and values change it seems unlikely that the AI system will yield control back to humans. And if they are truly superintelligent (and capable of taking power) it seems unlikely that humans will be able to forcefully take back control. As a cheap analogy, consider monkeys - we care enough about them to keep them around, but our power is so entrenched and the intelligence difference so great that they have no chance of regaining control over their fate. The main exception here seems to be humans messing up and going extinct; similarly, AI systems could mess up and accidentally hand us back their power. This may seem implausible considering that these systems would be superintelligent and capable enough to take-over the whole world; however, LLM-based systems are more prone to random errors than theoretical agent-properties arguments might suggest[^54].

## Human Take-Over

It seems likely that a human ruler with bad intentions could use future (AI) technology to entrench their reign, making it persistent. The argument for this is explained by Brian Caplan[^55], who points out that many of the worst totalitarian regimes in history desired both expansion and stability (e.g. Hitler’s “thousand-year Reich”). Caplan argues that the reasons for such totalitarian regimes to have failed to entrench themselves can be summarised in two factors: interference from the outside (including war, economic competition, and the spread of liberal ideas), and the succession problem (finding a new ruler with the same values as the old one, without causing a destabilising power struggle).

The outside-interference problem can be tackled by either eliminating or absorbing non-totalitarian states (perhaps using an economic or military AI-enabled decisive strategic advantage); in the extreme scenario it is already assumed that a single (or very small group of rulers) has established control over the full remainder of humanity. Finnveden[^56] then discusses several ways in which AI could tackle the succession problem, including by enabling ruler immortality, a ruler brain upload, or otherwise encoding the ruler’s values into an extremely stable self-correcting system that ensures the ruler’s legacy essentially persists forever.

If the ruler has good intentions, and is capable of executing them, and is not corrupted by being in power, it might also be possible for them to entrench their power in a positive way. However, the entrenchment process itself might erode some societal virtues: it would plausibly reduce innovation, pluralism, democracy, and a host of other positive but destabilising features. Therefore, I tentatively think that entrenchment is easier in (or might help cause) a world with negative AEPC.

## Comparison

This table shows a summary of the possible persistent scenarios, and what crux each depends on:

<div class="post-table-wrapper">
<table>
<thead>
<tr><td></td><th scope="col">AI Takeover</th><th scope="col">Human Takeover</th></tr>
</thead>
<tbody>
<tr><th scope="row">Ruler cares about humans</th><td>AIs keep some humans around.<br><strong>Requires</strong>: low AI error rates</td><td>Benevolent dictator.<br><strong>Requires</strong>: that lock-in does not destroy the ruler’s positive values</td></tr>
<tr><th scope="row">Ruler is indifferent or negative towards humans</th><td>Human extinction.<br><strong>Requires</strong>: no valuable (AI) successor civilisation</td><td>Stable totalitarianism.<br><strong>Requires</strong>: entrenchment technology</td></tr>
</tbody>
</table>
</div>

In addition, each scenario requires that the ruler does not change their values (value drift).

My view is that the two threat models could both lead to highly persistent outcomes, but AI-caused extinction seems (slightly) more persistent. I do think valuable successor civilisations are possible, but they aren’t guaranteed - moral value (e.g. consciousness) and ability to take over aren’t necessarily correlated. Both human and AI takeover scenarios do seem prone to value drift and to random errors; I think an AI system would probably be more successful at preventing this.

# Moderate AEPC

As mentioned earlier, the most worrying human power concentration-related scenario seems to be the very extreme kind - one that involves both global domination and long-term entrenchment. However, unlike for MTO, it seems possible for a more moderate human power concentration scenario to occur. Such a scenario could be:

1. Transitional: a waystation towards extreme AEPC. For example, an AI-assisted ruler might centralise control over their own country before setting out to conquer the rest of the world.
1. Terminal: power concentration increases, but up to a point - it then stops, without a credible path to disempowerment of the full majority (\~99.99% of the population)

From a cause prioritisation perspective, the transitional moderate AEPC scenarios are really just mechanisms towards extreme AEPC, meaning that it is the final extreme scenarios that determine their importance. Whether the terminal moderate scenarios deserve significant resources is a more difficult question.

Considering the two criteria from the definition, there are three theoretical types of moderate AEPC scenarios:

1. Global hegemony, but no lock-in
1. Lock-in, but no global hegemony
1. Neither global hegemony nor lock-in

Scenario 1 seems quite unlikely: if a global totalitarian regime already has power over all the world’s resources and some very powerful AI technology it should have all the tools at its disposal to entrench its rule (as discussed in the previous section), and so this scenario only seems possible if the regime chooses not to pursue entrenchment. Scenario 2, a non-global stable totalitarian regime, seems unlikely but possible: a regime that is able to entrench itself and ward off challenges from all other countries combined will probably be powerful enough to conquer the rest of the world. The exception would be if its technological advantage is heavily defense-focused, meaning that it cannot be defeated but it also cannot expand. North Korea might be headed in this direction: it has arguably achieved extreme power concentration within its borders, its regime is relatively stable, and its defense-dominant nuclear deterrent prevents outside interference, but it is not strong enough militarily or economically (or it doesn’t have the desire) to expand beyond its borders.

The significance (badness) of a type 2 locked-in non-hegemonic totalitarian state depends on all the same considerations as for the extreme case (especially ruler values), as well as on the percentage of the world’s population that is enclosed within this state. Despite being highly persistent, a North Korea-like limited stable regime would ultimately not compare to any of the more extreme scenarios. This is because, presumably, the rest of the world’s societies will be able to innovate and expand (possibly into space), while the defense-dominant locked-in hermit regime won’t be able to change or expand its borders much. The percentage of the world’s population in this hermit regime will therefore decrease over time, making it relatively less significant.

Perhaps a more worrying kind of moderate AEPC-scenario would be one where an entity would temporarily gain control over a majority of the world’s people and resources, without locking this in (something between type 1 and 3). An example of such a scenario would be a global dictatorship with an inherent time limit, e.g. one established before entrenchment technology like ruler immortality becomes available (so when the ruler dies the regime fractures again). This situation would not be persistent, but even in a short time a ruler could, through the single point of failure, inflict a lot of damage. Such a state could make the world generally more fragile to other existential risks or cause a loss of life and progress that will take some time to restore.

It’s also possible, however, that moderate AEPC could be used for good. Some might argue that some power concentration is necessary to reach good outcomes: it might be that a democratic decision-making process involving all of humanity would not lead to a future that cares about e.g. nonhuman animals or sentient digital systems. If you think these beings represent a lot of value then ensuring some entity that cares about them gains power at a crucial moment (e.g. when the character of superintelligent AI is decided) might be really important.

Moderate (terminal) AEPC could be good or bad, but as it lacks the totality and/or persistence of extreme AEPC it does not seem comparably urgent to preventing MTO. Whether it should affect the prioritisation between *extreme* AEPC and MTO depends on whether you expect *moderate* AEPC to be good or bad (expected negative moderate AEPC is an additional reason to work on preventing AEPC more generally, as many of the mechanisms are shared between moderate and extreme scenarios).

# Likelihood

In the previous sections I considered arguments for how bad AEPC and MTO would be. However, these scenarios need to be somewhat likely to warrant prioritising working on them; this section will consider evidence from forecasts and arguments for which threat model seems more likely to occur first. The two (extreme) threat models are considered to be mutually exclusive: extreme human power concentration would pre-empt an AI takeover and vice versa. An exception would be if a human ruler takes over and then hands off (voluntarily) to an AI ruler; since the intermediate steps up to human take-over would be shared with other AEPC scenarios this would count as human power concentration. If the hand-over is coerced, this would be more similar to MTO.

## Forecasts

For a base rate estimate of AEPC, the 2026 V-Dem report[^57] suggests that about 74% of the world’s population lives in an autocracy, and this number is increasing even without major AI involvement. However, this is still quite different from the kind of extreme AEPC discussed here.

The following table shows some relevant questions from the Grace et al. (2025) AI experts survey[^58]:

<div class="post-table-wrapper">
<table>
<thead>
<tr><th scope="col">Question</th><th scope="col">Concerned %</th><th scope="col">Type</th></tr>
</thead>
<tbody>
<tr class="cell-blue-mid"><td>1. Authoritarian rulers use AI to control their population</td><td>66%</td><td>Moderate AEPC</td></tr>
<tr class="cell-blue-mid"><td>2. AI systems worsening economic inequality by disproportionately benefiting certain individuals</td><td>65%</td><td>Moderate AEPC</td></tr>
<tr class="cell-blue-strong"><td>3. Near-full automation of labor leaves most people economically powerless</td><td>43%</td><td>Extreme AEPC</td></tr>
<tr class="cell-pink"><td>4. A powerful AI systems has its goals not set right, causing a catastrophe (e.g. it develops and uses powerful weapons)</td><td>42%</td><td>MTO</td></tr>
<tr class="cell-pink"><td>5. AI systems with the wrong goals become very powerful and reduce the role of humans in making decisions</td><td>43%</td><td>MTO</td></tr>
</tbody>
</table>
</div>

Questions 1 and 2 are arguably more about moderate AEPC scenarios, and have high concern percentages around 65%. Question 3 may be interpreted as being about extreme AEPC[^59], and has a nearly identical concern percentage as MTO questions 4 and 5. This draws a rough picture of moderate AEPC being quite likely (or at least concerning), and extreme AEPC being roughly as concerning as MTO.

Measures of concern probably track something like expected value, taking into account both likelihood and expected badness. For this reason probability forecasts may be more useful; the following table shows a selection of these from a variety of sources:

<div class="post-table-wrapper">
<table>
<thead>
<tr><th scope="col">Question</th><th scope="col">Probability</th><th scope="col">Type</th><th scope="col">Year[^60]</th><th scope="col">Source</th></tr>
</thead>
<tbody>
<tr class="cell-blue-mid"><td>1. Will the United States become a dictatorship by 2100?</td><td>29%</td><td>Moderate AEPC</td><td>2026</td><td>Metaculus[^61]</td></tr>
<tr class="cell-blue-strong"><td>2. [What is] the possibility that a world totalitarian government will emerge during the next one thousand years and last for a thousand years or more?</td><td>5%</td><td>Extreme AEPC</td><td>2008</td><td>Caplan[^62]</td></tr>
<tr class="cell-blue-strong"><td>3. [What is] the risk [of stable global totalitarianism] over roughly the next century?</td><td>0.3%</td><td>Extreme AEPC</td><td>2024</td><td>Clare (80k Hours)[^63]</td></tr>
<tr class="cell-blue-strong"><td>4. Will one government govern 80% of Earth's population and economy by 2100?</td><td>10%</td><td>(Almost) Extreme AEPC</td><td>2026</td><td>Metaculus[^64]</td></tr>
<tr><td rowspan="2">5. Which of Scott Aaronson's five AI worlds will first come to pass before 2050?<br>(AEPC = AI-Dystopia, MTO = Paperclipalypse)</td><td class="cell-blue-strong">a. 25%</td><td class="cell-blue-strong">Extreme AEPC</td><td rowspan="2">2026</td><td rowspan="2">Metaculus[^65]</td></tr>
<tr><td class="cell-pink">b. 11.3%</td><td class="cell-pink">MTO</td></tr>
<tr class="cell-pink"><td>6. What probability do you put on human inability to control future advanced AI systems causing human extinction or similarly permanent and severe disempowerment of the human species?</td><td>10%</td><td>MTO</td><td>2022</td><td>Grace et al. (2025)</td></tr>
<tr class="cell-pink"><td>7. What’s your probability of misaligned AI takeover by 2100, barring pre-APS-AI catastrophe?</td><td>25%</td><td>MTO</td><td>2022</td><td>Samotsvety[^66]</td></tr>
<tr class="cell-pink"><td>8. Probability of an AI takeover</td><td>22%</td><td>MTO</td><td>2023</td><td>Christiano[^67]</td></tr>
<tr class="cell-pink"><td>9. All six of Carlsmith’s premises are correct, by 2070</td><td>10%</td><td>MTO</td><td>2021</td><td>Carlsmith[^68]</td></tr>
<tr class="cell-pink"><td>10. All six of Carlsmith’s premises are correct, by 2070 (Superforecasters)</td><td>1%</td><td>MTO</td><td>2023</td><td>GJP[^69]</td></tr>
</tbody>
</table>
</div>

Since these questions all ask slightly different things, comparing between the threat models isn’t straightforward. Question 5 is the most informative, as it actually asks respondents to choose between different mutually exclusive scenarios; here the AEPC-like outcome has a significantly higher probability than the MTO-like outcome. Questions 3 and 6 might seem like they are comparable (suggesting that MTO is \~30x more likely than extreme AEPC), but question 3 is just a single author’s estimate and question 6 does not specify a time period. Otherwise, the AEPC probabilities have significant spread, and the MTO probabilities tend to be older or statements by individuals (rather than crowd-sourced estimates). One reason why there aren’t that many good estimates is that many forecasting questions ask about existential risks from AI in general, rather than specifying threat models.

Another source of forecasts for (economic) AEPC comes from the Forecasting Research Institute[^70]:

<div class="post-table-wrapper">
<table>
<thead>
<tr><td></td><td></td><th scope="colgroup" colspan="3">Median AI expert forecast by 2040 or 2050</th></tr>
<tr><th scope="col">Metric</th><th scope="col">Current (2025) value</th><th scope="col">Unconditional</th><th scope="col">Slow AI progress</th><th scope="col">Rapid AI progress</th></tr>
</thead>
<tbody>
<tr><th scope="row">Labour Force Participation Rate[^71]</th><td>62.6%</td><td>60%</td><td>75%</td><td>54%</td></tr>
<tr><th scope="row">Wealth owned by top 10% richest[^72]</th><td>71.2%</td><td>75%</td><td>72.9%</td><td>80%</td></tr>
<tr><th scope="row">Number of the 10 largest economies in 2025 with a Democracy Index &lt; 4[^73]</th><td>2</td><td>2.1</td><td>2</td><td>3</td></tr>
</tbody>
</table>
</div>

All the questions in this table show that experts expect moderate but no extreme economic power concentration by 2040 or 2050, and that more power concentration is expected if AI is developed more rapidly. The first question predicts a moderate decrease in the labour force participation rate; in a majority-disempowered scenario we might expect this number to be much lower, perhaps in the single digits[^74]. Similarly, the second question forecasts a moderate increase in national wealth owned by the 10% richest; we might expect this to reach 100% in the extreme scenario. Finally, the third question forecasts a maximum of one additional country (of the 10 largest economies) to become classified as authoritarian.

All in all these forecasting estimates are of limited use; they indicate clearly that experts and other forecasters think both AEPC and MTO are significant concerns, though it is hard to conclude which one seems more likely from this data. The most directly comparable forecast is question 5 from the first table, which suggests that extreme AEPC is \~2x more likely than MTO before 2050. However, the FRI forecasts of economic indicators suggest that experts do not foresee economic indicators to reflect moderate or extreme power concentration in the same timeframe.

## Arguments

The fact that many of the forecasts found are relatively old (pre-2024) shows that much of the concern around these two threat models is based on arguments. The next sections will discuss a few of these cruxes.

### Alignment

Whether and how alignment research succeeds seems like one of the most important cruxes for which threat model we should expect to play out first. This is because most of the mechanisms for AEPC require an actor to control a very powerful AI system[^75], and use it to expand and entrench their power; this can only happen if it is even possible to get an AI system to be singularly loyal.

#### What kind of alignment?

The kind of alignment (what/whose goals and values should the AI system follow?) matters a lot for power concentration concerns, as illustrated in the following diagram:

<img src="/blog/extreme-power-concentration/alignment-spectrum.jpg" width="2048" height="776" alt="Who or what will AI systems be aligned to? A spectrum running from value-aligned (AEPC less likely) to corrigible or obedient (AEPC more likely): God-like superintelligence aligned to “the ultimate good”; coherent extrapolated volition (of all humanity); aligned to law; aligned to a specification of human values, e.g. a constitution; loyal to a heterogeneous group, e.g. a multinational coalition; loyal to a group, e.g. a company or government; overtly loyal to one person; secretly loyal to one person.">

As argued elsewhere[^76], corrigible AI systems[^77] may pose a particular AEPC risk. The advantage of corrigibility is that we don’t have to immediately get the AI’s values right - these can be changed later upon further moral reflection. Solutions on the left side of the diagram above could be quite catastrophic if the chosen values are imperfect, e.g. we probably don’t want all future systems to be aligned to an AI constitution drawn up today. However, corrigible systems allow for a system’s goals to be changed to favour one or a few actors: whoever has access to this goal-changing capability will be in a position to concentrate power. This also means that corrigible AI systems may be less AEPC-enabling if they are corrigible to a larger group of people, which is why the single-person-loyalty scenarios are on the far right of the diagram above.

Today’s alignment agenda may be pushing us right (and thus towards AEPC) on the diagram above[^78]. Recent empirical work has shown that secret loyalties, the worst alignment scenario for AEPC concerns, may be theoretically possible[^79]. AI companies also face incentives to create AI systems that they can control, rather than systems that follow some sort of universal moral code: value-alignment might prevent AI companies from using their systems in ways that would maximise their profits, if this contradicts these values. Claude’s[^80] constitution, while value-based in theory, contains many corrigible elements[^81] and Anthropic’s mission and guidelines feature prominently in the text. Corrigible alignment may also be easier to achieve than true value-alignment, or might be less risky. Finally, pressures from AI safety tend to push in the corrigible direction (including governance interventions such as kill switch proposals); this is especially the case when advocates are sufficiently concerned about MTO risks to prefer straightforward corrigible alignment solutions or power-concentrating governance solutions like government-mandated kill switch capabilities[^82].

#### How likely is alignment?

The kind of AI alignment we are heading towards doesn’t matter, however, if all of these alignment approaches turn out to be too difficult to achieve on time (before AI systems reach a certain milestone, e.g. the ability to recursively self-improve). This is roughly the opinion held by the Machine Intelligence Research Institute (MIRI) since their most recent strategic pivot in 2024[^83]. Their view is that alignment science has made far too little progress since its inception (and according to some[^84], has only made risks worse); instead of focusing on doing more technical alignment research, they now advocate for policy interventions and communications, with a particular emphasis on promoting an “international agreement to halt progress toward smarter-than-human AI, until humanity’s state of knowledge and justified confidence about its understanding of relevant phenomena has drastically changed”.

MIRI’s position is far from the only one. Opinions on the difficulty of AI alignment range from “alignment by default” to “alignment is theoretically impossible”, with lots of steps in between[^85]. A 2026 survey of AI safety leaders[^86] mentions “how well is alignment going” as an area of active debate, showing that experts are very divided on this question. The Grace et al. survey[^87] included a question on participants’ opinion on the difficulty of solving Stuart Russel’s formulation of the alignment problem (which is more corrigible than values-based), compared to other problems in AI safety:

<img src="/blog/extreme-power-concentration/alignment-difficulty.png" width="1046" height="1075" class="post-figure-narrow" alt="Difficulty: survey responses in 2016, 2022 and 2023. Much harder: 10%, 26%, 21%. Harder: 23%, 31%, 36%. As hard: 42%, 29%, 30%. Easier: 19%, 9%, 10%. Much easier: 7%, 5%, 3%.">

This graph also shows a shift in opinion on difficulty over time from predecessor surveys. The 2016 survey shows that the median researcher considered about as difficult as other problems in AI safety (with difficult problems presumably including preventing AEPC); in 2022 this shifted upwards to being considered more difficult; and in 2023 opinions cooled down a bit again (but with the median researcher still believing alignment is harder than other problems).

The difficulty of the alignment problem is inherently hard to assess. This is because the concern of relevance here is alignment of future, more powerful systems; this may only correlate weakly with the alignment of today’s AI systems. Then, AI systems may be deceptive - we may think systems are behaving fine, but they might be faking it[^88] only to strike when their capabilities are high enough. Finally, there are incentives and sociological forces that make survey results such as those above unreliable. AI developers and those who stand to profit from it are incentivised to downplay safety concerns; meanwhile, believing that alignment is a large problem is almost a requirement for acceptance into the AI safety community, such that people may exaggerate their concerns for social acceptance.

For all these reasons I struggle to draw a definitive conclusion here; the median position, taken from the Grace et al. graph above, is that alignment is somewhat harder than other problems in AI safety (including preventing AEPC). This suggests that preventing MTO should have slightly higher priority, though as per MIRI’s official pivot this should likely be by prioritising AI governance and advocacy efforts.

As new evidence comes in, we should update towards being more concerned about MTO if alignment is not going well, and AEPC if it is; particularly if the kind of alignment that is being pursued is on the (corrigible) right side of the spectrum above. However, the high uncertainty here should itself give us pause, especially since the answer to this question is so important for prioritising safety efforts.

### Speed of AI progress

Another factor that probably affects whether (extreme) AEPC or MTO is more likely is the speed of AI development. The economic effects table in the forecasting section above shows that experts expect AI’s (economic) power-concentrating effects to be more dramatic if AI capabilities progress more quickly. MTO risk also seems higher if AI capabilities progress quickly, because fast AI progress might mean that alignment research cannot keep up with AI capabilities. AI assistance would help speed up alignment research, but if alignment research is more bottlenecked (e.g. because it’s inherently more difficult, or because it needs human input or verification) this would mean new AI systems are increasingly less aligned. Fast progress also means less time for governance interventions: new policy takes a long time to be enacted[^89], and might only be feasible after a credible warning shot.

AEPC scenarios seem more likely in a scenario with slower AI progress. Human takeover will (at least initially) be limited by human cognitive speed, putting an upper bound on how quickly it can develop; MTO has no such upper bound. Very slow AI progress also seems unlikely to lead to extreme AEPC, though, as a decisive strategic advantage gained through a controlled intelligence explosion seems necessary (or at least the most straightforward path) to achieve global dominance[^90].

My guess is that the speed of AI progress today is on the cusp of being too fast for alignment research to keep up. AI companies including Anthropic and OpenAI have started not releasing frontier models to the public to spend more time on building safeguards; however, this response may itself worsen AEPC concerns, as these companies now have much longer exclusive access to frontier models. It has, in practice, also meant that middle powers have been more cut off from these capabilities[^91] - this might itself be a form of power concentration.

### Agentic Capabilities

When discussing which AI capabilities are most concerning for the MTO threat model, Carlsmith refers to “advanced, planning, strategically aware” (APS) systems: systems that outperform humans on most tasks, independently create and execute plans in pursuit of objectives, and have accurate internal models of the world. These last two capabilities in particular may be summarised as “agency”: agentic AI systems are not mere helpful assistants, but rather independent participants in world systems.

If AI systems remain “tool-like”, or helpful assistants to a principal, AEPC-related concerns seem much more concerning: whoever becomes the principal of the most powerful AI system now has the most power, and independent power-seeking tendencies seem implausible. Early LLM chatbots seemed firmly on the tool-like side of this debate, however agentic capabilities have been developing rapidly (e.g. coding agents). As several people[^92] predicted, agentic capabilities are very useful, and hence there are strong economic incentives to produce systems that are more than just tools. I therefore think that this capability point makes MTO slightly more likely.

To summarise: several cruxes determine whether AEPC or MTO is more likely, including whether and how superintelligent AI systems will be aligned; the speed of AI progress; and the level of agency (vs a tool-like paradigm). It seems that we are heading towards corrigible alignment, which increases AEPC concerns; however, we might not succeed at any kind of alignment, which cancels out this point. Systems are also becoming increasingly agentic and goal-driven, suggesting further MTO concern. I think the most important crux here is the difficulty of alignment, as it can completely flip the conclusion; when considering the limited data we have on this (the 2023 median AI researcher considering alignment harder than other problems in AI) I would conclude that MTO is slightly more likely. That said, I think the AEPC-risk from corrigible AI is underappreciated (see Neglectedness below).

# Tractability

AEPC tractability is quite unclear.

Whether working on solving a problem is tractable (easy to make progress on) is an important factor in cause prioritisation: when thinking on the margin, it makes more sense to invest resources into tractable solutions. However, tractability is often highly uncertain, especially when thinking about future events: unlike with e.g. global health interventions, it isn’t always possible to try interventions and measure the effect size. This section will discuss some considerations for the tractability of working on mitigating both risks.

## AI-Enabled Power Concentration

Since concern for AI-specific power concentration is relatively new, it is hard to make statements about the tractability of working on AEPC - much of it is just not known yet, and will require scoping work to identify promising research directions and interventions. However, this scoping work is clearly possible[^93]. Additionally, the two RFPs mentioned in the introduction[^94] show that funders believe tractable interventions exist; both RFPs are themselves also scoping exercises, laying out several promising research directions.

Thinking about non-AI-specific power concentration is not new at all, with several academic fields and entire political factions dedicated to it. This could point either way for tractability: on the one hand, we know a lot about effective solutions to prevent excessive power concentration (e.g. the separation of powers in government, or antitrust laws to prevent monopolies). On the other hand, (moderate) power concentration still exists in the world, despite these solutions - the figure cited earlier that 74% (and increasing) of the world’s population living in an autocracy suggests that implementation and maintenance of these solutions is quite difficult.

AEPC can learn some lessons from non-AI-specific power concentration, but only to some extent - taking transformative AI seriously means considering how today’s power-distributing systems might need to adapt to a radically different future. For example, large parts of the government or civil service may become automated, removing civil servant disobedience as a check on power - oversight mechanisms will have to adapt to this[^95]. It is not yet clear how tractable developing and implementing these new governance systems is. The tractability of the implementation, specifically, hinges on whether new governance systems result in those in power losing some power - making incentive-incompatible power-distributing interventions more difficult. On the other hand, current rulers are incentivised to prevent anyone else from concentrating their power - governments do not want AI companies to replace them.

## Misaligned Take-Over

MTO interventions are much better scoped than those for preventing AEPC risks. Work to prevent an MTO scenario can be divided into roughly two areas: technical alignment work[^96], and AI governance research and advocacy. MTO interventions are usually more incentive-compatible with those who already hold power, making it easier to implement them: current rulers don’t want to lose their power to rogue AI systems, so it is in their interest to collaborate on safety. One point of nuance here is the safety tax: if safety interventions are very costly it may slow down development, which could be detrimental in an arms race scenario and reduces incentive-compatibility (but this can be solved by coordination, e.g. a global pause or slowdown).

### Alignment

The difficulty of technical alignment work has already been discussed in some detail in the Likelihood section, which showed that alignment is considered “as hard” or “harder” than other problems in AI safety by a majority of experts; however, the spread of opinions on this topic is wide, from easy to nearly impossible. Revealed preferences show that philanthropic funders like Coefficient Giving think technical (alignment) research is tractable enough to receive several hundred million dollars in funding[^97]; additionally, most frontier AI safety labs have teams working on technical alignment.

The Likelihood section already discussed how the difficulty of alignment affects which threat model is most likely to occur first. The difficulty of alignment also factors into the tractability component of cause prioritisation, though in the opposite direction: if technical alignment is very difficult, this might be a reason for a marginal person to work on something else. In a standard cause prioritisation exercise, low tractability would suggest it’s better to work on an entirely different cause - but because the difficulty of alignment is also a component of likelihood, these two factors essentially cancel out (low tractability of alignment research means higher likelihood for MTO and vice versa). Therefore, it seems more appropriate to let the difficulty of alignment determine the distribution of resources *within* the cause of preventing MTO - that is, between technical alignment research and governance.

### Governance

One way to gauge the tractability of AI governance is to look at the track record of past efforts. Some notable victories include the passing of the EU AI Act and its general purpose AI provisions; the passing of US state-level AI safety legislation such as SB 53 in California; and the successful lobbying campaign to prevent a US federal ban on state-level AI legislation[^98]. On the other hand, there have been plenty of unsuccessful governance projects: failed bills like California’s SB 1047, or the lack of any form of international collaboration framework, despite an entire AI summit series[^99].

The tractability of governance interventions is capped by the ‘overton window’ of legislators. But, as AI capabilities are rising rapidly and legislators and the general public become increasingly aware of safety issues (catalysed by warning shots like the recent OpenAI Hugging Face incident), it seems that AI governance might soon become quite tractable. Therefore, anticipating this by pre-emptively working on governance projects seems quite useful.

## Comparison

One main difference between the tractability of working on the two threat models is that interventions for preventing AEPC risks skew more political or institutional, while those for preventing MTO include more technical projects. This isn’t entirely true: AEPC interventions include other research agendas like secret loyalties[^100], situation monitoring, and fieldbuilding, and the tractability of these projects is probably quite similar to equivalent technical, monitoring, and fieldbuilding efforts to prevent MTO risks. The technical projects to prevent MTO are more scientifically novel (and therefore difficult), as we have never before had to do something similar to AI alignment. The institutional work to prevent AEPC (and also MTO governance) isn’t new - we’ve figured out how to regulate new technologies before, and we also have pretty mature thinking on how to prevent concentration of power; here the difficulty lies in implementation, rather than innovation.

The difficulty of implementation is largely determined by incentives. Overall, my guess is that efforts to prevent MTO are more incentive-compatible with current rulers than those to prevent AEPC: this is because current rulers may (though aren’t guaranteed to) be the ones in power in an AEPC scenario, while this definitely won’t be the case for MTO.

The following table summarises the arguments from this section:

<div class="post-table-wrapper">
<table>
<thead>
<tr><th scope="col">Component</th><th scope="col">AEPC</th><th scope="col">MTO</th><th scope="col">Verdict[^101]</th></tr>
</thead>
<tbody>
<tr><th scope="row">Are there historical analogies for inspiration?</th><td>Yes for general power concentration (checks and balances, antitrust), less so for AEPC</td><td>No for the core alignment problem; yes for governing new technologies</td><td>AEPC</td></tr>
<tr><th scope="row">Are the solutions well-scoped?</th><td>No: AI-specific power concentration is pretty new</td><td>Yes: alignment, control, and governance, with ~mature research agendas for each</td><td>MTO (but temporarily)</td></tr>
<tr><th scope="row">Is it easy to implement solutions?</th><td>No: solutions are often not incentive-compatible with those currently in power</td><td>Moderate: solutions are incentive-compatible but require coordination to overcome arms races</td><td>MTO</td></tr>
</tbody>
</table>
</div>

Looking at this table there is a tension between AEPC solutions that have a better historical track record and MTO solutions that are more incentive-compatible. My guess is that MTO solutions are slightly more tractable, particularly now that MTO-focused governance is increasingly in the public attention (triggered by the Hugging Face and other AI cyber incidents).

### A Note on Governance

Many AI governance interventions that are primarily focused on preventing MTO risks are cross-cutting, meaning they might help prevent both threat models. Examples of cross-cutting governance interventions include slowing down or pausing AI development, public communications about AI risks, and general safety frameworks that address a wide range of AI risks. However, as already mentioned, there are governance interventions with real trade-offs (like centralising AI development to prevent MTO safety corner-cutting); it might only take a small amendment to change a cross-cutting intervention into one with real trade-offs. For example, any legislation that forces AI companies to e.g. adopt safety guardrails could turn into a power concentration concern if it is written in such a way that it provides the government with the ability to arbitrarily commandeer AI companies. For this reason, the argument that “we’ll just work on governance and fix both” is more fragile than it might initially seem; care should be taken that governance interventions don’t accidentally worsen AEPC risks, especially if they are written in high-pressure situations, e.g. after a warning shot or public outcry.

# Neglectedness

As mentioned in the introduction, the AEPC threat model has historically received much less attention than MTO. Unlike scale or tractability, this neglectedness can be measured by counting how many people are working on projects related to each threat model. The following table shows an analysis on this question by Claude[^102]:

<div class="post-table-wrapper">
<table>
<caption>Snapshot of August 2026; full data, sources and counting rules in the appendix spreadsheet[^103]. Ranges reflect counting choices, not confidence intervals. AEPC headcount is likely to rise as the 2026 RFPs (Longview; EIP/CIP) deploy funding.</caption>
<thead>
<tr><td></td><th scope="col">AEPC</th><th scope="col">MTO</th><th scope="col">Ratio (MTO:AEPC)</th></tr>
</thead>
<tbody>
<tr><th scope="row">People (FTE), excl. lab safety teams</th><td>~25 (15–45)</td><td>~490 (310–800)</td><td>~20:1</td></tr>
<tr><th scope="row">People (FTE), incl. lab safety teams</th><td>~25 (15–45)</td><td>~790 (480–1,360)</td><td>~30:1</td></tr>
<tr><th scope="row">People, crediting AEPC a share of cross-cutting governance</th><td>~60</td><td>~570</td><td>~9:1</td></tr>
<tr><th scope="row">People, strictest counting on both sides</th><td>~20</td><td>~370</td><td>~17:1</td></tr>
</tbody>
</table>
</div>

A similar funding imbalance seems likely. One issue with this approach is that all the people working on non-AI-specific power concentration aren’t included; but as discussed in the Tractability section, AI-enabled power concentration is sufficiently different that this existing work is only partially relevant.

Others have also mentioned this large difference in the number of people working on mitigating both threats. The 80,000 Hours problem profile mentions “a few dozen people at a handful of organisations working on this [AEPC risks]”; the Longview RFP mentions that the area is “nascent”. Alfie Lamerton provides the following table[^104] outlining which areas seem most neglected:

<div class="post-table-wrapper">
<table class="th-center v-middle">
<colgroup><col style="width:16%"><col style="width:15%"><col style="width:26%"><col style="width:33%"><col style="width:10%"></colgroup>
<thead>
<tr><th scope="col">Threat Models</th><th scope="col">Pathways</th><th scope="col">Mechanisms</th><th scope="col">Intervention areas</th><th scope="col">Neglect&shy;edness</th></tr>
</thead>
<tbody>
<tr><th scope="rowgroup">AI Takeover leading to human extinction or long-term disempowerment</th><th scope="row">Loss of control to misaligned power-seeking AI</th><td><ul><li>Instrumentally convergent goals</li><li>Scheming, alignment faking</li><li>Recursive self-improvement</li></ul></td><td><ul><li>Model safety evaluations</li><li>Control protocols</li><li>Interpretability</li></ul></td><td class="neglect-low">Low</td></tr>
</tbody>
<tbody>
<tr><th scope="rowgroup" rowspan="3">AI-enabled stable authoritarianism or totalitarianism</th><th scope="row">AI-enabled coups</th><td><ul><li>Secret loyalties</li><li>Overt loyalties</li><li>Enhanced Surveillance</li><li>Alignment to bad values</li></ul></td><td><ul><li>Secret loyalty audits</li><li>Preventing data poisoning attacks</li><li>Anti-surveillance regulation</li><li>Model training pipeline security</li><li>Explainable-by-Design, Privacy-by-Default</li><li>External watchdog/evaluations of political regimes and their risk of totalitarian turn, especially US and China</li></ul></td><td class="neglect-high">High</td></tr>
<tr><th scope="row">Singleton state resulting from a great power conflict</th><td><ul><li>Geopolitical coordination failures</li><li>AI-enabled states</li><li>Lethal Autonomous Weapons systems</li><li>Nuclear Weapons</li></ul></td><td><ul><li>Human-in-the-loop</li><li>Cooperative AI</li><li>CBRN guardrails</li><li>AI-enabled nuclear and biological weapons safety</li></ul></td><td class="neglect-med">Med</td></tr>
<tr><th scope="row">Democratic Erosion and Backsliding</th><td><ul><li>Market effects on information exchange systems</li><li>Anti-rational ideological capture</li><li>Epistemic Black holes</li><li>Mis- and disinformation</li></ul></td><td><ul><li>Prosocial recommender system interventions</li><li>Prosocial language model design</li><li>Preserving epistemic commons online</li><li>Mechanisms for democracy enabled by AI</li><li>Technical Methods for Enabling Criticism?</li></ul></td><td class="neglect-med">Med</td></tr>
</tbody>
<tbody>
<tr><th scope="rowgroup" rowspan="3">Long-term AI-driven power concentration</th><th scope="row">Oligopolisation of AI companies</th><td><ul><li>Economic power transition from individuals to companies via automation</li></ul></td><td><ul><li>The Windfall Clause/Trust</li><li>The Intelligence Curse/Workshop Labs</li></ul></td><td class="neglect-med">Med</td></tr>
<tr><th scope="row">Politicisation of AI companies</th><td><ul><li>Influence of AI company executives on political decision making</li></ul></td><td><ul><li>Mechanisms for democracy enabled by AI</li><li>Democratic organisation design</li><li>Society-level AI decision making</li><li>Anti-AI-politicisation regulation</li></ul></td><td class="neglect-high">High</td></tr>
<tr><th scope="row">Gradual disempowerment</th><td><ul><li>Reliance on autonomous AI systems in complex human systems</li></ul></td><td><ul><li>Reporting requirements for the transition of human to AI influence</li><li>Understanding the influence of the propensities of agents in human systems</li></ul></td><td class="neglect-high">High</td></tr>
</tbody>
</table>
</div>

One complication with this approach is that many of these interventions might be neglected because they are not very tractable to work on compared to MTO-related interventions. However, the table above shows a number of interventions that seem well-scoped enough to not be drastically less tractable than MTO-related interventions. It also seems that historical reasons outlined in the Background section might have played a role in determining the current distribution of resources, which therefore doesn’t entirely reflect rational considerations.

Neglectedness therefore seems reasonably straightforward and in favour of more marginal resources dedicated towards mitigating AEPC risks.

# Conclusion

<div class="post-table-wrapper">
<table>
<thead>
<tr><th scope="col">Criterion</th><th scope="col">Cruxes</th><th scope="col">Verdict <span class="th-aside">(which risk to prioritise)</span></th><th scope="col">Ratio (AEPC:MTO)</th><th scope="col">Claude’s Ratio[^105]</th></tr>
</thead>
<tbody>
<tr><th scope="row">Significance</th><td>Ruler attitude towards humans, downside-focus</td><td>Human takeover is more likely to lead to an outcome worse than extinction, and even a well–intentioned human ruler might fail to create a good outcome → <strong>AEPC</strong></td><td>1.5</td><td>1.2</td></tr>
<tr><th scope="row">Persistence</th><td>Value and likelihood of a successor civilisation; feasibility of lock-in</td><td>I think a successor civilisation is possible, but would like humans to stick around. I think AIs would be better at preventing value drift → <strong>MTO</strong></td><td>0.7</td><td>0.7</td></tr>
<tr><th scope="row">Likelihood (forecasts)</th><td>Which forecast is most representative</td><td>Q5 (the only directly comparable question) predicts a 2.3x probability for AEPC; other questions contradict this, so adjusted downwards by 30% → <strong>AEPC</strong></td><td>1.6</td><td>0.3</td></tr>
<tr><th scope="row">Likelihood (arguments)</th><td>Type of alignment, difficulty of alignment, speed of AI progress, agentic capabilities</td><td>Current alignment agendas seem to favour power concentration, but alignment might not succeed at all → <strong>MTO</strong>, barely</td><td>0.9</td><td>0.5</td></tr>
<tr><th scope="row">Tractability</th><td>Which is more incentive-compatible</td><td>MTO-focused governance is becoming more plausible, and is more incentive-compatible than preventing AEPC → <strong>MTO</strong></td><td>0.7</td><td>0.8</td></tr>
<tr><th scope="row">Neglectedness</th><td>How to count non-AI power concentration efforts</td><td>A lot more people are working on MTO, and I think the people working on non-AI power concentration only count partially → <strong>AEPC</strong></td><td>9</td><td>6</td></tr>
</tbody>
</table>
</div>

The table above shows a summary of the key cruxes for each section. Overall the picture is very mixed, with three rows favouring MTO and three favouring AEPC; but because these factors are multiplicative, one row could outweigh all the others. Based on the conclusions from the subsections I’ve come up with ratio values (1 is even; a higher ratio means AEPC should be prioritised more). I also asked Claude Opus 5 to come up with values independent of mine. Claude mostly agreed with my judgement, except on the forecasting likelihood: there it suggested to put less weight on the Scott Aaronson question (Q5), and more weight on Stephen Clare’s low 0.3% probability of stable totalitarianism (Q3).

To not double count the two likelihood rows I took the geometric mean of the ratios for the forecast and argument value, yielding a mean ratio of 1.2 and 0.4 for Claude. Then, multiplying all the ratios together yields a final marginal prioritisation ratio of 7.9x for my values and 1.6x for Claude’s; both of these favour more marginal resources to be invested into preventing AEPC.

The neglectedness value drives most of this result; if both threat models had equal resources me and Claude would favour more marginal people working on MTO (ratios of 0.9x and 0.27x). Neglectedness is the only value that is very far from even in this table, but other people could reasonably have strong views on one of the other cruxes, possibly outweighing the neglectedness concern.

These values that Claude and I estimated are extremely uncertain; my main goal was to provide a cause prioritisation framework and spell out the arguments on either side, and I hope that others will be able to iterate on this to come up with a more definitive answer to this prioritisation question.

---

*This article is the output of Hugo Bos' Pivotal Summer 2026 Fellowship project, mentored by Alfie Lamerton (Formation Research). The analysis, estimates and conclusions are Hugo's own. Formation Research supported the project and broadly endorses its framing and contribution, but not every view expressed here is necessarily held by Formation Research or its staff.*

[^1]: <https://80000hours.org/problem-profiles/extreme-power-concentration/>

[^2]: <https://www.longview.org/request-for-proposals-on-extreme-power-concentration/>

[^3]: <https://checks-and-balances.ai/index.html>

[^4]: <https://openai.com/index/introducing-ai-futures/>

[^5]: <https://forum.effectivealtruism.org/posts/LxuKuQd69Qx5FKhNZ/survey-of-ai-safety-leaders-on-x-risk-agi-timelines-and>

[^6]: <https://www.tobyord.com/writing/broad-timelines>

[^7]: <https://forum.effectivealtruism.org/posts/wTXAbzbkAxZrLv5Cg/why-are-longtermists-so-much-less-focused-on-human>

[^8]: Or political preference - power concentration-related concerns fit in more easily with leftwing concerns around (power) inequality

[^9]: Tom Davidson’s post on human vs. AI takeover is an exception, though it doesn’t do a full prioritisation: <https://www.forethought.org/research/human-takeover-might-be-worse-than-ai-takeover>

[^10]: The 80,000 Hours problem profiles on both extreme power concentration: <https://80000hours.org/problem-profiles/extreme-power-concentration/> and power-seeking AI systems: <https://80000hours.org/problem-profiles/risks-from-power-seeking-ai/> do contain arguments for and against working on both areas, but do not provide a full comparison. 80,000 hours also provides a ranking of these two issues, but as of August 2026 I am not aware of any public write-up for how they chose the order (power-seeking AI first, extreme power concentration second)

[^11]: See e.g. <https://www.jstor.org/stable/3101118>, <https://www.jstor.org/stable/20024652?seq=8>

[^12]: <https://nickbostrom.com/papers/existential-risks/>

[^13]: This is actually the namesake of the Butlerian Jihad, an imaginary war between humanity and tyrannical thinking machines in Frank Herbert’s Dune novels. In Herbert’s universe the humans win, but proceed to establish an interstellar totalitarian feudal regime that lasts 10,000 years…

[^14]: <https://turingarchive.kings.cam.ac.uk/publications-lectures-and-talks-amtb/amt-b-4>

[^15]: <https://www.science.org/doi/10.1126/science.131.3410.1355>

[^16]: <https://www.lesswrong.com/posts/ZxWzCGKzX84S7DBZ9/when-was-the-term-ai-alignment-coined>

[^17]: See the Neglectedness section below for some quantitative estimates on this mismatch

[^18]: from <https://substack.com/home/post/p-204284328>. See also <https://larathurnherr.substack.com/p/measuring-concentrations-of-power> for a more extensive discussion of what power means in this context

[^19]: See <https://www.formationresearch.com/power-concentration-survey.pdf>, <https://substack.com/home/post/p-204284328>, <https://80000hours.org/problem-profiles/extreme-power-concentration/>, and <https://forum.effectivealtruism.org/posts/tnkEoTxdGCsBFRQty/sense-making-about-extreme-power-concentration>

[^20]: See <https://lukedrago.substack.com/p/the-intelligence-curse-an-essay-series>, <https://philiptrammell.substack.com/p/capital-in-the-22nd-century>

[^21]: <https://www.forethought.org/research/ai-enabled-coups-how-a-small-group-could-use-ai-to-seize-power>

[^22]: <https://www.forethought.org/research/could-one-country-outgrow-the-rest-of-the-world>

[^23]: <https://www.forethought.org/research/ai-impacts-on-epistemics-the-good-the-bad-and-the-ugly#the-ugly>

[^24]: <https://law-ai.org/law-following-ai/>

[^25]: <https://www.formationresearch.com/secret-loyalties-whitepaper.pdf>

[^26]: <https://windfalltrust.org/>

[^27]: E.g. <https://www.formationresearch.com/power-concentration-survey.pdf>, <https://www.lesswrong.com/posts/ZsrTrxxwgj9spwzaE/lock-in-risk-needs-more-researchers-here-s-where-to-start>

[^28]: E.g. in *Superintelligence*

[^29]: <https://arxiv.org/abs/2206.13353>

[^30]: *If Anyone Builds it, Everyone Dies*

[^31]: Adapted from <https://jc.gatspress.com/pdf/existential_risk_and_powerseeking_ai.pdf> in my own words

[^32]: <https://gradual-disempowerment.ai/>

[^33]: Rose Hadshar makes a similar point, <https://forum.effectivealtruism.org/posts/tnkEoTxdGCsBFRQty/sense-making-about-extreme-power-concentration>, plotting “sudden vs. emergent” as a separate axis to “human vs. AI” take-over.

[^34]: <https://80000hours.org/articles/problem-framework/>

[^35]: See <https://www.globalprioritiesinstitute.org/wp-content/uploads/The-Significance-Persistence-Contingency-Framework-William-MacAskill-Teruji-Thomas-and-Aron-Vallinder.pdf>. The framework actually uses contingency (instead of likelihood): a counterfactual measure of how much the event's occurrence depends on an intervention. I am using likelihood for simplicity’s sake, and also because contingency overlaps somewhat with tractability.

[^36]: “Resources” here refers to people working on and money invested in solving the problem, while “marginal” indicates that the current distribution of these resources should be taken into account (this is discussed in the Neglectedness section below).

[^37]: Considering extreme AEPC only, so the absolute locked-in type

[^38]: An indifferent ruler doesn’t have to cause extinction, but it seems quite likely: by definition, the ruler here considers humans to have absolutely zero utility, and if the ruler has any kind of instrumental goals that involves using resources humans currently control, the easiest option would be to get rid of humans.

[^39]: See e.g. <https://nickbostrom.com/superintelligentwill.pdf>

[^40]: Intelligence and values may also be independent from each other, which Bostrom calls the ‘Orthogonality Thesis’

[^41]: <https://arxiv.org/abs/2209.00626>

[^42]: <https://blog.redwoodresearch.org/p/notes-on-fatalities-from-ai-takeover>

[^43]: <https://www.forethought.org/research/human-takeover-might-be-worse-than-ai-takeover>

[^44]: See e.g. <https://reducing-suffering.org/near-miss/>

[^45]: See <https://longtermrisk.org/research/reducing-long-term-risks-from-malevolent-actors/> for a discussion of ruler values and S-risks

[^46]: There is a whole academic literature on this; see e.g. this meta-analysis: <https://onlinelibrary.wiley.com/doi/abs/10.1111/peps.12072>

[^47]: <https://en.wikipedia.org/wiki/Rentier_state>

[^48]: Unless the ruler deliberately oversees an ecosystem of diverse ideas; Bostrom discusses this in <https://nickbostrom.com/fut/singleton>

[^49]: <https://www.forethought.org/research/human-takeover-might-be-worse-than-ai-takeover>

[^50]: See <https://www.lesswrong.com/s/yP8Zs4Tuog6tDES5b/p/F4ji5dvvCk8tBAsXw> for a more careful definition of lock-in

[^51]: From <https://nickbostrom.com/papers/existential-risks/>

[^52]: <https://www.forethought.org/research/no-easy-eutopia>

[^53]: See e.g. *What We Owe The Future*, *The Precipice*, <https://www.forethought.org/research/agi-and-lock-in>

[^54]: For example, the AGI and lock-in piece (previous footnote) discusses ‘digital error correction’ as a method for human-AI systems to gain stability; LLMs are sufficiently unstable that they might also need some sort of digital error correction, and it’s not immediately clear whether this would prevent them from making random mistakes for the entire future.

[^55]: See <https://academic.oup.com/book/40615/chapter/348242235>; though I think his examples are a bit politically coloured, e.g. he thinks that the European Union, of all places, is at risk of forming the first totalitarian world government…

[^56]: See <https://www.forethought.org/research/agi-and-lock-in>

[^57]: From <https://www.v-dem.net/documents/75/V-Dem_Institute_Democracy_Report_2026_lowres.pdf>. These autocracies disempower their citizens to varying extents, meaning that this number doesn’t necessarily involve the kind of power concentration put forward in the CLTR definition.

[^58]: <https://arxiv.org/abs/2401.02843>; note that the data was gathered in late 2023. “Concerned %” refers to the percentage of respondents indicating “substantial concern” or “extreme concern”.

[^59]: This is because its reference to “most people”. However, this is still very imprecise, and only concerns a single mechanism (economic disempowerment).

[^60]: The year the forecast was taken, not necessarily the year of publication

[^61]: From <https://www.metaculus.com/questions/15609/us-dictatorship-by-2100/>, retrieved 18/09/2026.

[^62]: From <https://academic.oup.com/book/40615/chapter/348242235>; I’ve included this because it’s probably the first quantitative estimate of extreme power concentration (stable totalitarianism), but it’s not AI-specific and not very well justified

[^63]: From the 80,000 Hours problem profile on stable totalitarianism: <https://80000hours.org/problem-profiles/risks-of-stable-totalitarianism/>

[^64]: From <https://www.metaculus.com/questions/7329/one-earth-government-by-2100/>, retrieved 18/09/2026

[^65]: From <https://www.metaculus.com/questions/20683/which-ai-world/>, retrieved 18/09/2026. The four relevant scenarios may be split up along agentic - tool-like and beneficial - harmful scenarios; I have chosen the tool-like-harmful (AI-Dystopia) and agentic-harmful (Paperclipalypse) as representing AEPC and MTO, because the beneficial equivalents (Futurama and Singularia) do not seem to involve effective disempowerment of the majority. If you sum up over beneficial-harmful the probability of tool-like is still higher than that of agentic.

[^66]: From <https://samotsvety.org/blog/2022/09/09/samotsvety-s-ai-risk-forecasts/>

[^67]: From <https://www.lesswrong.com/posts/xWMqsvHapP3nwdSW8/my-views-on-doom>

[^68]: From <https://arxiv.org/abs/2206.13353>; the six arguments are explained in the definition section, but exclude human take-over. Carlsmith’s originally published probability was 5%, which he later updated to “&gt;10%”.

[^69]: From <https://goodjudgment.com/superforecasting-ai/>: Open Philanthropy commissioned the Good Judgement Project to create a superforecaster report on Carlsmith’s six premises

[^70]: Including the Longitudinal AI Expert Panel: <https://leap.forecastingresearch.org/>, and their latest Economic Effects paper: <https://forecastingresearch.org/research/economic-effects-of-ai>. The table reports AI expert forecasts as these have been shown to be less underconfident than superforecasters; they also do not differ much from expert economist forecasts.

[^71]: From the Economic Effects paper; resolution by 2050

[^72]: From the Economic Effects paper; resolution by 2050

[^73]: From LEAP wave 9; resolution by 2040

[^74]: Note that this number is not the labour share, or the percentage of total income earned through labour (vs. capital). The LFPR could stay high if everyone works token subsistence jobs as a form of redistribution, while the labour share is very low. Similarly, voluntary labour might also be counted here.

[^75]: Though not always; <https://larathurnherr.substack.com/p/measuring-concentrations-of-power>, for example, mentions that general societal unrest caused by rapid AI development could lead to power-centralising emergency measures being implemented (and not revoked)

[^76]: <https://www.lesswrong.com/posts/rQTzSuBDLoAbhyS6g/against-corrigibility-1>

[^77]: That is, systems that will allow correction or interference with their goals, regardless of the system’s ethical or other concerns about these modifications

[^78]: See <https://x.com/jkcarlsmith/status/1988734927958077520> for a discussion between Carlsmith and Yudkowsky on whether AI labs are working towards corrigibility

[^79]: <https://arxiv.org/abs/2605.06846v2>

[^80]: <https://www.anthropic.com/constitution>

[^81]: See <https://www.lesswrong.com/posts/K2Ae2vmAKwhiwKEo5/terrified-comments-on-corrigibility-in-claude-s-constitution>

[^82]: Kill switches are arguably corrigible, as they require the AI system to allow itself to be shut down (going against its instrumental goal). E.g. <https://lieu.house.gov/media-center/press-releases/reps-lieu-and-moran-introduce-bill-require-kill-switch-ai-systems-can>

[^83]: <https://intelligence.org/2024/01/04/miri-2024-mission-and-strategy-update/>

[^84]: <https://www.lesswrong.com/posts/9RL9MuGZjzm4q3gKG/what-just-happened-a-retrospective-of-ai-alignment>

[^85]: See e.g. <https://www.lesswrong.com/posts/EjgfreeibTXRx9Ham/ten-levels-of-ai-alignment-difficulty> for a breakdown of 10 levels of alignment difficulty

[^86]: <https://forum.effectivealtruism.org/posts/LxuKuQd69Qx5FKhNZ/survey-of-ai-safety-leaders-on-x-risk-agi-timelines-and>

[^87]: <https://arxiv.org/abs/2401.02843>

[^88]: See <https://arxiv.org/abs/2412.14093>

[^89]: On the other hand, it is easier to get accustomed to slow capability progress - a bit like how climate change being gradual has significantly worsened the policy response

[^90]: See <https://www.forethought.org/research/preparing-for-the-intelligence-explosion>

[^91]: For example, Anthropic’s Project Glasswing’s initial partners were all American companies

[^92]: Including Carlsmith, and Gwern: <https://gwern.net/tool-ai>

[^93]: An example of AEPC scoping work: <https://www.lesswrong.com/posts/ZsrTrxxwgj9spwzaE/lock-in-risk-needs-more-researchers-here-s-where-to-start>

[^94]: By Longview Philanthropy: <https://www.longview.org/request-for-proposals-on-extreme-power-concentration/> and the Collective Intelligence and Effective Institutions projects: <https://checks-and-balances.ai/index.html>

[^95]: Another example is the citizen consultation process, which can get overwhelmed with AI-written contributions - this can be exploited by a clever actor. See <https://www.economist.com/leaders/2026/08/06/how-ai-is-breaking-the-british-state>

[^96]: And control, though this may be seen as more of a transition method to aligned AI

[^97]: I don’t know exactly how much money Coefficient spends on technical research, but it’s probably in the order of $100M per year. See this old RFP: <https://coefficientgiving.org/funds/navigating-transformative-ai/request-for-proposals-technical-ai-safety-research/>

[^98]: <https://time.com/7299044/senators-reject-10-year-ban-on-state-level-ai-regulation-in-blow-to-big-tech/>

[^99]: See e.g. <https://www.bbc.co.uk/news/articles/c8edn0n58gwo>

[^100]: <https://www.formationresearch.com/secret-loyalties-whitepaper.pdf>

[^101]: This column shows which threat model is more tractable, which suggests that additional marginal resources will have a greater total impact

[^102]: Claude Fable 5, with comments and edits by the author

[^103]: <https://docs.google.com/spreadsheets/d/1vc3l3sYOt925ulP0YN6XjhHubJoWr9Ehj5b0_i-EgsE/edit?usp=sharing>

[^104]: From <https://www.formationresearch.com/blog/start-researching-lock-in-here>

[^105]: I asked Claude Opus 5 for its opinion; I prompted it to make up its own mind independently of what I think, but it had read the entire document so was not entirely independent.
