import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedTitle from "../components/AnimatedTitle";

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation
      .to(".mask-clip-path", {
        width: "100vw",
        height: "100vh",
        ease: "power1.inOut",
        top: 0,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      })
      .to(
        ".bg-img",
        {
          ease: "power1.inOut",
          scale: 1,
        },
        "<"
      )
      .to(
        "#stones",
        {
          zIndex: 0,
        },
        "<"
      );
  });

  return (
    <section id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to Zentry
        </p>

        <AnimatedTitle
          title="Discover the world's largest shared adventure"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>The Meta Games begins—your life, now an epic MMORPG</p>
          <p className="text-gray-500">
            Zentry unites every player from countless games and platforms, both
            digital and physical, into a unified Play Economy
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen relative" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="Background"
            className="bg-img absolute inset-0 size-full object-cover scale-200"
          />
        </div>
        <img
          id="stones"
          src="/img/stones.webp"
          alt="rocks"
          className="absolute w-full z-20"
        />
      </div>
    </section>
  );
};

export default About;
