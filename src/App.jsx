import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee"; // استيراد الماركيو
import ProductsSection from "./components/ProductsSection";

function App() {
  return (
    <div className="relative min-h-screen w-full bg-black">
      <Navbar />
      <Hero />
      <Marquee /> {/* الشريط المتحرك */}
      <ProductsSection />
    </div>
  );
}

export default App;
