


import { Routes,Route } from "react-router-dom"
import SummerSale from "./components/SummerSale/SummerSale"
import Header from "./components/Header/Header"

function App() {


  return (
    <>
    <SummerSale/>
    <Routes>
     <Route path='/' element={<Header/>} />
    </Routes>
    </>
  )
}

export default App
