import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Footer from "./components/Footer";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.chandrabhanudosapati.in"),
  title: "Chandra Bhanu | Portfolio",
  description:
    "Portfolio of Chandra Bhanu, featuring architecture, board game, experience, UX, and visual design work.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/icon.svg?v=2", type: "image/svg+xml" }],
    shortcut: [{ url: "/favicon.ico?v=2", type: "image/x-icon" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        {children}
        <Footer />
      </body>
    </html>
  );
}
