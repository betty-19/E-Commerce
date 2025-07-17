


import { Routes,Route } from "react-router-dom"
import SummerSale from "./components/SummerSale/SummerSale"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
function App() {


  return (
    <>
    <SummerSale/>
    <Header/>
    <Routes>
     <Route path='/' element={<Home/>} />
     
    </Routes>
    <Footer/>
    </>
  )
}

export default App
