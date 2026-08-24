import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import ProductsSection from "./components/ProductsSection";
import StatementTops from "./components/StatementTops";
import FeaturedEdit from "./components/FeaturedEdit";
import ProductBanner from "./components/ProductBanner";
import BlackFridayBanner from "./components/BlackFridayBanner";
// import SaleLayout from "./components/sale-layout/SaleLayout";
import SalePage from "./pages/SalePage"; // الصفحة الجديدة
import RecreateTheLook from "./components/RecreateTheLook";
import TheCityEdit from "./components/TheCityEdit";

// صفحة الهوم الرئيسية
const Home = () => (
  <div className="relative min-h-screen w-full bg-black">
    <Hero />
    <Marquee />
    <ProductsSection />
    <StatementTops />
    <ProductBanner />
    <BlackFridayBanner />
    <FeaturedEdit />
    <RecreateTheLook />
    <TheCityEdit />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen w-full bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sale" element={<SalePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
