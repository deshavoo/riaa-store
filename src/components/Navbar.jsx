import { useState, useEffect } from "react";
import { Search, User, ShoppingCart, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-5 text-white transition-all duration-500 ease-in-out
      ${
        isScrolled ? "bg-black/50 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="text-4xl tracking-widest cursor-pointer font-cinzel">
        RIAA
      </div>

      <ul className="hidden md:flex items-center space-x-6 text-sm uppercase tracking-widest font-agency">
        {["Clothing", "Dresses", "Tops", "Sale", "Lookbook", "Section"].map(
          (item) => (
            <li
              key={item}
              className="flex items-center gap-1 cursor-pointer hover:text-gray-200 transition duration-300"
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
        <Search
          size={20}
          className="cursor-pointer hover:text-gray-200 transition"
        />
        <User
          size={20}
          className="cursor-pointer hover:text-gray-200 transition"
        />
        <ShoppingCart
          size={20}
          className="cursor-pointer hover:text-gray-200 transition"
        />
      </div>
    </nav>
  );
};

export default Navbar;
