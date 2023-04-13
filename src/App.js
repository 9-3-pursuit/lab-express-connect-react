import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import NewLogForm from "./Components/NewLogForm";
import EditLogForm from "./Components/EditLogForm";
import LogDetails from "./Components/LogDetails";
import LogsIndex from ".?Componenets/LogsIndex";
import Home from "./Pages-Links/Home";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/logs" element={<LogsIndex />}></Route>
        <Route path="/logs/:index" element={<LogDetails />}></Route>
        <Route path="/logs/new" element={<NewLogForm />}></Route>
        <Route path="/logs/:index/edit" element={<EditLogForm />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
