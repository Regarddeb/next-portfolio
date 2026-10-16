"use client";
import { Analytics } from "@vercel/analytics/next";
import { MotionConfig } from "motion/react";

import TableOfContents from "@/shared/TableOfContents";
import ScrollProgress from "@/shared/ScrollProgress";
import Hero from "../sections/Hero";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Education from "../sections/Education";
import Contact from "../sections/Contact";
import Footer from "@/shared/Footer";
import Header from "@/shared/Header";

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <Header />
      <div className="container mx-auto relative">
        <div className="flex items-start">
          <main className="flex flex-col xl:w-8/12 lg:w-9/12 w-full">
            <Hero />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Contact />
          </main>
          <TableOfContents />
        </div>
        <Analytics />
        <Footer />
      </div>
    </MotionConfig>
  );
}
