import type { Metadata } from "next";
import Footer from "./_components/Footer";
import "./globals.css";
import { Nunito_Sans, Teko } from "next/font/google";
import Header from "./_components/Header";
import Cursor from "./_components/Cursor/Cursor";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
});

const tekoFont = Teko({
  subsets: ["latin"],
  variable: "--font-teko",
});
// const geistMono = localFont({
//   src: "../../public/fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Kevin Gan",
  description: "Kevin Gan Audio SFX Portfolio 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.className} ${tekoFont.variable} antialiased`}
      >
        <div className="background-image" />
        <Header />
        <Cursor />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
