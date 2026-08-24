const FallFavesSection = () => {
  return (
    <section className="w-full bg-[#FAFAFA] py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Content & Action Buttons */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          <span className="text-xs md:text-sm tracking-[0.25em] text-neutral-600 uppercase font-medium">
            Last Call To Save On
          </span>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-widest text-neutral-900 uppercase">
            Fall Faves
          </h2>

          <p className="text-lg md:text-xl tracking-wider text-neutral-800 font-normal">
            Save Up To 40%
          </p>

          {/* Action Buttons */}
          <div className="flex flex-row gap-4 pt-4">
            <button className="bg-neutral-900 text-white text-xs md:text-sm tracking-widest uppercase px-6 py-3.5 rounded-none hover:bg-neutral-800 transition-colors duration-300">
              Shop Dresses
            </button>
            <button className="bg-neutral-900 text-white text-xs md:text-sm tracking-widest uppercase px-6 py-3.5 rounded-none hover:bg-neutral-800 transition-colors duration-300">
              Shop Tops
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full h-112.5 md:h-137.5 overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop"
            alt="Fall Faves Collection"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default FallFavesSection;
