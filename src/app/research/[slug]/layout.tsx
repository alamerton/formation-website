import { ReactNode } from "react";

export default function ResearchPostLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <article className="prose prose-lg">{children}</article>
      </div>
    </div>
  );
}
