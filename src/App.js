import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

 //Components
 import NavBar from "./Components/NavBar";

 //Pages 
  import Home from "./Pages/Home";
   import LogEditForm from "./Components/LogEditForm";
  import NewLog from "./Components/NewLog";
  // import Index from "./Pages/Index";
   import Show from "./Components/Show";
  // import FourOFour from "./Pages/FourOFour";
   import Logs from "./Components/Logs";

function App() {
   return (
  //  <div>Hello World</div>;
   <Router>
   <NavBar />
   <main>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/logs" element={<Logs />} />
     <Route path="/logs/:index" element={<Show />} />
      <Route path="/logs/:index/edit" element={<LogEditForm />} />
      <Route path="/logs/newLog" element={<NewLog />} />

     </Routes>
   </main>
 </Router>
// </div>
);
}
export default App;
