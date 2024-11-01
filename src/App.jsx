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
import SignIn from "./component/SingIn.jsx"
import SignUp from "./component/SignUp.jsx"
import { useState } from "react"
import { signin,userContext } from "./context/CreateContext.jsx"

function App() {
  const [sign,setSign] = useState(true);
  const [user,setUser] = useState({});

console.log("Hello")
  return (
    <div className="min-h-screen">
     
  <userContext.Provider value={[user,setUser]}>    
    <signin.Provider value={[sign,setSign]}>
    { sign && <Navbar></Navbar>}
    <Routes>
      <Route  index element={<Home></Home>}></Route>
      <Route path="/learning" element={<Learning></Learning>}></Route>
      <Route path="/conversion" element={<Conversion></Conversion>}></Route>
      <Route path="/practice" element={<Practice></Practice>}></Route>
      <Route path="/profile" element={<Profile></Profile>}></Route>
      <Route path="/signin" element={<SignIn></SignIn>}></Route>
      <Route path="/signup" element={<SignUp></SignUp>}></Route>
    </Routes>
      </signin.Provider>
    </userContext.Provider>
  { sign &&  <Footer></Footer>}
    
  </div>
  )
}

export default App
