import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import ProductsSection from "./components/ProductsSection";
import StatementTops from "./components/StatementTops";

function App() {
  return (
    <div className="relative min-h-screen w-full bg-black">
      <Navbar />
      <Hero />
      <Marquee />
      <ProductsSection />
      <StatementTops />
    </div>
  );
}

export default App;
