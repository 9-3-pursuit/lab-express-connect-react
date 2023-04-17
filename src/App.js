import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar, Home, LogsIndex } from "./components";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logs" element={<LogsIndex />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
