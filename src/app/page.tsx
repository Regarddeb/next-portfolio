"use client";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
export default function Home() {
  return (
    <div className="container mx-auto flex items-center">
      <div className="flex flex-col">
        <Hero />
        <Experience />
      </div>
    </div>
  );
}
