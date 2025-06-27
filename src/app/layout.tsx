import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Kameron, Lato } from "next/font/google";
import Script from "next/script";

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
        <Script
          id="x-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
            },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
            a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
            twq('config','pt1jw');
            `,
          }}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
