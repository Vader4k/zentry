import React from "react";
import Hero from "./sections/Hero";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
    });
  });

  return (
    <main className="relative min-h-screen w-screen overflow-x-clip">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <div className="h-[200vh] w-full bg-black" />
        </div>
      </div>
    </main>
  );
};

export default App;
