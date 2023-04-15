import NavBar from './commons/NavBar'
import Home from './components/Home'
import Logs from './components/Logs'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route element={<Home/>} path='/' />
        <Route element={<Logs/>} path='/logs' />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
