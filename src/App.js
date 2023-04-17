import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar, Home, LogsIndex, ShowLog, NewLog } from "./components";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logs" element={<LogsIndex />} />
          <Route path="/logs/new" element={<NewLog />} />
          <Route path="/logs/:index" element={<ShowLog />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
