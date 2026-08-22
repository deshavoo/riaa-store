import { useState, useEffect } from "react";
import {
  Search,
  User,
  ShoppingCart,
  ChevronDown,
  X,
  Package,
  ArrowRight,
} from "lucide-react";
import megaMenuImg from "../assets/clothingnav.jpg";
import dressesImg from "../assets/dressesnav.jpg";
import topsImg from "../assets/topsnav.jpg";
import sectionImg from "../assets/sectionnav.jpg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // الحالة المضافة لعربة التسوق

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
    if (["Clothing", "Dresses", "Tops", "Section"].includes(item)) {
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
                  if (
                    ["Clothing", "Dresses", "Tops", "Section"].includes(item)
                  ) {
                    setActiveMenu(activeMenu === item ? null : item);
                  } else {
                    setActiveMenu(null);
                  }
                }}
              >
                {item}
                {["Clothing", "Dresses", "Tops", "Section"].includes(item) && (
                  <ChevronDown size={14} />
                )}
              </li>
            )
          )}
        </ul>

        <div className="flex items-center space-x-5">
          <Search
            size={20}
            className="cursor-pointer transition hover:text-gray-400"
            onClick={() => {
              setIsSearchOpen(true);
              setIsAuthOpen(false);
              setIsCartOpen(false);
            }}
          />
          <User
            size={20}
            className="cursor-pointer transition hover:text-gray-400"
            onClick={() => {
              setIsAuthOpen(!isAuthOpen);
              setIsSearchOpen(false);
              setIsCartOpen(false);
            }}
          />
          <ShoppingCart
            size={20}
            className="cursor-pointer transition hover:text-gray-400"
            onClick={() => {
              setIsCartOpen(true);
              setIsSearchOpen(false);
              setIsAuthOpen(false);
            }}
          />
        </div>
      </nav>

      {/* 1. ميجا منيو CLOTHING */}
      {activeMenu === "Clothing" && (
        <div className="w-full bg-[#fcfbf9] text-black shadow-2xl transition-all duration-300 animate-fadeIn border-t border-gray-200">
          <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_1fr_2.5fr] items-center">
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
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-162.5 bg-white text-black shadow-2xl transition-all duration-300 animate-fadeIn border border-gray-200">
          <div className="grid grid-cols-2 items-stretch">
            <div className="flex flex-col justify-center space-y-4 py-10 px-10 border-r border-gray-200 font-agency tracking-wider">
              {["ALL DRESSES", "MINIS", "MAXIS", "SKIRS"].map((dressItem) => (
                <span
                  key={dressItem}
                  className="text-lg uppercase tracking-widest cursor-pointer hover:text-gray-500 transition font-medium"
                >
                  {dressItem}
                </span>
              ))}
            </div>

            <div className="w-full h-70 overflow-hidden relative group">
              <img
                src={dressesImg}
                alt="Resort Collection"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-white text-center p-4">
                <h3 className="text-xl font-cinzel tracking-widest uppercase mb-2">
                  RESORT COLLECTION
                </h3>
                <button className="border border-white px-5 py-2 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition duration-300">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeMenu === "Tops" && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-162.5 bg-white text-black shadow-2xl transition-all duration-300 animate-fadeIn border border-gray-200">
          <div className="grid grid-cols-2 items-stretch">
            <div className="flex flex-col justify-center space-y-4 py-10 px-10 border-r border-gray-200 font-agency tracking-wider">
              {["ALL TOPS", "SHIRTS", "BLAZERS", "CROP TOPS"].map((topItem) => (
                <span
                  key={topItem}
                  className="text-lg uppercase tracking-widest cursor-pointer hover:text-gray-500 transition font-medium"
                >
                  {topItem}
                </span>
              ))}
            </div>

            <div className="w-full h-70 overflow-hidden relative group">
              <img
                src={topsImg}
                alt="Newest Releases"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-white text-center p-4">
                <h3 className="text-xl font-cinzel tracking-widest uppercase mb-2">
                  NEWEST RELEASES
                </h3>
                <button className="border border-white px-5 py-2 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition duration-300">
                  DISCOVER
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeMenu === "Section" && (
        <div className="w-full bg-[#fcfbf9] text-black shadow-2xl transition-all duration-300 animate-fadeIn border-t border-gray-200">
          <div className="w-full grid grid-cols-1 md:grid-cols-[1.1fr_1fr_1fr] items-center">
            <div className="w-full h-80 overflow-hidden relative group border-r border-gray-200">
              <img
                src={sectionImg}
                alt="Shoppable Sections"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-white text-center p-4">
                <h3 className="text-2xl font-cinzel tracking-widest uppercase mb-3">
                  SHOPPABLE SECTIONS
                </h3>
                <button className="border border-white px-6 py-2 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition duration-300">
                  DESCOVER
                </button>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-4 py-8 px-12 border-r border-gray-200 font-agency tracking-wider">
              {[
                "COLLECTIONS + PRODUCTS",
                "GRIDS + GALLERIES",
                "HREOS + SLIDESHOWS",
                "MEDIA WITH CONTENT",
                "MULTIOLUMN",
              ].map((secItem) => (
                <span
                  key={secItem}
                  className="text-lg uppercase tracking-widest cursor-pointer hover:text-gray-500 transition font-medium"
                >
                  {secItem}
                </span>
              ))}
            </div>

            <div className="flex flex-col justify-center space-y-4 py-8 px-12 font-agency tracking-wider">
              {[
                "PROMOS + SALES",
                "QUOTES + TESTIMDIALS",
                "RICH CONTENT",
                "SGOPPABLE",
              ].map((secItem2) => (
                <span
                  key={secItem2}
                  className="text-lg uppercase tracking-widest cursor-pointer hover:text-gray-500 transition font-medium"
                >
                  {secItem2}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm transition-opacity">
          <div className="w-full md:w-112.5 bg-black text-white h-full shadow-2xl p-8 flex flex-col justify-between animate-slideLeft border-l border-zinc-800">
            <div>
              <div className="flex justify-end mb-8">
                <X
                  size={24}
                  className="cursor-pointer text-gray-400 hover:text-white transition"
                  onClick={() => setIsSearchOpen(false)}
                />
              </div>

              <div className="relative border-b border-gray-700 pb-3 mb-10 flex items-center">
                <Search size={18} className="text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="what are you looking for?"
                  className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none text-sm tracking-wider font-agency"
                  autoFocus
                />
              </div>

              <div className="font-agency tracking-wider">
                <h4 className="text-xs uppercase text-gray-500 mb-6 font-semibold">
                  popular collections
                </h4>
                <div className="flex flex-col space-y-4">
                  {["Dresses", "Tops", "Sale", "the city edit"].map((coll) => (
                    <span
                      key={coll}
                      className="text-base uppercase tracking-widest cursor-pointer hover:text-gray-400 transition"
                      onClick={() => setIsSearchOpen(false)}
                    >
                      {coll}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-xs text-gray-600 font-agency tracking-widest">
              RIAA LUXURY STORE
            </div>
          </div>
        </div>
      )}

      {isAuthOpen && (
        <div className="absolute right-8 top-20 w-95 bg-white text-black shadow-2xl rounded-lg p-6 z-50 border border-gray-200 animate-fadeIn font-agency tracking-wider">
          <div className="flex items-center justify-between pb-4 border-b border-gray-100">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-black">
              Sign in or create account
            </h3>
            <X
              size={18}
              className="cursor-pointer text-gray-400 hover:text-black transition"
              onClick={() => setIsAuthOpen(false)}
            />
          </div>

          <div className="mt-5 flex items-center justify-between p-3 bg-gray-50 rounded border border-gray-200 hover:border-black transition cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold">
                R
              </div>
              <span className="text-xs uppercase font-medium text-gray-800">
                Member Access
              </span>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-black flex items-center gap-1 hover:underline">
              Shop <ArrowRight size={12} />
            </span>
          </div>

          <div className="relative flex py-5 items-center">
            <div className="grow border-t border-gray-200"></div>
            <span className="shrink mx-4 text-[10px] uppercase text-gray-400 tracking-widest">
              or
            </span>
            <div className="grow border-t border-gray-200"></div>
          </div>

          <div className="relative border border-gray-300 rounded px-3 py-2.5 flex items-center focus-within:border-black transition">
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-transparent text-black placeholder-gray-400 focus:outline-none text-xs uppercase tracking-wider"
            />
            <button className="text-black hover:opacity-70 transition ml-2">
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="mt-3 flex items-center space-x-2">
            <input
              type="checkbox"
              id="news"
              className="rounded border-gray-300 text-black focus:ring-black cursor-pointer"
            />
            <label
              htmlFor="news"
              className="text-[11px] text-gray-500 uppercase tracking-widest cursor-pointer select-none"
            >
              Email me with news and offers
            </label>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100 grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center space-x-2 border border-gray-300 py-2.5 rounded text-xs uppercase tracking-widest hover:bg-black hover:text-white hover:border-black transition">
              <Package size={14} />
              <span>Orders</span>
            </button>
            <button className="flex items-center justify-center space-x-2 border border-gray-300 py-2.5 rounded text-xs uppercase tracking-widest hover:bg-black hover:text-white hover:border-black transition">
              <User size={14} />
              <span>Profile</span>
            </button>
          </div>
        </div>
      )}

      {/* سلة التسوق الجانبية (Cart Slide-over Drawer المضافة حديثاً) */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm transition-opacity">
          <div className="w-full md:w-105 bg-black text-white h-full shadow-2xl p-8 flex flex-col justify-between animate-slideLeft border-l border-zinc-800 font-agency tracking-wider">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
                <h3 className="text-lg font-cinzel uppercase tracking-widest">
                  Your cart
                </h3>
                <X
                  size={22}
                  className="cursor-pointer text-gray-400 hover:text-white transition"
                  onClick={() => setIsCartOpen(false)}
                />
              </div>

              <div className="py-16 text-center flex flex-col items-center">
                <h4 className="text-xl font-cinzel tracking-widest uppercase mb-3 text-white">
                  YOUR CART IS EMPTY
                </h4>
                <p className="text-xs text-gray-400 tracking-wider mb-8">
                  Not sure where to start?
                  <br />
                  Try this collections:
                </p>

                <div className="w-full flex flex-col space-y-3">
                  {["ALL COLLECTIONS", "DRESSES", "CLOTHINGS"].map((col) => (
                    <button
                      key={col}
                      className="w-full border border-white/40 py-3.5 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition duration-300 font-semibold"
                      onClick={() => setIsCartOpen(false)}
                    >
                      {col}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center text-[10px] text-zinc-600 uppercase tracking-widest pb-2">
              Secure Checkout Powered by RIAA
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
