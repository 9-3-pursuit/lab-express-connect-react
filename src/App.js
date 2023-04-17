import NavBar from './commons/NavBar'
import Home from './pages/Home'
import Logs from './components/Logs'
import Log from './components/Log'
import CreateNewLog from './pages/CreateNewLog'
// import Index from './pages/Index';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditForm from './pages/EditForm';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route element={<CreateNewLog/>} path='/logs/new' />
        <Route element={<Home/>} path='/' />
        <Route element={<Logs />} path='/logs' />
        <Route element={<Log />} path='/logs/:index' />
        <Route element={<EditForm/>} path='/logs/:index/edit'/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
