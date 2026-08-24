const TheCityEdit = () => {
  return (
    <section className="relative w-full h-137.5 md:h-162.5 overflow-hidden flex items-center px-6 md:px-16 lg:px-24">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1600&auto=format&fit=crop"
          alt="The City Edit"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-xl flex flex-col items-start text-white space-y-4">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-widest uppercase font-mono">
          THE CITY EDIT
        </h2>
        <p className="text-xs md:text-sm tracking-wide text-white/90 uppercase leading-relaxed max-w-md font-agency">
          Featuring versatile pieces that blend comfort with effortless style,
          this collection is perfect for navigating urban streets.
        </p>
        <button className="mt-2 bg-[#FAFAFA] text-neutral-900 px-7 py-3 text-xs md:text-sm uppercase tracking-widest font-semibold hover:bg-white transition duration-300 rounded-lg">
          VIEW COLECTION
        </button>
      </div>
    </section>
  );
};

export default TheCityEdit;
