const SalePage = () => {
  return (
    <div className="w-full bg-[#121212] text-white min-h-screen">
      {/* 1. Burgundy Hero Sale Section */}
      <section className="w-full bg-[#5C1D24] text-white py-32 md:py-40 px-6 md:px-16 lg:px-24 relative overflow-hidden flex items-center">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-3">
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

          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-px bg-white/30"></div>

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

      {/* 2. Fall Faves Section (White background like image) */}
      <section className="w-full bg-[#FAFAFA] text-neutral-955 py-20 px-6 md:px-16 lg:px-24 text-neutral-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <span className="text-xs md:text-sm tracking-[0.25em] text-neutral-600 uppercase font-medium">
              Last Call To Save On
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-widest uppercase">
              Fall Faves
            </h2>
            <p className="text-lg md:text-xl tracking-wider text-neutral-800 font-normal">
              Save Up To 40%
            </p>
            <div className="flex flex-row gap-4 pt-4">
              <button className="bg-neutral-900 text-white text-xs md:text-sm tracking-widest uppercase px-6 py-3.5 hover:bg-neutral-800 transition-colors">
                Shop Dresses
              </button>
              <button className="bg-neutral-900 text-white text-xs md:text-sm tracking-widest uppercase px-6 py-3.5 hover:bg-neutral-800 transition-colors">
                Shop Tops
              </button>
            </div>
          </div>

          <div className="w-full h-112.5 md:h-137.5 overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop"
              alt="Fall Faves Collection"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* 3. Products Grid Section with overlay text */}
      <section className="w-full bg-[#FAFAFA] pb-24 px-6 md:px-16 lg:px-24 text-neutral-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* كارد منتج 1 */}
          <div className="relative h-112.5 overflow-hidden bg-neutral-200 group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop"
              alt="Bela Mini"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700"
            />
            {/* تدرج لوني خفيف تحت عشان الكتابة تبقى واضحة */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent"></div>

            {/* المحتوى جوة الصورة من تحت على الشمال */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col items-start text-white">
              <span className="text-[10px] tracking-[0.2em] uppercase text-white/80 mb-1 font-mono">
                SALE
              </span>
              <h3 className="text-2xl md:text-3xl font-light tracking-widest uppercase font-mono mb-1">
                Bela Mini
              </h3>
              <p className="text-[11px] tracking-wider text-white/70 uppercase mb-4">
                Save on this best seller
              </p>
              <button className="bg-white text-neutral-900 text-[10px] uppercase tracking-widest font-semibold px-5 py-2 hover:bg-neutral-100 transition">
                Shop Now
              </button>
            </div>
          </div>

          {/* كارد منتج 2 */}
          <div className="relative h-112.5 overflow-hidden bg-neutral-200 group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop"
              alt="Bronte Jumpsuit"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent"></div>

            <div className="absolute bottom-6 left-6 right-6 flex flex-col items-start text-white">
              <span className="text-[10px] tracking-[0.2em] uppercase text-white/80 mb-1 font-mono">
                SALE
              </span>
              <h3 className="text-2xl md:text-3xl font-light tracking-widest uppercase font-mono mb-1">
                Bronte Jumpsuit
              </h3>
              <p className="text-[11px] tracking-wider text-white/70 uppercase mb-4">
                They're selling out quickly
              </p>
              <button className="bg-white text-neutral-900 text-[10px] uppercase tracking-widest font-semibold px-5 py-2 hover:bg-neutral-100 transition">
                Shop Now
              </button>
            </div>
          </div>

          {/* كارد منتج 3 */}
          <div className="relative h-112.5 overflow-hidden bg-neutral-200 group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1550639525-c97d455acf70?q=80&w=800&auto=format&fit=crop"
              alt="Evie Corset"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent"></div>

            <div className="absolute bottom-6 left-6 right-6 flex flex-col items-start text-white">
              <span className="text-[10px] tracking-[0.2em] uppercase text-white/80 mb-1 font-mono">
                SALE
              </span>
              <h3 className="text-2xl md:text-3xl font-light tracking-widest uppercase font-mono mb-1">
                Evie Corset
              </h3>
              <p className="text-[11px] tracking-wider text-white/70 uppercase mb-4">
                Don't miss out
              </p>
              <button className="bg-white text-neutral-900 text-[10px] uppercase tracking-widest font-semibold px-5 py-2 hover:bg-neutral-100 transition">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* 4. Filter Bar & Products Grid Section */}
      <section className="w-full bg-[#FAFAFA] py-12 px-6 md:px-16 lg:px-24 text-neutral-900 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto">
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-8 border-b border-neutral-300 mb-10 gap-4 text-xs font-agency tracking-wider">
            <div className="flex flex-wrap items-center gap-3">
              <button className="flex items-center gap-1.5 border border-neutral-300 px-3 py-1.5 uppercase hover:border-black transition">
                <span className="font-semibold">⚙</span> Hide filters{" "}
                <span>▲</span>
              </button>
              <span className="text-neutral-500">16 Results</span>

              <div className="hidden lg:flex items-center gap-2 ml-4">
                {["Availability", "Category", "Color", "Size", "Price"].map(
                  (filter) => (
                    <button
                      key={filter}
                      className="flex items-center justify-between gap-2 border border-neutral-300 px-3 py-1.5 uppercase bg-white hover:border-black transition"
                    >
                      <span>{filter}</span>
                      <span>▼</span>
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="text-neutral-900 uppercase font-semibold">
              Sort: Features
            </div>
          </div>

          {/* Products Grid (4 Columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* منتج 1 (مع زرار Choose options) */}
            <div className="flex flex-col space-y-3 group cursor-pointer">
              <div className="relative h-105 overflow-hidden bg-neutral-200">
                <img
                  src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop"
                  alt="Alex Metallic Top"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur py-2 text-center text-xs uppercase tracking-widest font-semibold shadow-md">
                  Choose options
                </div>
              </div>
              <div className="text-center flex flex-col space-y-1">
                <h3 className="text-sm tracking-widest uppercase font-medium">
                  Alex Metallic Top
                </h3>
                <span className="text-xs font-mono">$229.00</span>
                <span className="text-[10px] text-neutral-500 tracking-wider">
                  3 colors . 5 sizes
                </span>
              </div>
            </div>

            {/* منتج 2 */}
            <div className="flex flex-col space-y-3 group cursor-pointer">
              <div className="relative h-105 overflow-hidden bg-neutral-200">
                <img
                  src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop"
                  alt="Alex Metallic Top"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="text-center flex flex-col space-y-1">
                <h3 className="text-sm tracking-widest uppercase font-medium">
                  Alex Metallic Top
                </h3>
                <span className="text-xs font-mono">$229.00</span>
                <span className="text-[10px] text-neutral-500 tracking-wider">
                  3 colors . 5 sizes
                </span>
              </div>
            </div>

            {/* منتج 3 */}
            <div className="flex flex-col space-y-3 group cursor-pointer">
              <div className="relative h-105 overflow-hidden bg-neutral-200">
                <img
                  src="https://images.unsplash.com/photo-1550639525-c97d455acf70?q=80&w=800&auto=format&fit=crop"
                  alt="Alex Metallic Top"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="text-center flex flex-col space-y-1">
                <h3 className="text-sm tracking-widest uppercase font-medium">
                  Alex Metallic Top
                </h3>
                <span className="text-xs font-mono">$229.00</span>
                <span className="text-[10px] text-neutral-500 tracking-wider">
                  3 colors . 5 sizes
                </span>
              </div>
            </div>

            {/* منتج 4 */}
            <div className="flex flex-col space-y-3 group cursor-pointer">
              <div className="relative h-105 overflow-hidden bg-neutral-200">
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop"
                  alt="Alex Metallic Top"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="text-center flex flex-col space-y-1">
                <h3 className="text-sm tracking-widest uppercase font-medium">
                  Alex Metallic Top
                </h3>
                <span className="text-xs font-mono">$229.00</span>
                <span className="text-[10px] text-neutral-500 tracking-wider">
                  3 colors . 5 sizes
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SalePage;
