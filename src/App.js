import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar, Home, LogsIndex, ShowLog, NewLog, UpdateLog, Error } from "./components";

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
          <Route path="/logs/:index/edit" element={<UpdateLog />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
