import type { Metadata } from "next";
import { Playfair_Display, Figtree } from "next/font/google";
import TopLoader from "@/shared/TopLoader";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree" });

import "./globals.css";

const description =
  "Full stack web developer with 3+ years building production systems for government and healthcare.";

export const metadata: Metadata = {
  title: "Humphrey Uno — Full Stack Developer",
  description,
  openGraph: {
    title: "Humphrey Uno — Full Stack Developer",
    description,
    type: "website",
  },
};

// Runs before paint so the saved/system theme is applied without a flash
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${playfair.variable} ${figtree.variable} antialiased min-h-dvh font-figtree bg-grain`}
      >
        <TopLoader />
        {children}
      </body>
    </html>
  );
}
