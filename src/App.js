// import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogsIndex from "./Components/LogsIndex";
import LogDetails from "./Components/LogDetails";
import NavBar from "./Components/NavBar"
import NewLogForm from "./Components/NewLogForm";
import EditLogForm from "./Components/EditLogForm";


function App() {

// useEffect(() => {
//   fetch("http:localhost:3333/logs")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data)
//   })
// }, [])
   
  return(
    <div>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LogsIndex />} />
        <Route path="/logs" element={<LogsIndex />} />
        <Route path="/logs/:index" element={<LogDetails />} />
        <Route path="/logs/new" element={<NewLogForm />} />
        <Route path="/logs/:index/edit" element={<EditLogForm />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
