import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Formation Research",
  description: "Minimising lock-in risk",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
