


import { Routes,Route } from "react-router-dom"
import SummerSale from "./components/SummerSale/SummerSale"

function App() {


  return (
    <Routes>
     <Route path='/' element={<SummerSale/>} />
    </Routes>
  )
}

export default App
