//Dependecies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import LogsIndex from "./pages/LogsIndex";
import ShowLog from "./pages/ShowLog";
import NewLog from "./pages/NewLog";
import EditLog from "./pages/EditLog";
import FourOFour from "./pages/FourOFour";

//Components
import Nav from "./components/Nav";


function App() {
  return ( 
  <div className="App">
    <Router>
      <Nav/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logs" element={<LogsIndex />} />
          <Route path="/logs/new" element={<NewLog />} />
          <Route path="/logs/:index" element={<ShowLog />} />
          <Route path="/logs/:index/edit" element={<EditLog />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </main>
    </Router>
  </div>
  );
}

export default App;
