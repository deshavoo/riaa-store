import top1 from "../assets/top1.jpg";
import top2 from "../assets/top2.jpg";
import top3 from "../assets/top3.jpg";
import top4 from "../assets/top4.jpg";

// استورد الصور التانية اللي عايزها تظهر وقت الـ Hover (غير الأسماء حسب صورك)
import top1Hover from "../assets/top1h.jpg";
import top2Hover from "../assets/top2h.jpg";
import top3Hover from "../assets/top3h.jpg";
import top4Hover from "../assets/top4h.jpg";

import sideModel from "../assets/topP.jpg";

const StatementTops = () => {
  const products = [
    {
      id: 1,
      title: "Alex Metallic Top",
      price: "$229.00",
      sizes: ["XS", "S", "M", "L", "XL"],
      image: top1,
      imageHover: top1Hover, // الصورة التانية وقت الهافر
      colors: ["bg-gray-300", "bg-stone-600", "bg-black"],
    },
    {
      id: 2,
      title: "Ayden Fring Top In Noir",
      price: "$299.00",
      sizes: ["XS", "S", "M", "L", "XL"],
      image: top2,
      imageHover: top2Hover,
      colors: ["bg-black", "bg-amber-900"],
    },
    {
      id: 3,
      title: "Ayden Top In bone",
      price: "$199.00",
      sizes: ["XS", "S", "M", "L", "XL"],
      image: top3,
      imageHover: top3Hover,
      colors: ["bg-stone-200", "bg-stone-400"],
    },
    {
      id: 4,
      title: "Ayden Top In Noir",
      price: "$299.00",
      sizes: ["XS", "S", "M", "L", "XL"],
      image: top4,
      imageHover: top4Hover,
      colors: ["bg-black"],
    },
  ];

  return (
    <section className="w-full bg-[#593228] text-white py-16 px-4 md:px-12">
      {/* البانر العلوي */}
      <div className="grid grid-cols-1 md:grid-cols-2 mb-20 bg-[#e8e4dc]">
        <div className="w-full h-112.5 md:h-137.5 overflow-hidden">
          <img
            src={sideModel}
            alt="Statement Tops Collection"
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="flex flex-col items-center justify-center p-8 text-black text-center font-agency">
          <span className="text-xs uppercase tracking-widest text-gray-600 mb-2">
            Collection
          </span>
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-widest leading-none mb-3">
            STATEMENT TOPS
          </h2>
          <p className="text-sm tracking-wide text-gray-700 mb-6 font-sans">
            Luxe textures , refined cuts
          </p>
          <div className="flex items-center space-x-4">
            <button className="bg-black text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition">
              SHOP NOW
            </button>
            <button className="border border-black bg-transparent px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition">
              Explore look
            </button>
          </div>
        </div>
      </div>

      {/* شبكة المنتجات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center group">
            {/* حاوية الصورة */}
            <div className="w-full aspect-3/4 overflow-hidden bg-gray-200 relative mb-4 cursor-pointer">
              {/* الصورة الأساسية */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
              />

              {/* الصورة التانية (تظهر وقت الهافر) */}
              <img
                src={product.imageHover}
                alt={`${product.title} hover`}
                className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:scale-105"
              />

              {/* زر Choose Options */}
              <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur-md text-white text-center py-2 text-xs font-agency tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg z-10">
                CHOOSE OPTIONS
              </div>
            </div>

            {/* تفاصيل المنتج */}
            <h3 className="text-lg font-agency font-bold tracking-widest uppercase text-white text-center">
              {product.title}
            </h3>
            <p className="text-sm font-sans tracking-wide text-gray-200 mt-1">
              {product.price}
            </p>

            {/* حاوية السايزات والألوان اللي بتظهر وقت الهافر */}
            <div className="flex flex-col items-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 ease-in-out h-0 group-hover:h-15 overflow-hidden">
              {/* عرض الـ 5 سايزات */}
              <div className="flex items-center space-x-2 text-xs font-sans text-gray-300 tracking-wider mt-1.5">
                {product.sizes.map((size, index) => (
                  <span
                    key={index}
                    className="hover:text-white transition cursor-pointer"
                  >
                    {size}
                    {index < product.sizes.length - 1 && (
                      <span className="text-gray-600 ml-1">/</span>
                    )}
                  </span>
                ))}
              </div>

              {/* دوائر الألوان */}
              <div className="flex items-center space-x-2 mt-2.5">
                {product.colors.map((colorClass, index) => (
                  <span
                    key={index}
                    className={`w-3 h-3 rounded-full ${colorClass} border border-white/50 shadow-sm inline-block cursor-pointer hover:scale-110 transition`}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatementTops;
