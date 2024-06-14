import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kunal Gala",
  description: "Muscian and Front-end Next.js, TypeScript Web Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mulish.className} text-main overflow-x-hidden`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
