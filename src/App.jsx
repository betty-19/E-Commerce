


import { Routes,Route } from "react-router-dom"
import SummerSale from "./components/SummerSale/SummerSale"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Wishlist from "./pages/Wishlist/Wishlist";
import NotFound from "./pages/NotFound/NotFound";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart"
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
           <Route path="/signup" element={<SignUp />} />
           <Route path="/login" element={<Login />} />
           <Route path="/cart" element={<Cart/>}/>

        </Routes>
      </main>
      <Footer />
    </>
  );
}


export default App
