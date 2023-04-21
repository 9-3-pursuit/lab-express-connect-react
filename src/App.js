import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components
import NavBar from "./Components/NavBar"

//pages
import Home from './Pages/Home'
 import Edit from './Pages/Edit'
import New from './Pages/New'
import Index from './Pages/Index'
import Show from './Pages/Show' 
import FourOFour from './Pages/FourOFour'
import Logs from "./Components/Log";


function App() {
  return (
  
   <Router>
    <NavBar />
      <main>
        <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/bookmarks" element={<Index />} /> 
       <Route path="/logs" element={<Logs />} />
       <Route path="/logs/new" element={<New />} />
       <Route path="/logs/:index" element={<Show />} />
       <Route path="/logs/:index/edit" element={<Edit />} />
       <Route path="*" element={<FourOFour />} />
        </Routes>
      </main>
    </Router>
 )
  
}


export default App;
