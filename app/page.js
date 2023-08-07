import Hero from "@/components/hero";
import About from "@/components/about";
import React from "react";

const home = () => {
  return (
    <main className="bg-[#092079] min-h-screen">
      <Hero />
      <About />
    </main>
  );
};

export default home;
