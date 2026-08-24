const MarqueeBanner = () => {
  return (
    <div className="relative w-full bg-[#FAFAFA] py-8 overflow-hidden border-t border-b border-neutral-200 select-none">
      {/* حاوية الشريط المتحرك باستخدام CSS Animation */}
      <div className="flex w-max animate-marquee items-center space-x-12 whitespace-nowrap">
        {/* المحتوى يتكرر مرتين عشان الحركة تكون ناعمة وما يحصلش فراغ */}
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className="flex items-center space-x-12 text-neutral-900 font-mono text-sm md:text-base uppercase tracking-widest"
          >
            <span>GET THEM BEFORE THEY'ER GONE</span>

            <div className="w-16 h-20 md:w-20 md:h-24 overflow-hidden bg-neutral-200 inline-block align-middle mx-2">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400&auto=format&fit=crop"
                alt="Model 1"
                className="w-full h-full object-cover"
              />
            </div>

            <span>END OF SEASON SALE</span>

            <div className="w-16 h-20 md:w-20 md:h-24 overflow-hidden bg-neutral-200 inline-block align-middle mx-2">
              <img
                src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=400&auto=format&fit=crop"
                alt="Model 2"
                className="w-full h-full object-cover"
              />
            </div>

            <span>GET THEM BEFORE THEY'ER GONE</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;
