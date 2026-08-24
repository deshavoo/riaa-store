const UnforgettableElegance = () => {
  return (
    <section className="w-full bg-[#FAFAFA] py-16 px-6 md:px-16 lg:px-24 text-neutral-900 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* الكارد الأول: Unforgettable */}
        <div className="relative h-137.5 md:h-162.5 overflow-hidden bg-neutral-200 group cursor-pointer flex items-center justify-center text-center px-6">
          <img
            src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop"
            alt="Unforgettable Collection"
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition duration-700"
          />
          {/* تدرج لوني خفيف فوق الصورة عشان الكتابة تبان بوضوح */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* محتوى النص والأزرار في نص الصورة */}
          <div className="relative z-10 flex flex-col items-center text-white space-y-3">
            <h2 className="text-3xl md:text-5xl font-light tracking-widest uppercase font-mono">
              UNFOREGTTABLE
            </h2>
            <p className="text-xs md:text-sm tracking-wider text-white/90 uppercase max-w-xs font-agency">
              Make a mark on all with the 24 collection
            </p>
            <button className="mt-4 bg-white/90 hover:bg-white text-neutral-900 px-6 py-2.5 text-xs uppercase tracking-widest font-semibold transition duration-300 shadow-md">
              SHOP NOW
            </button>
          </div>
        </div>

        {/* الكارد الثاني: Elegance */}
        <div className="relative h-137.5 md:h-162.5 overflow-hidden bg-neutral-200 group cursor-pointer flex items-center justify-center text-center px-6">
          <img
            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop"
            alt="Elegance Collection"
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition duration-700"
          />
          <div className="absolute inset-0 bg-black/30"></div>

          {/* محتوى النص والأزرار في نص الصورة */}
          <div className="relative z-10 flex flex-col items-center text-white space-y-3">
            <h2 className="text-3xl md:text-5xl font-light tracking-widest uppercase font-mono">
              ELEGANCE
            </h2>
            <p className="text-xs md:text-sm tracking-wider text-white/90 uppercase max-w-xs font-agency">
              Perfect for any date, event, or night out
            </p>
            <button className="mt-4 bg-white/90 hover:bg-white text-neutral-900 px-6 py-2.5 text-xs uppercase tracking-widest font-semibold transition duration-300 shadow-md">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnforgettableElegance;
