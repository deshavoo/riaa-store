import heroImg from "../assets/Hero.jpg";

const Hero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-between"
      style={{
        // استبدل الرابط ده بصورة الموديل الحقيقية أو مسار الصورة عندك في مجلد public
        backgroundImage: `url(${heroImg})`,
      }}
    >
      {/* طبقة عتمة خفيفة (Overlay) عشان النصوص تكون واضحة تماماً زي الصورة */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      {/* مساحة فاضية فوق عشان الـ Navbar الشفاف ياخد راحته */}
      <div className="pt-28"></div>

      {/* محتوى الهيرو (النصوص والأزرار على الشمال وتحت) */}
      <div className="relative z-10 px-8 md:px-16 pb-16 text-white max-w-2xl font-agency">
        <h1 className="text-6xl md:text-7xl font-bold uppercase tracking-wider leading-[0.9]">
          A PAIR IN <br /> MOTION
        </h1>

        <p className="mt-3 text-sm md:text-base font-sans tracking-wide text-gray-200">
          Fluid satin separate that move together beautifully.
        </p>

        {/* الأزرار المفرغة (Outline Buttons) */}
        <div className="mt-6 flex items-center space-x-4">
          <button className="border border-white bg-transparent px-8 py-2.5 text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition duration-300">
            SHOP NOW
          </button>
          <button className="border border-white bg-transparent px-8 py-2.5 text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition duration-300">
            LOOKBOOK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
