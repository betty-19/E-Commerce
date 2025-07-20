import { Routes, Route } from "react-router-dom";
import SummerSale from "./components/SummerSale/SummerSale";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Wishlist from "./pages/Wishlist/Wishlist";
import NotFound from "./pages/NotFound/NotFound";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"; 

function App() {
  return (
    <>
      <SummerSale />
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          {/*  Protected Routes */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/wishlist"
            element={
              <ProtectedRoute>
                <Wishlist />
              </ProtectedRoute>
            }
          />
          <Route
            path="/productDetails"
            element={
              <ProtectedRoute>
                <ProductDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
