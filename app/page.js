import Hero from "@/components/hero";
import About from "@/components/about";
import Event from "@/components/event";
import React from "react";

const home = () => {
  return (
    <main className="bg-[#092079] min-h-screen">
      <Hero />
      <About />
      <Event />
    </main>
  );
};

export default home;
