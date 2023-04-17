// import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogsIndex from "./Components/LogsIndex";
import LogDetails from "./Components/LogDetails";
import NavBar from "./Components/NavBar"
import NewLogForm from "./Components/NewLogForm";
import EditLogForm from "./Components/EditLogForm";
import Home from "./Pages/Home";
import Four0Four from "./Pages/Four0Four"


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
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logs" element={<LogsIndex />} />
        <Route path="/logs/:index" element={<LogDetails />} />
        <Route path="/logs/new" element={<NewLogForm />} />
        <Route path="/logs/:index/edit" element={<EditLogForm />} />
        <Route path="/*" element={<Four0Four />} />
      </Routes>
      </main>
    </Router>
  </div>
  );
}

export default App;
