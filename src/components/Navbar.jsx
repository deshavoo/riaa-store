import { useState, useEffect } from "react";
import { Search, User, ShoppingCart, ChevronDown } from "lucide-react";
import megaMenuImg from "../assets/Hero.jpg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50"
      onMouseLeave={() => setActiveMenu(null)}
    >
      <nav
        className={`w-full flex items-center justify-between px-8 py-5 transition-all duration-500 ease-in-out
        ${
          activeMenu
            ? "bg-white text-black shadow-lg"
            : isScrolled
            ? "bg-black/30 backdrop-blur-md text-white"
            : "bg-transparent text-white"
        }`}
      >
        <div className="text-4xl tracking-widest cursor-pointer font-cinzel">
          RIAA
        </div>

        <ul className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest font-agency">
          {["Clothing", "Dresses", "Tops", "Sale", "Lookbook", "Section"].map(
            (item) => (
              <li
                key={item}
                className="relative flex items-center gap-1 cursor-pointer transition duration-300 py-2"
                onMouseEnter={() => {
                  if (item === "Clothing") setActiveMenu("Clothing");
                  else setActiveMenu(null);
                }}
                onClick={() => {
                  if (item === "Clothing") {
                    setActiveMenu(
                      activeMenu === "Clothing" ? null : "Clothing"
                    );
                  } else {
                    setActiveMenu(null);
                  }
                }}
              >
                {item}
                {(item === "Clothing" ||
                  item === "Dresses" ||
                  item === "Tops" ||
                  item === "Section") && <ChevronDown size={14} />}
              </li>
            )
          )}
        </ul>

        <div className="flex items-center space-x-5">
          <Search size={20} className="cursor-pointer transition" />
          <User size={20} className="cursor-pointer transition" />
          <ShoppingCart size={20} className="cursor-pointer transition" />
        </div>
      </nav>

      {/* شاشة الميجا منيو */}
      {activeMenu === "Clothing" && (
        <div className="w-full bg-[#fcfbf9] text-black shadow-2xl transition-all duration-300 animate-fadeIn border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            {/* العمود الأول: روابط عامة */}
            <div className="flex flex-col space-y-4 font-agency tracking-wider">
              <div className="flex flex-col space-y-2">
                {["Shop All", "New Arrivals", "Best Sellers"].map((subItem) => (
                  <span
                    key={subItem}
                    className="text-lg uppercase cursor-pointer hover:text-gray-600 transition"
                  >
                    {subItem}
                  </span>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-300 flex flex-col space-y-2">
                <span className="text-xs uppercase tracking-widest text-gray-500 mb-1 font-bold">
                  Featured
                </span>
                {[
                  "The City Edit",
                  "Spring Collection",
                  "Resort Collection",
                  "Sale",
                ].map((feat) => (
                  <span
                    key={feat}
                    className="text-sm uppercase cursor-pointer hover:text-gray-600 transition"
                  >
                    {feat}
                  </span>
                ))}
              </div>
            </div>

            {/* العمود الثاني: الأقسام الفرعية */}
            <div className="flex flex-col space-y-3 font-agency tracking-wider">
              {["Dresses", "Skirts", "Tops", "Pants", "Jackets", "Blazers"].map(
                (cat) => (
                  <span
                    key={cat}
                    className="text-lg uppercase cursor-pointer hover:text-gray-600 transition"
                  >
                    {cat}
                  </span>
                )
              )}
            </div>

            {/* العمود الثالث: صورة فخمة ترويجية للميجا منيو */}
            <div className="w-full h-80 overflow-hidden bg-gray-200 relative shadow-inner">
              <img
                src={megaMenuImg}
                alt="Clothing Mega Menu"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
