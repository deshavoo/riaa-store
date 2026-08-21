import React, { useState, useEffect } from "react";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";

const ProductsSection = () => {
  // حالة العداد التنازلي
  const [timeLeft, setTimeLeft] = useState({
    days: 13,
    hours: 4,
    minutes: 53,
    seconds: 11,
  });

  // منطق العداد يشتغل كل ثانية
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const products = [
    { id: 1, title: "EFFORTLESS COMFORT", price: "$399.00", image: product4 },
    { id: 2, title: "ELEGANT & CHIC", price: "$289.00", image: product3 },
    { id: 3, title: "CASUAL ELEGANCE", price: "$229.00", image: product2 },
    { id: 4, title: "MODERN CHIC", price: "$219.00", image: product1 },
  ];

  return (
    <section className="py-20 px-8 md:px-16 bg-[#faf9f6]">
      <h2 className="text-center text-4xl md:text-5xl font-agency font-bold uppercase tracking-widest mb-12 text-black">
        Find The Perfect Piece
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center">
            {/* تم تغيير aspect-3/4 إلى aspect-[3/4] ليعمل مع Tailwind */}
            <div className="w-full aspect-3/4 overflow-hidden bg-gray-200">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-500 cursor-pointer"
              />
            </div>
            <h3 className="mt-4 text-lg font-agency font-bold tracking-widest uppercase text-center text-black">
              {product.title}
            </h3>
            <p className="text-md font-sans text-black">{product.price}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#f0ead6] p-8 flex flex-col lg:flex-row items-center justify-between text-[#6b3c3c]">
        <div className="font-agency text-lg tracking-widest uppercase mb-6 lg:mb-0">
          Get it before it's gone
        </div>

        <div className="flex items-center space-x-6 font-agency mb-6 lg:mb-0">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item, index) => (
            <React.Fragment key={item.label}>
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-bold leading-none">
                  {String(item.value).padStart(2, "0")}
                </span>
                <span className="text-[10px] uppercase tracking-widest mt-1">
                  {item.label}
                </span>
              </div>
              {index < 3 && (
                <span className="text-3xl font-light opacity-50 mb-4">|</span>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="font-agency text-sm md:text-base tracking-widest uppercase mb-6 lg:mb-0">
          Get 30% off on our seasonal sale!
        </div>

        <button className="bg-[#593228] text-[#f0ead6] px-8 py-3 text-sm font-agency font-bold tracking-widest uppercase hover:bg-[#3d211a] transition duration-300 rounded-lg">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default ProductsSection;
