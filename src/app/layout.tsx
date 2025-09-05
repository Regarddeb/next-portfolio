import type { Metadata } from "next";
import { Playfair_Display, Figtree } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree" });

import "./globals.css";

export const metadata: Metadata = {
  title: "Humphrey Uno",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-[100dvh]">
      <body
        className={`${playfair.variable} ${figtree.variable} antialiased h-full font-figtree`}
      >
        {children}
      </body>
    </html>
  );
}
