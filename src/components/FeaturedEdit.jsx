import product1 from "../assets/FE1.jpg";
import product2 from "../assets/FE2.jpg";
import product3 from "../assets/FE3.jpg";
import product4 from "../assets/FE4.jpg";

const FeaturedEdit = () => {
  const products = [
    {
      id: 1,
      title: "Piper Dress In Noir",
      price: "$289.00",
      image: product1,
      sizes: ["XS", "S", "M", "L"],
      colors: ["bg-black", "bg-stone-700"],
    },
    {
      id: 2,
      title: "Harper Blazer In Navy Pinstripe",
      price: "$399.00",
      image: product2,
      sizes: ["S", "M", "L", "XL"],
      colors: ["bg-blue-950"],
    },
    {
      id: 3,
      title: "Dakota Maxi Skirt",
      price: "$229.00",
      image: product3,
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["bg-stone-300", "bg-stone-500"],
    },
    {
      id: 4,
      title: "Ellie Strap Top",
      price: "$318.00",
      image: product4,
      sizes: ["XS", "S", "M"],
      colors: ["bg-amber-950", "bg-black"],
    },
  ];

  return (
    <section className="w-full bg-[#fcfbf9] text-black py-20 px-6 md:px-12">
      {/* رأس السكشن (Title + Shop All Button) */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-gray-300 pb-6">
        <h2 className="text-4xl md:text-5xl font-agency font-bold tracking-widest uppercase">
          FEATURED EDIT
        </h2>
        <button className="mt-4 md:mt-0 border border-black px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition duration-300 rounded-lg">
          SHOP ALL
        </button>
      </div>

      {/* شبكة المنتجات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center group cursor-pointer"
          >
            {/* حاوية الصور */}
            <div className="w-full aspect-3/4 overflow-hidden bg-gray-100 relative mb-4">
              {/* الصورة الأساسية مع زووم خفيف عند الهافر */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* زر CHOOSE OPTIONS اللي بيظهر وقت الهافر فوق الصورة */}
              <div className="absolute bottom-3 left-3 right-3 bg-black/80 backdrop-blur-md text-white text-center py-2.5 text-xs font-agency tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg z-10">
                CHOOSE OPTIONS
              </div>
            </div>

            {/* تفاصيل المنتج الأساسية (الاسم والسعر) */}
            <h3 className="text-sm md:text-base font-agency font-medium tracking-wide uppercase text-center text-gray-900">
              {product.title}
            </h3>
            <p className="text-sm font-sans tracking-wide text-gray-700 mt-1">
              {product.price}
            </p>

            {/* حاوية المقاسات والألوان (مخفية وتظهر بانسيابية عند الهافر تحت السعر) */}
            <div className="flex flex-col items-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 ease-in-out h-0 group-hover:h-16 overflow-hidden">
              {/* عرض المقاسات */}
              <div className="flex items-center space-x-1.5 text-xs font-sans text-gray-600 tracking-wider mt-2">
                {product.sizes.map((size, index) => (
                  <span key={index} className="hover:text-black transition">
                    {size}
                    {index < product.sizes.length - 1 && (
                      <span className="text-gray-400 ml-1">/</span>
                    )}
                  </span>
                ))}
              </div>

              {/* دوائر الألوان */}
              <div className="flex items-center space-x-2 mt-2">
                {product.colors.map((colorClass, index) => (
                  <span
                    key={index}
                    className={`w-3 h-3 rounded-full ${colorClass} border border-gray-400 shadow-sm inline-block`}
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

export default FeaturedEdit;
