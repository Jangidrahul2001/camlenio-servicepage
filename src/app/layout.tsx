import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import localFont from "next/font/local";
import LenisWrapper from "./LenisWrapper";

export const metadata = {
  title: "Camlenio - Digital Solutions",
  description:
    "Camlenio delivers tailored digital solutions that drive business growth, efficiency, and long-term value.",
};

const lufgaFont = localFont({
  src: [
    {
      path: "../../public/fonts/Lufga-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Lufga-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lufgaFont.className}`}>
      <body className="bg-orange-100 text-white overflow-x-hidden">
        <Header />
        <main>
          <LenisWrapper>{children}</LenisWrapper>
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
