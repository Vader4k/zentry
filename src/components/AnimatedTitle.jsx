import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React from "react";

const AnimatedTitle = ({ title, containerClass }) => {
  useGSAP(() => {
    const splitTitle = SplitText.create("#titles", {
      type: "words",
    });

    const contentTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        scrub: 1.5,
        end: "40% bottom",
      },
    });

    contentTl.from(splitTitle.words, {
      opacity: 0,
      rotateY: 60,
      rotateX: -40,
      x: -50,
      y: 51,
      z: -60,
      transformOrigin: "50% 50% -150px",
      ease: "power1.inOut",
    });
  });

  return (
    <div
      id="titles"
      className={`${containerClass} origin-center animated-title animated-word w-full max-w-7xl`}
    >
      {title}
    </div>
  );
};

export default AnimatedTitle;
