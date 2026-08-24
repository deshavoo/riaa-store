const StandoutPieces = () => {
  return (
    <section className="w-full bg-[#FAFAFA] py-16 px-6 md:px-16 lg:px-24 text-neutral-900 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light tracking-widest uppercase mb-10 font-mono">
          STANDOUT PICES
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-3 group cursor-pointer">
            <div className="relative h-105 overflow-hidden bg-neutral-200">
              <img
                src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop"
                alt="Costs Coat In Navy"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur py-2 text-center text-xs uppercase tracking-widest font-semibold shadow-md">
                CHOOSE OPTIONS
              </div>
            </div>
            <div className="text-center flex flex-col space-y-1">
              <h3 className="text-sm tracking-widest uppercase font-medium">
                Costs Coat In Navy
              </h3>
              <span className="text-xs font-mono">$499.00</span>
              <span className="text-[10px] text-neutral-500 tracking-wider">
                4 color, 5 sizes
              </span>
              <div className="flex justify-center items-center gap-1.5 pt-1">
                <span className="w-3 h-3 rounded-full bg-black border border-neutral-400"></span>
                <span className="w-3 h-3 rounded-full bg-white border border-neutral-400"></span>
                <span className="w-3 h-3 rounded-full bg-[#8B4513] border border-neutral-400"></span>
                <span className="w-3 h-3 rounded-full bg-[#A0522D] border border-neutral-400"></span>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-3 group cursor-pointer">
            <div className="relative h-105 overflow-hidden bg-neutral-200">
              <img
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop"
                alt="Costs Coat In Brown Shearling"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="text-center flex flex-col space-y-1">
              <h3 className="text-sm tracking-widest uppercase font-medium">
                Costs Coat In Brown Shearling
              </h3>
              <span className="text-xs font-mono">$499.00</span>
              <span className="text-[10px] text-neutral-500 tracking-wider">
                4 color, 2 sizes
              </span>
            </div>
          </div>

          {/* منتج 3 */}
          <div className="flex flex-col space-y-3 group cursor-pointer">
            <div className="relative h-105 overflow-hidden bg-neutral-200">
              <img
                src="https://images.unsplash.com/photo-1550639525-c97d455acf70?q=80&w=800&auto=format&fit=crop"
                alt="Costs Coat In Coco"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="text-center flex flex-col space-y-1">
              <h3 className="text-sm tracking-widest uppercase font-medium">
                Costs Coat In Coco
              </h3>
              <span className="text-xs font-mono">$499.00</span>
              <span className="text-[10px] text-neutral-500 tracking-wider">
                4 color, 3 sizes
              </span>
            </div>
          </div>

          <div className="flex flex-col space-y-3 group cursor-pointer">
            <div className="relative h-105 overflow-hidden bg-neutral-200">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop"
                alt="Costs Coat In Noir"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="text-center flex flex-col space-y-1">
              <h3 className="text-sm tracking-widest uppercase font-medium">
                Costs Coat In Noir
              </h3>
              <span className="text-xs font-mono">$499.00</span>
              <span className="text-[10px] text-neutral-500 tracking-wider">
                4 color, 3 sizes
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StandoutPieces;
