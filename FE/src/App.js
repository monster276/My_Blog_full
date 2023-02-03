
import { Facebook } from '@mui/icons-material'
import Topbar from './components/TopBar/Topbar'
import Home from './pages/Home/Home'
import Single from './pages/Home/Single/Single'
import Write from './pages/Home/Write/Write'
import Login from './pages/Login/Login'
import Setting from './pages/Setting/Setting'
import Register from './pages/Register/Register'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from 'react'
import { Context } from './context/Context'
function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Topbar></Topbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user? <Home/>:<Register/>} />
        <Route path="/login" element={user? <Home/> : <Login />} />
        <Route path="/write" element={user? <Write/> : <Home/>} />
        <Route path="/setting" element={user? <Setting/> : <Register/>} />
        <Route path="/post/:postId" element={<Single/>} />
        
      </Routes>
      
    </Router>
  )
}

export default App
