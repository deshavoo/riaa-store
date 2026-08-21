import heroImg from "../assets/Hero.jpg";

const Hero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-between"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      <div className="pt-28"></div>
      <div className="relative z-10 px-8 md:px-16 pb-16 text-white max-w-2xl font-agency">
        <h1 className="text-6xl md:text-7xl font-bold uppercase tracking-wider leading-[0.9]">
          A PAIR IN <br /> MOTION
        </h1>
        <p className="mt-3 text-sm md:text-base font-sans tracking-wide text-gray-200">
          Fluid satin separate that move together beautifully.
        </p>
        <div className="mt-6 flex items-center space-x-4">
          <button className="border border-white bg-transparent px-8 py-2.5 text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition duration-300 rounded-lg">
            SHOP NOW
          </button>
          <button className="border border-white bg-transparent px-8 py-2.5 text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition duration-300 rounded-lg">
            LOOKBOOK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
