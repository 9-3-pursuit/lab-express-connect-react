import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
