const RecreateTheLook = () => {
  return (
    <section className="w-full bg-[#FAFAFA] py-20 px-6 md:px-16 lg:px-24 text-neutral-900 border-t border-neutral-200 font-agency">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* الصورة الكبيرة للموديل على الشمال */}
        <div className="w-full h-137.5 md:h-162.5 overflow-hidden bg-neutral-200">
          <img
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop"
            alt="Recreate The Look Model"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* الجزء اليمين: العنوان وكارد المنتج */}
        <div className="flex flex-col items-center text-center relative px-8">
          {/* عنوان السكشن */}
          <h2 className="text-3xl md:text-5xl font-light tracking-widest uppercase mb-3 font-mono">
            Recreate The Look
          </h2>
          <button className="border border-neutral-900 px-6 py-2 text-xs uppercase tracking-widest font-semibold hover:bg-neutral-900 hover:text-white transition mb-10">
            Shop Now
          </button>

          {/* كارد المنتج المحاط بإطار مع أسهم التنقل */}
          <div className="relative w-full max-w-sm border border-neutral-300 p-5 bg-white shadow-sm flex flex-col items-center">
            {/* سهم الشمال */}
            <button className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-neutral-300 rounded-full flex items-center justify-center text-lg hover:bg-neutral-100 transition shadow">
              ‹
            </button>

            {/* صورة المنتج */}
            <div className="w-full h-95 overflow-hidden bg-neutral-100 mb-4">
              <img
                src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop"
                alt="Magnolia Top In Noir"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* تفاصيل المنتج */}
            <h3 className="text-sm tracking-widest uppercase font-medium mb-1">
              Magnolia Top In Noir
            </h3>
            <span className="text-xs font-mono mb-4 text-neutral-600">
              $197.00
            </span>

            {/* زرار Chose Options */}
            <button className="w-full border border-neutral-900 py-2.5 text-xs uppercase tracking-widest font-semibold hover:bg-neutral-900 hover:text-white transition">
              Chose Options
            </button>

            {/* سهم اليمين */}
            <button className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-neutral-300 rounded-full flex items-center justify-center text-lg hover:bg-neutral-100 transition shadow">
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecreateTheLook;
