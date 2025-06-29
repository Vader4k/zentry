import { TiLocationArrow } from "react-icons/ti";

const BentoCard = ({ src, title, desc, isComingSoon }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        muted
        autoPlay
        loop
        playsInline
        className="absolute inset-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue50">
        <div>
          <h1 className="bento-title">{title}</h1>
          {desc && <p className="mt-3 max-w-64 text-xs md:text-base">{desc}</p>}
        </div>

        {isComingSoon && (
          <div
            // ref={hoverButtonRef}
            // onMouseMove={handleMouseMove}
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
            className="border-white/20 border relative z-10 flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              //   style={{
              //     opacity: hoverOpacity,
              //     background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              //   }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BentoCard;
