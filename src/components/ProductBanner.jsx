import bannerBg from "../assets/banner.jpg"; // صورة الخلفية الكبيرة
import productImg from "../assets/banner2.jpg"; // صورة الفستان الصغيرة جوه الكارت

const ProductBanner = () => {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden bg-black">
      {/* 1. صورة الخلفية الكبيرة */}
      <img
        src={bannerBg}
        alt="Be Chic Collection"
        className="w-full h-full object-cover  brightness-90"
      />

      {/* 2. العنوان وزرار "SHOP DRESSES" في اليمين فوق */}
      <div className="absolute top-12 right-8 md:right-16 text-right z-10">
        <h2 className="text-4xl md:text-6xl font-agency font-bold text-white tracking-widest uppercase mb-3">
          BE CHIC
        </h2>
        <button className="bg-white text-black px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition rounded-lg">
          SHOP DRESSES
        </button>
      </div>

      {/* 3. الكارت الصغير العائم (Floating Product Card) على الشمال */}
      <div className="absolute bottom-12 left-6 md:left-12 z-20 bg-[#f7f5f0] text-black p-3 shadow-2xl flex items-center gap-4 w-67.5 md:w-75 border border-white/50 rounded-lg">
        {/* تفاصيل المنتج */}
        <div className="flex flex-col justify-between flex-1 ">
          <div>
            <h3 className="text-xs md:text-sm font-agency font-bold uppercase tracking-wider text-gray-900 leading-snug">
              MEGGIE MAXI DRESS IN NOIR
            </h3>
            <p className="text-xs font-sans text-gray-700 mt-1.5 font-medium">
              $429.00
            </p>
          </div>

          <button className="text-[10px] font-agency uppercase tracking-widest text-black underline mt-3 text-left hover:text-gray-600 transition cursor-pointer">
            Choose options
          </button>
        </div>

        {/* صورة المنتج المصغرة */}
        <div className="w-20 h-26.25 overflow-hidden shrink-0 bg-gray-200 rounded-lg">
          <img
            src={productImg}
            alt="Meggie Maxi Dress"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductBanner;
