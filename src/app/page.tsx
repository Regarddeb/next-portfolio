"use client";
import TableOfContents from "@/shared/TableOfContents";
import Experience from "../sections/Experience";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import Footer from "@/shared/Footer";
import Header from "@/shared/Header";

export default function Home() {
  return (
    <div className="container mx-auto relative">
      <Header />
      <div className="flex items-start">
        <div className="flex flex-col gap-5 xl:w-8/12 lg:w-9/12">
          <Hero />
          <Experience />
          <Projects />
        </div>
        <TableOfContents />
      </div>
      <Footer />
    </div>
  );
}
