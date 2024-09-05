import Navbar from "./component/Navbar.jsx"
import Carousel from "./component/Carousel.jsx"
import './App.css'
import Home from "./Home.jsx"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Learning from "./component/Learning.jsx"
import Practice from "./component/Practice.jsx"
import Profile from "./component/Profile.jsx"
import Conversion from "./component/Conversion.jsx"
import Footer from "./component/Footer.jsx"

function App() {

console.log("Hello")
  return (
    <div className="min-h-screen">
    <Navbar></Navbar>
    <Routes>
      <Route  index element={<Home></Home>}></Route>
      <Route path="/learning" element={<Learning></Learning>}></Route>
      <Route path="/conversion" element={<Conversion></Conversion>}></Route>
      <Route path="/practice" element={<Practice></Practice>}></Route>
      <Route path="/profile" element={<Profile></Profile>}></Route>
    </Routes>
    <Footer></Footer>
  </div>
  )
}

export default App
