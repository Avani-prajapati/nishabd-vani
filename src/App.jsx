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
import { useEffect, useState } from "react"
import { signin,userContext } from "./context/CreateContext.jsx"
import axios from "axios"

function App() {
  const [sign, setSign] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5000/students/profile', {
      withCredentials: true,
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => {setUser(res.data);
    
      })
      .catch(console.error);
  }, []);
  

  const logout = () => localStorage.removeItem('token');

  return (
    <div className="min-h-screen">
      <userContext.Provider value={user}>
        <signin.Provider value={[sign, setSign]}>
          {sign && <Navbar />}
          <Routes>
            <Route index element={<Home />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/conversion" element={<Conversion />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/profile" element={<Profile logout={logout} />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </signin.Provider>
      </userContext.Provider>
      {sign && <Footer />}
    </div>
  );
}

export default App;
