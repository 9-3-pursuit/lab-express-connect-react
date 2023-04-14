import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App"> 
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={} />
            <Route path="/logs" element={} />
            <Route path="/logs" element={} />
            <Route path="/logs/:index" element={} />
            <Route path="/logs/:index/edit" element={} />
            <Route path="*" element={} />

          </Routes>
        </main>
      </Router>
    </div>
  ) 
}

export default App;
