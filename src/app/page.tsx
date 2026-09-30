import React from "react";
import Main from "./main";
import { redirect } from "next/navigation";
import { linkPreviewImages } from "@/lib/linkPreview";

export const metadata = {
  title:
    "Formation Research – Lock-In Risk Research and High-Impact Interventions",
  description:
    "Formation Research reduces lock-in risks by researching fundamental lock-in dynamics and implementing high-impact interventions.",
  openGraph: {
    title: "Formation Research – Reducing Lock-In Risks",
    description:
      "Formation Research reduces lock-in risks by researching fundamental lock-in dynamics and implementing high-impact interventions.",
    type: "website",
    images: linkPreviewImages,
  },
};

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function HomePage({ searchParams }: Props) {
  const ad = typeof searchParams?.ad === "string" ? searchParams.ad : undefined;

  const formUrls: Record<string, string> = {
    "foundational-framework":
      "https://docs.google.com/forms/d/e/1FAIpQLSfn7rXGBwMIkLDLMiPfGqlqzoxV975x3Poso0tUSmTx1gWNNw/viewform?usp=pp_url&entry.1252112824=Foundational+Framework+for+Lock-In",
    "democratic-orgs":
      "https://docs.google.com/forms/d/e/1FAIpQLSfn7rXGBwMIkLDLMiPfGqlqzoxV975x3Poso0tUSmTx1gWNNw/viewform?usp=pp_url&entry.1252112824=Towards+Democratic+AI+Organisations",
    "recommender-systems":
      "https://docs.google.com/forms/d/e/1FAIpQLSfn7rXGBwMIkLDLMiPfGqlqzoxV975x3Poso0tUSmTx1gWNNw/viewform?usp=pp_url&entry.1252112824=Recommender+System+Lock-In+Interventions",
    "error-correction":
      "https://docs.google.com/forms/d/e/1FAIpQLSfn7rXGBwMIkLDLMiPfGqlqzoxV975x3Poso0tUSmTx1gWNNw/viewform?usp=pp_url&entry.1252112824=Assessing+the+Digital+Error-Correction+Properties+of+Digital+Entities",
    "llm-agents":
      "https://docs.google.com/forms/d/e/1FAIpQLSfn7rXGBwMIkLDLMiPfGqlqzoxV975x3Poso0tUSmTx1gWNNw/viewform?usp=pp_url&entry.1252112824=Lock-In+Evaluation+for+LLM-Agents",
    "decision-making":
      "https://docs.google.com/forms/d/e/1FAIpQLSfn7rXGBwMIkLDLMiPfGqlqzoxV975x3Poso0tUSmTx1gWNNw/viewform?usp=pp_url&entry.1252112824=Society-Level+AI+Decision+Making",
    "effective-removal":
      "https://docs.google.com/forms/d/e/1FAIpQLSfn7rXGBwMIkLDLMiPfGqlqzoxV975x3Poso0tUSmTx1gWNNw/viewform?usp=pp_url&entry.1252112824=Towards+Effective+Removal+in+Democracy",
  };

  if (ad && formUrls[ad]) {
    redirect(formUrls[ad]);
  }

  return <Main />;
}
