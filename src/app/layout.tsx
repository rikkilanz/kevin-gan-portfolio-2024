import Footer from "./_components/Footer";
import "./globals.css";
import { Nunito_Sans, Teko } from "next/font/google";
import Header from "./_components/Header";
import Cursor from "./_components/Cursor/Cursor";
import Background from "./_components/Background";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
});

const tekoFont = Teko({
  subsets: ["latin"],
  variable: "--font-teko",
});
export const metadata: any = {
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
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content={metadata.title} />
        <meta name="og:title" content={metadata.title} />
        <meta name="description" content={metadata.description} />
        <meta name="og:description" content={metadata.description} />
      </head>
      <body
        className={`${nunitoSans.className} ${tekoFont.variable} antialiased`}
      >
        {/* <div className="background-image" /> */}
        <Background />
        <Header />
        <Cursor />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
