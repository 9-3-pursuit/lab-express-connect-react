import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import Home from "./components/Home.jsx"
import Nav from "./components/Nav.jsx"
import Logs from "./components/Logs.jsx"
import LogsIndex from "./components/LogsIndex.jsx"
import NewLog from "./components/NewLog.jsx"
import LogEdit from "./components/LogEdit.jsx";

function App() {
 
  return (
  <BrowserRouter>
      <Nav/>
    <Routes>
      <Route path="/logs" element={<Logs />}/> 
      <Route path="/logs/:index" element={<LogsIndex />}/>
      <Route path="/logs/new" element={<NewLog />}/> 
      <Route path="/logs/:index/edit" element={<LogEdit />}/> 
    </Routes>
  </BrowserRouter>
  )
}

export default App;
