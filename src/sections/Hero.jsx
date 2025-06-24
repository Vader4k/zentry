import { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVideoRef = useRef(null);

  const handleMiniVidClick = () => {
    setIsClicked(true);
    setCurrentIndex(nextIndex);
  };

  const nextIndex = (currentIndex % totalVideos) + 1;

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  useGSAP(
    () => {
      if (isClicked) {
        gsap.set("#next-video", { visibility: "visible" });

        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVideoRef.current.play(),
        });

        gsap.from("#current-video", {
          scale: 0.5,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  useGSAP(() => {
    const clipTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#video-frame",
        scrub: true,
        start: "top top",
      },
    });

    clipTl.to("#video-frame", {
      clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
      ease: "power1.inOut",
      borderRadius: "0 0 40% 5%",
    });
  });

  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setIsLoading(false);
    }
  }, [loadedVideos]);

  return (
    <section className="relative h-dvh w-screen overflow-x-clip">
      {isLoading && (
        <div className="flex items-center justify-center absolute z-[100] inset-0 h-full w-full overflow-clip bg-violet-50">
          <div className="three-body relative">
            <div className="three-body__dot" />
            <div className="three-body__dot" />
            <div className="three-body__dot" />
          </div>
        </div>
      )}
      <div
        id="video-frame"
        className="relative z-10 h-full w-full overflow-hidden rounded-lg bg-blue75"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          borderRadius: "0 0 0 0",
        }}
      >
        <div>
          <div className=" z-50 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-64 cursor-pointer overflow-clip rounded-lg">
            <div
              onClick={handleMiniVidClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                ref={nextVideoRef}
                src={getVideoSrc(nextIndex)}
                loop
                muted
                playsInline
                id="current-video"
                autoPlay
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>

          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            playsInline
            autoPlay
            id="next-video"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 invisible -translate-y-1/2 z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />

          <video
            src={getVideoSrc(currentIndex)}
            loop
            muted
            playsInline
            autoPlay
            onLoadedData={handleVideoLoad}
            className="absolute inset-0 size-full object-cover object-center"
          />
        </div>

        <h1 className="absolute bottom-5 right-5 z-40 uppercase font-zentry font-black text-5xl sm:right-10 sm:text-7xl md:text-9xl lg:text-[12rem] text-blue75">
          G<b>a</b>ming
        </h1>
        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="uppercase font-zentry font-black text-5xl sm:right-10 sm:text-7xl md:text-9xl lg:text-[12rem] text-blue100">
              Redefi<b>n</b>e
            </h1>
            <p className="mb-5 max-w-64 font-robertRegular text-blue100">
              Enter the Metagame Layer <br /> Unleash the play Economy
            </p>
            <Button
              id="watch-trailer"
              title="watch Trailer"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow300 flex items-center justify-center gap-1"
            />
          </div>
        </div>
      </div>

      <h1 className="absolute bottom-5 right-5 uppercase font-zentry font-black text-5xl sm:right-10 sm:text-7xl md:text-9xl lg:text-[12rem] text-black">
        G<b>a</b>ming
      </h1>
    </section>
  );
};

export default Hero;
