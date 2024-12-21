import { BrowserRouter,Routes,Route } from "react-router-dom"

import Signup from "./pages/Signup"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
