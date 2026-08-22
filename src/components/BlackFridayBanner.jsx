import blackFridayBg from "../assets/blackfriday.jpg";

const BlackFridayBanner = () => {
  return (
    <section className="relative w-full h-[75vh] md:h-[85vh] overflow-hidden bg-white py-4 flex items-center justify-center">
      {/* حاوية الصورة نفسها (عشان المسافات اللي فوق وتحت تكون بيضاء، والصورة محاطة بفراغ أنيق) */}
      <div className="relative w-full h-full max-w-[95%] md:max-w-[92%] mx-auto overflow-hidden flex items-center justify-center shadow-md rounded-lg">
        {/* 1. صورة الخلفية الكبيرة مع تأثير داكن خفيف */}
        <img
          src={blackFridayBg}
          alt="Black Friday Sale"
          className="absolute inset-0 w-full h-full object-cover grayscale brightness-75"
        />

        {/* 2. المحتوى (مقسوم نصين مع خط فاصل في النص زي الصورة) */}
        <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
          {/* النص الشمال: نسبة الخصم الضخمة */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-left py-8 md:py-0">
            <span className="text-sm md:text-base uppercase tracking-[0.3em] font-sans text-gray-200 mb-2">
              UP TO
            </span>
            <h2 className="text-6xl md:text-8xl font-agency font-bold text-white tracking-tighter leading-none">
              50% <span className="text-5xl md:text-7xl font-light">OFF</span>
            </h2>
          </div>

          {/* خط فاصل طولي يظهر في الشاشات الكبيرة بس */}
          <div className="hidden md:block w-px h-3/5 bg-white/40 mx-8"></div>

          {/* النص اليمين: عنوان البلاك فرايداي وزر الشراء */}
          <div className="w-full md:w-1/2 flex flex-col items-start md:items-start justify-center py-8 md:py-0">
            <h3 className="text-4xl md:text-6xl font-agency font-bold text-white tracking-widest uppercase leading-tight mb-4">
              BLACK <br />
              FRIDAY <br />
              SALE
            </h3>
            <p className="text-xs md:text-sm font-sans text-gray-300 tracking-wide mb-6">
              Discount of up to 50% on select style.
            </p>
            <button className="bg-white text-black px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition duration-300">
              SHOP SALE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlackFridayBanner;
