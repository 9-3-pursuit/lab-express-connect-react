// Dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Component
import NavBar from "./Components/NavBar";

// Pages
import Edit from "./Pages-Links/Edit";
import FourOFour from "./Pages-Links/FourOFour";
import Home from "./Pages-Links/Home";
import Index from "./Pages/Index";
import New from "./Pages-Links/New";
import Show from "./Pages-Links/Show";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/logs" element={<Index />}></Route>
            <Route path="/logs/:index" element={<Show />}></Route>
            <Route path="/logs/new" element={<New />}></Route>
            <Route path="/logs/:index/edit" element={<Edit />}></Route>
            <Route path="*" element={<FourOFour />}></Route>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
