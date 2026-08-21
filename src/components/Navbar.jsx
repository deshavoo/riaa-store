import { Search, User, ShoppingCart, ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 text-white">
      {/* Logo */}
      <div className="text-4xl tracking-widest cursor-pointer font-cinzel">
        RIAA
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex items-center space-x-6 text-sm uppercase tracking-widest font-agency">
        {["Clothing", "Dresses", "Tops", "Sale", "Lookbook", "Section"].map(
          (item) => (
            <li
              key={item}
              className="flex items-center gap-1 cursor-pointer hover:text-gray-300 transition duration-300"
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

      {/* Icons */}
      <div className="flex items-center space-x-5">
        <Search
          size={20}
          className="cursor-pointer hover:text-gray-300 transition"
        />
        <User
          size={20}
          className="cursor-pointer hover:text-gray-300 transition"
        />
        <ShoppingCart
          size={20}
          className="cursor-pointer hover:text-gray-300 transition"
        />
      </div>
    </nav>
  );
};

export default Navbar;
