import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { Lato } from "next/font/google";
import { SITE_URL } from "@/lib/site";

// Served with the site (fetched at build time) and exposed as --font-lato,
// which Tailwind's font-sans uses. Lato has no 500/600 weights, so medium
// and semibold text renders at the nearest available weight.
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata = {
  description: "Minimising lock-in risk",
  metadataBase: new URL(SITE_URL),
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
    <html lang="en" className={`scroll-smooth ${lato.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
