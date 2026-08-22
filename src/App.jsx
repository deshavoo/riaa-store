import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import ProductsSection from "./components/ProductsSection";
import StatementTops from "./components/StatementTops";
import FeaturedEdit from "./components/FeaturedEdit";
import ProductBanner from "./components/ProductBanner";
import BlackFridayBanner from "./components/BlackFridayBanner";

function App() {
  return (
    <div className="relative min-h-screen w-full bg-black">
      <Navbar />
      <Hero />
      <Marquee />
      <ProductsSection />
      <StatementTops />
      <ProductBanner />
      <BlackFridayBanner />
      <FeaturedEdit />
    </div>
  );
}

export default App;
