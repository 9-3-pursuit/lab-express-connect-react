// dependencies 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages 
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

// components
import NavBar from "./Components/NavBar.js";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logs" element={<Index />} />
            <Route path="/logs/new" element={<New />} />
            <Route path="/logs/:index" element={<Show />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
