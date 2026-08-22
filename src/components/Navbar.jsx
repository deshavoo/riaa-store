import { useState, useEffect } from "react";
import { Search, User, ShoppingCart, ChevronDown } from "lucide-react";
import megaMenuImg from "../assets/clothingnav.jpg";
import dressesImg from "../assets/Hero.jpg";

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

  const handleMenuHover = (item) => {
    if (item === "Clothing" || item === "Dresses") {
      setActiveMenu(item);
    } else {
      setActiveMenu(null);
    }
  };

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
                onMouseEnter={() => handleMenuHover(item)}
                onClick={() => {
                  if (item === "Clothing" || item === "Dresses") {
                    setActiveMenu(activeMenu === item ? null : item);
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

      {/* 1. ميجا منيو CLOTHING */}
      {activeMenu === "Clothing" && (
        <div className="w-full bg-[#fcfbf9] text-black shadow-2xl transition-all duration-300 animate-fadeIn border-t border-gray-200">
          <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_1fr_2.5fr] items-center">
            {/* العمود الأول */}
            <div className="flex flex-col justify-center space-y-4 py-8 pl-12 pr-6 border-r border-gray-200 font-agency tracking-wider">
              <div className="flex flex-col space-y-2">
                {["SHOP ALL", "NEW ARRIVALS", "BEST SELLERS"].map((subItem) => (
                  <span
                    key={subItem}
                    className="text-lg uppercase tracking-widest cursor-pointer hover:text-gray-500 transition font-medium"
                  >
                    {subItem}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-200 flex flex-col space-y-1.5">
                <span className="text-[10px] uppercase tracking-widest text-gray-400 mb-1 font-semibold">
                  FEATURED
                </span>
                {[
                  "THE CITY EDIT",
                  "SPRING COLLECTION",
                  "RESORT COLLECTION",
                  "SALE",
                ].map((feat) => (
                  <span
                    key={feat}
                    className="text-xs uppercase tracking-widest text-gray-600 cursor-pointer hover:text-black transition"
                  >
                    {feat}
                  </span>
                ))}
              </div>
            </div>

            {/* العمود الثاني */}
            <div className="flex flex-col justify-center space-y-3 py-8 px-8 border-r border-gray-200 font-agency tracking-wider">
              {[
                "Dresses",
                "Skirtes",
                "Tops",
                "Bants",
                "Jackets",
                "Blazers",
              ].map((cat) => (
                <span
                  key={cat}
                  className="text-lg uppercase tracking-widest cursor-pointer hover:text-gray-500 transition font-medium"
                >
                  {cat}
                </span>
              ))}
            </div>

            {/* العمود الثالث: الصورة */}
            <div className="w-full h-80 overflow-hidden bg-[#fcfbf9] relative flex items-center justify-center">
              <img
                src={megaMenuImg}
                alt="Clothing Mega Menu"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      )}

      {/* 2. ميجا منيو DRESSES */}
      {activeMenu === "Dresses" && (
        <div className="w-full bg-[#fcfbf9] text-black shadow-2xl transition-all duration-300 animate-fadeIn border-t border-gray-200">
          <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_2.5fr] items-center">
            <div className="flex flex-col justify-center space-y-4 py-8 pl-16 pr-8 border-r border-gray-200 font-agency tracking-wider">
              {["ALL DRESSES", "MINIS", "MAXIS", "SKIRS"].map((dressItem) => (
                <span
                  key={dressItem}
                  className="text-xl uppercase tracking-widest cursor-pointer hover:text-gray-500 transition font-medium"
                >
                  {dressItem}
                </span>
              ))}
            </div>

            <div className="w-full h-80 overflow-hidden relative group">
              <img
                src={dressesImg}
                alt="Resort Collection"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
