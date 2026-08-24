const HeroSaleSection = () => {
  return (
    <section className="w-full bg-[#5C1D24] text-white py-16 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Optional Top Navigation / Brand Bar if needed inside the section */}
      <div className="max-w-7xl mx-auto flex justify-between items-center pb-16 border-b border-white/10 md:flex">
        <div className="text-2xl font-serif tracking-widest font-bold">
          RIAA
        </div>
        <div className="flex space-x-8 text-xs tracking-widest uppercase text-white/80">
          <span className="cursor-pointer hover:text-white">Clothing</span>
          <span className="cursor-pointer hover:text-white">Dresses</span>
          <span className="cursor-pointer hover:text-white">Tops</span>
          <span className="cursor-pointer hover:text-white">Sale</span>
          <span className="cursor-pointer hover:text-white">Lookbook</span>
        </div>
        <div className="flex space-x-6 text-white/90">
          <span className="cursor-pointer">🔍</span>
          <span className="cursor-pointer">👤</span>
          <span className="cursor-pointer">🛒</span>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-12 relative">
        {/* Left Side: SALE Typography */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-2">
          <span className="text-xs md:text-sm tracking-[0.25em] text-white/90 uppercase">
            Up To 50% Off *
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-widest uppercase font-mono">
            SALE
          </h1>
          <p className="text-[10px] md:text-xs tracking-wider text-white/70 uppercase pt-2">
            Ends March 31, 2023, 11:59 PST. T&C's Apply
          </p>
        </div>

        {/* Vertical Divider (Hidden on mobile) */}
        <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-48 w-px bg-white/30"></div>

        {/* Right Side: Bigger Markdowns */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 lg:pl-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-wider uppercase font-mono">
            Bigger Markdowns
          </h2>
          <p className="text-xs md:text-sm tracking-wide text-white/80 max-w-sm uppercase leading-relaxed">
            We've refreshed our sale with discounts of up to 50% on select
            styles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSaleSection;
