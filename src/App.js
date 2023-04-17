// import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogDetails from "./Components/logDetails";
import NavBar from "./Components/NavBar"
import NewLogForm from "./Components/newLogForm";


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
        {/* <Route path="/" element={<logsIndex />} /> */}
        <Route path="/logs" element={<logsIndex />} />
        <Route path="/logs/:index" element={<LogDetails />} />
        <Route path="/logs/new" element={<NewLogForm />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
