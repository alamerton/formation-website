import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Kameron, Lato } from "next/font/google";

const kameron = Kameron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-kameron",
});
const lato = Lato({
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata = {
  description: "Minimising lock-in risk",
  metadataBase: new URL("https://www.formationresearch.com"),
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${kameron.variable} ${lato.variable}`}>
      <body className={lato.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
