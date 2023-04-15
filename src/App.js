import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Error404 from "./Components/Error404";
import Logs from "./Components/Logs";
import LogsIndex from "./Components/LogIndex";
import Form from "./Components/Form";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logs" element={<Logs />} />
        <Route path="/logs/:index" element={<LogsIndex />} />
        <Route path="/logs/:index/edit" element={<Form type="edit" />} />
        <Route path="/logs/new" element={<Form type="new" />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}
