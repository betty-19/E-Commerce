


import { Routes,Route } from "react-router-dom"
import SummerSale from "./components/SummerSale/SummerSale"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Wishlist from "./pages/Wishlist/Wishlist";
import NotFound from "./pages/NotFound/NotFound";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

// import './App.css'


function App() {
  return (
    <>
      <SummerSale />
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/wishlist" element={<Wishlist />} />
           <Route path="/notfound" element={<NotFound />} />
           <Route path="/productDetails" element={<ProductDetails />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}


export default App
