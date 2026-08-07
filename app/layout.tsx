import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chandra Bhanu | Portfolio",
  description:
    "Portfolio of Chandra Bhanu, featuring architecture, board game, experience, UX, and visual design work.",
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
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
