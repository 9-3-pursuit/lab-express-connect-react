import NavBar from './commons/NavBar'
import Home from './pages/Home'
import Logs from './components/Logs'
import Log from './components/Log'
import CreateNewLog from './pages/CreateNewLog'
import FourOFour from './pages/FourOFour'


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
        <Route element={<EditForm />} path='/logs/:index/edit' />
        <Route element={<FourOFour/>} path='/*'/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
