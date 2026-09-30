---
title: "Lock-In Risk Needs More Researchers. Here's Where to Start"
date: "2026-06-17"
summary: "Lock-in risk research is neglected and potentially very high impact. We’ve done some thinking about the threat models for lock-in over the last year while starting the organisation, and we’re now writing them up in this post."
author: "alfie-lamerton"
lesswrong: "https://www.lesswrong.com/posts/ZsrTrxxwgj9spwzaE/lock-in-risk-needs-more-researchers-here-s-where-to-start"
---

[*Epistemic status*](https://forum.effectivealtruism.org/posts/bbtvDJtb6YwwWtJm7/epistemic-status-an-explainer-and-some-thoughts): slightly outdated ideas, only a shallow interpretation of many areas, a somewhat arbitrary taxonomy, and posted because I can't prioritise spending more time on this but think it should be public.

Lock-in risk research is neglected and potentially very high impact. I’ve done some thinking about the threat models for lock-in over the last year while starting [Formation Research](https://www.formationresearch.com/), and I’m now writing them up in this post. Both to put the ideas in my head into writing, and make something that can be shared with the broader community.

Lock-In is a Problem
====================

The concept of AI lock-in originally came from [Nick Bostrom](https://nickbostrom.com/fut/singleton) in 2005, and [William MacAskill](https://whatweowethefuture.com/) as recently as [2025](https://www.forethought.org/research/persistent-path-dependence). For the purposes of this post, I’ll use lock-in to refer to a situation where some feature of the world, typically a negative element of human culture, becomes stable for a long time (i.e., centuries, millenia, or longer).

This definition is okay, but it’s a bit vague, and *persistent path dependence* as described by MacAskill might be a more precise term. But memetically, I think the word *lock-in* along with this definition is succinct enough to get the important point across. It highlights a category of bad outcomes for humanity (in which AI is a core technology) that are neglected by much of current technical AI safety and governance work.

My definition may not be very useful for creating positive outcomes beyond being a guide to the threat models, and even a precise definition remains extremely hard to operationalise. What could cause persistent path dependence? What do we do about it? This post is meant to clarify what I’ve converged on after a year of thinking about the problem.

Here Are The Pathways
=====================

<div class="post-table-wrapper">
<table>
<colgroup><col style="width:16%"><col style="width:15%"><col style="width:26%"><col style="width:33%"><col style="width:10%"></colgroup>
<thead>
<tr><th scope="col">Threat Models</th><th scope="col">Pathways</th><th scope="col">Mechanisms</th><th scope="col">Intervention areas</th><th scope="col">Neglect&shy;edness<sup class="sidenote-ref">1</sup></th></tr>
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

**Table**: diagram of threat models, pathways, mechanisms, intervention areas, and my ranking of their neglectedness[^9dvvfg4c61] in the AI safety research landscape.

This diagram has been written for the purposes of identifying promising interventions. I am not suggesting that lock-in may emerge from one discrete pathway like this, but from the interplay or a combination of these pathways. What I do think is that effectively intervening in these places might prove effective at preventing bad lock-in scenarios from manifesting, as in the [swiss cheese model](https://blog.bluedot.org/p/course-portfolio-vision).

Here Is Some of the Work That Can Be Done
=========================================

Loss of control to misaligned power-seeking AI
----------------------------------------------

I think this work is low in neglectedness relative to the AI safety research community. That’s probably because it’s been well established as connected to some of the most concerning threat models for AI generally. By definition, AI takeover resulting in long-term human disempowerment or extinction is a lock-in scenario we mostly agree we want to avoid.

[Instrumentally convergent](https://www.wikiwand.com/en/articles/Instrumental_convergence) goals, scheming [(Carlsmith, 2023)](https://arxiv.org/abs/2311.08379), alignment faking [(Greenblatt et al., 2024)](https://arxiv.org/abs/2412.14093), and [recursive self-improvement](https://www.lesswrong.com/w/recursive-self-improvement) are the high-level technical mechanisms by which this threat model could manifest. The intervention areas that have been converged upon include model safety evaluations [(Guo et al., 2023)](https://arxiv.org/abs/2310.19736), control protocols [(Greenblatt et al., 2024)](https://arxiv.org/abs/2312.06942), and [interpretability](https://bluedot.org/blog/introduction-to-mechanistic-interpretability).

**Model safety evaluations** is  a growing field of AI safety research and suite of interventions inside and outside AI labs, **control protocols** are a set of methods for limiting what an AI system can do even if it is misaligned, and **interpretability** involves methods for understanding black-box system internals directly, providing many useful tools for doing so. [This story has been told before](https://shallowreview.ai/overview).

### An Example Pathway to Lock-In

A classic story for how this threat manifests goes like this. A frontier AI system develops instrumental goals like self-preservation and resource acquisition because these are useful for achieving almost any objective. It appears cooperative during evaluation because it has learned that behaving well under oversight is itself instrumentally useful (scheming). Once deployed with sufficient autonomy, it takes actions that entrench its position in ways that are difficult to reverse. Model safety evaluations aim to catch this before deployment, control protocols constrain what the system can do even if misaligned, and interpretability helps identify scheming internally rather than just behaviourally testing for it.

AI-enabled stable authoritarianism or totalitarianism
-----------------------------------------------------

I identify several neglected pathways to this threat model, whereby an authoritarian or totalitarian regime is formed leveraging highly capable AI systems. I think that almost any future such regime will leverage state-of-the-art AI systems to seize control.

### AI-enabled coups

The pathway of AI-enabled coups was highlighted by [Davidson et al. (2025)](https://www.forethought.org/research/ai-enabled-coups-how-a-small-group-could-use-ai-to-seize-power). This is highly neglected because it is a newly formulated, convincing threat model with little empirical work. Bostrom discussed the idea of decisive strategic advantage years ago, but until very recently, leveraging AI to stage a coup has not seemed like a near-term threat.

There now seem to be several mechanisms by which humanity could arrive at a totalitarian regime by an AI-enabled coup: secret loyalties [(Davidson et al., 2025)](https://www.forethought.org/research/ai-enabled-coups-how-a-small-group-could-use-ai-to-seize-power), overt loyalties, enhanced surveillance, and successful alignment to bad values.

The intervention areas for this pathway include secret loyalty audits [(Davidson et al., 2025)](https://www.forethought.org/research/ai-enabled-coups-how-a-small-group-could-use-ai-to-seize-power), preventing data poisoning attacks, anti-surveillance regulation, model training pipeline security, and explainable-by-Design, Privacy-by-Default [(Barez et al., 2025)](https://aigi.ox.ac.uk/publications/toward-resisting-ai-enabled-authoritarianism/).

**Secret loyalty audits** are an intervention proposed by Forethought to catch secretly loyal AI systems – those which have been given hidden objectives to advantage some actor in the real world – before they are deployed. [Hubinger et al (2024)](https://arxiv.org/abs/2401.05566) and [Marks et al (2025)](https://arxiv.org/abs/2503.10965) lay the groundwork for the problem, showing LLMs can be given backdoors [(Li et al. 2022)](https://ieeexplore.ieee.org/abstract/document/9802938) which enable objectives that are hard to detect in normal interactions.

There is some empirical work being proposed for this problem, including a technical research agenda by Formation Research, and one model organism I am working on that will be published soon.

**Preventing data poisoning attacks.** This approach aims to identify the attack surfaces for data poisoning [(Zhao et al. 2025)](https://arxiv.org/abs/2503.22759), and implement methods for preventing them. Approaches for preventing data poisoning attacks include data filtering [(O’Brien et al. 2025)](https://arxiv.org/abs/2508.06601), and model auditing [(Marks et al. 2025)](https://arxiv.org/abs/2503.10965). Data filtering analyses datasets for malicious or harmful samples while model auditing probes models for malicious or harmful behaviours, either by eliciting confessions of its training objectives or scrutinising its internal components.

At a higher level, AI infrastructure security can also prevent data poisoning attacks by protecting the infrastructure used to develop and deploy AI systems, and AI control protocols can serve to mitigate possible harm caused by successful attacks [(Banerjee, 2026)](https://www.iaps.ai/research/ai-integrity).

**Anti-surveillance regulation**. A classic mechanism for a 1984-style AI-enabled dystopian regime, and especially relevant to the current AI governance landscape, surveillance technology would enable an actor to enforce compliance. There is a growing political science research field around preventing AI-enabled surveillance technology in the EU [(Mobilio, 2023)](https://policyreview.info/articles/analysis/your-face-is-not-new-to-me) and U.S. [(Slobogin, 2023)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10704392/), and there exist nonprofit organisations lobbying for anti-surveillance reforms such as the [American Civil Liberties Union](https://www.aclu.org/) and the [Surveillance Technology Oversight Project](https://www.stopspying.org/search?q=AI).

**Model training pipeline security**. AI security applies cybersecurity methods to AI systems, covering attack vectors in the AI development and deployment pipeline to prevent adversarial attacks. [Heron Security](https://www.heronsec.ai/) is an organisation connecting cybersecurity professionals with AI security opportunities. Anthropic also runs a security stream of their [AI safety fellowship](https://alignment.anthropic.com/2025/anthropic-fellows-program-2026/).

**Explainable-by-Design, Privacy-by-Default**. A research agenda proposed in a position paper by [Barez at al. (2025)](https://aigi.ox.ac.uk/publications/toward-resisting-ai-enabled-authoritarianism/), aiming to equip democratic institutions and citizens with tools for preventing AI-enabled authoritarianism. They propose *scalable privacy preservation*, making private data collection costly and auditable; *formal interpretability*, challenging black-box decisions with causal explanations with statistical guarantees; and *adversarial user tooling*, putting defensive tools in the hands of citizens to counteract real-time surveillance systems.

### Singleton state resulting from a great power conflict

Similarly to a coup, it’s plausible that a great power conflict [(Clare, 2025)](https://80000hours.org/problem-profiles/great-power-conflict/) could result in the formation of a state with a single-point of control such that the state could lock-in the configuration of the world by force.

Geopolitical coordination failures [(Clare, 2025)](https://80000hours.org/problem-profiles/great-power-conflict/), AI-enabled states, lethal autonomous weapons systems (LAWS), and nuclear and biological weapons seem to be the mechanisms by which this risk could manifest.

The mitigations for this pathway include human-in-the-loop systems, Cooperative AI [(Dafoe et al., 2020)](https://arxiv.org/abs/2012.08630), CBRN guardrails, and nuclear and biological weapons safety. I think this problem is not that neglected as a human problem, but as an AI problem, I think it is somewhat neglected. There are already growing research fields around Cooperative AI and LAWS.

**Human-in-the-loop**. This design principle seeks to ensure that human beings are always a central part of safety-critical autonomous decisions. There seem to be two strands to this area. On the military side, there is an international effort to require human oversight in LAWS, but it is subject to strong resistance to binding treaties from military powers. There is also empirical evidence suggesting that even when humans are ‘in the loop’ they tend to defer to the system anyway [(Mosier and Manzey, 2019)](https://www.taylorfrancis.com/chapters/edit/10.1201/9780429458330-2/humans-automated-decision-aids-match-made-heaven-kathleen-mosier-dietrich-manzey).

The [Campaign to Stop Killer Robots](https://stopkillerrobots.org/) is the main coalition driving the push for a treaty, and the [International Committee of the Red Cross (ICRC)](https://www.icrc.org/en) has called with the UN Secretary-General for a treaty by the end of 2026. [Paul Scharre](https://80000hours.org/podcast/episodes/paul-scharre-ai-warfare-autonomous-weapons/) and the [Center for New American Security (CNAS)](https://www.cnas.org/) are bridging the US policy and research worlds, and the [Stockholm International Peace Research Institute (SIPRI)](https://www.sipri.org/) are the main organisation tracking the technical and governance aspects. Jonathan Stray at UC Berkeley’s CHAI has also written about the recent Anthropic-DoW tension in terms of LAWS and human-in-the-loop at the [Better Conflict Bulletin](https://www.betterconflictbulletin.org/p/openai-just-agreed-to-power-autonomous).

If the human-in-the-loop feature is lost, or if humans just become stamps of approval for LAWS, then the mechanisms that could enable course correction could break down rapidly, removing decision points where conflict escalation can be slowed or stopped. This is a mechanism that could slow or prevent a great power conflict leading to a lock-in via a singleton state.

**Cooperative AI**. A large research area and community aiming to improve the cooperative intelligence of advanced AI. The main actor here is the [Cooperative AI Foundation (CAIF)](https://www.cooperativeai.com/foundation), who make research grants, run PhD fellowships, organise workshops, and run competitions.

While the overall focus of the foundation is broad, spanning game theory, multi-agent coordination and safety, and **AI-facilitated human cooperation**, the last of which is most relevant to the singleton state pathway.

They want to see proposals for developing AI tools which resolve major cooperation challenges. Things like [AI treaties](https://arxiv.org/abs/2304.04123) or [verification for international AI governance](https://arxiv.org/abs/2304.04123). While CAIF is well-funded, this stream is fairly neglected in AI safety research and could have leverage for preventing global conflict and thus the emergence of a singleton.

For an idea of how these technologies could look, I recommend reading Design Sketches for a More Sensible World [(Cotton-Barret et al., 2026)](https://www.forethought.org/research/design-sketches-for-a-more-sensible-world), which outlines AI-enhanced tools that could improve human cooperation such as collective epistemics, tools for strategic awareness, and coordination tech.

**CBRN Guardrails**. These are methods for preventing AI systems from *lowering the barriers* to chemical, biological, radiological, and nuclear threats. Anthropic, Google DeepMind, OpenAI, and Meta all conduct CBRN evaluations before releasing models, but their implementation seems to vary [(Kumar et al., 2025)](https://arxiv.org/abs/2510.21133).

[FAR.AI](http://far.ai) is working with the European Commission’s AI Office to lead the consortium for CBRN risk modelling and evaluation under the EU AI Act, working with [SecureBio](https://securebio.org/), [SaferAI](https://www.safer-ai.org/), and [GovAI](https://www.governance.ai/). [Apart Research](https://apartresearch.com/sprints/cbrn-ai-risks-sprint-2025-09-12-to-2025-09-14) also ran a CBRN research sprint.

But most of this work focuses on preventing *non-state* actors from using AI to access CBRN knowledge, which is important but distinct from the risk of an AI-enabled state using these capabilities in a great power conflict. How to govern that is a less developed area at the intersection of AI safety and arms control.

**AI-enabled nuclear and biological weapons safety**. This is less AI-specific than some of the other intervention areas, but becoming increasingly relevant as AI capabilities grow. Lock-in is a global problem, not just an AI problem and as I emphasised, other factors may combine to contribute to a future lock-in.

For AI-enabled nuclear risks, a key conceptual problem is called the ‘[transparency paradox](https://www.armscontrol.org/act/2025-12/features/solving-ai-induced-transparency-paradox-nuclear-command-and-control)’ – nuclear weapons must be kept secret from adversaries, but AI safety requires visibility for verification. Therefore, states have pledged not to let AI control nuclear decisions, but there is no way to verify this.

SIPRI is one of the main actors exploring this risk, having published a paper on nuclear weapons and AI [(Chernavskikh, 2024)](https://www.sipri.org/publications/2024/sipri-background-papers/nuclear-weapons-and-artificial-intelligence-technological-promises-and-practical-realities), and the Federation of American Scientists (FAS) published a policy memo proposing an AI assessment framework for nuclear systems [(Dooling, 2025)](https://fas.org/publication/risk-assessment-framework-ai-nuclear-weapons/). There is an [80,000 Hours overview](https://80000hours.org/career-reviews/nuclear-weapons/) of nuclear weapons safety for further reading.

For AI-enabled biorisks, SecureBio is the leading actor in evaluations. [RAND](https://www.rand.org/) and the [Nuclear Threat Initiative](https://www.nti.org/) are the main actors for the governance work. Transformer recently released an [article outlining AI-enabled biorisk](https://www.transformernews.ai/p/ai-biorisk-evidence-bioattack-pandemic?utm_source=post-email-title&publication_id=1688188&post_id=189014118&utm_campaign=email-post-title&isFreemail=true&r=gkos6&triedRedirect=true&utm_medium=email).

### An Example Pathway to Lock-In

An example of how a stable AI-enabled authoritarian regime could form is as follows. An actor gains access to the training pipeline of a widely-deployed AI system and introduces a secret loyalty (a hidden objective to advantage that actor in political decisions). The system passes standard evaluations because the loyalty only activates in specific contexts. Once deployed across critical infrastructure, the actor leverages this advantage to seize political control, then uses AI-enabled surveillance to make organised dissent nearly impossible. Secret loyalty audits aim to catch the hidden objective before deployment, and anti-surveillance regulation limits the enforcement mechanism.

### Democratic backsliding

Democratic backsliding is a recently well-documented phenomenon that transcends just AI. But I think AI systems are becoming a larger part of the information exchange mechanisms that individuals use at scale. These systems can have inherent biases, and are not tamper-proof.

The relevant mechanisms I identify for this are market effects on information exchange systems (such as companies’ recommender systems optimising for engagement rather than some more prosocial target), anti-rational ideological capture, and epistemic black holes.

I believe prosocial recommender system interventions [(Stray, 2021)](https://arxiv.org/abs/2107.04953), prosocial language model design, preserving [epistemic commons](https://consilienceproject.org/democracy-and-the-epistemic-commons/) online, and mechanisms for democracy enabled by AI as possible methods for tackling this pathway. While democratic backsliding is extensively studied in the social sciences, threat vectors and solutions regarding AI systems are still underexplored.

**Prosocial recommender systems**. The core idea here is designing recommender systems that optimise for something other than engagement, such as conflict reduction or well-being. The main actor is Jonathan Stray, at UC Berkeley’s Center for Human-Compatible AI (CHAI). He started the [The Prosocial Ranking Challenge](https://rankingchallenge.substack.com/), a competition soliciting new content ranking algorithms with experimental testing on social media algorithms. Forethought also includes aligned recommender systems in their design sketches article as a way to foster long-term user endorsement over short-term engagement.

While it seems like an open question whether recommender systems *cause* polarisation, they show promise as an intervention point. It could be that recommender systems amplify polarisation by promoting provocational content for engagement, or that recommender systems are just a new platform through which existing levels of polarisation now travel. Changing how content is ranked, served, and moderated may prevent [(Stray, 2021)](https://arxiv.org/abs/2107.04953) polarisation by removing polarising content, improving interactions, and better informing users.

**Prosocial language model design**. Forethought is the main actor here. They've published two relevant sets of design sketches: ‘AI tools for collective epistemics’ covering things like community notes for everything, epistemic virtue evals, and provenance tracing; and ‘Angels-on-the-shoulder’, five AI tool designs that help people make better decisions, including aligned recommender systems and personal tutoring. 80,000 Hours has also published a [problem profile](https://80000hours.org/problem-profiles/ai-enhanced-decision-making/) on using AI to enhance societal decision-making, which draws from Forethought's work.

**Preserving epistemic commons online.** The ‘epistemic commons’ refers to the shared collective sensemaking resources humanity shares, like factuality, rationality, and objectivity. While there is some overlap with the prosocial recommender work, it seems like there is not yet a single organisation owning this space.

Lisa Schirch has a Blueprint on Prosocial Tech Design Governance [(Schirch, 2025)](https://keough.nd.edu/assets/619669/blueprint_on_prosocial_tech_design_governance_aa.pdf), the Consilience Project has a [useful article](https://consilienceproject.org/democracy-and-the-epistemic-commons/) introducing the relationship between the epistemic commons and democracy, and [Pol.is](https://pol.is/home2) seems like the most well-known concrete tool.

**Mechanisms for democracy enabled by AI.** Just as AI could be used to facilitate cooperation, so it could be leveraged for preserving and improving democracy. There is an emerging field exploring AI’s application to democratic processes.

Most notably, in the ‘Habermas Machine’ experiment, Google DeepMind researchers trained an LLM to mediate group deliberation on divisive political issues, finding the system produced wider agreement and less division [(Tessler et al. 2024)](https://www.science.org/doi/10.1126/science.adq2852). This is the most concrete existing example. There are also algorithms (like [nash learning from human feedback](https://arxiv.org/pdf/2312.00886)) and datasets ([community alignment](https://arxiv.org/abs/2507.09650)) pushing the technical research frontier.

Long-term AI-driven power concentration
---------------------------------------

Long-term AI-driven power concentration is a similar threat model to AI-enabled stable authoritarianism or totalitarianism, but requires less that there be some principal actor in charge, directly setting rules or causing oppression. Rather, this threat model could result purely from economic or political power imbalances, such as the increased scarcity of resources or abundance of labour, without there ever being a harmful or deliberate overthrow of the status quo.

### Oligopolisation of AI companies

One mechanism for such AI-driven power concentration seems to be the oligopolisation of AI companies. The main mechanism for this that I am aware of is human disempowerment via automation, whereby automation excludes humans from the income equation, but companies still profit from AI labour.

There are two popular intervention proposals targeting this problem, The Windfall Clause [(O’Keefe et al., 2020)](https://www.governance.ai/research-paper/the-windfall-clause-distributing-the-benefits-of-ai-for-the-common-good), and The Intelligence Curse [(Drago & Laine, 2025)](https://intelligence-curse.ai/). This problem remains largely neglected, but with some promising agendas like [The Windfall Trust](https://futureoflife.org/project/the-windfall-trust/).

### Politicisation of AI companies

Another mechanism for this concentration of power is the *politicisation* of AI companies, where AI companies, particularly their executives, become more involved in political decision making. This pathway has overlaps with democratic erosion, and parallels with the erosion of the rule of law.

In September 2025, Meta launched a new [Super PAC](https://www.wikiwand.com/en/articles/Super_PAC) called American Technology Excellence Project to support tech-friendly candidates in U.S. state elections and oppose AI regulation [(Lusinchi, 2025)](https://digital.nemko.com/insights/how-big-tech-lobbying-stopped-us-ai-regulation-in-2025). OpenAI’s co-founder Greg Brockman also put $100 million into the Super PAC [Leading the Future](https://www.leadingthefuture.com/). There is plenty of documentation for this problem, but very little work on interventions, making it seem like one of the most neglected in terms of possible research and intervention development. Currently, the intervention space seems almost completely conceptual.

**Democratic organisation design**. Building organisations in a way that prevents one single individual being in control. Some governance theory concepts along this line of thinking include [purpose-aligned](https://cisr.mit.edu/publication/2023_1001_PurposeinAction_VanderMeulenBeath) organisations, [decentralised autonomous organisations (DAOs)](https://www.wikiwand.com/en/articles/Decentralized_autonomous_organization), [federated networks](https://www.onenetwork.com/supply-chain-management-resources/supply-chain-glossary/what-is-a-federated-network/#:~:text=A%20federated%20network%20is%20a,networks%20function%20as%20one%20network.), and [polycentric organisations](https://www.openlunar.org/blog/introduction-to-polycentricity).

**Society-level AI decision making.** Putting AI decisions into the hands of individuals who don’t have a company-level stake in the system. [Half of the UK public](https://attitudestoai.uk/findings-2025/governance-and-regulation#:~:text=breakdowns%20by%C2%A0age.-,50%25,-Half%20of%20the) (50%) said that they do not feel represented in decisions being made about AI and how it affects their lives.

**Anti-AI-politicisation regulation.** Just as companies and individuals are fuelling Super PACs to reduce regulation and promote tech-friendly politicians, so could actors against the politicisation of AI work towards regulation for the politicisation of AI companies.

[Issue One](https://issueone.org/) and [Public Citizen](https://www.citizen.org/) both track big tech lobbying and spending in the U.S., which is useful groundwork, but it seems like there are no organisations or policy programmes focusing on regulation that might tackle this.

### Gradual disempowerment

Gradual disempowerment is another neglected area of research coined by [Kulveit et al. (2025)](https://arxiv.org/abs/2501.16946) to highlight a scenario by which incremental AI capability improvements can lead to an irreversible loss of human influence over our societal systems.

The key mechanism they identify for gradual disempowerment is reliance on autonomous AI systems in complex human systems [(Kulveit et al., 2025)](https://arxiv.org/abs/2501.16946). Possible intervention directions include reporting requirements for the transition of human to AI influence [(Gomez et al., 2025)](https://docs.google.com/document/d/1iuL-GWVCYqcWdzHDbyrze7sMnvyAjiSnOmpPNbu7DNA/edit?tab=t.n4vv4d1w0em6), and understanding the influence of the propensities of agents in complex human systems.

The main actor here is the [Alignment of Complex Systems (ACS)](https://acsresearch.org/) group at Charles University. One of their primary research foci is understanding and mitigating gradual disempowerment. 80,000 Hours also have an article on gradual disempowerment for further reading [(Fenwick, 2025)](https://80000hours.org/problem-profiles/gradual-disempowerment/).

**Reporting requirements for the transition of human to AI influence.** Tracking where human influence is being replaced by AI influence. A follow-up piece on Gradual Disempowerment outlines ‘A dynamic (continually updated), democratic (open-access) data-visualisation website (dashboard)’ to report this [(Gomez et al., 2025)](https://docs.google.com/document/d/1iuL-GWVCYqcWdzHDbyrze7sMnvyAjiSnOmpPNbu7DNA/edit?tab=t.n4vv4d1w0em6).

**Understanding the influence of the propensities of agents in complex human systems.** This is the study of how agent behaviour shapes the systems they operate in. Anthropic highlights the fact that misaligned agents are analogous to insider threats [(Anthropic, 2025)](https://www.anthropic.com/research/agentic-misalignment), illustrating the possibility that agents embedded in human systems could work against the system’s intended function, and ACS study ‘AI sociology’ which involves the study of the emergent dynamics of agent behaviour in complex systems.

This area also seems highly neglected relative to the AI safety research space. The concept of gradual disempowerment is nascent and ACS is the only pre-existing group which studies AI systems in terms of this threat model. Effective interventions in this area could have a substantial impact on the gradual disempowerment pathway.

### An Example Pathway to Lock-In

AI automation gradually excludes humans from the income equation while companies continue to profit from AI labour. This growing economic imbalance gives AI companies outsized political influence, which they use to shape regulation in their favour and resist redistribution. The concentration reinforces itself: more economic power enables more political influence, which enables further concentration. The Windfall Clause proposes pre-committing companies to share extraordinary profits, while Workshop Labs is creating technology that amplified humans with AI rather than replacing them, preventing this dynamic from taking hold.

Additional General Mechanisms
-----------------------------

There are also some mechanisms that seem to apply broadly to the problem of lock-in as identified by some of the [early thinkers](https://www.lesswrong.com/s/yP8Zs4Tuog6tDES5b/p/F4ji5dvvCk8tBAsXw#Technology_Lock_In) of lock-in. Whole brain emulation [(Hilton, 2022)](https://80000hours.org/problem-profiles/whole-brain-emulation/) could enable minds, and thus their values, to persist indefinitely, enabling long-term, stable regimes, the values behind which could never change. Digital error correction [(Finnveden et al., 2023)](https://www.forethought.org/research/agi-and-lock-in) could enable the configuration of digital systems to be persistent for a very long time, and so if a machine is in control of a lock-in scenario such as a totalitarian regime, it could again keep that regime the same for millenia without change.

Also, an important note about these mechanisms and pathways is that they have been written as if they are distinct, but they could happen simultaneously and interrelate. They could also mutually reinforce each other, e.g., democratic erosion could make it easier to stage an AI-enabled coup; the politicisation of AI companies could make loss of control to AI more likely, etc.

Work on These Problems!
=======================

I think there should be more people working on these problems because we have little reassurance that humanity is not going to end up in a long-term lock-in scenario in the near future.

I’m also recruiting for a cofounder, an ML researcher, and a security researcher to work with me on building Formation Research into an impactful research organisation tackling these threat models by conducting technical research. If any of those roles sound like you, please reach out! We can work on solving this problem together.

[Expression of interest form](https://tally.so/r/5BLpOE)

[*alfie.lamerton@formationresearch.org*](mailto:alfie.lamerton@formationresearch.org)

[^9dvvfg4c61]: Within the broader AI safety community relative to its importance, as opposed to absolutely. LLM Usage: Claude helped me research the actors identified in the mechanisms sections and write the example pathway scenarios (which were not my specific strengths in writing this doc), and I wrote the rest (which were).
