import Navbar from "../Navbar";
import FallFavesSection from "./FallFavesSection";
import HeroSales from "./HeroSaleSection";

export default function index() {
  return (
    <div>
      <Navbar />
      <HeroSales />
      <FallFavesSection />
    </div>
  );
}
