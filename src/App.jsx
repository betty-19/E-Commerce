


import { Routes,Route } from "react-router-dom"
import SummerSale from "./components/SummerSale/SummerSale"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
// import './App.css'


function App() {
  return (
    <>
      <SummerSale />
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}


export default App
