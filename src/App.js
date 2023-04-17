import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Components
import NavBar from "./Components/NavBar";

//Pages 
 import Home from "./Components/Home";
 import Logs from "./Components/Logs";
 import Show from "./Components/Show";
 import Edit from "./Components/Edit"
 import NewLog from "./Components/NewLog";
 import FourOFour from "./Components/FourOFour" 


//  import FourOFour from "./Pages/FourOFour";
 

function App() {
  return (
    <div className="App">
  <Router>
   <NavBar />
   <main>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/logs/:index" element={<Show />} />
          <Route path="/logs/:index/edit" element={<Edit />} />
          <Route path="/logs/newlog" element={<NewLog />} />
          <Route path="*" element={<FourOFour />} />

    </Routes>
  </main>
</Router>
 </div>
);
}

export default App;