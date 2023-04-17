import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar, Home } from "./components";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
